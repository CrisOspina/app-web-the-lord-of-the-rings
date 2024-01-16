import { useQuery } from '@tanstack/react-query'

import { http } from '@/app/api/_http'
import { type CharacterQuoteById } from '@/app/api/_external-libs/the-open-api-v2'
import { controller } from '@/app/api/lord-of-the-rings/_controller'

type Props = { id: string }

export function useCharacterQuoteById({ id }: Props) {
  const query = useQuery({
    queryKey: ['character-quote-by-id', id],
    queryFn: async () => {
      const url = `${controller.characterQuoteById}/${id}`
      return await http<CharacterQuoteById>('lord-of-the-rings').get(url)
    },
    enabled: id !== ''
  })

  return { query }
}
