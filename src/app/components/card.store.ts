import { createStore } from 'redux';
import { Card } from './card';

export const CardStore = () => { }

// Define action types and payloads
export type CARD_LIST_ACTION = 'ADD_CARD' | 'TOGGLE_CARD' | 'REMOVE_CARD';

export type AddCardAction = {
    type: 'ADD_CARD';
    payload: Card;
}

export type ToggleCardAction = {
    type: 'TOGGLE_CARD';
    payload: {
        id: string;
    }
}

export type RemoveCardAction = {
    type: 'REMOVE_CARD';
    payload: {
        id: string;
    }
}

export type Action = AddCardAction | ToggleCardAction | RemoveCardAction;

// Define action creators
export const addCard = (card: Card): AddCardAction => ({
    type: 'ADD_CARD',
    payload: card,
});

export const toggleCard = (cardId: string): ToggleCardAction => ({
    type: 'TOGGLE_CARD',
    payload: {
        id: cardId,
    },
});

export const removeCard = (cardId: string): RemoveCardAction => ({
    type: 'REMOVE_CARD',
    payload: {
        id: cardId,
    },
});

// Define initial state
const initialState = {
    cards: [] as Card[],
};

// Define reducer
const cardReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, action.payload],
            };
        case 'TOGGLE_CARD':
            return {
                ...state,
                cards: state.cards.map(card => {
                    if (card.id === action.payload.id) {
                        return {
                            ...card,
                            isDone: !card.isDone,
                        };
                    }
                    return card;
                }),
            };
        case 'REMOVE_CARD':
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.payload.id),
            };
        default:
            return state;
    }
};

// Create store
export const store = createStore(cardReducer);