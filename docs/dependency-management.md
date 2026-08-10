# 依存関係管理と CI

このリポジトリの依存関係更新(Dependabot)と CI(GitHub Actions)の構成をまとめたドキュメント。

## Dependabot

設定ファイル: [`.github/dependabot.yml`](../.github/dependabot.yml)

- **npm パッケージ**: 毎週月曜 9:00(JST)にチェック
  - minor / patch 更新は `minor-and-patch` グループとして 1 本の PR にまとめる
  - major 更新は個別 PR(破壊的変更の可能性があるため手動でレビューする)
  - 同時にオープンされる PR は最大 5 本
- **GitHub Actions**: ワークフローで使用しているアクションも毎週チェック

## CI

設定ファイル: [`.github/workflows/ci.yml`](../.github/workflows/ci.yml)

- トリガー: `main` への push / すべての Pull Request
- Node.js 24
- 実行内容:
  1. `npm ci`
  2. `npm run type-check` — `tsc --noEmit`
  3. `npm run build` — tsc + vite build

デプロイは既存の [`deploy.yml`](../.github/workflows/deploy.yml) が担当しており、この CI とは独立している。

## サプライチェーン攻撃への対策

- **cooldown**: 新バージョンの公開から一定日数(npm: patch 7日 / minor 14日 / major 30日、Actions: 14日 / major 30日)経過するまで更新 PR を作らない。乗っ取られたパッケージの汚染バージョンは通常数日以内に検出・削除されるため、この待機期間が防波堤になる
- **GitHub Actions の SHA 固定**: ワークフローで使うアクションはタグ(`@v7` など)ではなくコミット SHA で固定している。タグは後から悪意あるコミットに付け替えられる可能性があるため。バージョン更新は Dependabot が SHA ごと更新する
- **セキュリティ更新は即時**: 既知の脆弱性(GitHub Security Advisory)に対する Dependabot の修正 PR は cooldown を待たずに作られる
- **CI でも Takumi Guard を使用**: [`setup-takumi-guard-npm`](https://github.com/flatt-security/setup-takumi-guard-npm) アクションで CI の `npm ci` も Takumi Guard(既知の悪意あるパッケージをブロックするレジストリプロキシ)経由にしている。ローカルは `~/.npmrc` のグローバル設定で同じプロキシを使用

## 無料プランの注意点

- このリポジトリは**パブリック**のため、GitHub Actions は**無制限・無料**。分数の心配は不要
- Dependabot も無料

## 更新 PR の運用

- グループ PR(minor/patch): CI が通っていればそのままマージして良い
- major PR: 対象パッケージの CHANGELOG / 移行ガイドを確認し、必要ならローカルで動作確認してからマージする
