'use client'

import { type ReactNode, useEffect, useState } from 'react'

export default function ProviderHydrated({
  children
}: {
  children: ReactNode
}) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? children : ''}</>
}
