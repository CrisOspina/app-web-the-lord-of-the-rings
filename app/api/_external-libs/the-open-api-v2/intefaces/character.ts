import type { Pagination } from './pagination'

type DocsCharacter = {
  _id: string
  height: string
  race: string
  gender: string
  birth: string
  spouse: string
  death: string
  realm: string
  hair: string
  name: string
  wikiUrl: string
}

interface Character extends Pagination {
  docs: DocsCharacter[]
}

export type { Character, DocsCharacter }
