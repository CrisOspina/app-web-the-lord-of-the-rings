'use client'

import Link from 'next/link'

const test = [
  {
    id: '123',
    name: 'P1'
  },
  {
    id: '456',
    name: 'P2'
  },
  {
    id: '789',
    name: 'P3'
  }
]

export default function ShowDetail() {
  return (
    <nav>
      <ul className='space-4'>
        {test.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/universo/raza/${name}/detalle/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
