<script setup lang="ts">
import { onMounted, watch } from "vue";
import type { FeatureCard, SectionCopy } from "../data/siteContent";

const props = defineProps<{
  cards: FeatureCard[];
  copy: SectionCopy;
}>();

const decodedHoverImages = new Set<string>();

const preloadHoverImages = () => {
  props.cards.forEach(({ hoverImage }) => {
    if (!hoverImage || decodedHoverImages.has(hoverImage.src)) return;

    decodedHoverImages.add(hoverImage.src);

    const image = new Image();
    image.decoding = "async";
    image.loading = "eager";
    image.src = hoverImage.src;

    if (image.decode) {
      void image.decode().catch(() => undefined);
    }
  });
};

onMounted(preloadHoverImages);
watch(() => props.cards, preloadHoverImages);
</script>

<template>
  <section id="places" class="site-section" aria-labelledby="features-title">
    <div class="mx-auto max-w-7xl">
      <div data-reveal class="reveal mb-8 max-w-3xl lg:mb-12">
        <p class="text-sm font-bold uppercase tracking-normal text-clay">{{ copy.eyebrow }}</p>
        <h2 id="features-title" class="mt-3 break-words text-balance font-display text-4xl font-black leading-tight text-dusk sm:text-5xl lg:text-6xl">
          {{ copy.title }}
        </h2>
        <p v-if="copy.body" class="mt-5 max-w-2xl text-pretty text-base leading-8 text-ink/72 sm:text-lg">
          {{ copy.body }}
        </p>
      </div>

      <div class="grid items-stretch gap-5 md:grid-cols-6">
        <article
          v-for="(card, index) in cards"
          :key="card.id"
          data-reveal
          class="reveal group relative min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-dusk/10 bg-ivory/55 shadow-card transition-[border-color,box-shadow] duration-500 hover:border-reed/45 hover:shadow-poster focus-within:ring-2 focus-within:ring-clay"
          :class="[
            index === 0 ? 'md:col-span-4 lg:min-h-[34rem]' : '',
            index === 1 ? 'md:col-span-2 lg:min-h-[34rem]' : '',
            index === 2 ? 'md:col-span-3 lg:min-h-[25rem]' : '',
            index === 3 ? 'md:col-span-3 lg:min-h-[25rem]' : '',
          ]"
        >
          <img
            :src="card.image.src"
            :alt="card.image.alt"
            :width="card.image.width"
            :height="card.image.height"
            loading="lazy"
            decoding="async"
            class="feature-card-image absolute inset-0 h-full w-full object-cover saturate-[0.76] transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity]"
            :class="card.hoverImage ? 'group-hover:opacity-0' : ''"
          />
          <img
            v-if="card.hoverImage"
            :src="card.hoverImage.src"
            alt=""
            aria-hidden="true"
            :width="card.hoverImage.width"
            :height="card.hoverImage.height"
            loading="eager"
            decoding="async"
            class="feature-card-image absolute inset-0 h-full w-full object-cover opacity-0 saturate-[0.78] transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity] group-hover:opacity-100"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/86 via-ink/38 to-transparent"></div>
          <div class="relative flex h-full min-h-[24rem] min-w-0 flex-col p-5 text-paper sm:p-6">
            <div class="flex items-center justify-between gap-4">
              <span class="min-w-0 rounded-full border border-paper/55 px-3 py-1 text-xs font-bold uppercase tracking-normal text-paper">
                {{ card.eyebrow }}
              </span>
              <span class="shrink-0 font-mono text-xs tabular-nums text-paper">0{{ index + 1 }}</span>
            </div>
            <div class="mt-auto pt-8 sm:pt-10">
              <h3 class="max-w-2xl break-words text-balance font-display text-[2rem] font-black leading-[1.02] text-reed sm:text-4xl lg:text-[2.35rem]">
                {{ card.title }}
              </h3>
              <p class="mt-3 max-w-xl break-words text-sm leading-6 text-paper sm:text-base sm:leading-7">
                {{ card.summary }}
              </p>
              <p class="mt-3 max-w-xl break-words text-xs leading-5 text-paper/92 sm:text-sm sm:leading-6">
                {{ card.detail }}
              </p>
              <a
                :href="card.sourceUrl"
                target="_blank"
                rel="noreferrer"
                class="mt-5 inline-flex min-h-11 w-fit items-center rounded-full bg-paper px-5 py-2 text-xs font-bold uppercase tracking-normal text-dusk transition-colors duration-300 hover:bg-clay hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper"
              >
                {{ card.sourceLabel }}
                <span class="ml-2" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>