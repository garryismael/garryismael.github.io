/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "brand-25": "#fcfaff",
        "brand-50": "#f9f5ff",
        "brand-100": "#f4ebff",
        "brand-200": "#e9d7fe",
        "brand-300": "#d6bbfb",
        "brand-400": "#b692f6",
        "brand-500": "#9e77ed",
        "brand-600": "#7f56d9",
        "brand-700": "#6941c6",
        "brand-800": "#53389e",
        "brand-900": "#42307d",
      },
      backgroundImage: {
        "brand-600-500": "linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%)",
        "brand-700-600": "linear-gradient(45deg, #6941c6 0%, #7f56d9 100%)",
        "brand-800-600-50": "linear-gradient(45deg, #53389e 0%, #7f56d9 100%)",
        "brand-800-600-100": "linear-gradient(90deg, #53389e 0%, #7f56d9 100%)",
        "brand-800-700": "linear-gradient(26.6deg, #53389e 0%, #6941c6 100%)",
        "brand-900-600": "linear-gradient(45deg, #42307d 0%, #7f56d9 100%)",
      },
    },
  },
  plugins: [],
};
