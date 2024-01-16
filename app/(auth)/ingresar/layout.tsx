import { route } from '@/app/_constants/routes'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  const cookie = cookies()

  const value = cookie.get('auth')?.value
  const hasKey = cookie.has('auth')

  if (hasKey && value) redirect(route.dashboard)

  return (
    <div className="bg-[url('/bg/bg-signin.svg')] w-screen h-screen bg-no-repeat bg-cover">
      {children}
    </div>
  )
}
