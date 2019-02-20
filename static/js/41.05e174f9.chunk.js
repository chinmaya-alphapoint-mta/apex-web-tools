webpackJsonp([41],{1399:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),o=n.n(a),l=n(1),c=n.n(l),d=n(28),A=n.n(d),g=n(199),_=n.n(g),p=n(6),y=n(54),v=n(1400),b=(n.n(v),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),u=Object(p.b)("kyc-settings"),C=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),b(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.userId,r=t.userName,i=t.getUserConfig;!e.userId&&!e.userName&&n&&r&&i(n,r)}},{key:"render",value:function(){var e=this.props,t=e.kycConfig,n=e.verificationLevel,r=e.levelIncreaseStatus,i=e.openKYCSidePane,s=e.LevelsComponent,a=e.highlightStyle,l=_()(t,"levels",[]),c=l[0],d=l[1],g=l[2],p=l[3],y={highlightStyle:a,verificationLevel:n,levelIncreaseStatus:r,openKYCSidePane:i,levels:l,level1:c,level2:d,level3:g,level4:p};return o.a.createElement("div",{className:A()(u("",a))},o.a.createElement("div",{className:u("header")},o.a.createElement("div",{className:u("header-text")},this.context.t("Current Verification Level")),o.a.createElement("div",{className:u("description")},this.context.t("For your security, some of our services require you to provide basic or additional levels of verification.")),o.a.createElement("div",{className:u("description")},this.context.t("To verify your account or to check what your current verification level is, see below."))),o.a.createElement("div",{className:u("levels")},o.a.createElement(s,y)))}}]),t}(o.a.Component);C.contextTypes={t:c.a.func.isRequired},C.propTypes={userId:c.a.number,userName:c.a.string,values:c.a.object,verificationLevel:c.a.number,levelIncreaseStatus:c.a.oneOfType([c.a.string,c.a.number]),openKYCSidePane:c.a.func,kycConfig:c.a.shape({type:c.a.string,levels:c.a.arrayOf(c.a.shape(y.a))})},t.a=C},1400:function(e,t,n){var r=n(1401);"string"===typeof r&&(r=[[e.i,r,""]]);var i={hmr:!1};i.transform=void 0;n(942)(r,i);r.locals&&(e.exports=r.locals)},1401:function(e,t,n){t=e.exports=n(48)(!0),t.push([e.i,'.kyc-settings{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:var(--settings__body-bg-color);max-width:var(--settings__body-max-width);margin:var(--settings__body-margin);padding:var(--settings__body-padding)}.kyc-settings__header{background:var(--settings__body-header-bg-color);margin:var(--settings__body-header-margin);position:relative}.kyc-settings__header:before{display:var(--settings__accent-bar-display);content:"";background-image:var(--accent-bar__gradient);min-width:100vw;height:calc(100% + (var(--settings__body-header-margin) * 2) + (var(--settings__body-padding) * 4));position:absolute;z-index:-1;top:calc(((var(--settings__body-padding) * 2) + 2px) * -1);bottom:0;left:calc((var(--side-menu__item-width) + var(--settings__body-header-margin) + var(--settings__body-padding) + 2px) * -1);right:0}.kyc-settings__header-text{font-size:var(--settings__body-header-title-font-size);color:var(--settings__body-header-title-font-color);letter-spacing:var(--settings__body-header-title-letter-spacing);padding-bottom:var(--settings__body-header-title-padding-bottom)}.kyc-settings__levels{overflow:visible;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:var(--settings__kyc-cards-container-margin-l)}.kyc-settings__description{font-size:var(--settings__body-header-sub-title-font-size);color:var(--settings__body-header-sub-title-font-color);letter-spacing:var(--settings__body-header-sub-title-letter-spacing);line-height:var(--settings__body-header-sub-title-line-height);letter-spacing:.5px}.kyc-settings__description:last-of-type{padding-bottom:0}@media only screen and (max-width:48rem){.kyc-settings{width:100%}.kyc-settings__levels{display:unset}.kyc-settings__header:before{left:calc((var(--settings__body-header-margin) + var(--settings__body-padding) + 2px) * -1)}}',"",{version:3,sources:["C:/Users/Monkey/Documents/AlphaPoint/apex-web/src/components/KYCSettings/KYCSettingsComponent.css"],names:[],mappings:"AAAA,cACE,YAAa,AACb,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,0CAA2C,AAC3C,0CAA2C,AAC3C,oCAAqC,AACrC,qCAAuC,CACxC,AAED,sBACE,iDAAkD,AAClD,2CAA4C,AAC5C,iBAAmB,CACpB,AACD,6BACE,4CAA6C,AAC7C,WAAY,AACZ,6CAA8C,AAC9C,gBAAiB,AACjB,oGAGE,AACF,kBAAmB,AACnB,WAAY,AACZ,2DAA4D,AAC5D,SAAU,AACV,2HAKE,AACF,OAAS,CACV,AAED,2BACE,uDAAwD,AACxD,oDAAqD,AACrD,iEAAkE,AAClE,gEAAkE,CACnE,AAED,sBACE,iBAAkB,AAClB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,eAAgB,AACpB,yDAA2D,CAC5D,AAED,2BACE,2DAA4D,AAC5D,wDAAyD,AACzD,qEAAsE,AACtE,+DAAgE,AAChE,mBAAsB,CACvB,AAED,wCACE,gBAAkB,CACnB,AAKD,yCACE,cACE,UAAY,CACb,AAED,sBACE,aAAe,CAChB,AAED,6BACE,2FAKE,CACH,CACF",file:"KYCSettingsComponent.css",sourcesContent:[".kyc-settings {\r\n  height: 100%;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  background: var(--settings__body-bg-color);\r\n  max-width: var(--settings__body-max-width);\r\n  margin: var(--settings__body-margin);\r\n  padding: var(--settings__body-padding);\r\n}\r\n\r\n.kyc-settings__header {\r\n  background: var(--settings__body-header-bg-color);\r\n  margin: var(--settings__body-header-margin);\r\n  position: relative;\r\n}\r\n.kyc-settings__header:before {\r\n  display: var(--settings__accent-bar-display);\r\n  content: '';\r\n  background-image: var(--accent-bar__gradient);\r\n  min-width: 100vw;\r\n  height: calc(\r\n    100% + (var(--settings__body-header-margin) * 2) +\r\n      (var(--settings__body-padding) * 4)\r\n  );\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: calc(((var(--settings__body-padding) * 2) + 2px) * -1);\r\n  bottom: 0;\r\n  left: calc(\r\n    (\r\n        var(--side-menu__item-width) + var(--settings__body-header-margin) +\r\n          var(--settings__body-padding) + 2px\r\n      ) * -1\r\n  );\r\n  right: 0;\r\n}\r\n\r\n.kyc-settings__header-text {\r\n  font-size: var(--settings__body-header-title-font-size);\r\n  color: var(--settings__body-header-title-font-color);\r\n  letter-spacing: var(--settings__body-header-title-letter-spacing);\r\n  padding-bottom: var(--settings__body-header-title-padding-bottom);\r\n}\r\n\r\n.kyc-settings__levels {\r\n  overflow: visible;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  margin-left: var(--settings__kyc-cards-container-margin-l);\r\n}\r\n\r\n.kyc-settings__description {\r\n  font-size: var(--settings__body-header-sub-title-font-size);\r\n  color: var(--settings__body-header-sub-title-font-color);\r\n  letter-spacing: var(--settings__body-header-sub-title-letter-spacing);\r\n  line-height: var(--settings__body-header-sub-title-line-height);\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.kyc-settings__description:last-of-type {\r\n  padding-bottom: 0;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n/* Extra Small Devices, Phones */\r\n@media only screen and (max-width: 48rem) {\r\n  .kyc-settings {\r\n    width: 100%;\r\n  }\r\n\r\n  .kyc-settings__levels {\r\n    display: unset;\r\n  }\r\n\r\n  .kyc-settings__header:before {\r\n    left: calc(\r\n      (\r\n          var(--settings__body-header-margin) + var(--settings__body-padding) +\r\n            2px\r\n        ) * -1\r\n    );\r\n  }\r\n}\r\n"],sourceRoot:""}])},957:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(1399),s=n(52),a=n(38),o=n(15),l=n(358),c=function(e){var t=Object(s.b)(e),n=t.verificationLevel,r=t.levelIncreaseStatus,i=t.kycConfig,a=Object(l.b)(i);return{verificationLevel:n,levelIncreaseStatus:r,kycConfig:i,highlightStyle:i.highlightStyle,userId:e.user.userInfo.UserId,userName:e.user.userInfo.UserName,LevelsComponent:a}},d=function(e){return{getUserConfig:function(t,n){return e(Object(a.k)(t,n))},openKYCSidePane:function(){return e(Object(o.m)())}}},A=Object(r.connect)(c,d)(i.a);t.default=A}});
//# sourceMappingURL=41.05e174f9.chunk.js.map