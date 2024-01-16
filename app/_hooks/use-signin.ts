'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { route } from '@/app/_constants/routes'

import { http } from '@/app/api/_http'
import { baseController } from '@/app/api/_controller'
import type { AuthSignIn } from '@/app/api/types'

const MUTATION_KEY = 'mutation-auth'

export function useSignin() {
  const router = useRouter()

  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: async (username: string) => {
      const queryParams = `?username=${username}`
      const controller = `${baseController.authSignIn}${queryParams}`
      return await http<AuthSignIn>('auth').get(controller)
    },
    onSuccess: (response) => {
      if (response?.isAuth) return router.push(route.dashboard)
    }
  })
}
