'use client'

import type { RootState } from '../root.store'
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import {
  addCard,
  editCard,
  removeCard,
  sortCard,
  toggleCard,
} from '../card.reducer'

export const localStorageMiddleware = createListenerMiddleware()

localStorageMiddleware.startListening({
  matcher: isAnyOf(addCard, editCard, sortCard, toggleCard, removeCard),
  effect: (_, listenerApi) =>
    localStorage && localStorage.setItem(
      'todo',
      JSON.stringify((listenerApi.getState() as RootState).cards),
    ),
})
