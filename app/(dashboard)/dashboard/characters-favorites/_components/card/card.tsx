'use client'

import { useCharactersFavorites } from '@/app/(dashboard)/dashboard/_store'
import Button from '@/app/_components/button'
import Text from '@/app/_components/text'

import Paragraph from './paragraph'
import NotFound from '@/app/(dashboard)/dashboard/race/[name]/_components/table/not-found'

export default function Card() {
  const charactersFavorites = useCharactersFavorites(
    (state) => state.charactersFavorites
  )
  const removeCharacterFavorite = useCharactersFavorites(
    (state) => state.actions?.removeCharacterFavorite
  )

  return (
    <>
      <Text
        className='font-harrington text-brown-106-1 !font-normal text-center my-10'
        size='3xl'>
        Characters Favorites
      </Text>

      {charactersFavorites?.length > 0 ? (
        <section className='flex flex-wrap gap-x-4 justify-center px-32'>
          {charactersFavorites.map((character) => (
            <div
              key={character._id}
              className='w-full max-w-sm bg-dark border-2 border-yellow-106-2 shadow p-10'>
              <Paragraph title='Race' subtitle={character.race} />
              <Paragraph title='Name' subtitle={character.name} />
              <Paragraph title='Gender' subtitle={character.gender} />
              <Paragraph title='Birth' subtitle={character.birth} />
              <Paragraph title='Death' subtitle={character.death} />
              <Paragraph title='Hair' subtitle={character.hair} />

              <footer className='flex justify-center flex-col space-y-4 items-center'>
                {character.wikiUrl ? (
                  <a href={character.wikiUrl} target='_blank' rel='noreferrer'>
                    <Text
                      as='span'
                      className='font-harrington underline text-yellow-106-2 text-center w-full'>
                      Show detail
                    </Text>
                  </a>
                ) : null}

                <Button
                  onClick={() => removeCharacterFavorite?.(character._id)}>
                  <Text
                    as='span'
                    size='md'
                    className='font-lucida-reg text-yellow-106-2 uppercase'>
                    Remove character
                  </Text>
                </Button>
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
