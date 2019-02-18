webpackJsonp([7],{1001:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r(1),o=r.n(n),a=o.a.shape({iconFileName:o.a.string,ProductFullName:o.a.string,ProductSymbol:o.a.string,ProductId:o.a.number})},1008:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r.n(a),l=r(6),c=r(49),s=r(1044),u=(r.n(s),function(e){var t=e.tooltipText,r=e.iconName,n=e.customClass,a=e.action,i=e.showLabel,s=e.tooltipPosition,u=Object(l.b)("icon-button",n);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{tooltip:t||null,"tooltip-position":s,onClick:a,className:u()},o.a.createElement(c.a,{name:r,customClass:u("icon")}),i&&o.a.createElement("span",{className:u("label")},r)))});u.defaultProps={showLabel:!0,tooltipPosition:"top"},u.protoTypes={iconName:i.a.string.isRequired,parentClass:i.a.string.isRequired,tooltipPosition:i.a.string,tooltipText:i.a.string,action:i.a.func,showLabel:i.a.bool},t.a=u},1009:function(e,t,r){var n=r(1046);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(942)(n,o);n.locals&&(e.exports=n.locals)},1031:function(e,t,r){"use strict";var n=r(8),o=r(1032),a=r(974),i=r(36),l=function(e){return{referenceCode:e.deposit.depositStatus.requestcode}},c=Object(n.connect)(l,null)(o.a);t.a=Object(a.a)({name:i.b.DEPOSIT_REFERENCE_ID})(c)},1032:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r.n(a),l=r(197),c=r(49),s=r(6),u=r(1033),d=(r.n(u),Object(s.b)("deposit-reference-id-modal")),f=function(e,t){return o.a.createElement(l.a,{isOpen:!(!e.referenceCode||!e.isOpen),title:o.a.createElement("div",{className:d("header-content")},o.a.createElement(c.a,{name:"depositWithBorder",size:44,customClass:d("icon")}),o.a.createElement("div",{className:d("header-title")},t.t("Deposit")+" "+e.ProductSymbol)),close:e.close,footer:{buttonText:t.t("OK"),buttonStyle:"additive",onClick:function(){return e.close}},customClass:d()},o.a.createElement("p",{className:d("title")},t.t("Your deposit ticket has been created successfully.")),o.a.createElement("div",{className:d("reference-code-container")},o.a.createElement("p",{className:d("reference-code-title")},t.t("Please note the following deposit ticket ID for your reference:")),o.a.createElement("p",{className:d("reference-code")},e.referenceCode)))};f.propTypes={close:i.a.func.isRequired},f.defaultProps={referenceCode:""},f.contextTypes={t:i.a.func.isRequired},t.a=f},1033:function(e,t,r){var n=r(1034);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(942)(n,o);n.locals&&(e.exports=n.locals)},1034:function(e,t,r){t=e.exports=r(48)(!1),t.push([e.i,".deposit-reference-id-modal{border-radius:1rem}.deposit-reference-id-modal__content{padding:3rem}.deposit-reference-id-modal__header{border-bottom:2px solid var(--tab__border-color--selected);padding:1.6rem}.deposit-reference-id-modal__header-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.deposit-reference-id-modal__header-title{font-size:2rem;color:var(--font__color-primary)}.deposit-reference-id-modal__footer{padding:2.5rem 3rem;margin:0}.deposit-reference-id-modal__btn{width:100%;-ms-flex-align:center;align-items:center;border-radius:.5rem;background:var(--success__bg-color);font-size:1.4rem;height:5rem;-ms-flex-pack:center;justify-content:center;padding:2.8rem 0}.deposit-reference-id-modal__title{font-size:1.6rem;color:var(--font__color-primary);margin-bottom:2.6rem}.deposit-reference-id-modal__icon{margin-right:1.5rem;width:3.6rem;height:3.6rem}.deposit-reference-id-modal__reference-code-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:11.7rem;width:35.1rem;border-radius:6px;border:1px solid #394154;padding:2.1rem 5rem;margin-bottom:1rem}.deposit-reference-id-modal__reference-code-title{font-size:1.2rem;color:var(--font__color-secondary);text-align:center;margin:0;padding-bottom:2rem}.deposit-reference-id-modal__reference-code{font-size:1.6rem;color:var(--font__color-primary);text-align:center;margin:0}.deposit-reference-id-modal__close-icon{color:var(--font__color-primary);padding:1.4rem 1.1rem}",""])},1042:function(e,t,r){"use strict";var n=r(8),o=r(15),a=r(1043),i=function(e){return{openSendReceiveSidePane:function(t,r){e(Object(o.p)(t,r))}}};t.a=Object(n.connect)(null,i)(a.a)},1043:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),l=r.n(i),c=r(1),s=r.n(c),u=r(1008),d=r(6),f=r(1001),p=r(1009),m=(r.n(p),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),b=Object(d.b)("wallet-nav-item"),v=function(e){function t(){var e,r,a,i;n(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return r=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.onSendClick=function(){a.onBtnClick(!0)},a.onReceiveClick=function(){a.onBtnClick(!1)},a.onBtnClick=function(e){var t=a.props;(0,t.openSendReceiveSidePane)(e,t.product)},i=r,o(a,i)}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props.showIconButtonLabel;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{iconName:"send",action:this.onSendClick,tooltipText:this.context.t("Send"),customClass:b(),showLabel:e}),l.a.createElement(u.a,{iconName:"receive",action:this.onReceiveClick,tooltipText:this.context.t("Receive"),customClass:b(),showLabel:e}))}}]),t}(l.a.Component);v.defaultProps={showIconButtonLabel:!0},v.propTypes={openSendReceiveSidePane:s.a.func.isRequired,product:f.a,showIconButtonLabel:s.a.bool},v.contextTypes={t:s.a.func.isRequired},t.a=v},1044:function(e,t,r){var n=r(1045);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(942)(n,o);n.locals&&(e.exports=n.locals)},1045:function(e,t,r){t=e.exports=r(48)(!1),t.push([e.i,'.icon-button{min-width:4rem;height:4rem;border-radius:4px;color:var(--font__color-secondary);background:var(--primary__bg-color);border:1px solid var(--border-secondary);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.icon-button:hover,.icon-button:hover .icon-button__icon{color:var(--font__color-primary)}.icon-button__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;width:2rem;height:2rem;color:var(--font__color-secondary);-webkit-transition:var(--transition__settings);-o-transition:var(--transition__settings);transition:var(--transition__settings)}[tooltip]{position:relative}[tooltip]:before{content:"";position:absolute;top:4px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);border-width:4px 6px 0;border-style:solid;border-color:var(--primary__bg-color) transparent transparent;z-index:999;opacity:0}.icon-button [tooltip-position=left]:before{left:0;top:50%;margin-left:-1rem;-webkit-transform:translatey(-50%) rotate(-90deg);-ms-transform:translatey(-50%) rotate(-90deg);transform:translatey(-50%) rotate(-90deg)}[tooltip-position=top]:before{left:50%}[tooltip-position=bottom]:before{top:100%;margin-top:.8rem;-webkit-transform:translateX(-50%) translatey(-100%) rotate(-180deg);-ms-transform:translateX(-50%) translatey(-100%) rotate(-180deg);transform:translateX(-50%) translatey(-100%) rotate(-180deg)}[tooltip-position=right]:before{left:100%;top:50%;margin-left:-3px;-webkit-transform:translatey(-50%) rotate(90deg);-ms-transform:translatey(-50%) rotate(90deg);transform:translatey(-50%) rotate(90deg)}[tooltip]:after{content:attr(tooltip);position:absolute;left:50%;top:4px;-webkit-transform:translateX(-50%) translateY(-100%);-ms-transform:translateX(-50%) translateY(-100%);transform:translateX(-50%) translateY(-100%);background:var(--primary__bg-color);text-align:center;color:var(--font__color-secondary);padding:4px 2px;font-size:1.2rem;min-width:8rem;border-radius:5px;pointer-events:none;padding:4px;z-index:99;opacity:0}[tooltip-position=left]:after{left:0;top:50%;margin-left:-.6rem;-webkit-transform:translateX(-100%) translateY(-50%);-ms-transform:translateX(-100%) translateY(-50%);transform:translateX(-100%) translateY(-50%)}[tooltip-position=top]:after{left:50%}[tooltip-position=bottom]:after{top:100%;margin-top:.8rem;-webkit-transform:translateX(-50%) translateY(0);-ms-transform:translateX(-50%) translateY(0);transform:translateX(-50%) translateY(0)}[tooltip-position=right]:after{left:100%;top:50%;margin-left:.4rem;-webkit-transform:translateX(0) translateY(-50%);-ms-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}[tooltip]:hover:after,[tooltip]:hover:before{opacity:1}',""])},1046:function(e,t,r){t=e.exports=r(48)(!1),t.push([e.i,".wallet-nav-item{margin-left:1.2rem;padding:0 1rem;background:var(--wallet-card__button-bg-color);border:1px solid var(--wallet-card__button-border-color)}.wallet-nav-item__label{text-transform:capitalize;padding-left:1rem}",""])},1047:function(e,t,r){"use strict";var n=r(8),o=r(15),a=r(1048),i=function(e){return{openRetailFiatSidePane:function(t,r){e(Object(o.o)(t,r))}}};t.a=Object(n.connect)(null,i)(a.a)},1048:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),l=r.n(i),c=r(1),s=r.n(c),u=r(1008),d=r(6),f=r(1009),p=(r.n(f),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),m=Object(d.b)("wallet-nav-item"),b=function(e){function t(){var e,r,a,i;n(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return r=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.onDepositClick=function(){a.onBtnClick(!0)},a.onWithdrawClick=function(){a.onBtnClick(!1)},a.onBtnClick=function(e){var t=a.props;(0,t.openRetailFiatSidePane)(e,t.product)},i=r,o(a,i)}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props.showIconButtonLabel;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{iconName:"deposit",action:this.onDepositClick,tooltipText:this.context.t("Deposit"),customClass:m(),showLabel:e}),l.a.createElement(u.a,{iconName:"withdraw",action:this.onWithdrawClick,tooltipText:this.context.t("Withdraw"),customClass:m(),showLabel:e}))}}]),t}(l.a.Component);b.defaultProps={showIconButtonLabel:!0},b.propTypes={openRetailFiatSidePane:s.a.func.isRequired,product:s.a.shape({iconFileName:s.a.string,ProductFullName:s.a.string,ProductSymbol:s.a.string,ProductId:s.a.number}),showIconButtonLabel:s.a.bool},b.contextTypes={t:s.a.func.isRequired},t.a=b},1049:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return d});var n=r(124),o=(r.n(n),r(5)),a=Object(n.createSelector)([function(e){return e.product.products}],function(e){var t=!1;return{productsOptions:(o.default.BaseCurrencies||[]).map(function(r){var n=e.find(function(e){return e.Product===r});return t=t||!n,t?null:{value:r,label:n.ProductFullName}}),isMisconfigured:t}}),i=function(e){return function(t){return t.Product1===e||t.Product2===e}},l=function(e,t){return e.filter(i(t))},c=function(e,t){return e.find(i(t))},s=function(e,t,r){var n=c(e,r);if(n){var o=t[n.InstrumentId];return o&&{instrument:n,level:o}}},u=function(e,t,r){return e.Product1===r?t.LastTradedPx:1/t.LastTradedPx},d=Object(n.createSelector)([function(e){return e.level1},function(e){return e.instrument.instruments},function(e){return e.product.products},function(e){return e.user.userConfig},function(e,t){return t}],function(e,t,r,n,o){var a=n.find(function(e){return"BaseCurrency"===e.Key});if(a){a=a.Value;var i=r.find(function(e){return e.ProductId===o}),d=r.find(function(e){return e.Product===a});if(i!==d){var f=d.ProductId,p=l(t,o),m=c(p,f);if(m){var b=e[m.InstrumentId];if(!b)return;var v=u(m,b,o);return Object.assign({},d,{value:v})}var _=l(t,f),g=void 0;if(r.forEach(function(t){var r=t.ProductId;if(!g){var n=s(_,e,r),o=s(p,e,r);n&&o&&(g={id:r,base:n,product:o})}}),g){var h=u(g.product.instrument,g.product.level,g.id),y=u(g.base.instrument,g.base.level,g.id),w=y/h;return Object.assign({},d,{value:w})}}}})},1261:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r.n(a),l=r(977),c=r(6),s=r(339),u=r(1042),d=r(1047),f=r(1031),p=r(1262),m=(r.n(p),r(27)),b=Object(c.b)("wallet-details"),v=function(e,t){var r=e.positionDetails,n=r.iconFileName,a=r.Product,i=r.ProductFullName,c=r.AvailableBalance,p=r.Hold,v=r.PendingDeposits,_=r.Amount,g=r.ProductType,h=r.ProductId,y=r.rawAmount,w=e.baseCurrency,x="CryptoCurrency"===g,P=function(e,r){return o.a.createElement("div",{className:b("detail")},o.a.createElement("div",{className:b("label")},t.t(e)),o.a.createElement("div",{className:b("value")},r))},O=void 0;if(w){var j=y*w.value,E=Object(m.b)(j,w.DecimalPlaces);O="("+w.Product+" "+E+")"}return o.a.createElement("div",{className:b()},e.fetching?o.a.createElement(s.a,{isInline:!0,customClass:b}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:b("product-actions-row")},o.a.createElement("div",{className:b("product-label")},o.a.createElement("div",{className:b("product-icon")},o.a.createElement(l.a,{iconFileName:n,size:48})),o.a.createElement("div",{className:b("product-symbol-name")},a+" "+i," ",o.a.createElement("span",{className:b("product-conversion")},O))),o.a.createElement("div",{className:b("wallet-nav-items")},x?o.a.createElement(u.a,{product:{iconFileName:n,ProductFullName:i,ProductSymbol:a,ProductId:h}}):o.a.createElement(d.a,{product:{iconFileName:n,ProductFullName:i,ProductSymbol:a,ProductId:h}}))),o.a.createElement("div",{className:b("position-row")},P("Available Balance",c),P("Hold",p),P("Pending Deposits",v),P("Total Balance",_)),o.a.createElement(f.a,null)))};v.propTypes={positionDetails:i.a.object,fetching:i.a.bool.isRequired},v.contextTypes={t:i.a.func.isRequired},t.a=v},1262:function(e,t,r){var n=r(1263);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(942)(n,o);n.locals&&(e.exports=n.locals)},1263:function(e,t,r){t=e.exports=r(48)(!1),t.push([e.i,".wallet-details{margin:var(--wallet-details__body-margin);width:var(--wallet-details__body-width);background-color:var(--component__bg-color);border-radius:1rem;-webkit-box-shadow:0 .5rem 2.5rem 0 var(--shadow__color);box-shadow:0 .5rem 2.5rem 0 var(--shadow__color)}.wallet-details__product-actions-row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid var(--border__color)}.wallet-details__product-label{display:-ms-flexbox;display:flex}.wallet-details__product-icon{padding:30px}.wallet-details__product-conversion{color:var(--wallet-detail__label-color);padding-left:2rem}.wallet-details__product-symbol-name{height:100%;font-size:2.5rem}.wallet-details__product-symbol-name,.wallet-details__wallet-nav-items{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.wallet-details__wallet-nav-items{padding-right:30px}.wallet-details__position-row{display:-ms-flexbox;display:flex;width:100%}.wallet-details__detail{width:25%;padding:30px;border-right:1px solid var(--border__color)}.wallet-details__detail:last-of-type{border-right:0}.wallet-details__label{font-size:1.2rem;color:var(--wallet-detail__label-color)}.wallet-details__value{font-size:2.5rem}.wallet-details__spinner-container{margin:1.5rem 3.5rem}@media not all and (min-resolution:.001dpcm){@supports (-webkit-appearance:none){@media only screen and (max-width:150rem){.wallet-details__wallet-nav-items{-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:unset;align-items:unset}.wallet-details__position-row,.wallet-details__wallet-nav-items{-ms-flex-direction:column;flex-direction:column}.wallet-details__detail{width:auto;padding:2rem;border-bottom:1px solid var(--border__color)}}}}@media only screen and (max-width:76.8rem){.wallet-details{width:100%;margin:0;border-radius:0}.wallet-details__wallet-nav-items{-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:unset;align-items:unset}.wallet-details__position-row,.wallet-details__wallet-nav-items{-ms-flex-direction:column;flex-direction:column}.wallet-details__detail{width:auto;padding:2rem;border-bottom:1px solid var(--border__color)}.wallet-details__product-actions-row{background:var(--nav-header__bg-color)}}",""])},137:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),o=r(1261),a=r(976),i=r(1049),l=function(e){var t=e.position,r=Object(a.a)(e),n=Object(a.d)(e).find(function(e){return e.ProductId===t.selectedProductId});return{positionDetails:n,fetching:r,baseCurrency:Object(i.a)(e,n.ProductId)}};t.default=Object(n.connect)(l)(o.a)},974:function(e,t,r){"use strict";var n=r(8),o=r(36),a=function(e){var t=e.name,r=function(e){if(e.modal.hasOwnProperty(t)){var r=e.modal[t],n=r.isOpen,o=r.modalProps;return Object.assign({isOpen:n},o)}return{isOpen:!1}},a=function(e){return{close:function(){return e(Object(o.d)(t))}}};return function(e){return Object(n.connect)(r,a)(e)}};t.a=a},976:function(e,t,r){"use strict";r.d(t,"a",function(){return c}),r.d(t,"d",function(){return u}),r.d(t,"c",function(){return d}),r.d(t,"b",function(){return f}),r.d(t,"e",function(){return p});var n=r(124),o=(r.n(n),r(346)),a=function(e){return e.product.products},i=function(e){return e.position.positions},l=function(e){return e.productManifest.manifest},c=Object(n.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,r){return e.fetching||t.fetching||r.fetching}),s=Object(n.createSelector)([a,function(e){return e.product.decimalPlaces},i],function(e,t,r){return e.map(function(e){var n=r[e.ProductId];if(!n)return e;var a=t[e.Product],i=Object(o.a)(n,a);return Object.assign({},i,e)})}),u=Object(n.createSelector)([s,l],function(e,t){return e.map(function(e){var r=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,r)})}),d=Object(n.createSelector)([u,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),f=Object(n.createSelector)(u,function(e){return e.filter(function(e){return"-"!==e.Amount})}),p=Object(n.createSelector)(u,function(e){return e.filter(function(e){return"-"===e.Amount})})},977:function(e,t,r){"use strict";var n=r(8),o=r(978),a=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(n.connect)(a)(o.a)},978:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r.n(a),l=r(23),c=r(6),s=r(979),u=(r.n(s),Object(c.b)("product-icon")),d=function(e){var t=e.productManifest,r=e.iconFileName,n=e.size,a=void 0===n?48:n,i=e.customClass;return t.fetching?null:(null==r&&console.log(r),r&&r.indexOf("DEFAULT_ICON")>0?f(a,r):o.a.createElement("img",{alt:"product icon",height:a+"px",className:i,src:Object(l.a)("/local/product-icons/"+r)}))},f=function(e,t){return o.a.createElement("div",{className:u(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},o.a.createElement("span",null,t.charAt(0)))};d.propTypes={productManifest:i.a.object.isRequired,iconFileName:i.a.string,size:i.a.number},t.a=d},979:function(e,t,r){var n=r(980);"string"===typeof n&&(n=[[e.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(942)(n,o);n.locals&&(e.exports=n.locals)},980:function(e,t,r){t=e.exports=r(48)(!1),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])}});