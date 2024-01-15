import type { ReactNode } from 'react'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Links from '@/app/_components/links'

import { route } from '@/app/_constants/routes'

export default function Layout({ children }: { children: ReactNode }) {
  const cookie = cookies()

  const value = cookie.get('auth')?.value
  const hasKey = cookie.has('auth')

  if (hasKey && !value) redirect(route.signin)

  return (
    <div className='mx-6'>
      <h1 className='mb-4'>Razas</h1>
      <Links />
      {children}
    </div>
  )
}
