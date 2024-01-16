import type { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { route } from '@/app/_constants/routes'

export default function Layout({ children }: { children: ReactNode }) {
  const cookie = cookies()
  const value = cookie.get('auth')?.value
  const hasKey = cookie.has('auth')

  if (!hasKey && !value) redirect(route.signin)

  return (
    <div className="bg-[url('/bg/bg-dashboard.svg')] w-screen min-h-screen bg-no-repeat bg-cover">
      {children}
    </div>
  )
}
