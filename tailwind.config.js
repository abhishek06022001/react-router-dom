/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cityscapeImage:
          "url('srcassetscityscape-night-buildings-city-lights-night-city-dark-sky-2880x1800-8289.jpg')",
      },
    },
  },
  plugins: [],
};
