'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { route } from '@/app/_constants/routes'
import Text from '@/app/_components/text'

import { races } from './navbar'

export default function NavbarMobile() {
  const pathname = usePathname()

  return (
    <nav className='block lg:hidden mt-6 m-auto'>
      <ul className='flex flex-col gap-x-10'>
        {races.map((race) => (
          <li
            key={race}
            className={`${pathname === `${route.race}/${race}` ? 'bg-blue-102-2' : ''}`}>
            <Link href={`${route.race}/${race}`}>
              <Text
                size='md'
                className='py-[20px] hover:bg-blue-102-2 text-yellow-106-2 text-center uppercase w-full'>
                {race}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
