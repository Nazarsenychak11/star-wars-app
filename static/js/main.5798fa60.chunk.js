(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=a(47),i=a(48),s=a(10),u=a(5),m=a(4);var g=function(){var e=r.a.createContext();return{Provider:function(t){var a=t.initialValue,c=void 0===a?{}:a,l=t.children,o=Object(n.useState)(c),i=Object(m.a)(o,2),s=i[0],u=i[1],g=Object(n.useMemo)(function(){return[s,u]},[s]);return r.a.createElement(e.Provider,{value:g},l)},useStore:function(t){var a=Object(n.useContext)(e),r=Object(m.a)(a,2),c=r[0],l=r[1];return t?[c[t],function(e){l("function"===typeof e?function(a){return Object(u.a)({},a,Object(s.a)({},t,e(a[t])))}:function(a){return Object(u.a)({},a,Object(s.a)({},t,Object(u.a)({},e)))})}]:[c,l]}}}(),d=g.Provider,p=g.useStore,f=a(46),v=(a(22),function(e){var t=e.categoryTitle,a=e.imageFilePath;return r.a.createElement("div",{className:"category-wrapper"},r.a.createElement(f.a,{to:"/".concat(t)},r.a.createElement("div",{className:"category",style:{background:"url(".concat(a,")")}},r.a.createElement("div",{className:"categoryText"},r.a.createElement("h2",null,t)))))}),y=function(e){var t=e.renderCategoryWidgets;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo",style:{background:"url(/images/sw_logo.svg)"}})),r.a.createElement("div",{className:"content"},t()))},E=(a(26),function(){var e=["films","people","planets","starships","vehicles","species"];return r.a.createElement(y,{renderCategoryWidgets:function(){return e.map(function(e,t){return r.a.createElement(v,{imageFilePath:"/images/categories/".concat(e,".png"),categoryTitle:e,key:t})})}})}),h=a(2),b=a.n(h),O=a(7),j=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&";return"https://swapi.dev/api/".concat(a,"/?page=").concat(t?e.nextPage:"1").concat("&"!==n?"&search=".concat(n):t?"&search=".concat(e.searchTerm):"")},w=function(e,t){return"https://swapi.dev/api/".concat(e,"/").concat(t)},x=function(){var e=Object(O.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.json();case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=p("singlePageState"),t=Object(m.a)(e,2)[1];return function(){var e=Object(O.a)(b.a.mark(function e(a,n){var r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(w(a,n));case 2:r=e.sent,t({loading:!0,category:a,id:n,element:r,related:{}});case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},k=function(){var e=p("singlePageState"),t=Object(m.a)(e,2),a=t[0],n=t[1];return function(){var e=Object(O.a)(b.a.mark(function e(t){var r,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={},c=t.filter(function(e){return a.element.hasOwnProperty(e)}),e.next=4,Promise.all(c.map(function(){var e=Object(O.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(a.element[t].map(function(){var e=Object(O.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,"people"===t?r.character=n:r[t]=n;case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 4:n(function(e){return Object(u.a)({},e,{related:Object(u.a)({},r),loading:!1})});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},P=(a(30),function(e){var t=e.category,a=e.element;return r.a.createElement("div",{className:"header-navigation"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"nav-item"},r.a.createElement(f.a,{to:"/"},"Home"),r.a.createElement("span",{className:"nav-divider"},"/")),r.a.createElement("span",{className:"nav-item"},r.a.createElement(f.a,{to:"/".concat(t)},t))),a&&r.a.createElement("span",{className:"nav-item"},r.a.createElement("span",{className:"nav-divider"},"/"),a.name?a.name:a.title))}),S=(a(32),function(e){var t=e.element,a=e.category,n=e.id,c=e.loading;return r.a.createElement("div",{className:"single-element-wrapper"},r.a.createElement("div",{className:"single-element-image",style:{background:"url('/images/".concat(a,"/").concat(n,".jpg')")}}),r.a.createElement("div",{className:"single-element-info"},c&&null===t?r.a.createElement("div",{className:"loader",style:{marginTop:60}}):null,null!==t?Object.keys(t).filter(function(e){return"string"===typeof t[e]&&"created"!==e&&"edited"!==e&&"url"!==e&&"homeworld"!==e}).map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("p",{className:"info-property"},e,": "),r.a.createElement("p",null,t[e]))}):null))}),C=(a(34),function(e){var t=e.category,a=e.element,n=a.id,c=a.img,l=a.name;return r.a.createElement(f.a,{to:"/".concat(t,"/").concat(n)},r.a.createElement("div",{className:"grid-element"},r.a.createElement("div",{className:"grid-element-upper",style:{background:"url(".concat(c,")")}}),r.a.createElement("div",{className:"grid-element-lower"},r.a.createElement("p",null,l))))}),T=(a(36),function(e){var t=e.clickCallback;return r.a.createElement("div",{className:"load-more-button",onClick:function(){return t(!0)}},r.a.createElement("p",null,"Load more"))}),I=function(e){var t=e.elements,a=e.loadMorecallback,n=e.category,c=e.nextPage,l=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-wrapper"},t.map(function(e,t){var a=e.url.split("/")[5],c={id:a,name:"films"!==n?e.name:e.title,img:"/images/".concat(n,"/").concat(a,".jpg")};return r.a.createElement(C,{key:t,element:c,category:n})})),l?r.a.createElement("div",{className:"loader"}):null,c&&0!==t.length?r.a.createElement(T,{clickCallback:a}):null)},F=function(e){var t=e.category,a=e.element,n=e.id,c=e.loading,l=e.categories,o=e.related;return r.a.createElement("div",{className:"wrapper-category"},r.a.createElement("div",{className:"header-category"},r.a.createElement("div",{className:"category-logo",style:{background:"url(/images/sw_logo.svg)"}}),r.a.createElement(P,{category:t,element:a})),r.a.createElement(S,{element:a,category:t,id:n,loading:c}),c&&null!==a?r.a.createElement("div",{className:"loader"}):null,l.map(function(e,t){return o.hasOwnProperty(e)&&o[e].length>0?r.a.createElement("div",{key:t},r.a.createElement("div",{className:"related-header-wrapper"},r.a.createElement("h2",null,"Related ",e)),r.a.createElement("div",{className:"category-grid"},r.a.createElement(I,{elements:o[e],category:"characters"===e||"pilots"===e||"residents"===e?"people":e,loading:c}))):null}))},J=(a(38),function(e){var t=e.match.params,a=t.category,c=t.id,l=p("singlePageState"),o=Object(m.a)(l,2),i=o[0],s=o[1],u=["characters","people","planets","species","starships","vehicles","films","residents","pilots"],g=function(e){var t=p("singlePageState"),a=Object(m.a)(t,1)[0],r=N(),c=k();return Object(n.useEffect)(function(){a.element&&c(e)},[a.element]),function(){var e=Object(O.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t,a);case 2:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}(u);return Object(n.useEffect)(function(){return function(){s({element:null,related:{},loading:!1,category:null,id:null})}},[]),Object(n.useEffect)(function(){s({element:null,related:{},loading:!0,category:null,id:null}),g(a,c)},[a,c]),r.a.createElement(F,{category:a,element:i.element,id:c,loading:i.loading,categories:u,related:i.related})}),M=a(9),_=(a(40),null),R=function(e){var t=e.callback,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],o=c[1];return r.a.createElement("div",{className:"searchform-wrapper"},r.a.createElement("input",{type:"text",value:l,onChange:function(e){var a=e.target.value;o(a),clearTimeout(_),_=setTimeout(function(){t(!1,a)},500)},placeholder:"Search"}))},V=function(e){var t=e.navCategory,a=e.updateItems,n=e.loading,c=e.elements,l=e.nextPage,o=e.category;return r.a.createElement("div",{className:"wrapper-category"},r.a.createElement("div",{className:"header-category"},r.a.createElement("div",{className:"category-logo",style:{background:"url(/images/sw_logo.svg)"}}),r.a.createElement(P,{category:t})),r.a.createElement(R,{callback:a,loading:n}),r.a.createElement("div",{className:"category-grid"},r.a.createElement(I,{elements:c,nextPage:l,loadMorecallback:a,category:o,loading:n})))},W=(a(42),function(e){var t=e.match.params.category,a=p("categoryState"),c=Object(m.a)(a,2),l=c[0],o=c[1],i=function(){var e=p("categoryState"),t=Object(m.a)(e,2),a=t[0],n=t[1];return function(){var e=Object(O.a)(b.a.mark(function e(t){var r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(u.a)({},a,{elements:[],loading:!0})),e.next=3,x(j(a,!1,t));case 3:r=e.sent,n(Object(u.a)({},a,{category:t,elements:Object(M.a)(r.results),nextPage:r.next&&r.next.match(/\d+/)[0],loading:!1}));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}(),s=function(){var e=p("categoryState"),t=Object(m.a)(e,2),a=t[0],n=t[1];return function(){var e=Object(O.a)(b.a.mark(function e(t,r){var c,l,o=arguments;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>2&&void 0!==o[2]?o[2]:"&",n(Object(u.a)({},a,{loading:!0,elements:"&"!==c?[]:Object(M.a)(a.elements)})),e.next=4,x(j(a,t,r,c));case 4:l=e.sent,n(Object(u.a)({},a,{elements:t?[].concat(Object(M.a)(a.elements),Object(M.a)(l.results)):Object(M.a)(l.results),searchTerm:t?a.searchTerm:c,nextPage:l.next&&l.next.match(/\d+/)[0],loading:!1}));case 6:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}(),g=Object(n.useRef)();Object(n.useEffect)(function(){g.current=l}),Object(n.useEffect)(function(){if(localStorage.getItem("".concat(t,"State"))){var e=JSON.parse(localStorage.getItem("".concat(t,"State")));o(Object(u.a)({},l,e))}else i(t);return function(){localStorage.setItem("".concat(g.current.category,"State"),JSON.stringify(g.current))}},[]);return r.a.createElement(V,{navCategory:t,updateItems:function(e,a){s(e,t,a)},loading:l.loading,elements:l.elements,nextPage:l.nextPage,category:l.category})});l.a.render(r.a.createElement(function(){return r.a.createElement(d,{initialValue:{categoryState:{elements:[],nextPage:null,category:null,loading:!1,searchTerm:""},singlePageState:{id:null,category:null,element:null,related:{},loading:!1}}},r.a.createElement(o.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:E}),r.a.createElement(i.a,{path:"/:category/",exact:!0,component:W}),r.a.createElement(i.a,{path:"/:category/:id",exact:!0,component:J})))},null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.5798fa60.chunk.js.map