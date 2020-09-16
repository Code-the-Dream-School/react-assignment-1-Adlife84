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
      name: "",
      steps: []
    },

    player2: {
      name: "",
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
      '0,1,2',
      '0,0,0',
      '1,1,1',
      '2,2,2',
      '2,1,0'
    ],

    gameStatus: ""

  };


  //Reset game handler
  resetGameHandle = () => {
    console.log('Hi from resetGameHandle');

    //Restart steps player1
    this.setState(prevState => {
      prevState.player1.steps = [];
    });

    //Restart steps player2
    this.setState(prevState => {
      prevState.player2.steps = [];
    });

    //Restart the board
    for (let i = 0; i < this.state.board.length; i++) {
      this.setState(prevState => {
        prevState.board[i].map(cell => cell.player = N);
        return prevState;
      });
    }
  }

  //New game handler
  newGameHandle = () => {

    //Change status game to start
    this.setState(prevState => {
      prevState.gameStatus = "start";
    });

    //Reset names of player1
    this.setState(prevState => {
      prevState.player1.name = "";
    });

    //Reset names of player2
    this.setState(prevState => {
      prevState.player2.name = "";
    });


    this.resetGameHandle();
  }

  //Add Names of players
  addNamesOfPlayers = (players) => {
    console.log("Hi from addNamesOfPlayers");

    if (players.player1 === "" || players.player2 === "" || players.player1 === players.player2) {
      alert("Please write names of player");
    } else {
      this.setState(prevState => { prevState.player1.name = players.player1 });
      this.setState(prevState => { prevState.player2.name = players.player2 });

      //Change status game
      this.setState(prevState => {
        prevState.gameStatus = "Game have started"
        return prevState;
      });
    }
  }



  //Change a player turn
  changeCurrentPlayer = () => {
    this.state.currentPlayer === 'player1' ?
      this.setState(prevState => { prevState.currentPlayer = 'player2' }) :
      this.setState(prevState => { prevState.currentPlayer = 'player1' });
  }

  //Check is it WIN (compare two arrays beatwean each other if it's the same you win)

  isWin = (player) => {
    let a = this.state.board[0][0].player;
    let b = this.state.board[0][1].player;
    let c = this.state.board[0][2].player;

    // Check gorizontal 
    for (let i = 0; i < 3; i++) {
      a = this.state.board[i][0].player;
      b = this.state.board[i][1].player;
      c = this.state.board[i][2].player;
      this.isEquel(a, b, c);
    }

    //Vertical check
    for (let i = 0; i < 3; i++) {
      a = this.state.board[0][i].player;
      b = this.state.board[1][i].player;
      c = this.state.board[2][i].player;
      this.isEquel(a, b, c);
    }

    //Diagonals check from top to buttom
    a = this.state.board[0][2].player;
    b = this.state.board[1][1].player;
    c = this.state.board[2][0].player;
    this.isEquel(a, b, c);

    //Diagonals check from buttom to top
    a = this.state.board[0][0].player;
    b = this.state.board[1][1].player;
    c = this.state.board[2][2].player;
    this.isEquel(a, b, c);
  }

  isEquel = (a, b, c) => {
    //if all three elements are equel that means you win! 
    if (
      a !== N &&
      a === b &&
      b === c
    ) {
      this.resetGameHandle();
      return (a === O ? alert(`Congratulation you ${this.state.player1.name}! You Won!!!`) : alert(`Congratulation you ${this.state.player2.name}! You Won!!!`)) //Return a winner in Alert;
    }
  }

  // //Sound effect onClick doesn't work yet
  // makeSound = () => {
  //   console.log("Try tp play sound");
  //   let audioUrl = 'police.mp3';

  //   // SIMPLE EXEMPLE
  //   new Audio(audioUrl).play(); // that will do the trick !!
  //   this.makeSound();
  // }


  //Assign image Player to cell
  assignPlayerToCell = (id) => {
    if (this.state.board[id[0]][id[1]].player === N) {
      if (this.state.currentPlayer === "player1") {
        this.setState(prevState => {
          prevState.board[id[0]][id[1]].player = O;
          prevState.player1.steps.push(id[1]);
          return prevState;
        });
      } else {
        this.setState(prevState => {
          prevState.board[id[0]][id[1]].player = X;
          prevState.player2.steps.push(id[1]);
          return prevState;
        });
      }
    } else {
      alert("Cell is not free, click on other cell");
      return
    }
    
    this.changeCurrentPlayer(); //Change player each next turn
  }

  render() {
    this.isWin(); //Check for win
    return (
      <div>
        {
          (this.state.gameStatus === "" ?
            <Header
              newGame={this.newGameHandle}
            /> :
            this.state.gameStatus === "start" ?
              <Info
                addNamesOfPlayers={this.addNamesOfPlayers}
                player1={this.state.player1}
                player2={this.state.player2}
              /> :
              <Board
                state={this.state}
                assignPlayerToCell={this.assignPlayerToCell}
                resetGame={this.resetGameHandle}
                newGame={this.newGameHandle}
              />
          )
        }

      </div>
    );
  }
}

export default Game;
