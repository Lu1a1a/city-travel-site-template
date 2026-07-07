import { cultureContent } from "./culture";
import { featuresContent, getFeatureCards } from "./features";
import { heroContent } from "./hero";
import { getSiteImages } from "./images";
import { plannerContent } from "./planner";
import { sourcesContent } from "./sources";
import { storyContent } from "./story";
import type { Locale, LocalizedSiteContent } from "./shared";

export type {
  CultureItem,
  FeatureCard,
  SiteImage,
  Locale,
  LocalizedSiteContent,
  PosterHeroCopy,
  SectionCopy,
  StoryStep,
  TripInquiryCopy,
  TripInfoItem,
  TripPlan,
} from "./shared";

const createContent = (locale: Locale): LocalizedSiteContent => {
  const images = getSiteImages(locale);
  const hero = heroContent[locale];
  const culture = cultureContent[locale];
  const story = storyContent[locale];
  const sources = sourcesContent[locale];

  return {
    meta: hero.meta,
    skipLabel: hero.skipLabel,
    heroImage: images.qixingtan,
    hero: hero.hero,
    featureCards: getFeatureCards(locale, images),
    features: featuresContent[locale],
    cultureItems: culture.cultureItems,
    culture: culture.culture,
    storySteps: story.storySteps,
    story: story.story,
    tripInquiry: plannerContent[locale],
    sources: sources.sources,
    sourceLinks: sources.sourceLinks,
  };
};

export const localizedContent: Record<Locale, LocalizedSiteContent> = {
  cn: createContent("cn"),
  en: createContent("en"),
};

export const getSiteContent = (locale: Locale) => localizedContent[locale];