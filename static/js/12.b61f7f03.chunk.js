webpackJsonp([12],{1303:function(e,r,t){"use strict";var a=t(0),n=t.n(a),o=t(1304),c=t(6),i=t(1308),l=(t.n(i),Object(c.b)("market-data-cards")),s=function(e){var r=e.level1,t=e.instruments,a=e.products,c=t.map(function(e){var t=e.InstrumentId,c=r[t];if(!c)return null;var i=e.Product1,s=e.Product2,A=a.find(function(e){return e.ProductId===i}),d=a.find(function(e){return e.ProductId===s});return n.a.createElement("div",{key:t,className:l("card")+" container-with-shadow"},n.a.createElement(o.a,{product1:A,product2:d,level1Data:c}))});return n.a.createElement("div",{className:l()},n.a.createElement("div",{className:l("row")},c))};r.a=s},1304:function(e,r,t){"use strict";var a=t(0),n=t.n(a),o=t(1),c=t.n(o),i=t(6),l=t(352),s=t(973),A=t(49),d=t(977),m=t(27),u=t(1305),C=t(1306),f=(t.n(C),Object(i.b)("market-data-card")),p=function(e,r){var t=e.product1,a=e.product2,o=e.level1Data,c=o.LastTradedPx,i=o.Rolling24HrVolume,l=o.Rolling24HrPxChange,C=o.SessionHigh,p=o.SessionLow,b=o.BestBid,B=o.BestOffer,_=e.coin,v=Object(u.a)(c,l);return n.a.createElement("div",{className:f()},n.a.createElement("div",{className:f("row")},_?n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{iconFileName:t.iconFileName,size:40}),n.a.createElement("div",{className:f("coins-header-text")},t.ProductFullName+" "+t.ProductSymbol)):n.a.createElement(s.a,{label:t.ProductFullName+" / "+a.ProductFullName,text:t.ProductSymbol+"/"+a.ProductSymbol,customClass:f(),classModifiers:"header"})),n.a.createElement("div",{className:f("row")},n.a.createElement(s.a,{label:r.t("Last Price"),text:Object(m.b)(c,a.ProductSymbol),customClass:f()}),n.a.createElement(s.a,{label:r.t("24-Hour Change"),text:Object(m.b)(v,a.ProductSymbol),customClass:f(),classModifiers:v.gte(0)?"24h-positive":"24h-negative"})),n.a.createElement("div",{className:f("row")},n.a.createElement(s.a,{label:r.t("24-Hour Pct Change"),text:Object(m.c)(l),customClass:f(),classModifiers:l>=0?"24h-positive":"24h-negative"}),n.a.createElement(s.a,{label:r.t("24-Hour Vol."),text:Object(m.b)(i,t.ProductSymbol),customClass:f()})),n.a.createElement("div",{className:f("row")},n.a.createElement(s.a,{label:r.t("24-Hour High"),text:Object(m.b)(C,a.ProductSymbol),customClass:f()}),n.a.createElement(s.a,{label:r.t("24-Hour Low"),text:Object(m.b)(p,a.ProductSymbol),customClass:f()})),n.a.createElement("div",{className:f("row")},n.a.createElement(s.a,{label:r.t("Bid"),text:Object(m.b)(b,a.ProductSymbol),customClass:f(),classModifiers:"bid"}),n.a.createElement(s.a,{label:r.t("Ask"),text:Object(m.b)(B,a.ProductSymbol),customClass:f(),classModifiers:"ask"})),_&&n.a.createElement("div",{className:f("row")},n.a.createElement("div",{className:f("activity"),onClick:function(){}},"View Activity \u2192"),n.a.createElement("div",{className:f("icons")},n.a.createElement("div",{className:f("icon-container"),onClick:function(){}},n.a.createElement(A.a,{name:"buy",customClass:f("icon")})),n.a.createElement("div",{className:f("icon-container"),onClick:function(){}},n.a.createElement(A.a,{name:"sell",customClass:f("icon")})))))};p.propTypes={level1Data:l.b.isRequired,product1:c.a.object.isRequired,product2:c.a.object.isRequired,coin:c.a.bool},p.contextTypes={t:c.a.func.isRequired},r.a=p},1305:function(e,r,t){"use strict";t.d(r,"a",function(){return o});var a=t(39),n=t.n(a),o=function(e,r){return e=new n.a(e),r=new n.a(r/100),e.times(r.div(r.plus(1)))}},1306:function(e,r,t){var a=t(1307);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;t(942)(a,n);a.locals&&(e.exports=a.locals)},1307:function(e,r,t){r=e.exports=t(48)(!0),r.push([e.i,".market-data-card{background:var(--component__bg-color);border-radius:1rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;height:100%}.market-data-card__row{height:6.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding-left:2.5rem;border-bottom:1px solid var(--border__color)}.market-data-card__row:last-child{-webkit-box-shadow:none;box-shadow:none;border-bottom:none}.market-data-card__coins-header-text{font-size:2rem;padding-left:1.8rem;margin-right:auto;color:var(--font__color-primary)}.market-data-card__activity{font-size:1.4rem;color:var(--information__color);cursor:pointer}.market-data-card__icon-container{display:inline-block;border:solid 1px var(--border__color);height:4rem;width:4rem;margin-right:1.6rem;cursor:pointer}.market-data-card__icon{margin-left:10px;margin-top:12px;color:var(--font__color-secondary)}.market-data-card__lwt-container{-ms-flex-direction:column-reverse;flex-direction:column-reverse;width:50%}.market-data-card__lwt-label{padding-top:.2rem;font-size:1.1rem;margin:0;color:var(--font__color-secondary)}.market-data-card__lwt-text{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-size:1.6rem;color:var(--font__color-primary)}.market-data-card__lwt-label--header{color:var(--font__color-secondary)}.market-data-card__lwt-text--header{font-weight:700;font-size:2rem}.market-data-card__lwt-text--bid{color:var(--exchange-colors__buy)}.market-data-card__lwt-text--ask{color:var(--exchange-colors__sell)}.market-data-card__lwt-text--24h-positive{color:var(--exchange-colors__buy)}.market-data-card__lwt-text--24h-negative{color:var(--exchange-colors__sell)}","",{version:3,sources:["C:/Users/Monkey/Documents/AlphaPoint/apex-web/src/components/MarketDataCardsComponent/MarketDataCardComponent.css"],names:[],mappings:"AAAA,kBACE,sCAAuC,AACvC,mBAAoB,AACpB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,yBAA0B,AACtB,6BAA8B,AAClC,WAAa,CACd,AAED,uBACE,cAAe,AACf,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,sBAAuB,AACnB,8BAA+B,AACnC,oBAAqB,AACrB,4CAA8C,CAC/C,AAED,kCACE,wBAAyB,AACjB,gBAAiB,AACzB,kBAAoB,CACrB,AAED,qCACE,eAAgB,AAChB,oBAAqB,AACrB,kBAAmB,AACnB,gCAAkC,CACnC,AAED,4BACE,iBAAkB,AAClB,gCAAiC,AACjC,cAAgB,CACjB,AAED,kCACE,qBAAsB,AACtB,sCAAuC,AACvC,YAAa,AACb,WAAY,AACZ,oBAAqB,AACrB,cAAgB,CACjB,AAED,wBACE,iBAAkB,AAClB,gBAAiB,AACjB,kCAAoC,CACrC,AAED,iCACE,kCAAmC,AAC/B,8BAA+B,AACnC,SAAW,CACZ,AAED,6BACE,kBAAoB,AACpB,iBAAkB,AAClB,SAAU,AACV,kCAAoC,CACrC,AAED,4BACE,mBAAoB,AACpB,gBAAiB,AACjB,0BAA2B,AACxB,uBAAwB,AAC3B,iBAAkB,AAClB,gCAAkC,CACnC,AAED,qCACE,kCAAoC,CACrC,AAED,oCACE,gBAAkB,AAClB,cAAgB,CACjB,AAED,iCACE,iCAAmC,CACpC,AAED,iCACE,kCAAoC,CACrC,AAED,0CACE,iCAAmC,CACpC,AAED,0CACE,kCAAoC,CACrC",file:"MarketDataCardComponent.css",sourcesContent:[".market-data-card {\r\n  background: var(--component__bg-color);\r\n  border-radius: 1rem;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  height: 100%;\r\n}\r\n\r\n.market-data-card__row {\r\n  height: 6.5rem;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  padding-left: 2.5rem;\r\n  border-bottom: 1px solid var(--border__color);\r\n}\r\n\r\n.market-data-card__row:last-child {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  border-bottom: none;\r\n}\r\n\r\n.market-data-card__coins-header-text {\r\n  font-size: 2rem;\r\n  padding-left: 1.8rem;\r\n  margin-right: auto;\r\n  color: var(--font__color-primary);\r\n}\r\n\r\n.market-data-card__activity {\r\n  font-size: 1.4rem;\r\n  color: var(--information__color);\r\n  cursor: pointer;\r\n}\r\n\r\n.market-data-card__icon-container {\r\n  display: inline-block;\r\n  border: solid 1px var(--border__color);\r\n  height: 4rem;\r\n  width: 4rem;\r\n  margin-right: 1.6rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.market-data-card__icon {\r\n  margin-left: 10px;\r\n  margin-top: 12px;\r\n  color: var(--font__color-secondary);\r\n}\r\n\r\n.market-data-card__lwt-container {\r\n  -ms-flex-direction: column-reverse;\r\n      flex-direction: column-reverse;\r\n  width: 50%;\r\n}\r\n\r\n.market-data-card__lwt-label {\r\n  padding-top: 0.2rem;\r\n  font-size: 1.1rem;\r\n  margin: 0;\r\n  color: var(--font__color-secondary);\r\n}\r\n\r\n.market-data-card__lwt-text {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  -o-text-overflow: ellipsis;\r\n     text-overflow: ellipsis;\r\n  font-size: 1.6rem;\r\n  color: var(--font__color-primary);\r\n}\r\n\r\n.market-data-card__lwt-label--header {\r\n  color: var(--font__color-secondary);\r\n}\r\n\r\n.market-data-card__lwt-text--header {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n}\r\n\r\n.market-data-card__lwt-text--bid {\r\n  color: var(--exchange-colors__buy);\r\n}\r\n\r\n.market-data-card__lwt-text--ask {\r\n  color: var(--exchange-colors__sell);\r\n}\r\n\r\n.market-data-card__lwt-text--24h-positive {\r\n  color: var(--exchange-colors__buy);\r\n}\r\n\r\n.market-data-card__lwt-text--24h-negative {\r\n  color: var(--exchange-colors__sell);\r\n}\r\n"],sourceRoot:""}])},1308:function(e,r,t){var a=t(1309);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;t(942)(a,n);a.locals&&(e.exports=a.locals)},1309:function(e,r,t){r=e.exports=t(48)(!0),r.push([e.i,".market-data-cards__row{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;max-width:120rem}.market-data-cards__card{width:35rem;height:32rem;margin:0 2rem 4rem;border-radius:1rem;overflow:hidden}","",{version:3,sources:["C:/Users/Monkey/Documents/AlphaPoint/apex-web/src/components/MarketDataCardsComponent/MarketDataCardsComponent.css"],names:[],mappings:"AAAA,wBACE,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,gBAAkB,CACnB,AAED,yBACE,YAAa,AACb,aAAc,AACd,mBAAyB,AACzB,mBAAoB,AACpB,eAAiB,CAClB",file:"MarketDataCardsComponent.css",sourcesContent:[".market-data-cards__row {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-flow: row wrap;\r\n      flex-flow: row wrap;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  max-width: 120rem;\r\n}\r\n\r\n.market-data-cards__card {\r\n  width: 35rem;\r\n  height: 32rem;\r\n  margin: 0 2rem 4rem 2rem;\r\n  border-radius: 1rem;\r\n  overflow: hidden;\r\n}\r\n"],sourceRoot:""}])},220:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(8),n=t(1303),o=t(976),c=function(e){return{level1:e.level1,instruments:e.instrument.instruments,products:Object(o.d)(e)}};r.default=Object(a.connect)(c)(n.a)},973:function(e,r,t){"use strict";var a=t(0),n=t.n(a),o=t(1),c=t.n(o),i=t(28),l=t.n(i),s=t(201),A=t.n(s),d=t(344),m=t(991),u=(t.n(m),new A.a({name:"ap-label-with-text",outputIsString:!0})),C=function(e){var r=e.label,t=e.text,a=e.customClass,o=e.classModifiers,c=new A.a({name:a,outputIsString:!0});return n.a.createElement("div",{className:l()(u(),c("lwt-container",o))},n.a.createElement("label",{className:l()("ap--label",u("label"),c("lwt-label",o))},r),n.a.createElement("span",{className:l()(u("text"),c("lwt-text",o)),"data-test":Object(d.a)(e,"label")},t))};C.propTypes={label:c.a.string.isRequired,text:c.a.oneOfType([c.a.string,c.a.number,c.a.object]),customClass:c.a.string,classModifiers:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string),c.a.objectOf(c.a.bool)]),dataTest:c.a.string},C.defaultProps={customClass:"custom-label-with-text"},r.a=C},976:function(e,r,t){"use strict";t.d(r,"a",function(){return l}),t.d(r,"d",function(){return A}),t.d(r,"c",function(){return d}),t.d(r,"b",function(){return m}),t.d(r,"e",function(){return u});var a=t(124),n=(t.n(a),t(346)),o=function(e){return e.product.products},c=function(e){return e.position.positions},i=function(e){return e.productManifest.manifest},l=Object(a.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,r,t){return e.fetching||r.fetching||t.fetching}),s=Object(a.createSelector)([o,function(e){return e.product.decimalPlaces},c],function(e,r,t){return e.map(function(e){var a=t[e.ProductId];if(!a)return e;var o=r[e.Product],c=Object(n.a)(a,o);return Object.assign({},c,e)})}),A=Object(a.createSelector)([s,i],function(e,r){return e.map(function(e){var t=r[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,t)})}),d=Object(a.createSelector)([A,function(e,r){return r}],function(e,r){return e.find(function(e){return e.ProductId===r})}),m=Object(a.createSelector)(A,function(e){return e.filter(function(e){return"-"!==e.Amount})}),u=Object(a.createSelector)(A,function(e){return e.filter(function(e){return"-"===e.Amount})})},977:function(e,r,t){"use strict";var a=t(8),n=t(978),o=function(e,r){return{productManifest:e.productManifest,iconFileName:r.iconFileName,size:r.size||48}};r.a=Object(a.connect)(o)(n.a)},978:function(e,r,t){"use strict";var a=t(0),n=t.n(a),o=t(1),c=t.n(o),i=t(23),l=t(6),s=t(979),A=(t.n(s),Object(l.b)("product-icon")),d=function(e){var r=e.productManifest,t=e.iconFileName,a=e.size,o=void 0===a?48:a,c=e.customClass;return r.fetching?null:(null==t&&console.log(t),t&&t.indexOf("DEFAULT_ICON")>0?m(o,t):n.a.createElement("img",{alt:"product icon",height:o+"px",className:c,src:Object(i.a)("/local/product-icons/"+t)}))},m=function(e,r){return n.a.createElement("div",{className:A(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},n.a.createElement("span",null,r.charAt(0)))};d.propTypes={productManifest:c.a.object.isRequired,iconFileName:c.a.string,size:c.a.number},r.a=d},979:function(e,r,t){var a=t(980);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;t(942)(a,n);a.locals&&(e.exports=a.locals)},980:function(e,r,t){r=e.exports=t(48)(!0),r.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}","",{version:3,sources:["C:/Users/Monkey/Documents/AlphaPoint/apex-web/src/components/common/ProductIcon/ProductIcon.css"],names:[],mappings:"AAAA,uBACE,iDAAkD,AAClD,wCAA0C,CAC3C",file:"ProductIcon.css",sourcesContent:[".product-icon--default {\r\n  background: var(--product-icon__default-bg-color);\r\n  color: var(--product-icon__default-color);\r\n}\r\n"],sourceRoot:""}])},991:function(e,r,t){var a=t(943);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!1};n.transform=void 0;t(942)(a,n);a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=12.b61f7f03.chunk.js.map