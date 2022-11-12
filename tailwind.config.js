/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#efe5fd",
          100: "#d4bff9",
          200: "#b794f6",
          300: "#9965f4",
          400: "#7e3ff2",
          500: "#6002ee",
          600: "#5300e8",
          700: "#3d00e0",
          800: "#1c00db",
          900: "#0000d6",
        },
        success: {
          50: "#d8fdf0",
          100: "#defabb",
          200: "#c6f68d",
          300: "#aaf255",
          400: "#90ee02",
          500: "#75e900",
          600: "#61d800",
          700: "#41c300",
          800: "#09af00",
          900: "#008b00",
        },
        danger: {
          50: "#fbe2f0",
          100: "#f5b6da",
          200: "#f186c0",
          300: "#ef4fa6",
          400: "#ee0290",
          500: "#ef0078",
          600: "#dd0074",
          700: "#c7006e",
          800: "#b1006a",
          900: "#880061",
        },
        "surface-light": {
          50: "#e7ebf0",
          100: "#c2ccdb",
          200: "#9cabc3",
          300: "#778aaa",
          400: "#597199",
          500: "#3b5a8b",
          600: "#355282",
          700: "#2c4877",
          800: "#263f6a",
          900: "#1e2e51",
        },
        "surface-dark": {
          50: "#e7ebf0",
          100: "#c2ccdb",
          200: "#9cabc3",
          300: "#778aaa",
          400: "#597199",
          500: "#3b5a8b",
          600: "#355282",
          700: "#2c4877",
          800: "#263f6a",
          900: "#1e2e51",
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "small-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "ping-once": "ping 1s ease-in-out",
        "wiggle-once": "wiggle .25s ease-out",
        "small-bounce": "small-bounce 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
