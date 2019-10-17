import React, { Component } from 'react';
import './Header.css'; 

class Header extends Component {

    constructor(props) {
        super(props);
    }
 
    render(){
      return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">WEATHER</a>
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/historico">Histórico</a></li>
                </ul>
            </div>
        </div>
    </nav>
      );
    }
  }

  export default Header;