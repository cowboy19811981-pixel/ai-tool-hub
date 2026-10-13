import { ToolSeedItem } from "./types";

export const generalTools: ToolSeedItem[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "GPT-6.1 Sol & Daybreak",
    version: "GPT-6.1 Sol / OpenAI Daybreak / o3",
    versionFeatures: {
      evolution: "OpenAI公式発表の次世代基盤「GPT-6.1 Sol」およびセキュリティ・エージェント推論「OpenAI Daybreak」、深層推論「o3」シリーズを統合。圧倒的なブラウザ自動化・自律エージェント遂行能力を実現。",
      strengths: ["公式最新次世代基盤(GPT-6.1 Sol)", "次世代自律エージェント(OpenAI Daybreak)", "最高峰の多段階推論(o3)", "超低遅延リアルタイム音声会話"],
      weaknesses: ["高度な推論機能の利用枠が無料版では制限あり"],
      architecture: "OpenAI GPT-6.1 Sol Architecture & Daybreak Agent Engine",
      versionsList: [
        {
          name: "GPT-6.1 Sol (Next-Gen Frontier)",
          speed: "超高速",
          intelligence: "最高峰",
          bestFor: "自律ブラウザエージェント遂行、超高度な複合課題解決、全感覚マルチモーダル対話",
          planAvailability: "Plus / Pro限定",
          description: "OpenAIが発表した次世代基盤モデル。コストを抑えながら高度な自律エージェント能力を発揮。"
        },
        {
          name: "OpenAI Daybreak (Security & Complex Agents)",
          speed: "高速",
          intelligence: "最高峰",
          bestFor: "システム脅威調査、大規模コード・インフラ自律分析、難関自動化タスク",
          planAvailability: "Enterprise / Pro限定",
          description: "高度な自律判断を要する実務現場のために設計されたOpenAIの最新エージェント推論モデル。"
        },
        {
          name: "o3 (Full Reasoning)",
          speed: "じっくり推論",
          intelligence: "最高峰",
          bestFor: "フロンティア級数学・難関システム設計・科学的仮説検証",
          planAvailability: "Plus / Pro限定",
          description: "思考プロセスを展開しながら難問を多段階で解き明かす最高峰推論モデル。"
        }
      ]
    },
    estimatedUsers: "2億人以上 / 世界No.1",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 99.4,
    categoryRank: 1,
    overallRank: 1,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Plus $20 (約3,000円) / Pro $200",
    freePlanDetails: {
      limits: "o3-miniやGPT-4oが一定回数利用可能。画像生成回数に制限。",
      allowedFeatures: ["Web検索", "o3-mini推論チャット", "高度な音声モードお試し", "DALL-E 3画像生成"]
    },
    paidPlanDetails: {
      planName: "ChatGPT Plus",
      price: "$20 / 月",
      unlockedFeatures: ["o3深層推論モデルの利用", "高度な音声モード無制限級", "Operator自律エージェント機能", "Canvas共同編集"],
      recommendedFor: "AIを日常業務・学習でフル活用したいすべての人（課金第一候補）"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "迷ったらこれ。o3推論エンジンと次世代エージェント機能を備えたAI界の絶対王者。",
    description: "OpenAIのフラッグシップ。最新のo3深層推論モデルにより、数学やコーディング、戦略立案において圧倒的な正答率を誇ります。自然な音声対話や画像理解まで隙がありません。",
    pros: ["業界最大の利用者数と豊富なノウハウ", "o3モデルによる超難問への論理的回答", "高度な音声対話が極めて自然"],
    cons: ["無料枠では混雑時に制限がかかりやすい", "公式Proプランは月200ドルと高額"],
    specs: {
      contextWindow: "128k〜200kトークン",
      multimodal: "テキスト・音声・画像・動画・ファイル",
      company: "OpenAI",
      releaseYear: "2022 (最新版2025-2026)"
    },
    officialUrl: "https://chatgpt.com"
  },
  {
    id: "claude",
    name: "Claude",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "世界最高峰知能・Fable 5.1",
    version: "Claude Fable 5.1 / Claude Mythos 5",
    versionFeatures: {
      evolution: "2026年最新の最上位『Mythosクラス』基盤モデル。SWE-bench Proで80%超を記録し、超難関コード生成や長期自律エージェントで世界一を獲得。一般向けの高度セーフガード版『Fable 5.1』と、審査制の最高性能版『Mythos 5』を展開。",
      strengths: [
        "SWE-bench Pro 80%超の最高峰コーディング力",
        "100万トークン(1M)超長大コンテキスト・12.8万出力",
        "Fable 5.1の高精度セーフガード＆EFSエンタープライズ保護",
        "人間味溢れる自然な日本語とArtifactsリアルタイム実行"
      ],
      weaknesses: ["無料版の利用上限が数往復で達しやすい", "画像生成機能は非搭載"],
      architecture: "Anthropic Mythos-Class Frontier Architecture",
      versionsList: [
        {
          name: "Claude Fable 5.1 (Flagship Frontier)",
          speed: "可変・高速",
          intelligence: "最高峰",
          bestFor: "最高峰コーディング(SWE-bench 80%+)、フルスタック自律エージェント、100万トークン超長大分析",
          planAvailability: "Pro / Team / Enterprise / API",
          description: "2026年最新フラグシップ。100万トークンのコンテキスト、12.8万トークンの最大出力、EFSプライバシー保護を標準搭載。"
        },
        {
          name: "Claude Mythos 5 (Project Glasswing)",
          speed: "じっくり推論",
          intelligence: "最高峰",
          bestFor: "サイバー検証、バイオ・先端科学研究、国家インフラ防衛",
          planAvailability: "審査制・限定特権アクセス",
          description: "安全制限が特化調整されたMythosクラスの限定版。Fable 5と同基盤ながら研究・防衛機関専用の極限性能を提供。"
        },
        {
          name: "Claude 3.7 Sonnet (Hybrid Reasoning)",
          speed: "高速",
          intelligence: "最高峰",
          bestFor: "日常開発、深い思考モードでの論理設計、自然な日本語執筆",
          planAvailability: "無料(回数制限) / Pro",
          description: "即答と深層推論（Thinking Mode）を自在に切り替えるハイブリッド推論モデル。"
        },
        {
          name: "Claude 3.5 Haiku",
          speed: "超高速",
          intelligence: "高度",
          bestFor: "爆速チャット、API大量処理、短時間での多量ドキュメント処理",
          planAvailability: "無料 / Pro / API",
          description: "従来の最高峰Opusに迫る知能を、まばたきするような超高速スピードと格安コストで提供。"
        }
      ]
    },
    estimatedUsers: "数千万人 / 世界のトップエンジニア標準",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 99.4,
    categoryRank: 1,
    overallRank: 1,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Pro $20 (約3,000円)",
    freePlanDetails: {
      limits: "数時間ごとに数回〜10回程度のメッセージ上限（混雑時はさらに短縮）。",
      allowedFeatures: ["Claude 3.7 Sonnet / Fable 5の一部試用", "Artifacts機能", "ファイルアップロード分析"]
    },
    paidPlanDetails: {
      planName: "Claude Pro",
      price: "$20 / 月",
      unlockedFeatures: [
        "最新Fable 5.1への優先アクセス",
        "無料版の5倍以上のメッセージ上限",
        "Projects機能（社内規程・独自プロンプトの読み込み固定）",
        "混雑時の優先アクセス"
      ],
      recommendedFor: "エンジニア、アーキテクト、研究者、法律・学術などの厳密な長文を扱うビジネスパーソン"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "2026年最新の王者。SWE-bench Pro 80%超のFable 5.1と100万トークン長大知能を搭載。",
    description: "Anthropicの最新フラグシップ。2026年発表の最上位「Mythosクラス」基盤モデルをベースとし、一般公開版の「Claude Fable 5.1」と研究・特定機関向けの「Claude Mythos 5」を展開。100万トークンの長大な記憶領域、12万8000トークンの大容量出力、SWE-bench Proで80%超を叩き出す世界一のコーディング・エージェント自律性を誇ります。",
    pros: ["SWE-bench Pro 80%超の世界一のコード開発・バグ修正力", "100万トークンの圧倒的長文・全コードベース一括読み込み", "日本語の言い回しが群を抜いて自然で知的"],
    cons: ["画像・動画の直接生成は非搭載", "無料枠の上限到達が早い"],
    specs: {
      contextWindow: "1,000,000トークン (約75万文字) / 出力最大128k",
      multimodal: "テキスト・画像・PDF・コード・音声",
      company: "Anthropic",
      releaseYear: "2026最新 (Fable 5.1 / Mythos 5)"
    },
    officialUrl: "https://claude.ai"
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "Gemini 3.8 / Pro 4",
    version: "Gemini 3.8 Flash / Gemini Pro 4",
    versionFeatures: {
      evolution: "Google DeepMindの最新主力「Gemini 3.8 Flash」と、エンタープライズ実務で導入が進む「Gemini Pro 4」を統合。数百万トークンの長大コンテキストとGoogleエコシステム連携を両立。",
      strengths: ["最新3.8世代の低遅延爆速推論", "企業導入が進むGemini Pro 4の圧倒的論理力", "巨大コンテキストによる書籍・長尺動画の一括処理", "無料枠が極めて潤沢"],
      weaknesses: ["文芸的なクリエイティブ表現での語彙の硬さ"],
      architecture: "Google DeepMind Gemini 3.8 / Pro 4 Native Multimodal Architecture",
      versionsList: [
        {
          name: "Gemini 3.8 Flash",
          speed: "超高速",
          intelligence: "高度",
          bestFor: "リアルタイム対話、大容量ドキュメント・動画分析、高速API呼び出し",
          planAvailability: "無料枠で潤沢に利用可能",
          description: "Googleの最新主力高速モデル。次世代マルチモーダル処理と低レイテンシ推論を兼ね備える。"
        },
        {
          name: "Gemini Pro 4",
          speed: "高速",
          intelligence: "最高峰",
          bestFor: "企業エンタープライズ業務、超複雑な科学的推論、マルチモーダル深層解析",
          planAvailability: "Gemini Advanced (有料) / Enterprise API",
          description: "Google DeepMindの次世代最高峰知能モデル。ビジネス実務や企業システムで活用が急拡大中。"
        },
        {
          name: "Gemini 3.5 Flash",
          speed: "超高速",
          intelligence: "高度",
          bestFor: "日常チャット、高速ドキュメント要約、安定稼働API",
          planAvailability: "無料 / API",
          description: "安定した高スループットと低コストを両立した実力派モデル。"
        }
      ]
    },
    estimatedUsers: "1億人以上 / Googleエコシステム統合",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 97.2,
    categoryRank: 3,
    overallRank: 3,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Advanced 月額2,900円 (Google One 2TB付き)",
    freePlanDetails: {
      limits: "Gemini 3.8 Flashがほぼ無制限に超高速推論で利用可能。",
      allowedFeatures: ["3.8 Flash使い放題", "YouTube動画やWebのリアルタイム要約", "Imagen 3による高精細画像生成", "Googleアプリ連携"]
    },
    paidPlanDetails: {
      planName: "Gemini Advanced",
      price: "月額 2,900円",
      unlockedFeatures: ["Gemini Pro 4（企業級最高峰知能）優先利用", "Google One 2TBクラウドストレージ付属", "Gmail・Docs・Sheets内での直接Gemini利用", "Gems（カスタムAI）の作成"],
      recommendedFor: "Googleサービスを日常的に使っている人、最先端Pro 4の推論力をビジネスで駆使したい人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "Googleの最新技術が集結。爆速Gemini 3.8 Flashと企業導入が進むGemini Pro 4を搭載。",
    description: "Google DeepMindが開発した最先端マルチモーダルAI。主力高速モデルGemini 3.8 Flashによる思考速度を超えるレスポンスと、企業向けに導入が進むGemini Pro 4による圧倒的な論理推論を提供します。YouTube動画の要約や長尺ドキュメントの一括解析、Google Workspace連携が強み。",
    pros: ["Gemini 3.8 Flashの無料枠が非常に潤沢で爆速", "エンタープライズ対応のGemini Pro 4による高精度推論", "長編動画や巨大コードベースを直接理解できる唯一無二の能力"],
    cons: ["文芸的なクリエイティブ表現ではClaudeに分がある場合がある"],
    specs: {
      contextWindow: "100万〜200万トークン (本数千ページ・数時間の動画相当)",
      multimodal: "テキスト・音声・画像・動画・ファイル",
      company: "Google",
      releaseYear: "2026 (最新版 Gemini 3.8 / Pro 4)"
    },
    officialUrl: "https://gemini.google.com"
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "次世代検索",
    version: "Sonar / Pro Search (Claude Fable 5.1 & GPT-6.1 & DeepSeek統合)",
    versionFeatures: {
      evolution: "Web全体を瞬時にスクレイピング・ファクトチェックし、学術論文から最新ニュースまで出典番号付きで回答。裏側の頭脳にClaude Fable 5.1やGPT-6.1、DeepSeek-V4.1を選択可能。",
      strengths: ["完全な出典リンク明記でハルシネーション抑制", "Pro Searchによる段階的深掘りリサーチ", "Claude Fable 5.1 / GPT-6.1 / o3 / DeepSeekモデルの自由選択", "Pages機能によるレポート自動作成"],
      weaknesses: ["創作小説や自由対話には特化していない"],
      architecture: "Perplexity Deep Research Engine & Sonar Model"
    },
    estimatedUsers: "2,000万人以上 / 急成長AI検索",
    siteRegisteredCount: 0,
    votesCount: 0,
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
      unlockedFeatures: ["Pro Search1日300回以上", "Claude 3.7 Sonnet / o3-mini / Gemini 2.0 Flashへのモデル自由切り替え", "無制限ファイル分析", "API利用クレジット付与"],
      recommendedFor: "日常的に調べ物・市場調査・競合分析・論文検索を行うすべてのビジネスパーソン"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "Google検索の完全な代替。すべての回答に出典リンクが付き、裏取りの手間をゼロにする神ツール。",
    description: "質問に対してリアルタイムにWebを検索・照合し、脚注付きで完璧に整理されたレポートを返してくれます。Proプランでは裏側の頭脳をClaude 3.7 Sonnetやo3-mini、Gemini 2.0 Flashに切り替えられるため、最高峰の推論で調査が可能です。",
    pros: ["情報の根拠が必ず明記されるため裏取りが超容易", "複数の最新モデル（Claude/OpenAI等）を1つのサブスクで利用可能", "スマホアプリの使い勝手が抜群"],
    cons: ["キャラクター対話などのエンタメ用途には不向き"],
    specs: {
      contextWindow: "128k〜200kトークン (マルチソース統合)",
      multimodal: "テキスト・画像・PDF・URL",
      company: "Perplexity AI",
      releaseYear: "2022 (最新版2025-2026)"
    },
    officialUrl: "https://www.perplexity.ai"
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "V4.1-Flash進化・神コスパ",
    version: "DeepSeek-V4.1-Flash / DeepSeek-R1",
    versionFeatures: {
      evolution: "DeepSeek公式発表の最新モデル「DeepSeek-V4.1-Flash」を搭載。テキスト処理および自律Agent性能が全面向上し、原生マルチモーダル視覚理解を標準統合。思考モデル「DeepSeek-R1」の超難関数学・論理推論も完全網羅。",
      strengths: ["公式最新『DeepSeek-V4.1-Flash』による爆速Agent遂行", "原生マルチモーダル視覚理解をネイティブ統合", "数学・競技プログラミング最高峰のR1深層思考", "Web・アプリ版は全機能完全無料"],
      weaknesses: ["混雑時のサーバー負荷による待機時間"],
      architecture: "DeepSeek V4.1 MoE & Multi-head Latent Attention (MLA) Architecture"
    },
    estimatedUsers: "数千万人急増 / 世界アプリランキング1位獲得",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 97.5,
    categoryRank: 5,
    overallRank: 5,
    pricingType: "完全無料 / 超格安API",
    pricingMonthly: "Web・アプリ完全無料 / API 1Mトークン数セント",
    freePlanDetails: {
      limits: "Webおよびスマホアプリで、最新V4.1-Flashおよび推論モデルR1を完全無料で提供。",
      allowedFeatures: ["DeepSeek-V4.1-Flash高速Agent", "DeepSeek-R1思考モード", "マルチモーダル画像解析", "Web検索連動"]
    },
    paidPlanDetails: {
      planName: "API従量課金",
      price: "100万トークンあたり数円〜数十円（業界最安基準）",
      unlockedFeatures: ["自作アプリやCursor/Clineへの組み込み", "専用クォータ保証"],
      recommendedFor: "プログラマー、AI開発者、とにかく無料で最強の推論AIを使いたいすべての人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "公式最新DeepSeek-V4.1-Flash発表。進化したAgent性能と視覚理解を完全無料で提供。",
    description: "DeepSeek公式が発表した最新旗艦「DeepSeek-V4.1-Flash」。テキスト生成および自律Agent遂行能力が飛躍的に進化し、原生マルチモーダル視覚理解も統合。思考モデルDeepSeek-R1の圧倒的な論理思考力と合わせて、世界をリードする性能を誇ります。",
    pros: ["最新V4.1-FlashがWeb・スマホアプリで完全無料", "視覚理解・画像解析がネイティブ統合", "思考プロセス（Thinking Chain）の全開示"],
    cons: ["アクセス殺到時にサーバー接続エラーが発生することがある"],
    specs: {
      contextWindow: "128kトークン",
      multimodal: "テキスト・画像・コード・数式",
      company: "DeepSeek",
      releaseYear: "2026 (公式最新 DeepSeek-V4.1-Flash)"
    },
    officialUrl: "https://www.deepseek.com"
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
    siteRegisteredCount: 0,
    votesCount: 0,
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
      releaseYear: "2023 (最新版2025-2026)"
    },
    officialUrl: "https://copilot.microsoft.com"
  },
  {
    id: "grok",
    name: "Grok",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "xAIフラグシップ・Grok 4.7",
    version: "Grok 4.6 / Grok 4.7",
    versionFeatures: {
      evolution: "xAI公式の最先端フラグシップモデル「Grok 4.6 / 4.7」を展開。Colossusスーパーコンピュータクラスタによる巨大計算力と、X(旧Twitter)リアルタイムデータ直結の超高速リサーチエンジンを搭載。",
      strengths: ["公式最新Grok 4.7による超高度なリアルタイム推論", "X上の最新トレンドや世界情勢の即時把握", "過度な政治的フィルターや検閲のない自由な回答", "FLUX画像生成エンジンのネイティブ統合"],
      weaknesses: ["X利用登録が前提", "公的・堅いビジネス文章にはトーン調整が必要"],
      architecture: "xAI Colossus Cluster & Grok 4-Series Frontier Engine"
    },
    estimatedUsers: "数千万人 (Xプレミアムユーザー層)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 92.5,
    categoryRank: 7,
    overallRank: 7,
    pricingType: "有料主軸 (X連携)",
    pricingMonthly: "X無料枠一部あり / X Premium 月額980円〜",
    freePlanDetails: {
      limits: "Xの一般ユーザー向けに一定回数の質問枠が順次開放。",
      allowedFeatures: ["Grok基本対話", "限定的な画像生成"]
    },
    paidPlanDetails: {
      planName: "X Premium / Premium+",
      price: "月額 980円〜1,960円",
      unlockedFeatures: ["最新Grok 4.6/4.7無制限利用", "FLUXベースの画像生成無制限", "Xリアルタイムポスト深層分析", "広告非表示・収益化権限"],
      recommendedFor: "X（Twitter）を日常の情報収集や発信の拠点にしているユーザー"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "イーロン・マスク率いるxAIの最先端旗艦。Grok 4.7とXリアルタイムデータが直結。",
    description: "xAIが誇る最先端モデルGrok 4.7。X（旧Twitter）のリアルタイムデータと直結している唯一無二のAIであり、今この瞬間の世界の出来事を最も早く分析・回答できます。",
    pros: ["最新ニュースやトレンドのキャッチアップ速度が世界最速", "忖度のない率直でウィットに富んだ回答", "FLUX搭載で画像生成のクオリティが非常に高い"],
    cons: ["Xのアカウントが必要"],
    specs: {
      contextWindow: "128k〜256kトークン",
      multimodal: "テキスト・画像・Xポスト",
      company: "xAI",
      releaseYear: "2026 (公式最新 Grok 4.7)"
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
    siteRegisteredCount: 0,
    votesCount: 0,
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
      releaseYear: "2023 (最新版2025-2026)"
    },
    officialUrl: "https://chat.mistral.ai"
  },
  {
    id: "poe",
    name: "Poe",
    category: "general",
    categoryLabel: "総合（汎用LLM）",
    badge: "マルチAI統合ハブ",
    version: "Multi-Model Hub (o3-mini, Claude 3.7, Gemini 2.0, FLUX.1)",
    versionFeatures: {
      evolution: "Quoraが開発。単一のサブスクリプションでChatGPT, Claude, Gemini, FLUX, Stable Diffusionなど数百種類の最新AIを切り替え利用可能。",
      strengths: ["1つのアカウントで各社最新AIを総なめ", "ポイント制で柔軟にモデルを使い分け", "オリジナルボットの作成・収益化", "軽快なUIと優れたスマホアプリ"],
      weaknesses: ["各ツールの公式最新限定機能（ProjectsやCanvas等）の一部が使えない"],
      architecture: "Quora Unified Model Aggregation API"
    },
    estimatedUsers: "1,200万人以上 / 定番AIポータル",
    siteRegisteredCount: 0,
    votesCount: 0,
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
      unlockedFeatures: ["毎月100万ポイント付与", "Claude 3.7 Sonnetやo3-mini、Gemini 2.0 Flashを1つのサブスクで利用", "最新画像生成モデルの利用"],
      recommendedFor: "ChatGPTもClaudeも画像生成も全部少しずつ使いたいが、個別に月20ドルずつ払いたくない人"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "AIの全部入りバイキング。ChatGPTもClaudeも画像生成も、1つのアプリ・1つのサブスクで完結。",
    description: "知識共有サイトQuoraが手がける統合プラットフォーム。モデルごとの利用コストが『ポイント』として明示されており、今日はClaude 3.7、明日はGemini 2.0 Flash、次は画像生成…と自由に乗り換えて活用できます。",
    pros: ["複数サービスの個別課金を一本化してコスト削減できる", "スマホアプリの完成度が高く使いやすい", "自作ボットを公開してクリエイター報酬を得られる"],
    cons: ["各サービスの最新独自機能（Artifactsなど）は公式に劣る"],
    specs: {
      contextWindow: "各モデルに準拠 (最大200k〜1M)",
      multimodal: "テキスト・画像・音声・ファイル",
      company: "Quora",
      releaseYear: "2023 (最新版2025-2026)"
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
    siteRegisteredCount: 0,
    votesCount: 0,
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
