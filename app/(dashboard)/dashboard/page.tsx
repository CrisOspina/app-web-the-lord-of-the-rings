import Link from 'next/link'

import Text from '@/app/_components/text'
import { route } from '@/app/_constants/routes'
import Header from '@/app/_components/header'

export default function Page() {
  return (
    <>
      <Header />

      <Text
        className='w-full mb-[28px] text-center mt-[50px] text-brown-106-1 font-lucida-reg !font-normal !tracking-[0.25px]'
        size='2xl'
        as='h1'>
        Race
      </Text>

      <main>
        <section className='flex flex-wrap justify-center gap-20 lg:gap-x-[58px] mb-[58px]'>
          <Link href={`${route.race}/Human`}>
            <div className="relative cursor-pointer bg-no-repeat bg-cover w-[211px] h-[237px] flex bg-[url('/races/human.svg')]">
              <Text
                className='absolute uppercase bottom-5 w-full text-center mt-[50px] text-yellow-106-2 font-lucida-reg !font-semibold !tracking-[0.25px]'
                size='sm'>
                Human
              </Text>
            </div>
          </Link>

          <Link href={`${route.race}/Elf`}>
            <div className="relative cursor-pointer bg-no-repeat bg-cover w-[211px] h-[237px] flex bg-[url('/races/elf.svg')]">
              <Text
                className='absolute uppercase bottom-5 w-full text-center mt-[50px] text-yellow-106-2 font-lucida-reg !font-semibold !tracking-[0.25px]'
                size='sm'>
                Elf
              </Text>
            </div>
          </Link>

          <Link href={`${route.race}/Hobbit`}>
            <div className="relative cursor-pointer bg-no-repeat bg-cover w-[211px] h-[237px] flex bg-[url('/races/hobbit.svg')]">
              <Text
                className='absolute uppercase bottom-5 w-full text-center mt-[50px] text-yellow-106-2 font-lucida-reg !font-semibold !tracking-[0.25px]'
                size='sm'>
                Hobbit
              </Text>
            </div>
          </Link>
        </section>

        <section className='flex flex-wrap justify-center gap-20 lg:gap-x-[58px]'>
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
                Orc
              </Text>
            </div>
          </Link>

          <Link href={`${route.race}/Dwarf`}>
            <div className="relative cursor-pointer bg-no-repeat bg-cover w-[211px] h-[237px] flex bg-[url('/races/dwarf.svg')]">
              <Text
                className='absolute uppercase bottom-5 w-full text-center mt-[50px] text-yellow-106-2 font-lucida-reg !font-semibold !tracking-[0.25px]'
                size='sm'>
                Dwarf
              </Text>
            </div>
          </Link>
        </section>
      </main>
    </>
  )
}
