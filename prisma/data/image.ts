import { ToolSeedItem } from "./types";

export const imageTools: ToolSeedItem[] = [
  {
    id: "midjourney",
    name: "Midjourney",
    category: "image",
    categoryLabel: "画像生成・編集",
    badge: "芸術・画質No.1",
    version: "v7 / v6.1 / Niji v6",
    versionFeatures: {
      evolution: "最新v7による極限のフォトリアリズムと超高精細テクスチャ描写、v6.1およびアニメ特化Niji v6、Web版生成エディタ（外部画像インペイント・拡張対応）を完備。",
      strengths: ["現実と見紛う映画クオリティの写実性", "圧倒的な美術的センス・構図力", "アニメ特化Nijiモデルの最高峰の絵柄", "Web版生成エディタでのインペイント・拡張"],
      weaknesses: ["無料プランが現在完全廃止", "DiscordまたはWebでの操作が必要"],
      architecture: "Proprietary Latent Diffusion Transformer (v7)",
      versionsList: [
        {
          name: "Midjourney v7 (最新フラッグシップ)",
          shortName: "v7",
          tier: "paid",
          speed: "高速",
          intelligence: "最高峰",
          bestFor: "超精細テクスチャ、光と物理現象の忠実描写、プロ向け広告美術",
          planAvailability: "有料サブスク全プラン ($10〜)",
          description: "解像度と光線追跡レベルの写実性を誇るMidjourneyの最新世代モデル。"
        },
        {
          name: "Midjourney v6.1 (実写・アート)",
          shortName: "v6.1",
          tier: "paid",
          speed: "高速",
          intelligence: "最高峰",
          bestFor: "映画的ライティング、皮膚・毛髪の質感、美術絵画",
          planAvailability: "有料サブスク全プラン ($10〜)",
          description: "写実性と光の表現において業界基準。安定した芸術的クオリティを提供。"
        },
        {
          name: "Niji Journey v6 (アニメ特化)",
          shortName: "Niji v6",
          tier: "paid",
          speed: "標準",
          intelligence: "最高峰",
          bestFor: "日本のアニメ調、イラスト、キャラクターデザイン、同人誌表紙",
          planAvailability: "有料サブスク全プラン",
          description: "日本のイラストレーターの繊細なタッチを忠実に再現するアニメ特化モデル。"
        }
      ]
    },
    estimatedUsers: "1,600万人以上 / クリエイター支持率最高峰",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 98.2,
    categoryRank: 1,
    overallRank: 3,
    pricingType: "完全有料",
    pricingMonthly: "Basic $10 (約1,500円) / Standard $30 / Pro $60",
    freePlanDetails: {
      limits: "無料枠は悪用防止のため現在停止中（完全有料制）。",
      allowedFeatures: ["コミュニティギャラリーの閲覧のみ"]
    },
    paidPlanDetails: {
      planName: "Midjourney Standard Plan",
      price: "$30 / 月",
      unlockedFeatures: ["Relaxモード（生成回数実質無制限）", "15時間のFast生成時間", "商用利用ライセンス", "Web版エディタの全機能利用"],
      recommendedFor: "デザイナー、イラストレーター、広告クリエイター、最高品質の画像を求めるすべての人"
    },
    plansList: [
      {
        id: "basic",
        name: "Basic Plan",
        priceMonthly: "$10 / 月 (約1,500円)",
        priceYearly: "年払い $96 (月あたり $8)",
        targetAudience: "月に数十枚〜200枚程度、ブログやSNSの挿絵・趣味で最高画質を試したいライト層",
        availableModels: ["Midjourney v7", "Midjourney v6.1", "Niji Journey v6 (アニメ)"],
        contextWindow: "最大解像度 2048x2048",
        messageLimits: "月3.3時間 (約200枚分) のFast生成時間",
        unlockedFeatures: ["商用利用ライセンス", "Web版生成エディタ利用", "最大3ジョブの同時並列実行", "コミュニティギャラリーへのアクセス"],
        limitations: ["Relax無制限モードは非対応 (Fast時間超過後は追加購入が必要)"],
        officialUrl: "https://docs.midjourney.com/docs/plans"
      },
      {
        id: "standard",
        name: "Standard Plan (★一番人気・コスパ最強)",
        priceMonthly: "$30 / 月 (約4,500円)",
        priceYearly: "年払い $288 (月あたり $24)",
        targetAudience: "デザイナー、広告クリエイター、枚数を気にせず納得いくまで何百枚も作り込みたいプロ",
        isPopular: true,
        availableModels: ["Midjourney v7", "Midjourney v6.1", "Niji Journey v6"],
        contextWindow: "最大解像度 2048x2048",
        messageLimits: "月15時間のFast生成 ＋ 【Relaxモードで生成枚数完全無制限！】",
        unlockedFeatures: [
          "Relaxモード（追加料金なしで実質無制限に生成し放題！）",
          "15時間のFast高速生成時間",
          "Web版エディタのインペイント・アウトペイント全機能",
          "商用利用ライセンス"
        ],
        officialUrl: "https://docs.midjourney.com/docs/plans"
      },
      {
        id: "pro",
        name: "Pro Plan (クリエイター・スタジオ)",
        priceMonthly: "$60 / 月 (約9,000円)",
        priceYearly: "年払い $576 (月あたり $48)",
        targetAudience: "未発表プロジェクトのため生成画像を他人に非公開（ステルス）にしたいプロ、大量同時並列生成したい人",
        availableModels: ["全Midjourneyモデル"],
        contextWindow: "最大解像度 2048x2048",
        messageLimits: "月30時間のFast生成 ＋ Relax無制限 ＋ 最大12ジョブ同時並列",
        unlockedFeatures: [
          "Stealthモード（Webギャラリーから画像を完全に隠し非公開化）",
          "最大12ジョブの超高速同時並列実行",
          "30時間のFast生成時間",
          "Relaxモード無制限生成"
        ],
        officialUrl: "https://docs.midjourney.com/docs/plans"
      },
      {
        id: "mega",
        name: "Mega Plan (制作プロダクション・ヘビーユーザー)",
        priceMonthly: "$120 / 月 (約18,000円)",
        priceYearly: "年払い $1,152 (月あたり $96)",
        targetAudience: "ゲーム会社、広告代理店、24時間常時Fast生成をフル回転させたい制作スタジオ",
        availableModels: ["全Midjourneyモデル最優先"],
        contextWindow: "最大解像度 2048x2048",
        messageLimits: "月60時間のFast生成 ＋ Relax無制限 ＋ Stealthモード",
        unlockedFeatures: [
          "最長60時間のFast生成時間",
          "Stealthモード標準装備",
          "最大12ジョブ同時並列実行",
          "最高優先度サポート"
        ],
        officialUrl: "https://docs.midjourney.com/docs/plans"
      }
    ],
    paidWorthRating: 5,
    hasFreeTier: false,
    supportsJapanese: false,
    commercialUse: true,
    hasApi: false,
    hasApp: false,
    summary: "美しさで右に出るものなし。映画のワンシーンのような息を呑む画像を生成する最高峰AI。",
    description: "プロのクリエイターや広告業界で圧倒的な支持を集める画像生成AI。複雑な画風指定をしなくても、ライティングや質感が最初からプロの映画カメラマンが撮影したような芸術的クオリティで出力されます。",
    pros: ["圧倒的なディテールとライティングの美しさ", "アニメ調もNijiモードで超ハイクオリティ", "Standardプラン以上なら枚数無制限で生成可能"],
    cons: ["無料トライアルがない", "プロンプトは英語推奨"],
    specs: {
      contextWindow: "最大解像度 2048x2048 (アップスケール対応)",
      multimodal: "画像入力 (Image to Image, Blend)",
      company: "Midjourney, Inc.",
      releaseYear: "2022 (最新版2024-2025)"
    },
    officialUrl: "https://www.midjourney.com"
  },
  {
    id: "flux",
    name: "Flux",
    category: "image",
    categoryLabel: "画像生成・編集",
    badge: "現代の業界新標準",
    version: "FLUX.1.1 [pro] / FLUX.1 [dev] / FLUX.1 [schnell]",
    versionFeatures: {
      evolution: "Stable Diffusionの原作者陣（Black Forest Labs）が開発。FLUX.1.1 [pro]による6倍高速化と指・文字描写の完全制御を実現。",
      strengths: ["人間の指・手足の描写が圧倒的に破綻しない", "看板やTシャツの文字を指示通りに完璧に描画", "自然言語の指示への忠実度", "オープンウェイト（[dev]版）提供"],
      weaknesses: ["ローカル実行にはVRAM 12GB以上の高性能GPUが必要"],
      architecture: "12B Parameter Rectified Flow Transformer",
      versionsList: [
        {
          name: "FLUX.1.1 [pro] (Ultra Fast API)",
          shortName: "[pro]",
          tier: "paid",
          speed: "超高速",
          intelligence: "最高峰",
          bestFor: "商用サービス、高精細プロダクションレンダリング",
          planAvailability: "API従量課金 ($0.04/枚)",
          description: "従来の[pro]に比べ生成速度が6倍向上し、文字描写と皮膚質感がさらに進化。"
        },
        {
          name: "FLUX.1 [dev] (オープンウェイト)",
          shortName: "[dev]",
          tier: "free",
          speed: "標準",
          intelligence: "最高峰",
          bestFor: "ローカルPC生成、LoRA学習、個人研究",
          planAvailability: "非商用完全無料",
          description: "研究者・個人向けにウェイトが公開された最高峰の画像モデル。"
        },
        {
          name: "FLUX.1 [schnell] (4ステップ爆速)",
          shortName: "[schnell]",
          tier: "free",
          speed: "超高速",
          intelligence: "高度",
          bestFor: "リアルタイムプレビュー、低スペックGPU、商用オープン利用",
          planAvailability: "完全無料 (Apache 2.0)",
          description: "わずか4ステップの推論で美麗な画像を即座に生成する超高効率モデル。"
        }
      ]
    },
    estimatedUsers: "数百万人急増 / オープン系覇権",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 97.0,
    categoryRank: 2,
    overallRank: 6,
    pricingType: "オープンソース / クラウドAPI従量課金",
    pricingMonthly: "ローカル完全無料 / クラウド各社で無料枠あり / Pro API $0.05/枚",
    freePlanDetails: {
      limits: "PCスペックがあればローカルで完全無料・無制限。各クラウド（fal.ai、Replicate等）でお試し無料枠。",
      allowedFeatures: ["FLUX.1 [schnell] / [dev]モデルのローカル利用"]
    },
    paidPlanDetails: {
      planName: "FLUX.1 [pro] API",
      price: "1枚あたり約5〜7円 (従量課金)",
      unlockedFeatures: ["最高画質モデル[pro]のAPIアクセス", "商用利用無制限", "超高速レンダリング"],
      recommendedFor: "AIクリエイター、ローカルで自由かつ無制限に高画質画像を生成したいPCユーザー"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "Midjourneyに迫るクオリティが無料で手元で動く。指の描写と文字入れの正確さで業界を席巻。",
    description: "Stable Diffusionを世に送り出した天才研究者たちが結成したBlack Forest Labsが放った新世代モデル。従来の画像AI最大の弱点だった『手の破綻』と『文字が潰れる問題』を鮮やかに解決しました。",
    pros: ["指や解剖学的構造が極めて自然", "画像内にアルファベットを正確に配置できる", "ハイスペックPCなら完全無料で一生使い放題"],
    cons: ["PCで動かすにはゲーミングPC（RTXグラボ等）が必要"],
    specs: {
      contextWindow: "12Bパラメータ",
      multimodal: "テキスト・ControlNet対応",
      company: "Black Forest Labs",
      releaseYear: "2024 (最新版2025)"
    },
    officialUrl: "https://blackforestlabs.ai"
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    category: "image",
    categoryLabel: "画像生成・編集",
    badge: "無限のカスタマイズ性",
    version: "SD 3.5 Large / Turbo / SDXL",
    versionFeatures: {
      evolution: "ControlNet、LoRA、CheckPointなどの膨大な外部拡張エコシステムにより、ポーズ・構図・キャラクターの一貫性をミリ単位で完全制御。SD 3.5 Largeにより解剖学的正確さと文字描写が飛躍。",
      strengths: ["ポーズや構図を完全に思い通りに指定可能", "世界中のユーザーが作った膨大な追加モデル（LoRA）", "検閲や利用制限のない完全な自由", "ローカル実行でプライバシー完全保護"],
      weaknesses: ["環境構築（WebUI/ComfyUI）にIT知識が必要"],
      architecture: "Multimodal Diffusion Transformer (MMDiT)",
      versionsList: [
        {
          name: "SD 3.5 Large (8Bパラメータ)",
          speed: "標準",
          intelligence: "最高峰",
          bestFor: "最高解像度、複雑なプロンプト追従、文字入り画像",
          planAvailability: "完全無料 (Community License)",
          description: "Stability AIのフラッグシップ。フォトリアリズムとテキスト描写力が極限まで強化。"
        },
        {
          name: "SD 3.5 Turbo (超高速4ステップ)",
          speed: "超高速",
          intelligence: "高度",
          bestFor: "リアルタイム生成、低遅延プレビュー",
          planAvailability: "完全無料",
          description: "わずか4ステップでSD 3.5 Large同等の画質を叩き出す超高速蒸留モデル。"
        }
      ]
    },
    estimatedUsers: "数千万人 (オープンソースコミュニティ最大手)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 95.9,
    categoryRank: 3,
    overallRank: 8,
    pricingType: "オープンソース (完全無料)",
    pricingMonthly: "完全無料 (GPU環境) / Stability AI API従量課金",
    freePlanDetails: {
      limits: "ローカル環境（AUTOMATIC1111やComfyUI）で完全無制限・無料。",
      allowedFeatures: ["全モデルのダウンロード", "LoRAの自作・学習", "ControlNetによる構図制御"]
    },
    paidPlanDetails: {
      planName: "Stability AI Membership",
      price: "月額 $20 (年商100万ドル以上の商業利用向け)",
      unlockedFeatures: ["大規模商用ライセンス", "クラウドAPI優先アクセス"],
      recommendedFor: "自作イラストの学習を行いたい絵師、3Dやゲーム制作で精密なアセットを作りたい開発者"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "自由度無限大のオープンソース神話。ポーズや絵柄を思い通りに操りたいならこれ一択。",
    description: "世界中の開発者や絵師がプラグインや学習モデルを公開している画像生成界のLinux。ControlNetを使えば『この棒人間と同じポーズで描いて』『この線画に着色して』といった職人芸のような指示が可能です。",
    pros: ["同一キャラクターの差分や特定ポーズの制御が最強", "追加学習（LoRA）で自分の絵柄を学習させられる", "完全無料でコストがかからない"],
    cons: ["初心者には初期セットアップのハードルが高い"],
    specs: {
      contextWindow: "8Bパラメータ (SD 3.5 Large)",
      multimodal: "テキスト・画像・骨格・深度・線画",
      company: "Stability AI",
      releaseYear: "2022 (最新版2024-2025)"
    },
    officialUrl: "https://stability.ai"
  },
  {
    id: "dall-e-3",
    name: "DALL-E 3",
    category: "image",
    categoryLabel: "画像生成・編集",
    badge: "日本語プロンプト最強",
    version: "DALL-E 3 (OpenAI)",
    versionFeatures: {
      evolution: "ChatGPTと一体化。ユーザーの適当な日本語の指示をChatGPTが自動で詳細な描写プロンプトに膨らませて生成。",
      strengths: ["日本語のニュアンスを100%完璧に理解", "会話しながら『背景の木を青にして』と部分修正可能", "ChatGPT Plusユーザーなら手軽に即利用", "著作権・倫理フィルターが強固"],
      weaknesses: ["写真のような超リアルな質感はMidjourneyに一歩及ばない"],
      architecture: "OpenAI Auto-captioning Diffusion Architecture"
    },
    estimatedUsers: "1億人以上 (ChatGPT内蔵)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 96.2,
    categoryRank: 4,
    overallRank: 7,
    pricingType: "フリーミアム (ChatGPT内蔵)",
    pricingMonthly: "無料 (回数制限あり) / ChatGPT Plus $20/月",
    freePlanDetails: {
      limits: "ChatGPT無料版で1日数枚の画像生成が可能。Bing Image Creatorなら毎日15ブースト無料。",
      allowedFeatures: ["日本語での自然な画像生成", "Microsoft Designerでの編集"]
    },
    paidPlanDetails: {
      planName: "ChatGPT Plus",
      price: "$20 / 月",
      unlockedFeatures: ["画像生成の制限緩和", "画像の一部を選択して修正するインペイント機能", "商用利用自由"],
      recommendedFor: "プロンプトの英語学習をしたくない人、手軽にブログのアイキャッチや挿絵を作りたい人"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "日本語が一番通じる画像AI。ChatGPTに『こんな絵描いて』とおしゃべりするだけで即完成。",
    description: "プロンプト職人のような呪文（テクニック）が一切不要な、世界で最も初心者に優しい画像生成AI。『犬がカフェでMacBookを開いているイラストをポップな色で』と普段の日本語で伝えるだけで完璧な絵を出してくれます。",
    pros: ["日本語の長文やニュアンスの再現度がずば抜けている", "ChatGPTの会話画面から離れずに画像が作れる", "画像の部分を選択して部分修正できる"],
    cons: ["リアルな実写人物の生々しいディテールはやや苦手"],
    specs: {
      contextWindow: "1024x1024, 1024x1792 (縦横比自由)",
      multimodal: "テキスト・画像編集",
      company: "OpenAI",
      releaseYear: "2023"
    },
    officialUrl: "https://openai.com/dall-e-3"
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    category: "image",
    categoryLabel: "画像生成・編集",
    badge: "著作権安全・Photoshop統合",
    version: "Firefly Image 3",
    versionFeatures: {
      evolution: "Photoshopの『生成塗りつぶし』『生成拡張』に直結。Adobe Stockの許諾済み画像のみで学習された完全商業安全AI。",
      strengths: ["企業の商用利用でも著作権侵害リスクがゼロ", "PhotoshopやIllustratorのレイヤー上で直接操作", "参照画像と構図・スタイルの完全一致機能", "ベクター（SVG）グラフィック生成対応"],
      weaknesses: ["過度なアニメ表現や有名人の再現は意図的にブロック"],
      architecture: "Adobe Proprietary Commercial Safe Engine"
    },
    estimatedUsers: "数千万人 (Creative Cloudユーザー)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 92.8,
    categoryRank: 5,
    overallRank: 10,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎月25クレジット) / プレミアム 月額680円 / CCコンプリート",
    freePlanDetails: {
      limits: "Web版で毎月25の生成クレジットが無料補充。",
      allowedFeatures: ["テキストから画像生成", "テキスト効果", "生成塗りつぶしのWeb試用"]
    },
    paidPlanDetails: {
      planName: "Firefly プレミアムプラン / Creative Cloud",
      price: "月額 680円〜 (単体)",
      unlockedFeatures: ["生成クレジット大幅増量", "Photoshop/Illustrator内でのシームレスな生成塗りつぶし", "透かし削除", "企業向けIP補償"],
      recommendedFor: "プロのグラフィックデザイナー、著作権コンプライアンスが厳しい法人の制作部門"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "デザイナーの現場スタンダード。著作権的に完全にクリーンで、Photoshopのカンバス上で直接生成。",
    description: "プロの現場で絶対に避けるべき著作権トラブルを根絶するために設計されたAI。写真の足りない端を一瞬で伸ばす『生成拡張』や、不要な人物を自然に消す『生成塗りつぶし』は、世界中のクリエイターの必須技法となっています。",
    pros: ["企業の広告や製品パッケージに安心して使える商用安全性", "Photoshopとの連携がこれ以上なく快適", "Web版なら無料枠で毎月試せる"],
    cons: ["尖ったサブカル・ファンタジー表現にはフィルターがかかりやすい"],
    specs: {
      contextWindow: "Photoshopネイティブ解像度",
      multimodal: "テキスト・画像参照・ベクター",
      company: "Adobe",
      releaseYear: "2023 (最新版2024)"
    },
    officialUrl: "https://www.adobe.com/products/firefly.html"
  },
  {
    id: "recraft",
    name: "Recraft",
    category: "image",
    categoryLabel: "画像生成・編集",
    badge: "ベクター・アイコン神ツール",
    version: "Recraft V3 (Red_panda)",
    versionFeatures: {
      evolution: "ベンチマークサイト人工知能画像生成ランキングでMidjourneyを破り世界1位を獲得。ラスター画像だけでなく拡大縮小自在なSVGベクターを一発出力。",
      strengths: ["SVG形式（ベクター）での完全書き出し対応", "UIデザイン用のアプリアイコン・ピクトグラム生成", "カラーパレットとデザインスタイルの完全統一", "タイポグラフィとバナーのレイアウト作成"],
      weaknesses: ["写真のリアリズムよりもグラフィックデザインに特化"],
      architecture: "Recraft Vector & Raster Generative Model"
    },
    estimatedUsers: "300万人以上 / UI/UXデザイナーに大人気",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 91.5,
    categoryRank: 6,
    overallRank: 13,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎日一定クレジット) / Basic $20 / 月",
    freePlanDetails: {
      limits: "毎日無料のクレジット補充（生成物は公開ギャラリーに掲載）。",
      allowedFeatures: ["SVGベクター生成", "アイコンセット生成", "スタイルパレット指定"]
    },
    paidPlanDetails: {
      planName: "Recraft Basic",
      price: "$20 / 月",
      unlockedFeatures: ["生成画像の非公開（プライベート生成）", "高速生成時間無制限", "商用利用完全フリー", "高解像度ベクター最適化エクスポート"],
      recommendedFor: "Webデザイナー、UI/UXデザイナー、自作アプリやプレゼン用のアイコンを作りたい人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "Webデザイナー絶叫の神ツール。拡大しても絶対にぼやけないSVGベクターとアイコンを一瞬で生成。",
    description: "従来の画像AIでは不可能だった『ベクター画像（SVG）』を最初から生成できる革命的デザインツール。同じカラーパレットでアイコンセットを10個揃えたり、ロゴを作成してIllustratorやFigmaに即貼り付け可能です。",
    pros: ["FigmaやWebサイトにそのまま貼れるベクターSVGが出力できる", "同一テイストのアイコンを量産できる", "直感的なキャンバス型UIで操作が楽しい"],
    cons: ["映画のようなリアル写真の作成はMidjourneyの方が上"],
    specs: {
      contextWindow: "ベクターSVG & ラスター",
      multimodal: "テキスト・パレット・スタイル指定",
      company: "Recraft, Inc.",
      releaseYear: "2023 (最新版2024-2025)"
    },
    officialUrl: "https://www.recraft.ai"
  },
  {
    id: "leonardo-ai",
    name: "Leonardo.Ai",
    category: "image",
    categoryLabel: "画像生成・編集",
    badge: "無料枠最強＆ゲーム調",
    version: "Phoenix / Kino XL / Universal Upscaler",
    versionFeatures: {
      evolution: "オーストラリアのスタートアップ（Canvaが買収）。毎日150トークンが無料補充され、初心者でもWebブラウザ上でプロ級のゲームアセットを量産可能。",
      strengths: ["毎日150トークンが無料で復活（実質毎日無料）", "ゲームキャラクター・背景・アイテムの質感に超特化", "直感的なリアルタイムCanvasエディタ", "モーション（動画化）機能も内蔵"],
      weaknesses: ["設定項目が豊富すぎて完全初心者は迷いやすい"],
      architecture: "Leonardo Proprietary Finetuned Diffusion"
    },
    estimatedUsers: "1,900万人以上",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 93.4,
    categoryRank: 7,
    overallRank: 9,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎日150トークン) / Apprentice $10 / 月〜",
    freePlanDetails: {
      limits: "毎日150トークンが自動リセット補充（1日約10〜15枚の高画質生成）。",
      allowedFeatures: ["Phoenixモデル利用", "Canvas編集", "基本アップスケール"]
    },
    paidPlanDetails: {
      planName: "Leonardo Apprentice",
      price: "$10 / 月 (年払い)",
      unlockedFeatures: ["毎月8,500トークン", "生成画像のプライベート非公開", "高速キュー優先", "独自モデルのカスタム追加学習"],
      recommendedFor: "ゲームクリエイター、VTuber素材を作りたい人、無料で毎日高品質な画像を試したい人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "毎日無料で15枚以上作れる太っ腹AI。ゲームやファンタジー系の美麗イラストを作るなら最強。",
    description: "Canvaファミリーに加わった超人気画像生成プラットフォーム。最大の特徴は毎日無料トークンが補充される点で、課金しなくても実用レベルで使い倒せます。キャラクターの立体感やファンタジー描写の美麗さは圧巻。",
    pros: ["無料枠が毎日リフレッシュされるのでお金がかからない", "ゲームアセットや美麗なキャラクター作りに強い", "ブラウザだけで完結しスマホアプリも便利"],
    cons: ["商用での完全非公開にするには有料プランが必要"],
    specs: {
      contextWindow: "カスタムアスペクト比対応",
      multimodal: "テキスト・画像参照・Pose・Edge",
      company: "Leonardo.Ai (Canva)",
      releaseYear: "2023"
    },
    officialUrl: "https://leonardo.ai"
  },
  {
    id: "ideogram",
    name: "Ideogram",
    category: "image",
    categoryLabel: "画像生成・編集",
    badge: "英語文字描写の先駆者",
    version: "Ideogram 2.0",
    versionFeatures: {
      evolution: "画像内にスペルミスのないタイポグラフィ（文字）を描き込むパイオニア。ポスター、Tシャツデザイン、ロゴ制作に革命をもたらしたモデル。",
      strengths: ["ポスター内の英語キャッチコピーが一切スペルミスしない", "タイポグラフィとイラストのグラフィックデザイン統合", "スタイルプリセット（デザイン、3D、写実、アニメ）", "毎日無料クレジット付与"],
      weaknesses: ["日本語の漢字・ひらがな文字の直接描画はまだ限定的"],
      architecture: "Ideogram Deep Co-Design Diffusion"
    },
    estimatedUsers: "800万人以上",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 89.9,
    categoryRank: 8,
    overallRank: 15,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎日10クレジット) / Basic $7 / Plus $16 / 月",
    freePlanDetails: {
      limits: "毎日10の低速クレジット（約40枚生成）が付与。",
      allowedFeatures: ["Ideogram 2.0基本生成", "公開ギャラリーへの共有"]
    },
    paidPlanDetails: {
      planName: "Ideogram Plus",
      price: "$16 / 月 (年払い)",
      unlockedFeatures: ["プライベート生成", "毎月1,000の高速生成クレジット", "高解像度オリジナルPNGダウンロード", "ネガティブプロンプト利用"],
      recommendedFor: "アパレルTシャツデザイナー、カフェの看板・ロゴを作りたい店舗オーナー、ポスター制作者"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "文字入れの天才。Tシャツのロゴやポスターのキャッチコピーがスペルミスなくビシッと決まる。",
    description: "『Coffee & Books』という看板をカフェのイラストの中に描かせても、従来のAIのように文字が溶けたり化けたりせず、フォントのデザインまで洗練された状態で出力されます。ステッカーやグッズ制作に最適。",
    pros: ["ロゴやTシャツデザインのモックアップが一発で決まる", "無料枠でも毎日十分楽しめる", "構図のバランスが極めて洗練されている"],
    cons: ["日本語の毛筆フォントなどの描画は英語に比べると苦手"],
    specs: {
      contextWindow: "各解像度対応",
      multimodal: "テキスト・タイポグラフィ",
      company: "Ideogram Inc.",
      releaseYear: "2023 (最新版2024)"
    },
    officialUrl: "https://ideogram.ai"
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    category: "image",
    categoryLabel: "画像生成・編集",
    badge: "ノンデザイナーの味方",
    version: "Canva Magic Studio",
    versionFeatures: {
      evolution: "プレゼン資料やインスタ投稿の作成画面で直接呼び出し可能。背景透過、消しゴムマジック、文章からの一括レイアウト生成を統合。",
      strengths: ["デザイン作成中のカンバスに直接画像を呼び出し配置", "ワンクリックでの背景透過（切り抜き）が超高速・高精度", "サイズ変更や言語翻訳をデザインのまま一括実行", "直感的な日本語操作画面"],
      weaknesses: ["単体の画像生成クオリティはMidjourneyやFlux専業ツールに一歩及ばない"],
      architecture: "Canva Multi-Engine Design Pipeline"
    },
    estimatedUsers: "1億7,000万人 (Canvaグローバル)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 94.1,
    categoryRank: 9,
    overallRank: 11,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Canva Pro 月額1,500円 (年額12,000円)",
    freePlanDetails: {
      limits: "無料アカウントで一定回数のMagic Studio機能利用。",
      allowedFeatures: ["基本の画像生成", "デザインテンプレート利用", "限定的な切り抜き"]
    },
    paidPlanDetails: {
      planName: "Canva Pro",
      price: "月額 1,500円 (年払い 12,000円)",
      unlockedFeatures: ["ワンクリック背景透過無制限", "Magic Eraser（不要物消去）", "1億点以上の有料写真・フォント素材使い放題", "ブランドキット設定"],
      recommendedFor: "SNS運用者、中小企業経営者、学校の先生、ノンデザイナーの広報担当"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "デザインの知識ゼロでもプロ級バナーが完成。背景の切り抜きから配置まで1クリック。",
    description: "世界一使いやすいデザインプラットフォームCanvaに組み込まれたAIスイート。インスタのストーリー、YouTubeのサムネイル、社内プレゼン資料などを、テンプレートとAI画像生成を掛け合わせて数分で完成させられます。",
    pros: ["画像を作った後の文字乗せやレイアウト調整が一番ラク", "背景の切り抜きがワンクリックで完璧", "スマホアプリでも同じように操作できる"],
    cons: ["マニアックなアニメ調や超本格アートには向かない"],
    specs: {
      contextWindow: "Canvaテンプレート規格",
      multimodal: "テキスト・画像・ベクター・動画",
      company: "Canva",
      releaseYear: "2023 (最新アップデート2024)"
    },
    officialUrl: "https://www.canva.com"
  },
  {
    id: "magnific-ai",
    name: "Magnific AI",
    category: "image",
    categoryLabel: "画像生成・編集",
    badge: "8K超解像度ディテール幻覚",
    version: "Magnific Relight & Upscale 2.0",
    versionFeatures: {
      evolution: "低解像度の荒い画像から、AIが『存在しなかった毛穴・布の繊維・瞳の輝き』を自律的に想像・補完して映画級の8K超解像度に再構築。",
      strengths: ["ピンボケ画像が超高精細なシネマティック画像に化ける", "Creativityスライダーでディテール再構築の度合いを制御", "Relight機能で写真の光源の位置（夕日・ネオン等）を変更", "ハイエンド商業広告で採用急増"],
      weaknesses: ["完全有料で月額約$39〜と高額"],
      architecture: "Deep Hallucinative Upscaling Engine"
    },
    estimatedUsers: "数十万人 (ハイエンドフォトグラファー・スタジオ)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 86.5,
    categoryRank: 10,
    overallRank: 25,
    pricingType: "完全有料",
    pricingMonthly: "Pro $39 / 月〜 (無料トライアルなし)",
    freePlanDetails: {
      limits: "無料枠なし（完全有料サービス）。",
      allowedFeatures: ["サンプルビフォーアフターの閲覧のみ"]
    },
    paidPlanDetails: {
      planName: "Magnific Pro",
      price: "$39 / 月",
      unlockedFeatures: ["毎月一定の超解像度アップスケールクレジット", "Relight（光源変更機能）", "16K出力対応", "商用利用自由"],
      recommendedFor: "プロの写真家、3Dアーティスト、巨大ポスターや大型ビジョン用の高解像度出力が必要な制作会社"
    },
    paidWorthRating: 3,
    hasFreeTier: false,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "ピンボケ画像を8K映画クオリティに。存在しなかった毛穴や光の反射をAIが想像して超高解像度化。",
    description: "従来の『単に拡大してぼかす』アップスケーラーとは次元が異なり、足りない画素にAIがリアルな皮膚感や布の折り目を『描き足す（幻覚させる）』ことで、超高精細な美術品へと昇華させるプロ向け特化ツールです。",
    pros: ["スマホで撮った荒い写真がプロのカメラマン撮影に見違える", "光源の向きや時間帯を後から自由にいじれる", "広告制作や印刷用途で唯一無二の実力"],
    cons: ["個人が普段使いするには利用料金が高価"],
    specs: {
      contextWindow: "最大16K解像度出力",
      multimodal: "画像入力・プロンプト誘導",
      company: "Freepik (Magnific AI)",
      releaseYear: "2023 (最新版2024)"
    },
    officialUrl: "https://magnific.ai"
  }
];
