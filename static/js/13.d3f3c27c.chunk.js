webpackJsonp([13,10,15],{1101:function(e,o,t){var n=t(1102);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;t(942)(n,a);n.locals&&(e.exports=n.locals)},1102:function(e,o,t){o=e.exports=t(48)(!1),o.push([e.i,".dual-fluid-header-fixed-content-layout__accent-bar{height:21.5rem;margin-bottom:-21.5rem;background-image:var(--accent-bar__gradient);width:100%;-ms-flex-negative:0;flex-shrink:0}.dual-fluid-header-fixed-content-layout__header-secondary{min-height:7.5rem;height:7.5rem}.dual-fluid-header-fixed-content-layout__fixed-container{width:95%;max-width:1200px;margin:4rem auto 0;-ms-flex:1 0 auto;flex:1 0 auto}.dual-fluid-header-fixed-content-layout__footer{margin-top:8rem;-ms-flex-negative:0;flex-shrink:0}@media only screen and (max-width:48rem){.dual-fluid-header-fixed-content-layout__footer{margin-top:3.4rem}}",""])},1103:function(e,o,t){var n=t(1104);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;t(942)(n,a);n.locals&&(e.exports=n.locals)},1104:function(e,o,t){o=e.exports=t(48)(!1),o.push([e.i,".component-row-single__container{border-radius:1rem;overflow:hidden}.component-row-single__container:not(:last-of-type){margin-bottom:4rem}.component-row-single__header{padding:3rem 3rem 3.6rem;font-size:2.4rem}@media (min-width:320px) and (max-width:767px){.component-row-single{margin:0 .5rem}.component-row-single__header{font-size:1.8rem;padding:3rem 2.4rem 1.6rem}}",""])},1266:function(e,o,t){"use strict";var n=t(0),a=t.n(n),r=t(6),i=t(1267),c=(t.n(i),function(e){var o=Object(r.b)("component-row-dual",e.customClass);return a.a.createElement("div",{className:o()},a.a.createElement("div",{className:o("component-container-left")+" container-with-shadow"},e.component1),a.a.createElement("div",{className:o("component-container-right")+" container-with-shadow"},a.a.createElement("div",{className:o("component-container-right-content")},e.component2)))});o.a=c},1267:function(e,o,t){var n=t(1268);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;t(942)(n,a);n.locals&&(e.exports=n.locals)},1268:function(e,o,t){o=e.exports=t(48)(!1),o.push([e.i,".component-row-dual{display:-ms-flexbox;display:flex}.component-row-dual__component-container-left{width:67%;margin-right:3%;border-radius:1rem}.component-row-dual__component-container-right{width:30%}",""])},1269:function(e,o,t){var n=t(1270);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;t(942)(n,a);n.locals&&(e.exports=n.locals)},1270:function(e,o,t){o=e.exports=t(48)(!1),o.push([e.i,".dual-header-dashboard-layout__top-row{height:60rem;margin-bottom:4rem}.dual-header-dashboard-layout__top-row__component-container-left{background:var(--component__bg-color);position:relative}.dual-header-dashboard-layout__top-row__component-container-right{overflow:hidden;border-radius:1rem;background:var(--component__bg-color)}.dual-header-dashboard-layout__top-row__component-container-right-content{height:100%;overflow:auto}.dual-header-dashboard-layout__bottom-row{border-radius:1rem}.dual-header-dashboard-layout__bottom-row__component-container-100{overflow:hidden;border-radius:1rem;background-color:var(--component__bg-color)}.dual-header-dashboard-layout__notification-row{-webkit-box-shadow:var(--component__box-shadow);box-shadow:var(--component__box-shadow);border-radius:1rem;overflow:hidden}:root .dual-header-dashboard-layout__top-row__component-container-right-content,_:-ms-fullscreen{overflow:hidden}@media only screen and (max-width:76.8rem){.dual-header-dashboard-layout__top-row{height:140rem;-ms-flex-direction:column;flex-direction:column}.dual-header-dashboard-layout__top-row__component-container-left{width:100%;margin-right:unset;margin-bottom:3.7rem}.dual-header-dashboard-layout__top-row__component-container-right{width:100%}}@media only screen and (max-width:48rem){:root .dual-header-dashboard-layout__top-row,_:-ms-fullscreen{height:160rem}}",""])},130:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(0),a=t.n(n),r=t(1),i=t.n(r),c=t(6),d=t(1103),l=(t.n(d),function(e,o){var t=Object(c.b)("component-row-single",e.customClass);return a.a.createElement(a.a.Fragment,null,e.header&&a.a.createElement("div",{className:t("header")},o.t(e.header)),a.a.createElement("div",{className:t()},a.a.createElement("div",{className:t("component-container-100")},e.component)))});l.propTypes={component:i.a.object,customClass:i.a.string,header:i.a.string},l.contextTypes={t:i.a.func.isRequired},o.default=l},213:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(0),a=t.n(n),r=t(6),i=t(1101),c=(t.n(i),t(982)),d=Object(r.b)("dual-fluid-header-fixed-content-layout"),l=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:d("accent-bar")}),a.a.createElement("div",{className:d("header-secondary")},e.headerSecondary),a.a.createElement("div",{className:d("fixed-container")},e.children),a.a.createElement("div",{className:d("footer")},e.footer))};o.default=Object(c.a)(l)},217:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(0),a=t.n(n),r=t(6),i=t(213),c=t(1266),d=t(130),l=t(1269),m=(t.n(l),t(982)),s=Object(r.b)("dual-header-dashboard-layout"),u=function(e){return a.a.createElement(i.default,{headerSecondary:e.headerSecondary,footer:e.footer},a.a.createElement(d.default,{customClass:""+s("notification-row"),component:e.notificationComponent}),a.a.createElement(c.a,{customClass:s("top-row"),component1:e.component1,component2:e.component2}),a.a.createElement(d.default,{customClass:s("bottom-row")+" container-with-shadow",component:e.component3}))};o.default=Object(m.a)(u)},982:function(e,o,t){"use strict";function n(e){var o=function(o){var t=o.isAuthenticated,n=o.location,a=o.pendingAuth,i=o.redirectFromLogin;return a?r.a.createElement(l.a,null):t?r.a.createElement(e,o):(i(n),r.a.createElement(c.c,{to:Object(m.a)("/login")}))},t=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},n=function(e){return{redirectFromLogin:function(o){return e(Object(d.i)(o))}}};return Object(i.connect)(t,n)(o)}var a=t(0),r=t.n(a),i=t(8),c=t(37),d=t(75),l=t(348),m=t(23);o.a=n}});