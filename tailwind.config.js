/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          500: "#ff545a",
          600: "#f63138",
        },
        "light-gray": "#a7b0ba",
        gray: "#859098",
        "light-black": "#343a3f",
        paragraph: "#767f86",
        "dark-gray": "#505866",
        skyblue: "#70a9ff",
        green: "#00c61c",
        yellow: "#ffcc5d",
        purple: "#bd70ff",
        orange: "#ff7a40",
      },
      boxShadow: {
        "category-card": "0 0px 10px rgba(71, 71, 71, 0.2)",
        "feature-card": "0 0px 5px rgba(71, 71, 71, 0.2)",
        "activity-card": "0 0px 10px rgba(20, 18, 18, 0.2)",
        nav: "0 2px 5px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
}

