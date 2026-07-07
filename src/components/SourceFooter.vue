<script setup lang="ts">
import type { SectionCopy } from "../data/siteContent";

defineProps<{
  copy: SectionCopy;
  sources: Array<{
    label: string;
    url: string;
  }>;
}>();
</script>

<template>
  <footer class="px-4 pb-8 pt-16 sm:px-6 md:px-8">
    <div class="mx-auto max-w-7xl rounded-[2rem] border border-dusk/10 bg-dusk px-5 py-8 text-paper shadow-poster sm:px-8">
      <div class="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end">
        <div>
          <p class="text-sm font-bold uppercase tracking-normal text-reed">{{ copy.eyebrow }}</p>
          <h2 class="mt-3 text-balance font-display text-4xl font-black leading-tight sm:text-5xl">{{ copy.title }}</h2>
          <p class="mt-4 max-w-xl leading-7 text-paper/75">
            {{ copy.body }}
          </p>
        </div>
        <ul class="grid gap-3 sm:grid-cols-2">
          <li v-for="source in sources" :key="source.url" class="min-w-0">
            <a
              :href="source.url"
              target="_blank"
              rel="noreferrer"
              class="flex h-full min-h-[4rem] items-center rounded-2xl border border-paper/15 px-4 py-3 text-sm font-bold text-paper/85 transition-colors duration-300 hover:border-reed hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reed"
            >
              {{ source.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>