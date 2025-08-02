/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ 启用 class 控制深色模式
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
