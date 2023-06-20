/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#ffffff",
        secondary: "#f1f5f9",
        tertiary: "#94a3b8",
        highlight: "#dbeafe",
        highlightSecondary: "#dbeafe",
        buttonPrimary: "#4862b1",
        buttonSecondary: "#243b8a",
      },
      textColor: {
        primary: "#000000",
        secondary: "#5c759d",
        tertiary: "#929aa1",
      },
      borderColor: {
        borderprimary: "#e2e8f0",
      },
    },
  },
  plugins: [],
};
