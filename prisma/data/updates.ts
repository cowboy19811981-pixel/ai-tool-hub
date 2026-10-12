export interface UpdateSeedItem {
  toolId: string;
  title: string;
  summary3Lines: string;
  sourceUrl: string;
  publishedAt: Date;
}

export const updatesData: UpdateSeedItem[] = [
  {
    toolId: "gemini",
    title: "Googleが「Gemini 3.8 Flash」を正式発表、300万コンテキストと爆速推論を両立",
    summary3Lines: `・思考時間を要さない超低遅延リアルタイムマルチモーダル推論を実現。
・本数百冊分・長編動画を丸ごと読み込む300万トークンの巨大コンテキストを搭載。
・Google AI StudioおよびWeb版で無料枠から即座に利用可能。`,
    sourceUrl: "https://blog.google/technology/ai",
    publishedAt: new Date(Date.now() - 1000 * 60 * 30) // 30分前
  },
  {
    toolId: "claude",
    title: "Anthropicが「Claude 3.7 Sonnet」をリリース、即答と深層推論のハイブリッド統合",
    summary3Lines: `・即座の高速回答と、思考時間を設ける深層推論を1つのモデルでシームレスに切り替え可能。
・コーディング・アーキテクチャ設計・論理パズルで最高水準のスコアを更新。
・ArtifactsおよびComputer Use自律操作機能との完全連携に対応。`,
    sourceUrl: "https://www.anthropic.com/news",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2)
  },
  {
    toolId: "deepseek",
    title: "DeepSeek-R1が正式発表、推論性能でOpenAI o1に匹敵",
    summary3Lines: `・OpenAIのo1と同等水準の高度な数学・コーディング推論力を達成。
・思考プロセスが画面上にすべて可視化され、なぜその結論に至ったかが丸わかり。
・Webとアプリで完全無料開放されており、API利用料も従来の1/10以下という革命的コスパ。`,
    sourceUrl: "https://chat.deepseek.com",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4)
  },
  {
    toolId: "cursor",
    title: "Cursorの新機能「Agent Mode」がベータ提供開始",
    summary3Lines: `・AIが単なるコード提案を超え、自律してターミナルでビルドやテストを実行。
・エラーが発生しても自動で原因を特定し、ファイルを再編集して解決まで完走。
・エンジニアの作業効率がさらに倍増する開発環境の新たなスタンダード。`,
    sourceUrl: "https://www.cursor.com",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6) // 6時間前
  },
  {
    toolId: "chatgpt",
    title: "ChatGPTに「o3-mini」モデルが追加、推論速度が大幅短縮",
    summary3Lines: `・従来のo1モデルよりも圧倒的に高速かつ軽量に難問を解く「o3-mini」が利用可能に。
・プログラミング、論理パズル、科学的計算でのエラー率がさらに低下。
・無料ユーザーおよびPlusユーザー向けに順次ロールアウト中。`,
    sourceUrl: "https://chatgpt.com",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 11) // 11時間前
  },
  {
    toolId: "runway",
    title: "Runway Gen-3 Alphaに自撮り表情転送機能「Act-One」が登場",
    summary3Lines: `・スマホのカメラで撮影した自分の顔の表情や視線が、そのままAIキャラに完全同期。
・手作業での複雑な表情アニメーション付けが完全に不要に。
・インディー映画やVTuberコンテンツの制作スピードが劇的に加速。`,
    sourceUrl: "https://runwayml.com",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 16)
  },
  {
    toolId: "suno",
    title: "Suno v4が公開、ボーカルの解像度とミックスがメジャーレーベル級に",
    summary3Lines: `・ボーカルの掠れや息継ぎが本物のスタジオ録音レベルに超高精細化。
・歌詞の韻（ライム）を踏む精度と、サビでの盛り上がりのダイナミクスが大幅進化。
・作成した楽曲のステム分離（ボーカル・楽器の個別抽出）機能も追加。`,
    sourceUrl: "https://suno.com",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 22)
  }
];
