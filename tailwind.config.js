/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: {
        100: "#d6d7e0",
        200: "#adafc2",
        300: "#8388a3",
        400: "#5a6085",
        500: "#313866",
        600: "#272d52",
        700: "#1d223d",
        800: "#141629",
        900: "#0a0b14"
      },
      secondary: {
        100: "#dcd9eb",
        200: "#b9b3d7",
        300: "#968cc2",
        400: "#7366ae",
        500: "#50409a",
        600: "#40337b",
        700: "#30265c",
        800: "#201a3e",
        900: "#100d1f"
      },
      accent: {
        100: "#ffe5f2",
        200: "#ffcae5",
        300: "#ffb0d9",
        400: "#ff95cc",
        500: "#ff7bbf",
        600: "#cc6299",
        700: "#994a73",
        800: "#66314c",
        900: "#331926"
      },
      neural: {
        100: "#f7faff",
        200: "#eff4ff",
        300: "#e8efff",
        400: "#e0e9ff",
        500: "#d8e4ff",
        600: "#adb6cc",
        700: "#828999",
        800: "#565b66",
        900: "#2b2e33"
      },
      blue: {
        100: "#ccccff",
        200: "#9999ff",
        300: "#6666ff",
        400: "#3333ff",
        500: "#0000ff",
        600: "#0000cc",
        700: "#000099",
        800: "#000066",
        900: "#000033"
      },
      teal: {
        100: "#ccf2f0",
        200: "#99e5e1",
        300: "#66d9d1",
        400: "#33ccc2",
        500: "#00bfb3",
        600: "#00998f",
        700: "#00736b",
        800: "#004c48",
        900: "#002624"
      },
      "info": "#3ABFF8",
      "success": "#36D399",
      "warning": "#FBBD23",
      "error": "#F87272",
    },
    fontFamily: {
      sans: ['Montserrat', "sans-serif"],
      cursive: ['Dancing Script', "cursive"],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      backgroundImage: {
        'login': "url('./src/assets/login.jpg')"
      }
    },
  },
}