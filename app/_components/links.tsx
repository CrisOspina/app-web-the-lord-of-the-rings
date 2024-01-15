'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { route } from '@/app/_constants/routes'

const races = ['Hobbits', 'Elfos', 'Enanos', 'Humanos', 'Orcos', 'Trolls']

export default function Links() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className='flex justify-between'>
        {races.map((race) => (
          <li
            key={race}
            className={`${pathname === `${route.race}/${race}` ? 'font-bold text-lg underline' : ''}`}>
            <Link href={`${route.race}/${race}`}>
              {race} - {pathname}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
