/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react'

import { type ColumnDef } from '@tanstack/react-table'

import { type DocsCharacter } from '@/app/api/_external-libs/the-open-api-v2'

import Text from '@/app/_components/text'

import Favorite from './favorite'

const getValue = (value: string) => {
  if (value === 'NaN' || !value) return ''
  return value
}

export function useColumns() {
  const columns = useMemo<ColumnDef<DocsCharacter, any>[]>(
    () => [
      {
        accessorKey: 'favorite',
        header: 'Favorite',
        enableColumnFilter: false,
        cell: (info) => <Favorite {...info} />
      },
      {
        accessorKey: 'race',
        header: 'Race',
        enableColumnFilter: false,
        cell: (info) => {
          return (
            <Text className='font-lucida-reg'>
              {getValue(info.getValue() as string) ?? ''}
            </Text>
          )
        }
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
        enableColumnFilter: false,
        cell: (info) => {
          return (
            <Text className='font-lucida-reg'>
              {getValue(info.getValue() as string) ?? ''}
            </Text>
          )
        }
      },
      {
        accessorKey: 'name',
        enableColumnFilter: true,
        header: 'Name',
        cell: (info) => (
          <Text className='font-lucida-reg'>
            {getValue(info.getValue() as string) ?? ''}
          </Text>
        )
      },
      {
        accessorKey: 'hair',
        header: 'Hair',
        enableColumnFilter: false,
        cell: (info) => (
          <Text className='font-lucida-reg'>
            {getValue(info.getValue() as string) ?? ''}
          </Text>
        )
      },
      {
        accessorKey: 'birth',
        header: 'Birth',
        enableColumnFilter: false,
        cell: (info) => (
          <Text className='font-lucida-reg'>
            {getValue(info.getValue() as string) ?? ''}
          </Text>
        )
      },
      {
        accessorKey: 'death',
        header: 'Death',
        enableColumnFilter: false,
        cell: (info) => (
          <Text className='font-lucida-reg'>
            {getValue(info.getValue() as string) ?? ''}
          </Text>
        )
      },
      {
        accessorKey: 'wikiUrl',
        header: 'Wiki',
        enableColumnFilter: false,
        cell: (info) => {
          const value = info.getValue() as string

          if (!value) return null

          return (
            <a href={value} target='_blank' rel='noreferrer'>
              <Text className='font-lucida-reg underline'>Wiki</Text>
            </a>
          )
        }
      }
    ],
    []
  )

  return { columns }
}
