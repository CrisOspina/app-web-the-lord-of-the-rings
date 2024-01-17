'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { route } from '@/app/_constants/routes'
import Text from '@/app/_components/text'

export const races = ['Human', 'Elf', 'Orc', 'Hobbit', 'Ainur', 'Dwarf']

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className='hidden lg:block mt-6 m-auto mb-6'>
      <ul className='flex justify-center gap-x-10'>
        {races.map((race) => (
          <li
            key={race}
            className={`text-center ${pathname === `${route.race}/${race}` ? 'bg-blue-102-2' : ''}`}>
            <Link href={`${route.race}/${race}`}>
              <Text
                size='md'
                className='px-[45px] py-[11px] hover:bg-blue-102-2 text-yellow-106-2 text-center uppercase'>
                {race}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
