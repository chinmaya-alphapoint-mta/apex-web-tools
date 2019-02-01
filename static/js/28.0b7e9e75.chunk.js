webpackJsonp([28],{1004:function(e,t,n){"use strict";var o=n(8),i=n(1005),r=n(968),a=n(47),s=function(e){return{referenceCode:e.deposit.depositStatus.requestcode}},c=Object(o.connect)(s,null)(i.a);t.a=Object(r.a)({name:a.b.DEPOSIT_REFERENCE_ID})(c)},1005:function(e,t,n){"use strict";var o=n(0),i=n.n(o),r=n(1),a=n.n(r),s=n(189),c=n(46),l=n(5),d=n(1006),u=(n.n(d),Object(l.b)("deposit-reference-id-modal")),p=function(e,t){return i.a.createElement(s.a,{isOpen:!(!e.referenceCode||!e.isOpen),title:i.a.createElement("div",{className:u("header-content")},i.a.createElement(c.a,{name:"depositWithBorder",size:44,customClass:u("icon")}),i.a.createElement("div",{className:u("header-title")},t.t("Deposit")+" "+e.ProductSymbol)),close:e.close,footer:{buttonText:t.t("OK"),buttonStyle:"additive",onClick:function(){return e.close}},customClass:u()},i.a.createElement("p",{className:u("title")},t.t("Your deposit ticket has been created successfully.")),i.a.createElement("div",{className:u("reference-code-container")},i.a.createElement("p",{className:u("reference-code-title")},t.t("Please note the following deposit ticket ID for your reference:")),i.a.createElement("p",{className:u("reference-code")},e.referenceCode)))};p.propTypes={close:a.a.func.isRequired},p.defaultProps={referenceCode:""},p.contextTypes={t:a.a.func.isRequired},t.a=p},1006:function(e,t,n){var o=n(1007);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1};i.transform=void 0;n(935)(o,i);o.locals&&(e.exports=o.locals)},1007:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".deposit-reference-id-modal{border-radius:1rem}.deposit-reference-id-modal__content{padding:3rem}.deposit-reference-id-modal__header{border-bottom:2px solid var(--tab__border-color--selected);padding:1.6rem}.deposit-reference-id-modal__header-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.deposit-reference-id-modal__header-title{font-size:2rem;color:var(--font__color-primary)}.deposit-reference-id-modal__footer{padding:2.5rem 3rem;margin:0}.deposit-reference-id-modal__btn{width:100%;-ms-flex-align:center;align-items:center;border-radius:.5rem;background:var(--success__bg-color);font-size:1.4rem;height:5rem;-ms-flex-pack:center;justify-content:center;padding:2.8rem 0}.deposit-reference-id-modal__title{font-size:1.6rem;color:var(--font__color-primary);margin-bottom:2.6rem}.deposit-reference-id-modal__icon{margin-right:1.5rem;width:3.6rem;height:3.6rem}.deposit-reference-id-modal__reference-code-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:11.7rem;width:35.1rem;border-radius:6px;border:1px solid #394154;padding:2.1rem 5rem;margin-bottom:1rem}.deposit-reference-id-modal__reference-code-title{font-size:1.2rem;color:var(--font__color-secondary);text-align:center;margin:0;padding-bottom:2rem}.deposit-reference-id-modal__reference-code{font-size:1.6rem;color:var(--font__color-primary);text-align:center;margin:0}.deposit-reference-id-modal__close-icon{color:var(--font__color-primary);padding:1.4rem 1.1rem}",""])},1128:function(e,t,n){"use strict";var o=n(0),i=n.n(o),r=n(1),a=n.n(r),s=n(970),c=n(1129),l=n(5),d=n(332),u=n(1132),p=(n.n(u),Object(l.b)("product-position-details")),f=function(e,t){var n=e.positionDetails,o=e.DepositReferenceIdModalComponent;return i.a.createElement("div",{className:p()},e.fetching?i.a.createElement(d.a,{isInline:!0,customClass:p}):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:p("header-icon")},i.a.createElement("div",{className:p("product-label")},i.a.createElement("div",{className:p("product-icon")},i.a.createElement(s.a,{iconFileName:n.iconFileName,size:48})),i.a.createElement("div",{className:p("product-symbol")},i.a.createElement("div",{className:p("product-symbol-name"),style:{color:n.productColor}},n.Product),i.a.createElement("div",{className:p("product-name")},n.ProductFullName))),i.a.createElement(c.a,{key:"1",isDepositDisabled:e.isDepositDisabled,isWithdrawDisabled:e.isWithdrawDisabled,user:e.user,openDepositSidePane:function(){return e.openDepositSidePane(n)},openWithdrawSidePane:function(){return e.openWithdrawSidePane(n)},showNotificationForDeposit:e.showNotificationForDeposit,showNotificationForWithdraw:e.showNotificationForWithdraw})),i.a.createElement("div",{className:p("header-details")},i.a.createElement("div",{className:p("detail")},i.a.createElement("div",{className:p("label")},t.t("Available Balance")),i.a.createElement("div",{className:p("value"),"data-test":"Available Balance"},n.AvailableBalance)),i.a.createElement("div",{className:p("detail")},i.a.createElement("div",{className:p("label")},t.t("Hold")),i.a.createElement("div",{className:p("value"),"data-test":"Hold"},n.Hold)),i.a.createElement("div",{className:p("detail")},i.a.createElement("div",{className:p("label")},t.t("Pending Deposits")),i.a.createElement("div",{className:p("value"),"data-test":"Pending Deposits"},n.PendingDeposits)),i.a.createElement("div",{className:p("detail")},i.a.createElement("div",{className:p("label")},t.t("Total Balance")),i.a.createElement("div",{className:p("value"),"data-test":"Total Balance"},n.Amount))),o))};f.propTypes={positionDetails:a.a.object,fetching:a.a.bool.isRequired,user:a.a.object.isRequired,openDepositSidePane:a.a.func.isRequired,openWithdrawSidePane:a.a.func.isRequired,isDepositDisabled:a.a.bool,isWithdrawDisabled:a.a.bool,showNotificationForDeposit:a.a.func,showNotificationForWithdraw:a.a.func,DepositReferenceIdModalComponent:a.a.element},f.contextTypes={t:a.a.func.isRequired},t.a=f},1129:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(1),l=n.n(c),d=n(46),u=n(332),p=n(34),f=n(5),m=n(333),b=n(1130),h=(n.n(b),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),_=Object(f.b)("balances-buttons"),v=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return r(t,e),h(t,[{key:"renderDepositWithdrawButtons",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{onClick:this.props.isDepositDisabled?this.props.showNotificationForDeposit:this.props.openDepositSidePane,classModifiers:this.props.isDepositDisabled?"disabled":null,styleName:m.b.additive,customClass:_("deposit"),"data-test":"Deposit"},s.a.createElement(d.a,{name:"deposit",customClass:_("button-img"),classModifiers:"small"}),this.context.t("Deposit")),s.a.createElement(p.a,{classModifiers:this.props.isWithdrawDisabled?"disabled":null,onClick:this.props.isWithdrawDisabled?this.props.showNotificationForWithdraw:this.props.openWithdrawSidePane,styleName:m.b.subtractive,customClass:_("withdraw"),"data-test":"Withdraw"},s.a.createElement(d.a,{name:"withdraw",customClass:_("button-img"),classModifiers:"small"}),this.context.t("Withdraw")))}},{key:"render",value:function(){return s.a.createElement("div",{className:_()},this.props.user.UserName?this.renderDepositWithdrawButtons():s.a.createElement(u.a,null))}}]),t}(s.a.Component);v.contextTypes={t:l.a.func.isRequired},v.propTypes={openDepositSidePane:l.a.func.isRequired,openWithdrawSidePane:l.a.func.isRequired,isDepositDisabled:l.a.bool,isWithdrawDisabled:l.a.bool,showNotificationForWithdraw:l.a.func,showNotificationForDeposit:l.a.func},v.propTypes={user:l.a.object},v.contextTypes={t:l.a.func.isRequired},t.a=v},1130:function(e,t,n){var o=n(1131);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1};i.transform=void 0;n(935)(o,i);o.locals&&(e.exports=o.locals)},1131:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".balances-buttons{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.balances-buttons__deposit__btn{margin-right:1rem}.balances-buttons__deposit__btn,.balances-buttons__withdraw__btn{width:13rem;text-transform:uppercase}.balances-buttons__button-img{margin-right:1rem;height:1rem}",""])},1132:function(e,t,n){var o=n(1133);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1};i.transform=void 0;n(935)(o,i);o.locals&&(e.exports=o.locals)},1133:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".product-position-details{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:justify;justify-content:space-between;background:var(--component__bg-color);-ms-flex-direction:column;flex-direction:column}.product-position-details__spinner-container{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;padding-left:2rem}.product-position-details__header-icon{border-bottom:1px solid var(--component__border-color);-ms-flex-pack:justify;justify-content:space-between}.product-position-details__header-details,.product-position-details__header-icon{padding:2rem;display:-ms-flexbox;display:flex}.product-position-details__product-label{-ms-flex:1 1;flex:1 1;position:relative;display:-ms-flexbox;display:flex;font-size:1.8rem;-ms-flex-align:center;align-items:center;pointer-events:none}.product-position-details__product-icon{padding-right:2rem;text-align:center;-ms-flex-pack:center;justify-content:center;height:48px}.product-position-details__product-symbol{line-height:1.8rem;display:-ms-flexbox;display:flex}.product-position-details__product-symbol-name{padding-right:1rem;font-size:2rem;font-weight:700}.product-position-details__product-name{font-size:2rem;font-weight:700;color:var(--component__color-primary)}.product-position-details__detail{-ms-flex:1 1;flex:1 1;display:-ms-flexbox;display:flex;padding:0 1.6rem;line-height:1.8rem;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;border-left:1px solid var(--component__border-color)}.product-position-details__detail:first-child{border-left:0}.product-position-details__label{font-size:1.2rem;color:var(--component__color-secondary)}.product-position-details__value{font-size:2rem;color:var(--component__color-primary)}",""])},943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n.n(o),r=n(8),a=n(1128),s=n(1004),c=n(971),l=n(15),d=function(e){var t=e.position,n=e.i18nState.translations,o=Object(c.a)(e),r=Object(c.d)(e).find(function(e){return e.ProductId===t.selectedProductId});return{user:e.user.userInfo,positionDetails:r,translations:n,fetching:o,DepositReferenceIdModalComponent:i.a.createElement(s.a,null)}},u={openDepositSidePane:l.l,openWithdrawSidePane:l.r};t.default=Object(r.connect)(d,u)(a.a)},968:function(e,t,n){"use strict";var o=n(8),i=n(47),r=function(e){var t=e.name,n=function(e){if(e.modal.hasOwnProperty(t)){var n=e.modal[t],o=n.isOpen,i=n.modalProps;return Object.assign({isOpen:o},i)}return{isOpen:!1}},r=function(e){return{close:function(){return e(Object(i.d)(t))}}};return function(e){return Object(o.connect)(n,r)(e)}};t.a=r},970:function(e,t,n){"use strict";var o=n(8),i=n(972),r=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(o.connect)(r)(i.a)},971:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"e",function(){return f});var o=n(120),i=(n.n(o),n(339)),r=function(e){return e.product.products},a=function(e){return e.position.positions},s=function(e){return e.productManifest.manifest},c=Object(o.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,n){return e.fetching||t.fetching||n.fetching}),l=Object(o.createSelector)([r,function(e){return e.product.decimalPlaces},a],function(e,t,n){return e.map(function(e){var o=n[e.ProductId];if(!o)return e;var r=t[e.Product],a=Object(i.a)(o,r);return Object.assign({},a,e)})}),d=Object(o.createSelector)([l,s],function(e,t){return e.map(function(e){var n=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,n)})}),u=Object(o.createSelector)([d,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),p=Object(o.createSelector)(d,function(e){return e.filter(function(e){return"-"!==e.Amount})}),f=Object(o.createSelector)(d,function(e){return e.filter(function(e){return"-"===e.Amount})})},972:function(e,t,n){"use strict";var o=n(0),i=n.n(o),r=n(1),a=n.n(r),s=n(22),c=n(5),l=n(973),d=(n.n(l),Object(c.b)("product-icon")),u=function(e){var t=e.productManifest,n=e.iconFileName,o=e.size,r=void 0===o?48:o,a=e.customClass;return t.fetching?null:(null==n&&console.log(n),n&&n.indexOf("DEFAULT_ICON")>0?p(r,n):i.a.createElement("img",{alt:"product icon",height:r+"px",className:a,src:Object(s.a)("/local/product-icons/"+n)}))},p=function(e,t){return i.a.createElement("div",{className:d(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},i.a.createElement("span",null,t.charAt(0)))};u.propTypes={productManifest:a.a.object.isRequired,iconFileName:a.a.string,size:a.a.number},t.a=u},973:function(e,t,n){var o=n(974);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!1};i.transform=void 0;n(935)(o,i);o.locals&&(e.exports=o.locals)},974:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])}});