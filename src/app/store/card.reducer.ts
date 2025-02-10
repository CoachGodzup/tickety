import type { PayloadAction } from '@reduxjs/toolkit'
import type { Card } from './card'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

interface CardStore {
  cards: Card[]
}

// Define initial state
const initialState: CardStore = {
  cards: [],
}

// Create slice
const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state: CardStore, action: PayloadAction<Card>) => {
      if (state.cards.find(card => card.id === action.payload.id)) {
        return state
      }
      return { ...state, cards: [...state.cards, action.payload] }
    },
    toggleCard: (state: CardStore, action: PayloadAction<{ id: string }>) => {
      return { ...state, cards: [...state.cards.map(card => card.id === action.payload.id ? { ...card, isDone: !card.isDone } : card)] }
    },
    editCard: (state: CardStore, action: PayloadAction<Card>) => {
      return { ...state, cards: [...state.cards.map(card => card.id === action.payload.id ? { ...card, ...action.payload } : card)] }
    },
    removeCard: (state: CardStore, action: PayloadAction<{ id: string }>) => {
      return { ...state, cards: state.cards.filter(card => card.id !== action.payload.id) }
    },
  },

})

// Export actions
export const { addCard, editCard, toggleCard, removeCard } = cardSlice.actions

// Create reducer
export const cardReducer = cardSlice.reducer

// Create store (for testing)
export const store = configureStore({
  reducer: cardReducer,
})

setupListeners(store.dispatch)
