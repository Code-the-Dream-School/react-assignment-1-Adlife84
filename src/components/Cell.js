import React, { Component } from 'react';
import X from '../images/1.png';
import O from '../images/0.png';

class Cell extends Component {

  render() {
    return (
      <div>
        <button className="square btn btn-outline-dark" onClick={() => this.props.assignPlayerToCell(this.props.id)}>
         
        </button>
      </div>
    );
  }
}
export default Cell;
