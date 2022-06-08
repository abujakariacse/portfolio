module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#23CE6B",
          "secondary": "#F000B8",
          "accent": "#37CDBE",
          "neutral": "#131f33",
          "base-100": "#FFFFFF",
          "info": "#e31f71",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}