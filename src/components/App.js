import React, { Component } from 'react';
import Board from './Board';
import Header from './Header';
import Info from './Info';
import X from '../images/1.png';
import O from '../images/0.png';


class Game extends Component {

  state = {

    player1: 'Name ',
    player2: 'Name ',

    currentPlayer: "player1",

    board: [
      [
        { id: [0, 0], player: X },
        { id: [0, 1], player: X },
        { id: [0, 2], player: X }
      ],
      [
        { id: [1, 0], player: X },
        { id: [1, 1], player: O },
        { id: [1, 2], player: O }
      ],
      [
        { id: [2, 0], player: O },
        { id: [2, 1], player: O },
        { id: [2, 2], player: O }
      ]
    ]
  };

  //Change a player turn
  changeCurrentPlayer = () => {
    this.state.currentPlayer === 'player1'? 
    this.setState(prevState => {prevState.currentPlayer = 'player2'}): 
    this.setState(prevState => {prevState.currentPlayer = 'player1'});
    console.log("I have change players", this.state.currentPlayer);  //Test that state changed
  }

  //Assign image Player to cell
  assignPlayerToCell = (id) => {

    if(this.state.currentPlayer === "player1"){
      this.setState( prevState => { 
        prevState.board[id[0]][id[1]].player = O; 
        return prevState;
      });
    } else {
      this.setState( prevState => { 
        prevState.board[id[0]][id[1]].player = X; 
        return prevState;
      });
    }
  
    this.changeCurrentPlayer();
  }




  render() {

    // this.assignPlayerToCell(3); // Test my method onClick to Cell
  

    return (
      <div>
        
        {/* <Header /> */}
        {/* <Info /> */}
        <Board
          state={this.state}
          assignPlayerToCell={this.assignPlayerToCell}
        />
      </div>
    );
  }
}

export default Game;
