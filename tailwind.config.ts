/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          white: {
            10: '#FCFBFC',
            20: '#E4D4E0',
          },
          purple: {
            10: '#392952',
          },
          green: {
            50: '#30AF5B',
            90: '#292C27',
          },
          pink: {
            60: '#D4B6D3',
          },
          orange: {
            50: '#FF814C',
          },
          blue: {
            70: '#021639',
          },
          yellow: {
            50: '#FEC601',
          },
        },
        backgroundImage: {
          'bg-img-1': "url('/img-1.png')",
          'bg-img-2': "url('/img-2.png')",
          'feature-bg': "url('/feature-bg.png')",
          pattern: "url('/pattern.png')",
          'pattern-2': "url('/pattern-bg.png')",
        },
        screens: {
          xs: '400px',
          '3xl': '1680px',
          '4xl': '2200px',
        },
        maxWidth: {
          '10xl': '1512px',
        },
        borderRadius: {
          '5xl': '40px',
        },
      },
    },
    plugins: [],
  };