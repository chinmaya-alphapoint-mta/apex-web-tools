webpackJsonp([6],{1030:function(t,e,r){"use strict";var n=r(8),a=r(15),o=r(1031),i=function(t){return{openSendReceiveSidePane:function(e,r){t(Object(a.p)(e,r))}}};e.a=Object(n.connect)(null,i)(o.a)},1031:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=r(0),c=r.n(i),l=r(1),s=r.n(l),u=r(996),d=r(6),m=r(992),f=r(997),p=(r.n(f),function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()),b=Object(d.b)("wallet-nav-item"),v=function(t){function e(){var t,r,o,i;n(this,e);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return r=o=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),o.onSendClick=function(){o.onBtnClick(!0)},o.onReceiveClick=function(){o.onBtnClick(!1)},o.onBtnClick=function(t){var e=o.props;(0,e.openSendReceiveSidePane)(t,e.product)},i=r,a(o,i)}return o(e,t),p(e,[{key:"render",value:function(){var t=this.props.showIconButtonLabel;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{iconName:"send",action:this.onSendClick,tooltipText:this.context.t("Send"),customClass:b(),showLabel:t}),c.a.createElement(u.a,{iconName:"receive",action:this.onReceiveClick,tooltipText:this.context.t("Receive"),customClass:b(),showLabel:t}))}}]),e}(c.a.Component);v.defaultProps={showIconButtonLabel:!0},v.propTypes={openSendReceiveSidePane:s.a.func.isRequired,product:m.a,showIconButtonLabel:s.a.bool},v.contextTypes={t:s.a.func.isRequired},e.a=v},1032:function(t,e,r){var n=r(1033);"string"===typeof n&&(n=[[t.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(938)(n,a);n.locals&&(t.exports=n.locals)},1033:function(t,e,r){e=t.exports=r(46)(!1),e.push([t.i,'.icon-button{min-width:4rem;height:4rem;border-radius:4px;color:var(--font__color-secondary);background:var(--primary__bg-color);border:1px solid var(--border-secondary);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.icon-button:hover,.icon-button:hover .icon-button__icon{color:var(--font__color-primary)}.icon-button__icon{-ms-flex-negative:0;flex-shrink:0;width:2rem;height:2rem;color:var(--font__color-secondary);-webkit-transition:var(--transition__settings);-o-transition:var(--transition__settings);transition:var(--transition__settings)}[tooltip]{position:relative}[tooltip]:before{content:"";position:absolute;top:-5px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);border-width:4px 6px 0;border-style:solid;border-color:var(--primary__bg-color) transparent transparent;z-index:999;opacity:0}.icon-button [tooltip-position=left]:before{left:0;top:50%;margin-left:-1rem;-webkit-transform:translatey(-50%) rotate(-90deg);-ms-transform:translatey(-50%) rotate(-90deg);transform:translatey(-50%) rotate(-90deg)}[tooltip-position=top]:before{left:50%}[tooltip-position=bottom]:before{top:100%;margin-top:.8rem;-webkit-transform:translateX(-50%) translatey(-100%) rotate(-180deg);-ms-transform:translateX(-50%) translatey(-100%) rotate(-180deg);transform:translateX(-50%) translatey(-100%) rotate(-180deg)}[tooltip-position=right]:before{left:100%;top:50%;margin-left:-3px;-webkit-transform:translatey(-50%) rotate(90deg);-ms-transform:translatey(-50%) rotate(90deg);transform:translatey(-50%) rotate(90deg)}[tooltip]:after{content:attr(tooltip);position:absolute;left:50%;top:-5px;-webkit-transform:translateX(-50%) translateY(-100%);-ms-transform:translateX(-50%) translateY(-100%);transform:translateX(-50%) translateY(-100%);background:var(--primary__bg-color);text-align:center;color:var(--font__color-secondary);padding:4px 2px;font-size:1.2rem;min-width:8rem;border-radius:5px;pointer-events:none;padding:4px;z-index:99;opacity:0}[tooltip-position=left]:after{left:0;top:50%;margin-left:-.6rem;-webkit-transform:translateX(-100%) translateY(-50%);-ms-transform:translateX(-100%) translateY(-50%);transform:translateX(-100%) translateY(-50%)}[tooltip-position=top]:after{left:50%}[tooltip-position=bottom]:after{top:100%;margin-top:.8rem;-webkit-transform:translateX(-50%) translateY(0);-ms-transform:translateX(-50%) translateY(0);transform:translateX(-50%) translateY(0)}[tooltip-position=right]:after{left:100%;top:50%;margin-left:.4rem;-webkit-transform:translateX(0) translateY(-50%);-ms-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}[tooltip]:hover:after,[tooltip]:hover:before{opacity:1}',""])},1034:function(t,e,r){e=t.exports=r(46)(!1),e.push([t.i,".wallet-nav-item{margin-left:1.2rem;padding:0 1rem;background:var(--wallet-card__button-bg-color);border:1px solid var(--wallet-card__button-border-color)}.wallet-nav-item__label{text-transform:capitalize;padding-left:1rem}",""])},1035:function(t,e,r){"use strict";var n=r(8),a=r(15),o=r(1036),i=function(t){return{openRetailFiatSidePane:function(e,r){t(Object(a.o)(e,r))}}};e.a=Object(n.connect)(null,i)(o.a)},1036:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=r(0),c=r.n(i),l=r(1),s=r.n(l),u=r(996),d=r(6),m=r(997),f=(r.n(m),function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()),p=Object(d.b)("wallet-nav-item"),b=function(t){function e(){var t,r,o,i;n(this,e);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return r=o=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),o.onDepositClick=function(){o.onBtnClick(!0)},o.onWithdrawClick=function(){o.onBtnClick(!1)},o.onBtnClick=function(t){var e=o.props;(0,e.openRetailFiatSidePane)(t,e.product)},i=r,a(o,i)}return o(e,t),f(e,[{key:"render",value:function(){var t=this.props.showIconButtonLabel;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{iconName:"deposit",action:this.onDepositClick,tooltipText:this.context.t("Deposit"),customClass:p(),showLabel:t}),c.a.createElement(u.a,{iconName:"withdraw",action:this.onWithdrawClick,tooltipText:this.context.t("Withdraw"),customClass:p(),showLabel:t}))}}]),e}(c.a.Component);b.defaultProps={showIconButtonLabel:!0},b.propTypes={openRetailFiatSidePane:s.a.func.isRequired,product:s.a.shape({iconFileName:s.a.string,ProductFullName:s.a.string,ProductSymbol:s.a.string,ProductId:s.a.number}),showIconButtonLabel:s.a.bool},b.contextTypes={t:s.a.func.isRequired},e.a=b},1037:function(t,e,r){"use strict";r.d(e,"b",function(){return o}),r.d(e,"a",function(){return d});var n=r(120),a=(r.n(n),r(5)),o=Object(n.createSelector)([function(t){return t.product.products}],function(t){var e=!1;return{productsOptions:(a.default.BaseCurrencies||[]).map(function(r){var n=t.find(function(t){return t.Product===r});return e=e||!n,e?null:{value:r,label:n.ProductFullName}}),isMisconfigured:e}}),i=function(t){return function(e){return e.Product1===t||e.Product2===t}},c=function(t,e){return t.filter(i(e))},l=function(t,e){return t.find(i(e))},s=function(t,e,r){var n=l(t,r);if(n){var a=e[n.InstrumentId];return a&&{instrument:n,level:a}}},u=function(t,e,r){return t.Product1===r?e.LastTradedPx:1/e.LastTradedPx},d=Object(n.createSelector)([function(t){return t.level1},function(t){return t.instrument.instruments},function(t){return t.product.products},function(t){return t.user.userConfig},function(t,e){return e}],function(t,e,r,n,a){var o=n.find(function(t){return"BaseCurrency"===t.Key});if(o){o=o.Value;var i=r.find(function(t){return t.ProductId===a}),d=r.find(function(t){return t.Product===o});if(i!==d){var m=d.ProductId,f=c(e,a),p=l(f,m);if(p){var b=t[p.InstrumentId];if(!b)return;var v=u(p,b,a);return Object.assign({},d,{value:v})}var g=c(e,m),w=void 0;if(r.forEach(function(e){var r=e.ProductId;if(!w){var n=s(g,t,r),a=s(f,t,r);n&&a&&(w={id:r,base:n,product:a})}}),w){var h=u(w.product.instrument,w.product.level,w.id),y=u(w.base.instrument,w.base.level,w.id),_=y/h;return Object.assign({},d,{value:_})}}}})},1241:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),c=r(6),l=r(1242),s=r(333),u=r(1246),d=(r.n(u),Object(c.b)("wallet-card-grid")),m=function(t,e){var r=t.products.map(function(t){return a.a.createElement(l.a,{key:t.ProductId,productId:t.ProductId})});return a.a.createElement(a.a.Fragment,null,t.fetching||r.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:d("header")},e.t(t.header)),a.a.createElement("div",{className:d()},t.fetching?a.a.createElement(s.a,null):r)):"")};m.contextTypes={t:i.a.func.isRequired},e.a=m},1242:function(t,e,r){"use strict";var n=r(8),a=r(1243),o=r(974),i=r(1037),c=r(203),l=function(t,e){var r=Object(o.c)(t,e.productId);return{iconFileName:r.iconFileName,ProductSymbol:r.ProductSymbol,ProductFullName:r.ProductFullName,Amount:r.Amount,rawAmount:r.rawAmount,isCrypto:"CryptoCurrency"===r.ProductType,ProductId:r.ProductId,productColor:r.productColor,baseCurrency:Object(i.a)(t,e.productId)}},s=function(t,e){return{selectPositionAndSave:function(){t(Object(c.g)(e.productId))}}};e.a=Object(n.connect)(l,s)(a.a)},1243:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),c=r(35),l=r(22),s=r(6),u=r(973),d=r(47),m=r(1030),f=r(1035),p=r(122),b=r(26),v=r(1244),g=(r.n(v),Object(s.b)("wallet-card")),w=function(t,e){var r=t.iconFileName,n=t.ProductSymbol,o=t.ProductFullName,i=t.Amount,s=t.rawAmount,v=t.isCrypto,w=t.ProductId,h=t.productColor,y=t.baseCurrency;return a.a.createElement("div",{className:g()+" container-with-shadow"},a.a.createElement("div",{className:g("icon-label-row")},a.a.createElement("div",{style:{borderTop:"4px solid "+h},className:g("icon")},a.a.createElement(u.a,{iconFileName:r,size:44})),a.a.createElement("span",{className:g("symbol-label")},n+" "+o)),a.a.createElement("div",{className:g("balance-row")},a.a.createElement("div",{className:g("balance")},a.a.createElement("span",{className:g("label")},e.t("Current Balance")),a.a.createElement("div",{className:g("amount")},a.a.createElement("span",{className:g("amount-text")},i))),y&&a.a.createElement("div",{className:g("balance")},a.a.createElement("span",{className:g("label")},y.product," ",e.t("Value")),a.a.createElement("div",{className:g("amount")},Object(b.b)(s*y.value,y.DecimalPlaces)))),a.a.createElement("div",{className:g("activity-link-row")},a.a.createElement("div",{className:g("activity-link-container")},a.a.createElement(c.a,{className:g("activity-link"),to:Object(l.a)(p.g.path),onClick:t.selectPositionAndSave},e.t("Details")," ",a.a.createElement(d.a,{name:"arrowNext",customClass:g("next-icon")}))),a.a.createElement("div",{className:g("icon-nav-buttons")},v?a.a.createElement(m.a,{product:{iconFileName:r,ProductSymbol:n,ProductFullName:o,ProductId:w},showIconButtonLabel:!1}):a.a.createElement(f.a,{product:{iconFileName:r,ProductSymbol:n,ProductFullName:o,ProductId:w},showIconButtonLabel:!1}))))};w.contextTypes={t:i.a.func.isRequired},e.a=w},1244:function(t,e,r){var n=r(1245);"string"===typeof n&&(n=[[t.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(938)(n,a);n.locals&&(t.exports=n.locals)},1245:function(t,e,r){e=t.exports=r(46)(!1),e.push([t.i,".wallet-card{width:37.2rem;height:26.9rem;background:var(--wallet-card__bg-color);border-radius:1rem;margin:0 2rem 4rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.wallet-card__icon{margin-left:2.25rem;height:100%}.wallet-card__icon,.wallet-card__icon-label-row{-ms-flex-align:end;align-items:flex-end;display:-ms-flexbox;display:flex}.wallet-card__icon-label-row{-ms-flex:1.3 1;flex:1.3 1;padding-bottom:3.3rem}.wallet-card__symbol-label{font-size:2rem;margin-left:1.5rem;color:var(--font__color-primary);line-height:4rem}.wallet-card__balance-row{display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1;width:100%}.wallet-card__balance{width:50%;padding:2rem 2.25rem 3rem;border-right:solid 1px var(--wallet-card__divider-border-color-secondary)}.wallet-card__label{font-size:1.2rem;margin-bottom:1rem;color:var(--font__color-secondary)}.wallet-card__value{width:50%;border-left:1px solid var(--border__color);padding:2rem 2rem 3rem}.wallet-card__amount{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:baseline;align-items:baseline;letter-spacing:-.6px}.wallet-card__amount-text{font-size:2rem;color:var(--font__color-primary);padding-right:.5rem}.wallet-card__activity-link-row{background:var(--wallet-card__activity-link-row-bg-color);padding:1.5rem 2.25rem;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.wallet-card__activity-link{font-size:1.4rem}.wallet-card__next-icon{margin-left:.75rem}.wallet-card__icon-nav-buttons{display:-ms-flexbox;display:flex}.wallet-card__balance-symbol-label{font-size:1.4rem;color:var(--font__color-secondary)}@media (min-width:768px) and (max-width:1024px){.wallet-card{width:29.6rem;height:21.4rem}.wallet-card__balance-row{-ms-flex:1.3 1;flex:1.3 1}.wallet-card__balance{padding:1.5rem 2.5rem 2rem 2.25rem}.wallet-card__amount-text{font-size:1.6rem}.wallet-card__balance-symbol-label{font-size:1.2rem}.wallet-card__icon-label-row{padding-bottom:1rem}}@media (min-width:320px) and (max-width:767px){.wallet-card{width:35.1rem;height:20.1rem}.wallet-card__balance-row{-ms-flex:1.3 1;flex:1.3 1}.wallet-card__balance{padding:1.5rem 2.5rem 2rem 2.25rem}.wallet-card__amount-text{font-size:1.8rem}.wallet-card__balance-symbol-label{font-size:1.4rem}.wallet-card__icon-label-row{padding-bottom:1rem}}",""])},1246:function(t,e,r){var n=r(1247);"string"===typeof n&&(n=[[t.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(938)(n,a);n.locals&&(t.exports=n.locals)},1247:function(t,e,r){e=t.exports=r(46)(!1),e.push([t.i,".wallet-card-grid{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0 -2rem;min-height:5rem;margin-bottom:4rem}.wallet-card-grid__header{padding:3rem 3rem 3.6rem;font-size:2.4rem}",""])},214:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(8),a=r(974),o=r(1241),i=function(t){return{header:"Funded Accounts",fetching:Object(a.a)(t),products:Object(a.b)(t)}};e.default=Object(n.connect)(i)(o.a)},973:function(t,e,r){"use strict";var n=r(8),a=r(975),o=function(t,e){return{productManifest:t.productManifest,iconFileName:e.iconFileName,size:e.size||48}};e.a=Object(n.connect)(o)(a.a)},974:function(t,e,r){"use strict";r.d(e,"a",function(){return l}),r.d(e,"d",function(){return u}),r.d(e,"c",function(){return d}),r.d(e,"b",function(){return m}),r.d(e,"e",function(){return f});var n=r(120),a=(r.n(n),r(340)),o=function(t){return t.product.products},i=function(t){return t.position.positions},c=function(t){return t.productManifest.manifest},l=Object(n.createSelector)([function(t){return t.product},function(t){return t.position},function(t){return t.productManifest}],function(t,e,r){return t.fetching||e.fetching||r.fetching}),s=Object(n.createSelector)([o,function(t){return t.product.decimalPlaces},i],function(t,e,r){return t.map(function(t){var n=r[t.ProductId];if(!n)return t;var o=e[t.Product],i=Object(a.a)(n,o);return Object.assign({},i,t)})}),u=Object(n.createSelector)([s,c],function(t,e){return t.map(function(t){var r=e[t.Product]||{iconFileName:t.Product+"DEFAULT_ICON"};return Object.assign({},t,r)})}),d=Object(n.createSelector)([u,function(t,e){return e}],function(t,e){return t.find(function(t){return t.ProductId===e})}),m=Object(n.createSelector)(u,function(t){return t.filter(function(t){return"-"!==t.Amount})}),f=Object(n.createSelector)(u,function(t){return t.filter(function(t){return"-"===t.Amount})})},975:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),c=r(22),l=r(6),s=r(976),u=(r.n(s),Object(l.b)("product-icon")),d=function(t){var e=t.productManifest,r=t.iconFileName,n=t.size,o=void 0===n?48:n,i=t.customClass;return e.fetching?null:(null==r&&console.log(r),r&&r.indexOf("DEFAULT_ICON")>0?m(o,r):a.a.createElement("img",{alt:"product icon",height:o+"px",className:i,src:Object(c.a)("/local/product-icons/"+r)}))},m=function(t,e){return a.a.createElement("div",{className:u(null,"default"),style:{width:t,height:t,MozBorderRadius:t/2,WebkitBorderRadius:t/2,borderRadius:t/2,textAlign:"center",fontSize:.5*t,lineHeight:t+"px"}},a.a.createElement("span",null,e.charAt(0)))};d.propTypes={productManifest:i.a.object.isRequired,iconFileName:i.a.string,size:i.a.number},e.a=d},976:function(t,e,r){var n=r(977);"string"===typeof n&&(n=[[t.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(938)(n,a);n.locals&&(t.exports=n.locals)},977:function(t,e,r){e=t.exports=r(46)(!1),e.push([t.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},992:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(1),a=r.n(n),o=a.a.shape({iconFileName:a.a.string,ProductFullName:a.a.string,ProductSymbol:a.a.string,ProductId:a.a.number})},996:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),c=r(6),l=r(47),s=r(1032),u=(r.n(s),function(t){var e=t.tooltipText,r=t.iconName,n=t.customClass,o=t.action,i=t.showLabel,s=t.tooltipPosition,u=Object(c.b)("icon-button",n);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{tooltip:e||null,"tooltip-position":s,onClick:o,className:u()},a.a.createElement(l.a,{name:r,customClass:u("icon")}),i&&a.a.createElement("span",{className:u("label")},r)))});u.defaultProps={showLabel:!0,tooltipPosition:"top"},u.protoTypes={iconName:i.a.string.isRequired,parentClass:i.a.string.isRequired,tooltipPosition:i.a.string,tooltipText:i.a.string,action:i.a.func,showLabel:i.a.bool},e.a=u},997:function(t,e,r){var n=r(1034);"string"===typeof n&&(n=[[t.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(938)(n,a);n.locals&&(t.exports=n.locals)}});