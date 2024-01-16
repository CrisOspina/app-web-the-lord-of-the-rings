import Image from 'next/image'

import ButtonSignin from './_components-homepage/button-signin'
import Text from '@/app/_components/text'

export default function Page() {
  return (
    <div className='w-screen min-h-screen relative'>
      <ButtonSignin />

      <Image
        src='/logos/logo-title.png'
        alt='logo title main'
        className='z-10 right-0 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        width={642.047}
        height={151}
      />

      <section className='flex'>
        <div className="bg-[url('/bg/the-comunity-rings.jpg')] w-screen min-h-screen bg-no-repeat bg-cover flex justify-end items-end">
          <Text
            as='p'
            size='2xl'
            className='font-lucida-reg text-brown-106-1 text-center w-full mb-56'>
            The Fellowship Of The Ring
          </Text>
        </div>

        <div className="bg-[url('/bg/two-tower.jpg')] w-screen min-h-screen bg-no-repeat bg-cover flex justify-end items-end">
          <Text
            as='p'
            size='2xl'
            className='font-lucida-reg text-brown-106-1 text-center w-full mb-64'>
            The Tow Towers
          </Text>
        </div>

        <div className="bg-[url('/bg/return-of-king.jpg')] w-screen min-h-screen bg-no-repeat bg-cover flex justify-end items-end">
          <Text
            as='p'
            size='2xl'
            className='font-lucida-reg text-brown-106-1 text-center w-full mb-64'>
            The Return Of The King
          </Text>
        </div>
      </section>
    </div>
  )
}
