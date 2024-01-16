import cls from 'classnames'
import { type ReactNode, forwardRef } from 'react'

import './button.css'

type Props = { children: ReactNode } & JSX.IntrinsicElements['button']

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...rest }, propRef) => {
    return (
      <button
        ref={propRef}
        className={cls(
          `p-[11px] px-[38px] border-2 border-yellow-106-2 bg-transparent transition-all duration-500 ease-in-out`,
          className
        )}
        {...rest}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
