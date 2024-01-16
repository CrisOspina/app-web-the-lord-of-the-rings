import { http } from '@/app/api/_http'
import { type Book } from '@/app/api/_external-libs/the-open-api-v2'

import { controller } from '../_controller'

export async function GET() {
  const data = await http<Book>('the-one-api').get(controller.book)
  return Response.json({ data })
}
