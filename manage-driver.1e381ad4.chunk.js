(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{kfk2:function(e,t,n){e.exports={ManageDriver:"_22w5x",buttonRight:"vfi-g",form:"_3phex",ManageDriver__RightAction:"_1MA-P",ManageDriver__InputNumber:"_2xTs7"}},tw26:function(e,t,n){"use strict";n.r(t);var r=n("5rEg"),a=n("2fM7"),i=n("kLXV"),o=n("Vl3Y"),s=n("BMrR"),l=n("kPKH"),c=n("2/Rp"),u=n("PArb"),m=n("NJEC"),p=n("bx4M"),d=n("CtXQ"),f=n("EIz2"),h=n("q1tI"),v=n.n(h),b=n("peh1"),g=n("C7K+"),y=n("tsqr"),S=n("fyUT"),E=n("NQij"),I=n("kfk2"),C=n.n(I),V=n("AoUU");function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t,n,r,a,i,o){try{var s=e[i](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function x(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){k(i,r,a,o,s,"next",e)}function s(e){k(i,r,a,o,s,"throw",e)}o(void 0)})}}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F,L=o.a.Item,T=(r.a.Search,a.a.Option),_=(i.a.confirm,i.a.info,function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=O(this,(e=j(t)).call.apply(e,[this].concat(a)))).state={btnVisible:!0,value:void 0,vehicleData:[],selectVehicle:Number},n.getVehicleData=x(regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(V.e)();case 3:t=e.sent,r=t.data||[],n.props.vehicleDataState&&(a=!1,r.map(function(e){e.utmsVehicleId===n.props.vehicleDataState.utmsVehicleId&&(a=!0)}),a||r.push(n.props.vehicleDataState)),n.setState({vehicleData:r}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}},e,this,[[0,9]])})),n.seva=function(){var e=x(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("\u6dfb\u52a0\u53f8\u673a"!==n.props.title){e.next=4;break}n.props.form.getFieldsValue().utmsVehicleId?n.setState({btnVisible:!0,utmsVehicleId:n.props.form.getFieldsValue().utmsVehicleId}):n.setState({btnVisible:!0}),e.next=6;break;case 4:return e.next=6,Object(V.b)({utmsUsersDriversId:n.props.utmsUsersDriversId,utmsVehicleId:n.props.form.getFieldsValue().utmsVehicleId}).then(function(e){"success"===e.result&&(n.props.handleSubmit(),n.setState({btnVisible:!0}))});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.btn=function(){return n.state.btnVisible?v.a.createElement("span",null,v.a.createElement("a",{href:"javascript:;",className:"ml10",onClick:function(e){return n.setState({btnVisible:!1})}},"\u4fee\u6539"),parseInt(n.props.form.getFieldsValue().utmsVehicleId)?v.a.createElement("a",{href:"javascript:;",className:"ml10",onClick:function(){var e=x(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.h)({utmsUsersDriversId:n.props.utmsUsersDriversId,utmsVehicleId:n.props.form.getFieldsValue().utmsVehicleId}).then(function(e){"success"===e.result&&(n.props.form.setFieldsValue({utmsVehicleId:Number}),n.getVehicleData(),n.props.handleSubmit())});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},"\u5220\u9664"):""):v.a.createElement("span",null,v.a.createElement("a",{href:"javascript:;",className:"ml10",onClick:function(){parseInt(n.props.form.getFieldsValue().utmsVehicleId,10)?n.seva():y.a.error("\u8bf7\u9009\u62e9\u7ed1\u5b9a\u8f66\u8f86")}},"\u4fdd\u5b58"),v.a.createElement("a",{href:"javascript:;",className:"ml10",onClick:function(e){n.setState({btnVisible:!0}),n.props.vehicleDataState.utmsVehicleId?n.props.form.setFieldsValue({utmsVehicleId:n.props.vehicleDataState.utmsVehicleId}):n.props.form.setFieldsValue({utmsVehicleId:Number})}},"\u53d6\u6d88"))},n}var n,s,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,h["PureComponent"]),n=t,(s=[{key:"componentDidMount",value:function(){this.getVehicleData()}},{key:"componentWillReceiveProps",value:function(e){e.visible!==this.props.visible&&this.getVehicleData()}},{key:"render",value:function(){var e=this,t=this.props,n=t.visible,s=t.onCancel,l=t.onCreate,c=t.form,u=t.title,m=t.confirmLoading,p=c.getFieldDecorator,d={labelCol:{span:6},wrapperCol:{span:15}};return v.a.createElement(i.a,{centered:!0,maskClosable:!1,title:u,visible:n,onOk:l,confirmLoading:m,onCancel:function(){e.setState({btnVisible:!0}),s()}},v.a.createElement(o.a,{layout:"horizontal"},v.a.createElement(L,w({},d,{label:"\u624b\u673a\u53f7\u7801"}),p("phoneNumber",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801!"},{pattern:E.b,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8054\u7cfb\u65b9\u5f0f"}]})(v.a.createElement(r.a,{disabled:"\u7f16\u8f91\u53f8\u673a"===u,maxLength:20,onKeyDown:function(e){13===e.keyCode&&l()}}))),v.a.createElement(L,w({},d,{label:"\u59d3\u540d"}),p("driverName")(v.a.createElement(r.a,{maxLength:20,onKeyDown:function(e){13===e.keyCode&&l()}}))),v.a.createElement(L,w({},d,{label:"\u9a7e\u7167\u7c7b\u578b"}),p("driverLicenseType")(v.a.createElement(a.a,null,v.a.createElement(T,{value:"A1"},"A1"),v.a.createElement(T,{value:"A2"},"A2"),v.a.createElement(T,{value:"A3"},"A3"),v.a.createElement(T,{value:"A4"},"A4"),v.a.createElement(T,{value:"B1"},"B1"),v.a.createElement(T,{value:"B2"},"B2"),v.a.createElement(T,{value:"B3"},"B3"),v.a.createElement(T,{value:"B4"},"B4"),v.a.createElement(T,{value:"C1"},"C1"),v.a.createElement(T,{value:"C2"},"C2"),v.a.createElement(T,{value:"C3"},"C3"),v.a.createElement(T,{value:"C4"},"C4")))),v.a.createElement(L,w({},d,{label:"\u9a7e\u9f84"}),p("drivingAge")(v.a.createElement(S.a,{min:0,max:100,className:C.a.ManageDriver__InputNumber,onKeyDown:function(e){13===e.keyCode&&l()}}))),v.a.createElement(L,w({},d,{label:"\u5e74\u9f84"}),p("age")(v.a.createElement(S.a,{min:0,max:100,className:C.a.ManageDriver__InputNumber,onKeyDown:function(e){13===e.keyCode&&l()}}))),v.a.createElement(L,w({},d,{label:"\u7ed1\u5b9a\u8f66\u8f86"}),p("utmsVehicleId")(v.a.createElement(a.a,{showSearch:!0,optionFilterProp:"children",disabled:"\u7f16\u8f91\u53f8\u673a"===u&&this.state.btnVisible},this.state.vehicleData.map(function(e){if(e&&e.utmsVehicleId)return v.a.createElement(T,{key:e.utmsVehicleId,value:e.utmsVehicleId},e.plateNumber," - ",e.vehicleLong/1e3,"\u7c73",e.vehicleType)}))),"\u7f16\u8f91\u53f8\u673a"===u?this.btn():"")))}}])&&N(n.prototype,s),l&&N(n,l),t}()),P=o.a.create()(_),M=n("lMyb");function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t,n,r,a,i,o){try{var s=e[i](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function z(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){U(i,r,a,o,s,"next",e)}function s(e){U(i,r,a,o,s,"throw",e)}o(void 0)})}}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return!t||"object"!==A(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.a.Search;var Q=a.a.Option,X=(i.a.confirm,o.a.Item),H=o.a.create({})(F=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=K(this,J(t).call(this,e))).addDriver=function(){n.setState({ModalTitle:"\u6dfb\u52a0\u53f8\u673a",confirmLoading:!1,visible:!0,vehicleDataState:{}})},n.handleOk=function(){var e=n.formRef.props.form;e.validateFields(function(){var t=z(regeneratorRuntime.mark(function t(r,a){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return");case 2:if(a.utmsVehicleId||delete a.utmsVehicleId,n.setState({confirmLoading:!0}),"\u6dfb\u52a0\u53f8\u673a"!==n.state.ModalTitle){t.next=9;break}return t.next=7,Object(V.a)(a).then(function(t){n.setState({visible:!1,confirmLoading:!1},function(){e.resetFields(),n.handleSubmit()})},function(e){n.setState({confirmLoading:!1})});case 7:t.next=11;break;case 9:return t.next=11,Object(V.c)(Object.assign(a,{utmsUsersDriversId:n.state.utmsUsersDriversId})).then(function(t){n.setState({visible:!1,confirmLoading:!1},function(){e.resetFields(),n.handleSubmit()})},function(e){n.setState({confirmLoading:!1})});case 11:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}())},n.handleCancel=function(){n.formRef.props.form.resetFields(),n.setState({visible:!1,utmsUsersDriversId:Number})},n.editDriver=function(e){var t=n.formRef.props.form;e.plateNumber?n.setState({ModalTitle:"\u7f16\u8f91\u53f8\u673a",confirmLoading:!1,visible:!0,utmsUsersDriversId:e.utmsUsersDriversId,vehicleDataState:{plateNumber:e.plateNumber,utmsVehicleId:e.utmsVehicleId,vehicleLong:e.vehicleLong,vehicleType:e.vehicleType}},t.setFieldsValue({phoneNumber:e.phoneNumber,driverName:e.driverName,driverLicenseType:e.driverLicenseType,drivingAge:e.drivingAge,age:e.age,plateNumber:e.plateNumber,utmsVehicleId:e.utmsVehicleId})):n.setState({ModalTitle:"\u7f16\u8f91\u53f8\u673a",confirmLoading:!1,visible:!0,utmsUsersDriversId:e.utmsUsersDriversId,vehicleDataState:{}},t.setFieldsValue({phoneNumber:e.phoneNumber,driverName:e.driverName,driverLicenseType:e.driverLicenseType,drivingAge:e.drivingAge,age:e.age,plateNumber:e.plateNumber,utmsVehicleId:e.utmsVehicleId}))},n.deleteConfirm=function(){var e=z(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.g)({utmsUsersDriversId:t.utmsUsersDriversId}).then(function(e){"success"===e.result&&n.handleSubmit()});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.details=function(e){n.getDetailsFn(e.utmsVehicleId,function(){n.setState({detailsVisible:!0})})},n.detailsCancel=function(){n.setState({detailsVisible:!1,detailData:{}})},n.getDetailsFn=function(){var e=z(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.f)({utmsVehicleId:t}).then(function(e){n.setState({detailData:e.data},r)});case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),n.handleSubmit=function(e){n.props.searchParams.phoneNumber&&n.props.form.setFieldsValue({searchInfo:n.props.searchParams.phoneNumber}),n.props.getAsyncList(Object.assign({skipCount:n.state.skipCount,pageSize:n.state.pageSize},n.props.form.getFieldsValue()))},n.selectChange=function(e,t){var r={};r[e]=t,n.props.form.setFieldsValue(r),n.setState({current:1,skipCount:0},n.handleSubmit)},n.handleReset=function(){n.props.form.resetFields(),n.setState({current:1,skipCount:0},n.handleSubmit)},n.saveFormRef=function(e){n.formRef=e},n.state={current:1,skipCount:0,pageSize:15,ModalTitle:"\u6dfb\u52a0\u53f8\u673a",visible:!1,detailsVisible:!1,confirmLoading:!1,utmsUsersDriversId:Number,detailData:{},vehicleDataState:{}},n}var n,i,v;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,h["PureComponent"]),n=t,(i=[{key:"componentDidMount",value:function(){this.handleSubmit()}},{key:"renderFilterForm",value:function(){var e=this,t=this.props.form,n=t.getFieldDecorator;t.setFieldsValue;return h.createElement(o.a,{className:C.a.form,layout:"inline"},h.createElement(s.a,{type:"flex"},h.createElement(l.a,{span:24},h.createElement(X,{label:"\u8f66\u8f86\u7ed1\u5b9a"},n("bindingStatus",{initialValue:""})(h.createElement(a.a,{style:{width:120},onChange:this.selectChange.bind(this,"bindingStatus")},h.createElement(Q,{value:""},"\u5168\u90e8"),h.createElement(Q,{value:"0"},"\u672a\u7ed1\u5b9a"),h.createElement(Q,{value:"1"},"\u5df2\u7ed1\u5b9a")))),h.createElement(X,{label:"\u6dfb\u52a0\u65b9\u5f0f"},n("addMethod",{initialValue:""})(h.createElement(a.a,{style:{width:120},onChange:this.selectChange.bind(this,"addMethod")},h.createElement(Q,{value:""},"\u5168\u90e8"),h.createElement(Q,{value:"1"},"\u540e\u53f0\u6dfb\u52a0"),h.createElement(Q,{value:"2"},"\u5feb\u6377\u6d3e\u5355")))),h.createElement(X,null,n("searchInfo")(h.createElement(r.a,{style:{width:220},placeholder:"\u53f8\u673a\u59d3\u540d/\u624b\u673a\u53f7/\u7ed1\u5b9a\u8f66\u8f86",onKeyDown:function(t){13===t.keyCode&&e.selectChange("searchInfo",e.props.form.getFieldValue("searchInfo"))}})),h.createElement(c.a,{type:"primary",style:{marginLeft:16,marginRight:12},onClick:this.selectChange.bind("searchInfo")},"\u67e5\u8be2"),h.createElement(c.a,{onClick:this.handleReset},"\u91cd\u7f6e")))))}},{key:"renderTable",value:function(){var e=this,t=this.props,n=t.dataCount,r=t.list,a=t.loading,i={rowKey:"utmsUsersDriversId",columns:[{title:"\u53f8\u673a\u59d3\u540d",dataIndex:"driverName",width:120,render:function(e,t){return e||M.a.emptyRecord}},{title:"\u624b\u673a\u53f7\u7801",dataIndex:"phoneNumber",width:130},{title:"\u8f66\u724c\u53f7",dataIndex:"plateNumber",width:120,render:function(t,n){return n.plateNumber?h.createElement("a",{href:"javascript:;",onClick:e.details.bind(e,n)},n.plateNumber):M.a.emptyRecord}},{title:"\u8f66\u578b\u8f66\u957f",key:"vehicleType",width:120,render:function(e){return h.createElement("span",null,e.vehicleLong?e.vehicleLong/1e3+"\u7c73"+e.vehicleType:M.a.emptyRecord)}},{title:"\u9a7e\u7167\u7c7b\u578b",dataIndex:"driverLicenseType",render:function(e,t){return e||M.a.emptyRecord}},{title:"\u9a7e\u9f84",dataIndex:"drivingAge",render:function(e,t){return e||M.a.emptyRecord}},{title:"\u5e74\u9f84",dataIndex:"age",render:function(e,t){return e||M.a.emptyRecord}},{title:"\u6dfb\u52a0\u65b9\u5f0f",dataIndex:"addMethod",render:function(e){return h.createElement("span",null,1===e?"\u540e\u53f0\u6dfb\u52a0":"\u5feb\u6377\u6d3e\u5355")}},{title:"\u6dfb\u52a0\u65f6\u95f4",dataIndex:"createDate",width:160,render:function(e,t){return e||M.a.emptyRecord}},{title:"\u6700\u540e\u767b\u5f55\u65f6\u95f4",dataIndex:"lastLoginDate",width:160,render:function(e,t){return e||M.a.emptyRecord}},{title:"\u64cd\u4f5c",fixed:"right",width:130,render:function(t,n){return h.createElement("span",null,h.createElement("a",{href:"javascript:;",onClick:e.editDriver.bind(e,n)},"\u7f16\u8f91"),h.createElement(u.a,{type:"vertical"}),h.createElement(m.a,{placement:"bottom",title:"\u662f\u5426\u5220\u9664\u8be5\u53f8\u673a",onConfirm:e.deleteConfirm.bind(e,n),okText:"\u662f",cancelText:"\u5426"},h.createElement("a",{href:"javascript:;"},"\u5220\u9664")))}}],scroll:{x:1300},dataSource:r.toJS(),loading:a,pagination:{current:this.state.current,total:n,pageSize:this.state.pageSize,onChange:function(t,n){e.setState({pageSize:t.pageSize,skipCount:t.skipCount,current:t.current},e.handleSubmit)},onShowSizeChange:function(t){e.setState({pageSize:t.pageSize,skipCount:0,current:1},e.handleSubmit)}}};return h.createElement(f.a,i)}},{key:"render",value:function(){this.props.data;return h.createElement(p.a,{title:"\u53f8\u673a\u7ba1\u7406",className:C.a.ManageDriver},h.createElement(c.a,{type:"primary",className:C.a.buttonRight,onClick:this.addDriver},h.createElement(d.a,{type:"usergroup-add",theme:"outlined"}),"\u6dfb\u52a0\u53f8\u673a"),this.renderFilterForm(),h.createElement("div",null,this.renderTable()),h.createElement(P,{wrappedComponentRef:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleOk,title:this.state.ModalTitle,confirmLoading:this.state.confirmLoading,utmsUsersDriversId:this.state.utmsUsersDriversId,vehicleDataState:this.state.vehicleDataState,handleSubmit:this.handleSubmit}),h.createElement(g.a,{visible:this.state.detailsVisible,detailData:this.state.detailData,onCancel:this.detailsCancel,onCreate:this.detailsCancel}))}}])&&B(n.prototype,i),v&&B(n,v),t}())||F;t.default=function(e){var t=e.routeId;return(0,e.connectModel)(function(e){var n,r=function(e){return e.get(t)};return{mapStateToProps:Object(b.createStructuredSelector)({error:(n=r,Object(b.createSelector)(n,function(e){return e.get("error")})),loading:function(e){return Object(b.createSelector)(e,function(e){return e.get("loading")})}(r),list:function(e){return Object(b.createSelector)(e,function(e){return e.get("data")})}(r),dataCount:function(e){return Object(b.createSelector)(e,function(e){return e.get("dataCount")})}(r)}),mapDispatchToProps:function(t){return{getAsyncList:function(n){return t(e.getAsyncList(n))}}}}})(H)}}}]);
//# sourceMappingURL=manage-driver.1e381ad4.chunk.js.map