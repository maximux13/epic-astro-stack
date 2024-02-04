/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  plugins: [],
  safelist: ["dark"],
  theme: {
    colors: {
      background: "hsl(var(--background) / <alpha-value>)",
      border: "hsl(var(--border) / <alpha-value>)",
      foreground: "hsl(var(--foreground) / <alpha-value>)",
      input: "hsl(var(--input) / <alpha-value>)",
      primary: {
        DEFAULT: "hsl(var(--primary) / <alpha-value>)",
        foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
      },
      ring: "hsl(var(--ring))",
      secondary: {
        DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
        foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-family-sans)"],
      },
    },
  },
};
