/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#59ae59",
          secondary: "#9dda9d",
          accent: "#6cd66c",
          neutral: "#080b08",
          "base-100": "#f7f9f7",
          ".drop-shadow-primary": {
            filter: "drop-shadow(0 10px 8px #59ae59)",
          },
        },
      },
      {
        dark: {
          primary: "#aacdaa",
          secondary: "#4b6566",
          accent: "#78919c",
          neutral: "#f3f6f3",
          "base-100": "#070907",
          ".drop-shadow-primary": {
            filter: "drop-shadow(0 10px 8px #aacdaa)",
          },
        },
      },
    ],
  },
};
