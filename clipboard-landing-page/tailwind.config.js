/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        "header-desktop": "url('../images/bg-header-desktop.png')",
        "header-mobile": "url('../images/bg-header-mobile.png')",
      },
      fontFamily: {
        custom: "Bai Jamjuree",
      },
      colors: {
        cyan: "hsl(171, 66%, 44%)",
        "light-blue": "hsl(233, 100%, 69%)",
        "dark-grayish-blue": "hsl(210, 10%, 33%)",
        "grayish-blue": "hsl(201, 11%, 66%)",
      },
    },
  },
  plugins: [],
};
