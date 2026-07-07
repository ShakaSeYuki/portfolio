# プロジェクト概要

このプロジェクトは西野友貴のポートフォリオサイトです。
React + TypeScript + Vite を使用したモダンなフロントエンド開発環境で構築されています。

## 画面構成
- **SKILL**: 使用可能な技術スタック（HTML5/CSS3, React, Angular, Java, AWS等）
- **WORKS**: 個人開発プロジェクト（ポモドーロタイマー、クレメアメーカー等）
- **ABOUT**: 経歴・プロフィール情報
- **CONTACT**: SNS等の連絡先

## 開発環境とセットアップ

### 必要な環境
- Node.js 18.0.0以上
- npm または yarn

### セットアップ手順
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（React版）
npm run dev

# 本番ビルド
npm run build

# 型チェック 
npm run type-check

# コードリンティング
npm run lint

# コード整形
npm run format

# 依存関係更新確認
npm outdated
```

## プロジェクト構造

```
portfolio/
├── src/                    # React アプリケーションソース
│   ├── components/         # Reactコンポーネント
│   │   ├── Header.tsx
│   │   ├── MainVisual.tsx
│   │   ├── Skills.tsx
│   │   ├── Works.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── PageTop.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── OptimizedImage.tsx
│   │   └── SEOHead.tsx
│   ├── context/           # React Context
│   │   └── ThemeContext.tsx
│   ├── hooks/             # カスタムフック
│   │   ├── useTheme.ts
│   │   ├── useIntersectionObserver.ts
│   │   ├── usePerformanceOptimization.ts
│   │   └── usePWA.ts
│   ├── styles/            # SCSS スタイルシート
│   │   ├── index.scss
│   │   ├── variables.scss
│   │   ├── themes.scss
│   │   ├── theme-toggle.scss
│   │   ├── animations.scss
│   │   ├── responsive.scss
│   │   └── performance.scss
│   ├── types/             # TypeScript 型定義
│   │   └── index.ts
│   ├── App.tsx            # メインアプリケーション
│   └── main.tsx           # エントリーポイント
├── css/                   # CSS リセット
│   └── ress.css          # CSS リセット（index.htmlから参照）
├── public/                # 静的アセット
│   ├── img/               # 画像ファイル
│   ├── manifest.json      # PWA マニフェスト
│   └── sw.js              # Service Worker
├── index.html             # React版 HTML（エントリーポイント）
├── package.json           # プロジェクト設定
├── tsconfig.json          # TypeScript設定
├── vite.config.ts         # Vite設定
├── .eslintrc.json         # ESLint設定
└── .prettierrc            # Prettier設定
```

## 重要なファイルとディレクトリ

### 核となるファイル
- `src/App.tsx`: メインコンポーネント
- `src/main.tsx`: React アプリケーションエントリーポイント
- `vite.config.ts`: ビルド設定とプラグイン
- `package.json`: 依存関係とスクリプト定義

### 設定ファイル
- `tsconfig.json`: TypeScript コンパイラ設定
- `.eslintrc.json`: コード品質チェック設定
- `.prettierrc`: コードフォーマット設定

### スタイル関連
- `src/styles/variables.scss`: 色・サイズ等の変数定義
- `src/styles/themes.scss`: ダークモード対応
- `src/styles/responsive.scss`: レスポンシブデザイン

### PWA関連
- `manifest.json`: アプリマニフェスト
- `sw.js`: Service Worker（オフライン対応）

## コーディング規約

### TypeScript/React スタイルガイド
- インデントは2スペース
- セミコロンは必須
- 変数名・関数名はcamelCase
- コンポーネント名はPascalCase
- 型定義はinterface優先
- React.FC型を明示的に指定
- propsには適切な型定義を付与

### SCSS スタイルガイド
- 変数は `$kebab-case` 形式
- ネスト階層は3レベルまで
- ミックスインを積極活用
- レスポンシブはmobile-first

### コメント規約
- 複雑なロジックには日本語でコメントを記載
- 関数の上部にJSDocスタイルのコメントを追加
- コンポーネントの役割を明記

## よくあるタスク

### 新しいコンポーネントの追加
1. `src/components/` に `.tsx` ファイルを作成
2. 型定義を `src/types/index.ts` に追加
3. 必要に応じてカスタムフックを作成
4. スタイルは既存のSCSS変数を活用

### スタイル修正
1. `src/styles/variables.scss` で変数確認
2. 適切なSCSSファイルで修正
3. レスポンシブ対応を忘れずに

### パフォーマンス改善
1. `OptimizedImage` コンポーネントを活用
2. `useIntersectionObserver` でアニメーション最適化
3. 画像のWebP対応推奨

## Codexでの作業指針

**重要**: このプロジェクトでの作業時は、以下の指針に従ってください。

### 言語設定
- **すべての回答とコメントは日本語で記述してください**
- コード内のコメントも日本語で記載
- 変数名は英語でも構いませんが、説明は日本語で

### コードレビューの観点
以下の点を重視してレビューしてください：
1. **可読性**: コードが理解しやすいか
2. **保守性**: 将来の変更に対応しやすいか
3. **パフォーマンス**: 効率的な実装になっているか
4. **セキュリティ**: 潜在的な脆弱性はないか
5. **テスト**: 適切なテストが書かれているか

### 提案形式
コードの改善提案をする際は、以下の形式を使用してください：

```markdown
## 改善提案

**問題点**: [具体的な問題を説明]
**解決策**: [提案する解決方法]
**理由**: [なぜその解決策が良いのか]

### 修正前
[既存のコード]

### 修正後
[改善されたコード]
```

### 質問への回答スタイル
- 簡潔で分かりやすい日本語で回答
- 必要に応じて具体例を提示
- 複数の選択肢がある場合は、それぞれのメリット・デメリットを説明

## 実装済み機能

### ✅ 完了した改善項目
1. **モダンなJavaScript**: jQuery → Vanilla JavaScript/TypeScript
2. **React化**: コンポーネントベース設計、型安全性
3. **SCSS導入**: 変数管理、ミックスイン活用
4. **パフォーマンス最適化**: 
   - WebP対応画像コンポーネント
   - IntersectionObserver活用
   - Core Web Vitals向上
5. **SEO強化**: 
   - 構造化データ（JSON-LD）
   - OGPメタタグ最適化
   - プリロード・プリフェッチ
6. **PWA対応**: 
   - Service Worker
   - アプリマニフェスト
   - オフライン機能
7. **ダークモード**: 
   - システム設定連動
   - 3テーマ対応（Light/Dark/System）
   - スムーズな切り替えアニメーション

### 🎯 今後の改善候補
- 多言語対応（日本語・英語）
- GitHub API連携（最新リポジトリ表示）
- アクセシビリティ強化
- E2Eテスト追加
- CI/CD構築

## 技術スタック

### フロントエンド
- **React 18**: UIライブラリ
- **TypeScript 5**: 型安全性
- **Vite 5**: 高速ビルドツール
- **SCSS**: CSS プリプロセッサ

### 開発ツール
- **ESLint**: コード品質
- **Prettier**: コード整形
- **Terser**: JavaScript最適化

### パフォーマンス
- **WebP画像**: 次世代フォーマット対応
- **Intersection Observer**: 効率的なアニメーション
- **Service Worker**: キャッシュ戦略

## 特記事項

### バージョン構成
- **React版のみ**: `index.html`（旧jQuery版は2026-07に削除済み）

### 開発方針
- 既存機能の互換性維持
- 段階的なモダン化アプローチ
- パフォーマンスファースト

## 参考リンク

### 技術ドキュメント
- [React公式ドキュメント](https://react.dev/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/)
- [Vite公式ドキュメント](https://vitejs.dev/)
- [SCSS公式ドキュメント](https://sass-lang.com/)

### パフォーマンス
- [Core Web Vitals](https://web.dev/vitals/)
- [PWA チェックリスト](https://web.dev/pwa-checklist/)

---

**Codex利用時の注意事項**: 
このプロジェクトに関するすべての質問や作業において、日本語での丁寧な回答をお願いします。技術的な説明も可能な限り分かりやすい日本語で表現してください。