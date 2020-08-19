import React, { Component } from 'react';
import icon1 from '../images/0.png';
import icon2 from '../images/1.png';


class Info extends Component {

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
              <input type="text" class="form-control"></input>
            </div>
          </div>
          <div className="form-group col-md-6 niceFont">
            <div className="">
              <label>
                Name 
                <img className="icon" src={icon2} alt="icon"></img>
              </label>
              <input type="text" class="form-control"></input>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-dark niceFont">Start game</button>
      </div>
    )
  }
}


export default Info;
