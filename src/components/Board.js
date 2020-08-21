import React, { Component } from 'react';
import Cell from './Cell';
import icon1 from '../images/0.png';
import icon2 from '../images/1.png';
import Logo from '../images/logo.png';


class Board extends Component {


  render() {
    return (
      <div className="container">

        <div className="center">
          <img className="logo" src={Logo} alt="Logo" />
          <h1 className="niceFont text-uppercase">tic tac toe</h1>
        </div>

        {/* Names of players */}
        <div className="together">
          <p><img className="icon" src={icon1} alt="icon"></img> {this.props.state.player1}</p>
          <p><img className="icon" src={icon2} alt="icon"></img> {this.props.state.player2}</p>
        </div>

        {/* Board cells 9x9 */}
        <div className="board">

          <div className="row">
            {this.props.state.board[0].map((cell, index) =>
              <Cell
                key={index}
                id={cell.id}
                player={cell.player}
                assignPlayerToCell={this.props.assignPlayerToCell}
              />
            )}
          </div>
          <div className="row">
            {this.props.state.board[1].map((cell, index) =>
              <Cell
                key={index}
                id={cell.id}
                player={cell.player}
                assignPlayerToCell={this.props.assignPlayerToCell}
              />
            )}
          </div>
          <div className="row">
            {this.props.state.board[2].map((cell, index) =>
              <Cell
                key={index}
                id={cell.id}
                player={cell.player}
                assignPlayerToCell={this.props.assignPlayerToCell}
              />
            )}
          </div>
        </div>

        {/* Reset and Start button */}
        <div className="together">
          <button type="submit" className="btn btn-dark niceFont">New Game</button>
          <button type="submit" className="btn btn-dark niceFont">Reset</button>
        </div>
      </div>
    );
  }
}

export default Board;
