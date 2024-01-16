'use client'

import { useRouter } from 'next/navigation'

import { useSignOut } from '../_hooks'
import Text from './text'
import Button from './button'

export type PropsError = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorFallback({ error, reset }: PropsError) {
  const router = useRouter()
  const { mutate } = useSignOut()

  return (
    <div className='w-full mx-auto flex justify-center h-screen items-center'>
      <div role='alert'>
        <Text className='mb-5'>
          {!error?.message ? 'Ocurrio un error inesperado' : error.message}
        </Text>

        <ul className='list-disc list-inside'>
          {reset ? (
            <li>
              <Button type='button' className='mt-8'>
                <Text
                  as='span'
                  size='md'
                  onClick={() => reset()}
                  className='font-lucida-reg text-yellow-106-2 uppercase'>
                  Againt, reset
                </Text>
              </Button>
            </li>
          ) : null}

          <li>
            <Button type='button' className='mt-8'>
              <Text
                as='span'
                size='md'
                onClick={() => window.location.reload()}
                className='font-lucida-reg text-yellow-106-2 uppercase'>
                Reload
              </Text>
            </Button>
          </li>

          <li>
            <Button type='button' className='mt-8'>
              <Text
                as='span'
                size='md'
                onClick={() => router.push('/')}
                className='font-lucida-reg text-yellow-106-2 uppercase'>
                Go home
              </Text>
            </Button>
          </li>

          <li>
            <Button type='button' className='mt-8'>
              <Text
                as='span'
                size='md'
                onClick={() => mutate()}
                className='font-lucida-reg text-yellow-106-2 uppercase'>
                SignOut
              </Text>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}
