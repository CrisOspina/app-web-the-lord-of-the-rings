import Link from 'next/link'

import Text from '@/app/_components/text'
import { route } from '@/app/_constants/routes'

import Header from './_components/header'

export default function Page() {
  return (
    <main>
      <Header />

      <Text
        className='w-full mb-[28px] text-center mt-[50px] text-brown-106-1 font-lucida-reg !font-normal !tracking-[0.25px]'
        size='2xl'>
        Razas
      </Text>

      <section className='flex flex-wrap justify-center gap-x-[58px] mb-[58px]'>
        <Link href={`${route.race}/Human`}>
          <div className="relative cursor-pointer bg-no-repeat bg-cover w-[211px] h-[237px] flex bg-[url('/races/human.svg')]">
            <Text
              className='absolute uppercase bottom-5 w-full text-center mt-[50px] text-yellow-106-2 font-lucida-reg !font-semibold !tracking-[0.25px]'
              size='sm'>
              Hombres
            </Text>
          </div>
        </Link>

        <Link href={`${route.race}/Elf`}>
          <div className="relative cursor-pointer bg-no-repeat bg-cover w-[211px] h-[237px] flex bg-[url('/races/elf.svg')]">
            <Text
              className='absolute uppercase bottom-5 w-full text-center mt-[50px] text-yellow-106-2 font-lucida-reg !font-semibold !tracking-[0.25px]'
              size='sm'>
              Elfos
            </Text>
          </div>
        </Link>

        <Link href={`${route.race}/Hobbit`}>
          <div className="relative cursor-pointer bg-no-repeat bg-cover w-[211px] h-[237px] flex bg-[url('/races/hobbit.svg')]">
            <Text
              className='absolute uppercase bottom-5 w-full text-center mt-[50px] text-yellow-106-2 font-lucida-reg !font-semibold !tracking-[0.25px]'
              size='sm'>
              Hobbits
            </Text>
          </div>
        </Link>
      </section>

      <section className='flex flex-wrap justify-center gap-x-[58px]'>
        <Link href={`${route.race}/Ainur`}>
          <div className="relative cursor-pointer bg-no-repeat bg-cover w-[211px] h-[237px] flex bg-[url('/races/ainur.svg')]">
            <Text
              className='absolute uppercase bottom-5 w-full text-center mt-[50px] text-yellow-106-2 font-lucida-reg !font-semibold !tracking-[0.25px]'
              size='sm'>
              Ainur
            </Text>
          </div>
        </Link>

        <Link href={`${route.race}/Orc`}>
          <div className="relative cursor-pointer bg-no-repeat bg-cover w-[211px] h-[237px] flex bg-[url('/races/orc.svg')]">
            <Text
              className='absolute uppercase bottom-5 w-full text-center mt-[50px] text-yellow-106-2 font-lucida-reg !font-semibold !tracking-[0.25px]'
              size='sm'>
              Orcos
            </Text>
          </div>
        </Link>

        <Link href={`${route.race}/Dwarf`}>
          <div className="relative cursor-pointer bg-no-repeat bg-cover w-[211px] h-[237px] flex bg-[url('/races/dwarf.svg')]">
            <Text
              className='absolute uppercase bottom-5 w-full text-center mt-[50px] text-yellow-106-2 font-lucida-reg !font-semibold !tracking-[0.25px]'
              size='sm'>
              Enanos
            </Text>
          </div>
        </Link>
      </section>
    </main>
  )
}
