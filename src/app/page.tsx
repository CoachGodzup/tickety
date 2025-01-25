'use client'

import React from 'react';
import CardEditor from './component/cardEditor';
import CardList from './component/cardList';
import { Providers } from './providers';
import { AppShell, Burger, Button, Container, Divider, Group, NavLink, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

const App: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const [isDark, setDark] = React.useState(false);

  return (
    <Providers>
      <AppShell
        header={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <h3 style={{'paddingLeft': '1em'}}>Tickety</h3>
        </AppShell.Header>
    
        <AppShell.Main>
          <Container size='md'>
            <CardEditor></CardEditor>
          </Container>
          <Container size='md'>
            <CardList></CardList>
          </Container>
        </AppShell.Main>
        <AppShell.Footer bg={'#111'} c={'#eee'} ta={'center'}>
          <p>Created with 🐾 by <Link style={{'textDecoration': 'none', 'color': '#eee', fontWeight:'b'}} href='https://github.com/CoachGodzup' rel='noreferrer noopener' target='_blank'>CoachGodzup</Link></p>
        </AppShell.Footer>

      </AppShell>
    </Providers>
  );
};

export default App;