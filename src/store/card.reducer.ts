import type { PayloadAction } from '@reduxjs/toolkit'
import type { Card } from '../model/card'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

interface CardStore {
  cards: Card[]
  badges: Record<string, number>
}

// Define initial state
const initialState: CardStore = {
  cards: [],
  badges: {},
}

// TODO: convert badges array into a map of badge to count

function sortByAsc(a: Card, b: Card): -1 | 1 {
  return a.title > b.title ? 1 : -1
}

function sortByDesc(a: Card, b: Card): -1 | 1 {
  return a.title < b.title ? 1 : -1
}

const updateCardsAndBadges = (newCards: Card[], state: CardStore) => ({
  ...state,
  cards: [...newCards],
  badges: refreshBadges(newCards),
})

const refreshBadges = (cards: Card[]): Record<string, number> => {
  return cards
    .map((card) => card.badges)
    .flat()
    .filter((badge) => badge)
    .map((badge) => badge.toLowerCase().trim())
    .reduce(
      (acc, badge) => {
        if (!acc[badge]) {
          acc[badge] = 1
        } else {
          acc[badge]++
        }
        return acc
      },
      {} as Record<string, number>
    )
}

// Create slice
const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state: CardStore, action: PayloadAction<Card>) => {
      if (state.cards.find((card) => card.id === action.payload.id)) {
        return state
      }
      return updateCardsAndBadges([...state.cards, action.payload], state)
    },
    toggleCard: (state: CardStore, action: PayloadAction<{ id: string }>) => ({
      ...state,
      cards: state.cards.map((card) =>
        card.id === action.payload.id ? { ...card, isDone: !card.isDone } : card
      ),
    }),
    sortCard: (state: CardStore, action: PayloadAction<{ asc: boolean }>) => ({
      ...state,
      cards: [...state.cards].sort((a, b) =>
        action.payload.asc ? sortByAsc(a, b) : sortByDesc(a, b)
      ),
    }),
    editCard: (state: CardStore, action: PayloadAction<Card>) =>
      updateCardsAndBadges(
        state.cards.map((card) =>
          card.id === action.payload.id ? action.payload : card
        ),
        state
      ),
    removeCard: (state: CardStore, action: PayloadAction<{ id: string }>) =>
      updateCardsAndBadges(
        state.cards.filter((card) => card.id !== action.payload.id),
        state
      ),
    uploadCards: (state: CardStore, action: PayloadAction<Card[]>) =>
      updateCardsAndBadges(action.payload, state),
    resetCards: (state: CardStore) => ({
      ...initialState,
    }),
  },
})

// Export actions
export const {
  addCard,
  editCard,
  sortCard,
  toggleCard,
  removeCard,
  uploadCards,
  resetCards,
} = cardSlice.actions

// Create reducer
export const cardReducer = cardSlice.reducer

// Create store (for testing)
export const store = configureStore({
  reducer: cardReducer,
})

setupListeners(store.dispatch)
