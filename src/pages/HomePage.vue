<script setup lang="ts">
import { computed } from "vue";
import BentoGrid from "../components/BentoGrid.vue";
import CulturePanel from "../components/CulturePanel.vue";
import IntroOverlay from "../components/IntroOverlay.vue";
import LayeredStory from "../components/LayeredStory.vue";
import PosterHero from "../components/PosterHero.vue";
import SourceFooter from "../components/SourceFooter.vue";
import TripInquiry from "../components/TripInquiry.vue";
import { useScrollReveal } from "../composables/useScrollReveal";
import type { Locale, LocalizedSiteContent } from "../data/siteContent";

const props = defineProps<{
  content: LocalizedSiteContent;
  locale: Locale;
}>();

useScrollReveal();

const cultureImage = computed(
  () => props.content.featureCards.find((card) => card.id === "pine-garden")?.image ?? props.content.heroImage,
);

const scrollToMainContent = () => {
  const main = document.querySelector<HTMLElement>("#main-content");
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  main?.focus({ preventScroll: true });
  main?.scrollIntoView({ behavior, block: "start" });
};
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-paper text-ink">
    <IntroOverlay :title="content.hero.brandLabel" />
    <button
      type="button"
      @click="scrollToMainContent"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-paper focus-visible:ring-2 focus-visible:ring-clay"
    >
      {{ content.skipLabel }}
    </button>

    <div class="page-content">
      <PosterHero :copy="content.hero" :image="content.heroImage" :locale="locale" />

      <main id="main-content" class="relative z-10" tabindex="-1">
        <BentoGrid :cards="content.featureCards" :copy="content.features" />
        <LayeredStory :cards="content.featureCards" :copy="content.story" :steps="content.storySteps" />
        <CulturePanel :items="content.cultureItems" :copy="content.culture" :image="cultureImage" />
        <TripInquiry :copy="content.tripInquiry" :cards="content.featureCards" />
      </main>

      <SourceFooter :copy="content.sources" :sources="content.sourceLinks" />
    </div>
  </div>
</template>
