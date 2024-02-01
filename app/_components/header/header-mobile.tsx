/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Hamburger from 'hamburger-react'

import { route } from '@/app/_constants/routes'
import { useSignOut } from '@/app/_hooks'

import Button from '@/app/_components/button'
import Text from '@/app/_components/text'

import NavbarMobile from '../navbar/navbar-mobile'
import { useCharactersFavorites } from '@/app/(dashboard)/dashboard/_store'

export default function HeaderMobile() {
  const router = useRouter()
  const { mutate: signOut } = useSignOut()

  const charactersFavorites = useCharactersFavorites(
    (state) => state.charactersFavorites
  )

  const resetCharactersFavorites = useCharactersFavorites(
    (state) => state.actions?.setInitialState
  )

  const [isOpen, setOpen] = useState(false)

  return (
    <header className='block mb-6 lg:hidden'>
      <div className='flex justify-between items-center px-5 h-[120px] bg-[#1b2526fa]'>
        <Link href={route.dashboard}>
          <Image
            src='/logos/logo-title.png'
            alt='logo title main'
            width={240.768}
            height={56.625}
          />
        </Link>

        <Hamburger
          color='#FFBE57'
          toggled={isOpen}
          size={20}
          toggle={setOpen}
        />
      </div>

      {isOpen && (
        <div className='fixed left-0 shadow-4xl right-0 top-[7rem] py-5 pt-0 bg-[#1b2526fa] border-b h-full z-10'>
          <div className='grid gap-2'>
            <Button
              className='flex items-center justify-center gap-x-1 w-full'
              disabled={!charactersFavorites?.length}
              onClick={() => router.push(route.charactersFavorites)}>
              <Text
                as='span'
                size='md'
                className='font-lucida-reg text-yellow-106-2 uppercase'>
                {!charactersFavorites?.length
                  ? 'Favorite characters?'
                  : 'Character Favorites'}
              </Text>

              <img src='/icons/heart.svg' alt='icon-heart' />
            </Button>

            <NavbarMobile closeNavbar={() => setOpen(false)} />

            <Text
              as='p'
              size='md'
              className='font-lucida-reg text-yellow-106-2 uppercase cursor-pointer text-center mt-4 p-[11px] px-[38px] border-2 border-yellow-106-2'
              onClick={() => {
                resetCharactersFavorites?.()
                window.localStorage.clear()
                window.location.reload()
              }}>
              Reset Favorites
            </Text>

            <Text
              as='p'
              size='md'
              className='font-lucida-reg text-yellow-106-2 uppercase cursor-pointer mt-4 text-center p-[11px] px-[38px] border-2 border-yellow-106-2'
              onClick={() => signOut()}>
              Sign Out
            </Text>
          </div>
        </div>
      )}
    </header>
  )
}
