module.exports = {
  // mode: 'jit',
  purge: {
    content: [
      './public/**/*.html',
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: [/^bg-/, /^to-/, /^from-/],
    },
  },
  // purge: [
  //   './public/**/*.html',
  //   './src/pages/**/*.{js,ts,jsx,tsx}',
  //   './src/components/**/*.{js,ts,jsx,tsx}',
  // ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      'transform-gpu': ['hover', 'focus'],
    },
  },
  plugins: [],
};
