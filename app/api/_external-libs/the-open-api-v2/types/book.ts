type Book = {
  docs: { _id: string; name: string }[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export type { Book }
