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
              <a className="navbar-brand" href="/weather-app">WEATHER</a>
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="/weather-app">Home</a></li>
                    <li><a href="/weather-app/historico">Histórico</a></li>
                </ul>
            </div>
        </div>
    </nav>
      );
    }
  }

  export default Header;