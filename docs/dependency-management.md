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

## 無料プランの注意点

- このリポジトリは**パブリック**のため、GitHub Actions は**無制限・無料**。分数の心配は不要
- Dependabot も無料

## 更新 PR の運用

- グループ PR(minor/patch): CI が通っていればそのままマージして良い
- major PR: 対象パッケージの CHANGELOG / 移行ガイドを確認し、必要ならローカルで動作確認してからマージする
