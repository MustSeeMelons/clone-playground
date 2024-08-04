/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    /* XXX We could extend all and make it 1:1 to the source, but that would be futile */
    extend: {
      dropShadow: {
        logoVite: "0 0 2em #646cffaa",
        logoReact: "0 0 2em #61dafbaa",
      },
      keyframes: {
        logoSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        logoSpin: "logoSpin infinite 20s linear",
      },
      fontFamily: {
        font: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
