import React from 'react';
import Stats from './Stats';
import Timer from './Timer';
import PropTypes from 'prop-types';

const Header = ({players, title}) => {
  return (
    <header>
      <Stats players={players}/>
      <h1>{title}</h1>
      <Timer />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

export default Header;