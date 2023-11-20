/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00B4A2",
          "secondary": "#00B4A2",
          "accent": "#77D8D8",
          "neutral": "#F5F5DC",
          "base-100": "#272727",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

