'use client'

import { useCharactersFavorites } from '@/app/(dashboard)/universo/_store'

export default function Table() {
  const store = useCharactersFavorites((state) => state.charactersFavorites)
  const removeCharacterFavorite = useCharactersFavorites(
    (state) => state.actions?.removeCharacterFavorite
  )

  return (
    <ul>
      {store.map((character) => (
        <li key={character._id} className='flex gap-x-4'>
          {character.name}
          <button onClick={() => removeCharacterFavorite?.(character._id)}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  )
}
