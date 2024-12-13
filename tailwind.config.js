/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-bkg": "url('src/assets/circle.png')",
        "my-bkg2": "url('src/assets/Bkg-img.png')",
        "body-bkg": "url('src/assets/body-bkg.png')",
        "bkg-overlay":
          "linear-gradient(to bottom, rgb(6 19 43) to rgb(6 19 43))",
      },
      backgroundColor: {
        "Main-linear":
          "linear-gradient(to bottom, rgb(6 19 43) to rgb(6 19 43))",
      },
      colors: {
        "main-color": "#243c5a",
        "lin-red": "#FF8383",
        "lin-blue": "#167AF4",
        "dark-blue": "#06132B",
        "md-bleu": "#2D4E8D",
        "sm-blue": "#17305F",
        "media-bkg": "#202D46",
      },
    },
  },
  plugins: [],
};
