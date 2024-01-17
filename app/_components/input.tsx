import { forwardRef } from 'react'
import cls from 'classnames'

import Text from '@/app/_components/text'

type Props = JSX.IntrinsicElements['input'] & {
  errorMessage?: string
  label?: string
  classNameLabel?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { children, className, errorMessage, label, classNameLabel, ...rest },
    propRef
  ) => {
    return (
      <>
        <label
          htmlFor={rest.id}
          className={cls(
            'font-lucida-reg font-normal text-brown-106-1 w-full mb-1',
            classNameLabel
          )}>
          <Text
            as='span'
            size='md'
            className='font-lucida-reg font-normal text-brown-106-1 w-full'>
            {label}
          </Text>
        </label>

        <input
          ref={propRef}
          className={cls(
            `font-lucida-reg rounded-sm border-2 border-[#362A16] bg-blue-102-1 p-2 focus:ring-0 focus:outline-none focus-visible:ring-0 text-white placeholder:font-harrington`,
            className
          )}
          {...rest}
        />

        {errorMessage ? (
          <Text
            as='p'
            size='sm'
            className='font-lucida-reg font-normal text-blue-101-2 my-2'>
            {errorMessage}
          </Text>
        ) : null}
      </>
    )
  }
)

Input.displayName = 'Input'

export default Input
