/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-light": "url('/assets/main-bg.jpg')",
        "main-dark": "url('/assets/main-bg-dark.jpg')",
        "desktop-light": "url('/assets/bg-white.jpg')",
        "desktop-dark": "url('/assets/bg-dark.jpg')",
        "mobile-dark": "url('/assets/mobile-bg-dark.jpg')",
        "mobile-light": "url('/assets/mobile-bg-white.jpg')",
        "about-bg": "url('/assets/about-bg.png')",
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "5xl": "5rem",
      },
    },
  },
  plugins: [],
};
