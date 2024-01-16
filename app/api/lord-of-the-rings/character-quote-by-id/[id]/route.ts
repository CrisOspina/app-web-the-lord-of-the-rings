import { http } from '@/app/api/_http'
import { type CharacterQuoteById } from '@/app/api/_external-libs/the-open-api-v2'

import { controller } from '../../_controller'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const data = await http<CharacterQuoteById>('the-one-api').get(
    `${controller.character}/${params.id}/quote`
  )

  return Response.json({ ...data })
}
