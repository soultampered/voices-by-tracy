/** @type {import('tailwindcss').Config} */
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
                '#22c55e 6%, ' + //green
                '#3b82f6 16%, ' + //blue
                '#6366f1 26%, ' + //indigo
                '#8b5cf6 36%, ' + //violet
                '#d946ef 46%, ' + //fuchsia
                '#ec4899 56%, ' + // pink
                '#8b5cf6 76%, ' + //violet
                '#3b82f6 86% ' + //blue
                ')',
        },
        boxShadow: {
            'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        plugins: [],
    }
  }
    }