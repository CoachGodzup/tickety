import React from 'react'
import Main from './main'
import { Providers } from './providers'
import { SpeedInsights } from '@vercel/speed-insights/next'

const App: React.FC = () => {
  return (
    <Providers>
      <SpeedInsights />
      <Main></Main>
    </Providers>
  )
}

export default App
