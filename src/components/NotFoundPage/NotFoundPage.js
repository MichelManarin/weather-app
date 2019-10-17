import React, { Component } from 'react';
import './NotFoundPage.css'; 


  
  class NotFoundPage extends Component {
  
      constructor(props) {
          super(props);
      }
  
      render(){
        return (
            <div class="NotFound">
                <h1>404</h1>
                <p>Página não encontrada / Page not found</p>
                <p>{this.props.teste},</p>
            </div>
                
        );
      }
    }
  
    export default NotFoundPage;