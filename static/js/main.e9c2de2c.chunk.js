(this.webpackJsonppokadex=this.webpackJsonppokadex||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(9),r=n.n(i),s=(n(69),n(43)),o=n(36),j=n(11),h=(n(70),n(35)),d=n(28),u=n.n(d),p=n(37),l=n(105),b=n(107),x=n(109),O=n(110),m=n(111),f=n(112),g=n(113),v=n(114),y=n(115),k=n(120),w=n(119),C=n(117),S=n(116),I=n(6),P=Object(l.a)((function(e){return{pokedexContainer:{paddingTop:"20px",paddingRight:"50px",paddingLeft:"50px"},cardMediaStyle:{height:130,width:"100%",paddingTop:"36%",margin:"auto",backgroundSize:"cover"},cardContentStyle:{textAlign:"center"},searchIconWrapper:{display:"flex",alignItems:"center",justifyContent:"center"},input:{color:"white",backgroundColor:"white"}}}));var F=function(e){Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=200");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c={},n.results.forEach((function(e,t){c[t+1]={id:t+1,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png")}})),i(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var t=Object(c.useState)([]),n=Object(h.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(""),s=Object(h.a)(r,2),o=s[0],j=s[1],d=P(),l=e.history;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(v.a,{searchBar:!0,position:"static",children:Object(I.jsx)(y.a,{children:Object(I.jsxs)(b.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(I.jsx)(b.a,{item:!0,children:Object(I.jsx)(g.a,{children:"POKADEX"})}),Object(I.jsx)(b.a,{item:!0,children:Object(I.jsxs)(k.a,{className:d.searchIconWrapper,children:[Object(I.jsx)(S.a,{}),Object(I.jsx)(w.a,{className:d.input,id:"outlined-basic",label:"Search...",variant:"outlined",size:"small",color:"white",onChange:function(e){return function(e){j(e.target.value)}(e)}})]})})]})})}),a?Object(I.jsx)(b.a,{container:!0,spacing:2,className:d.pokedexContainer,children:Object.keys(a).map((function(e){return a[e].name.includes(o)&&(t=a[e],Object(I.jsx)(b.a,{item:!0,xs:12,sm:4,lg:2,children:Object(I.jsxs)(x.a,{children:[Object(I.jsx)(O.a,{onClick:function(){return l.push("/".concat(t.id),{detail:t.id})},children:Object(I.jsx)(m.a,{className:d.cardMediaStyle,image:t.sprite})}),Object(I.jsx)(f.a,{className:d.cardContentStyle,children:Object(I.jsxs)(g.a,{variant:"h5",children:[t.id,": ",t.name]})})]})},t.id));var t}))}):Object(I.jsx)(C.a,{})]})},N=n(118),T=Object(l.a)({cardStyle:{},cardMediaStyle:{width:130,height:130},buttonCss:{marginTop:20}});var E=function(e){Object(c.useEffect)((function(){function t(){return(t=Object(p.a)(u.a.mark((function t(){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(e.location.state.detail));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,i(c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var t=Object(c.useState)(""),n=Object(h.a)(t,2),a=n[0],i=n[1],r=T(),s=e.history;return Object(I.jsx)(I.Fragment,{children:a?function(){var e=a.name,t=a.id,n=a.species,c=a.height,i=a.weight,o=a.types,j="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png");return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(g.a,{variant:"h2",children:["".concat(t,". ").concat(e)," "]}),Object(I.jsx)("img",{src:j,className:r.cardMediaStyle,alt:"hinh"}),Object(I.jsx)(g.a,{variant:"h5",children:"Pokemon Info"}),Object(I.jsxs)(g.a,{variant:"h6",children:["Species: ",n.name]}),Object(I.jsxs)(g.a,{variant:"h6",children:["Height: ",c]}),Object(I.jsxs)(g.a,{variant:"h6",children:["Weight: ",i]}),Object(I.jsxs)(g.a,{variant:"h6",children:["Types:  ",o.map((function(e){return e.type.name})).toString(",")]}),Object(I.jsx)(N.a,{className:r.buttonCss,variant:"contained",size:"large",color:"primary",onClick:function(){s.push("/")},children:"Back To Home"})]})}():Object(I.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:Object(I.jsx)(C.a,{})})})};var M=function(e){return Object(I.jsxs)(o.a,{children:[Object(I.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(I.jsx)(F,Object(s.a)({},e))}}),Object(I.jsx)(j.a,{exact:!0,path:"/:pokemonId",render:function(e){return Object(I.jsx)(E,Object(s.a)({},e))}})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},B=n(13),z=Object(B.a)();r.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(j.b,{history:z,children:Object(I.jsx)(M,{})})}),document.getElementById("root")),A()}},[[78,1,2]]]);
//# sourceMappingURL=main.e9c2de2c.chunk.js.map