import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rose:  { DEFAULT: '#E8505B', lt: '#EF7A83', pale: '#FDE8EA' },
        blue:  { DEFAULT: '#3A86D4', lt: '#6AAEE0', pale: '#E4F1FB' },
        gold:  { DEFAULT: '#F2C230', dk: '#D9A800', pale: '#FEF6DC' },
        green: { DEFAULT: '#4EAF7C', lt: '#72C797', pale: '#E3F5EC' },
        navy:  { DEFAULT: '#1C2B4A', soft: '#2E4068' },
        slate: { DEFAULT: '#5C6E8A' },
        sand:  { DEFAULT: '#FBF7F1' },
        cream: { DEFAULT: '#FDFAF5' },
      },
      fontFamily: {
        display: ['var(--font-pacifico)', 'cursive'],
        body:    ['var(--font-nunito)',   'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config