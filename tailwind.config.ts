import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'general-sans': ['"General Sans"', 'sans-serif'],
        'clash': ['"Clash Display"', 'sans-serif'],
      },
      fontSize: {
        'custom-lg': '2rem', // 32px
        'custom-xl': '3rem', // 48px
        'custom-2xl': '4rem', // 64px
        'custom-3xl': '5rem', // 80px
      },
      lineHeight: {
        'custom-tight': '1.1',
      },
      colors: {
        customBlue: '#031356',
        customTeal: '#01737F',
      },
    },
  },
  plugins: [],
};

export default config;
