import { configureStore } from '@reduxjs/toolkit'
import { cardReducer } from './card.reducer'
import { sessionStorageMiddleware } from './sessionStorageMiddleware'

const rootReducer = {
  cards: cardReducer,
}

const preloadedState = sessionStorage.getItem('todo')
const defaultState = [
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
]

export const rootStore = configureStore({
  preloadedState: { cards: preloadedState ? JSON.parse(preloadedState) : { cards: defaultState } },
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sessionStorageMiddleware.middleware),
})

export type RootState = ReturnType<typeof rootStore.getState>
