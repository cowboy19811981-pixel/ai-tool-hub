import { ToolSeedItem } from "./types";

export const audioTools: ToolSeedItem[] = [
  {
    id: "suno",
    name: "Suno",
    category: "audio",
    categoryLabel: "音楽・音声",
    badge: "楽曲生成の覇者",
    version: "v3.5 / v4",
    versionFeatures: {
      evolution: "v3.5/v4により最長4分のフル楽曲を一撃作成。J-POP、ロック、EDM、アニソンなど、驚愕のボーカル歌唱力とミックスバランスを実現。",
      strengths: ["歌詞、メロディ、ボーカル、伴奏の完全同時作曲", "日本語の歌唱アクセントが驚くほど自然", "毎日50クレジット（約5曲）無料生成可能", "有料版ならSpotifyやApple Musicで収益化配信OK"],
      weaknesses: ["ボーカルや各楽器の細かいトラック別個別調整はやや限定的"],
      architecture: "Suno Full-Song Audio Diffusion Model"
    },
    estimatedUsers: "1,200万人以上 / 世界的社会現象",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 98.0,
    categoryRank: 1,
    overallRank: 5,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎日50クレジット) / Pro $10 (約1,500円) / Premier $30",
    freePlanDetails: {
      limits: "毎日50クレジット（曲生成5回分＝10曲生成）が無料付与。非商用利用のみ。",
      allowedFeatures: ["v3.5/v4モデル利用", "歌詞自動作成", "コミュニティ公開"]
    },
    paidPlanDetails: {
      planName: "Suno Pro Plan",
      price: "$10 / 月 (年払い $8)",
      unlockedFeatures: ["毎月2,500クレジット（月250回＝500曲）", "商用利用権（YouTube収益化、Spotify配信OK）", "優先生成キュー", "最大10曲の同時並列生成"],
      recommendedFor: "動画制作者、同人音楽・VTuber楽曲を作りたい人、自分の歌詞を本物の曲にしたいすべての人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: false,
    hasApp: true,
    summary: "音楽の歴史を変えた怪物AI。適当な歌詞を入れるだけで、プロのシンガーが歌うJ-POPが一瞬で完成。",
    description: "プロの音楽クリエイターをも震撼させた完全自動作曲AI。『夏の切ない失恋ソング、ヨルシカ風の女性ボーカルで』と指示するだけで、イントロからAメロ、サビ、アウトロまで、本当にCD音源として売られているような楽曲が生成されます。",
    pros: ["日本語ボーカルの滑らかさと歌唱力が圧倒的", "毎日無料で5曲作れる神仕様", "月8ドルで商用利用・サブスク配信権利が手に入る"],
    cons: ["たまに歌詞の漢字の読み方を間違えることがある（ひらがな指定で解決）"],
    specs: {
      contextWindow: "最長4分フルコーラス",
      multimodal: "テキスト歌詞・ジャンル指定・オーディオアップロード",
      company: "Suno, Inc.",
      releaseYear: "2023 (v3.5/v4 2024-2025)"
    },
    officialUrl: "https://suno.com"
  },
  {
    id: "udio",
    name: "Udio",
    category: "audio",
    categoryLabel: "音楽・音声",
    badge: "音質・音楽性No.1",
    version: "Udio v1.5",
    versionFeatures: {
      evolution: "元Google DeepMind研究者らが開発。生演奏のような豊かな空気感、ジャズやクラシックの高度なコード進行、ステム分離（ボーカルと楽器の個別書き出し）に対応。",
      strengths: ["音響クオリティ・空気感が生演奏レベル", "ステム分離機能（ボーカル、ベース、ドラムをバラバラに抽出）", "曲の途中へのパート追加・アレンジ編集", "音楽理論に忠実な展開"],
      weaknesses: ["一発で完成させる手軽さはSunoにやや分がある"],
      architecture: "DeepMind Ex-Researchers Audio Generative Pipeline"
    },
    estimatedUsers: "600万人以上 / 音楽愛好家に熱烈支持",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 94.3,
    categoryRank: 2,
    overallRank: 9,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎月100クレジット) / Standard $10 / Pro $30 / 月",
    freePlanDetails: {
      limits: "毎月100クレジット付与（毎日追加クレジットあり）。",
      allowedFeatures: ["基本作曲機能", "拡張・インペイント編集"]
    },
    paidPlanDetails: {
      planName: "Udio Standard",
      price: "$10 / 月",
      unlockedFeatures: ["毎月1,200クレジット", "ステム分離（Stemsダウンロード）", "商用利用ライセンス", "優先キュー"],
      recommendedFor: "DTM・トラックメイカー、DAWソフトで素材として加工したい音楽制作者"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: false,
    hasApp: false,
    summary: "本物のレコーディングスタジオの空気感。ボーカルと各楽器を個別トラックに分解できる本格派。",
    description: "Sunoと双璧をなす最高峰の音楽生成AI。特に音質の深みとアコースティック楽器の鳴りに定評があり、さらに完成した曲から『ボーカルだけ』『ドラムだけ』を取り出せるステム分離機能はDTMerにとって必携のツールです。",
    pros: ["音質・マスタリングの質感が非常にハイレベル", "ボーカルと伴奏を別々に抜き出せるステム機能が神", "ジャズやソウルなど玄人好みのジャンルが極めて巧み"],
    cons: ["Sunoよりも曲の組み立てに少し工夫が必要"],
    specs: {
      contextWindow: "セクション単位の自由延長 (最長数分)",
      multimodal: "テキスト・歌詞・オーディオ参照",
      company: "Udio, Inc.",
      releaseYear: "2024"
    },
    officialUrl: "https://www.udio.com"
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "audio",
    categoryLabel: "音楽・音声",
    badge: "世界最高峰AI音声・声真似",
    version: "Multilingual v2 / Voice Isolator / Sound Effects",
    versionFeatures: {
      evolution: "人間と聞き分けが不可能なレベルの呼吸音、イントネーション、感情（怒り・悲しみ・囁き）を完全再現。1分の音声から本人そっくりの声色を完全クローン。",
      strengths: ["感情表現・息遣いが完全に人間そのもの", "自分の声や他者の許諾済み音声を1分でクローン化", "29言語以上の超自然な発音と翻訳", "効果音（ドアのきしみ音や爆発音など）のテキスト生成"],
      weaknesses: ["無料プランの文字数上限は10,000文字と少なめ"],
      architecture: "ElevenLabs Deep Contextual Speech Model"
    },
    estimatedUsers: "1,500万人以上 / 声優・ゲーム業界採用",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 96.6,
    categoryRank: 3,
    overallRank: 6,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (月10,000文字) / Starter $5 / Creator $22 / 月",
    freePlanDetails: {
      limits: "毎月10,000文字までの読み上げ（クレジット表記必須）。",
      allowedFeatures: ["既定の高品質ボイス利用", "効果音生成の試用"]
    },
    paidPlanDetails: {
      planName: "ElevenLabs Starter / Creator",
      price: "$5〜$22 / 月 (初回割引あり)",
      unlockedFeatures: ["インスタント音声クローン（自分の声のAI化）", "商用利用ライセンス", "API利用枠", "長編オーディオブック作成エディタ"],
      recommendedFor: "YouTubeナレーション解説者、オーディオブック制作者、ゲーム開発者、自分の声をAI化したい人"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "人間の声と完全に見分けがつかない。呼吸や感情の込め方まで本物の声優そのものの超絶リアル音声。",
    description: "機械的なロボット声を過去のものにした衝撃の音声AI。日本語の文章を放り込むだけで、プロのアナウンサーや声優がスタジオでマイクに向かって喋っているかのような抑揚と温かみのある音声を出力します。",
    pros: ["機械っぽさが1ミリもない驚異的な演技力", "自分の声を学習させて原稿を読ませられる", "APIが整備されておりアプリ開発にも組み込みやすい"],
    cons: ["文字数課金のため長編小説を大量に読むとコストがかさむ"],
    specs: {
      contextWindow: "文字数ベース (1回数万文字)",
      multimodal: "テキスト・音声ファイル",
      company: "ElevenLabs",
      releaseYear: "2022 (最新版2024-2025)"
    },
    officialUrl: "https://elevenlabs.io"
  },
  {
    id: "whisper",
    name: "Whisper",
    category: "audio",
    categoryLabel: "音楽・音声",
    badge: "世界最高精度の文字起こし",
    version: "Whisper large-v3 / Turbo",
    versionFeatures: {
      evolution: "OpenAIが開発したオープンソース音声認識モデル。雑音混じり・早口・専門用語の飛び交う会話でも誤字なく文字起こしし、多言語翻訳も同時に実行。",
      strengths: ["世界トップの音声認識・文字起こし精度", "オープンソースでPCローカルなら完全無料で一生使い放題", "タイムスタンプ付きの字幕（SRT）自動出力", "680,000時間の多言語データ学習"],
      weaknesses: ["単体ではCLIやサードパーティ製アプリ（MacWhisper等）での実行が必要"],
      architecture: "OpenAI Transformer Sequence-to-Sequence ASR"
    },
    estimatedUsers: "数千万人 (世界中の文字起こしアプリの裏側)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 95.8,
    categoryRank: 4,
    overallRank: 7,
    pricingType: "完全無料 (OSS) / API従量課金",
    pricingMonthly: "ローカル完全無料 / API 1分あたり約0.9円 (OpenAI API)",
    freePlanDetails: {
      limits: "ローカルPC（Pythonや無料アプリ経由）で完全無制限・無料。",
      allowedFeatures: ["Whisper large-v3モデルの自由ダウンロード", "無制限文字起こし"]
    },
    paidPlanDetails: {
      planName: "OpenAI Whisper API",
      price: "$0.006 / 分 (1時間で約50円)",
      unlockedFeatures: ["クラウド超高速処理", "GPUのないPCやスマホからのAPI呼び出し"],
      recommendedFor: "会議の議事録を作るビジネスパーソン、YouTube動画の字幕を自動作成したい人、インタビュー取材記者"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "議事録や字幕作成の最終兵器。どんな早口やガヤの中でも、完璧に聞き取ってテキスト化する最強AI。",
    description: "世の中のほぼすべての高精度文字起こしサービスの『頭脳』となっているオープンソースAI。1時間の会議録音やYouTube動画を放り込めば、わずか数分で一言一句違わぬテキストとタイムスタンプ字幕が手に入ります。",
    pros: ["日本語の認識精度が業界トップクラス", "ローカルで動かせば社内の機密会議も情報漏洩リスクゼロ", "API利用でも1時間わずか50円と格安"],
    cons: ["話者分離（誰が喋ったかの自動判別）には追加のツールが必要"],
    specs: {
      contextWindow: "音声ファイル制限なし (ローカル)",
      multimodal: "音声・多言語テキスト出力",
      company: "OpenAI",
      releaseYear: "2022 (large-v3 2024)"
    },
    officialUrl: "https://openai.com/research/whisper"
  },
  {
    id: "soundraw",
    name: "Soundraw",
    category: "audio",
    categoryLabel: "音楽・音声",
    badge: "YouTube尺調整BGM特化",
    version: "Soundraw Custom Beats",
    versionFeatures: {
      evolution: "日本発のAI作曲サービス。動画の編集点に合わせて、イントロ・サビ・アウトロの位置や全体の長さをスライダーで自由自在に編集可能。",
      strengths: ["動画の長さに合わせて曲の長さを1秒単位でピッタリ調整可能", "サビの盛り上がり位置を直感的に変更できる", "著作権フリーでYouTube収益化に完全適合", "クリエイター目線の洗練されたUI"],
      weaknesses: ["ボーカル曲よりもインストBGMに特化"],
      architecture: "Parametric AI Music Composition Engine"
    },
    estimatedUsers: "100万人以上 / YouTuber・動画編集者に大人気",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 90.5,
    categoryRank: 5,
    overallRank: 16,
    pricingType: "フリーミアム",
    pricingMonthly: "曲の生成・試聴は無制限無料 / Creator 月額約1,650円〜",
    freePlanDetails: {
      limits: "曲の作成と試聴・ブックマークは無制限に無料（ダウンロードに課金が必要）。",
      allowedFeatures: ["無制限のBGM自動生成", "曲の構成・長さのカスタマイズ編集"]
    },
    paidPlanDetails: {
      planName: "Soundraw Creator Plan",
      price: "月額 約1,650円 (年払い)",
      unlockedFeatures: ["曲のダウンロード無制限", "YouTube・Podcast・広告での商用利用権永久保持", "ステム書き出し"],
      recommendedFor: "動画編集者、YouTuber、ポッドキャスト配信者、BGM探しの時間をゼロにしたい人"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "動画の長さにピッタリ合うBGMを自作。サビのタイミングも曲の長さも自由にいじれるYouTuber御用達。",
    description: "『あと15秒動画が余ったからBGMを伸ばしたい』という動画編集あるあるを完璧に解決。ジャンルやムードを選ぶだけで何十曲も候補が出現し、曲の構成をブロック単位で自由に入れ替えられます。",
    pros: ["動画の尺に100%ピッタリ合う曲が作れる", "著作権侵害の心配が一切ない安心設計", "生成・試聴だけならずっと無料で遊べる"],
    cons: ["歌入りのJ-POPを作りたいならSunoの方が適している"],
    specs: {
      contextWindow: "最長5分以上 (自由調整)",
      multimodal: "ムード・テンポ・楽器構成指定",
      company: "SOUNDRAW株式会社",
      releaseYear: "2020 (最新アップデート2024)"
    },
    officialUrl: "https://soundraw.io"
  },
  {
    id: "voicemod",
    name: "Voicemod",
    category: "audio",
    categoryLabel: "音楽・音声",
    badge: "配信・通話リアルタイム声変換",
    version: "Voicemod AI Voices 2.0",
    versionFeatures: {
      evolution: "Discord通話やOBSゲーム配信で、マイクに向かって喋った自分の声をミリ秒単位の超低遅延で美少女、ロボット、イケボにリアルタイム変換。",
      strengths: ["超低遅延（ゼロラグ）でリアルタイム会話に完全対応", "Discord, Zoom, Twitch, OBSにワンクリックで連携", "100種類以上のAIボイスエフェクト", "ボタン1つで効果音を鳴らせるサウンドボード内蔵"],
      weaknesses: ["PCのGPUリソースをある程度消費する"],
      architecture: "Real-time Low-Latency Voice Morphing Neural Network"
    },
    estimatedUsers: "4,000万人ダウンロード (ゲーマー・配信者の定番)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 91.8,
    categoryRank: 6,
    overallRank: 13,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (日替わりボイス) / PRO 買い切り 約6,000円〜 / サブスク",
    freePlanDetails: {
      limits: "毎日日替わりで数種類のボイスとサウンドボードが無料利用可能。",
      allowedFeatures: ["日替わりAIボイス", "基本サウンドボード", "Discord連携"]
    },
    paidPlanDetails: {
      planName: "Voicemod PRO (買い切り/サブスク)",
      price: "買い切り 約6,000〜8,000円 (セールあり)",
      unlockedFeatures: ["100種以上の全AIボイス永久アンロック", "自作ボイスクリエイター（Voicelab）", "効果音サウンドボード無制限登録"],
      recommendedFor: "VTuber、ゲーム実況者、Discordで友達とボイスチャットを楽しむ人、身バレを防ぎたい配信者"
    },
    paidWorthRating: 5,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: false,
    hasApp: true,
    summary: "喋った瞬間に美少女やイケボに変身。Discordやゲーム配信でタイムラグなしで使えるリアルタイムボイチェン。",
    description: "後から録音音声を加工するのではなく『今話している声』をリアルタイムで別人に変えるライブ専用AI。マイク入力として認識されるため、あらゆるPCゲームや通話アプリでそのまま使えます。",
    pros: ["遅延がほぼなく自然に会話のキャッチボールができる", "買い切りプランがあり一度買えばずっと使える", "効果音ポン出し機能が配信を盛り上げる"],
    cons: ["スマホ版はPC版に比べると機能が制限される"],
    specs: {
      contextWindow: "リアルタイムストリーミング (低遅延)",
      multimodal: "マイクリアルタイム音声",
      company: "Voicemod S.L.",
      releaseYear: "2014 (AI化2023-2024)"
    },
    officialUrl: "https://www.voicemod.net/ja"
  },
  {
    id: "stable-audio",
    name: "Stable Audio",
    category: "audio",
    categoryLabel: "音楽・音声",
    badge: "効果音・環境音生成の雄",
    version: "Stable Audio 2.0",
    versionFeatures: {
      evolution: "Stability AIが開発。最長3分の楽曲生成に加え、映画やゲームに使える『宇宙船のエンジン音』『雨の森の環境音』などの効果音（SFX）生成が驚異的。",
      strengths: ["ゲームや動画用の効果音・環境音（アンビエント）生成が最高峰", "最長3分のステレオ44.1kHzフル楽曲", "オーディオをアップロードして別の楽器音に変換（Audio-to-Audio）", "オープンモデルも公開"],
      weaknesses: ["キャッチーなJ-POPボーカル曲にはSunoの方が特化している"],
      architecture: "Latent Diffusion for Full-Track Audio"
    },
    estimatedUsers: "300万人以上",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 89.7,
    categoryRank: 7,
    overallRank: 18,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (毎月20トラック) / Pro $11.99 / 月",
    freePlanDetails: {
      limits: "毎月20トラックまでの生成（非商用利用のみ、最長3分）。",
      allowedFeatures: ["テキストから音楽・効果音生成", "Audio-to-Audio試用"]
    },
    paidPlanDetails: {
      planName: "Stable Audio Pro",
      price: "$11.99 / 月 (年払い $9.99)",
      unlockedFeatures: ["毎月500トラック生成", "商用利用ライセンス", "商用プロジェクトへの楽曲使用権"],
      recommendedFor: "インディーゲーム開発者、映像制作でリアルな環境音・SF効果音が必要なクリエイター"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "効果音とアンビエントのプロフェッショナル。『雷雨の中の古い洋館』などリアルな音響空間をゼロから創出。",
    description: "単なるメロディ作りにとどまらず、空間の音（サウンドスケープ）や特殊効果音の生成でずば抜けた実力を誇るAI。『レーザー銃の音』『カフェのざわめき』などを指定して自分だけの効果音ライブラリが作れます。",
    pros: ["音の質感・サンプリング周波数がクリア", "効果音のバリエーションが無限に作れる", "無料プランで毎月20回試せる"],
    cons: ["歌もののボーカル生成はSunoほど前に出てこない"],
    specs: {
      contextWindow: "最長3分、44.1kHzステレオ",
      multimodal: "テキスト・オーディオ入力",
      company: "Stability AI",
      releaseYear: "2023 (v2.0 2024)"
    },
    officialUrl: "https://www.stableaudio.com"
  },
  {
    id: "aiva",
    name: "AIVA",
    category: "audio",
    categoryLabel: "音楽・音声",
    badge: "クラシック・映画劇伴・MIDI",
    version: "AIVA Symphonic AI",
    versionFeatures: {
      evolution: "世界で初めて著作権管理団体（SACEM）に作曲家として正式登録された本格派クラシック・シンフォニー作曲AI。MIDIデータの完全書き出しに対応。",
      strengths: ["フルオーケストラ、映画の劇伴、壮大なゲームBGMの作曲", "DAWソフト（Logic, Cubase等）に読み込めるMIDIノートの完全エクスポート", "コード進行やテンポの微調整", "本格派音楽理論の反映"],
      weaknesses: ["流行りのポップスやクラブミュージックにはやや硬い"],
      architecture: "Deep Classical Music Composition Engine"
    },
    estimatedUsers: "200万人以上 (映画・ゲーム作曲家)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 87.6,
    categoryRank: 8,
    overallRank: 22,
    pricingType: "フリーミアム",
    pricingMonthly: "無料 (月3ダウンロード) / Standard €11 / Pro €33 / 月",
    freePlanDetails: {
      limits: "毎月3曲までのダウンロード（著作権はAIVAに帰属、非商用クレジット必須）。",
      allowedFeatures: ["無制限の作曲", "250種以上のスタイルプリセット"]
    },
    paidPlanDetails: {
      planName: "AIVA Pro Plan",
      price: "月額 €33 (年払い €29)",
      unlockedFeatures: ["毎月300曲ダウンロード", "楽曲の著作権（Copyright）をユーザーが100%完全保有", "MIDI・無圧縮オーディオ書き出し"],
      recommendedFor: "ゲームクリエイター、劇伴作家、AIの作ったフレーズを自分のDAWで仕上げたいDTM作家"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: true,
    summary: "オーケストラと劇伴の巨匠。映画やRPGのクライマックスに流れるような壮大なシンフォニーを作曲。",
    description: "モーツァルトやベートーヴェンのクラシック理論を深く学習した名門AI。壮大なバトル曲や涙を誘うピアノソロを作曲できるだけでなく、MIDIファイルとして書き出せるため、自分のシンセサイザーで音色を差し替えて仕上げられます。",
    pros: ["MIDIデータが手に入るので音楽制作のアイデア出しに最高", "オーケストラの重厚感が素晴らしい", "無料でもダウンロードを試せる"],
    cons: ["Proプラン以外は著作権が手に入らないため商用利用は要課金"],
    specs: {
      contextWindow: "最長5分以上 (MIDI/Audio)",
      multimodal: "コード進行・ジャンル・キー・BPM指定",
      company: "Aiva Technologies",
      releaseYear: "2016 (最新アップデート2024)"
    },
    officialUrl: "https://www.aiva.ai"
  },
  {
    id: "fish-audio",
    name: "Fish Audio",
    category: "audio",
    categoryLabel: "音楽・音声",
    badge: "オープンソース爆速TTS",
    version: "Fish Speech 1.5",
    versionFeatures: {
      evolution: "数秒の参照音声からゼロショットで声色をクローン。オープンソースで超軽量・超高速推論を実現し、開発者界隈で急速にシェア拡大。",
      strengths: ["超低遅延・高スループットの音声合成", "わずか数秒の音声サンプルからの声質クローン", "Webサイトでの手軽な試用とオープンモデル公開", "多言語対応（日本語・英語・中国語等）"],
      weaknesses: ["大手ElevenLabsに比べるとGUIの一般向け機能は発展途上"],
      architecture: "LLM-based Zero-shot Text-to-Speech Engine"
    },
    estimatedUsers: "100万人以上 (開発者・音声コミュニティ)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 86.2,
    categoryRank: 9,
    overallRank: 27,
    pricingType: "フリーミアム",
    pricingMonthly: "無料枠あり / 従量課金API / オープンモデル無料",
    freePlanDetails: {
      limits: "Webサイトで一定量の音声生成クレジットが無料付与。",
      allowedFeatures: ["コミュニティボイスの利用", "短文音声生成"]
    },
    paidPlanDetails: {
      planName: "Fish Audio API Pro",
      price: "格安従量課金",
      unlockedFeatures: ["商用API利用", "専用プライベートモデルホスティング", "高レートリミット"],
      recommendedFor: "AIアバターや対話Botを自作したいプログラマー、軽量なTTSを探している開発者"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: true,
    commercialUse: true,
    hasApi: true,
    hasApp: false,
    summary: "開発者に愛される次世代オープン音声合成。わずか数秒の声から爆速で自然な音声を喋らせる。",
    description: "ElevenLabsに迫る声質クオリティをオープンなアーキテクチャで実現した注目の新世代音声AI。APIのレスポンスが極めて高速なため、リアルタイムでAIと会話するアプリの裏側として世界中で採用されています。",
    pros: ["数秒の音声があれば誰の声でも真似できる", "API利用料が非常に安価", "ローカル実行用のモデルも公開されている"],
    cons: ["一般ユーザー向けの操作ガイドはやや英語・技術者向け"],
    specs: {
      contextWindow: "ストリーミング対応",
      multimodal: "テキスト・音声参照",
      company: "Fish Audio",
      releaseYear: "2024"
    },
    officialUrl: "https://fish.audio"
  },
  {
    id: "musicfx",
    name: "MusicFX",
    category: "audio",
    categoryLabel: "音楽・音声",
    badge: "Google Labs完全無料ループ",
    version: "MusicFX (MusicLM駆動)",
    versionFeatures: {
      evolution: "Googleが実験室（Labs）で完全無料公開しているAIループBGM生成ツール。『DJ Mode』でリアルタイムに楽器を足し引きしながら無限ループを演奏。",
      strengths: ["Googleアカウントがあれば完全無料で制限なし", "DJモードでリアルタイムにドラムやベースをミックス可能", "作業用ループBGM（Lo-Fi HipHopなど）の一発生成", "直感的なキーワードUI"],
      weaknesses: ["ボーカル付き楽曲の生成は非対応（インストのみ）"],
      architecture: "Google DeepMind MusicLM Architecture"
    },
    estimatedUsers: "数千万人 (Google Labs利用者)",
    siteRegisteredCount: 0,
    votesCount: 0,
    rankScore: 88.2,
    categoryRank: 10,
    overallRank: 20,
    pricingType: "完全無料",
    pricingMonthly: "完全無料 (Googleアカウントのみで利用可能)",
    freePlanDetails: {
      limits: "完全無料で回数制限なし。",
      allowedFeatures: ["最長70秒のトラックおよび無限ループ生成", "DJ Modeリアルタイム演奏", "ダウンロード"]
    },
    paidPlanDetails: {
      planName: "完全無料提供中",
      price: "0円",
      unlockedFeatures: ["全機能利用可能"],
      recommendedFor: "作業用BGMを手軽に作りたい人、お金をかけずにオシャレなループ音楽が欲しい人"
    },
    paidWorthRating: 4,
    hasFreeTier: true,
    supportsJapanese: false,
    commercialUse: false,
    hasApi: false,
    hasApp: false,
    summary: "Googleが無料開放するオシャレBGM生成マシン。DJ感覚でツマミをいじりながら無限ループ音楽を生成。",
    description: "Google DeepMindのMusicLM技術を体験できる無料ツール。『Chilled Lo-Fi with saxophone』と入れるだけで、カフェで流れているような心地よい音楽が瞬時に流れ出します。DJモードで即興演奏するのも快感。",
    pros: ["完全無料でお金が一切かからない", "作業に集中できるループ音楽が一瞬で作れる", "Googleらしい洗練されたデザイン"],
    cons: ["歌入りのJ-POPなどの曲は作れない"],
    specs: {
      contextWindow: "ループトラック (最長70秒〜無限)",
      multimodal: "テキストプロンプト",
      company: "Google",
      releaseYear: "2023 (最新版2024)"
    },
    officialUrl: "https://aitestkitchen.withgoogle.com/tools/music-fx"
  }
];
