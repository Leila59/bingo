import React from "react";
// This class use for showing information of game that gather from App.js
class Navbar extends React.Component {
  render() {
    const { player, userName } = this.props;
    return (
      <div className="navbar">
        <div className="title">
          <h1>Bingo Time</h1>
        </div>
        <div className="statistics">
          <h2>
          Score of " {userName} " is {player}
          </h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
