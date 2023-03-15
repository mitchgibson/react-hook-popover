/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: ["light"],
  plugins: ['@tailwindcss/forms', '@tailwindcss/typography'],
  darkMode: "class",
  important: true, // important in prod is must be
}
