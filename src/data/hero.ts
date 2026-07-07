import type { Locale, PosterHeroCopy, SiteMeta } from "./shared";

export type HeroContent = {
  meta: SiteMeta;
  skipLabel: string;
  hero: PosterHeroCopy;
};

export const heroContent: Record<Locale, HeroContent> = {
  cn: {
    meta: {
      lang: "zh-Hant",
      title: "花蓮 Hualien 城市印象",
      description:
        "一個雙語視覺頁面，從海岸、太魯閣地景、原住民族文化、夜市與歷史建築認識台灣花蓮。",
    },
    skipLabel: "跳到主要內容",
    hero: {
      brandLabel: "Hualien",
      titleLines: ["HUA", "LIEN"],
      navAriaLabel: "主要導覽",
      routeNavLabel: "路線",
      placesNavLabel: "景點",
      contactNavLabel: "規劃旅程",
      pictureLabel: "Picture:",
      pictureValue: "花蓮",
      posterLabel: "Poster:",
      posterValue: "No. 970",
      positionLabel: "Position:",
      positionValue: "七星潭",
      modeLabel: "Mode:",
      modeValue: "山海人文",
      dividerLabel: "East Taiwan",
      eyebrow: "City Portrait",
      description:
        "花蓮不是單一景點，而是一張由海岸、峽谷、部落祭儀、夜市氣味與歷史建築壓印出的城市海報。",
      primaryCtaLabel: "查看推薦路線",
      secondaryCtaLabel: "開始規劃旅程",
      imageBadge: "Sublime Coast",
      photoVia: "photo via",
      languageToggleLabel: "EN",
      languageToggleAriaLabel: "切換為英文",
    },
  },
  en: {
    meta: {
      lang: "en",
      title: "Hualien Slow Travel Guide",
      description:
        "A travel website template for Hualien with Qixingtan, Taroko, Pine Garden, Dongdamen Night Market, itinerary routes, destination highlights, and trip inquiry CTAs.",
    },
    skipLabel: "Skip to main content",
    hero: {
      brandLabel: "Hualien",
      titleLines: ["HUA", "LIEN"],
      navAriaLabel: "Primary navigation",
      routeNavLabel: "Route",
      placesNavLabel: "Places",
      contactNavLabel: "Plan Trip",
      pictureLabel: "Guide:",
      pictureValue: "Hualien slow travel",
      posterLabel: "Route:",
      posterValue: "Coast to Gorge",
      positionLabel: "Start:",
      positionValue: "Qixingtan Coast",
      modeLabel: "Trip style:",
      modeValue: "Day to weekend",
      dividerLabel: "East Taiwan",
      eyebrow: "Hualien Travel Guide",
      description:
        "Start by the Pacific, move through Taroko marble cliffs, slow down at Pine Garden, and end under Dongdamen lights. A reusable Hualien travel template for stays, tours, local brands, and city guides.",
      primaryCtaLabel: "View route",
      secondaryCtaLabel: "Plan your trip",
      imageBadge: "Coast Morning",
      photoVia: "photo via",
      languageToggleLabel: "中文",
      languageToggleAriaLabel: "Switch to Chinese",
    },
  },
};
