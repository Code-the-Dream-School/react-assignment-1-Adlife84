import React, {Component}  from 'react';


class  Cell extends Component {
  
  render(){ 
    return(
    <button className="square btn btn-outline-dark" onClick={ () => this.props.assignPlayerToCell(this.props.id) }></button>
    
  );
  }
}
export default Cell;
