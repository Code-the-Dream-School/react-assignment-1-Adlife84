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

    board: [
      [
        { id: [0, 0], player: O },
        { id: [0, 1], player: X },
        { id: [0, 2], player: X }
      ],
      [
        { id: [1, 0], player: O },
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

  assignPlayerToCell = (id) => {
    console.log("Hello from assignPlayerToCell", id);
    this.setState( prevState => { 
      console.log(prevState.board[0][0].player);
      prevState.board[id[0]][id[1]].player = X;
      console.log(prevState.board[0][0].player);
      return prevState;
    });
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
