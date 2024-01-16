import { useQuery } from '@tanstack/react-query'

import { http } from '@/app/api/_http'
import { type CharacterById } from '@/app/api/_external-libs/the-open-api-v2'
import { controller } from '@/app/api/lord-of-the-rings/_controller'

type Props = { id: string }

export function useCharacterById({ id }: Props) {
  const query = useQuery({
    queryKey: ['character-by-id', id],
    queryFn: async () => {
      const url = `${controller.characterById}/${id}`
      return await http<CharacterById>('lord-of-the-rings').get(url)
    },
    enabled: id !== ''
  })

  return { query }
}
