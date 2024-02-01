import type { ReactNode } from 'react'

import BgForRace from './_components/bg-for-race'
import Header from '@/app/_components/header'
import Navbar from '@/app/_components/navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <BgForRace>
      <Header />
      <Navbar />
      {children}
    </BgForRace>
  )
}
