import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stats extends Component {
  totalPlayers = this.props.players.length;
  totalPoints = this.props.players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  handleLeaders = () => { 
    const highscorers = [];
    let highscore = 0;
    for (let i = 0; i < this.props.players.length; i++) {
      console.log(this.props.players[i].score, 'SCORE');
      if (this.props.players[i].score >= highscore) {
        highscore = this.props.players.score;
      }
    }
    for (let i = 0; i < this.props.players.length; i++) {
      if (this.props.players[i].score === highscore) {
          highscorers.push(this.props.players[i]);
      }
    }
    this.props.highscore(highscorers);
    console.log(highscorers);
  }

  componentDidMount = async () => {
    this.handleLeaders();
  }  
  
  render() {
    return (
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{this.totalPlayers}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{this.totalPoints}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
};

export default Stats;