import React from 'react';
import CardEditor from './component/cardEditor';
import CardList from './component/cardList';
import { Providers } from './providers';
import { Container } from '@mantine/core';

const App: React.FC = () => {
  return (
    <Providers>
      <Container>
        <h1>Welcome to Tickety</h1>
        <CardEditor></CardEditor>
        <CardList></CardList>
      </Container>
    </Providers>
  );
};

export default App;

/*

    <Providers>
      <div>      
        <h1>Welcome to Tickety</h1>
        <CardEditor />
        <CardList />
      </div>
    </Providers>

<Provider store={rootState}>
      <div>
      <h1>Welcome to Tickety</h1>
      <CardEditor />
      <CardList />
      </div>
    </Provider>

*/