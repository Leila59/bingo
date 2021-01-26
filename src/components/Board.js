import React from "react";

//This class have main logic of the game.
class Board extends React.Component {
  
    /// generate tiles of game via map and pass classNames into them
  generateTiles = () => {
    let allTiles = [];
    for (let i = 0; i < 25; i++) {
      allTiles.push("tile not-played");
    }
    return allTiles;
  };

  /// set title to each tile
  setTitles = () => {
    let allTiles = document.getElementsByClassName("not-played");
    let titles = [
      'child noises in the background','hello ... hello!',
      'I need to jump in another call','can every on go on mute',
      'could you get closer to the mic','screen share turn off','next slide',
      'can we take this offline?','connection less',
      'could you share this slides afterwards?','can sb. grant presenter rights?',
      'can you email that to everyone?','','sorry I had problems on loging in',
      'animal noise in the background','sorry I did not found the conference id!',
      'I was having connection issues','I will have to get back to you',
      'Who just joined?','sorry sth. wrong','Do you see my screen?',
      'Lets wait..','You will send the minutes','Sorry,I was on mute','Can you repeat pls?'
    ];
    if (allTiles.length == 25 ){ // all tile must be "not-played" so the board is start
      for (let i = 0; i < allTiles.length; i++){
        if (i == 12){
          var emoji = require('node-emoji');
          allTiles[i].innerHTML = emoji.get('laughing');
        }else{
          allTiles[i].innerHTML = titles[i];
        }
      }
    }
    
  };
  
  /// take the event of click on tile and sets symbol ('BINGO') inside of the tile 
  handleClick = (event) => {
    const { handleScore, endgame } = this.props;
    let tile = event.target;
    var emoji = require('node-emoji');
    if (tile.classList.length === 2 && tile.innerHTML !== emoji.get('laughing')) {
      this.play(tile);
    }

    let allTiles = document.getElementsByClassName("not-played");
    if (allTiles.length < 1) {
      endgame(true);
      this.reset();
    }
  };

  // via this nested function we can put 'BINGO' inside tile 
  // also remove className so if you click it again , it will not add another 'BINGO' to the tile.
  play = (tile) => {
    const { player, handleScore, endgame } = this.props;
    tile.classList.remove("not-played");
      tile.innerHTML = "BINGO";
      
      
      /// if diagonal equals to BINGO , player gets score
      if (this.diagonal("BINGO")) {
        handleScore("player");
        endgame(true);
      }
      /// if row equals to BINGO , player gets score
      if (this.row("BINGO")) {
        handleScore("player");
        endgame(true);
      }
      /// if column equals to BINGO , player gets score
      if (this.column("BINGO")) {
        handleScore("player");
        endgame(true);
      }
  };


  //after adding 'BINGO', check diagonal , column or row to see if player gets score or not

  diagonal = (play) => {
    let left = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile6").innerHTML,
      document.getElementById("tile18").innerHTML,
      document.getElementById("tile24").innerHTML,
    ];
    let right = [
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile8").innerHTML,
      document.getElementById("tile16").innerHTML,
      document.getElementById("tile20").innerHTML,
    ];

    if (left[0] === play && left[1] === play && left[2] === play && left[3] === play) {
      //// this diagonal don't get score
      if (document.getElementById("tile0").classList.contains('get-score') === false || document.getElementById("tile6").classList.contains('get-score') === false ||
          document.getElementById("tile18").classList.contains('get-score') === false || document.getElementById("tile24").classList.contains('get-score') === false){
            document.getElementById("tile0").classList.add('get-score');
            document.getElementById("tile6").classList.add('get-score');
            document.getElementById("tile18").classList.add('get-score');
            document.getElementById("tile24").classList.add('get-score');
            // change backgrounf color of bingo tiles
            document.getElementById("tile0").style.background='palevioletred';
            document.getElementById("tile6").style.background='palevioletred';
            document.getElementById("tile18").style.background='palevioletred';
            document.getElementById("tile24").style.background='palevioletred';
            return true;
          }
    }
    if (right[0] === play && right[1] === play && right[2] === play && right[3] === play) {
      //// this diagonal don't get score
      if (document.getElementById("tile4").classList.contains('get-score') === false || document.getElementById("tile8").classList.contains('get-score') === false ||
          document.getElementById("tile16").classList.contains('get-score') === false || document.getElementById("tile20").classList.contains('get-score') === false){
            document.getElementById("tile4").classList.add('get-score');
            document.getElementById("tile8").classList.add('get-score');
            document.getElementById("tile16").classList.add('get-score');
            document.getElementById("tile20").classList.add('get-score');
            // change backgrounf color of bingo tiles
            document.getElementById("tile4").style.background='palevioletred';
            document.getElementById("tile8").style.background='palevioletred';
            document.getElementById("tile16").style.background='palevioletred';
            document.getElementById("tile20").style.background='palevioletred';
            return true;
          }
    }
    return false;
  };

  row = (play) => {
    let row1 = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile1").innerHTML,
      document.getElementById("tile2").innerHTML,
      document.getElementById("tile3").innerHTML,
      document.getElementById("tile4").innerHTML,
    ];
    let row2 = [
      document.getElementById("tile5").innerHTML,
      document.getElementById("tile6").innerHTML,
      document.getElementById("tile7").innerHTML,
      document.getElementById("tile8").innerHTML,
      document.getElementById("tile9").innerHTML,
    ];
    let row3 = [
      document.getElementById("tile10").innerHTML,
      document.getElementById("tile11").innerHTML,
      document.getElementById("tile13").innerHTML,
      document.getElementById("tile14").innerHTML,
    ];
    let row4 = [
      document.getElementById("tile15").innerHTML,
      document.getElementById("tile16").innerHTML,
      document.getElementById("tile17").innerHTML,
      document.getElementById("tile18").innerHTML,
      document.getElementById("tile19").innerHTML,
    ];
    let row5 = [
      document.getElementById("tile20").innerHTML,
      document.getElementById("tile21").innerHTML,
      document.getElementById("tile22").innerHTML,
      document.getElementById("tile23").innerHTML,
      document.getElementById("tile24").innerHTML,
    ];

    if (row1[0] === play && row1[1] === play && row1[2] === play && row1[3] === play && row1[4] === play) {
      //// this row don't get score
      if (document.getElementById("tile0").classList.contains('get-score') === false || document.getElementById("tile1").classList.contains('get-score') === false ||
          document.getElementById("tile2").classList.contains('get-score') === false || document.getElementById("tile3").classList.contains('get-score') === false ||
          document.getElementById("tile4").classList.contains('get-score') === false){
            document.getElementById("tile0").classList.add('get-score');
            document.getElementById("tile1").classList.add('get-score');
            document.getElementById("tile2").classList.add('get-score');
            document.getElementById("tile3").classList.add('get-score');
            document.getElementById("tile4").classList.add('get-score');
            // change backgrounf color of bingo tiles
            document.getElementById("tile0").style.background='palevioletred';
            document.getElementById("tile1").style.background='palevioletred';
            document.getElementById("tile2").style.background='palevioletred';
            document.getElementById("tile3").style.background='palevioletred';
            document.getElementById("tile4").style.background='palevioletred';
            return true;
          }
    }
    if (row2[0] === play && row2[1] === play && row2[2] === play && row2[3] === play && row2[4] === play) {
      console.log('yes');
      //// this row don't get score
      if (document.getElementById("tile5").classList.contains('get-score') === false || document.getElementById("tile6").classList.contains('get-score') === false ||
          document.getElementById("tile7").classList.contains('get-score') === false || document.getElementById("tile8").classList.contains('get-score') === false ||
          document.getElementById("tile9").classList.contains('get-score') === false){
            document.getElementById("tile5").classList.add('get-score');
            document.getElementById("tile6").classList.add('get-score');
            document.getElementById("tile7").classList.add('get-score');
            document.getElementById("tile8").classList.add('get-score');
            document.getElementById("tile9").classList.add('get-score');
             // change backgrounf color of bingo tiles
             document.getElementById("tile5").style.background='palevioletred';
             document.getElementById("tile6").style.background='palevioletred';
             document.getElementById("tile7").style.background='palevioletred';
             document.getElementById("tile8").style.background='palevioletred';
             document.getElementById("tile9").style.background='palevioletred';
            return true;
          }
    }
    if (row3[0] === play && row3[1] === play && row3[2] === play && row3[3] === play ) {
     //// this row don't get score
     if (document.getElementById("tile10").classList.contains('get-score') === false || document.getElementById("tile11").classList.contains('get-score') === false ||
     document.getElementById("tile13").classList.contains('get-score') === false || document.getElementById("tile14").classList.contains('get-score') === false){
       document.getElementById("tile10").classList.add('get-score');
       document.getElementById("tile11").classList.add('get-score');
       document.getElementById("tile13").classList.add('get-score');
       document.getElementById("tile14").classList.add('get-score');
        // change backgrounf color of bingo tiles
        document.getElementById("tile10").style.background='palevioletred';
        document.getElementById("tile11").style.background='palevioletred';
        document.getElementById("tile13").style.background='palevioletred';
        document.getElementById("tile14").style.background='palevioletred';
       return true;
     }
    }
    if (row4[0] === play && row4[1] === play && row4[2] === play && row4[3] === play && row4[4] === play) {
      //// this row don't get score
      if (document.getElementById("tile15").classList.contains('get-score') === false || document.getElementById("tile16").classList.contains('get-score') === false ||
          document.getElementById("tile17").classList.contains('get-score') === false || document.getElementById("tile18").classList.contains('get-score') === false ||
          document.getElementById("tile19").classList.contains('get-score') === false){
            document.getElementById("tile15").classList.add('get-score');
            document.getElementById("tile16").classList.add('get-score');
            document.getElementById("tile17").classList.add('get-score');
            document.getElementById("tile18").classList.add('get-score');
            document.getElementById("tile19").classList.add('get-score');
             // change backgrounf color of bingo tiles
             document.getElementById("tile15").style.background='palevioletred';
             document.getElementById("tile16").style.background='palevioletred';
             document.getElementById("tile17").style.background='palevioletred';
             document.getElementById("tile18").style.background='palevioletred';
             document.getElementById("tile19").style.background='palevioletred';
            return true;
          }
    }
    if (row5[0] === play && row5[1] === play && row5[2] === play && row5[3] === play && row5[4] === play) {
      //// this row don't get score
      if (document.getElementById("tile20").classList.contains('get-score') === false || document.getElementById("tile21").classList.contains('get-score') === false ||
          document.getElementById("tile22").classList.contains('get-score') === false || document.getElementById("tile23").classList.contains('get-score') === false ||
          document.getElementById("tile24").classList.contains('get-score') === false){
            document.getElementById("tile20").classList.add('get-score');
            document.getElementById("tile21").classList.add('get-score');
            document.getElementById("tile22").classList.add('get-score');
            document.getElementById("tile23").classList.add('get-score');
            document.getElementById("tile24").classList.add('get-score');
             // change backgrounf color of bingo tiles
             document.getElementById("tile20").style.background='palevioletred';
             document.getElementById("tile21").style.background='palevioletred';
             document.getElementById("tile22").style.background='palevioletred';
             document.getElementById("tile23").style.background='palevioletred';
             document.getElementById("tile24").style.background='palevioletred';
            return true;
          }
    }
    return false;
  };

  column = (play) => {
    let column1 = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile5").innerHTML,
      document.getElementById("tile10").innerHTML,
      document.getElementById("tile15").innerHTML,
      document.getElementById("tile20").innerHTML,
    ];
    let column2 = [
      document.getElementById("tile1").innerHTML,
      document.getElementById("tile6").innerHTML,
      document.getElementById("tile11").innerHTML,
      document.getElementById("tile16").innerHTML,
      document.getElementById("tile21").innerHTML,
    ];
    let column3 = [
      document.getElementById("tile2").innerHTML,
      document.getElementById("tile7").innerHTML,
      document.getElementById("tile17").innerHTML,
      document.getElementById("tile22").innerHTML,
    ];
    let column4 = [
      document.getElementById("tile3").innerHTML,
      document.getElementById("tile8").innerHTML,
      document.getElementById("tile13").innerHTML,
      document.getElementById("tile18").innerHTML,
      document.getElementById("tile23").innerHTML,
    ];
    let column5 = [
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile9").innerHTML,
      document.getElementById("tile14").innerHTML,
      document.getElementById("tile19").innerHTML,
      document.getElementById("tile24").innerHTML,
    ];

    if (column1[0] === play && column1[1] === play && column1[2] === play && column1[3] === play && column1[4] === play) {
      //// this column don't get score
      if (document.getElementById("tile0").classList.contains('get-score') === false || document.getElementById("tile5").classList.contains('get-score') === false ||
          document.getElementById("tile10").classList.contains('get-score') === false || document.getElementById("tile15").classList.contains('get-score') === false ||
          document.getElementById("tile20").classList.contains('get-score') === false){
            document.getElementById("tile0").classList.add('get-score');
            document.getElementById("tile5").classList.add('get-score');
            document.getElementById("tile10").classList.add('get-score');
            document.getElementById("tile15").classList.add('get-score');
            document.getElementById("tile20").classList.add('get-score');
             // change backgrounf color of bingo tiles
             document.getElementById("tile0").style.background='palevioletred';
             document.getElementById("tile5").style.background='palevioletred';
             document.getElementById("tile10").style.background='palevioletred';
             document.getElementById("tile15").style.background='palevioletred';
             document.getElementById("tile20").style.background='palevioletred';
            return true;
          }
    }
    if (column2[0] === play && column2[1] === play && column2[2] === play && column2[3] === play && column2[4] === play) {
      //// this column don't get score
      if (document.getElementById("tile1").classList.contains('get-score') === false || document.getElementById("tile6").classList.contains('get-score') === false ||
          document.getElementById("tile11").classList.contains('get-score') === false || document.getElementById("tile16").classList.contains('get-score') === false ||
          document.getElementById("tile21").classList.contains('get-score') === false){
            document.getElementById("tile1").classList.add('get-score');
            document.getElementById("tile6").classList.add('get-score');
            document.getElementById("tile11").classList.add('get-score');
            document.getElementById("tile16").classList.add('get-score');
            document.getElementById("tile21").classList.add('get-score');
             // change backgrounf color of bingo tiles
             document.getElementById("tile1").style.background='palevioletred';
             document.getElementById("tile6").style.background='palevioletred';
             document.getElementById("tile11").style.background='palevioletred';
             document.getElementById("tile16").style.background='palevioletred';
             document.getElementById("tile21").style.background='palevioletred';
            return true;
          }
    }
    if (column3[0] === play && column3[1] === play && column3[2] === play && column3[3] === play) {
      //// this column don't get score
      if (document.getElementById("tile2").classList.contains('get-score') === false || document.getElementById("tile7").classList.contains('get-score') === false ||
          document.getElementById("tile17").classList.contains('get-score') === false || document.getElementById("tile22").classList.contains('get-score') === false){
            document.getElementById("tile2").classList.add('get-score');
            document.getElementById("tile7").classList.add('get-score');
            document.getElementById("tile17").classList.add('get-score');
            document.getElementById("tile22").classList.add('get-score');
             // change backgrounf color of bingo tiles
             document.getElementById("tile2").style.background='palevioletred';
             document.getElementById("tile7").style.background='palevioletred';
             document.getElementById("tile17").style.background='palevioletred';
             document.getElementById("tile22").style.background='palevioletred';
            return true;
          }
    }
    if (column4[0] === play && column4[1] === play && column4[2] === play && column4[3] === play && column4[4] === play) {
      //// this column don't get score
      if (document.getElementById("tile3").classList.contains('get-score') === false || document.getElementById("tile8").classList.contains('get-score') === false ||
          document.getElementById("tile13").classList.contains('get-score') === false || document.getElementById("tile18").classList.contains('get-score') === false ||
          document.getElementById("tile23").classList.contains('get-score') === false){
            document.getElementById("tile3").classList.add('get-score');
            document.getElementById("tile8").classList.add('get-score');
            document.getElementById("tile13").classList.add('get-score');
            document.getElementById("tile18").classList.add('get-score');
            document.getElementById("tile23").classList.add('get-score');
             // change backgrounf color of bingo tiles
             document.getElementById("tile3").style.background='palevioletred';
             document.getElementById("tile8").style.background='palevioletred';
             document.getElementById("tile13").style.background='palevioletred';
             document.getElementById("tile18").style.background='palevioletred';
             document.getElementById("tile23").style.background='palevioletred';
            return true;
          }
    }
    if (column5[0] === play && column5[1] === play && column5[2] === play && column5[3] === play && column5[4] === play) {
      //// this column don't get score
      if (document.getElementById("tile4").classList.contains('get-score') === false || document.getElementById("tile9").classList.contains('get-score') === false ||
          document.getElementById("tile14").classList.contains('get-score') === false || document.getElementById("tile19").classList.contains('get-score') === false ||
          document.getElementById("tile24").classList.contains('get-score') === false){
            document.getElementById("tile4").classList.add('get-score');
            document.getElementById("tile9").classList.add('get-score');
            document.getElementById("tile14").classList.add('get-score');
            document.getElementById("tile19").classList.add('get-score');
            document.getElementById("tile24").classList.add('get-score');
             // change backgrounf color of bingo tiles
             document.getElementById("tile4").style.background='palevioletred';
             document.getElementById("tile9").style.background='palevioletred';
             document.getElementById("tile14").style.background='palevioletred';
             document.getElementById("tile19").style.background='palevioletred';
             document.getElementById("tile24").style.background='palevioletred';
            return true;
          }
    }
    return false;
  };
/// when game finish, it resets all of the game scores
  reset = () => {
    let allTiles = document.getElementsByClassName("tile");
    for (let i = 0; i < allTiles.length; i++) {
      allTiles[i].classList.add("not-played");
    }
    this.setTitles();
  };

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  } 
  render() {
    this.setTitles();
    return (
      <div className="board">
        {this.generateTiles().map((element, i) => {
          return (
            <div
              id={`tile${i}`}
              key={i}
              className={element}
              onClick={this.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
