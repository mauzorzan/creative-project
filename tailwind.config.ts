import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        sky: {
          200: '#E0F7FA',
          600: '#4DD0E1',
          900: '#01579B',
        }
      }
<<<<<<< HEAD
      colors: {
        sky: {
          200: '#E0F7FA',
          600: '#4DD0E1',
          900: '#01579B',
        }
      }
=======
>>>>>>> 609b9eb (Initial commit from Create Next App)
    },
  },
  plugins: [],
};

<<<<<<< HEAD

=======
>>>>>>> 609b9eb (Initial commit from Create Next App)
export default config;
