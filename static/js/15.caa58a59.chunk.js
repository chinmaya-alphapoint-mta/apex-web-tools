webpackJsonp([15],{1101:function(e,t,a){var n=a(1102);"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1};r.transform=void 0;a(942)(n,r);n.locals&&(e.exports=n.locals)},1102:function(e,t,a){t=e.exports=a(48)(!1),t.push([e.i,".dual-fluid-header-fixed-content-layout__accent-bar{height:21.5rem;margin-bottom:-21.5rem;background-image:var(--accent-bar__gradient);width:100%;-ms-flex-negative:0;flex-shrink:0}.dual-fluid-header-fixed-content-layout__header-secondary{min-height:7.5rem;height:7.5rem}.dual-fluid-header-fixed-content-layout__fixed-container{width:95%;max-width:1200px;margin:4rem auto 0;-ms-flex:1 0 auto;flex:1 0 auto}.dual-fluid-header-fixed-content-layout__footer{margin-top:8rem;-ms-flex-negative:0;flex-shrink:0}@media only screen and (max-width:48rem){.dual-fluid-header-fixed-content-layout__footer{margin-top:3.4rem}}",""])},213:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a.n(n),i=a(6),o=a(1101),c=(a.n(o),a(982)),d=Object(i.b)("dual-fluid-header-fixed-content-layout"),u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d("accent-bar")}),r.a.createElement("div",{className:d("header-secondary")},e.headerSecondary),r.a.createElement("div",{className:d("fixed-container")},e.children),r.a.createElement("div",{className:d("footer")},e.footer))};t.default=Object(c.a)(u)},982:function(e,t,a){"use strict";function n(e){var t=function(t){var a=t.isAuthenticated,n=t.location,r=t.pendingAuth,o=t.redirectFromLogin;return r?i.a.createElement(u.a,null):a?i.a.createElement(e,t):(o(n),i.a.createElement(c.c,{to:Object(l.a)("/login")}))},a=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},n=function(e){return{redirectFromLogin:function(t){return e(Object(d.i)(t))}}};return Object(o.connect)(a,n)(t)}var r=a(0),i=a.n(r),o=a(8),c=a(37),d=a(75),u=a(348),l=a(23);t.a=n}});