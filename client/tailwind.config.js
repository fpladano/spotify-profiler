module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotifyBlack: "#191414",
        spotifyWhite: "#FFFFFF",
        spotifyGreen: "#1DB954",
        spotifyGray: "#9B9B9B",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(150px, 1fr))",
      },
    },
  },
  plugins: [],
};
