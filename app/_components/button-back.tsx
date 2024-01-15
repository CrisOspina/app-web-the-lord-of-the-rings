'use client'

import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function ButtonBack({ children }: Props) {
  const router = useRouter()
  return <button onClick={() => router.back()}>{children}</button>
}
