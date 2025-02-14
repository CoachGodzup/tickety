import { configureStore } from '@reduxjs/toolkit'
import { cardReducer } from './card.reducer'
import { localStorageMiddleware } from './middleware/localStorageMiddleware'

const rootReducer = {
  cards: cardReducer,
}

const preloadedState = global.window?.localStorage ? localStorage.getItem('todo') : null
const defaultState = [
  {
    title: 'Tutorial 1',
    body: 'Press the button on the bottom right of the page and start taking notes!',
    isDone: false,
    id: '1',
  },
  {
    title: 'Tutorial 2',
    body: 'This is a note marked as "done"',
    isDone: true,
    id: '2',
  },
  {
    title: 'Tutorial 3',
    body: 'You can edit a note with the three dot menu on this card, or set as "done", or you can say a bitter farewell, deleting it',
    isDone: false,
    id: '3',
  },
]

export const rootStore = configureStore({
  preloadedState: {
    cards: preloadedState
      ? JSON.parse(preloadedState)
      : { cards: defaultState },
  },
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware.middleware),
})

export type RootState = ReturnType<typeof rootStore.getState>
