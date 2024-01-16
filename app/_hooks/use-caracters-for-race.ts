import { useState } from 'react'

import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { type PaginationState } from '@tanstack/react-table'

import { http } from '@/app/api/_http'
import { type Character } from '@/app/api/_external-libs/the-open-api-v2'
import { controller } from '@/app/api/lord-of-the-rings/_controller'

type Props = { race: string; name?: string }

const initialValue = { pageIndex: 0, pageSize: 10 }

export function useCaractersForRace({ race, name }: Props) {
  const [pagination, setPagination] = useState<PaginationState>(initialValue)
  const fetchDataOptions = { ...pagination, race, name }

  const query = useQuery({
    queryKey: ['data', fetchDataOptions],
    placeholderData: keepPreviousData,
    staleTime: Infinity,
    queryFn: async () => {
      const limit = `limit=${pagination.pageSize}`
      const offset = `offset=${pagination.pageIndex * pagination.pageSize}`
      const nameRace = `race=${race}`
      let url = `${controller.character}?${limit}&${offset}&${nameRace}`

      if (name) {
        url = `${controller.character}?name=${name}`
      }

      return await http<Character>('lord-of-the-rings').get(url)
    },
    enabled: race !== ''
  })

  return { query, pagination: { ...pagination, setPagination } }
}
