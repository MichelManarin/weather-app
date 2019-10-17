import React, { Component } from 'react';

import './Historic.css'; 
class Historic extends Component {

    constructor(props) {
        super(props);
    }
 
    render(){
      return (
        <div>
          <div className="panel-historic title">
              {this.props.nomecidade} - {this.props.data}
          </div>

           { this.props.tempo && this.props.tempo.map((c, i) =>  
             <div className="panel-historic">
              Mínima do dia: {c.min} - Máxima do dia: {c.max} 
            </div>

          )}  

         
        </div>
      
      );
    }
  }

  export default Historic;