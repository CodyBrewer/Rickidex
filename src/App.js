import React from "react";
import Characters from "./components/Characters/Characters";
import { CenterApp, Header } from "./components/Styles";
import Rickidex from "./components/Rickidex/Rickidex";

function App() {
  return (
    <CenterApp>
      <Header>
        <h2>Welcome To a Rick and Morty App </h2>
        <h3>Wubba lubba dub dub!</h3>
      </Header>
      {/* <Characters /> */}
      <Rickidex />
    </CenterApp>
  );
}

export default App;
