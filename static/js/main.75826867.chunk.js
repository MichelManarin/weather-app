(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(58)},38:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c);a(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(14),s=a(15),l=a(13),m=a.n(l),u=a(18),d=a(3),p=a(4),h=a(6),f=a(5),b=a(8),v=a(7),E=(a(40),a(41),a(42),a(43),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement(o.c,{className:"navbar-brand",to:"/"},"WEATHER")),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/history"},"Hist\xf3rico"))))))}}]),t}(n.Component)),O=(a(49),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={nomeCidade:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){this.setState({nomeCidade:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("form",{onSubmit:this.props.callOpenWeather},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:this.handleChange,value:this.state.nomeCidade,className:"form-control input-busca",name:"filtroCidade",id:"filtroCidade",placeholder:"Digite o nome da cidade"})),r.a.createElement("button",{disabled:!this.state.nomeCidade,className:"btn btn-green btn-filtro",id:"btnFiltrar",type:"submit"},"Filtrar")))))))}}]),t}(n.Component)),j=(a(50),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"thumbnail card card-primary"},r.a.createElement("h1",{className:"temperatura"},this.props.temperatura,"\xba"),r.a.createElement("h3",null,this.props.nomecidade,", ",this.props.nomepais),r.a.createElement("h3",{className:"descricao"},this.props.descricao)))}}]),t}(n.Component)),y=(a(51),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).showDetail=!0,a.state={showDetail:!1},a._handleClick=a._handleClick.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"_ConverteMetreSeg",value:function(e){return(3.6*e).toFixed(0)}},{key:"_handleClick",value:function(){this.setState({showDetail:!1===this.state.showDetail})}},{key:"render",value:function(){return this.state.showDetail?r.a.createElement("div",{onClick:this._handleClick},r.a.createElement("div",{className:"detalhe col-md-2 serrilhado"},r.a.createElement("p",null,this.props.desc),r.a.createElement("span",{className:"max"},"Vento: ",this._ConverteMetreSeg(this.props.vento)," km/h"))):r.a.createElement("div",{onClick:this._handleClick},r.a.createElement("div",{className:"detalhe col-md-2 serrilhado"},r.a.createElement("h3",null,this.props.datastr," "),r.a.createElement("span",{className:"max"},this.props.max," \xba   -   "),r.a.createElement("span",{className:"min"},this.props.min,"\xba")))}}]),t}(n.Component)),g=a(16),w=a.n(g),C=a(29),k=a.n(C),N=a(30),x=a.n(N),D=a(20),_=(a(52),x()(k.a)),H=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).callApiHistorico=function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://weather-app-api-michel-manarin.herokuapp.com/inserthistoric",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){D.b.error("Ocorreu um erro ao atualizar o hist\xf3rico! "+e.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})})).then((function(e){D.b.success("Hist\xf3rico atualizado com sucesso!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.callOpenWeatherDetail=function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.openweathermap.org/data/2.5/forecast?q="+t+"&APPID=9ffe2ca11ecd1ca4ab7e197b55f4acfe&units=metric&lang=pt").then((function(e){return e.json()})).then((function(e){if(200==e.cod){var t,n=0,c=[],i="S",o=0,s=999,l="",m=new Array("Domingo","Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado");for(var u in e.list){var d=e.list[u],p=new Date(d.dt_txt);(new Date).getDay()!==p.getDay()&&(t!==(l=m[p.getDay()])&&"S"!==i&&4!==n&&(c.push({data:d.dt_txt.slice(0,10),datastr:t,max_temp:o.toFixed(0),min_temp:s.toFixed(0),descricao:d.weather[0].description,vento_velocidade:d.wind.speed}),o=0,s=999,n+=1),t=l,i="N",d.main.temp_max>o&&(o=d.main.temp_max),d.main.temp_min<s&&(s=d.main.temp_min))}(n=4)&&c.push({data:d.dt_txt.slice(0,10),datastr:l,max_temp:o.toFixed(0),min_temp:s.toFixed(0),descricao:d.weather[0].description,vento_velocidade:d.wind.speed}),a.setState({detalhes:c});var h={cidade:a.state.cidade,previsao:[]};h.previsao=c,a.callApiHistorico(h)}else 404==e.cod?_.fire(r.a.createElement("p",{className:"alerta"},"Cidade n\xe3o encontrada!")):_.fire(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.callOpenWeather=function(){var e=Object(u.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=t.target.elements.filtroCidade.value,fetch("https://api.openweathermap.org/data/2.5/weather?q="+n+"&APPID=9ffe2ca11ecd1ca4ab7e197b55f4acfe&units=metric&lang=pt").then((function(e){return e.json()})).then((function(e){if(200===e.cod)a.setState({temperatura:parseFloat(e.main.temp.toFixed(0)),cidade:e.name,pais:e.sys.country,descricao:e.weather[0].description,error:""}),w()(".thumbnail").show();else{var t="Ocorreu um erro ao realizar a busca.";404===e.cod&&(t="Cidade n\xe3o encontrada"),a.setState({temperatura:"",cidade:"",pais:"",descricao:"",error:t}),w()(".thumbnail").hide()}})),a.callOpenWeatherDetail(n),w()(".input-busca").val("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.callOpenWeather=a.callOpenWeather.bind(Object(b.a)(a)),a.callOpenWeatherDetail=a.callOpenWeatherDetail.bind(Object(b.a)(a)),a.callApiHistorico=a.callApiHistorico.bind(Object(b.a)(a)),a.state={detalhes:[],erro:"",temperatura:"",cidade:"",descricao:"",pais:""},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){w()(".thumbnail").hide()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}),r.a.createElement(E,null),r.a.createElement("div",{className:"container body-content"},r.a.createElement("div",{className:"body-content"},r.a.createElement(O,{callOpenWeather:this.callOpenWeather}),r.a.createElement("div",{className:"row centered"},r.a.createElement(j,{nomecidade:this.state.cidade,temperatura:this.state.temperatura,nomepais:this.state.pais,descricao:this.state.descricao}),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"col-md-12 thumbnail card-detail"},this.state.detalhes&&this.state.detalhes.map((function(e,t){return r.a.createElement(y,{key:t,max:e.max_temp,min:e.min_temp,datastr:e.datastr,desc:e.descricao,vento:e.vento_velocidade})}))))))))}}]),t}(n.Component),S=(a(55),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"P\xe1gina n\xe3o encontrada / Page not found"))}}]),t}(n.Component)),W=(a(56),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"formataData",value:function(e){var t=new Date(e);return t.toLocaleDateString(t.getTimezoneOffset(),{year:"numeric",month:"numeric",day:"numeric"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h4",null,this.props.nomecidade," - ",this.formataData(this.props.data)," "),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Data"),r.a.createElement("th",{scope:"col"},"M\xednima"),r.a.createElement("th",{scope:"col"},"M\xe1xima"))),r.a.createElement("tbody",null,this.props.tempo&&this.props.tempo.map((function(t,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.formataData(t.data)),r.a.createElement("th",{scope:"row"},t.min,"\xba"),r.a.createElement("th",{scope:"row"},t.max,"\xba"))})))))}}]),t}(n.Component)),A=(a(57),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).callApiHistoric=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.ajax({method:"GET",url:"https://weather-app-api-michel-manarin.herokuapp.com/historic",contentType:"application/json",success:function(e){var t=[];Object.keys(e.Historico[0]).map((function(a){t.push(e.Historico[0][a])})),this.setState({historico:t})}.bind(Object(b.a)(a))});case 1:case"end":return e.stop()}}),e)}))),a.callApiHistoric=a.callApiHistoric.bind(Object(b.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(b.a)(a)),a.state={historico:[]},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.callApiHistoric()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"container body-content"},r.a.createElement("div",{className:"body-content"},this.state.historico&&this.state.historico.map((function(e,t){return r.a.createElement(W,{nomecidade:e.city,data:e.data,tempo:e.tempo,key:t})})))))}}]),t}(n.Component)),F=function(){return r.a.createElement(o.b,{basename:"/"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:function(){return r.a.createElement(H,null)}}),r.a.createElement(s.a,{path:"/history",component:function(){return r.a.createElement(A,null)}}),r.a.createElement(s.a,{path:"*",exact:!0,component:S})))};i.a.render(r.a.createElement(o.a,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.75826867.chunk.js.map