import React from 'react';
import Characters from './components/Characters/Characters';
import { CenterApp } from './components/Styles';

function App() {
  return (
    <CenterApp>
      <h2>Welcome To a Rick and Morty App, Wubba lubba dub dub!</h2>
      <Characters />
    </CenterApp>
  );
}

export default App;
