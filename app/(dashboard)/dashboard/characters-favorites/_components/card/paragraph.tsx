'use client'

import Text from '@/app/_components/text'

export default function Paragraph({
  title,
  subtitle
}: {
  title: string
  subtitle: string
}) {
  return (
    <>
      {title && subtitle ? (
        <Text
          as='p'
          className='text-left font-lucida-reg text-brown-106-1 !font-normal leading-6 mt-[23px] mb-3 uppercase'
          size='sm'>
          {title}:{' '}
          <Text
            as='span'
            className='font-lucida-reg !font-normal leading-6 text-white-100'
            size='sm'>
            {subtitle}
          </Text>
        </Text>
      ) : null}
    </>
  )
}
