import Image from 'next/image'

import Links from '../../race/_components/links'
import Header from '../../_components/header'

import Card from './_components/card'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <Header />
      <Links />

      <section className='flex justify-center items-center gap-x-40'>
        <Image
          src='/bg/character-gollum.svg'
          alt='character gollum'
          width={524}
          objectFit='cover'
          height={637}
        />

        <Card id={params.id} />
      </section>
    </main>
  )
}
