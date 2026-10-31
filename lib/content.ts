// LPに表示する文章・料金・事例はすべてここで管理する。
// 文言を直したいときは、このファイルだけ編集すればOK。

export const SITE = {
  name: "KAITOO Works",
  tagline: "KAITOO Works｜業務効率化・Web開発",
  // お問い合わせ用Googleフォーム（KAITOO Works お問い合わせ）2026-10-26 差し替え
  // 旧：https://docs.google.com/forms/d/e/1FAIpQLSdnTemnGDFOaY55Y1bhwRACX03RcrwSOVJ-UyXC-UDN3JR0mQ/viewform
  contactUrl: "https://docs.google.com/forms/d/e/1FAIpQLScgahnfP6KKs0s66l60FS9vUIO712V1OIH7Y7oxzV3fY45oJg/viewform",
  // ボタンの文言はヘッダー・ファーストビュー・問い合わせ・スマホ固定ボタンで共通
  contactLabel: "今の作業を相談する",
};

// ファーストビュー（2026-11-01 改修：業務効率化・小規模開発を主役に）
export const hero = {
  eyebrow: "業務効率化 / 小規模Web開発 / AI活用",
  title: ["手作業を減らす。", "必要な仕組みを、", "小さく速くつくる。"],
  lead: "GAS・スプレッドシート・Python・Next.jsを使い、転記や集計などの定型業務の自動化から、小さなWebツールの開発・修正まで対応します。営業・業務の現場経験をもとに、困りごとの整理から一緒に進めます。",
  stack: ["GAS", "Google Sheets", "Python", "Next.js", "AI連携"],
  // 事実だけを書く（Pocket Base の App Store 公開は 2026-10-24）
  trust: ["自主開発アプリを App Store で公開", "前職でGASによる業務改善", "フルリモート対応"],
};

// 「こんな作業、ありませんか？」
export const pains = [
  { icon: "copy", title: "毎日のコピペ・転記を減らしたい", body: "メールやフォームの内容を、毎回手でシートに書き写している。" },
  { icon: "table", title: "Excel・CSVの集計を自動にしたい", body: "月末に同じ手順で、データを集めて並べ替えて集計している。" },
  { icon: "spark", title: "AIで分類・要約・下書きをしたい", body: "問い合わせの振り分けや返信の下書きを、AIで速くしたい。" },
  { icon: "code", title: "小さなWebツールや修正を頼みたい", body: "社内用の小さなツールや、今のサイト・アプリの一部を直したい。" },
] as const;

// 「できること」（価格は出さず、何を頼めるかだけ）
export const capabilities = [
  {
    no: "01",
    title: "業務効率化・自動化",
    pain: "転記・集計・メール作成など、毎月くり返す作業に時間を取られている。",
    can: "スプレッドシートやExcel・CSVの処理をツールにして自動化。必要に応じてAIで分類・要約・下書きを組み込みます。",
    tech: ["GAS", "Google Sheets", "Python", "Excel / CSV", "ChatGPT・Claude連携"],
    main: true,
  },
  {
    no: "02",
    title: "小規模Web・アプリ開発",
    pain: "社内用の小さなツールがほしい。今のサイトやアプリの一部だけ直したい。",
    can: "小さなWebアプリ・管理画面・API連携の開発や、既存サイトの修正に対応します。",
    tech: ["Next.js", "TypeScript", "Firebase", "API", "Vercel"],
    main: false,
  },
  {
    no: "03",
    title: "LP・SNS制作",
    pain: "サービス紹介のページや、Instagramの投稿を手早くそろえたい。",
    can: "スマホ優先の1ページサイト（最短48時間で初稿）と、Instagramの投稿画像・カルーセル・投稿文を制作します。",
    tech: ["LP制作", "Instagram投稿", "AI画像", "英語投稿"],
    main: false,
  },
];

// 「できる根拠」（お客様の声の代わり。事実だけ）
export const reasons = [
  { title: "業務の現場を知っている", body: "前職で法人営業・新規事業・業務改善を担当。GASでの自動化やGemini活用、営業フローの改善を自分で進めてきました。" },
  { title: "公開まで自分で開発", body: "自主開発のアプリを、Webで公開し、iOSアプリとしてApp Storeでも公開しました（2026年10月）。" },
  { title: "AIで速く、人が確認", body: "開発にはClaude Codeなどを使い、速く作ります。要件の整理・動作確認・テストは自分で行います。" },
];

export type Service = {
  id: string;
  label: string;
  title: string;
  lead: string;
  from: string;
  lt: string;
  items: string[];
  plans: { name: string; price: string; detail: string; lt: string }[];
};

export const services: Service[] = [
  {
    id: "automation",
    label: "効率化",
    title: "AI業務効率化",
    lead: "Excel・CSVの集計や定型の文章作成など、毎月くり返す作業をツールにして自動化。必要に応じてAIを組み込みます。",
    from: "19,800",
    lt: "5日〜",
    items: ["Excel / CSV / スプレッドシート処理", "Python・GASでの自動化", "ChatGPT・Claude連携ツール", "FAQチャットボット・小さなWebアプリ"],
    plans: [
      { name: "ライト", price: "19,800", detail: "Excel・CSV・スプレッドシートの自動化ツール1つ", lt: "5日" },
      { name: "スタンダード", price: "39,800", detail: "AI連携を含むツール1つ（分類・要約・返信の下書きなど）", lt: "7日" },
      { name: "プレミアム", price: "69,800", detail: "小規模なWebアプリ、またはチャットボット", lt: "14日" },
    ],
  },
  {
    id: "lp",
    label: "Web",
    title: "48時間ミニLP制作",
    lead: "店舗紹介・サービス紹介・キャンペーンの1ページサイトを、素材到着から最短48時間で初稿。公開まで対応します。",
    from: "29,800",
    lt: "最短48時間",
    items: ["スマホ優先のデザイン", "お問い合わせフォーム設置", "基本的なSEO・OGP設定", "Vercelで公開（サーバー代0円〜）"],
    plans: [
      { name: "ベーシック", price: "29,800", detail: "1ページ・5セクション／文章はご支給", lt: "48時間" },
      { name: "スタンダード", price: "49,800", detail: "1ページ・8セクション／文章作成・AI画像・アクセス解析込み", lt: "72時間" },
      { name: "プレミアム", price: "79,800", detail: "最大4ページ／文章作成・AI画像・アクセス解析込み", lt: "5日" },
    ],
  },
  {
    id: "sns",
    label: "SNS",
    title: "AI × SNS制作",
    lead: "Instagramの投稿画像・カルーセル・投稿文をまとめて制作。更新が止まっているアカウントを、すぐ動かせる状態にします。",
    from: "9,800",
    lt: "3日〜",
    items: ["投稿画像・カルーセル", "投稿文・ハッシュタグ", "トンマナ設計・テンプレート", "英語投稿にも対応"],
    plans: [
      { name: "ライト", price: "9,800", detail: "投稿画像3枚＋投稿文3本", lt: "3日" },
      { name: "スタンダード", price: "19,800", detail: "カルーセル1本（最大8枚）＋投稿画像3枚＋投稿文4本", lt: "5日" },
      { name: "プレミアム", price: "39,800", detail: "投稿10本分＋トンマナ設計＋編集できるテンプレート", lt: "7日" },
    ],
  },
];

export type Work = {
  name: string;
  kind: string;
  images: { src: string; alt: string; w: number; h: number }[];
  imageStyle: "contain" | "cover" | "row" | "phones";
  bg: string;
  problem: string;
  made: string;
  tech: string[];
  result: string;
  link?: { href: string; label: string };
  // featured：大きく見せる主役の事例／more：「その他の自主制作」に折りたたむ
  featured?: boolean;
  more?: boolean;
};

export const works: Work[] = [
  {
    name: "Pocket Base",
    kind: "Webアプリ／iOS・Androidアプリ",
    // スクショは App Store 提出用の iPhone 実機画面（2026-10-02 撮影・個人情報なし）
    images: [
      { src: "/works/pocketbase-home.webp", alt: "Pocket Base のホーム画面（検索窓）", w: 520, h: 1125 },
      { src: "/works/pocketbase-list.webp", alt: "Pocket Base のカード一覧と絞り込み", w: 520, h: 1125 },
    ],
    imageStyle: "phones",
    bg: "#0e1a3a",
    problem: "3,800枚以上あるカードの中から、目的のカードをすばやく探せる日本語のサービスがほしい。",
    made: "カード名・技名・効果で探せる検索、絞り込み、日英切り替えを備えたWebアプリを企画から一人で開発。Capacitorでスマホアプリにして、App Storeの審査対応まで自分で行いました。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Capacitor", "Vercel"],
    result: "Web版を公開中。iOSアプリは2026年10月にApp Storeで公開、Androidはテスト配信中です。（ポケポケ非公式の個人開発サービス）",
    featured: true,
    link: { href: "https://pocket-base-delta.vercel.app/", label: "サイトを見る" },
  },
  {
    name: "Pawlish Home",
    kind: "ECブランド立ち上げ／SNS",
    images: [
      { src: "/works/pawlish-product.webp", alt: "Pawlish Home の商品セット画像", w: 800, h: 800 },
    ],
    imageStyle: "contain",
    bg: "#f4ede4",
    problem: "米国向けのペット用品ブランドを、少ない予算でゼロから立ち上げたい。",
    made: "ブランド名・ロゴ・カラー設計、Shopifyストア構築、商品セット画像、商品紹介動画4本、英語でのInstagram運用までを担当。",
    tech: ["Shopify", "AI画像生成", "Python（動画制作）", "Instagram"],
    result: "ストアを公開し、テスト注文まで完了。英語のInstagramで運用中です。",
    link: { href: "https://www.instagram.com/pawlishhome_us/", label: "Instagramを見る" },
  },
  {
    name: "Office Raccoon",
    more: true,
    kind: "LINEスタンプ／多言語展開",
    images: [
      { src: "/works/raccoon-jp-01.webp", alt: "Office Raccoon 日本語版スタンプ", w: 320, h: 280 },
      { src: "/works/raccoon-tw-03.webp", alt: "Office Raccoon 繁体字版スタンプ", w: 320, h: 280 },
      { src: "/works/raccoon-id-01.webp", alt: "Office Raccoon インドネシア語版スタンプ", w: 320, h: 280 },
    ],
    imageStyle: "row",
    bg: "#f1f0ea",
    problem: "同じキャラクターで、国ごとの言葉に合わせたスタンプを手早く作りたい。",
    made: "AIでキャラクターの見た目を統一したまま、日本・台湾・インドネシア・タイ向けにセリフと表情を作り分けました。",
    tech: ["AI画像生成", "画像編集", "多言語ローカライズ"],
    result: "1つのキャラクターを4つの言語で展開。",
  },
  {
    name: "Mixie Jars",
    more: true,
    kind: "キャラクター設計／YouTube・Instagram",
    images: [
      { src: "/works/mixie-scenes.webp", alt: "Mixie Jars の赤・黄・青の絵の具ビンのキャラクター", w: 800, h: 500 },
    ],
    imageStyle: "cover",
    bg: "#eeeeee",
    problem: "言葉に頼らず、世界中の2〜6歳の子どもが楽しめる知育コンテンツを作りたい。",
    made: "赤・黄・青の絵の具ビンのキャラクターを設計。セリフなしの色あそび動画と、チャンネルのアイコン・バナーを制作しました。",
    tech: ["AI画像・動画生成", "動画編集", "YouTube", "Instagram"],
    result: "YouTube・Instagramで公開中です。",
    link: { href: "https://www.youtube.com/@MixieJars", label: "YouTubeを見る" },
  },
  {
    name: "ガジェクマ（GADGEKUMA）",
    kind: "Instagramメディア／リール・カルーセル",
    images: [
      { src: "/works/gadgekuma-mx.webp", alt: "ガジェクマのカルーセル投稿：Logicool MX ERGO S", w: 600, h: 600 },
      { src: "/works/gadgekuma-nova.webp", alt: "ガジェクマのカルーセル投稿：CIO NovaWave 3Way", w: 600, h: 600 },
      { src: "/works/gadgekuma-mx2.webp", alt: "ガジェクマのカルーセル投稿：MX ERGO S の2枚目", w: 600, h: 600 },
    ],
    imageStyle: "row",
    bg: "#16181d",
    problem: "スクロールされる一瞬で、ガジェットの魅力を伝えたい。",
    made: "ブランド設計（ロゴ・配色・キャラクター）から、商品レビューのカルーセル投稿、実写素材を使ったリール動画の制作・自動編集の仕組みまでを担当しています。",
    tech: ["ブランド設計", "カルーセル設計", "リール動画編集", "AI画像生成", "Python（動画の自動編集）"],
    result: "Instagramで運用中です。",
    link: { href: "https://www.instagram.com/gadgekuma/", label: "Instagramを見る" },
  },
];

export const flow = [
  { title: "無料相談", body: "フォームから、やりたいことを気軽にお送りください。24時間以内にお返事します。" },
  { title: "お見積もり", body: "内容をうかがい、プランと金額、納期をお伝えします。" },
  { title: "制作", body: "方向性をすり合わせてから制作。途中経過もお見せします。" },
  { title: "確認・修正", body: "初稿をご確認いただき、プランの回数まで修正します。" },
  { title: "納品", body: "データ・公開URL・使い方メモをお渡しして完了です。" },
];

export const faqs = [
  {
    q: "小さな修正・自動化だけでも頼めますか？",
    a: "はい。1つの転記作業や、サイトの小さな修正からでもご相談いただけます。何を作るか決まっていなくても大丈夫です。",
  },
  {
    q: "AIで作ったものは品質が心配です。",
    a: "AIは下書きやバリエーション出しに使い、仕上げは必ず人の目で確認・調整します。速さと品質の両方を大切にしています。",
  },
  {
    q: "何を頼めばいいか決まっていなくても大丈夫ですか？",
    a: "大丈夫です。今の困りごとを教えていただければ、どのサービスが合うかをご提案します。相談は無料です。",
  },
  {
    q: "支払い方法は？",
    a: "ココナラ・クラウドワークス・ランサーズ経由でのご依頼に対応しています。直接のご依頼をご希望の場合はご相談ください。",
  },
  {
    q: "修正は何回までできますか？",
    a: "プランごとに2〜3回までです。それを超える場合も、1回ごとに少額で承ります。",
  },
  {
    q: "公開後のサイト維持費はかかりますか？",
    a: "Vercelの無料枠で公開する場合、サーバー代はかかりません。独自ドメインを使う場合のみ、ドメイン代（年1,500円前後〜）がかかります。",
  },
  {
    q: "AIのAPI利用料はだれが払いますか？",
    a: "ChatGPT・ClaudeなどのAPI利用料はお客様のご負担です。小規模な使い方なら月数百円程度が目安です。",
  },
];
