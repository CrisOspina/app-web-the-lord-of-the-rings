import type { Pagination } from './pagination'

type DocsCharacterQuoteById = {
  _id: string
  dialog: string
  movie: string
  character: string
  id: string
}

interface CharacterQuoteById extends Pagination {
  docs: DocsCharacterQuoteById[]
}

export type { CharacterQuoteById, DocsCharacterQuoteById }
