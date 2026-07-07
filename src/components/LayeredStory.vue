<script setup lang="ts">
import type { FeatureCard, SectionCopy, StoryStep } from "../data/siteContent";

defineProps<{
  steps: StoryStep[];
  cards: FeatureCard[];
  copy: SectionCopy;
}>();
</script>

<template>
  <section id="route" class="site-section" aria-labelledby="story-title">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div data-reveal class="reveal max-w-3xl">
          <p class="text-sm font-bold uppercase tracking-normal text-clay">{{ copy.eyebrow }}</p>
          <h2 id="story-title" class="mt-3 break-words text-balance font-display text-4xl font-black leading-tight text-dusk sm:text-5xl lg:text-6xl">
            {{ copy.title }}
          </h2>
          <p v-if="copy.body" class="mt-5 text-pretty text-base leading-8 text-ink/72 sm:text-lg">
            {{ copy.body }}
          </p>
        </div>

        <div data-reveal class="reveal relative min-h-[25rem] sm:min-h-[30rem] lg:min-h-[34rem]">
          <figure
            v-for="(card, index) in cards.slice(0, 3)"
            :key="card.id"
            class="absolute overflow-hidden rounded-[2rem] border border-dusk/10 bg-paper shadow-poster"
            :class="[
              index === 0 ? 'left-0 top-0 h-64 w-[78%] sm:h-80' : '',
              index === 1 ? 'right-0 top-24 h-56 w-[62%] rotate-2 sm:h-72' : '',
              index === 2 ? 'bottom-0 left-8 h-48 w-[70%] -rotate-2 sm:left-16 sm:h-56' : '',
            ]"
          >
            <img
              :src="card.image.src"
              :alt="card.image.alt"
              :width="card.image.width"
              :height="card.image.height"
              loading="lazy"
          decoding="async"
              class="h-full w-full object-cover saturate-[0.76]"
            />
          </figure>
        </div>
      </div>

      <div class="route-timeline mt-16 grid items-stretch gap-5 md:grid-cols-2 lg:mt-24 xl:grid-cols-4">
        <article
          v-for="(step, index) in steps"
          :key="step.label"
          data-reveal
          class="reveal route-step flex min-w-0 transform-gpu flex-col rounded-[1.25rem] border border-dusk/12 bg-ivory/75 p-6 shadow-card transition-[transform,box-shadow] duration-500 will-change-transform"
        >
          <div class="flex min-w-0 flex-col">
            <div class="flex items-start justify-between gap-4">
              <p class="break-words font-mono text-sm font-bold uppercase tracking-normal text-mist">{{ step.label }}</p>
              <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-dusk text-xs font-black text-paper">{{ index + 1 }}</span>
            </div>
            <h3 class="mt-4 break-words text-balance font-display text-3xl font-black leading-tight text-dusk xl:min-h-[5.1rem]">{{ step.title }}</h3>
            <p class="mt-4 break-words leading-8 text-ink/75 xl:min-h-[7rem]">{{ step.body }}</p>
          </div>
          <dl class="mt-5 grid gap-3 border-t border-dusk/10 pt-5 text-sm leading-7 text-ink/72 xl:min-h-[8.9rem]">
            <div>
              <dt class="font-bold uppercase tracking-normal text-clay">Duration</dt>
              <dd class="mt-1 break-words">{{ step.duration }}</dd>
            </div>
            <div>
              <dt class="font-bold uppercase tracking-normal text-clay">Tip</dt>
              <dd class="mt-1 break-words">{{ step.tip }}</dd>
            </div>
          </dl>
          <div class="mt-auto pt-6">
            <a
              :href="step.sourceUrl"
              target="_blank"
              rel="noreferrer"
              class="inline-flex w-fit rounded-full border border-dusk/20 px-4 py-2 text-xs font-bold uppercase tracking-normal text-dusk transition-colors duration-300 hover:border-clay hover:bg-clay hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
            >
              {{ copy.sourceLabel }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
