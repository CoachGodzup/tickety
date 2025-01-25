import { Card } from './card';
import { configureStore, createSlice, createStore, PayloadAction, UnknownAction } from '@reduxjs/toolkit';

export const CardStore = () => { }

type CardStore = {
    cards: Card[],
}

// Define initial state
const initialState: CardStore = {
    cards: [{
        title: 'Test Card',
        body: 'Test Card',
        isDone: false,
        id: '1',
    }, {
        title: 'Test Card 2',
        body: 'Test Card',
        isDone: false,
        id: '2',
    }],
};

// Create slice
const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state: CardStore, action: PayloadAction<Card>) => {
            if (!state.cards.find(card => card.id === action.payload.id)) {
                state.cards.push(action.payload);
            }
        },
        toggleCard: (state: CardStore, action: PayloadAction<{ id: string }>) => {
            const card = state.cards.find(card => card.id === action.payload.id);
            if (card) {
                card.isDone = !card.isDone;
            }
        },
        removeCard: (state: CardStore, action: PayloadAction<{ id: string }>) => {
            state.cards = state.cards.filter(card => card.id !== action.payload.id);
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
})
