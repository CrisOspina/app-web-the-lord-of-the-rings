'use client'

import { useForm as useFormHook } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { string, object } from 'yup'
import { useSignin } from '@/app/_hooks'

type FormProps = { username: string; password: string }

const USERNAME_DEFAULT = 'smeagol'
const PASSWORD_DEFAULT = 'gollum'

const schema = object({
  username: string()
    .trim()
    .required('El nombre de usuario es requerido')
    .oneOf(
      [USERNAME_DEFAULT],
      'Usuario incorrecto, verifica e intentalo nuevamente'
    ),
  password: string()
    .trim()
    .required('La contraseña es requerida')
    .oneOf(
      [PASSWORD_DEFAULT],
      'Contraseña incorrecta, verifica e intentalo nuevamente'
    )
}).required()

export function useForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useFormHook<FormProps>({ resolver: yupResolver(schema) })
  const mutation = useSignin()

  const onSubmit = handleSubmit((data: FormProps) => {
    return mutation.mutate(data.username)
  })

  return {
    register,
    onSubmit,
    errors
  }
}
