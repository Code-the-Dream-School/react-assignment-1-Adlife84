import React, { Component } from 'react';
import icon1 from '../images/0.png';
import icon2 from '../images/1.png';


class Info extends Component {

  state = {
    player1: "",
    player2: ""
  }

  ValueChangePlayer1 = (e) => {
    this.setState({ player1: e.target.value });
  }

  ValueChangePlayer2 = (e) => {
    this.setState({ player2: e.target.value });
  }


  render() {
    return (
      <div className="center">
        <div className="form-row">
          <div className="form-group col-md-6 niceFont">
            <div className="">
              <label>
                Name
                <img className="icon" src={icon1} alt="icon"></img>
              </label>
              <input
                type="text" class="form-control"
                value={this.state.player1}
                onChange={this.ValueChangePlayer1}>
              </input>
            </div>
          </div>
          <div className="form-group col-md-6 niceFont">
            <div className="">
              <label>
                Name
                <img className="icon" src={icon2} alt="icon"></img>
              </label>
              <input
                type="text" class="form-control"
                value={this.state.player2}
                onChange={this.ValueChangePlayer2}>
              </input>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-dark niceFont" onClick={() => this.props.addNamesOfPlayers(this.state)}> Start game </button>
      </div>
    )
  }
}


export default Info;
