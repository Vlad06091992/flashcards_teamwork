import { useState } from 'react'

import { Textfield, Button } from '@/components'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decks.ts'
import { Deck } from '@/services/decks/types.ts'

export const Decks = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [search, setSearch] = useState('')

  const decks = useGetDecksQuery({ itemsPerPage, name: search })
  const [createDeck, { isLoading }] = useCreateDeckMutation()

  return (
    <div>
      <Button disabled={isLoading} onClick={() => createDeck({ name: '123' })}>
        {' '}
        create deck
      </Button>
      <Textfield
        value={search}
        onChange={e => {
          setSearch(e.currentTarget.value)
        }}
      />
      <Button onClick={() => setItemsPerPage(10)}> 10</Button>
      <Button onClick={() => setItemsPerPage(20)}> 20</Button>
      <Button onClick={() => setItemsPerPage(30)}> 30</Button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cards</th>
            <th>Last Updated</th>
            <th>Created by</th>
          </tr>
        </thead>

        <tbody>
          {decks.data?.items.map((deck: Deck) => {
            return (
              <tr key={deck.id}>
                <td>{deck.name}</td>
                <td>{deck.cardsCount}</td>
                <td>{deck.updated}</td>
                <td>{deck.author.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
