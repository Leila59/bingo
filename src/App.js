import React from "react";
import Navbar from "./components/Navbar.js";
import Game from "./components/Game.js";
import Login from "./components/Login.js";
import Endgame from "./components/Endgame.js";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

/// This class use to transfer data to all the diff compomnnets of the application
//so we have to import all components and then send the needed info to them
// state hold name of players and scores of them and has boolean for showing the login or endgame

class App extends React.Component {
  state = {
    userName: "Player",
    winner: "",
    player: 0,
    showLogin: true,
    showEndgame: false,
  };

  handleScore = (player) => {
    const { userName } = this.state;
    let winner;
    if (player === "player") {
      winner = userName;
    } 
    this.setState({
      [player]: this.state[player] + 1,
      winner: winner,
    });
  };

  handleName = (player) => {
    this.setState({ userName: player, showLogin: false });
  };

  handleEndgame = (input) => {
    this.setState({ showEndgame: input });
  };
  render() {
    const {
      player,
      showLogin,
      userName,
      showEndgame,
      winner,
    } = this.state;
    const { width, height } = {width:1500,height:1000}
    return (
      <div className="App">
      
        {showEndgame ? (
          <div>
            <Confetti
      width={width}
      height={height}
      numberOfPieces = {500}
    />
    <Endgame winner={winner} endgame={this.handleEndgame} />
          </div>
          
          
        ) : null}
        {showLogin ? <Login names={this.handleName} /> : null}
        <Navbar
          userName={userName}
          player={player}
        />
        <Game
          userName={userName}
          endgame={this.handleEndgame}
          handleScore={this.handleScore}
        />
      </div>
    );
  }
}

export default App;
