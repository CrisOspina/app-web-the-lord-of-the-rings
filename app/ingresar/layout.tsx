import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      {children}
    </div>
  )
}
