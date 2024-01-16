'use client'

import Button from '@/app/_components/button'
import Text from '@/app/_components/text'
import cls from 'classnames'

import { useForm } from './use-form'

export default function Form() {
  const { register, onSubmit, errors } = useForm()

  return (
    <form className='flex flex-col w-full px-[137px]' onSubmit={onSubmit}>
      <label htmlFor='username'>
        <Text
          as='span'
          size='md'
          className='font-lucida-reg font-normal text-brown-106-1 w-full'>
          USUARIO
        </Text>
      </label>

      <input
        {...register('username')}
        type='text'
        id='username'
        placeholder='Usuario'
        className='rounded-sm border-2 border-[#362A16] bg-blue-102-1 p-2 focus:ring-0 focus:outline-none focus-visible:ring-0 text-white'
      />

      {errors.username?.message ? (
        <Text
          as='p'
          size='sm'
          className='font-lucida-reg font-normal text-blue-101-2 my-2'>
          {errors.username?.message}
        </Text>
      ) : null}

      <label
        htmlFor='username'
        className={cls({
          'mt-4': !errors.username?.message || !errors.password?.message
        })}>
        <Text
          as='span'
          size='md'
          className='font-lucida-reg font-normal text-brown-106-1 w-full'>
          CONTRASEÑA
        </Text>
      </label>

      <input
        {...register('password')}
        type='password'
        placeholder='Contraseña'
        className='rounded-sm border-2 border-[#362A16] bg-blue-102-1 p-2 focus:ring-0 focus:outline-none focus-visible:ring-0 text-white'
      />

      {errors.password?.message ? (
        <Text
          as='p'
          size='sm'
          className='font-lucida-reg font-normal text-blue-101-2 mt-2'>
          {errors.password?.message}
        </Text>
      ) : null}

      <Button type='submit' className='mt-8'>
        <Text
          as='span'
          size='md'
          className='font-lucida-reg text-yellow-106-2 uppercase'>
          Ingresar
        </Text>
      </Button>
    </form>
  )
}
