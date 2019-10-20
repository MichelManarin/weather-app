import React, { Component } from 'react';
import './CardDetail.css'; 
  
  class CardDetail extends Component {

    showDetail = true;

    constructor(props) {
          super(props);
          this.state = {showDetail : false}
          this._handleClick = this._handleClick.bind(this);
    }

    _ConverteMetreSeg(speed){
        let kmh = speed * 3.6;
        return kmh.toFixed(0);
    }

    _handleClick(){
        this.setState({showDetail: this.state.showDetail === false});
    }

    render(){

        if (this.state.showDetail) {
            return (
                <div onClick={this._handleClick}>
                    <div className="detalhe col-md-2 serrilhado">
                        <p>{this.props.desc}</p>
                        <span className="max">Vento: {this._ConverteMetreSeg(this.props.vento)} km/h</span>
                    </div>
                </div> 

            );
        } else { 
            return (
                <div onClick={this._handleClick}>
                    <div className="detalhe col-md-2 serrilhado">
                        <h3>{this.props.datastr} </h3>
                        <span className="max">{this.props.max} º   -   </span><span className="min">{this.props.min}º</span>
                    </div>
                </div> 
            );
        }
      }
    }
  
    export default CardDetail;