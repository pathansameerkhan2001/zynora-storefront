import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zynora: {
          emerald: "#0B2E26",
          gold: "#C8A45D",
          cream: "#F8F4EA",
          beige: "#E8D9C0",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(11, 46, 38, 0.08)',
      }
    },
  },
  plugins: [],
};
export default config;
