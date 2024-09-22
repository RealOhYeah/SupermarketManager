"use strict";(self["webpackChunksupermarket_manager"]=self["webpackChunksupermarket_manager"]||[]).push([[817],{6817:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[e._v("首页")]),t("el-breadcrumb-item",[e._v("系统管理")]),t("el-breadcrumb-item",[e._v("菜单管理")])],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left","padding-right":"10px"},attrs:{span:8}},[t("el-input",{attrs:{placeholder:"目录名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1)],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left"},attrs:{span:24}},[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:e.submitSearchForm}},[t("i",{staticClass:"iconfont icon-r-find",staticStyle:{"font-size":"18px"}}),e._v(" 搜索")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"info"},on:{click:e.resetSearchForm}},[t("i",{staticClass:"iconfont icon-r-refresh",staticStyle:{"font-size":"18px"}}),e._v(" 重置 ")])],1)],1),t("br"),t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"medium","row-key":"id",border:"","tree-props":{children:"children"}}},[t("el-table-column",{attrs:{prop:"label",label:"菜单名"}}),t("el-table-column",{attrs:{width:"150",prop:"flag","show-overflow-tooltip":!0,label:"标识符"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-tag",{attrs:{type:"info"}},[e._v(e._s(r.row.flag?r.row.flag:"暂定"))])]}}])}),t("el-table-column",{attrs:{prop:"type",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(r){return[0==r.row.type?t("el-tag",[e._v("目录")]):1==r.row.type?t("el-tag",{attrs:{type:"success"}},[e._v("菜单")]):t("el-tag",{attrs:{type:"warning"}},[e._v("按钮")])]}}])}),t("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("i",{class:e.row.icon})]}}])}),t("el-table-column",{attrs:{prop:"info","show-overflow-tooltip":!0,label:"描述"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-tag",{attrs:{type:"info"}},[e._v(e._s(r.row.info?r.row.info:"无"))])]}}])}),t("el-table-column",{attrs:{prop:"component","show-overflow-tooltip":!0,label:"组件路径"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-tag",{attrs:{type:"info"}},[e._v(e._s(r.row.component?r.row.component:"暂定"))])]}}])}),t("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(r){return[0==r.row.state?t("el-tag",{attrs:{type:"success"}},[e._v("正常")]):t("el-tag",{attrs:{type:"danger"}},[e._v("禁用")])]}}])})],1),t("div",{staticStyle:{margin:"10px 0 15px 0"}},[t("el-pagination",{attrs:{"current-page":e.searchForm.currentPage,"page-sizes":[5,10,20,50],"page-size":e.searchForm.pageSize,layout:"total,sizes, prev, pager, next,jumper",total:e.searchForm.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.searchForm,"currentPage",t)},"update:current-page":function(t){return e.$set(e.searchForm,"currentPage",t)}}})],1)],1)],1)},o=[],a=r(8151);const s="/system/menu";function i(e){return(0,a.tB)(s+"/queryPageByQo",e)}var c={data(){return{tableData:[],searchForm:{total:0,currentPage:1,pageSize:5}}},methods:{init(){i(this.searchForm).then((e=>{e=e.data,200==e.code?(console.log(e.data),this.tableData=e.data.records,this.searchForm.total=e.data.total,this.searchForm.pageSize=e.data.size,this.searchForm.currentPage=e.data.current):(0,a.gk)(e.msg,"error")}))},submitSearchForm(){this.init()},resetSearchForm(){this.searchForm.name=""},handleSizeChange(e){this.searchForm.pageSize=e,this.init(),console.log(`每页 ${e} 条`)},handleCurrentChange(e){this.searchForm.currentPage=e,this.init(),console.log(`当前页: ${e}`)}},mounted(){this.init()}},l=c,u=r(3736),p=(0,u.Z)(l,n,o,!1,null,null,null),d=p.exports},9253:function(e,t,r){r.d(t,{LP:function(){return a},Nx:function(){return i},_5:function(){return c},gy:function(){return s}});var n=r(4858);const o="token";function a(){return n.Z.get(o)}function s(){return n.Z.remove(o)}function i(){let e=n.Z.get("employee");return JSON.parse(e)}function c(e){n.Z.remove(e)}},8151:function(e,t,r){r.d(t,{Ck:function(){return f},gk:function(){return h},ml:function(){return d},tB:function(){return p}});var n=r(9253),o=r(6154),a=r(4720),s=r(4858),i=r(129),c=r.n(i);const l="http://192.168.88.132:9291";function u(){var e=(0,n.LP)();return e&&(0,o.Z)({url:l+"/checkedToken",method:"GET",params:{token:e}}).then((e=>{e=e.data,200==e.code&&(s.Z.set("token",e.data.token,{expires:1/48}),s.Z.set("employee",JSON.stringify(e.data.employee),{expires:1/48}))})).catch((e=>{console.log(e)})),e}function p(e,t){return(0,o.Z)({url:l+e,method:"POST",headers:{token:u()},data:c().stringify(t)}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?h(e,"error"):h(e.response.data,"error")}))}function d(e,t){return(0,o.Z)({url:l+e,method:"POST",headers:{"Content-Type":"application/json",token:u()},data:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?h(e,"error"):h(e.response.data,"error")}))}function f(e,t){return(0,o.Z)({url:l+e,method:"GET",headers:{token:u()},params:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?h(e,"error"):h(e.response.data,"error")}))}function h(e,t){switch(t){case"warning":a.Message.warning(e);break;case"error":a.Message.error({message:e,duration:5e3,showClose:!0});break;case"info":a.Message.info(e);break;default:a.Message.success(e)}}},4858:function(e,t){
/*! js-cookie v3.0.1 | MIT */
function r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var n={read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function o(e,t){function n(n,o,a){if("undefined"!==typeof document){a=r({},t,a),"number"===typeof a.expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var i in a)a[i]&&(s+="; "+i,!0!==a[i]&&(s+="="+a[i].split(";")[0]));return document.cookie=n+"="+e.write(o,n)+s}}function a(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var r=document.cookie?document.cookie.split("; "):[],n={},o=0;o<r.length;o++){var a=r[o].split("="),s=a.slice(1).join("=");try{var i=decodeURIComponent(a[0]);if(n[i]=e.read(s,i),t===i)break}catch(c){}}return t?n[t]:n}}return Object.create({set:n,get:a,remove:function(e,t){n(e,"",r({},t,{expires:-1}))},withAttributes:function(e){return o(this.converter,r({},this.attributes,e))},withConverter:function(e){return o(r({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var a=o(n,{path:"/"});t["Z"]=a}}]);
//# sourceMappingURL=817.79419d5a55d40283.1726988709296.js.map