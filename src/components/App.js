import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
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

  handleHemovePlayer = id => {
    this.setState( prevState => {
        return (
          {players: prevState.players.filter( play => play.id !== id )}
        )
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}   
        />  
  
        {this.state.players.map( (player, index) =>   
            <Player 
              score={player.score}
              removePlayer={this.handleHemovePlayer}
              id={player.id}
              index={index}
              name={player.name} 
              changeScore={this.handleScoreChange}
              key={player.id.toString()} 
            />
        )} 
        <AddPlayerForm />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
