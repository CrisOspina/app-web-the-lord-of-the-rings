'use client'

import TableUI from '@/app/_components/table'
import { useState } from 'react'

import { useColumns } from './use-columns'
import { useCaractersForRace } from '@/app/_hooks'

type Props = { race: string }

export default function Table({ race }: Props) {
  const { columns } = useColumns()
  const [search, setSearch] = useState('')
  const { pagination, query } = useCaractersForRace({ race, name: search })

  return (
    <>
      <input
        type='text'
        onChange={(ev) => setSearch(ev.target.value)}
        className='mb-4 border w-28 border-gray-300 rounded-md p-2'
      />

      <select name='' id=''>
        <option value=''>name1</option>
        <option value=''>name2</option>
        <option value=''>name3</option>
      </select>

      <TableUI
        key={race}
        columns={columns}
        data={query.data?.docs ?? []}
        isLoading={query.isFetching}
        pageCount={query.data?.total ?? -1}
        pagination={pagination}
      />
    </>
  )
}
