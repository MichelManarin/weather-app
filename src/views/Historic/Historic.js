import React, { Component } from 'react';
import $ from "jquery";
import Header from '../../components/Header/Header';
import Hist from '../../components/Historic/Historic';

import './Historic.css'; 
import { async } from 'q';
  
  class Historic extends Component {
  
      constructor(props) {
        super(props);
        this.callApiHistoric = this.callApiHistoric.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    
        this.state = {
          historico : []
        }
      }

      callApiHistoric = async () => {

        let dados=[];

        $.ajax({
          method:'GET',
          url:"https://weather-app-api-michel-manarin.herokuapp.com/historic",
          contentType: 'application/json',
           success:function(response){

            

            let data = [];
            Object.keys(response.Historico[0]).map(function(key){
              data.push(response.Historico[0][key]);
            })


            this.setState({ historico:data })

            console.log(this.state.historico)

           }.bind(this)

        });
        
      }

      componentDidMount() {
        this.callApiHistoric();
      }
  
      render(){
        return (
            <div>
                <Header />
                <div className="container body-content">
                    <div className="body-content">
                      { this.state.historico && this.state.historico.map((c, i) => 

                        <Hist nomecidade={c.city} data={c.data} tempo={c.tempo} key={i}/>

                       
                        
                      )}
                      

                    </div>
                </div>
              </div>            
                                          
        );
      }
    }
  
    export default Historic;