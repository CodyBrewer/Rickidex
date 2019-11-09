import React from 'react';
import Characters from './components/Characters/Characters';
import { CenterApp, Header } from './components/Styles';

function App() {
  return (
    <CenterApp>
      <Header>Welcome To a Rick and Morty App, Wubba lubba dub dub!</Header>
      <Characters />
    </CenterApp>
  );
}

export default App;
