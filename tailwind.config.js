/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sm': '0.8rem',
        'base': '1rem',
        'xl': '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '14':"14px",
        '10': '10px'
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'poppins': ['Poppins']
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        '10':'10px',
        '30': "30px",
        '36': '36px'
      },
      left: {
        '90%': "90%"
      },
      bottom: {
        '50': '50px'
      },
      height: {
        '114': "114px",
        '144': "144px",
        '103': '103px',
        '49': '49px',
        '373': '373px',
        'full': "100%",
        'fit': 'fit-content',
        'main' : 'calc(100vh - 103px)'
      },
      width : {
        '90': "90%",
        'full': '100%',
        'fit': 'fit-content',
        '302': '302px'
      }
    },
  },
  plugins: [],
}

