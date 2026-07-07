<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import type { FeatureCard, SiteImage, TripInquiryCopy } from "../data/siteContent";

const props = defineProps<{
  copy: TripInquiryCopy;
  cards: FeatureCard[];
}>();

const activePlanIndex = ref(0);

const activePlan = computed(() => props.copy.plans[activePlanIndex.value] ?? props.copy.plans[0]);

const activePlanImage = computed<SiteImage | undefined>(() => {
  const plan = activePlan.value;
  if (!plan) return props.cards[0]?.image;

  const primaryCard = props.cards.find((card) => card.sourceUrl === plan.primaryHref);
  const secondaryCard = props.cards.find((card) => card.sourceUrl === plan.secondaryHref);
  const matchedCard = primaryCard ?? secondaryCard;

  return matchedCard?.hoverImage ?? matchedCard?.image ?? props.cards[0]?.image;
});

const decodedPlanImages = new Set<string>();

const preloadPlanImages = () => {
  props.cards.forEach(({ image, hoverImage }) => {
    [image, hoverImage].forEach((candidate) => {
      if (!candidate || decodedPlanImages.has(candidate.src)) return;

      decodedPlanImages.add(candidate.src);

      const planImage = new Image();
      planImage.decoding = "async";
      planImage.loading = "eager";
      planImage.src = candidate.src;

      if (planImage.decode) {
        void planImage.decode().catch(() => undefined);
      }
    });
  });
};

const selectPlan = (index: number) => {
  activePlanIndex.value = index;
};

onMounted(preloadPlanImages);
watch(() => props.cards, preloadPlanImages);

watch(
  () => props.copy.plans,
  () => {
    activePlanIndex.value = 0;
  },
);
</script>

<template>
  <section id="plan-trip" class="trip-inquiry-section site-section" aria-labelledby="plan-trip-title">
    <div class="trip-inquiry-shell mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-dusk/10 text-ink shadow-poster">
      <Transition name="trip-bg">
        <img
          v-if="activePlanImage"
          :key="activePlanImage.src"
          :src="activePlanImage.src"
          alt=""
          aria-hidden="true"
          :width="activePlanImage.width"
          :height="activePlanImage.height"
          loading="eager"
          decoding="async"
          class="trip-inquiry-bg"
        />
      </Transition>
      <div class="grid gap-10 p-6 sm:p-9 lg:grid-cols-[0.94fr_1.06fr] lg:items-stretch lg:gap-12 lg:p-12 xl:p-14">
        <div data-reveal class="reveal relative flex min-w-0 flex-col">
          <p class="text-sm font-bold uppercase tracking-normal text-clay lg:absolute lg:-top-11 lg:left-0">{{ copy.eyebrow }}</p>
          <div class="relative flex min-h-[34rem] flex-1 sm:min-h-[30rem] lg:min-h-full xl:min-h-[31rem]">
            <Transition name="trip-copy" mode="out-in">
              <div :key="activePlan.name" class="flex min-w-0 flex-1 flex-col">
                <h2 id="plan-trip-title" class="mt-4 text-balance font-display text-4xl font-black leading-tight text-dusk sm:text-5xl lg:mt-0 lg:text-6xl">
                  {{ activePlan.detailTitle }}
                </h2>
                <p class="mt-6 max-w-2xl text-pretty leading-[1.85] text-ink/72 sm:text-lg">
                  {{ activePlan.detailBody }}
                </p>

                <dl class="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <div v-for="item in activePlan.detailInfo" :key="item.label" class="rounded-[1.15rem] border border-dusk/10 bg-ivory/70 p-4">
                    <dt class="text-xs font-bold uppercase tracking-normal text-clay">{{ item.label }}</dt>
                    <dd class="mt-2 break-words text-sm font-bold leading-6 text-dusk">{{ item.value }}</dd>
                  </div>
                </dl>

                <p class="mt-8 text-sm leading-7 text-ink/56">{{ activePlan.note }}</p>
                <div class="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
                  <a
                    :href="activePlan.primaryHref"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex min-h-12 items-center justify-center rounded-full bg-clay px-5 py-3 text-sm font-bold uppercase tracking-normal text-paper transition-colors duration-300 hover:bg-dusk hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
                  >
                    {{ activePlan.primaryLabel }}
                  </a>
                  <a
                    :href="activePlan.secondaryHref"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex min-h-12 items-center justify-center rounded-full border border-dusk/18 px-5 py-3 text-sm font-bold uppercase tracking-normal text-dusk transition-colors duration-300 hover:border-clay hover:bg-clay/10 hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
                  >
                    {{ activePlan.secondaryLabel }}
                  </a>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <div data-reveal class="reveal grid h-full content-start gap-5">
          <article
            v-for="(plan, index) in copy.plans"
            :key="plan.name"
            @mouseenter="selectPlan(index)"
            @focusin="selectPlan(index)"
            tabindex="0"
            class="trip-plan-card min-w-0 rounded-[1.35rem] border p-5 outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-clay"
            :class="activePlanIndex === index ? 'is-active border-dusk/12 shadow-card' : 'border-dusk/12'"
          >
            <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h3 class="text-balance font-display text-3xl font-black leading-tight text-dusk">{{ plan.name }}</h3>
              <span class="w-fit rounded-full bg-reed px-3 py-1 text-xs font-bold uppercase tracking-normal text-dusk">{{ plan.duration }}</span>
            </div>
            <p class="mt-3 text-pretty leading-8 text-ink/72">{{ plan.summary }}</p>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li v-for="highlight in plan.highlights" :key="highlight" class="rounded-full border border-dusk/12 bg-paper/60 px-3 py-1 text-xs font-bold text-ink/70">
                {{ highlight }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
