import { http } from '../../_http'
import { controller } from '../../_lib/the-open-api-v2/types/controller'

type Book = {
  docs: { _id: string; name: string }[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export async function GET() {
  const data = await http<Book>('the-one-api').get(controller.book)
  return Response.json({ data })
}
