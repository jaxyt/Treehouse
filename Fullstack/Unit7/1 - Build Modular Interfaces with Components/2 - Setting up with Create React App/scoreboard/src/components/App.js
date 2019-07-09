import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
        isHigh: false
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
        isHigh: false
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
        isHigh: false
      },
      {
        name: "James",
        score: 0,
        id: 4,
        isHigh: false
      }
    ],
    highScore: 0
  };

  //player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleHighScores = () => {
    console.log('this action triggered me');

    // this.setState(prevState => ({
    //   highScore: prevState.highScore = score
    // }));

    // this.setState( prevState => ({
    //   isHigh: prevState.players[index].isHigh = bool
    // }));
  }

  handleAddPlayer = (name) => {
    let newPlayer = {
      name,
      score: 0,
      id: this.prevPlayerId += 1,
      isHigh: false
    };
    this.setState( prevState => ({
      players: prevState.players.concat(newPlayer)
    }));
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            isHigh={player.isHigh}
            changeScore={this.handleScoreChange} 
            removePlayer={this.handleRemovePlayer}
            highScores={this.handleHighScores}          
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
