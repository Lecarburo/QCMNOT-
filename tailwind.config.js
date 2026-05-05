/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#050816",
        panel: "rgba(15, 23, 42, 0.68)",
        line: "rgba(148, 163, 184, 0.22)",
      },
      boxShadow: {
        glow: "0 0 48px rgba(34, 211, 238, 0.14)",
      },
    },
  },
  plugins: [],
};
