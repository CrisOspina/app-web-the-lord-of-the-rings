import { ReactNode } from 'react'
import { FormProvider as Provider, useForm } from 'react-hook-form'

/**
 * for components that use react-hook-form with provider
 */

export default function FormProvider({ children }: { children: ReactNode }) {
  const formMethods = useForm()
  return <Provider {...formMethods}>{children}</Provider>
}
