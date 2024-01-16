'use client'

import ErrorFallback, {
  type PropsError
} from '@/app/_components/error-fallback'

export default function Error(props: PropsError) {
  return <ErrorFallback {...props} />
}
