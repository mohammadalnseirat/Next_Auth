/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "shadow-loop": {
          "0%": { boxShadow: "-20px 0 20px rgba(59, 130, 246, 0.4)" }, // blue-500
          "25%": { boxShadow: "0 -20px 20px rgba(124, 58, 237, 0.4)" }, // purple-600
          "50%": { boxShadow: "20px 0 20px rgba(59, 130, 246, 0.4)" },
          "75%": { boxShadow: "0 20px 20px rgba(124, 58, 237, 0.4)" },
          "100%": { boxShadow: "-20px 0 20px rgba(59, 130, 246, 0.4)" },
        },
      },
      animation: {
        "shadow-loop": "shadow-loop 10s linear infinite",
      },
    },
  },
  plugins: [],
};
