(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"8lA8":function(t,e,n){"use strict";n.r(e);var o=n("2/Rp"),r=n("q1tI"),a=n("peh1"),u=n("aaof");function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=s(this,f(e).call(this,t))).state=void 0,n.hanldUsers=function(){n.count=n.count||0;var t=[];[{utmsUsersId:"44",userName:"15119",realName:"\u90ed\u4e95\u9633",mobileNumber:"15968425614",departmentNames:"\u8fd0\u8425\u90e8",postNames:"\u8c03\u5ea6"},{utmsUsersId:"45",userName:"17733",realName:"\u738b\u7ea2",mobileNumber:"15968425614",departmentNames:"\u8fd0\u8425\u90e8",postNames:"\u8c03\u5ea6"}].map(function(e,o){n.count<=o&&t.push(e)}),n.setState({staff:t}),n.count=n.count+1},n.showModal=function(){n.hanldUsers(),n.setState({visible:!0})},n.handleCancel=function(){n.setState({visible:!1})},n.state={visible:!1,staff:[]},n}var n,a,i;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,r["PureComponent"]),n=e,(a=[{key:"render",value:function(){var t=this.state.visible;return r.createElement("div",null,r.createElement(o.a,{onClick:this.showModal},"\u663e\u793a"),r.createElement(u.a,{visible:t,onCancel:this.handleCancel,onOk:this.handleCancel,staff:this.state.staff}))}}])&&c(n.prototype,a),i&&c(n,i),e}();e.default=function(t){t.routeId;return(0,t.connectModel)(function(t){return{mapStateToProps:Object(a.createStructuredSelector)({}),mapDispatchToProps:function(t){return{}}}})(p)}}}]);
//# sourceMappingURL=staff-authorization.dd49ec93.chunk.js.map