import { ToolSeedItem } from "./types";

export const writingTools: ToolSeedItem[] = [
  {
    id: "notion-ai",
    name: "Notion AI",
    category: "writing",
    categoryLabel: "文書・リサーチ",
    badge: "ナレッジ統合",
    version: "Notion AI Q&A / Workspace Agent",
    versionFeatures: {
      evolution: "Notion内のあらゆる議事録・ドキュメント・Slack過去ログを横断検索し、社内Wiki専属AIとして回答するQ&A機能が進化。",
      strengths: ["社内文書・メモの横断検索", "ドキュメント自動整形・要約", "議事録からネクストアクション自動抽出", "Notion内でシームレス動作"],
      weaknesses: ["Notionを使用していない環境では価値がない", "外部リサーチ能力は特化検索AIに劣る"],
      architecture: "Notion Enterprise Knowledge Graph & Multi-LLM"
    },
    estimatedUsers: "3,000万人以上 (Notion全体)",
    siteRegisteredCount: 1240,
    votesCount: 1680,
    rankScore: 94.8,
    categoryRank: 1,
    overallRank: 6,
    pricingType: "アドオン有料",
    pricingMonthly: "メンバー1人あたり月額 $10 (約1,500円)",
    freePlanDetails: {
      limits: "無料ワークスペースにつき約20回のお試し実行クレジット。",
      allowedFeatures: ["基本の文章リライト", "短い議事録の要約", "スペルチェック"]
    },
    paidPlanDetails: {
      planName: "Notion AI Add-on",
      price: "$10 / ユーザー / 月",
      unlockedFeatures: ["Notion内無制限AIアシスタント", "Notion Q&A（社内文書横断質問）", "データベース自動入力プロパティ", "カスタムプロンプト"],
      recommendedFor: "会社や個人でNotionをノート・情報集約ハブとして常用している全ユーザー"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "Notionがあなた専属の秘書に。蓄積した社内メモや議事録を瞬時に要約し、質問に即答。",
    description: "Notionのページ上でスペースキーを押すだけで起動するAIアシスタント。文章のトーン変更、要約、翻訳はもちろん、ワークスペース全体から『あの企画書の結論何だっけ？』と質問できるQ&Aが神がかり的な便利さです。",
    pros: ["Notionの画面から離れずに文章作成が完結", "社内ナレッジの検索効率が劇的に向上", "データベースの自動要約列が非常に強力"],
    cons: ["無料枠がほぼ体験版レベルですぐ課金が必要"],
    specs: {
      contextWindow: "ワークスペース全体インデックス",
      multimodal: "テキスト・表・Notionブロック",
      company: "Notion Labs",
      releaseYear: "2023"
    },
    officialUrl: "https://www.notion.so/product/ai"
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    category: "writing",
    categoryLabel: "文書・リサーチ",
    badge: "完全無料・神ツール",
    version: "Gemini 1.5 Pro駆動 / Audio Overview",
    versionFeatures: {
      evolution: "Google DeepMindのGemini 1.5 Proと長大コンテキストにより、最大50件のPDFやWebサイトを一瞬で読解。さらに2人のパーソナリティによる音声解説（Audio Overview）や対話型ガイドを標準搭載。",
      strengths: ["ハルシネーション（嘘）が原理的に皆無", "資料の引用元箇所を即座にハイライト表示", "完全無料で制限なし", "音声対話ポッドキャスト自動生成", "Gemini 1.5 Proによる高精度回答"],
      weaknesses: ["投入した資料以外の一般的な雑談・創作には向かない"],
      architecture: "Google Gemini 1.5 Pro Grounded RAG",
      versionsList: [
        {
          name: "Gemini 1.5 Pro Engine",
          speed: "高速",
          intelligence: "最高峰",
          bestFor: "数十冊のPDF・Webサイトからの即時引用回答・要約",
          planAvailability: "完全無料",
          description: "投入した資料内の根拠ページを正確に特定して回答するGoogle公式のメインエンジン。"
        },
        {
          name: "Audio Overview (会話型音声化)",
          speed: "高速",
          intelligence: "高度",
          bestFor: "通勤・作業中の資料インプット、ポッドキャスト風学習",
          planAvailability: "完全無料",
          description: "登録した難解な論文や資料を2人のAIアナウンサーが楽しく解説してくれる音声化機能。"
        }
      ]
    },
    estimatedUsers: "1,200万人突破 / 学生・研究者に熱狂的人気",
    siteRegisteredCount: 1390,
    votesCount: 1910,
    rankScore: 96.5,
    categoryRank: 2,
    overallRank: 7,
    pricingType: "完全無料",
    pricingMonthly: "完全無料 (Googleアカウントのみで利用可能)",
    freePlanDetails: {
      limits: "現在Google Labsにて完全無料で全機能利用可能（ノートブックあたり最大50ソース）。",
      allowedFeatures: ["50冊分のPDF/資料一括読解", "引用元付きQ&A", "Audio Overview（音声番組生成）", "要約ノート自動作成"]
    },
    paidPlanDetails: {
      planName: "無料提供中 (Google Labs)",
      price: "0円",
      unlockedFeatures: ["全機能が完全開放"],
      recommendedFor: "論文を読む学生、長大な業務マニュアルや契約書を読み解く実務家"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: false,
    hasApp: false,
    summary: "Googleが作った奇跡の無料ツール。PDFや本を渡すだけで、絶対に嘘をつかずに完璧に教えてくれる。",
    description: "Gemini 1.5 Proの長文理解力と高精度推論をフル活用したリサーチ特化ノート。ユーザーが渡した資料のみに基づいて回答するため、AI特有の『もっともらしい嘘』がありません。資料を2人のラジオパーソナリティが解説する音声化機能も圧巻。",
    pros: ["回答の根拠となった資料のページ・行が瞬時に確認できる", "完全無料で制限なく使える", "長大な論文や決算書が1分で理解できる"],
    cons: ["専用スマホアプリがまだない（ブラウザ利用）"],
    specs: {
      contextWindow: "各ソース50万語、最大50ソース同時投入可能",
      multimodal: "PDF・テキスト・Google Docs・ウェブURL・音声",
      company: "Google",
      releaseYear: "2023 (最新版2025-2026)"
    },
    officialUrl: "https://notebooklm.google.com"
  },
  {
    id: "deepl-write",
    name: "DeepL Write",
    category: "writing",
    categoryLabel: "文書・リサーチ",
    badge: "英文推敲の決定版",
    version: "DeepL Write Pro",
    versionFeatures: {
      evolution: "世界最高精度の機械翻訳DeepLが開発。文法ミスだけでなく、文脈やトーン（ビジネス・学術・カジュアル・熱狂的）に合わせた自然なリライトを提案。",
      strengths: ["文脈に合わせた高度なニュアンス改善", "ワンクリックでの代替単語・同義語リスト提案", "ビジネス英語のトーン調整", "機密保持ポリシー"],
      weaknesses: ["ゼロからの長文アイデア自動生成は目的外"],
      architecture: "DeepL Proprietary Neural Networks"
    },
    estimatedUsers: "数千万人 (DeepLグローバルユーザー)",
    siteRegisteredCount: 1100,
    votesCount: 1450,
    rankScore: 92.1,
    categoryRank: 3,
    overallRank: 9,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Write Pro 月額約1,200円〜",
    freePlanDetails: {
      limits: "1回あたりの入力文字数に制限あり（約2,000文字）。",
      allowedFeatures: ["文法・スペル修正", "基本トーン調整", "単語クリックでの言い換え選択"]
    },
    paidPlanDetails: {
      planName: "DeepL Write Pro",
      price: "月額 約1,200円",
      unlockedFeatures: ["文字数無制限", "データがAI学習に一切使用されない最高水準の機密保持", "カスタムスタイル辞書連携"],
      recommendedFor: "海外とのメール・論文・ビジネス文書を英語やドイツ語で執筆するビジネスパーソン"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "英文メールや論文をネイティブ級に格上げ。クリックひとつで自然で洗練された語彙に変身。",
    description: "単なる文法チェッカーを超え、『この文脈ならこの表現の方がプロフェッショナルに見える』というニュアンス単位の推敲を行ってくれるツール。単語をクリックすると類語候補がズラリと並び、自分の好みの表現を選べます。",
    pros: ["日本語直訳の不自然な英語が一瞬でネイティブ表現になる", "単語をクリックするだけで最適な類語に入れ替え可能", "Pro版のデータセキュリティが極めて強固"],
    cons: ["アイデアを一から出してもらう用途には向かない"],
    specs: {
      contextWindow: "段落・文書単位",
      multimodal: "テキスト",
      company: "DeepL SE",
      releaseYear: "2023"
    },
    officialUrl: "https://www.deepl.com/write"
  },
  {
    id: "elicit",
    name: "Elicit",
    category: "writing",
    categoryLabel: "文書・リサーチ",
    badge: "論文リサーチ必携",
    version: "Elicit Research Assistant",
    versionFeatures: {
      evolution: "2億件以上の学術論文データベース（Semantic Scholar等）から、質問に関連する論文を自動検索し、実験手法・サンプル数・結果を表形式で横並び比較。",
      strengths: ["学術論文の実験条件・結果の自動表形式抽出", "信頼性の高いピアレビュー済み論文のみを対象", "論文間の一致点・相違点の自動要約", "研究者の調査時間を90%削減"],
      weaknesses: ["学術研究以外の日常的ビジネスリサーチにはオーバースペック"],
      architecture: "Semantic Scholar Knowledge Graph + LLM Synthesis"
    },
    estimatedUsers: "100万人以上 / 大学・研究機関で標準化",
    siteRegisteredCount: 650,
    votesCount: 820,
    rankScore: 89.1,
    categoryRank: 4,
    overallRank: 16,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (月5,000クレジット) / Plus $12 / 月",
    freePlanDetails: {
      limits: "毎月無料のクレジットが付与され、基本的な論文検索と要約が可能。",
      allowedFeatures: ["論文検索", "基本メタデータ抽出", "上位論文の要約"]
    },
    paidPlanDetails: {
      planName: "Elicit Plus",
      price: "$12 / 月 (年払い)",
      unlockedFeatures: ["クレジット大幅増量", "PDF一括アップロード解析", "高精度情報抽出カスタムカラム", "CSVエクスポート"],
      recommendedFor: "大学院生、研究者、医療従事者、エビデンス重視のコンサルタント"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "2億本の学術論文から答えを探し出す研究者用AI。実験手法やサンプル数を表で一瞬比較。",
    description: "『○○の効果に関する最新の知見は？』と聞くだけで、関連する数十本の査読済み論文を検索し、論文タイトルだけでなく、実験対象・投与量・結果・限界などをスプレッドシート形式で綺麗にまとめてくれます。",
    pros: ["文献調査（システマティックレビュー）の時間が劇的に短縮", "エビデンスの質が一目で比較できる", "PDFを直接放り込んでも分析可能"],
    cons: ["英語の論文がベースのため専門英語の読解力がある程度必要"],
    specs: {
      contextWindow: "論文全文PDF対応",
      multimodal: "学術論文PDF・テキスト",
      company: "Elicit, Inc.",
      releaseYear: "2021 (最新版2024)"
    },
    officialUrl: "https://elicit.com"
  },
  {
    id: "consensus",
    name: "Consensus",
    category: "writing",
    categoryLabel: "文書・リサーチ",
    badge: "科学的エビデンス可視化",
    version: "Consensus Meter 2.0",
    versionFeatures: {
      evolution: "科学界で『YesなのかNoなのか』の意見の一致度（Consensus Meter）をパーセンテージで可視化するエビデンスAI検索エンジン。",
      strengths: ["Yes/Noの科学的合意比率をグラフィカルに表示", "GPT-4を活用した論文サマリー", "Zotero文献管理ツールとの連携", "健康・栄養・科学疑問に最適"],
      weaknesses: ["賛否が割れていないテーマでは検索結果が偏る場合がある"],
      architecture: "Consensus Meter NLP Engine"
    },
    estimatedUsers: "200万人以上",
    siteRegisteredCount: 620,
    votesCount: 790,
    rankScore: 88.6,
    categoryRank: 5,
    overallRank: 18,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Premium $11.99 / 月",
    freePlanDetails: {
      limits: "無料検索回数に月ごとの上限あり。",
      allowedFeatures: ["基本検索", "論文抜粋の閲覧", "限定的なConsensus Meter"]
    },
    paidPlanDetails: {
      planName: "Consensus Premium",
      price: "$11.99 / 月",
      unlockedFeatures: ["Consensus Meter無制限表示", "GPT-4による論文要約スタディ", "無制限ブックマークとZotero連携"],
      recommendedFor: "健康・医療ライター、エビデンスベースで意思決定したいヘルスケア関係者"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: false,
    hasApp: false,
    summary: "『科学的には実際どうなの？』に一発回答。論文の賛成・反対比率をグラフで可視化。",
    description: "『クレアチンは筋肉に効果があるか？』『カフェインは睡眠にどう影響するか？』といった疑問を投げかけると、何十本もの論文を精査し、『Yes 85%, 可能性的 10%, No 5%』のように科学界のコンセンサスを教えてくれます。",
    pros: ["ネットの不確かな噂ではなく査読済み論文の結論がわかる", "メーター表示で一瞬で白黒がつく", "健康や教育の調査に圧倒的に役立つ"],
    cons: ["論文の専門用語が日本語訳でやや直訳調になることがある"],
    specs: {
      contextWindow: "論文抄録・全文",
      multimodal: "テキスト",
      company: "Consensus AI",
      releaseYear: "2022"
    },
    officialUrl: "https://consensus.app"
  },
  {
    id: "jasper",
    name: "Jasper",
    category: "writing",
    categoryLabel: "文書・リサーチ",
    badge: "企業マーケティング特化",
    version: "Jasper IQ / Marketing Agent",
    versionFeatures: {
      evolution: "自社のブランドトーン、ターゲット層、スタイルガイドを学習させ、ブレないマーケティング記事・SNS投稿を一貫生成。",
      strengths: ["自社ブランドボイスの完全再現", "Surfer SEO連携による検索上位記事作成", "多チャネル（ブログ/X/LinkedIn/メール）一括展開", "法人のチーム共同編集"],
      weaknesses: ["個人利用には月額料金が高め（$39〜）"],
      architecture: "Jasper Enterprise Content AI"
    },
    estimatedUsers: "数十万社（Fortune 500含む）",
    siteRegisteredCount: 520,
    votesCount: 680,
    rankScore: 86.4,
    categoryRank: 6,
    overallRank: 24,
    pricingType: "有料 (トライアルあり)",
    pricingMonthly: "7日間無料トライアル / Creator $39 / Pro $59 / 月",
    freePlanDetails: {
      limits: "7日間のフル機能無料トライアル（クレカ登録要）。",
      allowedFeatures: ["ブランドボイス1件設定", "SEO記事作成機能"]
    },
    paidPlanDetails: {
      planName: "Jasper Pro",
      price: "$59 / 月 (年払い $49)",
      unlockedFeatures: ["ブランドボイス複数設定", "キャンペーン一括生成", "アート生成機能", "コラボレーション機能"],
      recommendedFor: "企業のマーケティング担当者、広告代理店、オウンドメディア運営チーム"
    },
    paidWorthRating: 3,
    hasFreeTier: false,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "マーケティングとブランドトーンのプロ。オウンドメディア記事や広告文を企業品質で量産。",
    description: "単なる文章生成ではなく、『自社らしい言葉遣い（Brand Voice）』をAIに徹底的に教え込むことができるマーケティング特化型プラットフォーム。ブログ記事からSNS投稿、メルマガまで、同一のトーンで瞬時に展開可能です。",
    pros: ["自社のトンマナ（トーン＆マナー）が崩れない", "SEOツール連携で検索順位を意識した記事ができる", "マーケター向けのテンプレートが50種以上"],
    cons: ["無料プランがなく、個人にはやや高額"],
    specs: {
      contextWindow: "プロジェクト全体",
      multimodal: "テキスト・画像生成",
      company: "Jasper AI, Inc.",
      releaseYear: "2021"
    },
    officialUrl: "https://www.jasper.ai"
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    category: "writing",
    categoryLabel: "文書・リサーチ",
    badge: "営業・GTM自動化",
    version: "GTM AI Platform 2.0",
    versionFeatures: {
      evolution: "単なるコピー作成から進化し、企業の営業（セールス）、採用、マーケティングのワークフロー全体を自動化するGTMプラットフォームへ。",
      strengths: ["営業アウトバウンドメールの自動パーソナライズ", "CRMやスプレッドシートとのパイプライン連携", "長文ブログ作成ウィザード", "チームでのプロンプト共有"],
      weaknesses: ["単発の日常対話用途にはオーバースペック"],
      architecture: "Copy.ai GTM Automation Framework"
    },
    estimatedUsers: "1,500万人以上",
    siteRegisteredCount: 590,
    votesCount: 710,
    rankScore: 86.8,
    categoryRank: 7,
    overallRank: 22,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (月2,000語) / Pro $36 / 月",
    freePlanDetails: {
      limits: "毎月2,000単語までの生成枠（1ユーザー）。",
      allowedFeatures: ["チャット機能", "90種以上のコピーライトテンプレート"]
    },
    paidPlanDetails: {
      planName: "Copy.ai Pro / GTM",
      price: "$36 / 月 (年払い)",
      unlockedFeatures: ["単語数完全無制限", "最新LLMモデルアクセス", "ワークフロー自動化実行", "多言語対応（95言語以上）"],
      recommendedFor: "法人営業チーム、フリーランスのWebコピーライター"
    },
    paidWorthRating: 3,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "営業メールや広告コピーを自動化。リードごとのパーソナライズ文面を一括生成。",
    description: "顧客リストを読み込ませるだけで、それぞれの企業の特性に合わせた営業メールを数十通一括で書き分けてくれるセールス＆マーケティング自動化AI。日常の定型業務を大きく削減できます。",
    pros: ["営業メールのバリエーション作成が圧倒的に速い", "無料プランでも基本機能が試せる", "直感的なワークフローUI"],
    cons: ["日本語の表現でたまに機械的な直訳が混ざることがある"],
    specs: {
      contextWindow: "ワークフロー連携",
      multimodal: "テキスト",
      company: "Copy.ai",
      releaseYear: "2020"
    },
    officialUrl: "https://www.copy.ai"
  },
  {
    id: "quillbot",
    name: "QuillBot",
    category: "writing",
    categoryLabel: "文書・リサーチ",
    badge: "英語言い換え・盗用防止",
    version: "QuillBot Paraphraser & Flow",
    versionFeatures: {
      evolution: "英語の文章を自然にパラフレーズ（言い換え）。論文やエッセイでの語彙重複や盗用（Plagiarism）を徹底防止。",
      strengths: ["7種類の言い換えモード（標準・流暢・学術的・短縮等）", "同義語スライダーで変更の度合いを細かく調整可能", "英文法チェッカーと要約ツールの統合", "盗用検出チェッカー搭載"],
      weaknesses: ["英語以外の言語（日本語等）のパラフレーズ精度は発展途上"],
      architecture: "QuillBot NLP Transformer Paraphraser"
    },
    estimatedUsers: "5,000万人以上 (世界中の学生・研究者)",
    siteRegisteredCount: 680,
    votesCount: 840,
    rankScore: 87.9,
    categoryRank: 8,
    overallRank: 20,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 / Premium 月額約$8.33 (年払い)",
    freePlanDetails: {
      limits: "1回あたり125単語までのパラフレーズ。",
      allowedFeatures: ["Standard & Fluencyモード", "限定的な類語選択", "文法チェック"]
    },
    paidPlanDetails: {
      planName: "QuillBot Premium",
      price: "月額 $8.33 (年払い $99.95)",
      unlockedFeatures: ["単語数無制限パラフレーズ", "Formal / Academic / Creativeなど全7モード", "盗用チェッカー（月20ページ）", "Chrome/Word拡張機能完全連携"],
      recommendedFor: "英語論文を書く研究者、留学中の学生、英文記事の校正を行いたい人"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: false,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "英語の文章を洗練された表現に言い換え。同じ単語の重複を防ぎ、アカデミックな英文に格上げ。",
    description: "英語圏の学生や研究者にとってデファクトスタンダードの言い換えAI。作成した英文を放り込むだけで、より学術的で洗練された語彙・構文にワンクリックで置き換えてくれます。",
    pros: ["単語の重複を避け、語彙力のある英文に仕上がる", "スライダーで言い換えの強さを微調整できる", "価格が手頃でコスパが良い"],
    cons: ["日本語の文章作成には対応していない（英語特化）"],
    specs: {
      contextWindow: "文書単位",
      multimodal: "テキスト",
      company: "Learneo (QuillBot)",
      releaseYear: "2017 (最新アップデート2024)"
    },
    officialUrl: "https://quillbot.com"
  },
  {
    id: "writesonic",
    name: "Writesonic",
    category: "writing",
    categoryLabel: "文書・リサーチ",
    badge: "SEO記事一括作成",
    version: "Article Writer 6.0 / Chatsonic",
    versionFeatures: {
      evolution: "Google検索結果の競合上位記事を分析し、見出し構成・キーワード出現頻度を最適化したSEO記事をワンクリックで自動執筆。",
      strengths: ["競合分析に基づいたSEO記事の自動生成", "ファクトチェック付きリアルタイム情報参照", "WordPress直接連携で即座に下書き投稿", "AI音声・画像生成も内蔵"],
      weaknesses: ["オリジナリティの高い独自オピニオン記事には手直しが必須"],
      architecture: "Writesonic Generative Content Engine"
    },
    estimatedUsers: "1,000万人以上",
    siteRegisteredCount: 540,
    votesCount: 660,
    rankScore: 85.9,
    categoryRank: 9,
    overallRank: 26,
    pricingType: "フリーミアム",
    pricingMonthly: "無料トライアル / Individual $16 / 月〜",
    freePlanDetails: {
      limits: "初回登録時に無料クレジット付与。",
      allowedFeatures: ["Chatsonicチャット", "短文記事テンプレートの試用"]
    },
    paidPlanDetails: {
      planName: "Writesonic Individual / Standard",
      price: "$16 / 月 (年払い)",
      unlockedFeatures: ["長文記事作成無制限", "GPT-4oモデル選択", "WordPress/Shopifyワンクリック投稿", "SEOオーディットツール"],
      recommendedFor: "アフィリエイター、ブログ運営者、オウンドメディアのSEO記事量産"
    },
    paidWorthRating: 3,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "SEOで勝てるブログ記事を数分で作成。上位記事を分析してキーワードを網羅。",
    description: "狙いたいキーワードを入力するだけで、検索上位の競合サイトを自動で調査し、見出し・目次・本文・メタディスクリプションまで一気通貫で生成してくれるブロガー・アフィリエイター向けツールです。",
    pros: ["WordPressへ直接記事を下書き送信できる", "最新のWeb情報を反映した記事が書ける", "画像や音声も同時に生成可能"],
    cons: ["型通りの構成になりやすいため独自の体験談の追記が必要"],
    specs: {
      contextWindow: "長文記事（3,000〜5,000文字規模）",
      multimodal: "テキスト・画像",
      company: "Writesonic, Inc.",
      releaseYear: "2021"
    },
    officialUrl: "https://writesonic.com"
  },
  {
    id: "catchy",
    name: "Catchy",
    category: "writing",
    categoryLabel: "文書・リサーチ",
    badge: "日本語シチュエーション特化",
    version: "Catchy 2.0",
    versionFeatures: {
      evolution: "日本のビジネス習慣や生活シーンに特化した100種類以上の日本語テンプレート（キャッチコピー、お詫びメール、プレスリリース等）を搭載。",
      strengths: ["日本のビジネス文脈に完璧に馴染む日本語表現", "100種類以上の豊富なシーン別シチュエーション", "LINE風の親しみやすいUI", "記事作成から新規事業アイデア出しまで対応"],
      weaknesses: ["英語圏の最新LLMツールに比べるとモデル更新の追従にタイムラグがある"],
      architecture: "Japanese Prompt Specialized Layer"
    },
    estimatedUsers: "10万人以上 (国内ユーザー中心)",
    siteRegisteredCount: 460,
    votesCount: 580,
    rankScore: 84.2,
    categoryRank: 10,
    overallRank: 32,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎月10クレジット) / Pro 月額9,800円 (無制限)",
    freePlanDetails: {
      limits: "毎月10クレジット付与（生成ごとにクレジット消費）。",
      allowedFeatures: ["全テンプレートの試用（クレジット範囲内）"]
    },
    paidPlanDetails: {
      planName: "Catchy Pro",
      price: "月額 9,800円",
      unlockedFeatures: ["生成クレジット無制限", "優先サポート", "最新機能への先行アクセス"],
      recommendedFor: "日本の企業で社内報・PR文・プレスリリース・お詫び状を頻繁に作成する担当者"
    },
    paidWorthRating: 3,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: false,
    hasApp: false,
    summary: "日本人のためのAIライティング。100以上のテンプレートでお詫びメールから広告コピーまで即完成。",
    description: "国産のAIライティングアシスタント。『謝罪メール』『クラウドファンディングの挨拶文』『TikTok企画案』など、日本のビジネスやクリエイティブで日常的に求められる具体的な切り口がテンプレート化されています。",
    pros: ["英語直訳感がなく、日本人特有の微妙なニュアンスが伝わる", "テンプレートを選ぶだけなのでプロンプト不要", "初心者でも迷わない親切な設計"],
    cons: ["月額9,800円の無制限プランは個人にはやや割高感がある"],
    specs: {
      contextWindow: "テンプレート単位",
      multimodal: "テキスト",
      company: "株式会社デジタルレシピ",
      releaseYear: "2022"
    },
    officialUrl: "https://lp.ai-copywriter.jp"
  }
];
