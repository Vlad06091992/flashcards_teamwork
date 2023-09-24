import { baseApi } from '@/services/base-api.ts'
import { DecksParams, getDecksResponse, Deck } from '@/services/decks/types.ts'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<getDecksResponse, DecksParams>({
        query: params => ({
          url: `v1/decks`,
          method: 'GET',
          params: params ?? {},
        }),
        providesTags: ['Decks'],
      }),

      createDeck: builder.mutation<Deck, { name: string }>({
        query: body => ({
          url: `v1/decks`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Decks'],
      }),
    }
  },
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi
