(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},179:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),l=a.n(o),i=(a(103),a(12)),c=a(13),s=a(16),u=a(14),p=a(17),h=(a(65),a(184)),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this,t=null,a="Show Form";return this.state.show&&(a="Hide Form",t=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSd1sLdB-sNR0X2F5C6lMEPU_tagEjNvMIaq3Ar-1Krs9mtl8A/viewform?embedded=true",width:"600",height:"1255",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading..."))),r.a.createElement("div",null,r.a.createElement(h.a,{type:"primary",onClick:function(){return e.handleClick()}},a),t)}}]),t}(r.a.Component),m=a(186),g=a(185),v=a(187),f=(a(78),r.a.Component,{apiKey:"AIzaSyBIe-MGvrJ2560PsAgDJhbou_ggIa3Ys6A",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1h-UJlgXtuydbPonqGLyPRx3FG8hp9XANk_TxjoQ46uw"});var w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={workshops:[],error:null},a.initClient=function(){window.gapi.client.init({apiKey:f.apiKey,discoveryDocs:f.discoveryDocs}).then(function(){var e;e=a.onLoad,window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:f.spreadsheetId,range:"Sheet1!A2:D"}).then(function(t){var a=t.result.values.map(function(e){return{category:e[0],instructor:e[1],title:e[2],description:e[3]}})||[];e({workshops:a})},function(t){e(!1,t.result.error)})})})},a.onLoad=function(e,t){if(e){var n=e.workshops,r=[];n.map(function(e,t){r.push(e)}),a.setState({workshops:r})}else a.setState({error:t})},a.createWorkshops=function(){var e=[],t=0,n=[];return a.state.workshops.map(function(a){var o=r.a.createElement("div",null,r.a.createElement("p",null,a.description),r.a.createElement("p",null,"Instructor: ",a.instructor));n.push(r.a.createElement(m.a,{className:"gutter-row",span:4},r.a.createElement(g.a,{content:o,title:a.title,trigger:"hover",overlayStyle:{width:"300px"}},r.a.createElement("div",{className:"gutter-box"}," ",a.category," ")))),(t+=1)>=6&&(t=0,e.push(r.a.createElement(v.a,{gutter:60},n)),n=[])}),e},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){if(this.state.error)return r.a.createElement("div",null,this.state.error);console.log(this.state.workshops);r.a.createElement("div",null,r.a.createElement("p",null,"Content A"),r.a.createElement("p",null,"Content B"));return r.a.createElement("div",{className:"gutter-example"},this.createWorkshops())}}]),t}(r.a.Component),E=a(90),y=a.n(E),b=(a(179),a(91)),j=a.n(b),k=a(92),O=a.n(k),x=a(93),A=a.n(x),C=a(94),I=a.n(C),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:window.innerWidth,display:!0}},r.a.createElement(y.a,{dots:!0,speed:1e3,autoplay:!0,autoplaySpeed:5e3,centerMode:!0,centerPadding:"0px",variableWidth:!0,adaptiveHeight:!0,overflow:"hidden"},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:j.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:O.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:A.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:I.a,height:"300px",alt:"logo"})))))}}]),t}(r.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,r.a.createElement(N,null)),r.a.createElement("p",{className:"App-header-text"},"Welcome to Great Explorations!"),r.a.createElement("p",{className:"App-text"},"Below you will find all of the 2019 workshops."),r.a.createElement("p",null,r.a.createElement(w,null)),r.a.createElement("p",null,r.a.createElement(d,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){},78:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/STEM.0130cd50.jpg"},92:function(e,t,a){e.exports=a.p+"static/media/girls.bf759622.jpg"},93:function(e,t,a){e.exports=a.p+"static/media/wheat.605e597d.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/town.9a0d7027.jpg"},98:function(e,t,a){e.exports=a(183)}},[[98,2,1]]]);
//# sourceMappingURL=main.a2dbd9c4.chunk.js.map