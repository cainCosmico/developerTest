(this.webpackJsonpdeveloper_test=this.webpackJsonpdeveloper_test||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(29),a(56)),u=a(60),i=a(63),s=a(64),m=a(58),p=a(61),f=a(62),d=a(59),g=a(15),h=a(17),E=a.n(h),b=a(20),v=function(){var e=Object(b.a)(E.a.mark((function e(){var t,a,n,r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/","https://d34cxkwmgyq31b.cloudfront.net/test/test.json",e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://d34cxkwmgyq31b.cloudfront.net/test/test.json");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,n=a.features,r=n.map((function(e){return{id:e.id,place:e.properties.place,mag:e.properties.mag,utc:e.properties.utcTime}})),c=r.filter((function(e){return e.mag>=3})),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(n.useState)({loading:!0,data:[]}),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){v().then((function(e){r({loading:!1,data:e})}))}),[]),a},w=Object(o.a)({table:{minWidth:650}}),k=function(){var e=w(),t=j(),a=t.loading,c=t.data;return Object(n.useEffect)((function(){console.log(c)}),[c]),r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("h1",null,"Cargando datos..."),r.a.createElement(m.a,{component:d.a},r.a.createElement(u.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(s.a,null,"Place"),r.a.createElement(s.a,{align:"right"},"Mag"),r.a.createElement(s.a,{align:"right"},"Local Time"))),r.a.createElement(i.a,null,c.map((function(e){return r.a.createElement(f.a,{key:e.id},r.a.createElement(s.a,{component:"th",scope:"row"},e.place),r.a.createElement(s.a,{align:"right"},e.mag),r.a.createElement(s.a,{align:"right"},e.utc))}))))))};a(35);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.47d11efa.chunk.js.map