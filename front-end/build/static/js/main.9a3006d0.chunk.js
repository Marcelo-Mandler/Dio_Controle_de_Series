(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(4),r=c.n(s),i=(c(11),c(12),c(5)),j=c(6),d=c(3),a=c.n(d),h=c(0),l=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)(Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000/movies",e.next=3,fetch("http://localhost:5000/movies");case 3:return t=e.sent,e.t0=s,e.next=7,t.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)}))),[]),Object(h.jsxs)("table",{className:"striped",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Nome"}),Object(h.jsx)("th",{children:"Tipo"}),Object(h.jsx)("th",{children:"Epis\xf3dios"}),Object(h.jsx)("th",{children:"Epis\xf3dio atual"}),Object(h.jsx)("th",{children:"Visto por \xdaltimo"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e){var t=0===e.type?"S\xe9rie":"Filme",c=e.last_view.split("T",1);return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:t}),Object(h.jsx)("td",{children:e.total_ep}),Object(h.jsx)("td",{children:e.atual_ep}),Object(h.jsx)("td",{children:c})]},e.id)}))})]})},o=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Seu Controle de S\xe9ries e Filmes!"}),Object(h.jsx)(l,{})]})};r.a.render(Object(h.jsx)(o,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9a3006d0.chunk.js.map