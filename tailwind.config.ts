import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F0E82",
        gray_100: "#F0F0F0",
        gray_200: "#F0EEED",
        gray_300: "#F2F0F1",
      },
      fontFamily: {
        integral_cf: "var(--font-integral)",
        satoshi: "var(--font-satoshi)",
      },
    },
  },
  plugins: [],
};
export default config;
