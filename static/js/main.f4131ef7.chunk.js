(this["webpackJsonpcat-rating"]=this["webpackJsonpcat-rating"]||[]).push([[0],{13:function(e,t,a){e.exports=a(31)},18:function(e,t,a){},19:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(12),i=a.n(r),o=(a(18),a(10)),s=(a(19),a(9)),l=a.n(s);l.a.initializeApp({apiKey:"AIzaSyBeobdOJ-PFkIlswatl67ZRUatd4wSO5G8",authDomain:"cat-rating.firebaseapp.com",databaseURL:"https://cat-rating.firebaseio.com",projectId:"cat-rating",storageBucket:"cat-rating.appspot.com",messagingSenderId:"129371911466",appId:"1:129371911466:web:3abefac46e0e3b626ada53"});var u=l.a,m=function(e){return e.src?c.a.createElement("img",{src:e.src,alt:""}):null},h=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),s=Object(o.a)(i,2),l=s[0],h=s[1];function d(){fetch("https://api.thecatapi.com/v1/images/search?size=full").then((function(e){return e.json()})).then((function(e){return r(e[0])})),fetch("https://api.thecatapi.com/v1/images/search?size=full").then((function(e){return e.json()})).then((function(e){return h(e[0])}))}return Object(n.useEffect)((function(){d()}),[]),a&&l?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"placeholder"},c.a.createElement(m,{src:a.url})),c.a.createElement("div",{className:"placeholder",style:{left:"50%"}},c.a.createElement(m,{src:l.url})),c.a.createElement("div",{className:"banner"},"VS"),c.a.createElement("div",{className:"vote1",onClick:function(){var e=u.database().ref("cats"),t={id:a.id,matches:1,votes:1};e.push(t),d()}},"Cat 1"),c.a.createElement("div",{className:"vote2",onClick:function(){var e=u.database().ref("cats"),t={id:l.id,matches:1,votes:1};e.push(t),d()}},"Cat 2")):null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.f4131ef7.chunk.js.map