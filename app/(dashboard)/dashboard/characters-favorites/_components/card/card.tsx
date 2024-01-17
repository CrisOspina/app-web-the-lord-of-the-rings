/* eslint-disable @next/next/no-img-element */
'use client'

import { useCharactersFavorites } from '@/app/(dashboard)/dashboard/_store'
import Text from '@/app/_components/text'

import Paragraph from './paragraph'
import NotFound from '@/app/(dashboard)/dashboard/race/[name]/_components/table/not-found'

const getValue = (value: string) => {
  if (value === 'NaN' || !value) return ''
  return value
}

export default function Card() {
  const charactersFavorites = useCharactersFavorites(
    (state) => state.charactersFavorites
  )
  const removeCharacterFavorite = useCharactersFavorites(
    (state) => state.actions?.removeCharacterFavorite
  )

  return (
    <>
      {charactersFavorites?.length > 0 ? (
        <section className='flex flex-wrap gap-12 justify-center p-[61px]'>
          {charactersFavorites.map((character) => (
            <div
              key={character._id}
              className='w-full max-w-sm py-[33px] px-[20px] border-[1.8px] border-brown-105-1 bg-[#1B2526] hover:bg-yellow-106-2/5'>
              <Text
                className='font-lucida-reg text-brown-106-1 !font-normal text-center'
                size='4xl'>
                {character.name}
              </Text>

              <Paragraph title='Race' subtitle={character.race} />
              <Paragraph title='Name' subtitle={character.name} />
              <Paragraph title='Gender' subtitle={getValue(character.gender)} />
              <Paragraph title='Birth' subtitle={getValue(character.birth)} />
              <Paragraph title='Death' subtitle={getValue(character.death)} />
              <Paragraph title='Hair' subtitle={getValue(character.hair)} />

              <footer className='flex justify-center flex-col space-y-4 items-center'>
                <Text
                  as='span'
                  size='md'
                  className='font-lucida-reg text-yellow-106-2 uppercase cursor-pointer flex gap-x-2 items-center mt-4'
                  onClick={() => removeCharacterFavorite?.(character._id)}>
                  Remove <img src='/icons/remove.svg' alt='icon delete' />
                </Text>

                {character.wikiUrl ? (
                  <a
                    href={character.wikiUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='p-[11px] px-[38px] border-2 border-yellow-106-2 bg-transparent transition-all duration-500 ease-in-out'>
                    <Text
                      as='span'
                      className='font-lucida-reg text-yellow-106-2 uppercase cursor-pointer'>
                      Show detail
                    </Text>
                  </a>
                ) : null}
              </footer>
            </div>
          ))}
        </section>
      ) : (
        <NotFound />
      )}
    </>
  )
}
