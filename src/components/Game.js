import React from "react";
import Board from "./Board";
//This class have some of the game logic : sending score to App.js
class Game extends React.Component {
  state = {
    player: true,
    check: true,
  };


  render() {
    const { player } = this.state;
    const { userName, endgame } = this.props;
    return (
      <div className="game">
        <Board
          player={player}
          handleScore={this.props.handleScore}
          endgame={endgame}
        />
      </div>
    );
  }
}

export default Game;
