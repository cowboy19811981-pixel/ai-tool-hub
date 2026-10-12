export interface GalleryItemSeed {
  id: string;
  theme: string;
  category: string;
  inputPrompt: string;
  comparisons: {
    toolName: string;
    outputSummary: string;
    visualStyle: string;
    prosVsCons: string;
    sampleResultUrl?: string;
  }[];
}

export const galleriesData: GalleryItemSeed[] = [
  {
    id: "gallery-1",
    theme: "画像生成：サイバーパンクな街並みと雨の路地",
    category: "image",
    inputPrompt: "Cyberpunk Tokyo street at night, neon holographic signs, rainy pavement reflections, cinematic lighting, 8k resolution",
    comparisons: [
      {
        toolName: "Midjourney v6.1",
        outputSummary: "映画のワンシーンそのもの。雨の水たまりに反射するネオンの歪みとレンズフレアが極めて芸術的。",
        visualStyle: "シネマティック・高コントラスト・重厚な空気感",
        prosVsCons: "長所: 圧倒的なドラマ性と雰囲気。短所: 細部の文字は英語風の架空文字になりがち。"
      },
      {
        toolName: "FLUX.1 [dev]",
        outputSummary: "看板の文字が破綻せず正確に読める。建物の直線の狂いがなく、解剖学的にも自然。",
        visualStyle: "クリーン・写実的・ディテールの正確性",
        prosVsCons: "長所: 文字の正確さと線の整合性が神。短所: Midjourney特有の絵画的なドラマ性は控えめ。"
      },
      {
        toolName: "DALL-E 3",
        outputSummary: "指示された要素（ホログラム、雨、ネオン）を100%漏れなく配置。ややイラスト寄り。",
        visualStyle: "鮮やか・イラスト的ポップ・理解力重視",
        prosVsCons: "長所: プロンプト理解度が最高。短所: 写実的な質感というよりはややCGアニメ調。"
      }
    ]
  },
  {
    id: "gallery-2",
    theme: "動画生成：水面を割って飛び立つ巨大なクジラ",
    category: "video",
    inputPrompt: "Cinematic shot of a massive blue whale breaching through calm ocean water at sunset, water droplets splashing in slow motion, golden hour sunlight",
    comparisons: [
      {
        toolName: "Runway Gen-3 Alpha",
        outputSummary: "飛び散る水しぶきの物理挙動が極めてリアル。重力と水面の波紋の広がりが映画のCGクオリティ。",
        visualStyle: "ハリウッド映画実写調・リアルな水物理シミュレーション",
        prosVsCons: "長所: 物理演算の破綻の少なさとカメラワークが最高峰。短所: 生成時間がやや長い。"
      },
      {
        toolName: "Luma Dream Machine",
        outputSummary: "カメラがクジラの周りを大胆に旋回。疾走感とスケール感の演出が劇的。",
        visualStyle: "躍動感・ドローン追従アングル・壮大なスケール",
        prosVsCons: "長所: カメラのアクロバティックな動き。短所: 水滴の細かい粒が後半で少しブレる。"
      },
      {
        toolName: "Kling AI 1.5",
        outputSummary: "クジラの巨体の重みとスピード感が滑らか。夕日の光彩の反射が美しい。",
        visualStyle: "滑らかなモーション・自然なライティング",
        prosVsCons: "長所: 動きの粘り・重厚感の表現が巧み。短所: 背景の夕焼けがやや誇張される。"
      }
    ]
  },
  {
    id: "gallery-3",
    theme: "コード生成：ドラッグ＆ドロップ対応のKanbanタスク管理UI",
    category: "code",
    inputPrompt: "Create a modern Kanban board in React + Tailwind CSS with drag and drop support, column management, and task modal.",
    comparisons: [
      {
        toolName: "v0 by Vercel",
        outputSummary: "一撃で洗練されたshadcn/uiデザインの完璧なコンポーネントコードを出力。即プレビュー可能。",
        visualStyle: "モダンクリーン・ダークモード対応・洗練されたタイポグラフィ",
        prosVsCons: "長所: デザインの美しさが最初から100点満点。短所: 複雑な状態永続化ロジックは手動補完が必要。"
      },
      {
        toolName: "Cursor (Claude 3.7 Sonnet)",
        outputSummary: "既存プロジェクトのディレクトリ構造を理解し、状態管理ストア、型定義、UIコンポーネントを3ファイルに分割して一括配置。",
        visualStyle: "保守性の高い実戦向けTypeScript設計",
        prosVsCons: "長所: そのまま商用プロジェクトに組み込める完全なアーキテクチャ。短所: エディタが必要。"
      },
      {
        toolName: "Bolt.new",
        outputSummary: "ブラウザ上でNode環境が即起動し、ライブラリのインストールから動くアプリのプレビューまで全自動完了。",
        visualStyle: "即時実行可能なフルスタックプロトタイプ",
        prosVsCons: "長所: クリックしてその場でドラッグ操作を試せる。短所: 生成トークン消費が大きい。"
      }
    ]
  }
];
