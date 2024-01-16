import cls from 'classnames'
import './text.css'

type PropsText = {
  as?: Extract<
    keyof JSX.IntrinsicElements,
    'span' | 'p' | 'label' | 'h1' | 'h2'
  >
  onClick?: () => void
  htmlFor?: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  [rest: string]: any
}

function Text(props: PropsText) {
  const { children, as: ElementText = 'p', className, size, ...rest } = props

  return (
    <ElementText
      className={cls('font-semibold text tracking-[2px]', className, {
        'text-[12px]': size === 'sm',
        'text-[14px]': size === 'md',
        'text-[16px]': size === 'lg',
        'text-[24px]': size === 'xl',
        'text-[34px]': size === '2xl',
        'text-[48px]': size === '3xl',
        'text-[60px]': size === '4xl'
      })}
      {...rest}>
      {children}
    </ElementText>
  )
}

export default Text
