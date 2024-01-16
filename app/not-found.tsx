import Link from 'next/link'

import Text from './_components/text'
import { route } from './_constants/routes'

export default function NotFound() {
  return (
    <main className='flex justify-center items-center w-screen h-screen flex-col gap-y-6 bg-[url("/bg/bg-gollum.svg")] bg-cover bg-no-repeat'>
      <Text className='!text-[48px] text-yellow-106-2'>Hmmm!</Text>

      <Text size='2xl' className='mb-4 text-yellow-106-2 font-harrington'>
        ...Not found page...
      </Text>

      <Link href={route.dashboard}>
        <Text
          as='span'
          size='2xl'
          className='text-yellow-106-2 mt-10 text-center p-6 hover:bg-black transition-all'>
          Go back
        </Text>
      </Link>
    </main>
  )
}
