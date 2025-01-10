/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
      "./app/**/*.{js,jsx,tsx,mdx}",
      "./components/**/*.{js,jsx,tsx,mdx}",
      "./styles/**/*.{js,jsx,tsx,mdx}"],
  theme: {
      fontFamily: {
        Poppins: ['"Poppins"', "sans-serif"]
      },
  extend: {
        width: {
            '700':'700px',
            '75':'75px',
            '18':'18px',
            'seek-before-width': 0,
            '96':'96%'
        },
        minWidth: {
            '1059':'1059px'
        },
        maxWidth: {
          '1520':'1520px'
        },
        height: {
            '75': '75px',
            '11': '11px',
            '18': '18px',
            '720': '720px',
            '850':  '850px',
            '1059' : '1059px'
        },
        padding: {
          '22': '88px'
        },
        colors: {
            primary: '#f40082',
            secondary:'#ffffff',
            bar_bg: '#9CA3AF',
            seek_before_color: '#ffc2a1',
            knobby: '#3452a5',
            selectedKnobby: '#26c9c3',
            cream: '#c0c0c0',
            customBlue: '#004ecc'
        },
        margin: {
            '25': '25px',
            '2px': '2px',
            '1px': '1px'
        },
        borderRadius: {
            '10': '10px',
        },
        animation: {
            'loop-scroll': 'loop-scroll 40s linear infinite',
        },
        keyframes: {
            'loop-scroll': {
                from: { transform: 'translateX(0)'},
                to: { transform: 'translateX(-100%)' },
            },
        },
        screens: {
            '2sm': '430px'
        },
        backgroundImage: {
            'gradient': 'linear-gradient(to right, ' +
                '#22c55e 6%, ' +  // green
                '#3b82f6 16%, ' + // blue
                '#6366f1 26%, ' + // indigo
                '#8b5cf6 36%, ' + // violet
                '#d946ef 46%, ' + // fuchsia
                '#f472b6 56%, ' + // pink
                '#8b5cf6 76%, ' + // violet
                '#3b82f6 86% ' +  // blue
                ')',

            'whiteWash': 'linear-gradient(to right, ' +
                // '#d1fae5 6%, ' + // green
                // '#bfdbfe 16%, ' + // blue
                // '#e0e7ff 26%, ' + // indigo
                // '#e9d5ff 36%, ' + // violet
                // '#f0abfc 46%, ' + // fuchsia
                // '#fbcfe8 56%, ' + // pink
                // '#e9d5ff 76%, ' + // violet
                // '#bfdbfe 86% ' + // blue


                '#a78bfa 6%, ' + // violet
                '#e879f9 56%, ' + // fuchsia
                '#a78bfa 76% ' + // violet
                ')',
        },

        boxShadow: {
            'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },

        backdropFilter: {
            lg: '10px',
        },
    },
  variants: {
      backdropFilter: ['responsive', 'hover', 'focus'],
  },
  plugins: [
      require('tailwindcss-filters'),
  ],
  }
    }