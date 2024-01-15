'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { string, object } from 'yup'
import { createCookieAuth } from './action'

type FormProps = {
  username: string
  password: string
}

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

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({ resolver: yupResolver(schema) })

  const onSubmit = (data: FormProps) => createCookieAuth(data.username)

  return (
    <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('username')}
        type='text'
        placeholder='Usuario'
        className='text-black'
      />
      <p>{errors.username?.message}</p>

      <input {...register('password')} type='password' className='text-black' />
      <p>{errors.password?.message}</p>

      <button className='bg-slate-900 text-white rounded-md p-3'>
        Ingresar
      </button>
    </form>
  )
}
