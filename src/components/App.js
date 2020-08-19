import React, { Component } from 'react';
import Board from './Board';
import Header from './Header';
import Info from './Info';
import X from '../images/1.png';
import O from '../images/0.png';


class Game extends Component {

  state = {

    player1: 'None',
    player2: 'None',

    board: [
      [
        { id: [0, 1], player: X },
        { id: [0, 2], player: O },
        { id: [0, 3], player: X }
      ],
      [
        { id: [1, 4], player: O },
        { id: [1, 5], player: X },
        { id: [1, 6], player: O }
      ],
      [
        { id: [2, 7], player: X },
        { id: [2, 8], player: O },
        { id: [2, 9], player: X }
      ]
    ]
  };

  assignPlayerToCell = (id) => {
    console.log("Hello from assignPlayerToCell", id);
    this.setState({ player1: 'Andrei' });
    console.log(this.state);
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
