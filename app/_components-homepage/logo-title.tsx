import Image from 'next/image'

export default function LogoTitle() {
  return (
    <div className='top-[165px] absolute flex'>
      <Image
        src='/logos/logo-title.png'
        alt='logo title main'
        className='z-10'
        width={642.047}
        height={151}
      />
    </div>
  )
}
