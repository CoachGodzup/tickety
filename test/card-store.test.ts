import { addCard, toggleCard, removeCard, cardReducer } from '../src/app/store/card.reducer';
import { Card } from '../src/app/store/card';
import { configureStore } from '@reduxjs/toolkit';

const createMockCard = (): Card => ({ id: '1', title: 'Test Card', body: 'Test Card', isDone: false });

describe('Card Store', () => {
    const store = configureStore({
        reducer: cardReducer,
    })

    it('should add a card', () => {
        const card = createMockCard();
        store.dispatch(addCard(card));
        const state = store.getState();
        expect(state.cards).toContainEqual(card);
    });

    it('should toggle a card', () => {
        const card = createMockCard();
        store.dispatch(addCard(card));
        store.dispatch(toggleCard({id: card.id}));
        const state = store.getState();
        const toggledCard = state.cards.find(c => c.id === card.id);
        expect(toggledCard?.isDone).toBe(true);
    });

    it('should remove a card', () => {
        const card = createMockCard();
        store.dispatch(addCard(card));
        store.dispatch(removeCard({id: card.id}));
        const state = store.getState();
        expect(state.cards).not.toContainEqual(card);
    });


    it('should not add a duplicate id card', () => {
        const newCard = createMockCard();
        const duplicatedCard = {...newCard, title: 'Duplicated Card'};
        store.dispatch(addCard(newCard));
        store.dispatch(addCard(duplicatedCard));
        const state = store.getState();
        expect(state).not.toContain(duplicatedCard);
    });

    it('should not toggle a non-existing card', () => {
        const initialState = store.getState();
        store.dispatch(toggleCard({id:'non-existing-id'}));
        const state = store.getState();
        expect(state).toEqual(initialState);
    });

    it('should not remove a non-existing card', () => {
        const initialState = store.getState();
        store.dispatch(removeCard({id:'non-existing-id'}));
        const state = store.getState();
        expect(state).toEqual(initialState);
    });
});