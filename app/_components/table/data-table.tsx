'use client'

import { useMemo, type Dispatch, type SetStateAction, useState } from 'react'

import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  getFilteredRowModel
} from '@tanstack/react-table'

import {
  Table as TableUI,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './table'

import Button from '../button'
import Text from '../text'
import Spinner from '../spinner'
import { Filter } from './filter'

type Props<T> = {
  data: T[]
  columns: ColumnDef<T>[]
  pageCount: number
  isLoading: boolean
  pagination: {
    pageIndex: number
    pageSize: number
    setPagination: Dispatch<SetStateAction<PaginationState>>
  }
}

export default function Table<T>({
  columns,
  data,
  pageCount,
  isLoading,
  pagination: paginationProps
}: Props<T>) {
  const defaultData = useMemo(() => [], [])
  const { pageIndex, pageSize, setPagination } = paginationProps

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const pagination = useMemo(
    () => ({ pageIndex, pageSize }),
    [pageIndex, pageSize]
  )

  const table = useReactTable({
    data: data ?? defaultData,
    columns,
    pageCount: pageCount ?? -1,
    state: { pagination, columnFilters },
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true
  })

  return (
    <>
      <TableUI>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                        {header.column.getCanFilter() ? (
                          <Filter column={header.column} />
                        ) : null}
                      </>
                    )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </TableUI>

      <div className='flex items-center gap-2 mt-4 flex-wrap'>
        <Button
          className='border rounded p-1'
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}>
          <Text
            as='span'
            size='md'
            className='font-lucida-reg text-yellow-106-2 uppercase'>
            {'<<'}
          </Text>
        </Button>

        <Button
          className='border rounded p-1'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          <Text
            as='span'
            size='md'
            className='font-lucida-reg text-yellow-106-2 uppercase'>
            {'<'}
          </Text>
        </Button>

        <Button
          className='border rounded p-1'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          <Text
            as='span'
            size='md'
            className='font-lucida-reg text-yellow-106-2 uppercase'>
            {'>'}
          </Text>
        </Button>

        <Button
          className='border rounded p-1'
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}>
          <Text
            as='span'
            size='md'
            className='font-lucida-reg text-yellow-106-2 uppercase'>
            {'>>'}
          </Text>
        </Button>

        <Text className='flex items-center gap-1 font-lucida-reg text-yellow-106-2 uppercase'>
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </Text>

        <select
          className='border text-yellow-106-2 uppercase p-1 bg-[#1b2526cc]'
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}>
          {[10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>

        {isLoading ? <Spinner /> : null}
      </div>
    </>
  )
}
