(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Bq++":function(e,t,n){e.exports={HomeUpdate:"_3_0Qd",HomeUpdate__li:"_2kmMZ",HomeUpdate__version:"_1C_uf",HomeUpdate__card:"_3X_97"}},PTeN:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n("bx4M"),a=n("CtXQ"),c=n("peh1"),i=n("Mpt7"),u=Object(i.Map)({data:Object(i.List)(),error:!1,loading:!1}),p=n("Bq++"),l=n.n(p);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,i=new Array(c),u=0;u<c;u++)i[u]=arguments[u];return(n=d(this,(e=m(t)).call.apply(e,[this].concat(i)))).conditions={current:1,skipCount:0,pageSize:10},n.renderDescription=function(e){var t=[];return(e.match(/\n/g)?e.split(/\n/g):[e]).map(function(e,n){var o="description"+n;t.push(r.createElement("p",{key:o},e))}),t},n.renderVersion=function(){var e=n.props.data.toJS().reduce(function(e,t,a){return e.push(r.createElement("li",{className:l.a.HomeUpdate__li,key:"".concat(t.utmsVersionManageId,"__").concat(a)},r.createElement("div",{className:l.a.HomeUpdate__version},r.createElement("p",{style:{fontSize:"16px"}},t.versionNo?0===t.versionNo.toUpperCase().indexOf("V")?t.versionNo.toUpperCase():"V".concat(t.versionNo):""),r.createElement("p",{style:{color:"#9BA0AA"}},t.gmtCreate?t.gmtCreate.substring(0,10):"")),r.createElement(o.a,{className:l.a.HomeUpdate__card,bodyStyle:{paddingBottom:"50px",position:"relative",top:"-25px"}},r.createElement("h3",null,t.program),n.renderDescription(t.description)))),e},[]);return e.length>0?r.createElement("ul",{style:{paddingTop:"15px"}},e):r.createElement(o.a,{style:{border:"none",textAlign:"center",fontSize:"14px",color:"rgba(0, 0, 0, 0.45)"}},r.createElement(a.a,{type:"frown",theme:"outlined",style:{marginRight:"5px"}}),"\u6682\u65e0\u66f4\u65b0\u8bb0\u5f55")},n.onScroll=function(e){var t=n.props.hasmoredata,r=e.target.clientHeight,o=e.target.scrollHeight;r+e.target.scrollTop>=o&&(n.conditions.skipCount=n.conditions.current*n.conditions.pageSize,n.conditions.current+=1,t&&n.props.getAsyncData(n.conditions))},n}var n,c,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["PureComponent"]),n=t,(c=[{key:"componentDidMount",value:function(){this.props.getAsyncData(this.conditions)}},{key:"render",value:function(){return r.createElement(o.a,{title:"\u8054\u8fd0\u914d\u9001\u7ba1\u7406\u7cfb\u7edf\u66f4\u65b0\u8bb0\u5f55",className:l.a.HomeUpdate,onScroll:this.onScroll,bodyStyle:{marginTop:"15px"}},this.renderVersion())}}])&&f(n.prototype,c),i&&f(n,i),t}();t.default=function(e){var t=e.routeId;return(0,e.connectModel)(function(e){var n,r=function(e){return e.get(t)};return{mapStateToProps:Object(c.createStructuredSelector)({error:(n=r,Object(c.createSelector)(n,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:u).get("error")})),loading:function(e){return Object(c.createSelector)(e,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:u).get("loading")})}(r),data:function(e){return Object(c.createSelector)(e,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:u).get("data")})}(r),hasmoredata:function(e){return Object(c.createSelector)(e,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:u).get("hasmoredata")})}(r)}),mapDispatchToProps:function(t){return{getAsyncData:function(n){return t(e.getAsyncData(n))}}}}})(g)}}}]);
//# sourceMappingURL=home-update.399a30fe.chunk.js.map