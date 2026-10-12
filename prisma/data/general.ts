import { ToolSeedItem } from "./types";

export const generalTools: ToolSeedItem[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "絶対王者",
    version: "GPT-4o / o1 / o3-mini",
    versionFeatures: {
      evolution: "GPT-4oによる超高速マルチモーダル対話に加え、推論特化型o1/o3-miniで複雑な数学・論理思考が劇的進化。",
      strengths: ["超高速レスポンス", "高度な音声会話モード", "深い論理的思考(o1)", "プラグイン/GPTsエコシステム"],
      weaknesses: ["無料版の利用上限が混雑時に厳格化", "専門的法務などの極小ハルシネーション"],
      architecture: "GPT-4o (Omni) & o1 CoT Reasoning Engine",
      versionsList: [
        {
          name: "GPT-4o (Omni)",
          speed: "超高速",
          intelligence: "高度",
          bestFor: "日常会話、文章作成、Web検索、音声リアルタイム対話",
          planAvailability: "無料(制限あり) / Plusで無制限級",
          description: "テキスト・音声・視覚を統合処理する最新主力モデル。ミリ秒単位の爆速応答と極めて滑らかな会話が特徴。"
        },
        {
          name: "o1 (Reasoning)",
          speed: "じっくり推論",
          intelligence: "最高峰",
          bestFor: "難関コーディング、数学、科学論文、複雑な論理設計",
          planAvailability: "Plus / Pro限定",
          description: "回答前に自己思考（思考の連鎖）を行い、途中で間違いを自己修正しながら解く最高峰推論モデル。"
        },
        {
          name: "o3-mini (Reasoning)",
          speed: "高速",
          intelligence: "最高峰",
          bestFor: "競技プログラミング、数学、コストパフォーマンス重視の推論",
          planAvailability: "無料 / Plus / API",
          description: "o1の圧倒的な論理思考力を軽量・高速化。数学やアルゴリズム問題でo1を凌駕するスコアを記録。"
        },
        {
          name: "GPT-4o mini",
          speed: "超高速",
          intelligence: "標準",
          bestFor: "短文要約、簡単な質問、大量テキスト処理",
          planAvailability: "無料版で使い放題",
          description: "日常的な質問や軽いタスクに特化した超軽量モデル。無料ユーザーでも制限なく高速に利用可能。"
        }
      ]
    },
    estimatedUsers: "2億人以上 / 世界No.1",
    siteRegisteredCount: 1845,
    votesCount: 2340,
    rankScore: 99.4,
    categoryRank: 1,
    overallRank: 1,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Plus $20 (約3,000円) / Pro $200",
    freePlanDetails: {
      limits: "GPT-4oが数時間ごとに数回、以降はGPT-4o miniへ切り替え。画像生成回数に制限。",
      allowedFeatures: ["Web検索", "GPT-4o mini無制限チャット", "限定的なファイル解析", "限定的なDALL-E 3画像生成"]
    },
    paidPlanDetails: {
      planName: "ChatGPT Plus",
      price: "$20 / 月",
      unlockedFeatures: ["o1/o3-mini推論モデルの利用", "高度な音声モード（リアルタイム感情対話）", "Canvas共同編集機能", "GPTs作成・優先利用"],
      recommendedFor: "AIを日常業務・学習でフル活用したいすべての人（課金第一候補）"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "迷ったらこれ。世界最高水準の対話・思考・音声・マルチモーダルを兼ね備えたAIの業界標準。",
    description: "OpenAIが誇る最高峰の汎用AI。GPT-4oのマルチモーダル能力に加え、思考時間を設けて深層推論を行うo1/o3-miniモデルを搭載。コーディング、文章作成、アイデアブレスト、日常会話まで隙がありません。",
    pros: ["業界最大の利用者数と豊富なノウハウ", "高度な音声対話が極めて自然", "o1モデルによる超難問への論理的回答"],
    cons: ["無料枠では混雑時に制限がかかりやすい", "公式Proプランは月200ドルと高額"],
    specs: {
      contextWindow: "128kトークン (約10万文字)",
      multimodal: "テキスト・音声・画像・ファイル",
      company: "OpenAI",
      releaseYear: "2022 (最新版2024-2025)"
    },
    officialUrl: "https://chatgpt.com"
  },
  {
    id: "claude",
    name: "Claude",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "日本語・コード最強",
    version: "Claude 3.5 Sonnet / 3.5 Haiku",
    versionFeatures: {
      evolution: "Claude 3.5 Sonnetによりコーディングベンチマーク世界1位を獲得。Artifacts機能でコードやWeb画面を右側にリアルタイム表示可能。",
      strengths: ["人間味のある自然で美しい日本語", "最高峰のプログラミング・バグ修正力", "長文ドキュメントの文脈把握", "Artifactsプレビュー"],
      weaknesses: ["無料版の利用上限が数往復で達しやすい", "画像生成機能は非搭載"],
      architecture: "Anthropic Next-Gen Transformer Architecture",
      versionsList: [
        {
          name: "Claude 3.5 Sonnet (v2)",
          speed: "高速",
          intelligence: "最高峰",
          bestFor: "プログラミング、美しい日本語執筆、複雑な指示理解、Artifacts",
          planAvailability: "無料(回数制限) / Proで5倍利用可能",
          description: "Anthropicの最高傑作。全LLMの中で最も自然な日本語文章力と最高峰のコーディング精度を両立。"
        },
        {
          name: "Claude 3.5 Haiku",
          speed: "超高速",
          intelligence: "高度",
          bestFor: "爆速チャット、API処理、短時間での多量ドキュメント処理",
          planAvailability: "無料 / Pro / API",
          description: "従来の最高峰Opusに迫る知能を、まばたきするような超高速スピードと格安コストで提供する新鋭モデル。"
        },
        {
          name: "Claude 3 Opus",
          speed: "標準",
          intelligence: "最高峰",
          bestFor: "深層的な哲学議論、長編小説執筆、極めて複雑なニュアンス分析",
          planAvailability: "Pro限定",
          description: "深い洞察力と豊かな情緒表現に特化。クリエイティブな執筆や複雑な学術的議論で威力を発揮。"
        }
      ]
    },
    estimatedUsers: "数千万人 / 実務層シェア急拡大",
    siteRegisteredCount: 1620,
    votesCount: 2150,
    rankScore: 98.7,
    categoryRank: 2,
    overallRank: 2,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Pro $20 (約3,000円)",
    freePlanDetails: {
      limits: "数時間ごとに数回〜10回程度のメッセージ上限（混雑時はさらに短縮）。",
      allowedFeatures: ["Claude 3.5 Sonnetの一部利用", "Artifacts機能", "ファイルアップロード分析"]
    },
    paidPlanDetails: {
      planName: "Claude Pro",
      price: "$20 / 月",
      unlockedFeatures: ["無料版の5倍以上のメッセージ上限", "Projects機能（社内規程・独自プロンプトの読み込み固定）", "混雑時の優先アクセス", "最新機能への先行アクセス"],
      recommendedFor: "エンジニア、ライター、法律・学術などの厳密な長文を扱うビジネスパーソン"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "自然すぎる日本語と圧倒的コード力。Artifactsによるリアルタイム開発・執筆が革命的。",
    description: "Anthropic社が開発した最高峰のLLM。倫理的かつ自然な文章生成に定評があり、特にClaude 3.5 Sonnetのプログラミング能力は世界のトップエンジニアから絶賛されています。右側パネルでアプリやWebを直接動かせるArtifactsも大好評。",
    pros: ["日本語の言い回しが群を抜いて自然", "コードの精度・アーキテクチャ設計力が最強", "Projects機能で大量の前提資料を記憶可能"],
    cons: ["画像・動画の直接生成はできない", "無料枠の上限到達が早い"],
    specs: {
      contextWindow: "200kトークン (約15万文字)",
      multimodal: "テキスト・画像・PDF・コード",
      company: "Anthropic",
      releaseYear: "2023 (最新版2024-2025)"
    },
    officialUrl: "https://claude.ai"
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "200万長文・爆速",
    version: "Gemini 2.0 Flash / 1.5 Pro",
    versionFeatures: {
      evolution: "2.0 Flashにより応答速度がミリ秒単位へ超高速化。1.5 Proでは業界最大の200万トークン（本数百冊分・1時間動画丸ごと）を即座に読解。",
      strengths: ["超高速な応答速度", "200万トークンの圧倒的長文/動画コンテキスト", "Google Workspace (Docs/Gmail/YouTube) 連携", "無料枠が巨大"],
      weaknesses: ["クリエイティブな小説執筆での語彙の硬さ"],
      architecture: "Google DeepMind Multimodal Foundation Model",
      versionsList: [
        {
          name: "Gemini 2.0 Flash",
          speed: "超高速",
          intelligence: "高度",
          bestFor: "爆速リアルタイム対話、YouTube動画要約、マルチモーダル視覚分析",
          planAvailability: "完全無料で使い放題",
          description: "Google DeepMindの次世代高速モデル。圧倒的レスポンス速度とリアルタイムストリーミングが魅力。"
        },
        {
          name: "Gemini 1.5 Pro",
          speed: "標準",
          intelligence: "最高峰",
          bestFor: "200万トークンの超長大PDF・本数百冊・1時間動画の一撃読解",
          planAvailability: "Gemini Advanced (有料) / API無料枠",
          description: "世界最大のコンテキストウィンドウを誇る怪童モデル。膨大な過去資料や長編映像を完全に記憶して回答。"
        },
        {
          name: "Gemini 1.5 Flash",
          speed: "超高速",
          intelligence: "標準",
          bestFor: "日常の短文処理、格安APIでのシステム組み込み",
          planAvailability: "完全無料",
          description: "軽量高コスパモデル。100万トークンを安価・高速に扱える万能ワークホース。"
        }
      ]
    },
    estimatedUsers: "1億人以上 / Googleエコシステム統合",
    siteRegisteredCount: 1420,
    votesCount: 1980,
    rankScore: 97.2,
    categoryRank: 3,
    overallRank: 3,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Advanced 月額2,900円 (Google One 2TB付き)",
    freePlanDetails: {
      limits: "Gemini 2.0 Flashがほぼ無制限に高速利用可能。",
      allowedFeatures: ["2.0 Flash使い放題", "YouTube動画やWebの要約", "Imagen 3による画像生成", "Googleアプリ連携"]
    },
    paidPlanDetails: {
      planName: "Gemini Advanced",
      price: "月額 2,900円",
      unlockedFeatures: ["Gemini 1.5 Pro（200万トークン対応）優先利用", "Google One 2TBクラウドストレージ付属", "Gmail・Docs・Sheets内での直接Gemini利用", "Gems（カスタムAI）の作成"],
      recommendedFor: "Googleサービスを日常的に使っている人、長尺動画や巨大PDFを丸ごと分析したい人"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "Googleの全技術が結集。爆速2.0 Flashと本数百冊分・1時間動画を一撃で読む200万コンテキスト。",
    description: "Google DeepMindが開発した最先端マルチモーダルAI。YouTube動画のURLを渡すだけで内容を完全要約したり、巨大なPDFや動画ファイルを丸ごと読み込ませて質問できます。Google Workspaceとの密接な連携も魅力。",
    pros: ["無料版の利用制限が非常に緩く使いやすい", "YouTubeやGoogleドライブとのシームレス連携", "1時間以上の長編動画を直接理解できる唯一無二の能力"],
    cons: ["時折回答が平坦・マニュアル的になることがある"],
    specs: {
      contextWindow: "100万〜200万トークン (本数千ページ相当)",
      multimodal: "テキスト・音声・画像・動画・ファイル",
      company: "Google",
      releaseYear: "2023 (最新版2024-2025)"
    },
    officialUrl: "https://gemini.google.com"
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "検索の未来",
    version: "Sonar / Pro Search (GPT-4o & Claude 3.5統合)",
    versionFeatures: {
      evolution: "Web全体を瞬時にスクレイピング・ファクトチェックし、学術論文から最新ニュースまで出典番号付きで回答。",
      strengths: ["完全な出典リンク明記でハルシネーション抑制", "Pro Searchによる段階的深掘りリサーチ", "Claude 3.5 / GPT-4oモデルの自由選択", "Pages機能によるレポート自動作成"],
      weaknesses: ["創作小説や自由対話には特化していない"],
      architecture: "Perplexity Deep Research Engine & Sonar Model"
    },
    estimatedUsers: "1,500万人以上 / 急成長AI検索",
    siteRegisteredCount: 1380,
    votesCount: 1890,
    rankScore: 96.8,
    categoryRank: 4,
    overallRank: 4,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Pro $20 (約3,000円)",
    freePlanDetails: {
      limits: "通常検索は完全無制限。Pro Search（深掘り推論）は4時間に5回まで。",
      allowedFeatures: ["出典付き即時回答", "ファイルアップロード基本分析", "コレクション保存"]
    },
    paidPlanDetails: {
      planName: "Perplexity Pro",
      price: "$20 / 月",
      unlockedFeatures: ["Pro Search1日300回以上", "Claude 3.5 Sonnet / GPT-4o / o3-miniへのモデル自由切り替え", "無制限ファイル分析", "API利用クレジット付与"],
      recommendedFor: "日常的に調べ物・市場調査・競合分析・論文検索を行うすべてのビジネスパーソン"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "Google検索の完全な代替。すべての回答に出典リンクが付き、裏取りの手間をゼロにする神ツール。",
    description: "質問に対してリアルタイムにWebを検索・照合し、脚注付きで完璧に整理されたレポートを返してくれます。Proプランでは裏側の頭脳をClaude 3.5 SonnetやGPT-4oに切り替えられるため、最高峰の推論で調査が可能です。",
    pros: ["情報の根拠が必ず明記されるため裏取りが超容易", "複数のモデル（Claude/OpenAI等）を1つのサブスクで利用可能", "スマホアプリの使い勝手が抜群"],
    cons: ["キャラクター対話などのエンタメ用途には不向き"],
    specs: {
      contextWindow: "128kトークン (マルチソース統合)",
      multimodal: "テキスト・画像・PDF・URL",
      company: "Perplexity AI",
      releaseYear: "2022 (最新版2024-2025)"
    },
    officialUrl: "https://www.perplexity.ai"
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "コスパ破壊の神",
    version: "DeepSeek-V3 / DeepSeek-R1",
    versionFeatures: {
      evolution: "独自のMoE技術と強化学習により、OpenAI o1匹敵の推論力(R1)を従来の1/10以下の学習コストで実現し世界を震撼させたモデル。",
      strengths: ["数学・競技プログラミング・論理思考が世界最高峰", "思考プロセス（Thinking Chain）の全開示", "Web・アプリ版は全機能完全無料", "API利用料が業界最安"],
      weaknesses: ["混雑時のサーバー負荷による待機時間", "中国発のため地政学的懸念を持つ組織がある"],
      architecture: "DeepSeek Multi-head Latent Attention (MLA) & MoE"
    },
    estimatedUsers: "数千万人急増 / 世界アプリランキング1位獲得",
    siteRegisteredCount: 1510,
    votesCount: 2050,
    rankScore: 97.5,
    categoryRank: 5,
    overallRank: 5,
    pricingType: "完全無料 / 超格安API",
    pricingMonthly: "Web・アプリ完全無料 / API 1Mトークン数セント",
    freePlanDetails: {
      limits: "Webおよびスマホアプリで、推論モデルR1も含めて現在完全無料で提供。",
      allowedFeatures: ["DeepSeek-R1思考モード", "DeepSeek-V3高速チャット", "Web検索連動", "ファイル読み込み"]
    },
    paidPlanDetails: {
      planName: "API従量課金",
      price: "100万トークンあたり数円〜数十円（他社の1/10以下）",
      unlockedFeatures: ["自作アプリやCursor/Clineへの組み込み", "専用クォータ保証"],
      recommendedFor: "プログラマー、AI開発者、とにかく無料で最強の推論AIを使いたいすべての人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "世界のAI業界を揺るがした推論特化AI。思考プロセスを可視化しながら超難問を無料・一撃で解く。",
    description: "数学、アルゴリズム、コーディングにおいてOpenAI o1に迫る脅威的なスコアを記録。思考プロセスがすべて日本語でリアルタイムに画面に流れるため、「なぜその答えになったか」を完璧に理解できます。",
    pros: ["Web・スマホ版が完全無料でo1並みの推論が使える", "思考の過程が見えるので納得感・学習効果が高い", "APIが爆安で開発者にとって神コスパ"],
    cons: ["アクセス殺到時にサーバー接続エラーが発生することがある"],
    specs: {
      contextWindow: "64k〜128kトークン",
      multimodal: "テキスト・コード・数式",
      company: "DeepSeek",
      releaseYear: "2024 (最新版2025)"
    },
    officialUrl: "https://chat.deepseek.com"
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "Office・Windows統合",
    version: "GPT-4o / Think Deeper",
    versionFeatures: {
      evolution: "Windows 11およびMicrosoft 365アプリに完全統合。Think Deeperによる思考型リサーチとDesigner画像生成を搭載。",
      strengths: ["Word, Excel, PowerPointとの直接連携", "Windows OS内蔵で即時呼び出し", "企業向け商用データ保護が万全", "DALL-E 3画像生成が手軽"],
      weaknesses: ["単体チャット画面のUIがやや煩雑", "長文コード生成で途切れることがある"],
      architecture: "OpenAI GPT-4o on Azure AI Infrastructure"
    },
    estimatedUsers: "数千万人以上 / 法人導入シェア最大",
    siteRegisteredCount: 980,
    votesCount: 1320,
    rankScore: 92.4,
    categoryRank: 6,
    overallRank: 8,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Pro 月額3,200円 / 365 Copilot 法人向け",
    freePlanDetails: {
      limits: "Web・Edgeブラウザ・Windows内での基本チャットは無料。",
      allowedFeatures: ["Web検索連動", "Designerでの画像生成", "Think Deeper限定試用"]
    },
    paidPlanDetails: {
      planName: "Copilot Pro",
      price: "月額 3,200円",
      unlockedFeatures: ["Word/Excel/PowerPoint内での直接AI生成", "ピーク時のGPT-4o優先アクセス", "Designer画像生成クレジット大幅増量"],
      recommendedFor: "普段の仕事でOffice製品（Excelやパワポ）を酷使しているビジネスパーソン"
    },
    paidWorthRating: 3,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "Microsoft OfficeとWindowsにネイティブ融合。Wordやパワポを自動作成したい人の必須相棒。",
    description: "Microsoftが提供するオフィス特化AI。Wordでの文書自動起草、PowerPointでのスライド一括生成、Excelでのデータ集計・関数自動提案など、デスクワークの生産性を直結で引き上げます。",
    pros: ["Officeファイル（Word/Excel/PPT）のネイティブ編集ができる", "Windowsショートカットキーで瞬時に起動", "企業のセキュリティ基準（商用データ保護）に適合"],
    cons: ["Officeを使わないユーザーには恩恵が薄い"],
    specs: {
      contextWindow: "128kトークン",
      multimodal: "テキスト・画像・Officeドキュメント",
      company: "Microsoft",
      releaseYear: "2023 (最新版2024-2025)"
    },
    officialUrl: "https://copilot.microsoft.com"
  },
  {
    id: "grok",
    name: "Grok",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "Xリアルタイム＆ユーモア",
    version: "Grok 2 / Grok 3",
    versionFeatures: {
      evolution: "X(旧Twitter)のリアルタイムポストを直接インデックス。FLUX.1ベースの超高速画像生成エンジンを内蔵。",
      strengths: ["X上の最新トレンドや炎上・事件の即時把握", "過度な政治的フィルターや検閲のない自由な回答", "ユーモアモード・辛口ツッコミモード", "FLUX画像生成の制限の緩さ"],
      weaknesses: ["X利用登録が前提", "公的・堅いビジネス文章には調整が必要"],
      architecture: "xAI Frontier Cluster Architecture"
    },
    estimatedUsers: "数千万人 (Xプレミアムユーザー層)",
    siteRegisteredCount: 820,
    votesCount: 1100,
    rankScore: 90.2,
    categoryRank: 7,
    overallRank: 10,
    pricingType: "有料主軸 (X連携)",
    pricingMonthly: "X無料枠一部あり / X Premium 月額980円〜",
    freePlanDetails: {
      limits: "Xの一般ユーザー向けに一定回数の質問枠が順次開放。",
      allowedFeatures: ["Grok基本対話", "限定的な画像生成"]
    },
    paidPlanDetails: {
      planName: "X Premium / Premium+",
      price: "月額 980円〜1,960円",
      unlockedFeatures: ["Grok 2/3無制限利用", "FLUXベースの画像生成無制限", "Xリアルタイムポスト深層分析", "広告非表示・収益化権限"],
      recommendedFor: "X（Twitter）を日常の情報収集や発信の拠点にしているユーザー"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "イーロン・マスク率いるxAIの旗艦モデル。Xの今この瞬間のポストを全世界で最も早く分析できるAI。",
    description: "X（旧Twitter）のリアルタイムデータと直結している唯一無二のAI。世間のリアルタイムな世論や最新速報を即座に要約できるほか、FLUX.1連携による画像生成では有名人や風刺などの描写制限が他社より柔軟です。",
    pros: ["最新ニュースやトレンドのキャッチアップ速度が最速", "忖度のない率直でウィットに富んだ回答", "FLUX搭載で画像生成のクオリティが非常に高い"],
    cons: ["Xのアカウントが必要", "フォーマルな社内稟議書などにはややトーンが砕けがち"],
    specs: {
      contextWindow: "128kトークン",
      multimodal: "テキスト・画像・Xポスト",
      company: "xAI",
      releaseYear: "2023 (最新版2024-2025)"
    },
    officialUrl: "https://x.ai"
  },
  {
    id: "mistral",
    name: "Mistral (Le Chat)",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "欧州オープン最高峰",
    version: "Mistral Large 2 / Pixtral Large",
    versionFeatures: {
      evolution: "123BパラメータのMistral Large 2と視覚認識特化Pixtral Largeにより、オープンウェイト最強クラスの性能と驚異的低価格を実現。",
      strengths: ["オープンソース精神と自社ホスト可能性", "超高速・低レイテンシ", "多言語対応（英語・仏語・日本語等）", "Canvas共同編集機能"],
      weaknesses: ["一般的な知名度がOpenAIに比べると発展途上"],
      architecture: "Mistral MoE (Mixture of Experts) Architecture"
    },
    estimatedUsers: "数百万人 / 開発者・欧州圏急増",
    siteRegisteredCount: 780,
    votesCount: 950,
    rankScore: 89.5,
    categoryRank: 8,
    overallRank: 12,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / API従量課金 / Enterprise",
    freePlanDetails: {
      limits: "Web版Le Chatで最新モデルを無料で利用可能。",
      allowedFeatures: ["Mistral Large 2チャット", "Pixtral画像認識", "Canvasでのドキュメント編集", "Web検索"]
    },
    paidPlanDetails: {
      planName: "Mistral API / Enterprise",
      price: "従量課金（GPT-4oの数分の一）",
      unlockedFeatures: ["セルフホスト用モデルダウンロード", "高レートリミットAPI", "企業向け機密保護"],
      recommendedFor: "AI開発者、プライバシー・主権AIを重視するエンジニア"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "フランス発・オープンモデルの雄。無料Webチャット『Le Chat』で最新最高峰モデルが軽快に動く。",
    description: "MetaやGoogle出身者により設立されたMistral AIのフラッグシップ。大手テックの独占に対抗するオープンな姿勢と、非常に洗練されたアーキテクチャにより、軽量ながらGPT-4級のベンチマークを叩き出します。",
    pros: ["Le Chat無料版が極めて高品質", "API料金が圧倒的に安い", "欧州基準のデータプライバシー安心感"],
    cons: ["日本語の口語スラングに対する理解はChatGPTにやや劣る"],
    specs: {
      contextWindow: "128kトークン",
      multimodal: "テキスト・画像 (Pixtral)",
      company: "Mistral AI",
      releaseYear: "2023 (最新版2024-2025)"
    },
    officialUrl: "https://chat.mistral.ai"
  },
  {
    id: "poe",
    name: "Poe",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "マルチAI統合ハブ",
    version: "Multi-Model Hub (GPT-4o, Claude 3.5, Flux, etc.)",
    versionFeatures: {
      evolution: "Quoraが開発。単一のサブスクリプションでChatGPT, Claude, Gemini, FLUX, Stable Diffusionなど数百種類のAIを切り替え利用可能。",
      strengths: ["1つのアカウントで各社最新AIを総なめ", "ポイント制で柔軟にモデルを使い分け", "オリジナルボットの作成・収益化", "軽快なUIと優れたスマホアプリ"],
      weaknesses: ["各ツールの公式最新限定機能（ProjectsやCanvas等）の一部が使えない"],
      architecture: "Quora Unified Model Aggregation API"
    },
    estimatedUsers: "1,000万人以上 / 定番AIポータル",
    siteRegisteredCount: 860,
    votesCount: 1120,
    rankScore: 89.8,
    categoryRank: 9,
    overallRank: 11,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎日ポイント付与) / 年額約$200 (月額約$20)",
    freePlanDetails: {
      limits: "毎日一定の無料ポイントが付与され、好きなAIで消費。",
      allowedFeatures: ["多数の基本ボット利用", "無料ポイント内でのClaudeやGPT-4o利用", "カスタムボット作成"]
    },
    paidPlanDetails: {
      planName: "Poe Subscription",
      price: "月額約 $20 (年払い推奨)",
      unlockedFeatures: ["毎月100万ポイント付与", "Claude 3.5 SonnetやGPT-4oを1つのサブスクで両方利用", "高解像度画像生成モデルの利用"],
      recommendedFor: "ChatGPTもClaudeも画像生成も全部少しずつ使いたいが、個別に月20ドルずつ払いたくない人"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "AIの全部入りバイキング。ChatGPTもClaudeも画像生成も、1つのアプリ・1つのサブスクで完結。",
    description: "知識共有サイトQuoraが手がける統合プラットフォーム。モデルごとの利用コストが『ポイント』として明示されており、今日はClaude、明日はGPT、次は画像生成…と自由に乗り換えて活用できます。",
    pros: ["複数サービスの個別課金を一本化してコスト削減できる", "スマホアプリの完成度が高く使いやすい", "自作ボットを公開してクリエイター報酬を得られる"],
    cons: ["各サービスの最新独自機能（Artifactsなど）は公式に劣る"],
    specs: {
      contextWindow: "各モデルに準拠 (最大200k)",
      multimodal: "テキスト・画像・音声・ファイル",
      company: "Quora",
      releaseYear: "2023"
    },
    officialUrl: "https://poe.com"
  },
  {
    id: "genspark",
    name: "Genspark",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "まとめページ自動生成",
    version: "Autopilot AI Agent / Sparkpages",
    versionFeatures: {
      evolution: "検索した瞬間に、複数のAIエージェントがWebを並列調査し、専用のキュレーションWebページ（Sparkpage）をゼロから自動構築。",
      strengths: ["商品比較や観光プランの専用Webページを一瞬で自動生成", "複数エージェントによる多角的ファクトチェック", "見やすいインフォグラフィックス構成", "旅行・購入リサーチに最適"],
      weaknesses: ["単発の短い質疑応答にはややリッチすぎる構成"],
      architecture: "Parallel Autonomous Agent Swarm"
    },
    estimatedUsers: "数百万人 / 急成長中の次世代検索",
    siteRegisteredCount: 710,
    votesCount: 890,
    rankScore: 88.3,
    categoryRank: 10,
    overallRank: 15,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Plus $20 / 月",
    freePlanDetails: {
      limits: "毎日無料のSparkpage作成クレジットが付与。",
      allowedFeatures: ["AI Autopilot検索", "Sparkpage生成", "Travel/Product比較エージェント利用"]
    },
    paidPlanDetails: {
      planName: "Genspark Plus",
      price: "$20 / 月",
      unlockedFeatures: ["Sparkpage無制限生成", "カスタムエージェント作成", "最優先生成キュー"],
      recommendedFor: "旅行プランニング、家電・ガジェット購入前の徹底比較を行いたいユーザー"
    },
    paidWorthRating: 3,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: false,
    hasApp: true,
    summary: "調べる時代から『まとめページが勝手に作られる時代』へ。リサーチ結果が雑誌記事のように届く。",
    description: "元Baiduの幹部らが立ち上げた検索イノベーションAI。ユーザーの曖昧な検索に対して、複数のAIが裏で議論・調査を行い、目次・画像・比較表・動画リンクが揃った完璧なWebページを数秒で組み上げてくれます。",
    pros: ["自分で複数のWebサイトを行き来する手間がゼロになる", "視覚的に美しく情報が整理される", "比較表やメリット・デメリットのまとまりが抜群"],
    cons: ["極めて最新のニュース速報はPerplexityの方がやや早い"],
    specs: {
      contextWindow: "128kトークン相当",
      multimodal: "テキスト・画像・動画・レイアウト",
      company: "MainFunc Inc.",
      releaseYear: "2024"
    },
    officialUrl: "https://www.genspark.ai"
  }
];
