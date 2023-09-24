export type Pagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export type Author = {
  id: string
  name: string
}

export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string | null
  rating: number
  isDeleted?: boolean
  isBlocked?: boolean
  created: string
  updated: string
  cardsCount: number
  author: Author
}

export type getDecksResponse = {
  maxCardsCount: number
  pagination: Pagination
  items: Deck[]
}

export type DecksParams = Partial<{
  minCardsCount: number
  maxCardsCount: number
  name: string
  orderBy: string
  currentPage: number
  itemsPerPage: number
}> | void
