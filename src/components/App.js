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
    console.log("Hi from Start game");

    this.setState(prevState => { prevState.player1.name = players.player1 });
    this.setState(prevState => { prevState.player2.name = players.player2 });

    this.setState(prevState => {
      prevState.gameStatus = "Game have started"
      return prevState;
    });

  }



  //Change a player turn
  changeCurrentPlayer = () => {
    this.state.currentPlayer === 'player1' ?
      this.setState(prevState => { prevState.currentPlayer = 'player2' }) :
      this.setState(prevState => { prevState.currentPlayer = 'player1' });
    console.log("I have change players", this.state.currentPlayer);  //Test that state changed
  }

  //Check is it WIN (compare two arrays beatwean each other if it's the same you win)
  isWin = (player) => {
    console.log('Hello from isWin', this.state.player1.steps);
    let playerArray = player.steps;
    let playerArrayString = playerArray.toString()
    let winArray = this.state.winCombinations;

    console.log(playerArray);
    console.log(playerArrayString);

    console.log(winArray.indexOf(playerArrayString));

    if (winArray.indexOf(playerArrayString) === -1) {
      console.log("Game over!");
    } else {
      console.log("You Win!", winArray.indexOf(playerArrayString));
      this.state.isWin = player.name; //Put name of winer in the state
      alert(`Congratulation you ${this.state.isWin}! You Won!!!`);
    }
  }




  //Assign image Player to cell
  assignPlayerToCell = (id) => {

    if (this.state.board[id[0]][id[1]].player === N) {
      if (this.state.currentPlayer === "player1") {
        this.setState(prevState => {
          prevState.board[id[0]][id[1]].player = O;
          prevState.player1.steps.push(id[1]);
          console.log('Player 1', this.state.player1.steps);
          this.isWin(this.state.player1); //Check maybe Player1 is Win

          return prevState;
        });
      } else {
        this.setState(prevState => {
          prevState.board[id[0]][id[1]].player = X;
          prevState.player2.steps.push(id[1]);
          console.log('Player 2', this.state.player2.steps);
          this.isWin(this.state.player2); //Check maybe Player2 is Win

          return prevState;
        });
      }
    } else {
      alert("Cell is not free, click on other cell");
    }

    this.changeCurrentPlayer(); //Change player each next turn
  }

  render() {
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
            />:
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
