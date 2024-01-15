import { http } from '@/app/api/_http'
import { controller, type Book } from '@/app/api/_external-libs/the-open-api-v2'

export async function GET() {
  const data = await http<Book>('the-one-api').get(controller.book)
  return Response.json({ data })
}
