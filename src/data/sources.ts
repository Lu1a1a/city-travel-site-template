import { sourceUrls } from "./images";
import type { Locale, SectionCopy } from "./shared";

export type SourcesContent = {
  sources: SectionCopy;
  sourceLinks: Array<{
    label: string;
    url: string;
  }>;
};

export const sourcesContent: Record<Locale, SourcesContent> = {
  cn: {
    sources: {
      eyebrow: "Sources",
      title: "Hualien / 970",
      body:
        "這個 demo 使用公開觀光、文化、政府與 Wikimedia 參考資料，整理成一張花蓮的精簡視覺印象。",
    },
    sourceLinks: [
      { label: "花蓮觀光資訊網", url: "https://tour-hualien.hl.gov.tw" },
      { label: "花蓮縣原住民族行政處", url: "https://abda.hl.gov.tw" },
      { label: "東部海岸國家風景區文化資料", url: sourceUrls.eastCoastCulture },
      { label: "花蓮縣政府", url: sourceUrls.localGovernment },
      { label: "Wikimedia Commons 圖片來源", url: sourceUrls.commons },
    ],
  },
  en: {
    sources: {
      eyebrow: "Sources",
      title: "Hualien / Travel Guide",
      body:
        "This template demo uses public tourism, culture, government, and Wikimedia references. A live site can keep this source area or replace it with owned images and brand content.",
    },
    sourceLinks: [
      { label: "Hualien Tourism", url: "https://tour-hualien.hl.gov.tw" },
      { label: "Hualien Indigenous Peoples Department", url: "https://abda.hl.gov.tw" },
      { label: "East Coast National Scenic Area", url: sourceUrls.eastCoastCulture },
      { label: "Hualien County Government", url: sourceUrls.localGovernment },
      { label: "Wikimedia Commons Image Sources", url: sourceUrls.commons },
    ],
  },
};
