(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{16:function(e,t,a){},37:function(e,t,a){},47:function(e,t,a){e.exports=a(76)},5:function(e){e.exports=JSON.parse('{"title":"\u0633\u06cc\u062f \u0627\u062d\u0645\u062f \u0628\u062e\u0634\u06cc\u0627\u0646 \u062a\u06cc\u0632\u0627\u0628\u06cc","subTitle":"\u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633 php, Laravel","links":{"Gmail":"http://bakhshianseyedahmad@gmail.com","Site":"http://sa-bt.ir","twitter":"http://twitter.com/sabt"},"section":[{"title":"\u0645\u0646 \u0633\u06cc\u062f \u0627\u062d\u0645\u062f \u0628\u062e\u0634\u06cc\u0627\u0646 \u0647\u0633\u062a\u0645 ","content":"\u0645\u0646 \u0633\u06cc\u062f \u0627\u062d\u0645\u062f \u0628\u062e\u0634\u06cc\u0627\u0646 \u0647\u0633\u062a\u0645 \u0645\u062a\u0648\u0644\u062f 1368 \u0627\u0632 \u0634\u0647\u0631\u0633\u062a\u0627\u0646 \u06a9\u0648\u0647\u062f\u0634\u062a \u0627\u0633\u062a\u0627\u0646 \u0644\u0631\u0633\u062a\u0627\u0646. \u0628\u0646\u062f\u0647 \u062f\u0627\u0631\u0627\u06cc \u0645\u062f\u0631\u06a9 \u06a9\u0627\u0631\u0634\u0646\u0627\u0633\u06cc \u0627\u0631\u0634\u062f \u0645\u0647\u0646\u062f\u0633\u06cc \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0627\u0632 \u062f\u0627\u0646\u0634\u06af\u0627\u0647 \u063a\u06cc\u0631 \u0627\u0646\u062a\u0641\u0627\u0639\u06cc \u067e\u0648\u06cc\u0634 \u0642\u0645 \u0647\u0633\u062a\u0645 \u0648 \u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0636\u0631 \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u06cc \u0633\u0645\u062a \u0633\u0631\u0648\u0631 PHP/LARAVEL \u0645\u0634\u063a\u0648\u0644 \u0647\u0633\u062a\u0645.","img":"./images/sabt.jpg"},{"title":"\u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u0647\u0627/ \u0645\u0647\u0627\u0631\u062a \u0647\u0627","items":[{"item":"PHP","img":"../../images/sabt.png"},{"item":"HTML","img":"../../images/sabt.png"},{"item":"LARAVEL","img":"./images/sabt.png"},{"item":"JQUERY","img":"./images/sabt.png"},{"item":"AJAX","img":"../../images/sabt.png"},{"item":"Bootstrap","img":"../../images/sabt.png"},{"item":"React","img":"../../images/sabt.png"}]}],"icons":{"Down":"../../images/down.png","Up":"../../images/up.png"}}')},52:function(e,t,a){},63:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),l=(a(52),a(6)),o=a(7),s=a(9),m=a(8),u=a(10),p=(a(16),a(79)),g=a(80),h=a(11),b=(a(63),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={color:"white",bgColor:"#080616"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"generateColor",value:function(){return"#"+Math.random().toString(16).substr(-6)}},{key:"changeBg",value:function(){this.setState({color:this.generateColor(),bgColor:this.generateColor()}),document.getElementById("App").style.color=this.state.color,console.log(this.state.bgColor)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{bg:"",expand:"lg",fixed:"top",style:{padding:"0",margin:"0",backgroundColor:"gray"}},r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"ml-auto",style:{padding:"0",margin:"0",backgroundColor:"green"}},r.a.createElement(g.a.Link,{href:"#home"},r.a.createElement(h.Link,{to:"home",spy:!0,smooth:!0,duration:500},"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc")),r.a.createElement(g.a.Link,{href:"#link"},r.a.createElement(h.Link,{to:"aboutMe",spy:!0,smooth:!0,duration:500},"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646")),r.a.createElement(g.a.Link,null,r.a.createElement(h.Link,{to:"skill",spy:!0,smooth:!0,duration:500},"\u0645\u0647\u0627\u0631\u062a \u0647\u0627"))),r.a.createElement(g.a,{className:"mr-auto",style:{padding:"0",margin:"0",backgroundColor:"red"}},r.a.createElement(g.a.Link,{href:"#chenge"},r.a.createElement("button",{onClick:function(){e.changeBg()}},"change Color")))))}}]),t}(n.Component)),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"fullPage ".concat(this.props.className||"")},r.a.createElement(b,null),e)}}]),t}(n.Component),d=a(5),f=function(e){return[r.a.createElement("div",{onClick:e.onclick,style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transform:"translateY(130px)"}},r.a.createElement("div",{style:{maxWidth:"25px"}},r.a.createElement("img",{src:e.icon})))]},k=a(44),j=(a(71),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Element,{name:"home",className:"element",style:{margin:"0"}},r.a.createElement(E,null,r.a.createElement("h1",null,d.title),r.a.createElement("h3",null,d.subTitle),r.a.createElement("div",{className:"iconWrapper"},Object.keys(d.links).map((function(e){return r.a.createElement("div",{className:"icon"},r.a.createElement(k.SocialIcon,{url:d.links[e]}))}))),r.a.createElement(h.Link,{activeClass:"active",to:"aboutMe",smooth:"true"},r.a.createElement(f,{icon:d.icons.Down}))))}}]),t}(n.Component)),y=(a(37),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.skill;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:e.img,width:"100",height:"100"}),r.a.createElement("header",null,e.item),r.a.createElement("p",null,"Some quick example text to build on the card title and make up the bulk of the card's content."))}}]),t}(n.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Element,{name:"skill",className:"element",style:{margin:"0"}},r.a.createElement(E,null,r.a.createElement("h4",{style:{marginTop:"70px"}},d.section[1].title),r.a.createElement("div",{className:"cards"},d.section[1].items.map((function(e){return r.a.createElement(y,{skill:e})})))))}}]),t}(n.Component),O=(a(72),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Element,{name:"aboutMe",className:"element",style:{margin:"0"}},r.a.createElement(E,null,r.a.createElement("div",{className:"aboutMe"},r.a.createElement("div",{className:"aboutMe--img"},r.a.createElement("img",{src:d.section[0].img,alt:""})),r.a.createElement("div",{className:"aboutMe--content"},r.a.createElement("h5",null,d.section[0].title),r.a.createElement("p",null,d.section[0].content))),r.a.createElement(h.Link,{to:"skill",smooth:"true"},r.a.createElement(f,{icon:d.icons.Down}))))}}]),t}(n.Component)),C=a(45),w=a.n(C),N=(a(74),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",id:"App"},r.a.createElement(w.a,null),r.a.createElement(j,null),r.a.createElement(O,null),r.a.createElement(v,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.6bb86d32.chunk.js.map