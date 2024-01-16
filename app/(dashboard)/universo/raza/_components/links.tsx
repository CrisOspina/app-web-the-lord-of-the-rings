'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { route } from '@/app/_constants/routes'
import Text from '@/app/_components/text'

const races = ['Human', 'Elf', 'Orc', 'Hobbit', 'Ainur', 'Dwarf']

export default function Links() {
  const pathname = usePathname()

  return (
    <nav className='mt-6 m-auto'>
      <ul className='flex justify-center gap-x-10'>
        {races.map((race) => (
          <li
            key={race}
            className={`${pathname === `${route.race}/${race}` ? 'bg-blue-102-2' : ''}`}>
            <Link href={`${route.race}/${race}`}>
              <Text
                size='md'
                className='px-[45px] py-[11px] hover:bg-blue-102-2 text-yellow-106-2 text-center font-semibold uppercase'>
                {race}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
