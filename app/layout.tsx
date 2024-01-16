import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'

import ProviderQuery from './_providers/provider-query'
import { localFonts } from './_fonts/fonts'
import ProviderHydrated from './_providers/provider-hydrated'

export const metadata: Metadata = {
  title: 'The lord of the rings - Universe Tolkien',
  description: 'The lord of the rings - Universe Tolkien'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={localFonts}>
        <ProviderQuery>
          <ProviderHydrated>{children}</ProviderHydrated>
        </ProviderQuery>
      </body>
    </html>
  )
}
