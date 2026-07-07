import { sourceUrls } from "./images";
import type { Locale, SectionCopy, StoryStep } from "./shared";

export type StoryContent = {
  storySteps: StoryStep[];
  story: SectionCopy;
};

export const storyContent: Record<Locale, StoryContent> = {
  cn: {
    storySteps: [
      {
        label: "01 / Sea",
        title: "從太平洋邊緣開始",
        body: "七星潭以開闊海面、礫石海岸與水平線框住花蓮，使城市始終與太平洋保持視覺連結。",
        duration: "停留 60-90 分鐘",
        tip: "適合放在民宿附近景點或抵達花蓮第一站。",
        sourceUrl: sourceUrls.qixingtan,
      },
      {
        label: "02 / Tribe",
        title: "沿著文化走進山谷",
        body: "原住民族社群透過祭儀、語言、工藝與土地關係，讓花蓮的季節與地景有了活的節奏。",
        duration: "停留 3-4 小時",
        tip: "適合包車、導覽、健行與深度旅遊版本。",
        sourceUrl: sourceUrls.taroko,
      },
      {
        label: "03 / Table",
        title: "把一天收在夜市餐桌",
        body: "東大門聚集城市的食物、聲音與夜間人流，成為花蓮市中心附近可步行抵達的夜晚節點。",
        duration: "停留 45-60 分鐘",
        tip: "適合精品旅宿、城市散步與文化品牌頁。",
        sourceUrl: sourceUrls.pineGarden,
      },
      {
        label: "04 / Night",
        title: "東大門夜市晚餐",
        body: "最後把路線收在小吃、燈光與地圖入口，讓手機訪客可以直接導航。",
        duration: "停留 90-120 分鐘",
        tip: "適合加入訂位、集合點、LINE 或 Google Maps CTA。",
        sourceUrl: sourceUrls.dongdamen,
      },
    ],
    story: {
      eyebrow: "Route Notes",
      title: "一條穿過花蓮視覺記憶的短路線",
      body: "模板可替換成半日遊、二日遊、民宿周邊散步或包車路線；每一步都保留時間、停留長度與行動提示。",
      sourceLabel: "Source",
    },
  },
  en: {
    storySteps: [
      {
        label: "09:00 / Coast",
        title: "Morning Walk at Qixingtan",
        body:
          "Start by the shore with Pacific views, photos, coffee, and a clean route north toward the gorge.",
        duration: "60-90 min stop",
        tip: "Use it as a nearby-stay highlight or first stop after arrival.",
        sourceUrl: sourceUrls.qixingtan,
      },
      {
        label: "11:00 / Gorge",
        title: "Half Day in Taroko",
        body:
          "Turn cliffs, bridges, trails, and Truku context into the high-value anchor of the day route.",
        duration: "3-4 hr stop",
        tip: "Works for drivers, guides, hiking notes, and deeper tour pages.",
        sourceUrl: sourceUrls.taroko,
      },
      {
        label: "16:00 / Culture",
        title: "Slow Down at Pine Garden",
        body:
          "Use historic architecture and the hilltop view to shift the itinerary from scenery into city memory.",
        duration: "45-60 min stop",
        tip: "Useful for boutique stays, city walks, and cultural brand pages.",
        sourceUrl: sourceUrls.pineGarden,
      },
      {
        label: "04 / Night",
        title: "Dinner at Dongdamen",
        body:
          "Close with food, lights, and a map-friendly endpoint that mobile visitors can navigate to immediately.",
        duration: "90-120 min stop",
        tip: "Add booking, meeting point, LINE, or Google Maps CTAs here.",
        sourceUrl: sourceUrls.dongdamen,
      },
    ],
    story: {
      eyebrow: "Suggested Route",
      title: "One Day in Hualien: Coast, Gorge, Culture, Night Market",
      body:
        "The same module can become a half-day route, weekend trip, nearby-stay guide, or private driver itinerary with time, duration, and action notes.",
      sourceLabel: "Source",
    },
  },
};
