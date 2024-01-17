import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { type DocsCharacter } from '@/app/api/_external-libs/the-open-api-v2'

type InitialState = { charactersFavorites: DocsCharacter[] }

type Actions = {
  actions?: {
    addCharacterFavorite: (character: DocsCharacter) => void
    setInitialState: () => void
    removeCharacterFavorite: (id: string) => void
  }
}

type Store = InitialState & Actions

const initialState: InitialState = {
  charactersFavorites: []
}

export const KEY_STORAGE_CHARACTERS_FAVORITES = 'characters-favorites'

export const useCharactersFavorites = create<Store>()(
  persist(
    (set): Store => {
      return {
        ...initialState,
        actions: {
          addCharacterFavorite: (character) => {
            return set((state: Store) => ({
              charactersFavorites: state.charactersFavorites.concat(character)
            }))
          },
          setInitialState: () => set(() => initialState),
          removeCharacterFavorite: (id: string) => {
            return set((state: Store) => {
              const newCharactersFavorites = state.charactersFavorites.filter(
                (fav) => fav?._id !== id
              )

              return {
                charactersFavorites: newCharactersFavorites
              }
            })
          }
        }
      }
    },
    {
      name: KEY_STORAGE_CHARACTERS_FAVORITES,
      partialize: (state) => {
        return {
          charactersFavorites: state.charactersFavorites
        }
      }
    }
  )
)
