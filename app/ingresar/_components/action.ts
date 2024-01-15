'use server'

import { Buffer } from 'buffer'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { route } from '@/app/_constants/routes'

const NAME_COOKIE = 'auth'

export async function createCookieAuth(username: string) {
  const base64 = Buffer.from(username).toString('base64')
  cookies().set(NAME_COOKIE, base64)
  redirect(route.dashboard)
}
