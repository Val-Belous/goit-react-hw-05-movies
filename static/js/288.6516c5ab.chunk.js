"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[288],{9288:function(t,n,r){r.r(n),r.d(n,{default:function(){return o}});var e=r(885),u=r(2791),a=r(6871),c=r(7422),s=r(184),i=function(t){var n=t.name,r=t.text;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",n]}),(0,s.jsx)("p",{children:r})]})})},o=function(){var t=(0,u.useState)([]),n=(0,e.Z)(t,2),r=n[0],o=n[1],f=(0,a.UO)().movieId;return(0,u.useEffect)((function(){(0,c.ug)(f).then((function(t){return o(t)}))}),[f]),(0,s.jsx)(s.Fragment,{children:r.length?(0,s.jsx)("ul",{children:r.length&&r.map((function(t){return(0,s.jsx)(i,{name:t.author,text:t.content},t.id)}))}):(0,s.jsx)("h3",{children:"There is no reviews yet"})})}},7422:function(t,n,r){r.d(n,{bp:function(){return f},dB:function(){return p},ku:function(){return o},l$:function(){return h},ug:function(){return v}});var e=r(5861),u=r(7757),a=r.n(u),c=r(4569),s={api_key:"a1fbf574afa240654ce82ff2490808e3"},i=r.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:s}),o=function(){var t=(0,e.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/trending/movie/day");case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/search/movie",{params:{query:n}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("\n/movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=288.6516c5ab.chunk.js.map