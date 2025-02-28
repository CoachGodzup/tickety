'use client'

import type { RootState } from '../root.store'
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import {
  addCard,
  editCard,
  removeCard,
  resetCards,
  sortCard,
  toggleCard,
  uploadCards,
} from '../card.reducer'

export const localStorageMiddleware = createListenerMiddleware()

localStorageMiddleware.startListening({
  matcher: isAnyOf(
    addCard,
    editCard,
    sortCard,
    toggleCard,
    removeCard,
    uploadCards,
    resetCards
  ),
  effect: (_, listenerApi) =>
    localStorage &&
    localStorage.setItem(
      'todo',
      JSON.stringify((listenerApi.getState() as RootState).cards)
    ),
})
