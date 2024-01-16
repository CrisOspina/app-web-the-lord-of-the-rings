'use client'

import Image from 'next/image'

import Text from '@/app/_components/text'
import './bg-book.css'

type PropsBgBook = { srcImage: string; title: string }

export default function BgBook({ srcImage, title }: PropsBgBook) {
  return (
    <>
      <picture className='flex relative'>
        <Image
          className='object-cover h-auto w-auto transition-all duration-500 ease-in-out test'
          src={srcImage}
          alt={title}
          width={428}
          height={832}
          objectFit='cover'
        />

        <Text
          as='p'
          size='2xl'
          className='absolute bottom-[175px] font-lucida-reg text-brown-106-1 text-center left-0 w-full flex flex-col'>
          {title.toUpperCase()}
        </Text>
      </picture>
    </>
  )
}
