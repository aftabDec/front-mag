module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Update this path to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        "custom-brown": "#8B3B00",
        "light-cream": "#FFF3E2",
      },
      fontFamily: {
        "great-vibes": ["Great Vibes", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        forum: ["Forum", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn", // Add the autumn theme here
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
