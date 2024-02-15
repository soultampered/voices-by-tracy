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
            '75':'75px'
        },
        height: {
            '75': '75px',
            '11': '11px'
        },
        colors: {
            primary: '#f40082',
            secondary:'#ffd200',
            bar_bg: '#ffe3d4',
            seek_before_color: '#ffc2a1',
            knobby: '#3452a5',
            selectedKnobby: '#26c9c3'
        },
        margin: {
            '25': '25px'
        },
        borderRadius: {
            'lg10': '10px'
        }
    },
  },
  plugins: [],
}

