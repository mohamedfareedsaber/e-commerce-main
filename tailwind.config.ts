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
        text: "#0d2126",
        background: "#f0f8fa",
        primary: "#2e7384",
        secondary: "#bbdee7",
        accent: "#388a9f",
      },
    },
  },
  plugins: [],
};
export default config;
