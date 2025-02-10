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

const CardEditor = React.lazy(() => import('./component/editor/cardEditor'))

const App: React.FC = () => {
  const [opened, { toggle }] = useDisclosure()
  const [openCardEditor, handleCardEditor] = useDisclosure()

  return (
    <Providers>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <h3 style={{ paddingLeft: '1em' }}>Tickety</h3>
        </AppShell.Header>

        <AppShell.Main>
          <Portal>
            <Affix bottom={50} right={0}>
              <Button
                leftSection={<IconPlus size={14} />}
                size="xl"
                onClick={handleCardEditor.open}
                style={{ margin: '1em' }}
              >
                Create Card
              </Button>
            </Affix>
            <Modal
              opened={openCardEditor}
              onClose={handleCardEditor.close}
              title="Create Card"
            >
              <Modal.Body>
                <CardEditor modalHandler={handleCardEditor}></CardEditor>
              </Modal.Body>
            </Modal>
          </Portal>
          <Container size="xl">
            <CardList></CardList>
          </Container>
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
