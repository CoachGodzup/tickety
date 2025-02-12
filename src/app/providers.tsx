// https://stackoverflow.com/questions/77400272/setting-up-redux-toolkit-with-next-js-14-0-1
'use client'
import { MantineProvider } from '@mantine/core'

import React from 'react'

import { Provider } from 'react-redux'
import { rootStore } from './store/root.store'
import '@mantine/core/styles.css'

const theme = {}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={rootStore}>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        {children}
      </MantineProvider>
    </Provider>
  )
}
