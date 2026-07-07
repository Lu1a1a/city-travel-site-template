import { sourceUrls, type SiteImages } from "./images";
import type { FeatureCard, Locale, SectionCopy } from "./shared";

export const featuresContent: Record<Locale, SectionCopy> = {
  cn: {
    eyebrow: "Hualien Layers",
    title: "從海、山、夜色與記憶閱讀花蓮",
    body: "這些區塊可以直接替換成民宿附近景點、城市導覽、包車路線或地方品牌推薦。",
  },
  en: {
    eyebrow: "Featured Places",
    title: "Four Stops That Shape a Day in Hualien",
    body: "Use these sections for nearby attractions, city guides, private tour routes, or local brand recommendations.",
  },
};

export const getFeatureCards = (locale: Locale, images: SiteImages): FeatureCard[] => {
  if (locale === "en") {
    return [
      {
        id: "qixingtan",
        eyebrow: "Morning coast",
        title: "Qixingtan Pebble Shore",
        summary:
          "Open the trip with Pacific light, a wide horizon, and the sound of stones moving under the tide.",
        detail:
          "Best for sunrise walks, first-day arrival photos, and a calm starting point before heading north toward Taroko.",
        sourceLabel: "View attraction",
        sourceUrl: sourceUrls.qixingtan,
        image: images.qixingtan,
        hoverImage: images.qixingtanHover,
      },
      {
        id: "taroko",
        eyebrow: "Gorge route",
        title: "Taroko Marble Cliffs",
        summary:
          "A full-day anchor with cliffs, bridges, rivers, and Truku cultural context built into the mountain route.",
        detail:
          "Use this stop for guided tours, private drivers, hiking notes, and higher-value itinerary packages.",
        sourceLabel: "View attraction",
        sourceUrl: sourceUrls.taroko,
        image: images.taroko,
        hoverImage: images.tarokoHover,
      },
      {
        id: "dongdamen",
        eyebrow: "Night market",
        title: "Dongdamen Evening Walk",
        summary:
          "End the day with local snacks, plaza lights, and a simple map CTA for guests already in the city center.",
        detail:
          "Good for restaurant pages, night tour cards, and mobile-first directions from hotels or stations.",
        sourceLabel: "View attraction",
        sourceUrl: sourceUrls.dongdamen,
        image: images.dongdamen,
        hoverImage: images.dongdamenHover,
      },
      {
        id: "pine-garden",
        eyebrow: "Slow culture",
        title: "Pine Garden Terrace",
        summary:
          "A quieter stop for old pines, historic architecture, city views, and a slower editorial travel rhythm.",
        detail:
          "Use this for boutique stays, culture walks, or city brand storytelling when the page needs more depth.",
        sourceLabel: "View attraction",
        sourceUrl: sourceUrls.pineGarden,
        image: images.pineGarden,
        hoverImage: images.pineGardenHover,
      },
    ];
  }

  return [
    {
      id: "qixingtan",
      eyebrow: "Coast",
      title: "七星潭，面向太平洋的礫石海岸",
      summary: "弧形海岸、湛藍太平洋與堆疊礫石，構成許多人抵達花蓮的第一個畫面。",
      detail: "七星潭位在花蓮市北側，以開闊海景、圓潤石灘與山海交會的視線聞名。",
      sourceLabel: "花蓮觀光資訊網",
      sourceUrl: sourceUrls.qixingtan,
      image: images.qixingtan,
      hoverImage: images.qixingtanHover,
    },
    {
      id: "taroko",
      eyebrow: "Mountain",
      title: "太魯閣，大理石峽谷之境",
      summary: "高聳峭壁、河流切割與太魯閣族文化，讓花蓮擁有強烈的山地輪廓。",
      detail: "太魯閣地景連結立霧溪峽谷與族群生活，石壁、森林與聚落記憶在此交疊。",
      sourceLabel: "原住民文化資訊網",
      sourceUrl: sourceUrls.taroko,
      image: images.taroko,
      hoverImage: images.tarokoHover,
    },
    {
      id: "dongdamen",
      eyebrow: "Night",
      title: "東大門夜市",
      summary: "攤位燈火、街頭聲響與在地小吃，把城市的夜晚轉化成開放的公共舞台。",
      detail: "東大門夜市於 2015 年開幕，整合多條美食街與廣場空間，是花蓮市中心的重要夜間場域。",
      sourceLabel: "花蓮觀光資訊網",
      sourceUrl: sourceUrls.dongdamen,
      image: images.dongdamen,
      hoverImage: images.dongdamenHover,
    },
    {
      id: "pine-garden",
      eyebrow: "Memory",
      title: "松園別館，城市高地上的歷史記憶",
      summary: "戰時建築、老松樹與俯瞰城市的視角，保存花蓮較安靜的一層時間。",
      detail: "松園別館建於 1942 年，如今是結合建築、樹群與城市記憶的文化地標。",
      sourceLabel: "花蓮觀光資訊網",
      sourceUrl: sourceUrls.pineGarden,
      image: images.pineGarden,
      hoverImage: images.pineGardenHover,
    },
  ];
};
