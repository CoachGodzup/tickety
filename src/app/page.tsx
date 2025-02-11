'use client'

import { AppShell, Container, Group } from '@mantine/core'
import React, { Suspense } from 'react'
import { ColorSchemeSwitch } from './component/colorSchemeSwitch/colorSchemeSwitch'
import { MyFooter } from './component/footer/MyFooter'
import CardList from './component/list/cardList'
import { Creator } from './component/modal/creator/creator'
import { Providers } from './providers'

const App: React.FC = () => {
  return (
    <Providers>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Group>
            <h3 style={{ paddingLeft: '1em' }}>Tickety</h3>
            <ColorSchemeSwitch></ColorSchemeSwitch>
          </Group>
        </AppShell.Header>

        <AppShell.Main>
          <Container fluid>
            <Suspense fallback="loading...">
              <CardList></CardList>
            </Suspense>
          </Container>
          <Creator />
        </AppShell.Main>

        <AppShell.Footer bg="#111" c="#eee" ta="center">
          <MyFooter></MyFooter>
        </AppShell.Footer>
      </AppShell>
    </Providers>
  )
}

export default App
