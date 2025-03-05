import type { PayloadAction } from '@reduxjs/toolkit'
import type { Card } from '../model/card'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

interface CardStore {
  cards: Card[],
  badges: string[],
}

// Define initial state
const initialState: CardStore = {
  cards: [],
  badges: [],
}

function sortByAsc(a: Card, b: Card): -1 | 1 {
  return a.title > b.title ? 1 : -1
}

function sortByDesc(a: Card, b: Card): -1 | 1 {
  return a.title < b.title ? 1 : -1
}

const updateCardsAndBadges = (
  newCards: Card[], 
  state: CardStore) => ({
    ...state,
    cards: [
      ...newCards,
    ],
    badges: refreshBadges(newCards)
});

const refreshBadges = (cards: Card[]): string[] => {
  return [
    ...new Set(
      cards
        .flatMap((card) => card.badges)
        .filter((badge) => badge)
  )]
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
        card.id === action.payload.id
          ? { ...card, isDone: !card.isDone }
          : card
      ),
    }),
    sortCard: (state: CardStore, action: PayloadAction<{ asc: boolean }>) => ({
      ...state,
      cards: [...state.cards].sort((a, b) =>
        action.payload.asc ? sortByAsc(a, b) : sortByDesc(a, b)
      ),
    }),
    editCard: (state: CardStore, action: PayloadAction<Card>) => (
      updateCardsAndBadges(
        state.cards
          .map((card) => card.id === action.payload.id ? action.payload : card)
        , state)
    ),
    removeCard: (state: CardStore, action: PayloadAction<{ id: string }>) => (
      updateCardsAndBadges(
          state.cards.filter((card) => card.id !== action.payload.id)
      , state)
    ),
    uploadCards: (state: CardStore, action: PayloadAction<Card[]>) => (
      updateCardsAndBadges(action.payload, state)
    ),
    resetCards: (state: CardStore) => ({
      ...state,
      cards: [],
      badges: [],
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
