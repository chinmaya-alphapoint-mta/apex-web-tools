webpackJsonp([31],{1066:function(e,r,n){"use strict";function t(e,r){var n={};for(var t in e)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var s=n(0),c=n.n(s),l=n(1),A=n.n(l),m=n(7),u=n(49),p=n(198),f=n(6),d=n(1067),g=(n.n(d),function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}()),b=function(e){function r(e){o(this,r);var n=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return n.handleClick=function(){n.setState({reveal:!n.state.reveal})},n.renderIcon=function(e){return c.a.createElement("span",{onClick:n.handleClick,className:e("icon",{active:n.state.reveal})},c.a.createElement(u.a,{name:"eye"}))},n.state={value:"",reveal:!1},n}return i(r,e),g(r,[{key:"render",value:function(){var e=this.props,r=e.customClass,n=t(e,["customClass"]),o=Object(f.b)("ap-password-input",r),a=this.renderIcon(o);return c.a.createElement("div",{className:o()},c.a.createElement(p.a,Object.assign({customClass:r},n,{type:this.state.reveal?"text":"password",iconComponent:a})))}}]),r}(c.a.Component),C=function(e){return c.a.createElement(m.a,Object.assign({name:e.name,component:b},e))};C.propTypes={customClass:A.a.string},r.a=C},1067:function(e,r,n){var t=n(1068);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!1};o.transform=void 0;n(942)(t,o);t.locals&&(e.exports=t.locals)},1068:function(e,r,n){r=e.exports=n(48)(!0),r.push([e.i,".ap-password-input__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-left:-2.5rem;height:1.5rem;width:1.5rem;cursor:pointer;color:var(--font__color-secondary)}.ap-password-input__icon--active{color:var(--font__color-primary)}","",{version:3,sources:["C:/Users/Monkey/Documents/AlphaPoint/apex-web/src/components/common/APPasswordInput/APPasswordInput.css"],names:[],mappings:"AAAA,yBACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,oBAAqB,AACrB,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,kCAAoC,CACrC,AAED,iCACE,gCAAkC,CACnC",file:"APPasswordInput.css",sourcesContent:[".ap-password-input__icon {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  margin-left: -2.5rem;\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  cursor: pointer;\r\n  color: var(--font__color-secondary);\r\n}\r\n\r\n.ap-password-input__icon--active {\r\n  color: var(--font__color-primary);\r\n}\r\n"],sourceRoot:""}])},1077:function(e,r,n){"use strict";function t(e){var r=function(r){var n=r.shouldRedirect,t=r.redirectLocation;return r.isAuthenticated?Object(l.a)()?a.a.createElement(e,r):n?a.a.createElement(s.c,{to:{pathname:t.pathname,search:t.search}}):a.a.createElement(s.c,{to:Object(c.a)(A.b.path+"?default=redirect")}):a.a.createElement(e,r)},n=function(e){return{isAuthenticated:e.auth.isAuthenticated,shouldRedirect:e.auth.shouldRedirect,redirectLocation:e.auth.location}};return Object(i.connect)(n,null)(r)}var o=n(0),a=n.n(o),i=n(8),s=n(37),c=n(23),l=n(1149),A=n(126);r.a=t},1149:function(e,r,n){"use strict";n.d(r,"a",function(){return o});var t=n(355),o=function(){return!!Object(t.a)()||(!!Object(t.d)()||void 0)}},1155:function(e,r,n){"use strict";var t=n(0),o=n.n(t),a=n(1),i=n.n(a),s=n(37),c=n(198),l=n(35),A=n(49),m=n(51),u=n(1066),p=n(1077),f=n(23),d=n(5),g=n(6),b=n(1156),C=n(340),_=n(205),h=(n.n(_),n(1159)),B=(n.n(h),Object(g.b)("standalone-form")),v=Object(g.b)("login-form"),y=function(e,r){var n=e.handleSubmit,t=e.errorMsg,a=e.submitting,i=e.doSubmit,p=e.isConnected,g=d.default.LoginForm;return o.a.createElement("div",{className:B("container")+" "+v("container")},o.a.createElement("div",{className:B("header")+" "+v("header")},o.a.createElement("div",{className:B("header-text")+" "+v("header-text")},r.t("Log In to {n}",{n:g&&g.siteName?g.siteName:d.default.global.siteName})),o.a.createElement(s.a,{to:Object(f.a)("/"),className:B("close-icon")},o.a.createElement(A.a,{name:"close",classModifiers:"big"}))),o.a.createElement("form",{onSubmit:n(function(e){return i(e,p)}),className:B("form")+" "+v("form")},t&&o.a.createElement("p",{className:B("error")},t),o.a.createElement(c.b,{type:"text",name:"username",customClass:v(),label:r.t("Username"),validate:[m.p]}),o.a.createElement(u.a,{type:"password",name:"password",customClass:v(),label:r.t("Password"),validate:[m.p]}),Array.isArray(d.default.global.gateway)&&o.a.createElement(b.a,null),o.a.createElement("hr",{className:v("separator")}),o.a.createElement(l.a,{type:"submit",disabled:a,customClass:v(),styleName:C.b.additive},a?r.t("Processing..."):r.t("Log In"))),o.a.createElement("div",{className:B("footer")+" "+v("footer")},d.default.SignupForm.active&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{to:Object(f.a)("/signup"),className:v("link"),disabled:!0},r.t("Sign Up")),o.a.createElement("div",{className:B("footer-separator")})),o.a.createElement(s.a,{to:Object(f.a)("/problem-logging-in"),className:v("link"),disabled:!0},r.t("Problem Logging In?"))))};y.defaultProps={handleSubmit:function(){},submitting:!1},y.propTypes={handleSubmit:i.a.func,submitting:i.a.bool,referrer:i.a.string},y.contextTypes={t:i.a.func.isRequired},r.a=Object(p.a)(y)},1156:function(e,r,n){"use strict";function t(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var s=n(0),c=n.n(s),l=n(1),A=n.n(l),m=n(341),u=n(5),p=n(353),f=n(79),d=n(6),g=n(1157),b=(n.n(g),function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}()),C=Object(d.b)("trading-server"),_=function(e){function r(){return o(this,r),a(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return i(r,e),b(r,[{key:"render",value:function(){var e=Object(p.a)(),r=u.default.global.gateway.filter(function(r){return r!==e}).map(function(e){return{value:e,label:e}});return c.a.createElement(m.a,{name:"tradingServer",label:this.context.t("Select server")+":",onSelect:function(e){return Object(f.d)(e)},options:[{value:e,label:e}].concat(t(r)),showTriangles:!0,customClass:C()})}}]),r}(c.a.Component);_.contextTypes={t:A.a.func.isRequired},r.a=_},1157:function(e,r,n){var t=n(1158);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!1};o.transform=void 0;n(942)(t,o);t.locals&&(e.exports=t.locals)},1158:function(e,r,n){r=e.exports=n(48)(!0),r.push([e.i,".trading-server__select-wrapper{margin-bottom:3.6rem;position:relative}.trading-server__select-label{font-size:1.4rem;letter-spacing:-.5px;position:relative}.trading-server__select{height:3.6rem;border-radius:5px;border:1px solid var(--border__color);-webkit-appearance:none}.trading-server__triangles-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:absolute;right:1.3rem;bottom:1.25rem;pointer-events:none}@media only screen and (max-width:576px){.trading-server__select{font-size:1.2rem}}","",{version:3,sources:["C:/Users/Monkey/Documents/AlphaPoint/apex-web/src/components/TradingServer/TradingServerComponent.css"],names:[],mappings:"AAIA,gCACI,qBAAsB,AACtB,iBAAmB,CACtB,AAED,8BACI,iBAAkB,AAClB,qBAAuB,AACvB,iBAAmB,CACtB,AAED,wBACI,cAAe,AACf,kBAAmB,AACnB,sCAAuC,AACvC,uBAAwB,CAC3B,AAED,qCACI,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,kBAAmB,AACnB,aAAc,AACd,eAAgB,AAChB,mBAAqB,CACxB,AAKD,yCACI,wBACE,gBAAkB,CACnB,CACF",file:"TradingServerComponent.css",sourcesContent:[".trading-server {\r\n\r\n}\r\n\r\n.trading-server__select-wrapper {\r\n    margin-bottom: 3.6rem;\r\n    position: relative;\r\n}\r\n\r\n.trading-server__select-label {\r\n    font-size: 1.4rem;\r\n    letter-spacing: -0.5px;\r\n    position: relative;\r\n}\r\n\r\n.trading-server__select {\r\n    height: 3.6rem;\r\n    border-radius: 5px;\r\n    border: 1px solid var(--border__color);\r\n    -webkit-appearance:none;\r\n}\r\n\r\n.trading-server__triangles-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    position: absolute;\r\n    right: 1.3rem;\r\n    bottom: 1.25rem;\r\n    pointer-events: none;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n/* Extra Small Devices, Phones */\r\n@media only screen and (max-width: 576px) {\r\n    .trading-server__select {\r\n      font-size: 1.2rem;\r\n    }\r\n  }\r\n  "],sourceRoot:""}])},1159:function(e,r,n){var t=n(1160);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!1};o.transform=void 0;n(942)(t,o);t.locals&&(e.exports=t.locals)},1160:function(e,r,n){r=e.exports=n(48)(!0),r.push([e.i,".login-form__form{margin:3rem 2.8rem 2.8rem}.login-form__container{border-radius:10px}.login-form__header{height:6.8rem;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid var(--standalone-form__header-border-color)}.login-form__header-text{font-size:2rem}.login-form__footer{padding:0 2.8rem;margin:0}.login-form__label{font-size:1.4rem;letter-spacing:-.5px}.login-form__input{height:3.6rem;border-radius:5px;border:1px solid var(--border__color)}.login-form__input-wrapper{padding-bottom:3.6rem;margin:0}.login-form__btn{height:5rem;border-radius:5px;font-size:1.4rem}.login-form__separator{margin:.9rem -2.8rem 3rem}.login-form__link{font-size:1.2rem}","",{version:3,sources:["C:/Users/Monkey/Documents/AlphaPoint/apex-web/src/components/Login/LoginFormComponent.css"],names:[],mappings:"AAAA,kBACE,yBAA2B,CAC5B,AACD,uBACE,kBAAoB,CACrB,AAED,oBACE,cAAe,AACf,4BAA6B,AAC7B,6BAA8B,AAC9B,mEAAqE,CACtE,AAED,yBACE,cAAgB,CACjB,AAED,oBACE,iBAAkB,AAClB,QAAU,CACX,AAED,mBACE,iBAAkB,AAClB,oBAAuB,CACxB,AAED,mBACE,cAAe,AACf,kBAAmB,AACnB,qCAAuC,CACxC,AAED,2BACE,sBAAuB,AACvB,QAAU,CACX,AAED,iBACE,YAAa,AACb,kBAAmB,AACnB,gBAAkB,CACnB,AAED,uBACE,yBAAoC,CACrC,AAED,kBACE,gBAAkB,CACnB",file:"LoginFormComponent.css",sourcesContent:[".login-form__form {\r\n  margin: 3rem 2.8rem 2.8rem;\r\n}\r\n.login-form__container {\r\n  border-radius: 10px;\r\n}\r\n\r\n.login-form__header {\r\n  height: 6.8rem;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  border-bottom: 2px solid var(--standalone-form__header-border-color);\r\n}\r\n\r\n.login-form__header-text {\r\n  font-size: 2rem;\r\n}\r\n\r\n.login-form__footer {\r\n  padding: 0 2.8rem;\r\n  margin: 0;\r\n}\r\n\r\n.login-form__label {\r\n  font-size: 1.4rem;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n.login-form__input {\r\n  height: 3.6rem;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--border__color);\r\n}\r\n\r\n.login-form__input-wrapper {\r\n  padding-bottom: 3.6rem;\r\n  margin: 0;\r\n}\r\n\r\n.login-form__btn {\r\n  height: 5rem;\r\n  border-radius: 5px;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.login-form__separator {\r\n  margin: 0.9rem -2.8rem 3rem -2.8rem;\r\n}\r\n\r\n.login-form__link {\r\n  font-size: 1.2rem;\r\n}"],sourceRoot:""}])},949:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(8),o=n(7),a=n(1155),i=n(75),s=n(10),c=n(23),l=n(206),A=function(e){return{errorMsg:e.auth.errorMsg,isConnected:e.wsConnection.isConnected}},m=function(e,r){return{doSubmit:function(n,t){return t&&navigator.onLine?e(Object(i.g)(n)).then(function(e){e.type===i.a&&r.history.push(Object(c.a)("/twofactorauth"))}):e(Object(s.f)({id:"loginNotConnectedError",text:"We were unable to login, check your internet connection and try refreshing the page.",type:"warning"}))}}},u=Object(t.connect)(A,m)(a.a),p=Object(o.j)({form:"login",onSubmit:function(){}})(u);r.default=Object(l.withRouter)(p)}});
//# sourceMappingURL=31.309af6c9.chunk.js.map