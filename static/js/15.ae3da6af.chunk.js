webpackJsonp([15,9,16],{1084:function(e,o,t){"use strict";var a=t(0),n=t.n(a),r=t(33),c=t(1085),i=(t.n(c),function(e){var o=Object(r.b)("component-row-dual",e.customClass);return n.a.createElement("div",{className:o()},n.a.createElement("div",{className:o("component-container-left")+" container-with-shadow"},e.component1),n.a.createElement("div",{className:o("component-container-right")+" container-with-shadow"},n.a.createElement("div",{className:o("component-container-right-content")},e.component2)))});o.a=i},1085:function(e,o,t){var a=t(1086);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;t(756)(a,n);a.locals&&(e.exports=a.locals)},1086:function(e,o,t){o=e.exports=t(34)(!1),o.push([e.i,".component-row-dual{display:-ms-flexbox;display:flex}.component-row-dual__component-container-left{width:67%;margin-right:3%;border-radius:1rem}.component-row-dual__component-container-right{width:30%}",""])},1087:function(e,o,t){var a=t(1088);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;t(756)(a,n);a.locals&&(e.exports=a.locals)},1088:function(e,o,t){o=e.exports=t(34)(!1),o.push([e.i,".dual-header-dashboard-layout__top-row{height:60rem;margin-bottom:4rem}.dual-header-dashboard-layout__top-row__component-container-left{background:var(--component__bg-color);position:relative}.dual-header-dashboard-layout__top-row__component-container-right{overflow:hidden;border-radius:1rem;background:var(--component__bg-color)}.dual-header-dashboard-layout__top-row__component-container-right-content{height:100%;overflow:auto}.dual-header-dashboard-layout__bottom-row{border-radius:1rem}.dual-header-dashboard-layout__bottom-row__component-container-100{overflow:hidden;border-radius:1rem;background-color:var(--component__bg-color)}.dual-header-dashboard-layout__notification-row{-webkit-box-shadow:0 .5rem 2.5rem 0 var(--shadow__color);box-shadow:0 .5rem 2.5rem 0 var(--shadow__color);margin-bottom:3.7rem;border-radius:1rem;overflow:hidden}:root .dual-header-dashboard-layout__top-row__component-container-right-content,_:-ms-fullscreen{overflow:hidden}@media only screen and (max-width:76.8rem){.dual-header-dashboard-layout__top-row{height:140rem;-ms-flex-direction:column;flex-direction:column}.dual-header-dashboard-layout__top-row__component-container-left{width:100%;margin-right:unset;margin-bottom:3.7rem}.dual-header-dashboard-layout__top-row__component-container-right{width:100%}}@media only screen and (max-width:48rem){:root .dual-header-dashboard-layout__top-row,_:-ms-fullscreen{height:160rem}}",""])},149:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=t(0),n=t.n(a),r=t(1),c=t.n(r),i=t(33),d=t(977),l=(t.n(d),function(e,o){var t=Object(i.b)("component-row-single",e.customClass);return n.a.createElement(n.a.Fragment,null,e.header&&n.a.createElement("div",{className:t("header")},o.t(e.header)),n.a.createElement("div",{className:t()},n.a.createElement("div",{className:t("component-container-100")},e.component)))});l.propTypes={component:c.a.object,customClass:c.a.string,header:c.a.string},l.contextTypes={t:c.a.func.isRequired},o.default=l},280:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=t(0),n=t.n(a),r=t(33),c=t(975),i=(t.n(c),t(867)),d=Object(r.b)("dual-fluid-header-fixed-content-layout"),l=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:d("accent-bar")}),n.a.createElement("div",{className:d("header-secondary")},e.headerSecondary),n.a.createElement("div",{className:d("fixed-container")},e.children),n.a.createElement("div",{className:d("footer")},e.footer))};o.default=Object(i.a)(l)},284:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=t(0),n=t.n(a),r=t(33),c=t(280),i=t(1084),d=t(149),l=t(1087),m=(t.n(l),t(867)),s=Object(r.b)("dual-header-dashboard-layout"),u=function(e){return n.a.createElement(c.default,{headerSecondary:e.headerSecondary,footer:e.footer},n.a.createElement(d.default,{customClass:""+s("notification-row"),component:e.notificationComponent}),n.a.createElement(i.a,{customClass:s("top-row"),component1:e.component1,component2:e.component2}),n.a.createElement(d.default,{customClass:s("bottom-row")+" container-with-shadow",component:e.component3}))};o.default=Object(m.a)(u)},867:function(e,o,t){"use strict";function a(e){var o=function(o){var t=o.isAuthenticated,a=o.location,n=o.pendingAuth,c=o.redirectFromLogin;return n?r.a.createElement(l.a,null):t?r.a.createElement(e,o):(c(a),r.a.createElement(i.c,{to:Object(m.a)("/login")}))},t=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},a=function(e){return{redirectFromLogin:function(o){return e(Object(d.h)(o))}}};return Object(c.connect)(t,a)(o)}var n=t(0),r=t.n(n),c=t(8),i=t(26),d=t(55),l=t(271),m=t(16);o.a=a},975:function(e,o,t){var a=t(976);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;t(756)(a,n);a.locals&&(e.exports=a.locals)},976:function(e,o,t){o=e.exports=t(34)(!1),o.push([e.i,".dual-fluid-header-fixed-content-layout__accent-bar{height:21.5rem;margin-bottom:-21.5rem;background-image:var(--accent-bar__gradient);width:100%;-ms-flex-negative:0;flex-shrink:0}.dual-fluid-header-fixed-content-layout__header-secondary{min-height:7.5rem;height:7.5rem}.dual-fluid-header-fixed-content-layout__fixed-container{width:95%;max-width:1200px;margin:37px auto 0;-ms-flex:1 0 auto;flex:1 0 auto}.dual-fluid-header-fixed-content-layout__footer{margin-top:3rem;-ms-flex-negative:0;flex-shrink:0}",""])},977:function(e,o,t){var a=t(978);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;t(756)(a,n);a.locals&&(e.exports=a.locals)},978:function(e,o,t){o=e.exports=t(34)(!1),o.push([e.i,".component-row-single__container{border-radius:1rem;overflow:hidden}.component-row-single__container:not(:last-of-type){margin-bottom:4rem}.component-row-single__header{padding:0 3rem 3.6rem;font-size:2.4rem}",""])}});