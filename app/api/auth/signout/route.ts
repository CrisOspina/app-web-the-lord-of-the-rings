import { cookies } from 'next/headers'

import { NAME_COOKIE } from '../signin/route'

export async function GET() {
  const cookie = cookies()
  if (cookie.has(NAME_COOKIE)) {
    cookie.delete(NAME_COOKIE)
  }

  return Response.json({ isAuth: false })
}
