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
              <Link className="navbar-brand" to="/">WEATHER</Link>
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/history">Histórico</Link></li>
                </ul>
            </div>
        </div>
    </nav>
      );
    }
  }

  export default Header;