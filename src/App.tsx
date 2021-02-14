import React from "react";
import Item from "./screens/Item";
import styled from "styled-components";
import menuIcon from "./assets/svg/menu.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu src={menuIcon} />
        <Item />
      </header>
    </div>
  );
}

export default App;

const Menu = styled.img`
  width: 2.997vw;
  height: 2.14vw;
  position: absolute;
  top: 2.551vw;
  left: 1.17vw;
  z-index: 1;
  transition-duration: 0.75s;

  :hover {
    transform: rotate(90deg);
    transition-duration: 0.75s;
  }
`;
