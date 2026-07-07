import { commonsFile, type SiteImage, type Locale } from "./shared";

export type SiteImageKey =
  | "qixingtan"
  | "qixingtanHover"
  | "taroko"
  | "tarokoHover"
  | "dongdamen"
  | "dongdamenHover"
  | "pineGarden"
  | "pineGardenHover";

export type SiteImages = Record<SiteImageKey, SiteImage>;

const imageLibrary: Record<SiteImageKey, Omit<SiteImage, "alt">> = {
  qixingtan: {
    src: commonsFile("Qixingtan Beach, Taiwan.jpg"),
    width: 1440,
    height: 960,
    credit: "Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Qixingtan_Beach,_Taiwan.jpg",
  },
  qixingtanHover: {
    src: commonsFile("Hualien Chihsingtan Beach.jpg"),
    width: 4896,
    height: 2754,
    credit: "Yuhsuan1 / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Hualien_Chihsingtan_Beach.jpg",
  },
  taroko: {
    src: commonsFile("Taroko-Gorge Hualien Taiwan Cihmu-Bridge-at-Taroko-National-Park-01.jpg"),
    width: 1280,
    height: 853,
    credit: "Wikimedia Commons",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Taroko-Gorge_Hualien_Taiwan_Cihmu-Bridge-at-Taroko-National-Park-01.jpg",
  },
  tarokoHover: {
    src: commonsFile("Taroko National Park (8143519134).jpg"),
    width: 3968,
    height: 2232,
    credit: "jareed / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Taroko_National_Park_(8143519134).jpg",
  },
  dongdamen: {
    src: commonsFile("Hualien Dongdamen Night Market.jpg"),
    width: 1280,
    height: 913,
    credit: "Rutger van der Maar / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Hualien_Dongdamen_Night_Market.jpg",
  },
  dongdamenHover: {
    src: commonsFile("41-花蓮東大門夜市，林記燒番麥 (29518961025).jpg"),
    width: 6016,
    height: 4016,
    credit: "Sinchen.Lin / Wikimedia Commons",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:41-%E8%8A%B1%E8%93%AE%E6%9D%B1%E5%A4%A7%E9%96%80%E5%A4%9C%E5%B8%82%EF%BC%8C%E6%9E%97%E8%A8%98%E7%87%92%E7%95%AA%E9%BA%A5_(29518961025).jpg",
  },
  pineGarden: {
    src: commonsFile("Pine Garden, Hualien City, Hualien County (Taiwan) (ID UA09602000650).jpg"),
    width: 1329,
    height: 2048,
    credit: "Wikimedia Commons",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Pine_Garden,_Hualien_City,_Hualien_County_(Taiwan)_(ID_UA09602000650).jpg",
  },
  pineGardenHover: {
    src: commonsFile("Pine Garden, corridor, Hualien City, Hualien County (Taiwan).jpg"),
    width: 3375,
    height: 2250,
    credit: "Mk2010 / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Pine_Garden,_corridor,_Hualien_City,_Hualien_County_(Taiwan).jpg",
  },
};

export const sourceUrls = {
  qixingtan: "https://tour-hualien.hl.gov.tw/TourContent.aspx?n=109&s=1190",
  taroko: "https://www.taroko.gov.tw/",
  dongdamen: "https://tour-hualien.hl.gov.tw/TourContent.aspx?n=109&s=1448",
  pineGarden: "https://tour-hualien.hl.gov.tw/jp/TourContent.aspx?n=341&s=5735",
  ethnicity: "https://abda.hl.gov.tw/Ethnicity/",
  eastCoastCulture: "https://www.eastcoast-nsa.gov.tw/travel/culture/",
  localGovernment: "https://www.hl.gov.tw/News_Content.aspx?n=32725&s=191499",
  commons: "https://commons.wikimedia.org",
};

const imageAltText: Record<Locale, Record<SiteImageKey, string>> = {
  cn: {
    qixingtan: "Qixingtan pebble beach facing the Pacific Ocean in Hualien",
    qixingtanHover: "Second view of Qixingtan Beach in Hualien",
    taroko: "Cihmu Bridge and marble cliffs in Taroko Gorge",
    tarokoHover: "Second view of Cihmu Bridge in Taroko National Park",
    dongdamen: "Food stalls and lights at Dongdamen Night Market in Hualien",
    dongdamenHover: "Second view of Dongdamen Night Market in Hualien",
    pineGarden: "The historic Pine Garden building in Hualien City",
    pineGardenHover: "Second view of Pine Garden in Hualien",
  },
  en: {
    qixingtan: "Qixingtan pebble beach facing the Pacific Ocean in Hualien",
    qixingtanHover: "Second view of Qixingtan Beach in Hualien",
    taroko: "Cihmu Bridge and marble cliffs in Taroko Gorge",
    tarokoHover: "Second view of Cihmu Bridge in Taroko National Park",
    dongdamen: "Food stalls and lights at Dongdamen Night Market in Hualien",
    dongdamenHover: "Second view of Dongdamen Night Market in Hualien",
    pineGarden: "The historic Pine Garden building in Hualien City",
    pineGardenHover: "Second view of Pine Garden in Hualien",
  },
};

const withAlt = (image: Omit<SiteImage, "alt">, alt: string): SiteImage => ({
  ...image,
  alt,
});

export const getSiteImages = (locale: Locale): SiteImages => ({
  qixingtan: withAlt(imageLibrary.qixingtan, imageAltText[locale].qixingtan),
  qixingtanHover: withAlt(imageLibrary.qixingtanHover, imageAltText[locale].qixingtanHover),
  taroko: withAlt(imageLibrary.taroko, imageAltText[locale].taroko),
  tarokoHover: withAlt(imageLibrary.tarokoHover, imageAltText[locale].tarokoHover),
  dongdamen: withAlt(imageLibrary.dongdamen, imageAltText[locale].dongdamen),
  dongdamenHover: withAlt(imageLibrary.dongdamenHover, imageAltText[locale].dongdamenHover),
  pineGarden: withAlt(imageLibrary.pineGarden, imageAltText[locale].pineGarden),
  pineGardenHover: withAlt(imageLibrary.pineGardenHover, imageAltText[locale].pineGardenHover),
});