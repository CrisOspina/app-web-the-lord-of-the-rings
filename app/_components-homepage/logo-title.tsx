import Image from 'next/image'

export default function LogoTitle() {
  return (
    <>
      <Image
        src='/logos/logo-title.png'
        alt='logo title main'
        className='hidden lg:block'
        width={642.047}
        height={151}
      />

      <Image
        src='/logos/logo-title.png'
        alt='logo title main'
        className='left-5 absolute lg:hidden'
        width={120.384}
        height={28.313}
      />
    </>
  )
}
