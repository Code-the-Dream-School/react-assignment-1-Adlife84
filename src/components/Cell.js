import React, { Component } from 'react';

class Cell extends Component {

  render() {
    return (
      <div>
        <button className="square btn btn-outline-dark" onClick={(e) => 
        this.props.assignPlayerToCell(this.props.id)}>
         <img className="squareIcon" src={this.props.player}></img>
        </button>
      </div>
    );
  }
}
export default Cell;
