webpackJsonp([38],{1286:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(1),a=n.n(o),l=n(35),s=n(22),c=n(5),m=n(1287),d=(n.n(m),function(e,t){var n=Object(c.b)("nav-menu-vertical",e.customClass);return i.a.createElement("div",{className:n()},i.a.createElement("ul",{className:n("list")},e.items.filter(function(e){return void 0===e.show||e.show}).map(function(r){return i.a.createElement("li",{key:r.path,"data-test":r.text},i.a.createElement(l.b,{onClick:e.handleNavItemClick?e.handleNavItemClick:null,className:n("item",["hoverable"]),to:Object(s.a)(r.path)},t.t(r.text)))})))});d.propTypes={customClass:a.a.oneOfType([a.a.string,a.a.func]),items:a.a.array,handleNavItemClick:a.a.func},d.contextTypes={t:a.a.func.isRequired},t.a=d},1287:function(e,t,n){var r=n(1288);"string"===typeof r&&(r=[[e.i,r,""]]);var i={hmr:!1};i.transform=void 0;n(934)(r,i);r.locals&&(e.exports=r.locals)},1288:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".nav-menu-vertical{background:var(--sidebar-nav-background)}.nav-menu-vertical__list{padding:0;margin:0;height:100%;overflow:auto;-ms-flex-direction:column;flex-direction:column}.nav-menu-vertical__list li{display:-ms-flexbox;display:flex;border-bottom:solid 1px var(--border__color)}.nav-menu-vertical__list li:last-child{border-bottom:solid .5px var(--border__color)}.nav-menu-vertical__item{-ms-flex:1 0 auto;flex:1 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.3rem;border-left:4px solid transparent;padding:0 2rem 0 1.75rem;cursor:pointer;width:var(--side-menu__item-width);height:var(--side-menu__item-height);color:var(--font__color-secondary)}.nav-menu-vertical__item:hover{color:var(--font__color-primary);background:var(--side-menu__item-bg-color--selected);border-left-color:var(--side-menu__item-accent-color)}.nav-menu-vertical__item.active,.nav-menu-vertical__item.active:hover{color:var(--font__color-primary);background:var(--side-menu__item-bg-color--selected);border-left-color:var(--side-menu__item-accent-color--selected)}@media only screen and (max-width:48rem){.nav-menu-vertical__list{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.nav-menu-vertical__list li{list-style-type:none;-ms-flex:1 0 auto;flex:1 0 auto}.nav-menu-vertical__item{-ms-flex:unset;flex:unset;width:auto;border-left:0;border-right:1px solid var(--border__color);border-bottom:4px solid transparent}.nav-menu-vertical__item:hover{border-bottom-color:var(--side-menu__item-accent-color)}.nav-menu-vertical__item.active,.nav-menu-vertical__item.active:hover{border-bottom-color:var(--side-menu__item-accent-color--selected)}}",""])},1289:function(e,t,n){var r=n(1290);"string"===typeof r&&(r=[[e.i,r,""]]);var i={hmr:!1};i.transform=void 0;n(934)(r,i);r.locals&&(e.exports=r.locals)},1290:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".settings-menu__container--closed{overflow:hidden}@media only screen and (min-width:48rem){.settings-menu__menu-toggle{display:none}}@media only screen and (max-width:48rem){.settings-menu__container{-ms-flex-order:1;order:1;z-index:1;height:var(--nav-header__height)}.settings-menu__triangles-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.settings-menu__triangle-down{border-top:4px solid var(--component__color-primary);margin-top:.3rem}.settings-menu__triangle-down,.settings-menu__triangle-up{border-left:4px solid transparent;border-right:4px solid transparent}.settings-menu__triangle-up{border-bottom:4px solid var(--component__color-primary);margin-bottom:.3rem}.settings-menu__menu-toggle{cursor:pointer;min-height:var(--nav-header__height);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:0 2rem;font-size:19px;font-weight:700;z-index:1;width:100%;border:0}.nav-menu-vertical__list{-ms-flex-direction:column;flex-direction:column}.nav-menu-vertical__item{background:var(--side-menu__item-bg-color--selected);width:100%;border-right:0}.fix-left-fluid-layout__side-bar{border-right:0;border-bottom:2px solid var(--side-menu__item-accent-color--selected)}}",""])},945:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=n.n(a),s=n(1286),c=n(1),m=n.n(c),d=n(121),u=n(5),f=n(1289),v=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),_=Object(u.b)("settings-menu"),p=function(e){function t(){var e,n,o,a;r(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={isOpen:!1},o.handleClick=function(){o.state.isOpen?document.removeEventListener("click",o.handleOutsideClick,!1):document.addEventListener("click",o.handleOutsideClick,!1),o.setState(function(e){return{isOpen:!e.isOpen}})},o.handleOutsideClick=function(e){o.node.contains(e.target)||o.handleClick()},a=n,i(o,a)}return o(t,e),v(t,[{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleOutsideClick,!1)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:_("container",this.state.isOpen?"":"closed"),ref:function(t){e.node=t}},l.a.createElement("div",{className:_("menu-toggle",this.state.isOpen?"active":""),onClick:this.handleClick},this.context.t("User Settings"),l.a.createElement("div",{className:_("triangles-container")},l.a.createElement("span",{className:_("triangle-up")}),l.a.createElement("span",{className:_("triangle-down")}))),l.a.createElement(s.a,{customClass:_,handleNavItemClick:this.handleClick,items:d.e.items.filter(function(e){return e.show})}))}}]),t}(l.a.Component);t.default=p,p.contextTypes={t:m.a.func.isRequired}}});