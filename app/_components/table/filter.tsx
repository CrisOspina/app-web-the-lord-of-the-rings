import { Column } from '@tanstack/react-table'

import { DebouncedInput } from './input-debounce'

export function Filter<T>({ column }: { column: Column<T, unknown> }) {
  const columnFilterValue = column.getFilterValue()

  return (
    <div className='my-4'>
      <DebouncedInput
        type='text'
        value={(columnFilterValue ?? '') as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder='Search name...'
        className='rounded-sm border-2 border-[#362A16] bg-blue-102-1 p-2 focus:ring-0 focus:outline-none focus-visible:ring-0 text-white'
        list={column.id + 'list'}
      />
    </div>
  )
}
