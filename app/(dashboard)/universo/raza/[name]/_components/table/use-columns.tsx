import { useMemo } from 'react'

import { type ColumnDef } from '@tanstack/react-table'

import { type DocsCharacter } from '@/app/api/_external-libs/the-open-api-v2'
import { useCharactersFavorites } from '@/app/(dashboard)/universo/_store'

export function useColumns() {
  const addCharacterFavorite = useCharactersFavorites(
    (state) => state.actions?.addCharacterFavorite
  )

  const columns = useMemo<ColumnDef<DocsCharacter>[]>(
    () => [
      {
        accessorKey: 'race',
        cell: (info) => info.getValue()
      },
      {
        accessorKey: 'name',
        cell: (info) => info.getValue()
      },
      {
        accessorKey: 'wikiUrl',
        cell: (info) => {
          const value = info.getValue() as string

          if (!value) return null

          return (
            <a href={value} target='_blank' rel='noreferrer'>
              {value ?? ''}
            </a>
          )
        }
      },
      {
        accessorKey: 'favorite',
        cell: ({ row }) => {
          const { original } = row

          return (
            <div>
              <button onClick={() => addCharacterFavorite?.(original)}>
                Agregar a favorito
              </button>
            </div>
          )
        }
      }
    ],
    [addCharacterFavorite]
  )

  return { columns }
}
