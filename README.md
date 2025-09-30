# BokuNoTodo

**ぼくの考えた最強のTODOアプリ — AIアシスト**
*The best to-do app I could think of — AI-assisted*

## 🎯 コンセプト

シンプルでありながら、AIの力を借りて生産性を最大化するTODOアプリです。
複雑な機能は省き、本当に必要な機能だけに絞ることで、使いやすさを追求しています。

## ✨ 主な特徴

### 🔹 シンプルであること
- 複雑にせず、機能を制限することでシンプルな使い心地を保つ
- TODOの登録と消し込みに特化

### 🎙️ 音声入力＋AI
- 喋ったらいい感じにタスクを作成して登録
- AIによるサブタスクへの自動分割
- 1ポモドーロ（25分）単位を基準としたタスク管理
- 40%楽観的に見積もる法則を考慮した時間見積もり

### ⏰ ポモドーロタイマー
- 1ポモ単位のタスクを選択して、すぐにタイマーを開始
- 作業時間の選択肢：
  - 1ポモドーロ（25分）
  - 90分集中（Ultradian Rhythm）
  - 集中が切れるまで（Flowtime Technique）
- 途中での切り替えが可能
- 2分タスクは差し込みで処理（集中の中断を考慮）
- 延長ボタンで柔軟な時間調整
- 通知抑制のON/OFF切り替え

### 📅 1日のスケジュール構築
- 登録されているTODOから選択して1日のスケジュールを構築
- AIによる自動スケジューリング機能
- **最重要タスクを朝イチに配置**（Eat That Frog）
- **重要なタスクを2-3個に限定**（MIT: Most Important Task）
- 隙間時間は適当にTODOから選んで埋める
- 1日の振り返りを記録（AIによる後日分析も可能）

## 🛠️ 技術スタック

### フロントエンド
- **React** + **TypeScript** - UIライブラリとタイプセーフ開発
- **Biome** - フォーマッタ・リンター
- **Rspack** - 高速なWebpack互換バンドラー
- **Tailwind CSS** - ユーティリティファーストCSSフレームワーク
- **Jotai** / **MobX** - 状態管理
- **Tanstack** - Query/Table/Routerの統合ソリューション

## 📁 プロジェクト構造

```
boku-no-todo/
├── doc/                    # ドキュメント
│   ├── youken.md          # 要件定義ガイドライン
│   ├── やりたいこと.md      # 機能要求仕様書
│   └── integrated_specification.md # 包括的仕様書
├── docs/                   # フロントエンドホスト用（予定）
├── src_react/             # Reactソースコード（実装済み）
│   ├── src/               # メインソースコード
│   ├── public/            # 静的ファイル
│   ├── package.json       # 依存関係とスクリプト
│   └── rspack.config.js   # ビルド設定
└── src_dotnet/            # .NETソースコード（将来実装予定）
```

## 🎯 タスク管理手法の統合

このアプリは以下の生産性手法を統合しています：

- **TODO管理** - 基本的なタスクの外部化・可視化
- **アイゼンハワーマトリクス** - 緊急度×重要度での優先順位付け
- **2分ルール** - 2分以内のタスクは即実行
- **Eat That Frog** - 最重要タスクの朝イチ実行
- **MIT (Most Important Task)** - 1日の重要タスクを1-3個に絞る
- **TimeBox** - 時間枠にコミットして価値を最大化
- **ポモドーロ・テクニック** - 25分集中 + 5分休憩
- **Ultradian Rhythm** - 90分集中 + 20分休憩
- **Flowtime Technique** - 集中が切れるまで作業する柔軟方式

## 💻 開発環境

### 動作環境
- **Windows 11** + **Git Bash (MSYS2)** 環境で開発
- **Node.js 18+** 必須
- **npm** パッケージマネージャー

### 環境固有の注意事項
- **MSYS2環境**: Windows上Git Bashでの開発を想定
- **パス指定**: Windows形式 (`C:\\path\\to\\file`) で統一
- **改行コード**: LFを推奨（Gitの`core.autocrlf`設定で管理）

## 🛠️ セットアップ手順

```bash
# 1. リポジトリをクローン
git clone <repository-url>
cd boku-no-todo

# 2. Reactプロジェクトのセットアップ
cd src_react
npm install

# 3. 開発サーバー起動
npm run dev
# ブラウザで http://localhost:3000 を開く

# 4. ビルドテスト
npm run build

# 5. コードチェック
npm run lint          # Biomeでリントチェック
npm run format        # コードフォーマット
npm run typecheck     # TypeScript型チェック
```

### MSYS2 (Git Bash) 環境でのコマンド例
```bash
# ディレクトリ移動（MSYS2でも通常のcdでOK）
cd src_react

# npmコマンド（Node.jsがWindows版でもMSYS2から正常実行可能）
npm run dev
npm run build

# ファイル操作
ls -la                # Unixコマンドが使用可能
mkdir -p new_dir      # ディレクトリ作成

# Git操作（MSYS2のGitで最適化）
git status
git add .
git commit -m "commit message"
```

## 🚀 今後の展望

- 音声入力のブラウザAPI実装
- LLM API連携（Claude Code SDK組み込み予定）
- Googleサービス連携
- n8n連携による自動化（LLMが自動化可能と判断したタスクの自動処理）
- 振り返り機能の充実（日次・週次・月次）

## 🔧 開発状況

### 現在のステータス
- ✅ **基本プロジェクト構造** - 完成
- ✅ **React + TypeScript環境** - 完成
- ✅ **Rspack + Biome設定** - 完成
- ✅ **ビルド・開発サーバー** - 動作確認済み
- 🚧 **TODO機能実装** - 作業中
- 🚧 **音声入力機能** - 未着手
- 🚧 **AI統合** - 未着手
- 🚧 **ポモドーロタイマー** - 未着手

## 📄 ライセンス

MIT License - 詳細は [LICENSE](./LICENSE) ファイルを参照してください。

---

*「完璧を目指さず、価値を最大化する」をモットーに開発しています。*