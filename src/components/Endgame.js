import React from "react";
/// This class use for showing pop up to user for notice gatting scor and btn for continue the game
// via props we can share down a piece of data from a parent component , in this class 'winner'
// passed down from the App.js 
class Endgame extends React.Component {
  state = {
    playerWin: "Player " + this.props.winner + " won!",
  };
  handleClick = () => {
    this.props.endgame(false);
  };
  render() {
    const { winner } = this.props;
    const { playerWin } = this.state;
    const { width, height } = {width:1500,height:1000}
    return (
      <div className="wrapper">
        <div className="screen">
          <p> {winner ===  playerWin} </p>
          <button className="btn btn-primary" onClick={this.handleClick}>
            You win 1 BINGO :D 
          </button>
        </div>
      </div>
    );
  }
}

export default Endgame;
