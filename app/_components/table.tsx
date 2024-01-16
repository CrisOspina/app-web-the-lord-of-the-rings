'use client'

import { useMemo, type Dispatch, type SetStateAction } from 'react'
import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender
} from '@tanstack/react-table'

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

  const pagination = useMemo(
    () => ({ pageIndex, pageSize }),
    [pageIndex, pageSize]
  )

  const table = useReactTable({
    data: data ?? defaultData,
    columns,
    pageCount: pageCount ?? -1,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true
  })

  return (
    <div className='p-2'>
      <div className='h-2' />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className='h-2' />

      <div className='flex items-center gap-2'>
        <button
          className='border rounded p-1'
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}>
          {'<<'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          {'<'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          {'>'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}>
          {'>>'}
        </button>
        <span className='flex items-center gap-1'>
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className='flex items-center gap-1'>
          | Go to page:
          <input
            type='number'
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className='border p-1 rounded w-16'
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}>
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        {isLoading ? 'Loading...' : null}
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>

      <pre>{JSON.stringify(pagination, null, 2)}</pre>
    </div>
  )
}
