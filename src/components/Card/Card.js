import React, { Component } from 'react';

import './Card.css'; 
  
  class Card extends Component {
  
      constructor(props) {
          super(props);
      }
  
     
      render(){
        return (
            <div className="col-md-3">
                <div className="thumbnail card card-primary">
                    <h1 className="temperatura">
                        {this.props.temperatura}º
                    </h1>
                    <h3>
                       {this.props.nomecidade}, {this.props.nomepais}
                    </h3>
                    <h3 className="descricao">
                        {this.props.descricao}
                    </h3>    

                </div>
            </div>
                       
                                          
        );
      }
    }
  
    export default Card;