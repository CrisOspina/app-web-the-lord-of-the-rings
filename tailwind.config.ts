import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'blue-101-1': '#335A59',
        'blue-101-2': '#00A8A4',
        'blue-102-1': '#1B2526',
        'blue-102-2': '#003B41',
        'blue-103-1': '#353F40',
        'brown-104-1': '#A69486',
        'brown-105-1': '#9E7E40',
        'brown-106-1': '#E0B776',
        'brown-107-1': '#B99867',
        'yellow-104-2': '#FF892D',
        'yellow-105-2': '#DE9200',
        'yellow-106-2': '#FFBE57',
        'yellow-107-2': '#FFA621',
        'gray-200': '#3E3E3E',
        'gray-100': '#B3B3B3',
        'gray-400': '#F9F4F4',
        'white-100': '#FCFCFC'
      }
    },
    fontFamily: {
      'lucida-reg': ['var(--font-lucida-bright-regular)'],
      'lucida-domi': ['var(--font-lucida-domibold)'],
      harrington: ['var(--font-harrington)']
    }
  },
  plugins: []
}

export default config
