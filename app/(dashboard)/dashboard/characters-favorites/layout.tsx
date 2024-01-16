import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[url('/bg/bg-characters-favorites.jpg')] w-screen min-h-screen bg-no-repeat bg-cover">
      {children}
    </div>
  )
}
