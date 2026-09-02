# 商業検定ラボ — 引き継ぎドキュメント

> **作業を始める前にこのファイルを読むこと。**
> とくに「§3 未確定・プレースホルダーのコンテンツ」と「§4 ハマりどころ」は必読。

## 1. プロジェクト概要

| 項目 | 内容 |
|---|---|
| サイト名 | 商業検定ラボ |
| コンセプト | 商業高校生専門のオンライン検定対策塾のLP（ランディングページ） |
| 参考にしたデザイン | [Funda簿記 Webトレーニング](https://lp.boki.funda.jp/)（配色・UI/UXの構造を参考に、コンテンツは独自） |
| 技術スタック | Next.js 16 (App Router / Turbopack) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide React |
| デプロイ状況 | **未デプロイ**。ローカル開発のみ（`npm run dev`）で確認してきた。本番URLはまだ存在しない |
| GitHub / Vercel | **未設定**。このディレクトリは今回の引き継ぎ準備で初めてgit管理下に置いた |

このプロジェクトはユーザーの指示に沿って対話的にLPを組み立ててきたもので、要件定義書やデザインカンプは存在しない。**このファイルと`src/lib/content.ts`のコメントが仕様書代わり**になっている。

## 2. ディレクトリ構造

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # ルートレイアウト。フォント読み込み、max-w-mdのスマホ幅コンテナ
│   │   ├── page.tsx            # トップページ（全セクションを並べるだけ）
│   │   ├── globals.css         # Tailwindテーマ（カラーパレット・フォント変数）
│   │   └── subjects/[slug]/page.tsx  # 個別科目の詳細ページ（8科目分を静的生成）
│   ├── components/
│   │   ├── layout/StickyCta.tsx        # 画面下部固定CTA
│   │   ├── sections/                   # トップページの各セクション（下記§2.1）
│   │   └── ui/                         # 汎用UIパーツ（下記§2.2）
│   └── lib/content.ts          # 全コピー・データの単一ソース。文言修正は基本ここだけでOK
└── public/images/               # 「ちょうどいいイラスト」から取得した画像 + ユーザー提供画像
```

### 2.1 セクション構成（`src/app/page.tsx`の並び順）

1. `Hero.tsx` — ファーストビュー。ユーザー提供のヒーロー画像（`hero-visual.png`、文字入り）＋実績数値＋CTA
2. `TrialContent.tsx` — 「まずは無料で勉強してみよう！」トライアルコンテンツ3例＋「無料コンテンツ一覧」ボタン＋スクロール誘導
3. `PainPoints.tsx` — 「こんなお悩みはありませんか？」課題喚起
4. `SolutionIntro.tsx` — 「そんな方に…商業検定ラボが選ばれています！」
5. `Features.tsx` — 「選ばれる理由」理由①②③（バッジがセクション背景とカードの境界をまたぐ意匠）
6. `Testimonials.tsx` — 利用者の声（横スクロールカルーセル）
7. `Pricing.tsx` — 料金プラン。「個別」（科目カード→詳細ページへ遷移）／「集団」（準備中表示）のタブ切り替え
8. `Faq.tsx` — よくある質問（アコーディオン）
9. `ClosingCta.tsx` — クロージングCTA

### 2.2 UIパーツ（`src/components/ui/`）

- `PopButton.tsx` — Funda風の「3Dポップボタン」（下に厚みシャドウ、押すと沈む）。`variant="primary"`（オレンジ）/`"secondary"`（白）
- `SectionContainer.tsx` — セクション共通の背景色・余白。`background="white"|"gray"|"brand"|"brandDark"`
- `Accordion.tsx` — FAQ・科目詳細ページの「トレーニング内容」で共用。`variant="light"|"dark"`
- `FadeIn.tsx` — スクロール時のフェードイン（Framer Motion）
- `ImagePlaceholder.tsx` — 画像未定箇所のグレーボックス（SolutionIntroの「サービス画面のスクリーンショット」で使用中）

## 3. 未確定・プレースホルダーのコンテンツ（要差し替え）

すべて `src/lib/content.ts` に集約されている。**実データが決まり次第、このファイルを直接編集すれば全体に反映される。**

| 項目 | 現状 | 該当箇所 |
|---|---|---|
| 統計数値（合格件数15件+、合格率92%） | 仮の数値 | `hero.stats` |
| 利用者の声（T/M/Kさん） | 架空の口コミ3件 | `testimonials` |
| 料金（個別・級ごとの時間単価） | 3級¥3,000／2級¥3,500／1級¥4,000/時間（全科目共通の仮単価） | `courseGradePricing` |
| チャットサポート追加料金 | ¥5,000（仮） | `courseTicketPricing.chatSupportPrice` |
| 「集団」タブ | 中身なし、「準備中」メッセージのみ | `pricingComingSoonMessage` |
| 8科目の説明文・学習ポイント・トレーニング内容 | 一般論ベースの仮テキスト | `individualSubjects` |
| 合格プロフィール（H.O.さん／T.K.さん） | 全8科目で共通の架空プロフィール2件 | `successProfiles` |
| トライアルコンテンツ3例 | 実際に体験できるツールへのリンクなし（デザインのみ） | `trial.items` |
| 「無料コンテンツ一覧」ボタン | リンク先 `#free-content` は実在しないダミー | `TrialContent.tsx` |
| SolutionIntro/Features/Hero内の画像プレースホルダー | 「サービス画面のスクリーンショット」「アプリ画面イメージ」はグレーボックスのまま | `SolutionIntro.tsx` |
| FAQ本文 | 一般的な想定Q&A、事実確認はされていない | `faqs` |

## 4. ハマりどころ・技術的知見

### 4.1 Turbopack開発サーバーのキャッシュ不整合（最重要）

**症状**: `pb-20`や`left-[96px]`のような、それまで使っていなかった新しいTailwindユーティリティクラスを追加しても、`getComputedStyle`で確認すると反映されていない（`padding-bottom: 0px`のまま等）。ページの表示が真っ白/崩れる、あるいは古いコード（数手前で消したはずのimportやコンポーネント）のエラーがコンソールに残り続けることもある。

**原因**: `next dev`（Turbopack）のキャッシュが、長時間・多数回のホットリロードを経ると不整合を起こすことがある（このプロジェクト特有ではなく、Next.js 16 Turbopackの既知の癖）。

**対処法**（今回複数回発生し、これで毎回解決した）:
```bash
# 開発サーバーを停止したあと
rm -rf .next
npm run dev   # または preview_start で再起動
```
表示が崩れた・スタイルが反映されない・見覚えのないエラーが出る、といった不可解な症状が出たら、**まずコード側を疑う前に`.next`削除→再起動を試す**こと。

### 4.2 `next/font/google`は日本語フォントの`subsets: ["japanese"]`に対応していない

このNext.jsバージョンの`next/font/google`は、"M PLUS Rounded 1c"や"Noto Sans JP"のような日本語フォントで`subsets: ["japanese"]`を指定するとビルドエラーになる（型エラー: 許可されるsubsetは`latin`系のみ）。

- Google未掲載の独自配布フォント（けいふぉんと等）→ `next/font/local`
- Google Fonts掲載の日本語フォント（Noto Sans JP等）→ `next/font/google`は使わず、`layout.tsx`の`<head>`に手動で`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=...">`を追加する方式（現在の実装）。Google側でunicode-rangeごとに自動分割されたwoff2が配信されるため、実際に使う文字だけがダウンロードされ効率的。ESLintの`@next/next/no-page-custom-font`警告は、App Routerのルートレイアウトではfalse positiveなので`eslint-disable-next-line`で抑制している

### 4.3 Browserペインのスクリーンショット・スクロール操作の癖

- `computer` screenshotは、ページ遷移直後だと「白紙」や「1つ前の画面」が映ることがある（compositorの描画タイミングの問題）。`wait`を挟むか、`get_page_text`/`read_page`など DOM ベースの確認を優先し、スクリーンショットは最終確認用に使うとよい
- `window.scrollTo`や`scrollIntoView`をjavascript_toolで連続実行すると、画像読み込み等によるレイアウトシフトで狙った位置からズレることがある。位置がずれたら焦らず`get_page_text`で内容を確認するか、目的の要素を直接`querySelector`して`scrollIntoView`し直す

### 4.4 画像素材について

`public/images/`内の画像はすべて「[ちょうどいいイラスト](https://tyoudoii-illust.com/)」から取得（商用利用可・クレジット表記不要のライセンスを確認済み。利用規約で**直リンク禁止**のため、必ずダウンロードして`public/`配下に保存している）。

| ファイル | 用途 | 取得元 |
|---|---|---|
| `pain-points-illustration.png` | 「こんなお悩みは」の人物イラスト | https://tyoudoii-illust.com/4507/ |
| `reason1-study.png` | 選ばれる理由セクション／科目詳細ページの「ポイント」ボックス | https://tyoudoii-illust.com/3093/ |
| `avatar-smile-man.png` / `avatar-smile-woman.png` | 合格プロフィールのアバター | https://tyoudoii-illust.com/2865/ , https://tyoudoii-illust.com/2849/ |
| `hero-visual.png` | ヒーロー画像 | **ユーザー提供**（このサイト外からの持ち込み画像。差し替え時は同様にユーザーに提供してもらうこと） |

追加でイラストが必要な場合も同サイトから取得できるが、**画像への直リンクは規約違反になるため必ずダウンロードしてpublicに保存すること**。

### 4.5 `src/fonts/keifont.ttf`は現在未使用

一時的に「けいふぉんと」を使っていたが、後にNoto Sans JPに変更したため、このファイルは今はどこからも参照されていない。フォントを再度変更する予定がなければ削除して問題ない。

## 5. コマンド

```bash
npm run dev     # 開発サーバー（http://localhost:3010、.claude/launch.json参照）
npm run build   # 本番ビルド
npm run start   # 本番ビルド起動
npm run lint    # ESLint
```

**変更を加えたら必ず `npm run lint && npm run build` を通し、ブラウザで実表示を確認してから完了とすること。** ビルドが通っただけで「実装できました」と報告しない。

`.claude/launch.json`は、このプロジェクト単体ではなく親ディレクトリ（`C:\家計簿アプリ開発`）側に存在する点に注意（`shogyo-lp-dev`という名前でポート3010）。このリポジトリ単体で開く場合は`npm run dev`を直接使うか、`.claude/launch.json`を作成すること。

## 6. デプロイについて

まだVercel等へのデプロイは行っていない。デプロイする場合の注意点:

- 画像ファイル名は小文字で統一している（Windows開発環境は大文字小文字を区別しないが、Vercel等Linux本番環境では区別される。過去に`Keifont.ttf`のケースで実際にこの問題が起きかけた）
- `next/font/local`は現在未使用（§4.5参照）なので、フォント関連のビルドエラーは基本的に発生しないはず
- 環境変数は現状なし（フォーム送信等のバックエンド機能は未実装。CTAボタンはすべて`#apply`セクションへのアンカーリンク）
