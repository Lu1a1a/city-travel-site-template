import { sourceUrls } from "./images";
import type { CultureItem, Locale, SectionCopy } from "./shared";

export type CultureContent = {
  cultureItems: CultureItem[];
  culture: SectionCopy;
};

export const cultureContent: Record<Locale, CultureContent> = {
  cn: {
    cultureItems: [
      {
        name: "阿美族",
        romanized: "Amis",
        note: "阿美族是花蓮重要的原住民族群之一，祭典、音樂與海岸聚落歷史持續形塑地方文化。",
        tone: "海洋、歌聲、聚會",
        sourceUrl: sourceUrls.ethnicity,
      },
      {
        name: "太魯閣族",
        romanized: "Truku",
        note: "太魯閣族與太魯閣地區關係深厚，山林知識、織布傳統與峽谷地景共同構成花蓮的文化辨識度。",
        tone: "山地、河谷、織紋",
        sourceUrl: sourceUrls.taroko,
      },
      {
        name: "撒奇萊雅族",
        romanized: "Sakizaya",
        note: "撒奇萊雅族的歷史透過文化復振、祭儀與社群記憶，持續在花蓮被看見。",
        tone: "記憶、色彩、復振",
        sourceUrl: "https://abda.hl.gov.tw/",
      },
      {
        name: "噶瑪蘭族",
        romanized: "Kebalan",
        note: "噶瑪蘭族連結東台灣海岸遷徙、語言與聚落故事，擴展花蓮文化地景的層次。",
        tone: "海岸、遷徙、語言",
        sourceUrl: sourceUrls.eastCoastCulture,
      },
    ],
    culture: {
      eyebrow: "Culture",
      title: "原住民族文化讓地景保有人情與時間",
      body:
        "花蓮的文化深度來自仍在生活中的社群、季節祭儀、工藝、飲食與語言，也持續改寫城市與山海相遇的方式。",
      readMoreLabel: "閱讀來源",
    },
  },
  en: {
    cultureItems: [
      {
        name: "Amis",
        romanized: "Amis",
        note:
          "Amis ceremonies, music, coastal settlements, and foodways make Hualien's shore more than a scenic stop.",
        tone: "Ocean, song, gathering",
        sourceUrl: sourceUrls.ethnicity,
      },
      {
        name: "Truku",
        romanized: "Truku",
        note:
          "Truku communities connect Taroko, mountain knowledge, weaving traditions, and gorge landscapes into the mountain route.",
        tone: "Mountain, river, weaving",
        sourceUrl: sourceUrls.taroko,
      },
      {
        name: "Sakizaya",
        romanized: "Sakizaya",
        note:
          "Sakizaya history remains visible through cultural revival, ceremony, color, and community memory.",
        tone: "Memory, color, renewal",
        sourceUrl: "https://abda.hl.gov.tw/",
      },
      {
        name: "Kebalan",
        romanized: "Kebalan",
        note:
          "Kebalan stories connect eastern Taiwan's coastal movement, language, and settlements with Hualien's wider landscape.",
        tone: "Coast, migration, language",
        sourceUrl: sourceUrls.eastCoastCulture,
      },
    ],
    culture: {
      eyebrow: "Local Culture",
      title: "Place Culture Inside the Travel Route",
      body:
        "A strong travel template should not rely on photos alone. Culture, landscape, history, and sources make stays, tours, and local brands feel credible.",
      readMoreLabel: "Read Source",
    },
  },
};
