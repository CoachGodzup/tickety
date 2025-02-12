import React from 'react'
import Main from './main'
import { Providers } from './providers'

const App: React.FC = () => {
  return (
    <Providers>
      <Main></Main>
    </Providers>
  )
}

export default App
