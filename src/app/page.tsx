'use client'

import { AppShell, Container } from '@mantine/core'
import Link from 'next/link'
import React, { Suspense } from 'react'
import CardList from './component/list/cardList'
import { Creator } from './component/modal/creator/creator'
import { Providers } from './providers'

const App: React.FC = () => {
  return (
    <Suspense fallback="loading...">
      <Providers>
        <AppShell header={{ height: 60 }} padding="md">
          <AppShell.Header>
            <h3 style={{ paddingLeft: '1em' }}>Tickety</h3>
          </AppShell.Header>

          <AppShell.Main>
            <Container fluid>
              <Suspense fallback="loading...">
                <CardList></CardList>
              </Suspense>
            </Container>
            <Creator />
          </AppShell.Main>

          <AppShell.Footer bg="#111" c="#eee" ta="center" pt={{}}>
            <p>
              Created with 🐾 by
              {' '}
              <Link
                style={{ textDecoration: 'none', color: '#eee', fontWeight: 'b' }}
                href="https://github.com/CoachGodzup"
                rel="noreferrer noopener"
                target="_blank"
              >
                CoachGodzup
              </Link>
            </p>
          </AppShell.Footer>
        </AppShell>
      </Providers>
    </Suspense>
  )
}

export default App
