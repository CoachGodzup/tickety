import {
  addCard,
  editCard,
  sortCard,
  toggleCard,
  removeCard,
} from '../card.reducer'
import type { RootState } from '../root.store'
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

export const localStorageMiddleware = createListenerMiddleware()

localStorageMiddleware.startListening({
  matcher: isAnyOf(addCard, editCard, sortCard, toggleCard, removeCard),
  effect: (_, listenerApi) =>
    localStorage.setItem(
      'todo',
      JSON.stringify((listenerApi.getState() as RootState).cards)
    ),
})
