'use client'

import Text from '@/app/_components/text'

import { useCharacterQuoteById } from '@/app/_hooks'
import Spinner from '@/app/_components/spinner'

const [ID_MAIN, ID_SECONDARY] = [
  '5cd96e05de30eff6ebcce816',
  '5cd96e05de30eff6ebccec42'
]

type Props = { id: string }

export default function CardQuotes({ id }: Props) {
  const { query } = useCharacterQuoteById({
    id
  })

  const quoteMain = query?.data?.docs?.find((quote) => quote._id === ID_MAIN)

  const quoteSecondary = query?.data?.docs?.find(
    (quote) => quote._id === ID_SECONDARY
  )

  if (query.isLoading) return <Spinner />

  return (
    <>
      <Text
        as='p'
        className='font-lucida-reg text-brown-104-1 !font-normal leading-6 text-left lg:text-center mt-[30px]'
        size='lg'>
        {quoteMain?.dialog ?? ''}
      </Text>

      <Text
        as='p'
        className='font-lucida-reg text-brown-104-1 !font-normal leading-6 text-left lg:text-center mt-2'
        size='lg'>
        {quoteSecondary?.dialog ?? ''}
      </Text>
    </>
  )
}
