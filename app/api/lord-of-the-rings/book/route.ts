import { controller } from '@/app/api/_constants/the-open-api-v2'
import { http } from '../../_http'

type Book = {
  docs: {
    _id: string
    name: string
  }[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export async function GET() {
  const data = await http<Book>(controller.book).get()
  return Response.json({ data })
}
