(this["webpackJsonprom-website"]=this["webpackJsonprom-website"]||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(16),r=n.n(s),o=(n(39),n(9)),i=n(10),l=(n.p,n(40),n(41),n(42),n(3)),u=n(2);var j=function(t){var e=t.image_url,n=t.title,c=t.rating,a=t.url,s=t.console_name,r=(t.setUrl,Object(l.e)());return Object(u.jsxs)("div",{id:"card",onClick:function(){console.log(a),sessionStorage.setItem("url",a),r.push("/details")},children:[Object(u.jsx)("img",{src:"".concat(e),alt:""}),Object(u.jsxs)("h4",{children:[" ",function(t){if(null!=t){if(t.length>30){var e=t.substr(30,t.length);return t.replace(e,"...")}return t}}(n)," "]}),Object(u.jsxs)("p",{children:[" ",c," "]}),Object(u.jsx)("div",{id:"console_name",children:Object(u.jsxs)("p",{children:[" ",s," "]})})]})},d=n(7),h=n.n(d);var p=function(t){t.setData;var e=t.data,n=(t.url,t.setUrl);return Object(u.jsx)("div",{id:"card-group",children:0!=e.length?e.map((function(t){return Object(u.jsx)(j,{title:t.title,image_url:t.img,rating:t.rating,url:t.url,console_name:t.console_name,setUrl:n})})):Object(u.jsx)("h1",{children:"Loading..."})})},b=n(33),f=(n(71),n(72),n(94));function m(t){t.data;var e=t.setData,n=Object(c.useState)([]),a=Object(i.a)(n,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){h()("https://roms-scraper.herokuapp.com/api/consoles_list").then((function(t){r(t.data)}))}),[]),Object(u.jsxs)("div",{id:"consoles-parent",children:[Object(u.jsx)("div",{id:"open-menu",onClick:function(){document.getElementById("consoles_list").style.transform="translateX(0px)"},children:Object(u.jsx)(f.a,{})}),Object(u.jsxs)("div",{id:"consoles_list",children:[Object(u.jsx)(f.a,{style:{display:"flex",marginRight:"auto",margin:"10px"},onClick:function(){document.getElementById("consoles_list").style.transform="translateX(-300px)"}}),s.map((function(t){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{onClick:function(){for(var n=1;n<=8;n++)e([]),h()("https://roms-scraper.herokuapp.com/api/console/".concat(n,"?name=").concat(t.code_name)).then((function(t){console.log(t.data),t.data.forEach((function(t){e((function(e){return[].concat(Object(o.a)(e),[t])}))}))}))},children:[Object(u.jsx)("img",{src:t.image,alt:"",id:"consoles_image"}),t.name]}),Object(u.jsx)("br",{})]})}))]})]})}var O=function(t){var e=t.data,n=t.setData,c=Object(l.e)();return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(m,{data:e,setData:n}),Object(u.jsx)("h1",{id:"heading",onClick:function(){for(var t=1;t<=6;t++)n([]),h()("https://roms-scraper.herokuapp.com/api/homepage/"+t).then((function(t){console.log(t.data),t.data.forEach((function(t){n((function(e){return[].concat(Object(o.a)(e),[t])}))}))}));c.push("/")},children:"RomsMaster"}),Object(u.jsx)("div",{id:"input",children:Object(u.jsx)("input",{type:"text",onKeyPress:function(t){if("Enter"===t.key&&0!=t.target.value.length){n([]);for(var e=1;e<=3;e++)h()("https://roms-scraper.herokuapp.com/api/search?q="+t.target.value+"&page="+e).then((function(t){n([]),console.log(t.data),t.data.forEach((function(t){n((function(e){return[].concat(Object(o.a)(e),[t])}))}))}))}else 0==t.target.value.length&&c.push("/")}})})]})},g=(n(73),n(32)),x=n.n(g);var v=function(t){t.setUrl;var e=Object(c.useState)([]),n=Object(i.a)(e,2),a=n[0],s=n[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),l=o[0],j=o[1],d=[];return 0!=a.length&&(d=a.slice(1,a.length)),Object(c.useEffect)((function(){var t=sessionStorage.getItem("url");h()("https://roms-scraper.herokuapp.com/api/details?url="+t).then((function(t){s([]),s(t.data)}))}),[]),Object(u.jsxs)("div",{id:"details__div",children:[0!=l.length&&Object(u.jsx)("iframe",{src:l,style:{display:"none"},frameborder:"0"}),0!=a.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:"https://www.gamulator.com/".concat(a[0].image),id:"poster",alt:""}),Object(u.jsxs)("div",{id:"text",children:[d.map((function(t){return Object(u.jsxs)("p",{children:[" ",t," "]})})),Object(u.jsxs)("button",{id:"download",onClick:function(){h()("https://roms-scraper.herokuapp.com/api/download?url="+sessionStorage.getItem("url")).then((function(t){console.log(t.data),j(t.data)}))},children:[Object(u.jsx)(x.a,{}),"Download"]})]})]}):Object(u.jsx)("h1",{children:"Loading..."})]})};var k=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(),r=Object(i.a)(s,2),j=r[0],d=r[1];return console.log(j),Object(c.useEffect)((function(){for(var t=1;t<=8;t++)a([]),h()("https://roms-scraper.herokuapp.com/api/homepage/"+t).then((function(t){console.log(t.data),t.data.forEach((function(t){a((function(e){return[].concat(Object(o.a)(e),[t])}))}))}))}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(O,{data:n,setData:a}),Object(u.jsx)(l.a,{path:"/",exact:!0,children:Object(u.jsx)(p,{data:n,setData:a,url:j,setUrl:d})}),Object(u.jsx)(l.a,{path:"/details",exact:!0,children:Object(u.jsx)(v,{url:j,setUrl:d})})]})})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),_()}},[[79,1,2]]]);
//# sourceMappingURL=main.16de592e.chunk.js.map