'use client'

import cls from 'classnames'

import Button from '@/app/_components/button'
import Text from '@/app/_components/text'
import Input from '@/app/_components/input'

import { useForm } from './use-form'

export default function Form() {
  const { register, onSubmit, errors } = useForm()

  return (
    <form
      className='flex flex-col w-full px-10 lg:px-[137px]'
      onSubmit={onSubmit}>
      <Input
        id='username'
        label='USER'
        type='text'
        placeholder='User'
        errorMessage={errors.username?.message}
        {...register('username')}
      />

      <Input
        id='password'
        label='PASSWORD'
        type='password'
        placeholder='Password'
        classNameLabel={cls({
          'mt-4': !errors.password?.message || !errors.password?.message
        })}
        errorMessage={errors.password?.message}
        {...register('password')}
      />

      <Button type='submit' className='mt-8'>
        <Text
          as='span'
          size='md'
          className='font-lucida-reg text-yellow-106-2 uppercase'>
          Login
        </Text>
      </Button>
    </form>
  )
}
