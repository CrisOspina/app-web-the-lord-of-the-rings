'use client'

import { useState } from 'react'

import { useCharacters, useDebounce } from '@/app/_hooks'

import TableUI from '@/app/_components/table'
import Spinner from '@/app/_components/spinner'
import Input from '@/app/_components/input'

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
      <Input
        type='text'
        placeholder='Search...'
        className='w-full lg:w-[400px] mb-6'
        onChange={(ev) => setSearch(ev.target.value)}
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
