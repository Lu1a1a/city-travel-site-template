<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="intro-overlay" aria-hidden="true">
    <span class="intro-title">{{ title }}</span>
  </div>
</template>