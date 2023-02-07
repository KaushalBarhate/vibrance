/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '20px 17px 1px rgba(0,111,164,1)',
        '4xl': [
            '0 17px 1px rgba(0,111,164,1)',
            '1 17px 1px rgba(0,111,164,1)'
        ]
      },
      boxShadow: {
        '5xl': '8px 9px 0px #000000;',
      },
      textShadow: {
        'main': '-1px 1px 0 rgba(255, 255, 255, 1),1px 1px 0 rgba(255, 255, 255, 1),1px -1px 0 rgba(255, 255, 255, 1),-1px -1px 0 rgba(255, 255, 255, 1);',
        'main1': '-1px 1px 0 rgba(255, 255, 255, 0.1),1px 1px 0 rgba(255, 255, 255, 0.1),1px -1px 0 rgba(255, 255, 255, 0.1),-1px -1px 0 rgba(255, 255, 255, 0.1);',
        '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
        '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}