import { Buffer } from 'buffer'
import { cookies } from 'next/headers'

export const NAME_COOKIE = 'auth'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  if (!searchParams.has('username')) {
    return Response.json({ isAuth: false })
  }

  const username = searchParams.get('username') ?? ''

  const base64 = Buffer.from(username).toString('base64')
  cookies().set(NAME_COOKIE, base64)

  return Response.json({ isAuth: true })
}
