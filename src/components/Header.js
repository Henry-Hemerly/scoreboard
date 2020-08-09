import React from 'react';
import Stats from './Stats';
import Timer from './Timer';

const Header = (props) => {
  return (
    <header>
      <Stats players={props.players}/>
      <h1>{props.title}</h1>
      <Timer />
    </header>
  );
}

export default Header;