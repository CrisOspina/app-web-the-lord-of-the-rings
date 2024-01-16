import { DocsCharacter } from '..'
import type { Pagination } from './pagination'

interface CharacterById extends Pagination {
  docs: DocsCharacter[]
}

export type { CharacterById }
