'use client'

import Link from 'next/link'

import Text from '@/app/_components/text'

import { useCharacterById } from '@/app/_hooks'

import Paragraph from './paragraph'
import Spinner from '@/app/_components/spinner'
import CardQuotes from './card-quotes'

type Props = { id: string }

export default function Card({ id }: Props) {
  const { query: queryCharacter } = useCharacterById({ id })
  const gollum = queryCharacter.data?.docs[0]

  return (
    <>
      <div>
        <Text
          as='p'
          className='font-harrington text-brown-106-1 !font-normal text-center mb-4'
          size='4xl'>
          Gollum
        </Text>

        {queryCharacter.isLoading ? (
          <Spinner />
        ) : (
          <>
            <Paragraph title='Race' subtitle={gollum?.race ?? ''} />
            <Paragraph title='Gender' subtitle={gollum?.gender ?? ''} />
            <Paragraph title='Birth' subtitle={gollum?.birth ?? ''} />
            <Paragraph title='Death' subtitle={gollum?.death ?? ''} />

            <div className='w-full flex justify-center'>
              <Link
                className='mt-8'
                href={gollum?.wikiUrl ?? ''}
                target='_blank'
                rel='noreferrer'>
                <Text
                  as='span'
                  size='md'
                  className='font-lucida-reg text-yellow-106-2 uppercase'>
                  More details
                </Text>
              </Link>
            </div>

            <CardQuotes id={id} />
          </>
        )}
      </div>
    </>
  )
}
