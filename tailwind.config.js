/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
      fontFamily: {
        Poppins: ['"Poppins"', "sans-serif"]
      },
    extend: {
        width: {
            '700':'700px',
            '75':'75px',
            '18':'18px',
            'seek-before-width': 0
        },
        height: {
            '75': '75px',
            '11': '11px',
            '18': '18px',
            '720': '720px',
            '1059' : '1059px'
        },
        colors: {
            primary: '#f40082',
            secondary:'#ffd200',
            bar_bg: '#ffe3d4',
            seek_before_color: '#ffc2a1',
            knobby: '#3452a5',
            selectedKnobby: '#26c9c3',
            cream: '#c0c0c0'
        },
        margin: {
            '25': '25px',
            '2px': '2px',
            '1px': '1px'
        },
        borderRadius: {
            '10': '10px',
        }
    },
  },
  plugins: [],
}

