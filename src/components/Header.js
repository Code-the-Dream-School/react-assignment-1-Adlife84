import React from 'react';
import Logo from '../images/logo.png';


const Header = (props) => {
  return (
    <div className="container">
        <div className="center">
          <img className="logo" src={Logo} alt="Logo" />
          <h1 className="niceFont text-uppercase">tic tac toe</h1>
          <button className="btn btn-dark niceFont"> Start </button>
        </div>
    </div>
  );
}

export default Header;
