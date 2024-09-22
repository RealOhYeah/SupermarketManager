"use strict";(self["webpackChunksupermarket_manager"]=self["webpackChunksupermarket_manager"]||[]).push([[135],{8135:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"employee_index"}},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[e._v("首页")]),t("el-breadcrumb-item",[e._v("会员管理")]),t("el-breadcrumb-item",[e._v("会员信息")])],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left","padding-right":"10px"},attrs:{span:8}},[t("el-input",{attrs:{placeholder:"姓名"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),t("el-col",{staticStyle:{"text-align":"left","padding-right":"10px"},attrs:{span:8}},[t("el-input",{attrs:{placeholder:"手机号码"},model:{value:e.searchForm.phone,callback:function(t){e.$set(e.searchForm,"phone",t)},expression:"searchForm.phone"}})],1),t("el-col",{attrs:{span:8}},[t("el-select",{attrs:{placeholder:"状态",clearable:""},on:{change:function(t){return e.$forceUpdate()}},model:{value:e.searchForm.state,callback:function(t){e.$set(e.searchForm,"state",t)},expression:"searchForm.state"}},[t("el-option",{attrs:{label:"正常",value:"0"}}),t("el-option",{attrs:{label:"删除",value:"1"}})],1)],1)],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left"},attrs:{span:24}},[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:e.submitSearchForm}},[t("i",{staticClass:"iconfont icon-r-find",staticStyle:{"font-size":"18px"}}),e._v(" 搜索")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"success"},on:{click:function(t){e.newVisable=!0}}},[t("i",{staticClass:"iconfont icon-r-add",staticStyle:{"font-size":"18px"}}),e._v(" 录入会员 ")])],1)],1),t("br"),t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"medium"}},[t("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t("el-table-column",{attrs:{prop:"email","show-overflow-tooltip":!0,label:"邮箱"}}),t("el-table-column",{attrs:{prop:"integral",label:"积分"}}),t("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(r){return["0"==r.row.state?t("el-tag",{attrs:{type:"success"}},[e._v("正常")]):t("el-tag",{attrs:{type:"danger"}},[e._v("删除")])]}}])}),t("el-table-column",{attrs:{prop:"info","show-overflow-tooltip":!0,label:"备注"}}),t("el-table-column",{attrs:{label:"操作",width:"420",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(r){return["0"==r.row.state?t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"warning"},on:{click:function(t){return e.exchangeProductsBtn(r.row.id)}}},[t("i",{staticClass:"iconfont icon-r-refresh",staticStyle:{"font-size":"18px"}}),e._v(" 积分兑换 ")]):e._e(),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"success"},on:{click:function(t){return e.editBtn(r.row.id)}}},[t("i",{staticClass:"iconfont icon-r-edit",staticStyle:{"font-size":"18px"}}),e._v(" 修改")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"danger"},on:{click:function(t){return e.delBtn(r.row.id)}}},[t("i",{staticClass:"iconfont icon-r-delete",staticStyle:{"font-size":"18px"}}),e._v(" 删除")])]}}])})],1),t("div",{staticStyle:{margin:"10px 0 15px 0"}},[t("el-pagination",{attrs:{"current-page":e.searchForm.currentPage,"page-sizes":[5,10,20,50],"page-size":e.searchForm.pageSize,layout:"total,sizes, prev, pager, next,jumper",total:e.searchForm.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.searchForm,"currentPage",t)},"update:current-page":function(t){return e.$set(e.searchForm,"currentPage",t)}}})],1)],1),t("el-dialog",{attrs:{title:"录入会员",visible:e.newVisable,"label-width":"200",width:"50%"},on:{"update:visible":function(t){e.newVisable=t}}},[t("el-form",{ref:"newForm",staticClass:"demo-ruleForm",attrs:{model:e.newForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"号码：",prop:"phone"}},[t("el-input",{attrs:{max:"11",placeholder:"请输入手机号"},model:{value:e.newForm.phone,callback:function(t){e.$set(e.newForm,"phone",t)},expression:"newForm.phone"}})],1),t("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.newForm.name,callback:function(t){e.$set(e.newForm,"name",t)},expression:"newForm.name"}})],1),t("el-form-item",{attrs:{label:"邮箱："}},[t("el-input",{attrs:{placeholder:"如：xxx@qq.com"},model:{value:e.newForm.email,callback:function(t){e.$set(e.newForm,"email",t)},expression:"newForm.email"}})],1),t("el-form-item",{attrs:{label:"备注："}},[t("el-input",{attrs:{type:"textarea",placeholder:"如：新会员"},model:{value:e.newForm.info,callback:function(t){e.$set(e.newForm,"info",t)},expression:"newForm.info"}})],1),t("el-form-item",[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:function(t){return e.submitNewForm("newForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"18px"}}),e._v(" 提交")]),t("el-button",{staticStyle:{"font-size":"18px"},on:{click:function(t){return e.saveCancel("newForm")}}},[e._v(" 取消")])],1)],1)],1),t("el-dialog",{attrs:{title:"修改会员",visible:e.editVisable,size:"mini","label-width":"200",width:"50%"},on:{"update:visible":function(t){e.editVisable=t}}},[t("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"号码：",prop:"phone"}},[t("el-input",{attrs:{max:"11",placeholder:"请输入手机号"},model:{value:e.editForm.phone,callback:function(t){e.$set(e.editForm,"phone",t)},expression:"editForm.phone"}})],1),t("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),t("el-form-item",{attrs:{label:"邮箱："}},[t("el-input",{attrs:{placeholder:"如：xxx@qq.com"},model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),t("el-form-item",{attrs:{label:"积分："}},[t("el-input",{attrs:{placeholder:"如：10"},model:{value:e.editForm.integral,callback:function(t){e.$set(e.editForm,"integral",t)},expression:"editForm.integral"}})],1),t("el-form-item",{attrs:{label:"备注："}},[t("el-input",{attrs:{type:"textarea",placeholder:"如：新会员"},model:{value:e.editForm.info,callback:function(t){e.$set(e.editForm,"info",t)},expression:"editForm.info"}})],1),t("el-form-item",{attrs:{label:"状态：",prop:"state"}},[t("el-select",{attrs:{placeholder:"请选择状态",filterable:"",clearable:""},on:{change:function(t){return e.$forceUpdate()}},model:{value:e.editForm.state,callback:function(t){e.$set(e.editForm,"state",t)},expression:"editForm.state"}},[t("el-option",{attrs:{label:"正常",value:"0"}}),t("el-option",{attrs:{label:"删除",value:"1"}})],1)],1),t("el-form-item",[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:function(t){return e.submitEditForm("editForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"18px"}}),e._v(" 提交")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"info"},on:{click:function(t){return e.resetEditForm("editForm")}}},[e._v(" 关闭")])],1)],1)],1),t("el-dialog",{attrs:{title:"兑换积分商品",visible:e.pointProductsVisable,"label-width":"200",width:"40%"},on:{"update:visible":function(t){e.pointProductsVisable=t}}},[t("el-form",{ref:"pointProductsForm",staticClass:"demo-ruleForm",attrs:{model:e.pointProductsForm,rules:e.rules}},[e.pointProductsForm.goodsId?t("el-form-item",[t("img",{attrs:{width:"100px",src:e.BaseApi+e.pointProductsForm.coverUrl,alt:"商品图片"}})]):e._e(),t("el-form-item",{attrs:{label:"积分商品：",prop:"goodsId"}},[t("el-select",{attrs:{placeholder:"请选择积分商品",filterable:"",clearable:""},on:{change:function(t){return e.queryPointProductByGoodsId(e.pointProductsForm.goodsId)}},model:{value:e.pointProductsForm.goodsId,callback:function(t){e.$set(e.pointProductsForm,"goodsId",t)},expression:"pointProductsForm.goodsId"}},e._l(e.options_pointProducts,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e.pointProductsForm.goodsId?t("el-form-item",{attrs:{label:"所需积分："}},[t("el-input",{attrs:{disabled:"",type:"number",placeholder:"所需积分"},model:{value:e.pointProductsForm.integral,callback:function(t){e.$set(e.pointProductsForm,"integral",t)},expression:"pointProductsForm.integral"}})],1):e._e(),t("el-form-item",[e.pointProductsForm.goodsId?t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"warning"},on:{click:function(t){return e.submitPointProductsForm("pointProductsForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"18px"}}),e._v(" 兑换 ")]):e._e(),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"info"},on:{click:e.closePointProductsForm}},[e._v(" 关闭")])],1)],1)],1)],1)},n=[],i=r(8151),a=r(795),s=r(2547),l={data(){return{BaseApi:this.$store.state.BaseApi,newVisable:!1,editVisable:!1,searchForm:{pageSize:5},tableData:[],newForm:{},editForm:{},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"}],state:[{required:!0,message:"状态不能为空",trigger:"blur"}],goodsId:[{required:!0,message:"商品不能为空",trigger:"blur"}]},options_pointProducts:[],pointProductsForm:{goodsId:"",coverUrl:"",integral:""},pointProductsVisable:!1}},methods:{init(){(0,a.mJ)(this.searchForm).then((e=>{e=e.data,200==e.code?(console.log(e.data),this.tableData=e.data.records,this.searchForm.total=e.data.total,this.searchForm.pageSize=e.data.size,this.searchForm.currentPage=e.data.current):(0,i.gk)(e.msg,"error")}))},handleSizeChange(e){this.searchForm.pageSize=e,this.init(),console.log(`每页 ${e} 条`)},handleCurrentChange(e){this.searchForm.currentPage=e,this.init(),console.log(`当前页: ${e}`)},submitSearchForm(){this.init()},saveCancel(e){this.newForm={},this.$refs[e].resetFields(),this.newVisable=!1},submitNewForm(e){this.$refs[e].validate((e=>{e&&(0,a.a1)(this.newForm).then((e=>{e=e.data,200==e.code?((0,i.gk)("操作成功"),this.newForm={},this.newVisable=!1,this.init()):(0,i.gk)(e.msg,"error")}))}))},editBtn(e){(0,a.Eb)({id:e}).then((e=>{e=e.data,200==e.code?(this.editForm={...e.data},this.editVisable=!0):(0,i.gk)(e.msg,"error")}))},submitEditForm(e){this.$refs[e].validate((e=>{e&&(0,a.Vx)(this.editForm).then((e=>{e=e.data,200==e.code?((0,i.gk)("操作成功"),this.editForm={},this.editVisable=!1,this.init()):(0,i.gk)(e.msg,"error")}))}))},resetEditForm(e){this.editForm={},this.$refs[e].resetFields(),this.editVisable=!1},delBtn(e){this.$confirm("确定删除该会员？","警示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,a.GZ)({id:e}).then((e=>{e=e.data,200==e.code?((0,i.gk)("操作成功"),this.searchForm.state="0",this.init()):(0,i.gk)(e.msg,"error")}))})).catch((()=>{this.$message({type:"info",message:"已取消操作"})}))},exchangeProductsBtn(e){this.pointProductsForm={memberId:this.pointProductsForm.memberId,goodsId:"",coverUrl:"",integral:""},(0,s.S0)({memberId:e}).then((t=>{if(t=t.data,200==t.code){if(this.options_pointProducts=t.data,!this.options_pointProducts.length)return void(0,i.gk)("该会员积分数无法兑换任何商品","warning");this.pointProductsForm.memberId=e,this.pointProductsVisable=!0}else(0,i.gk)(t.msg,"error")}))},submitPointProductsForm(e){this.$refs[e].validate((e=>{e&&(0,s.qH)(this.pointProductsForm).then((e=>{e=e.data,200==e.code?((0,i.gk)("兑换成功"),this.pointProductsForm={},this.pointProductsVisable=!1,this.init()):(0,i.gk)(e.msg,"error")}))}))},closePointProductsForm(){this.options_pointProducts=[],this.pointProductsForm={},this.pointProductsVisable=!1},queryPointProductByGoodsId(e){(0,s.$j)({goodsId:e}).then((e=>{if(e=e.data,200==e.code){if(!e.data)return void(this.pointProductsForm={memberId:this.pointProductsForm.memberId,goodsId:"",coverUrl:"",integral:""});this.pointProductsForm.integral=e.data.integral,this.pointProductsForm.coverUrl=e.data.coverUrl}else(0,i.gk)(e.msg,"error"),this.pointProductsForm.goodsId=""}))}},mounted(){this.searchForm.state="0",this.init()}},c=l,u=r(3736),d=(0,u.Z)(c,o,n,!1,null,null,null),m=d.exports},795:function(e,t,r){r.d(t,{Eb:function(){return c},GZ:function(){return a},Qi:function(){return u},Vx:function(){return l},a1:function(){return s},mJ:function(){return i}});var o=r(8151);const n="/member_management/member";function i(e){return(0,o.tB)(n+"/queryPageByQo",e)}function a(e){return(0,o.tB)(n+"/delMember",e)}function s(e){return(0,o.tB)(n+"/save",e)}function l(e){return(0,o.tB)(n+"/update",e)}function c(e){return(0,o.Ck)(n+"/queryMemberById",e)}function u(e){return(0,o.Ck)(n+"/queryMemberByPhone",e)}},2547:function(e,t,r){r.d(t,{$j:function(){return s},L3:function(){return u},Nc:function(){return c},S0:function(){return i},SF:function(){return a},VK:function(){return p},W5:function(){return m},qH:function(){return l},v0:function(){return d}});var o=r(8151);const n="/sale_management/exchange_point_products_records";function i(e){return(0,o.Ck)(n+"/queryPointProductBymemberId",e)}function a(e){return(0,o.Ck)(n+"/queryMemberByGoodsId",e)}function s(e){return(0,o.Ck)(n+"/queryPointProductByGoodsId",e)}function l(e){return(0,o.tB)(n+"/saveExchangePointProductRecords",e)}function c(){return(0,o.Ck)(n+"/queryOptionsMemberPhone",{})}function u(e){return(0,o.tB)(n+"/queryPageByQoExchangePointProducts",e)}function d(e){return(0,o.Ck)(n+"/delExchangePointProducts",e)}function m(){return(0,o.Ck)(n+"/queryOptionsPointProducts",{})}function p(){return(0,o.Ck)(n+"/queryOptionsMember",{})}},9253:function(e,t,r){r.d(t,{LP:function(){return i},Nx:function(){return s},_5:function(){return l},gy:function(){return a}});var o=r(4858);const n="token";function i(){return o.Z.get(n)}function a(){return o.Z.remove(n)}function s(){let e=o.Z.get("employee");return JSON.parse(e)}function l(e){o.Z.remove(e)}},8151:function(e,t,r){r.d(t,{Ck:function(){return p},gk:function(){return f},ml:function(){return m},tB:function(){return d}});var o=r(9253),n=r(6154),i=r(4720),a=r(4858),s=r(129),l=r.n(s);const c="http://192.168.88.132:9291";function u(){var e=(0,o.LP)();return e&&(0,n.Z)({url:c+"/checkedToken",method:"GET",params:{token:e}}).then((e=>{e=e.data,200==e.code&&(a.Z.set("token",e.data.token,{expires:1/48}),a.Z.set("employee",JSON.stringify(e.data.employee),{expires:1/48}))})).catch((e=>{console.log(e)})),e}function d(e,t){return(0,n.Z)({url:c+e,method:"POST",headers:{token:u()},data:l().stringify(t)}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?f(e,"error"):f(e.response.data,"error")}))}function m(e,t){return(0,n.Z)({url:c+e,method:"POST",headers:{"Content-Type":"application/json",token:u()},data:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?f(e,"error"):f(e.response.data,"error")}))}function p(e,t){return(0,n.Z)({url:c+e,method:"GET",headers:{token:u()},params:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?f(e,"error"):f(e.response.data,"error")}))}function f(e,t){switch(t){case"warning":i.Message.warning(e);break;case"error":i.Message.error({message:e,duration:5e3,showClose:!0});break;case"info":i.Message.info(e);break;default:i.Message.success(e)}}},4858:function(e,t){
/*! js-cookie v3.0.1 | MIT */
function r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)e[o]=r[o]}return e}var o={read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function n(e,t){function o(o,n,i){if("undefined"!==typeof document){i=r({},t,i),"number"===typeof i.expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var s in i)i[s]&&(a+="; "+s,!0!==i[s]&&(a+="="+i[s].split(";")[0]));return document.cookie=o+"="+e.write(n,o)+a}}function i(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var r=document.cookie?document.cookie.split("; "):[],o={},n=0;n<r.length;n++){var i=r[n].split("="),a=i.slice(1).join("=");try{var s=decodeURIComponent(i[0]);if(o[s]=e.read(a,s),t===s)break}catch(l){}}return t?o[t]:o}}return Object.create({set:o,get:i,remove:function(e,t){o(e,"",r({},t,{expires:-1}))},withAttributes:function(e){return n(this.converter,r({},this.attributes,e))},withConverter:function(e){return n(r({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var i=n(o,{path:"/"});t["Z"]=i}}]);
//# sourceMappingURL=135.79419d5a55d40283.1726988709296.js.map