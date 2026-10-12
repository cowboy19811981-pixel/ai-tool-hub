export interface UpdateSeedItem {
  toolId?: string | null;
  title: string;
  summary3Lines: string;
  sourceUrl: string;
  sourceName?: string;
  category?: string;
  publishedAt: Date;
}

// 初期シード用の手動ハードコード化石ニュースは全廃。
// 実際の最新ニュースは news-fetcher を通じて各社公式サイト・公式ブログから一次情報のみを自動取得します。
export const updatesData: UpdateSeedItem[] = [];
