"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[740],{4740:function(t,e,r){r.r(e);var n=r(885),u=r(2791),a=r(501),c=r(6871),s=r(7422),i=r(184);e.default=function(){var t=(0,a.lr)(),e=(0,n.Z)(t,2),r=e[0],o=e[1],f=(0,u.useState)(""),p=(0,n.Z)(f,2),h=p[0],l=p[1],v=(0,u.useState)([]),d=(0,n.Z)(v,2),m=d[0],x=d[1],g=(0,c.TH)();(0,u.useEffect)((function(){null!==r.get("query")&&(0,s.bp)(r.get("query")).then(x)}),[r,x]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o({query:h}),l("")},children:[(0,i.jsx)("input",{type:"text",name:"query",value:h,onChange:function(t){l(t.target.value)}}),(0,i.jsx)("button",{type:"submit",children:"Search"})]}),m.length?(0,i.jsx)("ul",{children:m&&m.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{state:{from:g},to:"/movies/".concat(t.id),children:t.title?t.title:t.name})},t.id)}))}):(0,i.jsx)("h3",{children:"Please enter the search request"})]})}},7422:function(t,e,r){r.d(e,{bp:function(){return f},dB:function(){return p},ku:function(){return o},l$:function(){return h},ug:function(){return l}});var n=r(5861),u=r(7757),a=r.n(u),c=r(4569),s={api_key:"a1fbf574afa240654ce82ff2490808e3"},i=r.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:s}),o=function(){var t=(0,n.Z)(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("\n/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=740.371aa2b8.chunk.js.map