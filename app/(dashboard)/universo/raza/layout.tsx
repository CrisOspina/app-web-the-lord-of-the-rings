import type { ReactNode } from 'react'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { route } from '@/app/_constants/routes'

import Links from './_components/links'
import Header from '../_components/header'
import BgForRace from './_components/bg-for-race'

export default function Layout({ children }: { children: ReactNode }) {
  const cookie = cookies()
  const value = cookie.get('auth')?.value
  const hasKey = cookie.has('auth')

  if (!hasKey && !value) redirect(route.signin)

  return (
    <BgForRace>
      <Header />
      <Links />
      {children}
    </BgForRace>
  )
}
