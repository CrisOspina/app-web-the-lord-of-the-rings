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
          as='h1'
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

            <div className='absolute bottom-[450px] right-10 lg:static lg:w-auto flex justify-center bg-transparent transition-all duration-500 ease-in-out'>
              <Link
                className='mt-8'
                href={gollum?.wikiUrl ?? ''}
                target='_blank'
                rel='noreferrer'>
                <Text
                  as='span'
                  size='md'
                  className='font-lucida-reg text-yellow-106-2 uppercase w-auto flex justify-center p-[11px] px-[38px] border-2 border-yellow-106-2 bg-transparent transition-all duration-500 ease-in-out'>
                  More details
                </Text>
              </Link>
            </div>

            <div className='absolute lg:static bottom-64 w-80 right-24'>
              <CardQuotes id={id} />
            </div>
          </>
        )}
      </div>
    </>
  )
}
