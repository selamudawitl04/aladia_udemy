/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [],
  theme: {
    screens: {
      iphone5: "320px",
      // => @media (min-width: 320px) { for iphone 5 }

      samsg: "360px",
      // => @media (min-width: 320px) { for Samsung phone }

      xxxs: "360px",
      // => @media (min-width: 380px) { ... }

      xxs: "380px",
      // => @media (min-width: 380px) { ... }

      xs: "512px",
      // => @media (min-width: 512px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdx: "800px",
      // => @media (min-width: 800px) { ... }
      mdxx: "850px",
      // => @media (min-width: 850px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }

      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        opaq: "0 4px 16px 6px rgba(0,0,0,0.4)",
        full: "0 3px 1px -2px rgba(0,0,0, 0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12) ",
      },
      colors: {
        primary: {
          50: "#f3e8fd",
          100: "#e1c5fb",
          200: "#ce9ff9",
          300: "#bb78f7",
          400: "#a852f5",
          500: "#a435f0",
          600: "#8e2ed8",
          700: "#7827bf",
          800: "#621fa7",
          900: "#4c188e",
          950: "#3b1372",
        },
        secondary: {
          50: "#fbeae7",
          100: "#f5c8bf",
          200: "#ef9f91",
          300: "#e97663",
          400: "#e34d35",
          500: "#b32d0f",
          600: "#8e240c",
          700: "#691b09",
          800: "#451206",
          900: "#210903",
          950: "#100401",
        },
        customYellow: {
          50: "#fefce8",
          100: "#fdf9c3",
          200: "#fbf3a1",
          300: "#f9ed7f",
          400: "#f7e75e",
          500: "#f5e03d",
          600: "#f3d91c",
          700: "#f1d20b",
          800: "#efcb00",
          900: "#edc400",
          950: "#ebbd00",
        },
        customOrange: {
          50: "#fff4e8",
          100: "#ffe0c3",
          200: "#ffcc9f",
          300: "#ffb87b",
          400: "#ffa457",
          500: "#ff9033",
          600: "#ff7c0f",
          700: "#f56800",
          800: "#e55e00",
          900: "#d55400",
          950: "#c54a00",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
