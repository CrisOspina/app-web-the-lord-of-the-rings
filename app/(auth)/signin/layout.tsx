import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[url('/bg/bg-signin.svg')] w-screen min-h-screen bg-no-repeat bg-cover">
      {children}
    </div>
  )
}
