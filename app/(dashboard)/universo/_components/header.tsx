/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { route } from '@/app/_constants/routes'
import { useSignOut } from '@/app/_hooks'

import Button from '@/app/_components/button'
import Text from '@/app/_components/text'

export default function Header() {
  const router = useRouter()
  const { mutate } = useSignOut()

  return (
    <header className='w-full bg-blue-102-1 py-0 px-[75px] h-[131px] flex items-center justify-between'>
      <Link href={route.dashboard}>
        <Image
          src='/logos/logo-title.png'
          alt='logo title main'
          width={240.768}
          height={56.625}
        />
      </Link>

      <div className='flex items-center gap-x-[30px]'>
        <Button className='flex items-center gap-x-1'>
          <Text
            as='span'
            size='md'
            className='font-lucida-reg text-yellow-106-2 uppercase'
            onClick={() => router.push(route.charactersFavorites)}>
            Favoritos
          </Text>

          <img src='/icons/heart.svg' alt='icon-heart' />
        </Button>

        <Text
          as='p'
          size='md'
          className='font-lucida-reg text-yellow-106-2 uppercase cursor-pointer'
          onClick={() => mutate()}>
          Cerrar sesión
        </Text>
      </div>
    </header>
  )
}
