import React, { Component } from 'react';
import Stats from './Stats';
import Timer from './Timer';
import PropTypes from 'prop-types';

class Header extends Component {
  render () {
    const {
      players,
      title
    } = this.props;

    return (
      <header>
        <Stats players={players} highscore={this.props.highscore}/>
        <h1>{title}</h1>
        <Timer />
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

export default Header;