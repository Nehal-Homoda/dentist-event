/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
          background: "var(--color-background)",
          foreground: " var(--color-foreground)",
          muted: "var(--color-text-muted)",
          error: "var(--color-error)",
          primary: {
              default: "var(--color-primary)",
              100: "var(--color-primary-100)",
              200: "var(--color-primary-200)",
              300: "var(--color-primary-300)",
              400: "var(--color-primary-400)",
              500: "var(--color-primary-500)",
              600: "var(--color-primary-600)",
              light: {
                  default: "var(--color-primary-light)",
                  100: "var(--color-primary-light-100)",
                  200: "var(--color-primary-light-200)",
                  300: "var(--color-primary-light-300)",
                  400: "var(--color-primary-light-400)",
                  500: "var(--color-primary-light-500)",
                  600: "var(--color-primary-light-600)",
              },
          },
          secondary: {
              default: "var(--color-secondary)",
              100: "var(--color-secondary-100)",
              200: "var(--color-secondary-200)",
              300: "var(--color-secondary-300)",
              400: "var(--color-secondary-400)",
              500: "var(--color-secondary-500)",
              600: "var(--color-secondary-600)",
          },
      },
      extend: {},
  },
  plugins: [],
};

