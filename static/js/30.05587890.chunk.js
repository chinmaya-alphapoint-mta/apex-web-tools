webpackJsonp([30],{1092:function(e,t,r){"use strict";function n(e){var t=function(t){var r=t.shouldRedirect,n=t.redirectLocation;return t.isAuthenticated?Object(l.a)()?o.a.createElement(e,t):r?o.a.createElement(c.c,{to:{pathname:n.pathname,search:n.search}}):o.a.createElement(c.c,{to:Object(s.a)(u.b.path+"?default=redirect")}):o.a.createElement(e,t)},r=function(e){return{isAuthenticated:e.auth.isAuthenticated,shouldRedirect:e.auth.shouldRedirect,redirectLocation:e.auth.location}};return Object(i.connect)(r,null)(t)}var a=r(0),o=r.n(a),i=r(8),c=r(35),s=r(22),l=r(1093),u=r(121);t.a=n},1093:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r(349),a=function(){return!!Object(n.a)()||(!!Object(n.c)()||void 0)}},1097:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=r(0),s=r.n(c),l=r(1),u=r.n(l),f=r(7),m=r(46),p=r(190),d=r(5),b=r(1098),g=(r.n(b),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),h=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleClick=function(){r.setState({reveal:!r.state.reveal})},r.renderIcon=function(e){return s.a.createElement("span",{onClick:r.handleClick,className:e("icon",{active:r.state.reveal})},s.a.createElement(m.a,{name:"eye"}))},r.state={value:"",reveal:!1},r}return i(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.customClass,r=n(e,["customClass"]),a=Object(d.b)("ap-password-input",t),o=this.renderIcon(a);return s.a.createElement("div",{className:a()},s.a.createElement(p.a,Object.assign({customClass:t},r,{type:this.state.reveal?"text":"password",iconComponent:o})))}}]),t}(s.a.Component),v=function(e){return s.a.createElement(f.a,Object.assign({name:e.name,component:h},e))};v.propTypes={customClass:u.a.string},t.a=v},1098:function(e,t,r){var n=r(1099);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(934)(n,a);n.locals&&(e.exports=n.locals)},1099:function(e,t,r){t=e.exports=r(45)(!1),t.push([e.i,".ap-password-input__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-left:-2.5rem;height:1.5rem;width:1.5rem;cursor:pointer;color:var(--font__color-secondary)}.ap-password-input__icon--active{color:var(--font__color-primary)}",""])},1410:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),c=r(35),s=r(190),l=r(34),u=r(46),f=r(49),m=r(1097),p=r(1092),d=r(22),b=r(6),g=r(5),h=r(1411),v=r(333),y=r(194),_=(r.n(y),r(1414)),O=(r.n(_),Object(g.b)("standalone-form")),j=Object(g.b)("login-form"),w=function(e,t){var r=e.handleSubmit,n=e.errorMsg,o=e.submitting,i=e.doSubmit,p=e.isConnected;return a.a.createElement("div",{className:O("container")+" "+j("container")},a.a.createElement("div",{className:O("header")+" "+j("header")},a.a.createElement("div",{className:O("header-text")+" "+j("header-text")},t.t("Log In to {n}",{n:b.default.global.siteName})),a.a.createElement(c.a,{to:Object(d.a)("/"),className:O("close-icon")},a.a.createElement(u.a,{name:"close",classModifiers:"big"}))),a.a.createElement("form",{onSubmit:r(function(e){return i(e,p)}),className:O("form")+" "+j("form")},n&&a.a.createElement("p",{className:O("error")},n),a.a.createElement(s.b,{type:"text",name:"username",customClass:j(),label:t.t("Username"),validate:[f.o]}),a.a.createElement(m.a,{type:"password",name:"password",customClass:j(),label:t.t("Password"),validate:[f.o]}),Array.isArray(b.default.global.gateway)&&a.a.createElement(h.a,null),a.a.createElement("hr",{className:j("separator")}),a.a.createElement(l.a,{type:"submit",disabled:o,customClass:j(),styleName:v.b.additive},o?t.t("Processing..."):t.t("Log In"))),a.a.createElement("div",{className:O("footer")+" "+j("footer")},b.default.SignupForm.active&&a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{to:Object(d.a)("/signup"),className:j("link"),disabled:!0},t.t("Sign Up")),a.a.createElement("div",{className:O("footer-separator")})),a.a.createElement(c.a,{to:Object(d.a)("/problem-logging-in"),className:j("link"),disabled:!0},t.t("Problem Logging In?"))))};w.defaultProps={handleSubmit:function(){},submitting:!1},w.propTypes={handleSubmit:i.a.func,submitting:i.a.bool,referrer:i.a.string},w.contextTypes={t:i.a.func.isRequired},t.a=Object(p.a)(w)},1411:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=r(0),s=r.n(c),l=r(1),u=r.n(l),f=r(334),m=r(6),p=r(348),d=r(127),b=r(5),g=r(1412),h=(r.n(g),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),v=Object(b.b)("trading-server"),y=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"render",value:function(){var e=Object(p.a)(),t=m.default.global.gateway.filter(function(t){return t!==e}).map(function(e){return{value:e,label:e}});return s.a.createElement(f.a,{name:"tradingServer",label:this.context.t("Select server")+":",onSelect:function(e){return Object(d.d)(e)},options:[{value:e,label:e}].concat(n(t)),customClass:v()})}}]),t}(s.a.Component);y.contextTypes={t:u.a.func.isRequired},t.a=y},1412:function(e,t,r){var n=r(1413);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(934)(n,a);n.locals&&(e.exports=n.locals)},1413:function(e,t,r){t=e.exports=r(45)(!1),t.push([e.i,".trading-server__select-wrapper{margin-bottom:3.6rem}.trading-server__select-label{font-size:1.4rem;letter-spacing:-.5px}.trading-server__select{height:3.6rem;border-radius:5px;border:1px solid var(--border__color)}",""])},1414:function(e,t,r){var n=r(1415);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(934)(n,a);n.locals&&(e.exports=n.locals)},1415:function(e,t,r){t=e.exports=r(45)(!1),t.push([e.i,".login-form__form{margin:3rem 2.8rem 2.8rem}.login-form__container{border-radius:10px;width:41.6rem}.login-form__header{height:6.8rem;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid var(--standalone-form__header-border-color)}.login-form__header-text{font-size:2rem}.login-form__footer{padding:0 2.8rem;margin:0}.login-form__label{font-size:1.4rem;letter-spacing:-.5px}.login-form__input{height:3.6rem;border-radius:5px;border:1px solid var(--border__color)}.login-form__input-wrapper{padding-bottom:3.6rem;margin:0}.login-form__btn{height:5rem;border-radius:5px;font-size:1.4rem}.login-form__separator{margin:.9rem -2.8rem 3rem}.login-form__link{font-size:1.2rem}",""])},958:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),a=r(7),o=r(1410),i=r(74),c=r(11),s=r(22),l=r(199),u=function(e){return{errorMsg:e.auth.errorMsg,isConnected:e.wsConnection.isConnected}},f=function(e,t){return{doSubmit:function(r,n){return n&&navigator.onLine?e(Object(i.f)(r)).then(function(e){e.type===i.a&&t.history.push(Object(s.a)("/twofactorauth"))}):e(Object(c.f)({id:"loginNotConnectedError",text:"We were unable to login, check your internet connection and try refreshing the page.",type:"warning"}))}}},m=Object(n.connect)(u,f)(o.a),p=Object(a.j)({form:"login",onSubmit:function(){}})(m);t.default=Object(l.withRouter)(p)}});