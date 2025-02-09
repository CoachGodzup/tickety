// https://stackoverflow.com/questions/77400272/setting-up-redux-toolkit-with-next-js-14-0-1
'use client'
import React from 'react'

import '@mantine/core/styles.css'

import { Provider } from 'react-redux'
import { rootStore } from './store/root.store'
import { MantineProvider } from '@mantine/core'

const theme = {}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={rootStore}>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        {children}
      </MantineProvider>
    </Provider>
  )
}
