import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
              <a className="navbar-brand"><Link to="/">WEATHER</Link></a>
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a><Link to="/weather-app/">Home</Link></a></li>
                    <li><a><Link to="/weather-app/history">Histórico</Link></a></li>
                </ul>
            </div>
        </div>
    </nav>
      );
    }
  }

  export default Header;