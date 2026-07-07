import { onMounted, onUnmounted } from "vue";

export function useScrollReveal(selector = "[data-reveal]") {
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    targets.forEach((target) => observer?.observe(target));
  });

  onUnmounted(() => {
    observer?.disconnect();
  });
}
