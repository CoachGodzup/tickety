import type { RootState } from './root.store'
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import { addCard, editCard, removeCard, toggleCard } from './card.reducer'

export const sessionStorageMiddleware = createListenerMiddleware()

sessionStorageMiddleware.startListening({
  matcher: isAnyOf(addCard, toggleCard, editCard, removeCard),
  effect: (_, listenerApi) =>
    sessionStorage.setItem(
      'todo',
      JSON.stringify((listenerApi.getState() as RootState).cards),
    ),
})
