import React from 'react';
import { Provider } from 'react-redux';
import CardEditor from './component/cardEditor';
import CardList from './component/cardList';
import { rootState } from './store/root.reducer'; // Adjust the path as necessary

const App: React.FC = () => {
  return (
    <Provider store={rootState}>
      <div>
      <h1>Welcome to Tickety</h1>
      {/* Add your components here */}
      <CardEditor />
      <CardList />
      </div>
    </Provider>
  );
};

export default App;