'use client'

import {
  AppShell,
  Burger,
  Button,
  Container,
  Group,
  Portal,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { Suspense } from 'react'
import { ColorSchemeSwitch } from '../component/colorSchemeSwitch/colorSchemeSwitch'
import { MyFooter } from '../component/footer/MyFooter'
import CardList from '../component/list/cardList'
import { Logo } from '../component/logo/logo'
import { Creator } from '../component/modal/creator/creator'
import { Navbar } from '../component/navbar/navbar'
import { About as ModalAbout } from '../component/modal/about'
import { Download } from '@/component/navbar/download'

const Main: React.FC = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false)
  const [aboutOpened, { toggle: toggleAbout }] = useDisclosure(false)

  return (
    <>
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
          <Group pl={20}>
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
            <Button component="a" variant='transparent' onClick={toggleAbout}>
              About
            </Button>
            <div style={{ marginLeft: 'auto', marginRight: 20 }}>
              <Download></Download>
            </div>
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
          <Portal>
            <Suspense fallback="loading...">
              <ModalAbout opened={aboutOpened} onClose={toggleAbout} />
            </Suspense>
          </Portal>
        </AppShell.Main>

        <AppShell.Footer bg="#111" c="#eee" ta="center">
          <MyFooter></MyFooter>
        </AppShell.Footer>
      </AppShell>
    </>
  )
}

export default Main
