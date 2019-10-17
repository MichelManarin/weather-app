import React, { Component } from 'react';
import './PanelBusca.css'; 

class PanelBusca extends Component {

    constructor(props) {
        super(props);
        this.state = {nomeCidade: ''};
        this.handleChange = this.handleChange.bind(this);
    }

   handleChange(event) {
        this.setState({nomeCidade: event.target.value});
   }
 
    render(){
      return (
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={this.props.callOpenWeather}>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="input-group">
                                <div className="form-group">
                                    <label className="position-absolute"><small>Nome</small></label>
                                    <input onChange={this.handleChange} value={this.state.nomeCidade} className="form-control input-busca" name="filtroCidade" id="filtroCidade" placeholder="Digite o nome da cidade">
                                    </input>
                                </div>
                                <button className="btn btn-green btn-filtro" id="btnFiltrar" type="submit">Filtrar</button>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>                                   
                                        
      );
    }
  }

  export default PanelBusca;