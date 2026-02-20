// tailwind.config.js
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "clay-light":
          "20px 20px 60px #bebebe, -20px -20px 60px #ffffff, inset 6px 6px 12px rgba(0,0,0,0.05)",
        "clay-dark":
          "20px 20px 60px #121212, -20px -20px 60px #2a2a2a, inset 6px 6px 12px rgba(255,255,255,0.05)",
      },
      borderRadius: {
        clay: "35px",
      },
    },
  },
  plugins: [],
};
