import localFont from 'next/font/local'

const fontLucidaBrightRegular = localFont({
  src: './font-lucida-bright-regular.ttf',
  display: 'swap',
  style: 'normal',
  variable: '--font-lucida-bright-regular'
})

const fontLucidaDomibold = localFont({
  src: './font-lucida-domibold.ttf',
  display: 'swap',
  style: 'normal',
  variable: '--font-lucida-domibold'
})

const fontHarrington = localFont({
  src: './font-harrington.ttf',
  display: 'swap',
  style: 'normal',
  variable: '--font-harrington'
})

const localFonts = [
  fontLucidaBrightRegular.variable,
  fontLucidaDomibold.variable,
  fontHarrington.variable
].join(' ')

export { localFonts }
