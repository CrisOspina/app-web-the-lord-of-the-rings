'use client'

import { useRouter } from 'next/navigation'

import { route } from '@/app/_constants/routes'

import Button from '@/app/_components/button'
import Text from '@/app/_components/text'

export default function ButtonSignin() {
  const router = useRouter()

  return (
    <Button
      className='absolute top-[77px] right-[95px] md:right-[126px] z-10'
      onClick={() => router.push(route.signin)}>
      <Text
        as='span'
        size='md'
        className='font-lucida-reg text-brown-106-1 md:text-yellow-106-2 uppercase'>
        Login
      </Text>
    </Button>
  )
}
