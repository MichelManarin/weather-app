import React, { Component } from 'react';

import './CardDetail.css'; 
  
  class CardDetail extends Component {
  
      constructor(props) {
          super(props);
      }
  
      render(){
        return (
            <div className="col-md-2 serrilhado">
                <h3>
                    {this.props.datastr} 
                </h3>
                <span className="max">{this.props.max} º   -   </span><span className="min">{this.props.min}º</span>
            </div>
        );
      }
    }
  
    export default CardDetail;