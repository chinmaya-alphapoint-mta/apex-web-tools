webpackJsonp([25,41],{1039:function(e,t,o){var n=o(1040);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;o(934)(n,a);n.locals&&(e.exports=n.locals)},1040:function(e,t,o){t=e.exports=o(45)(!1),t.push([e.i,".ap-logo{-o-object-fit:contain;object-fit:contain}.ap-logo__link,.ap-logo__link:active,.ap-logo__link:hover,.ap-logo__link:link,.ap-logo__link:visited{color:var(--standalone-form__logo-color)}.ap-logo__img{width:8rem}",""])},1092:function(e,t,o){"use strict";function n(e){var t=function(t){var o=t.shouldRedirect,n=t.redirectLocation;return t.isAuthenticated?Object(l.a)()?r.a.createElement(e,t):o?r.a.createElement(s.c,{to:{pathname:n.pathname,search:n.search}}):r.a.createElement(s.c,{to:Object(c.a)(u.b.path+"?default=redirect")}):r.a.createElement(e,t)},o=function(e){return{isAuthenticated:e.auth.isAuthenticated,shouldRedirect:e.auth.shouldRedirect,redirectLocation:e.auth.location}};return Object(i.connect)(o,null)(t)}var a=o(0),r=o.n(a),i=o(8),s=o(35),c=o(22),l=o(1093),u=o(121);t.a=n},1093:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var n=o(349),a=function(){return!!Object(n.a)()||(!!Object(n.c)()||void 0)}},1094:function(e,t,o){"use strict";function n(e){var t=0;if(!e||e.length<5)return t;for(var o={},n=0;n<e.length;n++)o[e[n]]=(o[e[n]]||0)+1,t+=5/o[e[n]];var a={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},r=0;for(var i in a)r+=a[i];return t+=10*(r-1),Math.min(4,parseInt(t/20,10))}t.a=n},1095:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(0),s=o.n(i),c=o(1096),l=o(1),u=o.n(l),d=o(189),f=o(343),m=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=function(e){function t(){n(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={txnState:"",title:""},e}return r(t,e),m(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)("txnState"),t=Object(f.a)("id")&&Object(f.a)("resourcePath")&&Object(f.a)("resourcePath").includes("payment"),o=void 0;(t||"1"===e)&&(o="Deposit pending",this.setState(function(){return{txnState:1,title:o}}),this.props.openModal()),"2"===e&&(o="Deposit succesfull",this.setState(function(){return{txnState:e,title:o}}),this.props.openModal()),"3"===e&&(o="Deposit error",this.setState(function(){return{txnState:e,title:o}}),this.props.openModal())}},{key:"render",value:function(){var e=this.props,t=e.close,o=e.isOpen,n=this.state,a=n.txnState,r=n.title;return a?s.a.createElement(d.a,{isOpen:o,title:this.context.t(r),close:function(){return t()}},s.a.createElement(c.a,{txnState:a})):null}}]),t}(s.a.Component);p.propTypes={isOpen:u.a.bool,close:u.a.func.isRequired,openModal:u.a.func.isRequired},p.contextTypes={t:u.a.func.isRequired},t.a=p},1096:function(e,t,o){"use strict";var n=o(0),a=o.n(n),r=o(1),i=o.n(r),s=function(e,t){var o=e.txnState,n={1:{status:"pending",firstLine:t.t("Your deposit is being processed."),secondLine:t.t("Your account balance will be updated soon.")},2:{status:"successful",firstLine:t.t("Your deposit was successfull."),secondLine:t.t("Your account balance will be updated soon.")},3:{status:"failed",firstLine:t.t("There was a problem with your deposit."),secondLine:t.t("Please try again or contact an administrator.")}};return a.a.createElement("div",null,a.a.createElement("div",null,n[o].firstLine),a.a.createElement("div",null,n[o].secondLine))};s.propTypes={txnState:i.a.string.isRequired},s.contextTypes={t:i.a.func.isRequired},t.a=s},1116:function(e,t,o){var n=o(1403);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;o(934)(n,a);n.locals&&(e.exports=n.locals)},1400:function(e,t,o){"use strict";o.d(t,"a",function(){return s});var n=o(1401),a=o(1404),r=o(1406),i=o(939),s={VerifyEmailContainer:n.a,ResetPasswordNoAuthFormContainer:a.a,ConfirmWithdrawContainer:r.a,DepositConfirmationContainer:i.default}},1401:function(e,t,o){"use strict";var n=o(8),a=o(1402),r=o(205),i=o(343),s=function(e){var t=e.apiProcessing.processingVerifyEmail,o=e.verifyEmail;return{processingVerifyEmail:t,message:o.message,error:o.error}},c=function(e){var t=Object(i.a)("d1"),o=Object(i.a)("UserId"),n=Object(i.a)("verifycode");return{fetchConfirmEmail:function(){return e(Object(r.c)({verifycode:n,userid:o,d1:t}))}}};t.a=Object(n.connect)(s,c)(a.a)},1402:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(0),s=o.n(i),c=o(35),l=o(1),u=o.n(l),d=o(332),f=o(999),m=o(5),p=o(22),b=o(1116),h=(o.n(b),function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}()),g=Object(m.b)("standalone-modal"),_=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),h(t,[{key:"componentDidMount",value:function(){this.props.fetchConfirmEmail()}},{key:"render",value:function(){var e=this.context,t=this.props,o=t.processingVerifyEmail,n=t.message,a=t.error;return s.a.createElement("div",{className:""+g("wrapper")},s.a.createElement(f.a,{customClass:g("logo"),linkTo:"/"}),s.a.createElement("div",{className:""+g("container")},s.a.createElement("div",{className:""+g("body")},s.a.createElement("div",{className:""+g("body-text")},e.t(n))),n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:""+g("footer")},a?s.a.createElement(c.a,{to:Object(p.a)("/problem-logging-in"),className:g("btn","subtractive")},e.t("Problem with verification?")):s.a.createElement(c.a,{to:Object(p.a)("/login"),className:g("btn","additive")},e.t("Login")))),s.a.createElement(d.a,{isVisible:o,text:"Verifying your email address"})))}}]),t}(s.a.Component);_.defaultProps={fetchConfirmEmail:function(){},processingVerifyEmail:!0,message:"",error:!1},_.propTypes={fetchConfirmEmail:u.a.func.isRequired,processingVerifyEmail:u.a.bool.isRequired,message:u.a.string,error:u.a.bool},_.contextTypes={t:u.a.func.isRequired},t.a=_},1403:function(e,t,o){t=e.exports=o(45)(!1),t.push([e.i,".standalone-modal__wrapper{position:fixed;top:0;left:0;min-width:100%;min-height:100%;background:var(--standalone-modal__wrapper-bg-image);max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto}.standalone-modal__logo{margin:2.8rem;position:absolute;top:0;left:0;color:var(--standalone-modal__logo-color)}.standalone-modal__container{margin:auto;width:var(--standalone-modal__container-width);min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:var(--standalone-modal__container-bg-color);-webkit-box-shadow:var(--component__box-shadow);box-shadow:var(--component__box-shadow)}.standalone-modal__header{height:6.4rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--standalone-modal__font-color);background:var(--standalone-modal__header-bg-color);padding-left:2.8rem;-webkit-box-shadow:var(--standalone-modal__body-box-shadow);box-shadow:var(--standalone-modal__body-box-shadow)}.standalone-modal__header-text{font-size:1.6rem;color:var(--font__color-primary)}.standalone-modal__body{height:14rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--standalone-modal__font-color);background:var(--standalone-modal__body-bg-color);padding-left:2.8rem;padding-right:2.8rem;-webkit-box-shadow:var(--standalone-modal__body-box-shadow);box-shadow:var(--standalone-modal__body-box-shadow)}.standalone-modal__body-text{font-size:1.45rem;color:var(--font__color-primary)}.standalone-modal__success{padding:1rem}.standalone-modal__btn{font-size:1.1rem;display:inline-block;height:3.2rem;line-height:3.2rem;border-radius:2px;text-align:center;cursor:pointer;padding:0 1rem;border:1px solid transparent;color:var(--font__color-primary);white-space:nowrap}.standalone-modal__btn--subtractive{background:var(--danger__bg-color)}.standalone-modal__btn--subtractive:hover{background:var(--danger__bg-color--hover)}.standalone-modal__btn--subtractive:focus{background:var(--danger__bg-color--focus);border:solid 1px var(--danger__border-color--focus)}.standalone-modal__btn--additive{background:var(--success__bg-color)}.standalone-modal__btn--additive:hover{background:var(--success__bg-color--hover)}.standalone-modal__btn--additive:focus{background:var(--success__bg-color--focus);border:solid 1px var(--success__border-color--focus)}.standalone-modal__error{color:var(--danger__color)}.standalone-modal__terms-text{margin:1rem 0;line-height:1.45;color:var(--font__color-secondary)}.standalone-modal__input-box{-ms-flex-direction:column;flex-direction:column;height:3rem}.standalone-modal__information-text{margin-bottom:2.8rem;font-size:1.4rem;color:var(--font__color-secondary)}.standalone-modal__password-strength{color:var(--information__color)}.standalone-modal__footer{height:6.2rem;margin:0 2.8rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:solid 1px var(--border__color)}.standalone-modal__footer-separator{width:0;height:2rem;border-right:solid 1px var(--border__color);margin:0 1.5rem}.standalone-modal__form{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;margin:2.75rem}.standalone-modal__btn{width:var(--standalone-modal__btn-width);height:var(--standalone-modal__btn-height)}.standalone-modal__separator{margin:0 0 2.5rem;display:block;border-top:solid 1px var(--border__color)}.standalone-modal__auto-tab-input,.standalone-modal__radio-list{margin-bottom:2.5rem}@media (max-width:576px){.standalone-modal__wrapper{-ms-flex-pack:start;justify-content:flex-start}.standalone-modal__container{width:100%;font-size:1.3rem;-webkit-box-shadow:initial;box-shadow:none;margin:initial}.standalone-modal__logo{-ms-flex-item-align:start;align-self:flex-start;position:static;top:auto;left:auto}}",""])},1404:function(e,t,o){"use strict";var n=o(8),a=o(1405),r=o(131),i=o(343),s=o(7),c=o(49),l=Object(i.a)("d1"),u=Object(i.a)("UserId"),d=Object(i.a)("verifycode"),f=Object(s.j)({form:"resetPassword",onSubmit:function(e,t){var o=Object(c.p)(e.password);o?(t(Object(s.f)("resetPassword",!1,!0,"password","matchingPassword")),t(Object(r.g)({errorMessage:o}))):t(Object(r.f)({verifycode:d,userid:u,d1:l,formValues:e}))}})(a.a),m=Object(s.g)("resetPassword"),p=function(e){var t=e.apiProcessing.processingResetPassword,o=e.resetPassword,n=o.message,a=o.error,r=o.validateError;return{passwordValue:m(e,"password"),processingResetPassword:t,message:n,fetchError:a,validateError:r}},b={clearResetPasswordError:r.e};t.a=Object(n.connect)(p,b)(f)},1405:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(0),s=o.n(i),c=o(35),l=o(1),u=o.n(l),d=o(999),f=o(46),m=o(5),p=o(190),b=o(34),h=o(49),g=o(1094),_=o(22),v=o(194),y=(o.n(v),function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}()),w=Object(m.b)("standalone-form"),O=function(e){function t(){var e,o,r,i;n(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return o=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.handleChange=function(){r.props.validateError&&r.props.clearResetPasswordError()},r.getPasswordStrength=function(){var e=r,t=e.context,o=Object(g.a)(r.props.passwordValue);return{0:t.t("Very Weak"),1:t.t("Weak"),2:t.t("Medium"),3:t.t("Strong"),4:t.t("Very Strong")}[o]},i=o,a(r,i)}return r(t,e),y(t,[{key:"render",value:function(){var e=this.context,t=this.props,o=t.processingResetPassword,n=t.message,a=t.handleSubmit,r=t.fetchError,i=t.pristine,l=t.passwordValue,u=t.invalid,m=t.validateError;return s.a.createElement("div",{className:""+w("wrapper")},s.a.createElement(d.a,{customClass:w("logo"),linkTo:"/"}),s.a.createElement("div",{className:""+w("container")},!n&&s.a.createElement("div",{className:""+w("header")},s.a.createElement("div",{className:""+w("header-text")},e.t("Reset Your Password")),s.a.createElement(c.a,{to:Object(_.a)("/"),className:w("close-icon")},s.a.createElement(f.a,{name:"close",classModifiers:"big"}))),!n&&s.a.createElement("form",{onSubmit:a,className:""+w("form")},s.a.createElement(p.b,{type:"password",name:"password",customClass:w(),label:e.t("New Password"),validate:[h.o],readOnly:o,info:l&&s.a.createElement("span",{className:w("password-strength")},this.getPasswordStrength()),onChange:this.handleChange}),s.a.createElement(p.b,{type:"password",name:"matchingPassword",customClass:w(),label:e.t("Matching Password"),readOnly:o,validate:[h.o,h.g],onChange:this.handleChange}),m&&s.a.createElement("div",{className:w("password-error")},m),s.a.createElement("hr",{className:""+w("separator")}),s.a.createElement(b.a,{type:"submit",disabled:i||o||u,customClass:""+w()},o?e.t("Resetting your password..."):e.t("Reset Password"))),n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:""+w("message")},s.a.createElement("div",{className:""+w("message-text")},e.t(n))),s.a.createElement("div",{className:""+w("message-footer")},r?s.a.createElement(c.a,{to:Object(_.a)("/problem-logging-in"),className:w("btn","subtractive")},e.t("Problem resetting your password?")):s.a.createElement(c.a,{to:Object(_.a)("/login"),className:w("btn","additive")},e.t("Go to Exchange"))))))}}]),t}(s.a.Component);O.defaultProps={handleSubmit:function(){},processingResetPassword:!1,message:"",fetchError:!1},O.propTypes={handleSubmit:u.a.func.isRequired,processingResetPassword:u.a.bool.isRequired,fetchError:u.a.bool},O.contextTypes={t:u.a.func.isRequired},t.a=O},1406:function(e,t,o){"use strict";var n=o(8),a=o(206),r=o(343),i=o(1407),s=function(e){var t=e.apiProcessing.processingConfirmWithdraw,o=e.confirmWithdraw;return{processingConfirmWithdraw:t,message:o.message,error:o.error}},c=function(e){var t=Object(r.a)("d1"),o=Object(r.a)("UserId"),n=Object(r.a)("verifycode");return{fetchConfirmWithdraw:function(){return e(Object(a.c)({verifycode:n,userid:o,d1:t}))}}};t.a=Object(n.connect)(s,c)(i.a)},1407:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(0),s=o.n(i),c=o(35),l=o(1),u=o.n(l),d=o(332),f=o(999),m=o(5),p=o(22),b=o(121),h=o(1116),g=(o.n(h),function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}()),_=Object(m.b)("standalone-modal"),v=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.fetchConfirmWithdraw()}},{key:"render",value:function(){var e=this.context,t=this.props,o=t.processingConfirmWithdraw,n=t.message;return s.a.createElement("div",{className:""+_("wrapper")},s.a.createElement(f.a,{customClass:_("logo"),linkTo:"/"}),s.a.createElement("div",{className:""+_("container")},s.a.createElement("div",{className:""+_("body")},s.a.createElement("div",{className:""+_("body-text")},e.t(n))),n&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:""+_("footer")},s.a.createElement(c.a,{to:Object(p.a)(""+b.b.path),className:_("btn","additive")},e.t("Go to Exchange")))),s.a.createElement(d.a,{isVisible:o,text:"Confirming your withdrawal"})))}}]),t}(s.a.Component);v.defaultProps={fetchConfirmWithdraw:function(){},processingConfirmWithdraw:!0,message:""},v.propTypes={fetchConfirmWithdraw:u.a.func.isRequired,processingConfirmWithdraw:u.a.bool.isRequired,message:u.a.string},v.contextTypes={t:u.a.func.isRequired},t.a=v},939:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(8),a=o(1095),r=o(967),i=o(47),s=function(e){return{openModal:function(){return e(Object(i.e)(i.b.DEPOSIT_STATUS))}}},c=Object(n.connect)(null,s)(a.a);t.default=Object(r.a)({name:i.b.DEPOSIT_STATUS})(c)},956:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),s=o.n(i),c=o(1092),l=o(369),u=o(349),d=o(1400),f=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),m=function(e){function t(){var e,o,r,i;n(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return o=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={StandAloneComponent:void 0},i=o,a(r,i)}return r(t,e),f(t,[{key:"componentWillMount",value:function(){return Object(u.d)()?this.setState({StandAloneComponent:d.a.VerifyEmailContainer}):Object(u.a)()?this.setState({StandAloneComponent:d.a.ConfirmWithdrawContainer}):Object(u.c)()?this.setState({StandAloneComponent:d.a.ResetPasswordNoAuthFormContainer}):Object(u.b)()?this.setState({StandAloneComponent:d.a.DepositConfirmationContainer}):void Object(l.c)()}},{key:"componentWillUnmount",value:function(){Object(l.b)(!1)}},{key:"render",value:function(){var e=this.state.StandAloneComponent;return e?s.a.createElement(e,null):null}}]),t}(s.a.Component);t.default=Object(c.a)(m)},967:function(e,t,o){"use strict";var n=o(8),a=o(47),r=function(e){var t=e.name,o=function(e){if(e.modal.hasOwnProperty(t)){var o=e.modal[t],n=o.isOpen,a=o.modalProps;return Object.assign({isOpen:n},a)}return{isOpen:!1}},r=function(e){return{close:function(){return e(Object(a.d)(t))}}};return function(e){return Object(n.connect)(o,r)(e)}};t.a=r},999:function(e,t,o){"use strict";var n=o(0),a=o.n(n),r=o(1),i=o.n(r),s=o(35),c=o(22),l=o(350),u=o(6),d=o(5),f=o(1039),m=(o.n(f),function(e){var t=e.customClass,o=e.linkTo,n=Object(d.b)("ap-logo",t),r=function(){return u.default.global.siteLogo.match(/.svg$/)?a.a.createElement(l.a,{alt:"Site logo",src:Object(c.a)("/local/logos/"+u.default.global.siteLogo),className:n("img")}):a.a.createElement("img",{alt:"Site logo",src:Object(c.a)("/local/logos/"+u.default.global.siteLogo),className:n("img")})};return a.a.createElement("div",{className:n()},o?a.a.createElement(s.a,{className:n("link"),to:Object(c.a)(o)},r()):r())});m.defaultProps={customClass:"",linkTo:""},m.propTypes={customClass:i.a.string,linkTo:i.a.string},t.a=m}});