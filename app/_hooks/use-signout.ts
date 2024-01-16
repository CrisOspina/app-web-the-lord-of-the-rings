'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { route } from '@/app/_constants/routes'

import { http } from '@/app/api/_http'
import { baseController } from '@/app/api/_controller'
import type { AuthSignIn } from '@/app/api/types'

const MUTATION_KEY = 'mutation-signout'

export function useSignOut() {
  const router = useRouter()

  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: async () => {
      return await http<AuthSignIn>('auth').get(baseController.authSignOut)
    },
    onSuccess: (response) => {
      if (!response?.isAuth) return router.push(route.signin)
    }
  })
}
