(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(53)},33:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),o=(a(33),a(10)),s=a.n(o),l=a(15),m=a(2),u=a(3),p=a(5),d=a(4),h=a(8),f=a(6),b=(a(35),a(36),a(37),a(38),a(39),function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"WEATHER")),r.a.createElement("div",{className:"navbar-collapse collapse"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/history"},"Hist\xf3rico"))))))}}]),t}(n.Component)),v=(a(40),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={nomeCidade:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({nomeCidade:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("form",{onSubmit:this.props.callOpenWeather},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"position-absolute"},r.a.createElement("small",null,"Nome")),r.a.createElement("input",{onChange:this.handleChange,value:this.state.nomeCidade,className:"form-control input-busca",name:"filtroCidade",id:"filtroCidade",placeholder:"Digite o nome da cidade"})),r.a.createElement("button",{className:"btn btn-green btn-filtro",id:"btnFiltrar",type:"submit"},"Filtrar")))))))}}]),t}(n.Component)),O=a(12),E=a.n(O),j=(a(41),function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"thumbnail card card-primary"},r.a.createElement("h1",{className:"temperatura"},this.props.temperatura,"\xba"),r.a.createElement("h3",null,this.props.nomecidade,", ",this.props.nomepais),r.a.createElement("h3",{className:"descricao"},this.props.descricao)))}}]),t}(n.Component)),y=(a(42),function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-2 serrilhado"},r.a.createElement("h3",null,this.props.datastr),r.a.createElement("span",{className:"max"},this.props.max," \xba   -   "),r.a.createElement("span",{className:"min"},this.props.min,"\xba"))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).callApiHistorico=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://weather-app-api-michel-manarin.herokuapp.com/inserthistoric",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.callOpenWeatherDetail=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.openweathermap.org/data/2.5/forecast?q="+t+"&APPID=9ffe2ca11ecd1ca4ab7e197b55f4acfe&units=metric&lang=pt").then((function(e){return e.json()})).then((function(e){if(200==e.cod){var t,n=0,r=[],c="S",i=0,o=999,s="",l=new Array("Domingo","Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado");for(var m in e.list){var u=e.list[m];t!=(s=l[new Date(u.dt_txt).getDay()])&&"S"!=c&&4!=n&&(r.push({data:u.dt_txt.slice(0,10),datastr:t,max_temp:i.toFixed(0),min_temp:o.toFixed(0)}),i=0,o=999,n+=1),t=s,c="N",u.main.temp_max>i&&(i=u.main.temp_max),u.main.temp_min<o&&(o=u.main.temp_min)}(n=4)&&r.push({data:u.dt_txt.slice(0,10),datastr:s,max_temp:i.toFixed(0),min_temp:o.toFixed(0)}),a.setState({detalhes:r});var p={cidade:a.state.cidade,previsao:[]};p.previsao=r,a.callApiHistorico(p)}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.callOpenWeather=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=t.target.elements.filtroCidade.value,fetch("https://api.openweathermap.org/data/2.5/weather?q="+n+"&APPID=9ffe2ca11ecd1ca4ab7e197b55f4acfe&units=metric&lang=pt").then((function(e){return e.json()})).then((function(e){if(200==e.cod)a.setState({temperatura:parseFloat(e.main.temp.toFixed(0)),cidade:e.name,pais:e.sys.country,descricao:e.weather[0].description,error:""}),E()(".thumbnail").show();else{var t="Ocorreu um erro ao realizar a busca.";404==e.cod&&(t="Cidade n\xe3o encontrada"),a.setState({temperatura:"",cidade:"",pais:"",descricao:"",error:t}),E()(".thumbnail").hide()}})),a.callOpenWeatherDetail(n),E()(".input-busca").val("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.callOpenWeather=a.callOpenWeather.bind(Object(h.a)(a)),a.callOpenWeatherDetail=a.callOpenWeatherDetail.bind(Object(h.a)(a)),a.callApiHistorico=a.callApiHistorico.bind(Object(h.a)(a)),a.state={detalhes:[],erro:"",temperatura:"",cidade:"",descricao:"",pais:""},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){E()(".thumbnail").hide()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:"container body-content"},r.a.createElement("div",{className:"body-content"},r.a.createElement(v,{callOpenWeather:this.callOpenWeather}),r.a.createElement("div",{className:"row centered"},r.a.createElement(j,{nomecidade:this.state.cidade,temperatura:this.state.temperatura,nomepais:this.state.pais,descricao:this.state.descricao}),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"col-md-12 thumbnail card-detail"},this.state.detalhes&&this.state.detalhes.map((function(e,t){return r.a.createElement(y,{key:t,max:e.max_temp,min:e.min_temp,datastr:e.datastr})}))))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(17),x=a(13),g=(a(43),n.Component,a(44),function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"panel-historic title"},this.props.nomecidade," - ",this.props.data),this.props.tempo&&this.props.tempo.map((function(e,t){return r.a.createElement("div",{className:"panel-historic"},"M\xednima do dia: ",e.min," - M\xe1xima do dia: ",e.max)})))}}]),t}(n.Component)),k=(a(45),a(46),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).callApiHistoric=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:[],E.a.ajax({method:"GET",url:"https://weather-app-api-michel-manarin.herokuapp.com/historic",contentType:"application/json",success:function(e){var t=[];Object.keys(e.Historico[0]).map((function(a){t.push(e.Historico[0][a])})),this.setState({historico:t}),console.log(this.state.historico)}.bind(Object(h.a)(a))});case 2:case"end":return e.stop()}}),e)}))),a.callApiHistoric=a.callApiHistoric.bind(Object(h.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(h.a)(a)),a.state={historico:[]},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.callApiHistoric()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:"container body-content"},r.a.createElement("div",{className:"body-content"},this.state.historico&&this.state.historico.map((function(e,t){return r.a.createElement(g,{nomecidade:e.city,data:e.data,tempo:e.tempo,key:t})})))))}}]),t}(n.Component)),C=function(){return r.a.createElement(w.b,null,r.a.createElement(x.a,{path:"/",exact:!0,component:function(){return r.a.createElement(N,null)}}),r.a.createElement(x.a,{path:"/history",component:function(){return r.a.createElement(k,null)}}))};i.a.render(r.a.createElement(w.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.4fa57d4f.chunk.js.map