import { Card } from './card';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const CardStore = () => {};

type CardStore = {
  cards: Card[];
};

// Define initial state
const initialState: CardStore = {
  cards: [
    {
      title: 'Test Card',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus felis, vehicula vitae diam ut, hendrerit tempor sem. Quisque tristique, ipsum a hendrerit dictum, nisl felis dictum elit, a tempor sapien odio id nunc. ',
      isDone: false,
      id: '1',
    },
    {
      title: 'Test Card 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus felis, vehicula vitae diam ut, hendrerit tempor sem. Quisque tristique, ipsum a hendrerit dictum, nisl felis dictum elit, a tempor sapien odio id nunc. ',
      isDone: false,
      id: '2',
    },
  ],
};

// Create slice
const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state: CardStore, action: PayloadAction<Card>) => {
      if (!state.cards.find((card) => card.id === action.payload.id)) {
        state.cards.push(action.payload);
      }
    },
    toggleCard: (state: CardStore, action: PayloadAction<{ id: string }>) => {
      const card = state.cards.find((card) => card.id === action.payload.id);
      if (card) {
        card.isDone = !card.isDone;
      }
    },
    removeCard: (state: CardStore, action: PayloadAction<{ id: string }>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
  },
});

// Export actions
export const { addCard, toggleCard, removeCard } = cardSlice.actions;

// Create reducer
export const cardReducer = cardSlice.reducer;

// Create store (for testing)
export const store = configureStore({
  reducer: cardReducer,
});
