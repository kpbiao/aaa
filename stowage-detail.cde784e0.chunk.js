(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0gnZ":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("/MKj"),i=r("ANjH"),l=r("peh1"),c=r("bx4M"),u=r("wCAj"),s=r("ZTPi"),p=r("kPKH"),m={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{xs:24,sm:12,md:6}},d=r("17x9"),f=r.n(d),y=r("1HkO"),h=r.n(y);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var v=function(e){var t=e.term,r=e.column,n=e.children,o=b(e,["term","column","children"]);return a.a.createElement(p.a,g({},m[r],o),t&&a.a.createElement("div",{className:h.a.term},t),null!==n&&void 0!==n&&a.a.createElement("div",{className:h.a.detail},n))};v.defaultProps={term:""},v.propTypes={term:f.a.node};var w=v,O=r("BMrR"),k=r("TSYQ"),E=r.n(k);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var S=function(e){var t,r=e.className,n=e.title,o=e.col,i=void 0===o?3:o,l=e.layout,c=void 0===l?"horizontal":l,u=e.gutter,s=void 0===u?32:u,p=e.children,m=e.size,d=j(e,["className","title","col","layout","gutter","children","size"]),f=E()(h.a.descriptionList,h.a[c],r,(P(t={},h.a.small,"small"===m),P(t,h.a.large,"large"===m),t)),y=i>4?4:i;return a.a.createElement("div",x({className:f},d),n?a.a.createElement("div",{className:h.a.title},n):null,a.a.createElement(O.a,{gutter:s},a.a.Children.map(p,function(e){return e?a.a.cloneElement(e,{column:y}):e})))};S.Description=w;var N=S,M=r("3o1r"),I=r("lMyb"),B=r("n5Lo"),_=r.n(B);function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t){return!t||"object"!==A(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=N.Description,z=s.a.TabPane,G=I.a.emptyRecord,H=[{title:"\u8ba2\u5355\u53f7",dataIndex:"orderNumber",key:"orderNumber"},{title:"\u8be6\u7ec6\u5730\u5740",dataIndex:"address",key:"address"},{title:"\u7701\u5e02\u533a",dataIndex:"province",key:"province"},{title:"\u4f53\u79ef(\u65b9)",dataIndex:"goodsVolume",key:"goodsVolume"},{title:"\u91cd\u91cf(\u5428)",dataIndex:"goodsWeight",key:"goodsWeight"},{title:"\u4ef6\u6570(\u4ef6)",dataIndex:"goodsNumber",key:"goodsNumber"},{title:"\u6536\u8d27\u4eba",dataIndex:"contact",key:"contact"},{title:"\u8054\u7cfb\u7535\u8bdd",dataIndex:"phone",key:"phone"}],J=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=L(this,(e=T(t)).call.apply(e,[this].concat(a)))).state={locationNum:0,notLocationNum:0},r.mapElm=void 0,r.map=void 0,r.switchTabHandle=function(e){"2"!==e||r.map||setTimeout(function(){r.map=new BMap.Map(r.mapElm),r.map.centerAndZoom(new BMap.Point(116.404,39.915),11),r.map.enableScrollWheelZoom(!0),r.drawPoint()},1e3)},r}var r,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,n["PureComponent"]),r=t,(a=[{key:"componentDidMount",value:function(){var e=this.props.searchParams;e&&e.partGroupId&&this.props.getAsyncData({partGroupId:parseInt(e.partGroupId),coordinateType:"BD09"})}},{key:"render",value:function(){var e=this.props.data,t=e?e.toJS():{};return n.createElement("div",{className:_.a.StowageDetail},n.createElement(c.a,{style:{marginBottom:"12px"},key:"s-1"},n.createElement(N,{size:"large",title:"\u57fa\u672c\u4fe1\u606f"},n.createElement(R,{term:"\u914d\u8f7d\u5355\u540d\u79f0",key:"name"},t.name||G),n.createElement(R,{term:"\u914d\u8f7dID",key:"utmsPartGroupId"},t.utmsPartGroupId||G),n.createElement(R,{term:"\u4ed3\u5e93\u540d\u79f0",key:"warehouseName"},t.warehouseName||G),n.createElement(R,{term:"\u8ba2\u5355\u6570",key:"orderCount"},t.orderCount||G),n.createElement(R,{term:"\u4f53\u79ef(\u65b9)",key:"volume"},t.volume||G),n.createElement(R,{term:"\u91cd\u91cf(\u5343\u514b)",key:"weight"},t.weight||G),n.createElement(R,{term:"\u4ef6\u6570(\u4ef6)",key:"quantity"},t.quantity||G),n.createElement(R,{term:"\u5236\u5355\u4eba",key:"realName"},t.realName||G),n.createElement(R,{term:"\u751f\u6210\u65f6\u95f4",key:"gmtCreate"},t.gmtCreate||G))),n.createElement(c.a,{key:"s-2"},n.createElement(N,{size:"large",title:this.tabTitle(),style:{margin:"0 16px 32px"}},n.createElement(s.a,{onChange:this.switchTabHandle},n.createElement(z,{key:"1",tab:"\u5217\u8868\u5c55\u793a"},this.getListRender()),n.createElement(z,{key:"2",tab:"\u5730\u56fe\u5c55\u793a"},this.getMapRander())))))}},{key:"tabTitle",value:function(){var e=this.props.data;return n.createElement(n.Fragment,null,"\u8ba2\u5355\u660e\u7ec6",n.createElement(M.a,{btnType:"primary",className:"pull-right",url:"/ehuodiGateway/utmsTrade/utmsPartOrder/exportPartOrderList",params:{partGroupId:e.get("utmsPartGroupId")}},"\u5bfc\u51fa"))}},{key:"drawPoint",value:function(){var e=this,t=this.props.data.toJS(),r=[],n=new BMap.Icon("https://image.tf56.com/dfs/group1/M00/34/22/CiFBClmyXUOAEh-OAAARqg9D7FA643.png",new BMap.Size(20,20),{imageSize:{width:20,height:20}});if(t.partOrders){var a=0,o=t.partOrders.length;t.partOrders.map(function(t,o){if(t.longitude){++a;var i=new BMap.Point(t.longitude,t.latitude),l=new BMap.Marker(i,{icon:n}),c=new BMap.Label("".concat(o+1));c.setStyle({color:"#ffffff",backgroundColor:"rgb(47, 138, 241)",border:"1px solid rgb(175, 220, 240)",width:"20px",height:"20px",lineHeight:"18px",textAlign:"center",borderRadius:"100%"}),l.setLabel(c),r.push(i),e.map.addOverlay(l)}}),o-=a;var i=new BMap.Polyline(r,{strokeColor:"blue",strokeWeight:2,strokeOpacity:.5});if(t.warehouseLongitude&&t.warehouseLatitude){var l=new BMap.Point(t.warehouseLongitude,t.warehouseLatitude);r.push(l);var c=new BMap.Marker(l,{icon:new BMap.Icon("https://image.tf56.com/dfs/group1/M00/69/94/CiFBCVu8SROAdNC_AAAD_T3ZZRs656.png",new BMap.Size(20,30),{imageSize:{width:20,height:30}})});this.map.addOverlay(c)}this.map.addOverlay(i),this.map.setViewport(r),this.setState({locationNum:a,notLocationNum:o})}}},{key:"getListRender",value:function(){var e=this.props.data.toJS(),t=e?e.partOrders:[];return n.createElement(u.a,{dataSource:t,columns:H,pagination:!1,rowKey:"orderNumber"})}},{key:"getMapRander",value:function(){var e=this,t=this.state,r=t.locationNum,a=t.notLocationNum;return n.createElement("div",{className:_.a.MapWrap},n.createElement("div",{ref:function(t){return e.mapElm=t},style:{height:"400px"}}),n.createElement("p",{className:_.a.locationed},"\u5df2\u5b9a\u4f4d ",r),n.createElement("p",{className:_.a.location},"\u672a\u5b9a\u4f4d ",a))}}])&&C(r.prototype,a),o&&C(r,o),t}();t.default=function(e){var t=e.routeId,r=e.actions,n=function(e){return e.get(t)},a=Object(l.createStructuredSelector)({data:function(e){return Object(l.createSelector)(e,function(e){return e.get("data")})}(n),error:function(e){return Object(l.createSelector)(e,function(e){return e.get("error")})}(n),loading:function(e){return Object(l.createSelector)(e,function(e){return e.get("loading")})}(n)}),c=Object(o.connect)(a,function(e){return{getAsyncData:function(t){return e(r.getAsyncData(t))}}});return Object(i.c)(c)(J)}},"1HkO":function(e,t,r){e.exports={descriptionList:"_1BhCG",title:"_382YV",term:"_3nKyJ",detail:"zFQbP",small:"_1MhPE",large:"_1T4lQ",vertical:"_3ixOG"}},n5Lo:function(e,t,r){e.exports={StowageDetail:"_3jyot",MapWrap:"_1FnqJ",locationed:"_2rax9",location:"_1qBwB"}}}]);
//# sourceMappingURL=stowage-detail.cde784e0.chunk.js.map