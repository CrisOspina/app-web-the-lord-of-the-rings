import Links from '../raza/_components/links'
import Header from '../_components/header'
import Text from '@/app/_components/text'
import Image from 'next/image'
import Button from '@/app/_components/button'

export default function Page() {
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

        <div>
          <Text
            as='p'
            className='font-harrington text-brown-106-1 !font-normal text-center mb-4'
            size='4xl'>
            Gollum
          </Text>

          <Text
            as='p'
            className='font-lucida-reg text-brown-106-1 !font-normal leading-6 text-center'
            size='lg'>
            Raza:{' '}
            <Text
              as='span'
              className='font-lucida-reg !font-normal leading-6 text-white-100'
              size='lg'>
              Hobbit
            </Text>
          </Text>

          <Text
            as='p'
            className='font-lucida-reg text-brown-106-1 !font-normal leading-6 text-center mt-[23px]'
            size='lg'>
            GENERO::{' '}
            <Text
              as='span'
              className='font-lucida-reg !font-normal leading-6 text-white-100'
              size='lg'>
              Male
            </Text>
          </Text>

          <Text
            as='p'
            className='font-lucida-reg text-brown-106-1 !font-normal leading-6 text-center mt-[23px]'
            size='lg'>
            CUMPLEAÑOS:{' '}
            <Text
              as='span'
              className='font-lucida-reg !font-normal leading-6 text-white-100'
              size='lg'>
              TA 2430
            </Text>
          </Text>

          <Text
            as='p'
            className='font-lucida-reg text-brown-106-1 !font-normal leading-6 text-center mt-[23px]'
            size='lg'>
            MUERTE:{' '}
            <Text
              as='span'
              className='font-lucida-reg !font-normal leading-6 text-white-100'
              size='lg'>
              March 25 ,3019
            </Text>
          </Text>

          <div className='w-full flex justify-center'>
            <Button type='button' className='mt-8 '>
              <Text
                as='span'
                size='md'
                className='font-lucida-reg text-yellow-106-2 uppercase'>
                máS DETALLES
              </Text>
            </Button>
          </div>

          <Text
            as='p'
            className='font-lucida-reg text-brown-104-1 !font-normal leading-6 text-center mt-[30px]'
            size='lg'>
            Come Hobbitses, very close now. Very close to Mordor.
          </Text>

          <Text
            as='p'
            className='font-lucida-reg text-brown-104-1 !font-normal leading-6 text-center mt-1'
            size='lg'>
            No safe places here. Hurry.Yeees! Yeees! Precious! My Precious!
          </Text>
        </div>
      </section>
    </main>
  )
}
