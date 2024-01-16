'use client'

import ErrorFallback from './_components/error-fallback'

export default function GlobalError(props: any) {
  return (
    <html>
      <body>
        <ErrorFallback {...props} />
      </body>
    </html>
  )
}
