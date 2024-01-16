/* eslint-disable @next/next/no-img-element */
'use client'

import Text from '@/app/_components/text'

export default function NotFound() {
  return (
    <div
      role='alert'
      className='flex flex-col justify-center items-center w-full'>
      <Text
        as='p'
        size='2xl'
        className='text-yellow-105-2 mt-10 text-center font-harrington'>
        ...Not found...
      </Text>

      <img
        src='/bg/character-gollum.svg'
        alt='gollum'
        className='opacity-50 y- select-none'
      />
    </div>
  )
}
