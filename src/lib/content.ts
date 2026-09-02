export const siteMeta = {
  name: "商業検定ラボ",
};

export const hero = {
  stats: [
    { label: "合格件数", value: "15件+" },
    { label: "検定合格率", value: "92%" },
  ],
  ctaLabel: "無料体験に申し込む",
};

export const trial = {
  headline: "まずは無料で\n勉強してみよう！",
  badge: "トライアル",
  listButtonLabel: "無料コンテンツ一覧",
  scrollPrompt: "本格的に対策したい人は",
  items: [
    {
      icon: "Gem",
      tag: "1分トレーニング",
      leadHighlight: "サクッとわかる",
      leadRest: "簿記の基本用語が",
      title: "簿記の入門",
      caption: "【初心者向け】簿記の入門トレーニング",
    },
    {
      icon: "ChartSpline",
      tag: "1分トレーニング",
      leadHighlight: "分析力が身に付く",
      leadRest: "クイズを通じて",
      title: "財務分析診断",
      caption: "【中級者向け】財務分析実力診断に挑戦しよう",
    },
    {
      icon: "PenLine",
      tag: "簿記3級レベル",
      leadHighlight: "解きまくれ！",
      leadRest: "満点目指して",
      title: "勘定科目ノック",
      caption: "【腕試し】勘定科目の反復ドリル",
    },
  ],
};

export const painPointsHeadline = "こんなお悩みは\nありませんか？";

export const painPointsLead = "検定に挑戦したいけど…";

export const painPoints = [
  "検定範囲が広すぎて、何から手をつけていいかわからない",
  "先生に質問するタイミングを逃して、そのまま放置してしまう",
  "部活や行事で忙しく、まとまった勉強時間が取れない",
  "独学だと、やり方が合っているのか不安なまま進めてしまう",
];

export const solutionIntro = {
  lead: "そんな方に…",
  brandName: "商業検定ラボ",
  tagline: "が選ばれています！",
  screenshotLabel: "サービス画面のスクリーンショット",
};

export const featuresHeadline = "選ばれる理由";

export const features = [
  {
    icon: "Smartphone",
    speechBubble: "学校、部活で\n時間がない…",
    leadText: "オンライン授業で",
    headline: "いつでもどこでも\nお手軽スタート！",
    bullets: ["夜ご飯後の隙間時間にも", "ちょっとした待ち時間も無駄にならない"],
  },
  {
    icon: "Target",
    speechBubble: "範囲が広すぎて\nどこから…？",
    leadText: "過去問を徹底分析した",
    headline: "出るところだけを\n効率よく攻略！",
    bullets: ["頻出パターンだけを厳選", "遠回りせず得点力アップ"],
  },
  {
    icon: "MessageCircleQuestion",
    speechBubble: "この塾なら\nではの魅力",
    leadText: "講師はほとんど",
    headline: "元商業高校生！",
    bullets: ["苦しい経験を共有した先生が授業", "翌日には自信を持って授業に臨める"],
  },
];

export const testimonials = [
  {
    name: "Tさん",
    role: "商業高校3年・全商簿記1級 合格",
    comment:
      "独学で心が折れかけていましたが、要点だけ教えてもらえるので迷わず進められました。部活と両立しながら合格できました。",
  },
  {
    name: "Mさん",
    role: "商業高校2年・全商情報処理検定 合格",
    comment:
      "質問してすぐ返事が来るのが助かりました。授業でわからなかった部分もその日のうちに解消できました。",
  },
  {
    name: "Kさん",
    role: "商業高校3年・全商英語検定 合格",
    comment:
      "スキマ時間に動画を見るだけでも、着実に力がついている実感がありました。演習問題の的中率も高かったです。",
  },
];

export const pricingModes = [
  { key: "individual", label: "個別" },
  { key: "group", label: "集団" },
] as const;

export type PricingModeKey = (typeof pricingModes)[number]["key"];

export const individualSubjects = [
  {
    slug: "zensho-boki",
    name: "全商簿記",
    description: "全国商業高等学校協会主催の簿記実務検定に対応。仕訳から決算までを段階的に学べます。",
    points: [
      "1級〜3級それぞれの出題範囲に対応した講座構成",
      "頻出の仕訳パターンを繰り返し演習",
      "本番形式の模擬問題で得点力を確認",
    ],
  },
  {
    slug: "nissho-boki",
    name: "日商簿記",
    description: "日本商工会議所主催の簿記検定に対応。就職・進学でも評価されやすい資格です。",
    points: [
      "全商簿記との違いを踏まえたカリキュラム",
      "工業簿記・商業簿記の両方をカバー",
      "過去問演習で出題傾向を把握",
    ],
  },
  {
    slug: "zensho-eiken",
    name: "全商英検",
    description: "商業高校生向けの英語検定に対応。ビジネス英語の基礎から対策します。",
    points: [
      "ビジネスシーンでよく使う英単語・表現を重点学習",
      "リスニング・筆記の両方をバランスよく対策",
      "級別に出題傾向を分析した演習問題",
    ],
  },
  {
    slug: "business-joho",
    name: "ビジネス情報",
    description: "ビジネス情報関連の検定に対応。情報処理の基礎知識と実務での活用力を身につけます。",
    points: [
      "情報処理の基礎用語をわかりやすく解説",
      "表計算・データ処理の実践演習",
      "検定の出題形式に沿った模擬問題",
    ],
  },
  {
    slug: "programming",
    name: "プログラミング",
    description: "商業高校で扱うプログラミング関連の検定・授業内容に対応します。",
    points: [
      "プログラミングの基礎概念からスタート",
      "検定でよく問われるアルゴリズムを演習",
      "つまずきやすいポイントをチャットで質問可能",
    ],
  },
  {
    slug: "bunsho-sakusei",
    name: "文書作成",
    description: "ビジネス文書実務検定に対応。ビジネス文書の基本ルールと実務スキルを学びます。",
    points: [
      "社内文書・社外文書の書き方の基本",
      "実際の検定形式に沿った作成演習",
      "よくある減点ポイントを重点的に解説",
    ],
  },
  {
    slug: "dentaku-jitsumu",
    name: "電卓実務",
    description: "珠算・電卓実務検定に対応。スピードと正確さの両方を鍛えます。",
    points: [
      "見取算・乗算・除算の基礎から演習",
      "制限時間内で解くためのコツを解説",
      "級別の出題パターンに合わせた練習問題",
    ],
  },
  {
    slug: "zaimu-shohyo-bunseki",
    name: "財務諸表分析",
    description: "財務諸表分析に関する検定・授業内容に対応。決算書の読み方を基礎から学びます。",
    points: [
      "貸借対照表・損益計算書の基本の読み方",
      "経営指標を使った分析方法を解説",
      "実際の企業の決算書を使った演習",
    ],
  },
] as const;

export type IndividualSubject = (typeof individualSubjects)[number];

export const pricingComingSoonMessage =
  "集団クラスは只今準備中です。近日公開予定ですのでお楽しみに。";

// 個別科目の料金プラン（科目共通・時間制、利用期間の定めなし）
export const courseTicketPricing = {
  courseLabel: "個別指導",
  chatSupportPrice: "5,000",
};

// 級ごとの時間単価（科目共通）
export const courseGradePricing = [
  { grade: "3級", hourlyPrice: "3,000" },
  { grade: "2級", hourlyPrice: "3,500" },
  { grade: "1級", hourlyPrice: "4,000" },
];

// トレーニング内容の共通ステップ（先頭に科目固有のpointsが入る）
export const courseTrainingTailSteps = ["頻出パターンの総復習", "本番形式の模擬試験に挑戦"];

// 合格体験記（科目共通のプレースホルダー。実データが決まり次第差し替え）
export const successProfiles = [
  {
    tag: "合格！",
    name: "H.O. さん",
    role: "部活と両立しながら学習",
    avatar: "/images/avatar-smile-woman.png",
    totalHours: "21",
    totalDays: "21",
    mockBestScore: "100",
    mockCount: "5",
    style: "通学時間、部活の合間",
    materials: "無料教材 ▶ 商業検定ラボの講座",
  },
  {
    tag: "合格！",
    name: "T.K. さん",
    role: "カレンダー機能で毎日継続",
    avatar: "/images/avatar-smile-man.png",
    totalHours: "63",
    totalDays: "45",
    mockBestScore: "96",
    mockCount: "8",
    style: "朝活、夜の自由時間",
    materials: "商業検定ラボの講座のみ",
  },
];

export const faqs = [
  {
    question: "商業高校の生徒でなくても受講できますか？",
    answer:
      "はい、受講いただけます。ただしカリキュラムは商業高校で扱う検定（簿記・情報処理・ビジネス系など）に特化しています。",
  },
  {
    question: "検定に落ちてしまったらどうなりますか？",
    answer:
      "次回の検定に向けて、つまずいたポイントを一緒に整理し直します。追加の費用なしで学習を継続いただけます。",
  },
  {
    question: "オンラインだけで本当に合格できますか？",
    answer:
      "出題傾向を分析した演習と、その日のうちに解決できる質問サポートを組み合わせることで、通塾なしでも十分に合格を目指せる設計にしています。",
  },
  {
    question: "友人や兄弟と一緒に申し込むことはできますか？",
    answer:
      "はい、可能です。無料体験のお申し込み時に、その旨をご記入いただければ個別にご案内します。",
  },
];

export const closing = {
  headline: "その一歩が、\n合格への最短ルートになる。",
  subCopy: "まずは無料体験で、自分に合った学び方を確かめてみませんか。",
  ctaLabel: "無料体験に申し込む",
};
