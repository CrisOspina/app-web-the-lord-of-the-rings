import { cookies } from 'next/headers'

export async function GET() {
  const cookie = cookies()
  if (cookie.has('auth')) {
    cookie.delete('auth')
  }

  return Response.json({ isAuth: false })
}
