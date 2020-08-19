import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce((total, player) => {
    return total + player.score;
  }, 0);
  const leader = () => {
    const highscorers = [];
    let highscore = 0;
    for (let i = 0; i < props.players.length; i++) {
      if (props.players[i].score >= highscore) {
        highscore = props.players.score;
      }
    }
    for (let i = 0; i < props.players.length; i++) {
      if (props.players[i].score === highscore) {
         highscorers.push(props.players[i]);
      }
    }
    return highscorers;
  }

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
};

export default Stats;