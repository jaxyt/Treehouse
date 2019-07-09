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
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ],
    highScore: 0
  };

  //player id counter
  prevPlayerId = 4;

  handleHighScore = (index, delta) => {
    console.log('this action triggered me');
    this.setState(prevState => {

      if (delta > 0) {
        if (prevState.players[index].score > prevState.highScore) {
          return ({
            highScore: prevState.highScore += delta
          });
        }
      } else if (delta < 0) {
        const highest = prevState.players.reduce((high, player) => {
          if (player.score > high) {
            high = player.score;
            return high;
          } else {
            return high
          }
        }, prevState.players[index].score);
        return ({
          highScore: prevState.highScore = highest
        });
      }
    })
  }


  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    this.handleHighScore(index, delta)
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
      const newSet = prevState.players.filter(p => p.id !== id);
      const highest = newSet.reduce((high, player) => {
        if (player.score > high) {
          high = player.score;
          return high;
        } else {
          return high
        }
      }, 0);
      return ({
        players: prevState.players.filter(p => p.id !== id),
        highScore: prevState.highScore = highest
      });
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
            changeScore={this.handleScoreChange} 
            removePlayer={this.handleRemovePlayer}
            handleHigh={this.handleHighScores}
            highScore={this.state.highScore}          
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
