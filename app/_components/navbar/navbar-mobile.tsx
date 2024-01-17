'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { route } from '@/app/_constants/routes'
import Text from '@/app/_components/text'

import { races } from './navbar'

type Props = {
  closeNavbar: () => void
}

export default function NavbarMobile({ closeNavbar }: Props) {
  const pathname = usePathname()

  return (
    <nav className='block lg:hidden mt-6 m-auto mb-6'>
      <ul className='flex flex-col gap-x-10'>
        {races.map((race) => (
          <li
            key={race}
            className={`${pathname === `${route.race}/${race}` ? 'bg-blue-102-2' : ''}`}
            onClick={closeNavbar}>
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
