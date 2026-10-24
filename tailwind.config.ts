import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0A0A0A",
        paper: "#F3F1EC",
        mist: "#9A9A9A",
        lime: "#D4FF5A",
      },
    },
  },
  plugins: [],
} satisfies Config;
