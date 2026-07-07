<script setup lang="ts">
import type { CultureItem, SiteImage, SectionCopy } from "../data/siteContent";

defineProps<{
  items: CultureItem[];
  copy: SectionCopy;
  image?: SiteImage;
}>();
</script>

<template>
  <section class="culture-section site-section relative" aria-labelledby="culture-title">
    <div class="culture-band absolute inset-x-0 top-1/2 -z-10 h-2/3 -translate-y-1/2"></div>
    <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
      <div data-reveal class="reveal rounded-[1.75rem] border border-dusk/10 bg-ivory p-6 shadow-poster lg:flex lg:h-full lg:flex-col lg:p-8">
        <p class="text-sm font-bold uppercase tracking-normal text-clay">{{ copy.eyebrow }}</p>
        <h2 id="culture-title" class="mt-3 break-words text-balance font-display text-4xl font-black leading-tight text-dusk sm:text-5xl">
          {{ copy.title }}
        </h2>
        <p class="mt-5 break-words text-pretty leading-8 text-ink/75">
          {{ copy.body }}
        </p>
        <figure
          v-if="image"
          class="mt-8 h-56 w-full overflow-hidden rounded-[1.15rem] border border-dusk/10 bg-dusk/8 shadow-card sm:h-64 lg:min-h-0 lg:flex-1"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            :width="image.width"
            :height="image.height"
            loading="lazy"
          decoding="async"
            class="h-full w-full object-cover saturate-[0.78]"
          />
        </figure>
      </div>

      <div class="grid gap-5 self-start sm:grid-cols-2 lg:h-full lg:self-stretch">
        <article
          v-for="item in items"
          :key="item.name"
          data-reveal
          class="reveal culture-item-card group flex min-w-0 transform-gpu flex-col rounded-[1.25rem] border border-dusk/12 bg-ivory p-6 shadow-poster transition-[transform,box-shadow] duration-500 will-change-transform"
        >
          <p class="break-words text-xs font-bold uppercase tracking-normal text-mist">{{ item.romanized }}</p>
          <h3 class="mt-3 flex min-w-0 items-end justify-between gap-4 font-display text-3xl font-black text-dusk">
            <span class="min-w-0 break-words">{{ item.name }}</span>
            <span class="text-2xl text-clay transition-transform duration-500 group-hover:rotate-45" aria-hidden="true">✦</span>
          </h3>
          <p class="mt-2 break-words text-sm font-bold text-clay">{{ item.tone }}</p>
          <p class="mt-4 break-words leading-8 text-ink/75">{{ item.note }}</p>
          <a
            :href="item.sourceUrl"
            target="_blank"
            rel="noreferrer"
            class="mt-auto inline-flex pt-6 text-sm font-bold text-dusk underline decoration-dusk/30 underline-offset-4 transition-colors duration-300 hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
          >
            {{ copy.readMoreLabel }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
