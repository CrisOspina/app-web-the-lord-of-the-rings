import { useQuery } from '@tanstack/react-query'

import { http } from '@/app/api/_http'
import { type CharacterById } from '@/app/api/_external-libs/the-open-api-v2'
import { controller } from '@/app/api/lord-of-the-rings/_controller'

export function useBooks() {
  const query = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      return await http<CharacterById>('lord-of-the-rings').get(controller.book)
    }
  })

  return { query }
}
