(this.webpackJsonpomdb=this.webpackJsonpomdb||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(7),r=c.n(i),o=(c(13),c(8)),s=c(4),j=(c(14),c(15),c(0)),l=function(e){var t=e.movies,c=e.handleFavoritesClick,n=e.favoriteComponent;return Object(j.jsx)("div",{className:"list__container",children:t.map((function(e,t){return Object(j.jsxs)("div",{className:"movie__container",children:[Object(j.jsx)("img",{src:e.Poster,alt:e.Title}),Object(j.jsx)("div",{className:"overlay",onClick:function(){return c(e)},children:Object(j.jsx)(n,{})})]},t)}))})},u=function(e){var t=e.heading;return Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("h1",{children:t})})},v=function(e){var t=e.query,c=e.setQuery;return Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("input",{type:"text",placeholder:"Search",className:"search__box",value:t,onChange:function(e){return c(e.target.value)}})})},d=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("span",{className:"favorite",children:"Add to Favorite \u2665"})})},f=function(){return Object(j.jsx)("span",{children:"Remove from favorites \u274c"})};c(17).config();var b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(s.a)(i,2),b=r[0],h=r[1],m=Object(n.useState)([]),O=Object(s.a)(m,2),p=O[0],x=O[1];Object(n.useEffect)((function(){!function(e){var t="http://www.omdbapi.com/?s=".concat(e,"&apikey=").concat("a83850fc");fetch(t).then((function(e){return e.json()})).then((function(e){e.Search&&a(e.Search),console.log(e)})).catch((function(e){return console.log("Something went wrong! "+e)}))}(b)}),[b]),Object(n.useEffect)((function(){localStorage.getItem("react-movie-app-favorites")?x(JSON.parse(localStorage.getItem("react-movie-app-favorites"))):x([])}),[]);var g=function(e){localStorage.setItem("react-movie-app-favorites",JSON.stringify(e))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"heading",children:[Object(j.jsx)(u,{heading:"Movies"}),Object(j.jsx)(v,{query:b,setQuery:h})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(l,{movies:c,handleFavoritesClick:function(e){var t=[].concat(Object(o.a)(p),[e]);x(t),g(t)},favoriteComponent:d})}),Object(j.jsx)("div",{className:"favorite__heading",children:Object(j.jsx)(u,{heading:"Favorites"})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(l,{movies:p,handleFavoritesClick:function(e){var t=p.filter((function(t){return t.imdbID!==e.imdbID}));x(t),g(t)},favoriteComponent:f})})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.90309235.chunk.js.map