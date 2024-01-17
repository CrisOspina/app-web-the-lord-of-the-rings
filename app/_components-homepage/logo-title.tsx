import Image from 'next/image'

export default function LogoTitle() {
  return (
    <Image
      src='/logos/logo-title.png'
      alt='logo title main'
      className='z-10 right-0 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      width={642.047}
      height={151}
    />
  )
}
