<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import HomePage from "./pages/HomePage.vue";
import { getSiteContent, type Locale } from "./data/siteContent";

const locales: Locale[] = ["cn", "en"];

const normalizeHashLocale = (): Locale => {
  const hash = window.location.hash.replace("#", "");

  if (locales.includes(hash as Locale)) {
    return hash as Locale;
  }

  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#cn`);
  return "cn";
};

const locale = ref<Locale>("cn");
const content = computed(() => getSiteContent(locale.value));

const syncLocaleFromHash = () => {
  locale.value = normalizeHashLocale();
};

onMounted(() => {
  syncLocaleFromHash();
  window.addEventListener("hashchange", syncLocaleFromHash);
});

onUnmounted(() => {
  window.removeEventListener("hashchange", syncLocaleFromHash);
});

watch(
  content,
  ({ meta }) => {
    document.documentElement.lang = meta.lang;
    document.title = meta.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", meta.description);
  },
  { immediate: true },
);
</script>

<template>
  <HomePage :key="locale" :content="content" :locale="locale" />
</template>
