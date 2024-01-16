'use client'

import { useSignOut } from '@/app/_hooks'

export default function ButtonSignOut() {
  const { mutate } = useSignOut()

  const onLogout = () => mutate()

  return (
    <button className='btn' onClick={onLogout}>
      Sign Out
    </button>
  )
}
