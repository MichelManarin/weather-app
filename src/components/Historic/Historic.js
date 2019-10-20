import React, { Component } from 'react';

import './Historic.css'; 
class Historic extends Component {

    formataData(data) {
      let dat = new Date(data);
      let options = { year: "numeric", month: "numeric", day: "numeric" };        
      return dat.toLocaleDateString( dat.getTimezoneOffset(), options );
    }
 
    render(){
      return (
        <div>
          <h4>{this.props.nomecidade} - {this.formataData(this.props.data)} </h4>
          
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Mínima</th>
                <th scope="col">Máxima</th>
              </tr>
            </thead>

            <tbody>
              { this.props.tempo && this.props.tempo.map((c, i) =>  
              <tr >
                <th scope="row">{this.formataData(c.data)}</th>
                <th scope="row">{c.min}º</th>
                <th scope="row">{c.max}º</th>
              </tr>
                )}  
            </tbody>
          </table>
        </div>
      );
    }
  }

  export default Historic;