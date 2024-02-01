import { NextResponse, NextMiddleware } from 'next/server'

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware

export type { MiddlewareFactory }

export default function stackMiddlewares(
  functions: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware {
  const current = functions[index]
  if (current) {
    const next = stackMiddlewares(functions, index + 1)
    return current(next)
  }

  return () => NextResponse.next()
}
