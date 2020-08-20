import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    highscorers: [],
    players: [
      {
        name: 'Jerry',
        score: 0,
        id: 1 
      },
      {
        name: 'Mary',
        score: 0,
        id: 2
      },
      {
        name: 'Harry',
        score: 0,
        id: 3
      },
      {
        name: 'Terry',
        score: 0,
        id: 4
      },
      {
        name: 'Larry',
        score: 0,
        id: 5
      }
    ]
  }

  prevPlayerId = 5;

  handleScoreChange = (playerIndex, change) => {
    this.setState( prevState => {
      const updatedPlayers = [ ...prevState.players ];
      const updatedPlayer = { ...updatedPlayers[playerIndex] };
      updatedPlayer.score += change;
      updatedPlayers[playerIndex] = updatedPlayer;

      // Update the player's state without mutating the original
      return {
        players: updatedPlayers
      };
    });
  }

  handleRemovePlayer = id => {
    this.setState( prevState => {
        return (
          {players: prevState.players.filter( play => play.id !== id )}
        )
    });
  }

  handleAddPlayer = name => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleHighscorer = highschorersArray => {
    this.setState({
      highschorers: highschorersArray
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
          highscore={this.handleHighscorer}   
        />  
  
        {this.state.players.map( (player, index) =>   
            <Player 
              score={player.score}
              removePlayer={this.handleRemovePlayer}
              id={player.id}
              index={index}
              name={player.name} 
              changeScore={this.handleScoreChange}
              key={player.id.toString()} 
              isHighscorer={this.state.highscorers}
            />
        )} 
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
