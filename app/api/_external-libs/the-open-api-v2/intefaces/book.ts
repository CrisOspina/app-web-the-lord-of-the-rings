import type { Pagination } from './pagination'

type DocsBook = {
  _id: string
  name: string
}

interface Book extends Pagination {
  docs: DocsBook[]
}

export type { Book }
