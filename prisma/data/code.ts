import { ToolSeedItem } from "./types";

export const codeTools: ToolSeedItem[] = [
  {
    id: "cursor",
    name: "Cursor",
    category: "code",
    categoryLabel: "コード・開発",
    badge: "エンジニア界の絶対覇権",
    version: "Agent / Composer (Claude Fable 5.1 & GPT-6.1 Sol & Gemini 3.8)",
    versionFeatures: {
      evolution: "VS Codeを完全フォークして設計。自律Agent機能によりプロジェクト全体の複数ファイルを同時に修正・作成し、ターミナルコマンドやテスト実行まで自律代行。最高峰頭脳「Claude Fable 5.1」および「GPT-6.1 Sol」を統合。",
      strengths: ["リポジトリ全体のコードベースを完全把握（@codebase）", "自律Agentによる複数ファイル一括編集・リファクタリング", "Claude Fable 5.1のSWE-bench 80%超の最高峰コーディング力", "VS Codeの拡張機能・設定がワンクリックで完全移行"],
      weaknesses: ["無料版の高速リクエスト制限がすぐに尽きる（Pro課金ほぼ前提）"],
      architecture: "Anysphere Custom Electron IDE + Fast Context Indexing",
      versionsList: [
        {
          name: "Claude Fable 5.1 (SWE-bench 80%+)",
          shortName: "Fable 5.1",
          tier: "paid",
          speed: "可変・高速",
          intelligence: "最高峰",
          bestFor: "複数ファイル一括編集（Composer）、アーキテクチャ設計、難関バグ修正",
          planAvailability: "Proで月500回高速 / 超過後低速無制限",
          description: "Cursor利用者の大半が常時使用する世界最高峰モデル。圧倒的な論理精度でミスゼロの実装を実現。"
        },
        {
          name: "Gemini 3.8 Flash (超爆速補完)",
          shortName: "3.8 Flash",
          tier: "paid",
          speed: "超高速",
          intelligence: "高度",
          bestFor: "巨大リポジトリ全域検索、リアルタイムインライン補完、長大ログ解析",
          planAvailability: "Pro / API連携",
          description: "Googleの最新主力爆速知能。数万行のコードベースを一瞬でスキャンしてミリ秒で最適な提案を返します。"
        },
        {
          name: "o3-mini (High Reasoning)",
          shortName: "o3-mini",
          tier: "paid",
          speed: "標準",
          intelligence: "最高峰",
          bestFor: "難解なアルゴリズム、競プロ級ロジック、並行処理デバッグ",
          planAvailability: "Proプラン限定",
          description: "OpenAIの最新推論モデル。時間をかけて深く思考し、境界条件の潜在的バグを完全特定。"
        },
        {
          name: "Cursor Tab (Basic Autocomplete)",
          shortName: "Tab補完",
          tier: "free",
          speed: "超高速",
          intelligence: "標準",
          bestFor: "日々のエディタ内補完、関数名自動提案",
          planAvailability: "無料枠で月200回利用可能",
          description: "日常のコーディングを支える基本入力補完モデル。"
        }
      ]
    },
    estimatedUsers: "数百万エンジニア / IT業界で乗り換えラッシュ",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 99.5,
    categoryRank: 1,
    overallRank: 1,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (2週間Pro試用) / Pro $20 (約3,000円) / Business $40",
    freePlanDetails: {
      limits: "初回2週間のPro無料トライアル。以降は月200回のエディタ補完と、低速キューでのチャット。",
      allowedFeatures: ["基本タブ補完", "低速モデルでのチャット"]
    },
    paidPlanDetails: {
      planName: "Cursor Pro",
      price: "$20 / 月",
      unlockedFeatures: ["Claude 3.7 Sonnet / Gemini 3.8 Flashの高速リクエスト月500回", "低速リクエスト無制限", "Composerマルチファイル一括編集無制限", "最新Agent自律機能"],
      recommendedFor: "日常的にコードを書くすべてのプログラマー、Web開発者、個人開発者（課金必須の神器）"
    },
    plansList: [
      {
        id: "free",
        name: "Cursor Hobby (無料版)",
        priceMonthly: "無料 ($0)",
        targetAudience: "Cursorの驚異的なタブ補完やIDEの操作感を体験してみたい開発者",
        isFree: true,
        availableModels: ["Cursor Tab補完", "低速キューモデル"],
        contextWindow: "リポジトリ基本インデックス",
        messageLimits: "初回2週間のPro無料試用。以降は月200回の基本補完と低速チャット",
        unlockedFeatures: ["VS Code拡張・設定のワンクリック完全移行", "Cursor Tabインライン予測補完", "エディタ内基本チャット"],
        limitations: ["Composerマルチファイル一括編集の利用枠が限定的", "高速モデルリクエストなし"],
        officialUrl: "https://www.cursor.com"
      },
      {
        id: "pro",
        name: "Cursor Pro (プロエンジニア標準)",
        priceMonthly: "$20 / 月 (約3,000円)",
        priceYearly: "年払い $192 (月あたり $16)",
        targetAudience: "日常的にコードを書くプログラマー・Web開発者（開発速度が3倍になる課金必須の神器）",
        isPopular: true,
        availableModels: ["Claude Fable 5.1 (SWE-bench 80%+)", "Claude 3.7 Sonnet", "Gemini 3.8 Flash (超爆速)", "o3-mini"],
        contextWindow: "リポジトリ全体セマンティックインデックス",
        messageLimits: "月500回高速リクエスト、超過後も低速キューで無制限！",
        unlockedFeatures: [
          "Composerマルチファイル一括自律編集（無制限）",
          "リポジトリ全体コードベース検索（@codebase）",
          "自律Agentターミナル実行＆自動テスト・デバッグ",
          "最新知能Claude Fable 5.1 / Gemini 3.8 Flashの最優先アクセス"
        ],
        officialUrl: "https://www.cursor.com/pricing"
      },
      {
        id: "business",
        name: "Cursor Business (企業・チーム向け)",
        priceMonthly: "$40 / ユーザー / 月",
        targetAudience: "社内コードの学習除外を厳格に義務付けたい企業・受託開発チーム",
        availableModels: ["全Proモデル (Fable 5.1 / 3.7 Sonnet / Gemini 3.8)"],
        contextWindow: "リポジトリ全体",
        messageLimits: "Proと同等の高速枠＋チーム優先キュー",
        unlockedFeatures: [
          "プライバシーモード強制（コード非学習・セキュリティ設定を全社一括強制）",
          "中央集権請求・シートライセンス管理コンソール",
          "SAML / シングルサインオン（SSO）"
        ],
        officialUrl: "https://www.cursor.com/pricing"
      }
    ],
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: false,
    hasApp: true,
    summary: "プログラミングの常識を覆したAIエディタ。アプリ全体の複数ファイルを一瞬で書き換えるエンジニアの神器。",
    description: "いま世界のエンジニアがVS Codeから大挙して移行している最注目IDE。チャットで『この画面にダークモード追加して』と言うだけで、CSS、コンポーネント、状態管理の全ファイルをAIが自律探索して同時に正しく書き換えてくれます。Claude 3.7 SonnetやGemini 3.8 Flashを標準統合。",
    pros: ["複数ファイルの一括修正が驚異的な精度で決まる", "VS Codeのプラグインやショートカットがそのまま使える", "開発速度が2倍〜3倍に跳ね上がる実感がある"],
    cons: ["Proプラン（月20ドル）に入らないと真価を発揮しにくい"],
    specs: {
      contextWindow: "リポジトリ全体セマンティックインデックス",
      multimodal: "コード・画像・ターミナル・ドキュメント",
      company: "Anysphere, Inc.",
      releaseYear: "2023 (最新版2025-2026)"
    },
    officialUrl: "https://www.cursor.com"
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "code",
    categoryLabel: "コード・開発",
    badge: "全エンジニア標準装備",
    version: "Copilot Workspace / Claude 3.7 & o3-mini & GPT-4o切替対応",
    versionFeatures: {
      evolution: "GitHubリポジトリの全IssueやPRと直結。モデル選択機能によりClaude 3.7 Sonnet、o3-mini、GPT-4oなどを自由に切り替えて補完・チャットが可能に。",
      strengths: ["VS Code, JetBrains, Visual Studio等あらゆるエディタに対応", "GitHub上のIssueから直接仕様書・コードを自動起草", "個人向け無料プランが新設され手軽に利用可能", "企業のセキュリティ基準（コード非学習保証）"],
      weaknesses: ["Composerのような複数ファイルの一括自律書き換え速度はCursorに一歩及ばない"],
      architecture: "GitHub Multi-Model Cloud Agent",
      versionsList: [
        {
          name: "Claude 3.7 Sonnet (Reasoning)",
          shortName: "Sonnet 3.7",
          tier: "paid",
          speed: "高速",
          intelligence: "最高峰",
          bestFor: "複雑なロジック設計、コードレビュー、リファクタリング",
          planAvailability: "Individual ($10) / Business限定",
          description: "Anthropicの最新モデルによる高精度コード支援。"
        },
        {
          name: "o3-mini (Logic & Algorithms)",
          shortName: "o3-mini",
          tier: "paid",
          speed: "高速",
          intelligence: "最高峰",
          bestFor: "アルゴリズム設計、並行処理デバッグ、競プロ級課題",
          planAvailability: "Individual ($10) / Business限定",
          description: "OpenAIの思考モデルによる論理的コード生成。"
        },
        {
          name: "GitHub Copilot (GPT-4o)",
          shortName: "GPT-4o",
          tier: "free",
          speed: "高速",
          intelligence: "高度",
          bestFor: "日々のコード補完、手軽な質問、関数補完",
          planAvailability: "無料枠(月2,000補完) / 有料無制限",
          description: "基本補完とChatを支える安定した主力モデル。"
        }
      ]
    },
    estimatedUsers: "1,500万人以上 / 企業導入実績世界No.1",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 97.4,
    categoryRank: 2,
    overallRank: 4,
    pricingType: "フリーミアム",
    pricingMonthly: "無料プランあり (月2,000補完) / Individual $10 (約1,500円) / Business $19",
    freePlanDetails: {
      limits: "毎月2,000回のコード補完、月50回のCopilot Chatが完全無料。",
      allowedFeatures: ["エディタ内インライン補完", "Copilot Chat"]
    },
    paidPlanDetails: {
      planName: "GitHub Copilot Individual",
      price: "$10 / 月 (年払い $100)",
      unlockedFeatures: ["コード補完・チャット完全無制限", "Claude 3.7 Sonnet / o3-mini / GPT-4oモデルの自由切替", "GitHub CLIでのAIコマンド支援"],
      recommendedFor: "VS CodeやIntelliJを愛用するプログラマー、月10ドルでコスパ良く無制限補完を使いたい人"
    },
    paidWorthRating: 5,
    plansList: [
      {
        id: "free",
        name: "Copilot Free (2024年末新設・完全無料)",
        priceMonthly: "無料 ($0)",
        targetAudience: "学習中の学生、個人趣味で月数千行程度のコーディングをする初学者",
        isFree: true,
        availableModels: ["GPT-4o mini", "標準コード補完エンジン"],
        contextWindow: "現在の編集ファイル",
        messageLimits: "月2,000回のコード補完 ＋ 月50回のCopilot Chat",
        unlockedFeatures: ["VS Code / JetBrainsでのインラインコード補完", "基本コード説明チャット"],
        limitations: ["上位モデル(Claude 3.7 / o3-mini)の切替不可", "月2,000回超過後は補完停止"],
        officialUrl: "https://github.com/features/copilot"
      },
      {
        id: "pro",
        name: "Copilot Individual (プロエンジニア標準)",
        priceMonthly: "$10 / 月 (約1,500円)",
        priceYearly: "年払い $100 (月あたり $8.33)",
        targetAudience: "日常的にコードを書く全開発者・フリーランス（月10ドルの業界最高コスパ）",
        isPopular: true,
        availableModels: ["Claude 3.7 Sonnet (思考モード)", "OpenAI o3-mini", "GPT-4o"],
        contextWindow: "リポジトリ関連ファイル＋GitHubリポジトリ全体",
        messageLimits: "コード補完・Copilot Chatともに【完全無制限】",
        unlockedFeatures: [
          "最先端モデル自由切替（Claude 3.7 Sonnet / o3-mini / GPT-4o）",
          "無制限のインラインコード補完＆チャット",
          "GitHub CLIでのターミナルAIコマンド支援",
          "VS Code, Visual Studio, JetBrains, Neovim対応"
        ],
        officialUrl: "https://github.com/features/copilot"
      },
      {
        id: "business",
        name: "Copilot Business (組織・企業標準)",
        priceMonthly: "$19 / ユーザー / 月",
        targetAudience: "自社コードのセキュリティ・学習除外・知財保護を義務付けたい企業開発チーム",
        availableModels: ["Claude 3.7 Sonnet", "o3-mini", "GPT-4o"],
        contextWindow: "組織リポジトリ全体",
        messageLimits: "無制限コード補完＆チャット",
        unlockedFeatures: [
          "企業向けプライバシー保証（コード・プロンプトをAI学習に絶対使用しない）",
          "公開コードとの一致検出・ブロックフィルター（知財侵害防止）",
          "組織全体の一括シートライセンス管理・ポリシー統制",
          "IP知財損害賠償保護（インデムニフィケーション）"
        ],
        officialUrl: "https://github.com/features/copilot"
      },
      {
        id: "enterprise",
        name: "Copilot Enterprise (エンタープライズ特化)",
        priceMonthly: "$39 / ユーザー / 月",
        targetAudience: "GitHub Enterprise Cloudを契約している大企業・数千人規模の組織",
        availableModels: ["Claude 3.7 Sonnet", "o3-mini", "GPT-4o", "組織内カスタムファインチューン"],
        contextWindow: "全社リポジトリ・Issue・PR・ドキュメント横断セマンティック検索",
        messageLimits: "全社優先キュー・無制限",
        unlockedFeatures: [
          "github.com Web画面統合（リポジトリ・PR・ドキュメントを横断する社内Q&A）",
          "プルリクエストの自動差分要約・レビュー提案",
          "組織固有の社内ナレッジ・社内独自コーディング規約の学習・反映"
        ],
        officialUrl: "https://github.com/features/copilot"
      }
    ],
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "GitHub公式・開発者AIの基準。月10ドルでコード補完無制限＆Claude 3.7 Sonnetも切り替えて使える。",
    description: "マイクロソフトとGitHubが提供するAIプログラミング支援の元祖にして最大手。キーボードを叩くだけで次の行のコードを先読みして灰色の文字で提案してくれます。最近はClaude 3.7 Sonnetやo3-miniモデルも選択可能になり実力がさらに跳ね上がりました。",
    pros: ["月10ドルとCursorの半額で維持できる抜群のコスパ", "無料プランでも月2,000回補完が使える", "GitHubのプルリクエスト要約やコードレビューが快適"],
    cons: ["大規模な複数ファイルリファクタリングはCursorの方が直感的"],
    specs: {
      contextWindow: "ファイルコンテキスト＋リポジトリ関連ファイル",
      multimodal: "コード・自然言語",
      company: "GitHub / Microsoft",
      releaseYear: "2021 (最新版2025-2026)"
    },
    officialUrl: "https://github.com/features/copilot"
  },
  {
    id: "cline",
    name: "Claude Dev (Cline)",
    category: "code",
    categoryLabel: "コード・開発",
    badge: "自律エージェントVS Code拡張",
    version: "Cline 3.0 (Autonomous Agent)",
    versionFeatures: {
      evolution: "VS Code拡張機能として動作。自律的にターミナルコマンドを実行し、ファイルを新規作成・編集し、ブラウザで動作確認してバグを自己修正する完全自律型エンジニア。",
      strengths: ["拡張機能自体は完全オープンソース・無料", "DeepSeekやOpenRouterなどの格安APIキーを使って神コスパ運用", "MCP（Model Context Protocol）による無限の外部ツール連携", "人間が承認するまで実行を待つ安全設計"],
      weaknesses: ["自分でAPIキーを発行して設定する必要がある"],
      architecture: "Autonomous ReAct Agent Loop with MCP Protocol"
    },
    estimatedUsers: "50万人以上急増 / ギーク・上級者に大絶賛",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 95.1,
    categoryRank: 3,
    overallRank: 7,
    pricingType: "オープンソース (完全無料) / API実費のみ",
    pricingMonthly: "拡張機能は0円 / API利用料（DeepSeekなら月数十円、Claudeなら使った分）",
    freePlanDetails: {
      limits: "拡張機能は永年完全無料（APIキーが必要）。",
      allowedFeatures: ["自律タスク実行", "MCPツール連携", "ブラウザ自動テスト"]
    },
    paidPlanDetails: {
      planName: "API従量課金のみ",
      price: "月額サブスクなし（使った分だけAPI会社へ支払い）",
      unlockedFeatures: ["Claude 3.7 SonnetやDeepSeek-R1などの自由な組み合わせ"],
      recommendedFor: "月額20ドルのサブスクを節約したい人、AIに自律して作業を任せたいパワーエンジニア"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "VS Codeの中で勝手に動いてアプリを完成させる自律エージェント。格安APIと組み合わせて爆安運用可能。",
    description: "『Next.jsでToDoアプリ作って、npm run devしてブラウザで確認して』と指示すると、自分でコマンドを打ち、ファイルを作り、エラーが出たら勝手に直すという映画のような自律行動を行う拡張機能です。",
    pros: ["固定のサブスク費用がなく、DeepSeek等の格安APIで超安く運用できる", "外部サービス連携（MCP）で無限に拡張できる", "自分の好きなVS Code環境のまま動く"],
    cons: ["APIキーの取得や残高管理を自分で行う必要がある"],
    specs: {
      contextWindow: "使用するAPIモデルに準拠 (最大200k)",
      multimodal: "コード・ターミナル・ブラウザキャプチャ",
      company: "Cline Open Source Community",
      releaseYear: "2024 (最新版2025)"
    },
    officialUrl: "https://github.com/cline/cline"
  },
  {
    id: "v0-vercel",
    name: "v0 by Vercel",
    category: "code",
    categoryLabel: "コード・開発",
    badge: "フロントエンドUI生成の神",
    version: "v0 2.0 (Next.js / Tailwind / shadcn/ui)",
    versionFeatures: {
      evolution: "言葉でUIのイメージを伝えるだけで、世界最高水準に洗練されたReact / Next.jsコンポーネントコードを一撃生成。右画面で即プレビュー＆微調整。",
      strengths: ["吐き出されるUIコードの圧倒的なデザイン性の高さ", "shadcn/ui + Tailwind CSSの標準ベストプラクティスコード", "ブロックをクリックして『ここの色を変えて』とビジュアル修正", "Figmaデザインのインポート対応"],
      weaknesses: ["バックエンドの複雑なDBロジックというよりはUI/フロント特化"],
      architecture: "Vercel Generative UI Synthesis Engine"
    },
    estimatedUsers: "300万人以上 / Webデザイナー・フロント開発必携",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 96.3,
    categoryRank: 4,
    overallRank: 5,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎月200クレジット) / Premium $20 / 月",
    freePlanDetails: {
      limits: "毎月無料のクレジット補充（約20回以上の生成・修正）。",
      allowedFeatures: ["React/Tailwindコード生成", "リアルタイムプレビュー", "コードコピー"]
    },
    paidPlanDetails: {
      planName: "v0 Premium",
      price: "$20 / 月",
      unlockedFeatures: ["クレジット大幅増量（月5,000クレジット）", "生成UIの非公開（プライベート）", "Figmaからコードへの高精度変換", "チーム共有"],
      recommendedFor: "フロントエンドエンジニア、UIデザイナー、個人開発で爆速で美しいWebを作りたい人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "言葉を打つだけで一流デザイナー作のWeb画面が完成。ReactとTailwindの美しすぎるコードを出力。",
    description: "Next.jsの本家Vercelが作ったUI生成AI。『モダンな暗黒系ダッシュボードで、売上グラフと通知ベルを右上に配置して』と指示するだけで、そのまま本番サービスで使えるレベルの超美麗なコードが即座に生成されます。",
    pros: ["自分でCSSやデザインを書く手間が99%削減される", "shadcn/ui準拠なので自分のプロジェクトにコピペで即動く", "無料枠でも毎月しっかり試せる"],
    cons: ["サーバーサイドの複雑なビジネスロジックは自分で書く必要がある"],
    specs: {
      contextWindow: "UIコンポーネント単位",
      multimodal: "テキスト・画像モックアップ",
      company: "Vercel, Inc.",
      releaseYear: "2023 (最新アップデート2024-2025)"
    },
    officialUrl: "https://v0.dev"
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    category: "code",
    categoryLabel: "コード・開発",
    badge: "ブラウザ完結フルスタック生成",
    version: "Bolt.new (WebContainers駆動)",
    versionFeatures: {
      evolution: "WebContainers技術により、ブラウザの中でNode.js環境ごとフルスタックアプリを即座にビルド＆実行。環境構築ゼロで動くWebアプリが誕生。",
      strengths: ["ブラウザだけでフロントエンド＋バックエンド＋DBが完全動作", "GitHubリポジトリへの直接ワンクリックプッシュ", "Netlifyへのワンクリックデプロイ", "プロトタイプ制作速度が異次元"],
      weaknesses: ["無料トークンの消費がやや早め"],
      architecture: "StackBlitz WebContainers In-Browser Node Runtime"
    },
    estimatedUsers: "200万人以上急成長 / プロトタイピングの覇者",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 94.6,
    categoryRank: 5,
    overallRank: 8,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎日トークン補充) / Pro $20 / 月",
    freePlanDetails: {
      limits: "毎日一定の無料トークンが付与され、小規模アプリ作成が可能。",
      allowedFeatures: ["フルスタックアプリ生成", "ブラウザ内リアルタイムプレビュー", "コードエクスポート"]
    },
    paidPlanDetails: {
      planName: "Bolt.new Pro",
      price: "$20 / 月",
      unlockedFeatures: ["毎月1,000万トークン", "長大なプロジェクト編集", "GitHub連携無制限", "優先インフラ"],
      recommendedFor: "起業家、個人開発者、アイデアをその日のうちに動くWebアプリにして公開したい人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "環境構築ゼロ。アイデアを伝えた瞬間、ブラウザの中で本物の動くWebアプリが組み上がる。",
    description: "ローカルPCにNode.jsやGitをインストールしていなくても、ブラウザのタブを開いて指示するだけで、パッケージのインストールからサーバー起動まで全自動で行い、右画面に動くWebアプリを表示してくれます。",
    pros: ["PCの環境を汚さずにプロトタイプが数分で作れる", "完成したアプリをワンクリックで全世界へWeb公開できる", "バグが出てもAIが自律修復してくれる"],
    cons: ["大規模なエンタープライズ開発には向かない"],
    specs: {
      contextWindow: "プロジェクト全体 (WebContainer)",
      multimodal: "テキスト・画像",
      company: "StackBlitz",
      releaseYear: "2024"
    },
    officialUrl: "https://bolt.new"
  },
  {
    id: "windsurf",
    name: "Windsurf",
    category: "code",
    categoryLabel: "コード・開発",
    badge: "Cursor最大のライバル",
    version: "Cascade Flows (Codeium開発)",
    versionFeatures: {
      evolution: "Codeiumが満を持して放った新世代エディタ。新概念『Flows』により、AIと開発者が思考の衝突なく共同作業を行う次世代の協調体験を実現。",
      strengths: ["Cascadeエージェントによる超高速な推論・コード修正", "AIの行動履歴と意図の透明性が高い", "無料枠がCursorよりも手厚い", "月額$15とCursorより安価な料金設定"],
      weaknesses: ["登場して間もないためコミュニティのプラグイン情報はCursorが先行"],
      architecture: "Codeium Proprietary Real-time Cascade Engine"
    },
    estimatedUsers: "100万人急増 / Cursorから乗り換えるエンジニア多数",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 93.8,
    categoryRank: 6,
    overallRank: 9,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (手厚い無料枠) / Pro $15 / 月",
    freePlanDetails: {
      limits: "無料アカウントでCascadeエージェントの利用が可能。",
      allowedFeatures: ["無制限コード補完", "Cascadeチャット・コード編集の無料枠"]
    },
    paidPlanDetails: {
      planName: "Windsurf Pro",
      price: "$15 / 月 (Cursorより$5安い)",
      unlockedFeatures: ["無制限の高速Cascadeフロー", "最新フロンティアモデル利用", "優先インフラアクセス"],
      recommendedFor: "Cursorに月20ドル払うのを迷っている人、より軽量でスムーズなAIエディタを体験したい人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: false,
    hasApp: true,
    summary: "Cursorを猛追する最新AIエディタ。開発者とAIの呼吸がぴったり合う『Cascade』が月15ドルで動く。",
    description: "無料コード補完で有名なCodeiumが開発した次世代エディタ。独自のCascadeエンジンにより、エンジニアが書いたコードの意図を察知して先回りサポート。Cursorよりも安価で動作が軽快と評判です。",
    pros: ["Cursorと同等以上の機能を月15ドルという安さで提供", "無料プランの使い勝手が非常に良い", "エディタの挙動がキビキビしていて快適"],
    cons: ["まだ歴史が浅くアップデートでUIが変わることがある"],
    specs: {
      contextWindow: "リポジトリ全体ディープインデックス",
      multimodal: "コード・画像・ターミナル",
      company: "Codeium (Exafunction)",
      releaseYear: "2024"
    },
    officialUrl: "https://codeium.com/windsurf"
  },
  {
    id: "replit",
    name: "Replit",
    category: "code",
    categoryLabel: "コード・開発",
    badge: "非エンジニアでもアプリ起業",
    version: "Replit Agent 2.0",
    versionFeatures: {
      evolution: "自然言語で『こんなサービスを作りたい』と伝えるだけで、データベース設計、API構築、UI作成、ホスティングまで丸ごと完結させるエージェント。",
      strengths: ["プログラミング知識ゼロでも実際に使えるWebアプリが作れる", "クラウドホスティング・DB・認証が最初から全部揃っている", "スマホアプリからもコード編集・確認可能", "マルチプレイヤー共同開発"],
      weaknesses: ["本格的なReplit Agentの利用には有料Coreプランが必要"],
      architecture: "Replit Cloud Container + Autonomous Agent Orchestrator"
    },
    estimatedUsers: "2,500万人以上",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 92.0,
    categoryRank: 7,
    overallRank: 12,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (基本IDE) / Replit Core $25 (年払い $20) / 月",
    freePlanDetails: {
      limits: "無料アカウントでブラウザIDE機能と公開プロジェクト作成。",
      allowedFeatures: ["基本のクラウド実行環境", "AI支援の一部試用"]
    },
    paidPlanDetails: {
      planName: "Replit Core",
      price: "$20 / 月 (年払い)",
      unlockedFeatures: ["Replit Agentの利用権", "パワフルな仮想マシンコンテナ", "非公開（プライベート）リポジトリ無制限", "カスタムドメイン接続"],
      recommendedFor: "非エンジニアの起業家、ノーコード感覚で本物のWebアプリを作りたいビジネスパーソン"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "プログラミング未経験でもアプリが作れる。アイデアをチャットするだけでDBもサーバーも完成。",
    description: "非プログラマーが数時間で動くSaaSを立ち上げたと世界中で話題になったReplit Agent。開発環境・データベース・公開サーバーが一体化しているため、面倒なインフラ設定を1秒も考える必要がありません。",
    pros: ["非エンジニアでも実際にログイン機能付きのWebアプリが作れる", "スマホからでも操作・デプロイできる", "コミュニティで他人の作ったアプリを簡単にクローンできる"],
    cons: ["玄人エンジニアにとっては自由度が少し制約される"],
    specs: {
      contextWindow: "Replitクラウド環境全体",
      multimodal: "テキスト・コード・プレビュー",
      company: "Replit, Inc.",
      releaseYear: "2016 (Agent 2024)"
    },
    officialUrl: "https://replit.com"
  },
  {
    id: "codeium",
    name: "Codeium",
    category: "code",
    categoryLabel: "コード・開発",
    badge: "個人利用は永久完全無料",
    version: "Codeium Free / Enterprise",
    versionFeatures: {
      evolution: "個人開発者向けには制限なし・期間制限なしで完全無料提供。70以上のプログラミング言語と40以上の主要エディタに対応した太っ腹サービス。",
      strengths: ["個人は完全無料で無制限のコード補完・チャットが使える", "VS Code, JetBrains, Xcode, Vimなどほぼ全エディタ対応", "レスポンスが爆速でPCが重くならない", "プライバシー重視でコードが学習されない"],
      weaknesses: ["超大規模な自律エージェント機能はWindsurfへの誘導がある"],
      architecture: "In-house High-Throughput Generative Code Engine"
    },
    estimatedUsers: "100万人以上の開発者",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 91.0,
    categoryRank: 8,
    overallRank: 14,
    pricingType: "完全無料 (個人) / 法人有料",
    pricingMonthly: "個人利用は永久完全無料 / Teams $12 / ユーザー / 月",
    freePlanDetails: {
      limits: "個人利用は完全無制限・無料。",
      allowedFeatures: ["無制限のインラインコード補完", "エディタ内AIチャット", "全言語・全IDE対応"]
    },
    paidPlanDetails: {
      planName: "Codeium Teams / Enterprise",
      price: "$12 / ユーザー / 月",
      unlockedFeatures: ["社内リポジトリの全コードベースインデックス", "管理者ダッシュボード", "SaaSまたはセルフホスト導入"],
      recommendedFor: "お金を1円もかけずに高品質なAIコード補完を一生使いたい学生・個人エンジニア"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "GitHub Copilotの無料版代用として最強。個人なら一切課金なしで無制限にコード補完してくれる救世主。",
    description: "『AIのコード補完を使いたいけど月10ドルのサブスクは払いたくない』というすべてのプログラマーの味方。70言語以上に対応し、キー入力を邪魔しない超高速な補完が完全無料で利用できます。",
    pros: ["個人利用が永久に完全無料という圧倒的メリット", "補完速度が非常に速くラグがない", "JetBrainsやXcodeでも快適に動作する"],
    cons: ["複雑な推論チャットではClaude 3.7有料版にやや劣る"],
    specs: {
      contextWindow: "エディタ内ローカルコンテキスト",
      multimodal: "コード・自然言語",
      company: "Codeium",
      releaseYear: "2022"
    },
    officialUrl: "https://codeium.com"
  },
  {
    id: "tabnine",
    name: "Tabnine",
    category: "code",
    categoryLabel: "コード・開発",
    badge: "企業セキュリティ・機密特化",
    version: "Tabnine Protected / Enterprise",
    versionFeatures: {
      evolution: "金融・医療・防衛などの厳格な企業向け。自社専用のオンプレミス環境や完全エアギャップ（オフライン）環境で動作し、ソースコードの外部漏洩を完全遮断。",
      strengths: ["コードが外部サーバーに一切送信されない安全設計", "オープンソースライセンスに違反しないクリーンな学習データのみ使用", "自社の独自社内ライブラリを学習させて補完可能", "企業コンプライアンス適合"],
      weaknesses: ["最先端のフロンティアモデル（Claude 3.7等）のような発想力は控えめ"],
      architecture: "Tabnine Secure Local & Private Cloud LLM"
    },
    estimatedUsers: "100万社以上の開発者（Fortune 500多数）",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 88.0,
    categoryRank: 9,
    overallRank: 21,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (基本補完) / Pro $12 / ユーザー / 月",
    freePlanDetails: {
      limits: "短いインラインコード補完（短文）。",
      allowedFeatures: ["基本補完", "ローカル実行"]
    },
    paidPlanDetails: {
      planName: "Tabnine Pro / Enterprise",
      price: "$12 / 月 (年払い)",
      unlockedFeatures: ["全行コード補完", "自社リポジトリ認識AIチャット", "コンプライアンス保証", "オンプレミス展開"],
      recommendedFor: "機密保持規約が極めて厳しいSIer、金融・官公庁系システムの開発会社"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "ソースコードを1文字も社外に出せない現場のためのAI補完。オンプレミスで動くセキュリティの砦。",
    description: "生成AIを使いたいが『情報漏洩のリスクがあるから社内規程で禁止されている』という企業のための救世主。許諾の取れたコードのみで学習されており、完全ローカルやプライベートクラウドで安全に稼働します。",
    pros: ["セキュリティ部門の審査を最も通過しやすい", "自社コードの学習による社内独自ルールの補完が利く", "PCのオフライン環境でも補完が動く"],
    cons: ["Cursorのような破壊的なマルチファイル一括修正は非対応"],
    specs: {
      contextWindow: "セキュアローカルコンテキスト",
      multimodal: "コード",
      company: "Tabnine Ltd.",
      releaseYear: "2018 (最新版2024)"
    },
    officialUrl: "https://www.tabnine.com"
  },
  {
    id: "devin",
    name: "Devin",
    category: "code",
    categoryLabel: "コード・開発",
    badge: "世界初完全自律型AIエンジニア",
    version: "Devin 2.0 (Cognition AI)",
    versionFeatures: {
      evolution: "世界初の完全自律型AIソフトウェアエンジニア。専用のクラウド仮想マシン内でブラウザを操作し、ドキュメントを読み、バグを直し、プルリクエストを作成。",
      strengths: ["人間のエンジニアのように単独でタスクを完了する自律性", "Upworkの実際のフリーランス案件を自力で受注・納品できる実力", "SWE-benchベンチマークで圧倒的スコアを樹立", "長時間の複雑なデバッグ・依存関係解決"],
      weaknesses: ["月額費用が高額（エンタープライズ・招待制）"],
      architecture: "Cognition Autonomous Cognitive Architecture"
    },
    estimatedUsers: "招待制・数千社（世界トップテック企業）",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 90.0,
    categoryRank: 10,
    overallRank: 17,
    pricingType: "エンタープライズ有料",
    pricingMonthly: "月額 $500〜 (企業向け) / 招待制",
    freePlanDetails: {
      limits: "無料枠なし（デモ動画とウェイトリスト受付のみ）。",
      allowedFeatures: ["機能紹介と作例閲覧"]
    },
    paidPlanDetails: {
      planName: "Devin Enterprise Access",
      price: "月額 $500〜 / ACU（コンピューティングユニット課金）",
      unlockedFeatures: ["完全自律型エンジニアDevinの稼働", "自社リポジトリへの常駐とIssue自動消化"],
      recommendedFor: "人手不足に悩むテック企業の開発チーム、自動でバグ修正PRを作らせたいCTO"
    },
    paidWorthRating: 4,
    hasFreeTier: false,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "未来から来た自律型AIエンジニア。指示を与えて寝て待つだけで、朝にはバグ修正PRが届いている。",
    description: "『補助ツール』ではなく『同僚のジュニアエンジニア』として設計されたAI。GitHubのIssueを割り当てると、勝手にAPI仕様書を検索し、環境を構築してテストコードを書き、合格するまで修正を繰り返してPRを提出します。",
    pros: ["人間のエンジニアが寝ている間にタスクを消化してくれる", "APIや環境のトラブルシューティング能力が異次元", "AIエンジニアの最先端を体現"],
    cons: ["個人が手軽に使うには費用が高額"],
    specs: {
      contextWindow: "自律クラウド仮想環境 (Shell, Browser, Editor)",
      multimodal: "コード・ブラウザ・ターミナル",
      company: "Cognition AI",
      releaseYear: "2024"
    },
    officialUrl: "https://devin.ai"
  }
];
