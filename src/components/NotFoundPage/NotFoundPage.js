import React, { Component } from 'react';
import './NotFoundPage.css'; 


  
  class NotFoundPage extends Component {
  
      constructor(props) {
          super(props);
      }
  
      render(){
        return (
            <div className="NotFound">
                <h1>404</h1>
                <p>Página não encontrada / Page not found</p>
            </div>
                
        );
      }
    }
  
    export default NotFoundPage;