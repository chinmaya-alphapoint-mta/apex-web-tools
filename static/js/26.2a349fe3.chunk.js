webpackJsonp([26,14,27],{1073:function(e,t,o){var n=o(1074);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;o(687)(n,a);n.locals&&(e.exports=n.locals)},1074:function(e,t,o){t=e.exports=o(28)(!1),t.push([e.i,".dual-fluid-header-fixed-content-layout__accent-bar{height:21.5rem;margin-bottom:-21.5rem;background-image:var(--accent-bar__gradient);width:100%;-ms-flex-negative:0;flex-shrink:0}.dual-fluid-header-fixed-content-layout__header-secondary{min-height:7.5rem;height:7.5rem}.dual-fluid-header-fixed-content-layout__fixed-container{width:95%;max-width:1200px;margin:37px auto 0;-ms-flex:1 0 auto;flex:1 0 auto}.dual-fluid-header-fixed-content-layout__footer{margin-top:3rem;-ms-flex-negative:0;flex-shrink:0}",""])},1075:function(e,t,o){var n=o(1076);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;o(687)(n,a);n.locals&&(e.exports=n.locals)},1076:function(e,t,o){t=e.exports=o(28)(!1),t.push([e.i,".component-row-single__container{border-radius:1rem;overflow:hidden}.component-row-single__container:not(:last-of-type){margin-bottom:4rem}.component-row-single__header{padding:0 3rem 3.6rem;font-size:2.4rem}",""])},1255:function(e,t,o){"use strict";var n=o(0),a=o.n(n),r=o(82),c=o(1256),i=(o.n(c),function(e){var t=Object(r.b)("component-row-dual",e.customClass);return a.a.createElement("div",{className:t()},a.a.createElement("div",{className:t("component-container-left")+" container-with-shadow"},e.component1),a.a.createElement("div",{className:t("component-container-right")+" container-with-shadow"},a.a.createElement("div",{className:t("component-container-right-content")},e.component2)))});t.a=i},1256:function(e,t,o){var n=o(1257);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;o(687)(n,a);n.locals&&(e.exports=n.locals)},1257:function(e,t,o){t=e.exports=o(28)(!1),t.push([e.i,".component-row-dual{display:-ms-flexbox;display:flex}.component-row-dual__component-container-left{width:67%;margin-right:3%;border-radius:1rem}.component-row-dual__component-container-right{width:30%}",""])},1258:function(e,t,o){var n=o(1259);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;o(687)(n,a);n.locals&&(e.exports=n.locals)},1259:function(e,t,o){t=e.exports=o(28)(!1),t.push([e.i,".dual-header-dashboard-layout__top-row{height:60rem;margin-bottom:4rem}.dual-header-dashboard-layout__top-row__component-container-left{background:var(--component__bg-color);position:relative}.dual-header-dashboard-layout__top-row__component-container-right{overflow:auto;border-radius:1rem;background:var(--component__bg-color)}.dual-header-dashboard-layout__top-row__component-container-right-content{height:100%;overflow:auto}.dual-header-dashboard-layout__bottom-row{border-radius:1rem}.dual-header-dashboard-layout__bottom-row__component-container-100{overflow:hidden;border-radius:1rem;background-color:var(--component__bg-color)}.dual-header-dashboard-layout__notification-row{-webkit-box-shadow:0 .5rem 2.5rem 0 var(--shadow__color);box-shadow:0 .5rem 2.5rem 0 var(--shadow__color)}@media only screen and (max-width:76.8rem){.dual-header-dashboard-layout__top-row{height:unset;-ms-flex-direction:column;flex-direction:column}.dual-header-dashboard-layout__top-row__component-container-left{width:unset;margin-right:unset;margin-bottom:3.7rem}.dual-header-dashboard-layout__top-row__component-container-right{width:unset}.dual-header-dashboard-layout__top-row__component-container-right-content{height:30rem}}",""])},149:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),a=o.n(n),r=o(1),c=o.n(r),i=o(82),d=o(1075),l=(o.n(d),function(e,t){var o=Object(i.b)("component-row-single",e.customClass);return a.a.createElement(a.a.Fragment,null,e.header&&a.a.createElement("div",{className:o("header")},t.t(e.header)),a.a.createElement("div",{className:o()},a.a.createElement("div",{className:o("component-container-100")},e.component)))});l.propTypes={component:c.a.object,customClass:c.a.string,header:c.a.string},l.contextTypes={t:c.a.func.isRequired},t.default=l},272:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),a=o.n(n),r=o(82),c=o(1073),i=(o.n(c),o(859)),d=Object(r.b)("dual-fluid-header-fixed-content-layout"),l=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:d("accent-bar")}),a.a.createElement("div",{className:d("header-secondary")},e.headerSecondary),a.a.createElement("div",{className:d("fixed-container")},e.children),a.a.createElement("div",{className:d("footer")},e.footer))};t.default=Object(i.a)(l)},282:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),a=o.n(n),r=o(82),c=o(272),i=o(1255),d=o(149),l=o(1258),s=(o.n(l),o(859)),m=Object(r.b)("dual-header-dashboard-layout"),u=function(e){return a.a.createElement(c.default,{headerSecondary:e.headerSecondary,footer:e.footer},a.a.createElement(d.default,{customClass:""+m("notification-row"),component:e.notificationComponent}),a.a.createElement(i.a,{customClass:m("top-row"),component1:e.component1,component2:e.component2}),a.a.createElement(d.default,{customClass:m("bottom-row")+" container-with-shadow",component:e.component3}))};t.default=Object(s.a)(u)},859:function(e,t,o){"use strict";function n(e){var t=function(t){var o=t.isAuthenticated,n=t.location,a=t.pendingAuth,c=t.redirectFromLogin;return a?r.a.createElement(l.a,null):o?r.a.createElement(e,t):(c(n),r.a.createElement(i.c,{to:Object(s.a)("/login")}))},o=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},n=function(e){return{redirectFromLogin:function(t){return e(Object(d.h)(t))}}};return Object(c.connect)(o,n)(t)}var a=o(0),r=o.n(a),c=o(7),i=o(31),d=o(50),l=o(262),s=o(21);t.a=n}});