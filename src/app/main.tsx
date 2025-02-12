'use client'

import { AppShell, Burger, Container, Group, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { Suspense } from 'react'
import { ColorSchemeSwitch } from './component/colorSchemeSwitch/colorSchemeSwitch'
import { MyFooter } from './component/footer/MyFooter'
import CardList from './component/list/cardList'
import { Logo } from './component/logo/logo'
import { Creator } from './component/modal/creator/creator'
import { Navbar } from './component/navbar/navbar'

const Main: React.FC = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group>
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Logo />
          <ColorSchemeSwitch></ColorSchemeSwitch>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

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
  )
}

export default Main
