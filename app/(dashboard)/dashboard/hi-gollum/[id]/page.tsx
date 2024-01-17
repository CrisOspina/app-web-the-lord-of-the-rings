import Image from 'next/image'

import Card from './_components/card'
import Header from '@/app/_components/header'
import Navbar from '@/app/_components/navbar'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className='relative h-screen overflow-hidden'>
      <Header />
      <Navbar />

      <section className='block lg:flex lg:justify-center lg:items-center gap-x-2 lg:gap-x-40'>
        <Image
          src='/bg/character-gollum.svg'
          alt='character gollum'
          width={524}
          objectFit='cover'
          className='hidden lg:block'
          height={637}
        />

        <Image
          src='/bg/character-gollum.svg'
          alt='character gollum'
          width={524}
          objectFit='cover'
          className='flex lg:hidden justify-center w-full absolute bottom-20 -left-64 lg:static'
          height={637}
        />

        <Card id={params.id} />
      </section>
    </main>
  )
}
