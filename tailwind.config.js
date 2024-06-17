module.exports = {
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
        'custom-lg': '2rem',
        'custom-xl': '3rem',
        'custom-2xl': '4rem',
        'custom-3xl': '5rem',
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
