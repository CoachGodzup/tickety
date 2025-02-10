'use client'

import {
  Affix,
  AppShell,
  Burger,
  Button,
  Container,
  Modal,
  Portal,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconPlus } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import CardList from './component/list/cardList'
import { Providers } from './providers'
import { Creator } from './component/modal/creator/creator'

const CardEditor = React.lazy(() => import('./component/modal/editor/editor'))

const App: React.FC = () => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <Providers>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <h3 style={{ paddingLeft: '1em' }}>Tickety</h3>
        </AppShell.Header>

        <AppShell.Main>
          <Container size="xl">
            <CardList></CardList>
          </Container>
          <Creator />
        </AppShell.Main>

        <AppShell.Footer bg="#111" c="#eee" ta="center">
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
  )
}

export default App
