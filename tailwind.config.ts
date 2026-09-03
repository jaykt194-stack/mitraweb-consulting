import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F4FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#4F46E5',
          600: '#3730A3',
          700: '#1C2B54',
          800: '#141F3C',
          900: '#0B132B',
          950: '#060B18',
        },
        accent: {
          DEFAULT: '#0066FF',
          hover: '#0052CC',
          light: '#EBF3FF',
          cyan: '#00C2CB',
          emerald: '#10B981',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'sans-serif',
        ],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -2px rgba(11, 19, 43, 0.06), 0 2px 6px -1px rgba(11, 19, 43, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(11, 19, 43, 0.12), 0 4px 12px -2px rgba(11, 19, 43, 0.05)',
        'elevated': '0 20px 40px -8px rgba(11, 19, 43, 0.16)',
      },
    },
  },
  plugins: [],
};

export default config;
