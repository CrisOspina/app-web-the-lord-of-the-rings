import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { route } from '@/app/_constants/routes'
import { type MiddlewareFactory } from './stack-middlewares'

const withProtectedRoute: MiddlewareFactory = (middleware) => {
  return async (request: NextRequest, next: NextFetchEvent) => {
    const { pathname } = request.nextUrl
    const cookie = cookies()
    const value = cookie.get('auth')?.value
    const hasKey = cookie.has('auth')

    if (pathname.startsWith(route.dashboard)) {
      if (!hasKey && !value) {
        return NextResponse.redirect(new URL(route.signin, request.url))
      }
    }

    if (pathname.startsWith(route.signin) || pathname === '/') {
      if (hasKey && value) {
        return NextResponse.redirect(new URL(route.dashboard, request.url))
      }
    }

    return middleware(request, next)
  }
}

export default withProtectedRoute
