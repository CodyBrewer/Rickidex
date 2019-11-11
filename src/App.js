import React from 'react';
import Characters from './components/Characters/Characters';
import { CenterApp, Header } from './components/Styles';

function App() {
  return (
    <CenterApp>
      <Header>
        <h2>Welcome To a Rick and Morty App </h2>
        <h3>Wubba lubba dub dub!</h3>
      </Header>
      <Characters />
    </CenterApp>
  );
}

export default App;
