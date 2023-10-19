module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6200",
        secondary: "#262626",
        neutral: "#4f4f50",
        "neutral-content": "#6e6e6e",
        "base-100": "#ffffff",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
