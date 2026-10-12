import { ToolSeedItem } from "./types";

export const videoTools: ToolSeedItem[] = [
  {
    id: "runway",
    name: "Runway",
    category: "video",
    categoryLabel: "映像・動画",
    badge: "ハリウッド映画標準",
    version: "Gen-3 Alpha / Turbo / Act-One",
    versionFeatures: {
      evolution: "Gen-3 Alphaにより映画基準のカメラワークと物理シミュレーションを実現。Act-One機能でスマホ自撮り動画の表情をAIキャラにリアルタイム転送。",
      strengths: ["超リアルな光の反射と物理演算の整合性", "ミリ単位のカメラコントロール（パン、チルト、ズーム、ドリー）", "モーションブラシによる特定箇所の動画化", "表情演技転送（Act-One）"],
      weaknesses: ["無料クレジットの消費が早い", "長尺ストーリーの破綻防止にはカット割りの工夫が必要"],
      architecture: "Runway Multimodal World Model (Gen-3)"
    },
    estimatedUsers: "1,000万人以上 / 映画スタジオ標準導入",
    siteRegisteredCount: 1610,
    votesCount: 2190,
    rankScore: 97.8,
    categoryRank: 1,
    overallRank: 4,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (初回125秒分) / Standard $12 / Pro $28 / 月",
    freePlanDetails: {
      limits: "初回登録時に約125クレジット付与（数本の生成が可能）。",
      allowedFeatures: ["Gen-3 Alpha Turbo生成", "基本エディタの試用", "720p出力"]
    },
    paidPlanDetails: {
      planName: "Runway Standard",
      price: "$12 / 月 (年払い)",
      unlockedFeatures: ["毎月625クレジット付与", "透かし（ウォーターマーク）削除", "4Kアップスケール出力", "無制限の低速生成（Relaxモード）"],
      recommendedFor: "映像クリエイター、MV制作者、YouTubeショートやTikTokで圧倒的な実写クオリティを出したい人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "映画業界のデファクトスタンダード。実写と見分けがつかない映像と自由自在なカメラワーク。",
    description: "AI動画生成の先駆者にして最高峰。静止画を1枚アップロードして『カメラをゆっくり右に引きながら雷を光らせて』と指示するだけで、ハリウッド映画の特撮シーンのような5〜10秒の映像クリップを一瞬で生成します。",
    pros: ["質感・空気感・光のリアルさが圧倒的No.1", "カメラの動きを直感的に指定できる", "人物の演技表情をトレースするAct-Oneが神機能"],
    cons: ["ハイクオリティ生成を続けるとクレジット消費が激しい"],
    specs: {
      contextWindow: "5秒〜10秒クリップ生成 (延長可能)",
      multimodal: "テキスト・画像・動画・Webカメラ",
      company: "Runway AI, Inc.",
      releaseYear: "2023 (Gen-3 2024-2025)"
    },
    officialUrl: "https://runwayml.com"
  },
  {
    id: "sora",
    name: "Sora",
    category: "video",
    categoryLabel: "映像・動画",
    badge: "物理世界シミュレータ",
    version: "Sora (OpenAI)",
    versionFeatures: {
      evolution: "最長1分の長尺動画を物理法則（重力、衝突、反射）の破綻なく一発生成。複数アングル間での同一キャラクター・背景の整合性を維持。",
      strengths: ["最長1分の圧倒的な長尺生成能力", "物理世界の挙動を理解した自然な動き", "複数カメラ視点のシームレスな切り替え", "ChatGPTエコシステムとの連携"],
      weaknesses: ["ChatGPT PlusまたはPro加入が必要で無料枠なし"],
      architecture: "Sora Diffusion Transformer (DiT)"
    },
    estimatedUsers: "数千万人 (OpenAI有料層)",
    siteRegisteredCount: 1540,
    votesCount: 2080,
    rankScore: 97.1,
    categoryRank: 2,
    overallRank: 5,
    pricingType: "有料 (ChatGPT Plus/Pro内包)",
    pricingMonthly: "ChatGPT Plus $20/月 (月50本) / Pro $200/月 (無制限級)",
    freePlanDetails: {
      limits: "無料アカウントでの生成は非対応（サンプル動画の鑑賞のみ）。",
      allowedFeatures: ["公開作例の閲覧"]
    },
    paidPlanDetails: {
      planName: "ChatGPT Plus / Pro",
      price: "$20 / 月〜",
      unlockedFeatures: ["月50本までの動画生成 (Plus)", "720p〜1080p出力", "リミックス・Storyboard編集機能", "Proプランなら超高速・透かしなし"],
      recommendedFor: "動画制作の手間を一気に短縮したいクリエイター、最新のOpenAI技術を最前線で試したい人"
    },
    paidWorthRating: 5,
    hasFreeTier: false,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "OpenAIが放つ動画の怪物。最長1分の物理法則に逆らわないリアルな世界をまるごと創造。",
    description: "動画を単なるパラパラマンガとしてではなく『3次元の物理世界そのものを計算してレンダリングする』という新パラダイムを開拓。複雑な人物の往来や水面の波紋が、破綻することなく滑らかに動き続けます。",
    pros: ["1回のプロンプトで最長1分の動画が出る", "物理的な物体の衝突や影の落ち方が自然", "ChatGPT画面からそのまま使える手軽さ"],
    cons: ["ChatGPT Plus以上の有料課金が必須"],
    specs: {
      contextWindow: "最長60秒、最大1080p解像度",
      multimodal: "テキスト・画像",
      company: "OpenAI",
      releaseYear: "2024 (最新展開2025)"
    },
    officialUrl: "https://sora.com"
  },
  {
    id: "kling-ai",
    name: "Kling AI",
    category: "video",
    categoryLabel: "映像・動画",
    badge: "人物の動き＆無料枠◎",
    version: "Kling 1.5",
    versionFeatures: {
      evolution: "アジア圏最大手のKuaishou（快手）が開発。人物のダイナミックな動き、食事シーンやアクションの破綻の少なさでSoraに匹敵する評価。",
      strengths: ["人物の激しいアクションや食事シーンが極めて自然", "毎日ログインで無料クレジットが付与される", "最長10秒の高品質シネマティック生成", "リップシンク（音声に合わせて口を動かす）機能搭載"],
      weaknesses: ["混雑時の無料キュー生成に数十分待つことがある"],
      architecture: "Diffusion Transformer with 3D Spatial-Temporal Attention"
    },
    estimatedUsers: "数百万人急増 / コスパ最強と話題",
    siteRegisteredCount: 1320,
    votesCount: 1780,
    rankScore: 94.7,
    categoryRank: 3,
    overallRank: 8,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎日66クレジット) / Standard $10 / Pro $37 / 月",
    freePlanDetails: {
      limits: "毎日ログイン時に66クレジット無料付与（毎日約6本の動画が無料生成可能）。",
      allowedFeatures: ["5秒動画生成", "Image to Video", "基本キュー利用"]
    },
    paidPlanDetails: {
      planName: "Kling Standard",
      price: "$10 / 月",
      unlockedFeatures: ["高画質プロフェッショナルモード", "生成待ち時間の解消（優先キュー）", "動画の10秒延長", "透かし削除"],
      recommendedFor: "毎日無料で動画を作りたい人、人物のアクションやSNSバズ動画を量産したい人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "毎日無料で動画が作れる話題沸騰AI。人間がラーメンを食べるような難関アクションも滑らか。",
    description: "AI動画の難関とされる『人間の複雑な動き』『物を食べる仕草』『スポーツの動き』を難なくクリアして世界を驚かせたモデル。無料クレジットが毎日もらえるため、動画生成を始めたい初心者の入門に最適です。",
    pros: ["毎日無料で複数本の動画が作れる", "人物の顔立ちの崩れが非常に少ない", "音声に合わせた口パク（Lip Sync）も対応"],
    cons: ["無料プランは混雑時に完成まで時間がかかる"],
    specs: {
      contextWindow: "最長10秒、最大1080p",
      multimodal: "テキスト・画像・音声（口パク）",
      company: "Kuaishou Technology",
      releaseYear: "2024 (最新版2025)"
    },
    officialUrl: "https://klingai.com"
  },
  {
    id: "luma-dream-machine",
    name: "Luma Dream Machine",
    category: "video",
    categoryLabel: "映像・動画",
    badge: "カメラ躍動感No.1",
    version: "Ray 2 (Luma Dream Machine)",
    versionFeatures: {
      evolution: "NeRF技術のパイオニアLuma AIが開発。ジェットコースターやドローンで駆け抜けるような圧倒的なダイナミックカメラワークが得意。",
      strengths: ["超高速・アクロバティックなカメラ移動", "テキストから動画、画像から動画の直感的操作", "毎月30回無料生成枠", "ループ動画の一発作成"],
      weaknesses: ["細かい指先などの繊細な動きで溶けが生じる場合がある"],
      architecture: "Luma Spatiotemporal Transformer"
    },
    estimatedUsers: "500万人以上",
    siteRegisteredCount: 1080,
    votesCount: 1410,
    rankScore: 92.5,
    categoryRank: 4,
    overallRank: 12,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (月30回) / Standard $29.99 / 月",
    freePlanDetails: {
      limits: "毎月30本の無料生成クレジットが付与（透かしあり、通常キュー）。",
      allowedFeatures: ["5秒クリップ生成", "カメラコントロール", "ループ動画化"]
    },
    paidPlanDetails: {
      planName: "Luma Standard",
      price: "$29.99 / 月",
      unlockedFeatures: ["月120本の優先生成", "透かし削除", "商用利用ライセンス", "動画延長機能"],
      recommendedFor: "ドローン風の疾走感ある映像、ゲームのカットシーンやオープニングを作りたいクリエイター"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "ドローンが駆け抜けるようなスピード感。躍動感あふれるカメラワークを作るなら右に出る者なし。",
    description: "3Dグラフィックス技術に強みを持つLuma社ならではの、空間把握能力が際立つ動画AI。カメラを被写体の周りで360度旋回させたり、猛スピードで迫っていくような迫力あるシーンが簡単に作れます。",
    pros: ["カメラが大胆に動くシーンで迫力が段違い", "毎月30回無料で作れるのが嬉しい", "スマホアプリの操作性が良好"],
    cons: ["静的な人物の微妙な感情芝居はRunwayの方が得意"],
    specs: {
      contextWindow: "5秒〜延長対応",
      multimodal: "テキスト・画像",
      company: "Luma AI",
      releaseYear: "2024"
    },
    officialUrl: "https://lumalabs.ai/dream-machine"
  },
  {
    id: "pika",
    name: "Pika",
    category: "video",
    categoryLabel: "映像・動画",
    badge: "特殊エフェクト・SNS特化",
    version: "Pika 2.0 / Pikaffects",
    versionFeatures: {
      evolution: "オブジェクトを押し潰す・溶かす・爆発させる・膨らませる等の『Pikaffects』機能が大バズ。SNSショート動画に特化した演出が豊富。",
      strengths: ["Pikaffects（潰す・溶かす・燃やす等のユニーク変形）", "動画内の服やアイテムだけをピンポイント差し替え", "リップシンク（音声と口の同期）", "使いやすいWebエディタ"],
      weaknesses: ["映画調のシリアスな実写表現ではRunwayに分がある"],
      architecture: "Pika Generative Video Platform"
    },
    estimatedUsers: "700万人以上",
    siteRegisteredCount: 960,
    votesCount: 1250,
    rankScore: 91.2,
    categoryRank: 5,
    overallRank: 14,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎月クレジット補充) / Standard $10 / Pro $35 / 月",
    freePlanDetails: {
      limits: "初回および毎月一定の無料クレジットが付与。",
      allowedFeatures: ["Pikaffectsの試用", "基本動画生成", "Lip Sync試用"]
    },
    paidPlanDetails: {
      planName: "Pika Standard",
      price: "$10 / 月 (年払い $8)",
      unlockedFeatures: ["毎月700クレジット", "透かし削除", "生成時間延長", "高画質エクスポート"],
      recommendedFor: "TikTok・Instagramリール・YouTubeショートのネタ動画を作りたいインフルエンサー"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "SNSで超バズる特殊エフェクト満載。物を風船のように膨らませたり溶かしたりする動画が秒速で作れる。",
    description: "ショート動画クリエイターの間で大流行しているPikaffectsを搭載したAI。日常の写真をアップして『Crush it（潰す）』や『Melt it（溶かす）』を選ぶだけで、思わず二度見してしまう驚きの変形動画が完成します。",
    pros: ["誰でもSNSで目を引くバズ動画が作れる", "一部の衣装や背景だけを変える編集が簡単", "価格帯が月8ドル〜とお手頃"],
    cons: ["リアルな長編映画作りにはあまり向かない"],
    specs: {
      contextWindow: "ショートクリップ (3〜4秒)",
      multimodal: "テキスト・画像・音声・効果指定",
      company: "Pika Labs",
      releaseYear: "2023 (Pika 2.0 2024)"
    },
    officialUrl: "https://pika.art"
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "video",
    categoryLabel: "映像・動画",
    badge: "AIアバター・多言語吹替No.1",
    version: "Avatar 3.0 / Video Translator",
    versionFeatures: {
      evolution: "実在の人物の動画を、本人の声質のまま完璧な発音と口パク（リップシンク）で日本語・英語・中国語・スペイン語などに多言語吹き替え。",
      strengths: ["自分の声で40カ国語以上をペラペラ喋る吹替動画", "テキストを打ち込むだけでAIアバターが解説動画を制作", "プレゼン資料（Canva/PPT）の動画化", "ビジネス解説動画の制作費を95%削減"],
      weaknesses: ["ファンタジーやアニメ表現ではなくビジネス人物特化"],
      architecture: "HeyGen Neural Lip-Sync & Voice Cloning Engine"
    },
    estimatedUsers: "数百万社・クリエイター / 企業採用率急増",
    siteRegisteredCount: 1150,
    votesCount: 1480,
    rankScore: 93.6,
    categoryRank: 6,
    overallRank: 10,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (1クレジット試用) / Creator $29 / Team $89 / 月",
    freePlanDetails: {
      limits: "初回登録時に1分間の動画作成クレジット付与。",
      allowedFeatures: ["基本アバター利用", "多言語翻訳動画の1分テスト"]
    },
    paidPlanDetails: {
      planName: "HeyGen Creator",
      price: "$29 / 月 (年払い $24)",
      unlockedFeatures: ["毎月15クレジット（15分動画）", "透かし削除", "4K解像度", "インスタントアバター作成（自撮りから作成）"],
      recommendedFor: "YouTube解説系チャンネル運営者、海外向け情報発信者、企業の研修・商品紹介動画担当"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "動画の多言語化とAI解説の覇者。自分が英語やフランス語を流暢に話している動画が一瞬で完成。",
    description: "全世界に衝撃を与えた動画翻訳AI。日本語で喋った動画を放り込むだけで、英語ネイティブの流暢な発音に吹き替えられ、しかも口の形まで英語の動きに完全CG修正されます。顔出ししたくない人のアバター解説も超リアル。",
    pros: ["海外向けYouTube動画の展開が一瞬でできる", "カメラの前で喋る必要がなくなる", "自撮り動画から自分そっくりの分身アバターが作れる"],
    cons: ["月額24ドル〜と無料枠はお試しのみ"],
    specs: {
      contextWindow: "分単位の長尺動画対応",
      multimodal: "動画・音声・テキスト・アバター",
      company: "HeyGen",
      releaseYear: "2022 (最新版2024-2025)"
    },
    officialUrl: "https://www.heygen.com"
  },
  {
    id: "haiper",
    name: "Haiper",
    category: "video",
    categoryLabel: "映像・動画",
    badge: "次世代・4K動画生成",
    version: "Haiper 2.0",
    versionFeatures: {
      evolution: "Google DeepMindの元研究者が立ち上げ。高解像度4K動画のネイティブ生成と、精密なリペインティング（特定箇所の動画書き換え）に対応。",
      strengths: ["4K対応の高精細ディテール", "動画の一部の色やアイテムだけを変更するVideo Repainting", "毎日無料クレジットが付与される太っ腹仕様", "滑らかなスローモーション表現"],
      weaknesses: ["知名度でRunwayに一歩譲るが実力は急接近中"],
      architecture: "DeepMind Ex-Researchers Latent Video Model"
    },
    estimatedUsers: "200万人以上",
    siteRegisteredCount: 680,
    votesCount: 890,
    rankScore: 88.7,
    categoryRank: 7,
    overallRank: 19,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎日クレジット付与) / Explorer $8 / Pro $24 / 月",
    freePlanDetails: {
      limits: "毎日無料クレジットが補充。",
      allowedFeatures: ["HD動画生成", "Image to Video", "コミュニティ共有"]
    },
    paidPlanDetails: {
      planName: "Haiper Explorer",
      price: "$8 / 月",
      unlockedFeatures: ["4K解像度アップスケール", "動画の延長生成", "透かし削除", "優先生成キュー"],
      recommendedFor: "低予算で高品質な動画を作りたい個人クリエイター、4K画質にこだわりたい人"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "DeepMind出身者が作った新星。高画質な4K動画と特定箇所の書き換えが驚くほど手軽。",
    description: "急速に存在感を高めているイギリス発の動画生成AI。動画内の特定のオブジェクト（例えば着ている服の色や背景の建物）だけを自然に書き換える『ビデオ・リペイント』が強力で、実写素材の再編集に威力を発揮します。",
    pros: ["毎日無料で試せる", "4K出力のクオリティが高い", "月8ドルからと有料プランが非常にリーズナブル"],
    cons: ["コミュニティの作例数はRunwayほど多くない"],
    specs: {
      contextWindow: "4秒〜8秒クリップ",
      multimodal: "テキスト・画像・動画",
      company: "Haiper AI",
      releaseYear: "2024"
    },
    officialUrl: "https://haiper.ai"
  },
  {
    id: "viggle",
    name: "Viggle",
    category: "video",
    categoryLabel: "映像・動画",
    badge: "ミーム・ダンス完全合成",
    version: "Viggle 2.0 / JALDO Engine",
    versionFeatures: {
      evolution: "静止画のキャラクター（アニメでも実写でも）に、元動画のダンスやアクションの動きを完全にトレースさせて踊らせる神ツール。",
      strengths: ["1枚の写真が元動画と全く同じダンスを踊り出す", "手足の物理的骨格を正確にトラッキング", "ミーム動画・おもしろパロディ動画の一撃作成", "Discord & Webで簡単操作"],
      weaknesses: ["服の装飾が複雑すぎると破綻することがある"],
      architecture: "Controllable Character Motion Model"
    },
    estimatedUsers: "400万人以上 / TikTokやXで大流行",
    siteRegisteredCount: 840,
    votesCount: 1110,
    rankScore: 89.4,
    categoryRank: 8,
    overallRank: 17,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (一定回数) / Creator $9.99 / Pro $19.99 / 月",
    freePlanDetails: {
      limits: "WebまたはDiscordで無料キューにて生成可能。",
      allowedFeatures: ["Mix（キャラと動きの合成）", "Animate", "コミュニティ共有"]
    },
    paidPlanDetails: {
      planName: "Viggle Creator",
      price: "$9.99 / 月",
      unlockedFeatures: ["優先高速レンダリング", "グリーンスクリーン背景透過出力", "透かし削除", "無制限生成枠"],
      recommendedFor: "TikToker、VTuberファンアート制作者、バズるミーム動画を作りたい人"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "推しの写真が踊り出す！元動画のダンスをどんな画像にも完全コピー合成できるミーム製造機。",
    description: "SNSで『あの有名キャラがキレキレのダンスを踊っている動画』を見かけたら、ほぼ間違いなくこのViggleで作られています。人物の画像と、踊っている動画の2つを放り込むだけで、骨格を自動認識して完璧にトレースします。",
    pros: ["自分の描いたイラストやアバターが本当に踊る感動", "背景を透明（グリーンバック）にして動画編集ソフトに重ねられる", "無料でも十分に遊べる"],
    cons: ["真面目なビジネス用途にはあまり使われない"],
    specs: {
      contextWindow: "動画の長さに連動 (10〜30秒)",
      multimodal: "画像＋参照動画",
      company: "Viggle AI",
      releaseYear: "2024"
    },
    officialUrl: "https://viggle.ai"
  },
  {
    id: "synthesia",
    name: "Synthesia",
    category: "video",
    categoryLabel: "映像・動画",
    badge: "企業研修・マニュアル特化",
    version: "EXPRESSIVE AVATARS 2.0",
    versionFeatures: {
      evolution: "テキストを入力するだけで、プロのアナウンサーのようなAIアバターが140言語で解説・プレゼンする動画をゼロから制作。",
      strengths: ["160種類以上の多様なAIプレゼンターアバター", "140言語以上の自然な音声合成", "マニュアル・研修動画の修正がテキスト変更だけで数秒で完了", "画面収録やスライドの同時投影レイアウト"],
      weaknesses: ["個人利用には月額がやや高め（$22〜）"],
      architecture: "Synthesia Expressive Neural Human Engine"
    },
    estimatedUsers: "50,000社以上の企業（世界のトップ企業多数）",
    siteRegisteredCount: 610,
    votesCount: 780,
    rankScore: 87.3,
    categoryRank: 9,
    overallRank: 23,
    pricingType: "有料 (デモあり)",
    pricingMonthly: "無料デモ動画1本 / Starter $22 / Creator $67 / 月",
    freePlanDetails: {
      limits: "無料のデモ動画作成（1本のみ）。",
      allowedFeatures: ["基本アバターによるテスト生成"]
    },
    paidPlanDetails: {
      planName: "Synthesia Starter",
      price: "$22 / 月 (年払い)",
      unlockedFeatures: ["毎月120分の動画生成", "160種以上のアバター使い放題", "スクリーンレコーダー統合", "AIスクリプトアシスタント"],
      recommendedFor: "企業の総務・人事・教育研修担当、SaaSのヘルプセンター動画を作りたい担当者"
    },
    paidWorthRating: 4,
    hasFreeTier: false,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "企業の研修動画制作費をゼロに。台本を打ち込むだけで、アナウンサーが完璧に喋るマニュアル動画が完成。",
    description: "撮影スタジオもカメラマンも声優も不要にするエンタープライズ動画AI。仕様変更があっても、テキストを一行書き換えるだけで動画が瞬時に更新されるため、マニュアルやオンボーディング動画の更新コストが激変します。",
    pros: ["動画の撮り直しという概念がなくなる", "全世界の社員向けに多言語で同時展開できる", "操作がPowerPoint並みに直感的"],
    cons: ["個人向けというよりは法人向けの機能構成"],
    specs: {
      contextWindow: "スライド枚数・分単位",
      multimodal: "テキスト・スライド・画面キャプチャ",
      company: "Synthesia Ltd.",
      releaseYear: "2020 (最新アップデート2024)"
    },
    officialUrl: "https://www.synthesia.io"
  },
  {
    id: "topaz-video-ai",
    name: "Topaz Video AI",
    category: "video",
    categoryLabel: "映像・動画",
    badge: "プロ用4K/8K高画質化・補間",
    version: "Topaz Video AI 5",
    versionFeatures: {
      evolution: "昔のSD画質（VHSや古いデジカメ）動画をAIがディテール復元して4K/8K化。さらにフレームをAI補間して60fps/120fpsの超滑らかスローに。",
      strengths: ["昔の古いホームビデオやアニメが新品のように蘇る", "手ブレ補正（スタビライザー）とブロックノイズ除去", "買い切り型ライセンス（一度買えば一生使える）", "完全ローカルPC処理でクラウドへのアップロード不要"],
      weaknesses: ["ゼロから新しい動画を生み出す生成AIではない", "グラフィックボードのパワーが必要"],
      architecture: "Deep Temporal Super-Resolution Network"
    },
    estimatedUsers: "100万人以上 (映画修復家・YouTuber・制作プロ)",
    siteRegisteredCount: 720,
    votesCount: 920,
    rankScore: 88.5,
    categoryRank: 10,
    overallRank: 21,
    pricingType: "買い切り型 (体験版あり)",
    pricingMonthly: "無料試用版 (透かしあり) / 買い切り $299 (約45,000円)",
    freePlanDetails: {
      limits: "全機能の試用可能（書き出しに透かしが入る）。",
      allowedFeatures: ["高画質化プレビュー", "フレーム補間テスト"]
    },
    paidPlanDetails: {
      planName: "Topaz Video AI 永続ライセンス",
      price: "$299 (買い切り、1年間無償アップグレード)",
      unlockedFeatures: ["透かしなし無制限書き出し", "商用利用自由", "複数PCインストール（規約内）"],
      recommendedFor: "過去の名作動画やアニメを高画質化したいファン、動画編集者、結婚式や思い出動画の修復を行う人"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: false,
    hasApp: true,
    summary: "昔の低画質動画が4K/60fpsで蘇る。動画クリエイターが隠し持つ究極のレストア・高画質化ソフト。",
    description: "新規生成ではなく『既存の動画を限界突破させる』専門ツール。荒い解像度、ノイズ、ブレをAIが解析し、最新の4Kテレビで見ても耐えうるクリアな映像へと修復します。サブスクではなく買い切り型なのも大きな魅力。",
    pros: ["月額課金ではなく買い切りでずっと使える", "大切な古い家族ビデオやアニメの修復に最高", "PC内で完結するため機密動画も安心"],
    cons: ["レンダリングに時間がかかり高性能PCが必要"],
    specs: {
      contextWindow: "無制限（ローカルPCスペック依存）",
      multimodal: "あらゆる動画形式（MP4/ProRes等）",
      company: "Topaz Labs",
      releaseYear: "2020 (v5 2024)"
    },
    officialUrl: "https://www.topazlabs.com/topaz-video-ai"
  }
];
