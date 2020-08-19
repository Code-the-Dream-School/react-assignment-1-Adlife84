import React, { Component } from 'react';
import Board from './Board';
import Header from './Header';
import Info from './Info';


class Game extends Component {

  state = {
    players: [
      {
        name: 'Andrei'
      },
      {
        name: 'Olga'
      }
    ],
    board: [
      [
        { id: 1, player: 'none' },
        { id: 2, player: 'none' },
        { id: 3, player: 'none' }
      ],
      [
        { id: 4, player: 'none' },
        { id: 5, player: 'none' },
        { id: 6, player: 'none' }
      ],
      [
        { id: 7, player: 'none' },
        { id: 8, player: 'none' },
        { id: 9, player: 'none' }
      ]
    ]
  };

  assignPlayerToCell = (id) => {
    console.log("Hello from assignPlayerToCell", id);
    // this.setState(prevState => {
    //     return {
    //         players: prevState.players.filter(p => p.id !== id)
    //     };

    // });
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
