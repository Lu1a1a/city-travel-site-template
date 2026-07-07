<script setup lang="ts">
import { computed } from "vue";
import type { SiteImage, Locale, PosterHeroCopy } from "../data/siteContent";

const props = defineProps<{
  copy: PosterHeroCopy;
  image: SiteImage;
  locale: Locale;
}>();

const toggleHash = computed(() => (props.locale === "cn" ? "#en" : "#cn"));

const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  target?.scrollIntoView({ behavior, block: "start" });
};
</script>

<template>
  <header class="poster-shell relative isolate px-5 pb-8 pt-6 sm:px-6 md:px-8 lg:px-10 lg:pb-10">
    <nav
      :aria-label="copy.navAriaLabel"
      class="mx-auto flex max-w-7xl items-center justify-between gap-4 py-2 text-xs font-bold uppercase tracking-normal text-dusk sm:text-sm"
    >
      <div class="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          @click="scrollToSection('places')"
          class="rounded-full border border-dusk/20 px-3 py-2 transition-colors duration-300 hover:border-dusk hover:bg-dusk hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
        >
          {{ copy.brandLabel }}
        </button>
        <a
          :href="toggleHash"
          :aria-label="copy.languageToggleAriaLabel"
          class="rounded-full border border-dusk/20 px-3 py-2 transition-colors duration-300 hover:border-dusk hover:bg-dusk hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
        >
          {{ copy.languageToggleLabel }}
        </a>
      </div>

      <div class="hidden items-center gap-7 md:flex lg:gap-10">
        <a href="#route" class="rounded-full px-4 py-2 transition-colors duration-300 hover:bg-dusk hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay">
          {{ copy.routeNavLabel }}
        </a>
        <a href="#places" class="rounded-full px-4 py-2 transition-colors duration-300 hover:bg-dusk hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay">
          {{ copy.placesNavLabel }}
        </a>
        <a href="#plan-trip" class="rounded-full px-4 py-2 transition-colors duration-300 hover:bg-dusk hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay">
          {{ copy.contactNavLabel }}
        </a>
      </div>

      <div class="barcode" aria-hidden="true"></div>
    </nav>

    <div class="mx-auto mt-8 grid min-w-0 max-w-7xl grid-cols-[minmax(0,1fr)] gap-8 lg:mt-10 lg:grid-cols-[0.95fr_1.35fr] lg:items-stretch">
      <div data-reveal class="reveal min-w-0 space-y-6">
        <div class="grid max-w-full grid-cols-2 gap-2 rounded-[1.25rem] border border-dusk/15 bg-ivory/75 p-3 text-xs shadow-card backdrop-blur sm:gap-3 sm:p-5 sm:text-sm lg:text-base xl:grid-cols-4">
          <div class="min-w-0 border-b border-dusk/10 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
            <p class="font-bold uppercase tracking-normal text-dusk">{{ copy.pictureLabel }}</p>
            <p class="mt-2 break-words leading-6 text-ink/75">{{ copy.pictureValue }}</p>
          </div>
          <div class="min-w-0 border-b border-dusk/10 pb-3 sm:border-b-0 sm:pb-0 lg:border-r lg:pr-4">
            <p class="font-bold uppercase tracking-normal text-dusk">{{ copy.posterLabel }}</p>
            <p class="mt-2 break-words leading-6 text-ink/75">{{ copy.posterValue }}</p>
          </div>
          <div class="min-w-0 border-b border-dusk/10 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
            <p class="font-bold uppercase tracking-normal text-dusk">{{ copy.positionLabel }}</p>
            <p class="mt-2 break-words leading-6 text-ink/75">{{ copy.positionValue }}</p>
          </div>
          <div class="min-w-0">
            <p class="font-bold uppercase tracking-normal text-dusk">{{ copy.modeLabel }}</p>
            <p class="mt-2 break-words leading-6 text-ink/75">{{ copy.modeValue }}</p>
          </div>
        </div>

        <div class="flex min-w-0 items-center gap-3 sm:gap-5">
          <span class="star-mark text-mist" aria-hidden="true">✦</span>
          <span class="h-px min-w-8 flex-1 bg-dusk/25"></span>
          <span class="hidden shrink-0 text-xs font-bold uppercase tracking-normal text-dusk/70 sm:inline">
            {{ copy.dividerLabel }}
          </span>
        </div>

        <div>
          <p class="text-sm font-bold uppercase tracking-normal text-clay">{{ copy.eyebrow }}</p>
          <h1 class="mt-3 max-w-4xl whitespace-nowrap font-display text-[3.05rem] font-black uppercase leading-[0.86] text-mist min-[390px]:text-[3.65rem] sm:text-[6.4rem] md:text-[8rem] lg:whitespace-normal lg:text-[7.8rem] xl:text-[10rem]">
            <span v-for="line in copy.titleLines" :key="line" class="inline lg:block">{{ line }}</span>
          </h1>
          <p class="mt-6 max-w-xl break-words text-pretty text-base leading-8 text-ink/75 sm:text-lg">
            {{ copy.description }}
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            @click="scrollToSection('route')"
            class="inline-flex min-h-12 items-center justify-center rounded-full bg-dusk px-5 py-3 text-sm font-bold uppercase tracking-normal text-paper transition-colors duration-300 hover:bg-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
          >
            {{ copy.primaryCtaLabel }}
            <span class="ml-2" aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            @click="scrollToSection('plan-trip')"
            class="inline-flex min-h-12 items-center justify-center rounded-full border border-dusk/20 px-5 py-3 text-sm font-bold uppercase tracking-normal text-dusk transition-colors duration-300 hover:border-clay hover:bg-ivory hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
          >
            {{ copy.secondaryCtaLabel }}
          </button>
        </div>
      </div>

      <figure data-reveal class="reveal poster-image group relative lg:self-stretch">
        <div class="absolute -left-3 top-8 z-10 rounded-full bg-clay px-4 py-2 text-xs font-bold uppercase tracking-normal text-paper shadow-card sm:left-5">
          {{ copy.imageBadge }}
        </div>
        <img
          :src="image.src"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          fetchpriority="high"
          decoding="async"
          class="h-[24rem] w-full object-cover saturate-[0.82] sm:h-[34rem] lg:h-full"
        />
        <figcaption class="absolute bottom-5 left-1/2 w-max -translate-x-1/2 text-[0.7rem] font-bold tracking-normal text-paper/90">
          {{ copy.photoVia }}
          <a
            :href="image.creditUrl"
            target="_blank"
            rel="noreferrer"
            class="underline decoration-paper/50 underline-offset-4 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper"
          >
            {{ image.credit }}
          </a>
        </figcaption>
      </figure>
    </div>
  </header>
</template>
