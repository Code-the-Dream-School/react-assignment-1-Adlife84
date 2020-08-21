import React, { Component } from 'react';
import Board from './Board';
import Header from './Header';
import Info from './Info';
import X from '../images/1.png';
import O from '../images/0.png';
import N from '../images/None.png';


class Game extends Component {

  state = {

    player1: {
      name: 'Andrei ',
      steps: []
    },

    player2: {
      name: 'Olga ',
      steps: []
    },
    
    currentPlayer: "player1",
    isWin: "None",

    board: [
      [
        { id: [0, 0], player: N },
        { id: [0, 1], player: N },
        { id: [0, 2], player: N }
      ],
      [
        { id: [1, 0], player: N },
        { id: [1, 1], player: N },
        { id: [1, 2], player: N }
      ],
      [
        { id: [2, 0], player: N },
        { id: [2, 1], player: N },
        { id: [2, 2], player: N }
      ]
    ],



    winCombinations: [
      [0, 1, 2],
      [0, 0, 0],
      [1, 1, 1], 
      [2, 2, 2]   
    ]
  };

  //Change a player turn
  changeCurrentPlayer = () => {
    this.state.currentPlayer === 'player1' ?
      this.setState(prevState => { prevState.currentPlayer = 'player2' }) :
      this.setState(prevState => { prevState.currentPlayer = 'player1' });
    console.log("I have change players", this.state.currentPlayer);  //Test that state changed
  }

  //Check is it WIN
  isWin = () => {
    console.log('Hello from isWin');
  }




  //Assign image Player to cell
  assignPlayerToCell = (id) => {

    if (this.state.board[id[0]][id[1]].player === N) {
      if (this.state.currentPlayer === "player1") {
        this.setState(prevState => {
          prevState.board[id[0]][id[1]].player = O;
          prevState.player1.steps.push(id[1]);
          console.log('Player 1', this.state.player1.steps);
          return prevState;
        });
      } else {
        this.setState(prevState => {
          prevState.board[id[0]][id[1]].player = X;
          prevState.player2.steps.push(id[1]);
          console.log('Player 2', this.state.player2.steps);
          return prevState;
        });
      }

    } else {
      alert("Cell is not free, click on other cell");
    }

    
    this.isWin(); //Check maybe currentPlayer is Win
    this.changeCurrentPlayer(); //Change player each next turn
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
