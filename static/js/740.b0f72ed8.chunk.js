"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[740],{4740:function(e,t,r){r.r(t);var n=r(885),u=r(2791),a=r(501),c=r(6871),s=r(7422),i=r(184);t.default=function(){var e=(0,a.lr)(),t=(0,n.Z)(e,2),r=t[0],o=t[1],f=(0,u.useState)(""),p=(0,n.Z)(f,2),l=p[0],h=p[1],v=(0,u.useState)([]),d=(0,n.Z)(v,2),m=d[0],g=d[1],x=(0,c.TH)();console.log(),(0,u.useEffect)((function(){null!==r.get("query")&&(0,s.bp)(r.get("query")).then(g)}),[r,g]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===l)return alert("enter some request");o({query:l}),h("")},children:[(0,i.jsx)("input",{type:"text",name:"query",value:l,onChange:function(e){console.log(e.target.value),h(e.target.value)}}),(0,i.jsx)("button",{type:"submit",children:"Search"})]}),m.length?(0,i.jsx)("ul",{children:m&&m.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{state:{from:x},to:"/movies/".concat(e.id),children:e.title?e.title:e.name})},e.id)}))}):(0,i.jsx)("h3",{children:"Please enter the search request"})]})}},7422:function(e,t,r){r.d(t,{bp:function(){return f},dB:function(){return p},ku:function(){return o},l$:function(){return l},ug:function(){return h}});var n=r(5861),u=r(7757),a=r.n(u),c=r(4569),s={api_key:"a1fbf574afa240654ce82ff2490808e3"},i=r.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:s}),o=function(){var e=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("\n/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=740.b0f72ed8.chunk.js.map