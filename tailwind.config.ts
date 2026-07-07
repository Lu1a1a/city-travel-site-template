import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,vue,ts}"],
  theme: {
    extend: {
      colors: {
        paper: "#e6dfd0",
        ivory: "#f7f1e5",
        ink: "#20242a",
        mist: "#6e93b9",
        dusk: "#25384b",
        clay: "#b66f4d",
        reed: "#d7c9a6",
        tide: "#7fa6a0",
      },
      fontFamily: {
        display: ['"Fraunces"', '"Noto Serif TC"', "serif"],
        sans: ['"IBM Plex Sans"', '"Noto Sans TC"', "Aptos", "system-ui", "sans-serif"],
      },
      boxShadow: {
        poster: "0 24px 70px rgba(32, 36, 42, 0.16)",
        card: "0 18px 48px rgba(37, 56, 75, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
