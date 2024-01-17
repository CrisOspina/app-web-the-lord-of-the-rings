import Image from 'next/image'

export default function LogoTitle() {
  return (
    <>
      <Image
        src='/logos/logo-title.png'
        alt='logo title main'
        className='hidden md:block right-0 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        width={642.047}
        height={151}
      />

      <Image
        src='/logos/logo-title.png'
        alt='logo title main'
        className='left-20 absolute top-[85px] md:hidden'
        width={120.384}
        height={28.313}
      />
    </>
  )
}
