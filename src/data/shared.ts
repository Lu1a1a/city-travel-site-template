export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  creditUrl: string;
};

export type Locale = "cn" | "en";

export type FeatureCard = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  detail: string;
  sourceLabel: string;
  sourceUrl: string;
  image: SiteImage;
  hoverImage?: SiteImage;
};

export type CultureItem = {
  name: string;
  romanized: string;
  note: string;
  tone: string;
  sourceUrl: string;
};

export type StoryStep = {
  label: string;
  title: string;
  body: string;
  duration: string;
  tip: string;
  sourceUrl: string;
};

export type TripPlan = {
  name: string;
  duration: string;
  summary: string;
  highlights: string[];
  detailTitle: string;
  detailBody: string;
  detailInfo: TripInfoItem[];
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  note: string;
};

export type TripInfoItem = {
  label: string;
  value: string;
};

export type TripInquiryCopy = {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
  emailHref: string;
  mapHref: string;
  note: string;
  info: TripInfoItem[];
  plans: TripPlan[];
};

export type PosterHeroCopy = {
  brandLabel: string;
  titleLines: string[];
  navAriaLabel: string;
  routeNavLabel: string;
  placesNavLabel: string;
  contactNavLabel: string;
  pictureLabel: string;
  pictureValue: string;
  posterLabel: string;
  posterValue: string;
  positionLabel: string;
  positionValue: string;
  modeLabel: string;
  modeValue: string;
  dividerLabel: string;
  eyebrow: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  imageBadge: string;
  photoVia: string;
  languageToggleLabel: string;
  languageToggleAriaLabel: string;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  body?: string;
  sourceLabel?: string;
  readMoreLabel?: string;
};

export type SiteMeta = {
  title: string;
  description: string;
  lang: string;
};

export type LocalizedSiteContent = {
  meta: SiteMeta;
  skipLabel: string;
  heroImage: SiteImage;
  hero: PosterHeroCopy;
  featureCards: FeatureCard[];
  features: SectionCopy;
  cultureItems: CultureItem[];
  culture: SectionCopy;
  storySteps: StoryStep[];
  story: SectionCopy;
  tripInquiry: TripInquiryCopy;
  sources: SectionCopy;
  sourceLinks: Array<{
    label: string;
    url: string;
  }>;
};

export const commonsFile = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;
