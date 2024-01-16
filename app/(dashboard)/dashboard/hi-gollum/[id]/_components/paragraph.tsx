import Text from '@/app/_components/text'

type Props = {
  title: string
  subtitle: string
}

export default function Paragraph({ title, subtitle }: Props) {
  return (
    <Text
      as='p'
      className='font-lucida-reg text-brown-106-1 !font-normal leading-6 text-center mt-[23px]'
      size='lg'>
      {title}:{' '}
      <Text
        as='span'
        className='font-lucida-reg !font-normal leading-6 text-white-100'
        size='lg'>
        {subtitle}
      </Text>
    </Text>
  )
}
