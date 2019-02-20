webpackJsonp([38],{1161:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var s=t(0),i=t.n(s),c=t(78),l=t.n(c),u=t(1),f=t.n(u),p=t(6),A=t(354),m=t(1162),b=t(1165),C=(t.n(b),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),d=function(e){function n(){var e,t,o,s;r(this,n);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return t=o=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),o.bemClasses=Object(p.b)(["ap-snackbar"]),s=t,a(o,s)}return o(n,e),C(n,[{key:"closeSnack",value:function(e){this.props.dismissSnackByUniqueId(e.uniqueId),e.onClose&&e.onClose()}},{key:"getSnackElement",value:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.timeout||A.a.timeout,a=Math.round(r/1e3);return setTimeout(function(){return n.closeSnack(e)},r),i.a.createElement("div",{key:t,className:this.bemClasses("snack")},i.a.createElement(m.a,Object.assign({},e,{onClose:function(){return n.closeSnack(n.props.snacks[0])}})),A.a.showProgressBar&&i.a.createElement("div",{className:this.bemClasses("snack-progress"),style:{animationDuration:a+"s"}}))}},{key:"render",value:function(){var e=this;return l.a.createPortal(i.a.createElement("div",{className:this.bemClasses()},A.a.showMultiple&&this.props.snacks.map(function(n,t){return e.getSnackElement(n,t)}),!A.a.showMultiple&&this.props.snacks[0]&&this.getSnackElement(this.props.snacks[0])),document.body)}}]),n}(s.Component);d.defaultProps={timeout:A.a.timeout,snacks:[]},d.propTypes={timeout:f.a.number,snacks:f.a.arrayOf(f.a.shape({timeout:f.a.number,text:f.a.string.isRequired,id:f.a.string.isRequired,type:f.a.oneOf(["info","success","warning"]),customClass:f.a.string,onClose:f.a.func})).isRequired},n.a=d},1162:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var s=t(0),i=t.n(s),c=t(1),l=t.n(c),u=t(6),f=t(354),p=t(49),A=t(1163),m=(t.n(A),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),b=function(e){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,e),m(n,[{key:"render",value:function(){var e=this,n=Object(u.b)(["snackbar",this.props.customClass]),t=this.props,r=t.type,a=t.text,o=t.textVars;return i.a.createElement("div",{className:n("",r)},i.a.createElement("div",{className:n("text",r)},this.context.t(a,o)),i.a.createElement("div",{className:n("close",r),onClick:function(){return e.props.onClose()}},i.a.createElement(p.a,{name:"close",className:n("close-icon"),customClass:n("icon"),classModifiers:"big"})))}}]),n}(s.Component);b.defaultProps={timeout:f.a.timeout,text:"",textVars:{},type:f.a.type,customClass:"custom-snackbar",onClose:function(){}},b.contextTypes={t:l.a.func.isRequired},b.propTypes={timeout:l.a.number,id:l.a.string.isRequired,text:l.a.string.isRequired,textVars:l.a.object,type:l.a.oneOf(["info","success","warning"]),customClass:l.a.string,onClose:l.a.func},n.a=b},1163:function(e,n,t){var r=t(1164);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;t(942)(r,a);r.locals&&(e.exports=r.locals)},1164:function(e,n,t){n=e.exports=t(48)(!0),n.push([e.i,".snackbar{height:52px;color:var(--font__color-primary);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:start;align-items:flex-start;padding:0 2rem;position:relative}.snackbar--info{background:var(--information__color)}.snackbar--success{background:var(--success__color)}.snackbar--warning{background:var(--danger__color)}.snackbar__close,.snackbar__text{-ms-flex-order:0;order:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;line-height:52px;vertical-align:middle}","",{version:3,sources:["C:/Users/Monkey/Documents/AlphaPoint/apex-web/src/components/common/Snackbar/Snackbar.css"],names:[],mappings:"AAAA,UACE,YAAa,AACb,iCAAkC,AAClC,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,qBAAsB,AAClB,iBAAkB,AACtB,sBAAuB,AACnB,8BAA+B,AACnC,2BAA4B,AACxB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,eAAgB,AAChB,iBAAmB,CACpB,AAED,gBACE,oCAAsC,CACvC,AAED,mBACE,gCAAkC,CACnC,AAED,mBACE,+BAAiC,CAClC,AAED,iCAEE,iBAAkB,AACd,QAAS,AACb,kBAAmB,AACf,cAAe,AACnB,yBAA0B,AACtB,gBAAiB,AACrB,iBAAkB,AAClB,qBAAuB,CACxB",file:"Snackbar.css",sourcesContent:[".snackbar {\r\n  height: 52px;\r\n  color: var(--font__color-primary);\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: row;\r\n      flex-direction: row;\r\n  -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  -ms-flex-line-pack: stretch;\r\n      align-content: stretch;\r\n  -ms-flex-align: start;\r\n      align-items: flex-start;\r\n  padding: 0 2rem;\r\n  position: relative;\r\n}\r\n\r\n.snackbar--info {\r\n  background: var(--information__color);\r\n}\r\n\r\n.snackbar--success {\r\n  background: var(--success__color);\r\n}\r\n\r\n.snackbar--warning {\r\n  background: var(--danger__color);\r\n}\r\n\r\n.snackbar__text,\r\n.snackbar__close {\r\n  -ms-flex-order: 0;\r\n      order: 0;\r\n  -ms-flex: 0 1 auto;\r\n      flex: 0 1 auto;\r\n  -ms-flex-item-align: auto;\r\n      align-self: auto;\r\n  line-height: 52px;\r\n  vertical-align: middle;\r\n}\r\n"],sourceRoot:""}])},1165:function(e,n,t){var r=t(952);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;t(942)(r,a);r.locals&&(e.exports=r.locals)},950:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(8),a=t(10),o=t(1161),s=function(e){return{snacks:e.snackbar.snacks}},i=function(e){return{dismissSnackByUniqueId:function(n){return e(Object(a.e)(n))}}};n.default=Object(r.connect)(s,i)(o.a)}});
//# sourceMappingURL=38.d7c411bf.chunk.js.map