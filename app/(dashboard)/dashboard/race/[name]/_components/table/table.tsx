'use client'

import { useState } from 'react'

import { useCharacters, useDebounce } from '@/app/_hooks'

import TableUI from '@/app/_components/table'
import Spinner from '@/app/_components/spinner'

import NotFound from './not-found'
import { useColumns } from './use-columns'

type Props = { race: string }

export default function Table({ race }: Props) {
  const { columns } = useColumns()
  const [search, setSearch] = useState('')
  const currentSearch = useDebounce<string>(search, 700)

  const { pagination, query } = useCharacters({
    race,
    name: currentSearch
  })

  if (query.isLoading) return <Spinner />

  const hasData = query.data?.docs && query.data?.docs.length > 0

  return (
    <>
      <input
        type='text'
        placeholder='Search character for name - example: gollum'
        onChange={(ev) => setSearch(ev.target.value)}
        className='rounded-sm w-[400px] border-2 border-yellow-105-2 bg-blue-102-1 p-2 my-10 focus:ring-0 focus:outline-none focus-visible:ring-0 text-white'
      />

      {hasData ? (
        <TableUI
          key={race}
          columns={columns}
          data={query.data?.docs ?? []}
          isLoading={query.isFetching || query.isLoading}
          pageCount={query.data?.total ?? -1}
          pagination={pagination}
        />
      ) : (
        <NotFound />
      )}
    </>
  )
}
