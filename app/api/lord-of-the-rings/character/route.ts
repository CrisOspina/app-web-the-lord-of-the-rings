import { http } from '@/app/api/_http'
import { type Character } from '@/app/api/_external-libs/the-open-api-v2'

import { controller } from '../_controller'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const limit = Number(searchParams.get('limit'))
  const offset = Number(searchParams.get('offset'))
  const race = searchParams.get('race')
  const name = searchParams.get('name')

  const pagination = {
    limit: `limit=${limit}`,
    offset: `offset=${offset}`,
    race: `race=${race}`,
    name: `name=${name}`
  }

  let baseController = `${pagination.offset}&${pagination.limit}&${pagination.race}`

  if (name) {
    baseController = `&${pagination.name}`
  }

  const data = await http<Character>('the-one-api').get(
    `${controller.character}?${baseController}`
  )

  return Response.json({ ...data })
}
