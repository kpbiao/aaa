(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3HTn":function(e,t,n){"use strict";n.r(t);var r=n("2/Rp"),a=n("bx4M"),o=n("PArb"),i=n("Ol7k"),c=n("tsqr"),u=n("kLXV"),l=n("NJEC"),s=n("wCAj"),p=n("EIz2"),d=n("f9kf"),m=n("Mpt7"),f=n("q1tI"),y=n("/MKj"),g=n("ANjH"),h=n("peh1"),b=n("lMyb"),v=n("kPKH"),O=n("Vl3Y"),C=n("5rEg"),E=n("SGqP"),S=n("NQij");function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=O.a.Item,P={labelCol:{span:6},wrapperCol:{span:16}},I=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=M(this,(e=x(t)).call.apply(e,[this].concat(a)))).handleSubmit=function(){var e=n.props,t=e.form,r=e.onConfirm,a=t.getFieldValue;t.validateFields(function(e,t){if(!e){var n={street:""};Object.keys(t).map(function(e){"street"===e?n.street=t[e]:n[e]=t[e]}),r(Object.assign(a("key")?{utmsOrganizationId:a("key")}:{},n))}})},n.handleClose=function(){n.props.onClose()},n.onAddressSelected=function(e){(0,n.props.form.setFieldsValue)({street:e?e.address:"",city:e?e.city:"",province:e?e.province:"",region:e?e.region:""})},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,f["PureComponent"]),n=t,(r=[{key:"renderEditor",value:function(){var e=this.props,t=e.form,n=(e.formValue,t.getFieldDecorator);return f.createElement(O.a,null,f.createElement(N,j({},P,{label:"\u516c\u53f8\u540d\u79f0",required:!0}),n("organizationName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0"}]})(f.createElement(C.a,{placeholder:"\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0",maxLength:60}))),f.createElement(N,j({},P,{label:"\u8054\u7cfb\u4eba",required:!0}),f.createElement(v.a,{span:11},f.createElement(N,{required:!0},n("managerName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"}]})(f.createElement(C.a,{placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d",maxLength:20})))),f.createElement(v.a,{span:2},f.createElement("span",{style:{display:"inline-block",width:"100%",textAlign:"center"}},"-")),f.createElement(v.a,{span:11},f.createElement(N,{required:!0},n("managerMobileNumber",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8054\u7cfb\u65b9\u5f0f"},{pattern:S.a,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8054\u7cfb\u65b9\u5f0f!"}]})(f.createElement(C.a,{placeholder:"\u8bf7\u8f93\u5165\u8054\u7cfb\u65b9\u5f0f",maxLength:13}))))),f.createElement(O.a.Item,j({},P,{label:"\u516c\u53f8\u5730\u5740"}),n("street",{initialValue:"",rules:[{max:200,message:"\u6700\u591a\u8f93\u5165200\u4e2a\u5b57"}]})(f.createElement(E.a,{placeholder:"\u8bf7\u8f93\u5165\u516c\u53f8\u5730\u5740",onSelected:this.onAddressSelected}))),f.createElement(N,j({},P,{label:"\u533a\u57df",style:{display:"none"}}),n("region")(f.createElement(C.a,{type:"hidden"}))),f.createElement(N,j({},P,{label:"\u57ce\u5e02",style:{display:"none"}}),n("city")(f.createElement(C.a,{type:"hidden"}))),f.createElement(N,j({},P,{label:"\u7701\u4efd",style:{display:"none"}}),n("province")(f.createElement(C.a,{type:"hidden"}))))}},{key:"render",value:function(){var e=this.props,t=e.visible,n={title:e.formValue.get("key")?"\u4fee\u6539\u516c\u53f8":"\u65b0\u589e\u516c\u53f8",visible:t,centered:!0,maskClosable:!1,onOk:this.handleSubmit,onCancel:this.handleClose};return f.createElement(u.a,n,this.renderEditor())}}])&&z(n.prototype,r),a&&z(n,a),t}(),_=O.a.create({mapPropsToFields:function(e){var t={},n=e.formValue.toObject();return Object.keys(n).map(function(e){if("contacts"===e){var r=n[e].split("/");t.managerName=O.a.createFormField({value:r[0]}),t.managerMobileNumber=O.a.createFormField({value:r[1]})}else t[e]=O.a.createFormField({value:n[e]})}),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){k(e,t,n[t])})}return e}({},t)}})(I),R=n("Qyje"),F=n.n(R),V=n("sy1d"),q=function(e){return Object(V.a)({method:"post",url:"/ehuodiGateway/utmsCore/utmsOrganizationcs/updateUtmsOrganization",data:e},{useMock:!1,globalErrorMsg:!0}).then(function(e){return e})},A=function(e){return Object(V.a)({method:"post",url:"/ehuodiGateway/utmsCore/utmsOrganizationcs/createUtmsOrganization",data:e},{useMock:!1,globalErrorMsg:!0}).then(function(e){return e})},L=function(e){return Object(V.a)({method:"post",url:"/ehuodiGateway/utmsCore/utmsOrganizationcs/deleteUtmsOrganization",data:F.a.stringify(e)},{useMock:!1}).then(function(e){return e},function(e){return e})},D=function(e){return Object(V.a)({method:"post",url:"/ehuodiGateway/utmsCore/utmsOrganizationcs/updateUtmsOrganizationOrder",data:F.a.stringify(e)},{useMock:!1,globalErrorMsg:!0}).then(function(e){return e})},B=(n("VEy+"),n("nArD")),G=n.n(B);function H(e){return(H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function J(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){U(o,r,a,i,c,"next",e)}function c(e){U(o,r,a,i,c,"throw",e)}i(void 0)})}}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){return!t||"object"!==H(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W=i.a.Content,Z=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Q(this,X(t).call(this,e))).paginationChange=function(e){var t=e.skipCount,r=e.pageSize,a=e.current;n.setState({skipCount:t,pageSize:r,current:a}),n.doSearch(e)},n.doSearch=function(e){n.props.doSearch(Object.assign({pageSize:n.state.pageSize,skipCount:n.state.skipCount},e))},n.handleSelect=function(e){n.setState({hideBranchTable:"\u5206\u516c\u53f8"===e.get("organizationType"),current:1}),n.props.selectCompany(e),"\u603b\u516c\u53f8"===e.get("organizationType")&&n.doSearch({organizationCode:e.get("organizationCode"),skipCount:0})},n.handleOpenModal=function(e){n.setState({openModal:!0,pickCompany:e?Object(m.fromJS)(e):Object(m.Map)()})},n.handleCloseModal=function(){n.setState({openModal:!1})},n.handleEditCompany=function(){var e=J(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.utmsOrganizationId){e.next=7;break}return e.next=3,q(t);case 3:"success"===e.sent.result?(c.a.success("\u4fee\u6539\u516c\u53f8\u6210\u529f"),n.setState({openModal:!1}),n.doSearch(),n.props.getCompanyTree()):c.a.error("\u4fee\u6539\u516c\u53f8\u5931\u8d25"),e.next=11;break;case 7:return e.next=9,A(t);case 9:"success"===e.sent.result?(c.a.success("\u65b0\u589e\u516c\u53f8\u6210\u529f"),n.setState({openModal:!1}),n.doSearch(),n.props.getCompanyTree()):c.a.error("\u65b0\u589e\u516c\u53f8\u5931\u8d25");case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.handleDeleteCompany=function(){var e=J(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({utmsOrganizationId:t});case 2:"success"===(r=e.sent).result?(c.a.success("\u5220\u9664\u516c\u53f8\u6210\u529f"),n.setState({openModal:!1,hideBranchTable:!1}),n.doSearch(),n.props.getCompanyTree()):"UTMS001020200100"===r.code?u.a.error({title:"\u65e0\u6cd5\u5220\u9664",content:r.msg}):c.a.error("\u5220\u9664\u516c\u53f8\u5931\u8d25");case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.renderHeaderTable=function(){var e=n.props,t=e.selectedCompany,r=(e.doSearch,e.loading),i={title:t.get("organizationName"),bordered:!1},c={columns:[{title:"\u516c\u53f8\u540d\u79f0",dataIndex:"organizationName",key:"organizationName",className:G.a.nowrap,render:function(e,t){return e||b.a.emptyRecord}},{title:"\u516c\u53f8\u8054\u7cfb\u4eba",dataIndex:"contacts",key:"contacts",className:G.a.nowrap,render:function(e,t){return e||b.a.emptyRecord}},{title:"\u516c\u53f8\u5730\u5740",dataIndex:"address",key:"address",render:function(e,t){return e||b.a.emptyRecord}},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",render:function(e,t){return f.createElement("span",null,f.createElement("a",{href:"javascript:;",onClick:function(){return n.handleOpenModal(t)}},"\u4fee\u6539"),"\u5206\u516c\u53f8"===t.organizationType?f.createElement("span",null,f.createElement(o.a,{type:"vertical"}),f.createElement(l.a,{title:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8be5\u5206\u516c\u53f8\u5417\uff1f",onConfirm:function(){return n.handleDeleteCompany(t.key)}},f.createElement("a",{href:"javascript:;"},"\u5220\u9664"))):"")}}],dataSource:[{organizationName:t.get("organizationName"),contacts:t.get("managerName")+"/"+t.get("managerMobileNumber"),address:(t.get("province")?t.get("province"):"")+(t.get("city")?t.get("city"):"")+(t.get("region")?t.get("region"):"")+(t.get("street")?t.get("street"):""),key:t.get("utmsOrganizationId"),region:t.get("region"),city:t.get("city"),province:t.get("province"),organizationType:t.get("organizationType"),street:t.get("street")}],loading:r,pagination:!1,rowKey:"key"};return f.createElement(a.a,i,f.createElement(s.a,c))},n.renderBranchTable=function(){if(!n.state.hideBranchTable){var e=n.props,t=e.dataCount,i=e.companyList,c=e.loading,u=n.state.current,s={columns:[{title:"\u516c\u53f8\u540d\u79f0",dataIndex:"organizationName",key:"organizationName",className:G.a.nowrap,render:function(e,t){return e||b.a.emptyRecord}},{title:"\u516c\u53f8\u8054\u7cfb\u4eba",dataIndex:"contacts",key:"contacts",className:G.a.nowrap,render:function(e,t){return e||b.a.emptyRecord}},{title:"\u516c\u53f8\u5730\u5740",dataIndex:"address",key:"address",render:function(e,t){return e||b.a.emptyRecord}},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",width:"105px",render:function(e,t){return f.createElement("span",null,f.createElement("a",{href:"javascript:;",onClick:function(){return n.handleOpenModal(t)}},"\u4fee\u6539"),f.createElement(o.a,{type:"vertical"}),f.createElement(l.a,{title:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8be5\u516c\u53f8\u5417",onConfirm:function(){return n.handleDeleteCompany(t.key)}},f.createElement("a",{href:"javascript:;"},"\u5220\u9664")))}}],dataSource:i?i.map(function(e){return{key:e.get("utmsOrganizationId"),organizationName:e.get("organizationName"),contacts:e.get("managerName")+"/"+e.get("managerMobileNumber"),address:(e.get("province")?e.get("province"):"")+(e.get("city")?e.get("city"):"")+(e.get("region")?e.get("region"):"")+(e.get("street")?e.get("street"):""),region:e.get("region"),city:e.get("city"),province:e.get("province"),street:e.get("street")}}).toArray():[],loading:c,pagination:{current:u,total:t,onChange:n.paginationChange,onShowSizeChange:n.paginationChange},rowKey:"key"},d={title:"\u4e0b\u5c5e\u5206\u516c\u53f8",bordered:!1,extra:f.createElement(r.a,{type:"primary",onClick:function(){return n.handleOpenModal()}},"\u65b0\u589e\u5206\u516c\u53f8")};return f.createElement(a.a,d,f.createElement(p.a,s))}},n.moveNode=function(){var e=J(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({utmsOrganizationIds:t});case 2:"success"===e.sent.result&&(n.props.getCompanyTree(),n.doSearch());case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.state={hideBranchTable:!1,openModal:!1,pickCompany:Object(m.Map)(),skipCount:0,pageSize:15,current:1},n}var n,y,g;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,f["PureComponent"]),n=t,(y=[{key:"componentDidMount",value:function(){this.props.getCompanyTree(),this.doSearch()}},{key:"renderContent",value:function(){return f.createElement(a.a,{className:"companyCard"},this.renderHeaderTable(),this.renderBranchTable())}},{key:"render",value:function(){var e=this.props.companyTree,t=this.state.pickCompany;return f.createElement(f.Fragment,null,f.createElement(i.a,null,f.createElement(d.a,{companyTree:e,handleSelect:this.handleSelect,moveNode:this.moveNode}),f.createElement(i.a,{className:"companyLayout"},f.createElement(W,null,this.renderContent()))),f.createElement(_,{formValue:t,visible:this.state.openModal,onConfirm:this.handleEditCompany,onClose:this.handleCloseModal}))}}])&&K(n.prototype,y),g&&K(n,g),t}();t.default=function(e){var t=e.routeId,n=e.actions,r=function(e){return e.get(t)},a=Object(h.createStructuredSelector)({error:function(e){return Object(h.createSelector)(e,function(e){return e.get("error")})}(r),loading:function(e){return Object(h.createSelector)(e,function(e){return e.get("loading")})}(r),companyTree:function(e){return Object(h.createSelector)(e,function(e){return e.get("companyTree")})}(r),companyList:function(e){return Object(h.createSelector)(e,function(e){return e.get("companyList")})}(r),dataCount:function(e){return Object(h.createSelector)(e,function(e){return e.get("dataCount")})}(r),pageIndex:function(e){return Object(h.createSelector)(e,function(e){return e.get("pageIndex")})}(r),selectedCompany:function(e){return Object(h.createSelector)(e,function(e){return e.get("selectedCompany")})}(r)}),o=Object(y.connect)(a,function(e){return{getCompanyTree:function(){return e(n.getCompanyTree())},doSearch:function(t){return e(n.getList(t))},selectCompany:function(t){return e(n.selectCompany(t))},addCompany:function(t){return e(n.addCompany(t))},updateCompany:function(t){return e(n.updateCompany(t))}}});return Object(g.c)(o)(Z)}},"VEy+":function(e,t,n){},nArD:function(e,t,n){e.exports={contentBorder:"_7lG3H",nowrap:"_35owr"}}}]);
//# sourceMappingURL=company-management.1da4c045.chunk.js.map