import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'

import ProviderQuery from './_providers/provider-query'
import { localFonts } from './_fonts/fonts'
import ProviderHydrated from './_providers/provider-hydrated'

export const metadata: Metadata = {
  title: 'El Señor de los Anillos - Universo Tolkien',
  description: 'El Señor de los Anillos - Universo Tolkien - App'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body className={localFonts}>
        <ProviderQuery>
          <ProviderHydrated>{children}</ProviderHydrated>
        </ProviderQuery>
      </body>
    </html>
  )
}
