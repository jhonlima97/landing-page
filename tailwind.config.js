/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradiente-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      colors: {
        primary: {
          500: '#ff545a',
          600: '#f63138',
        },
        "light-gray": "#a7b0ba",
        gray: "#859098",
        "light-black": "#343a3f",
        body: "#767f86",
        "": "#505866",
        skyblue: "#70a9ff",
        green: "#00c61c",
        yellow: "#ffcc5d",
        purple: "#bd70ff",
        orange: "#ff7a40",
      },
    },
  },
  plugins: [],
}

