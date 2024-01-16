/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { CellContext } from '@tanstack/react-table'

import { useCharactersFavorites } from '@/app/(dashboard)/dashboard/_store'

import { route } from '@/app/_constants/routes'
import { DocsCharacter } from '@/app/api/_external-libs/the-open-api-v2'

import Summary from './summary'

export default function Favorite({ row }: CellContext<DocsCharacter, any>) {
  const router = useRouter()

  const addCharacterFavorite = useCharactersFavorites(
    (state) => state.actions?.addCharacterFavorite
  )

  const removeCharacterFavorite = useCharactersFavorites(
    (state) => state.actions?.removeCharacterFavorite
  )

  const characterFavorites = useCharactersFavorites(
    (state) => state?.charactersFavorites
  )

  const hasFavorites = characterFavorites?.some(
    (fav) => fav._id === row.original._id
  )

  useEffect(() => {
    if (hasFavorites) {
      if (row.original.name === 'Gollum') {
        router.push(`${route.hiGollum}/${row.original._id}`)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasFavorites, row.original._id, row.original.name])

  if (hasFavorites) {
    return (
      <div className='flex gap-x-2 items-center'>
        <img
          src='/icons/heart-active.svg'
          alt='icon-heart-active'
          className='cursor-pointer mb-2'
          onClick={() => removeCharacterFavorite?.(row.original._id)}
        />

        <Summary summary={row.original} name={row.original.name} />
      </div>
    )
  }

  return (
    <div className='flex gap-x-2 items-center'>
      <img
        src='/icons/heart.svg'
        alt='icon-heart'
        className='cursor-pointer mb-2'
        onClick={() => addCharacterFavorite?.(row.original)}
      />

      <Summary summary={row.original} name={row.original.name} />
    </div>
  )
}
