"use strict";(self["webpackChunksupermarket_manager"]=self["webpackChunksupermarket_manager"]||[]).push([[853],{853:function(e,t,o){o.r(t),o.d(t,{default:function(){return v}});var r=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[e._v("首页")]),t("el-breadcrumb-item",[e._v("商品管理")]),t("el-breadcrumb-item",[e._v("积分商品")])],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left","padding-right":"10px"},attrs:{span:8}},[t("el-input",{attrs:{placeholder:"商品名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1)],1),t("br"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left","padding-right":"10px"},attrs:{span:24}},[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:e.subSearchForm}},[t("i",{staticClass:"iconfont icon-r-find",staticStyle:{"font-size":"18px"}}),e._v(" 搜索")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"success"},on:{click:e.newBtn}},[t("i",{staticClass:"iconfont icon-r-add",staticStyle:{"font-size":"18px"}}),e._v(" 创建积分商品")])],1)],1),t("br"),t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"medium"}},[t("el-table-column",{attrs:{type:"index",width:"200",label:"序号"}}),t("el-table-column",{attrs:{prop:"coverUrl","show-overflow-tooltip":!0,label:"封面"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("img",{attrs:{height:"60px",src:e.BaseApi+o.row.coverUrl}})]}}])}),t("el-table-column",{attrs:{prop:"goodsName","show-overflow-tooltip":!0,label:"商品名"}}),t("el-table-column",{attrs:{prop:"integral","show-overflow-tooltip":!0,label:"积分"}}),t("el-table-column",{attrs:{prop:"updateby","show-overflow-tooltip":!0,label:"操作者"}}),t("el-table-column",{attrs:{width:"240",fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"success"},on:{click:function(t){return e.editBtn(o.row.goodsId)}}},[t("i",{staticClass:"iconfont icon-r-edit",staticStyle:{"font-size":"18px"}}),e._v("修改")]),t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"danger"},on:{click:function(t){return e.delBtn(o.row.goodsId)}}},[t("i",{staticClass:"iconfont icon-r-delete",staticStyle:{"font-size":"18px"}}),e._v("删除")])]}}])})],1),t("div",{staticStyle:{margin:"10px 0 15px 0"}},[t("el-pagination",{attrs:{"current-page":e.searchForm.currentPage,"page-sizes":[5,10,20,50],"page-size":e.searchForm.pageSize,layout:"total,sizes, prev, pager, next,jumper",total:e.searchForm.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.searchForm,"currentPage",t)},"update:current-page":function(t){return e.$set(e.searchForm,"currentPage",t)}}})],1)],1),t("el-dialog",{attrs:{title:"创建积分商品",visible:e.newVisable,width:"50%"},on:{"update:visible":function(t){e.newVisable=t}}},[t("el-form",{ref:"newForm",staticClass:"demo-ruleForm",attrs:{model:e.newForm,rules:e.rules}},[e.selectGoodsVisiable?t("el-form-item",{attrs:{label:"商品",prop:"goodsId"}},[t("el-select",{attrs:{placeholder:"请选择商品",filterable:"",clearable:""},on:{change:function(t){return e.$forceUpdate()}},model:{value:e.newForm.goodsId,callback:function(t){e.$set(e.newForm,"goodsId",t)},expression:"newForm.goodsId"}},e._l(e.options_goods,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):t("el-form-item",{attrs:{label:"商品",prop:"goodsId"}},[t("el-select",{attrs:{disabled:"",placeholder:"请选择商品",filterable:"",clearable:""},on:{change:function(t){return e.$forceUpdate()}},model:{value:e.newForm.goodsId,callback:function(t){e.$set(e.newForm,"goodsId",t)},expression:"newForm.goodsId"}},e._l(e.options_goods,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e.selectGoodsVisiable?e._e():t("el-form-item",{attrs:{label:"图片："}},[t("img",{staticStyle:{width:"100px"},attrs:{src:e.BaseApi+e.newForm.coverUrl,alt:"商品图片"}})]),e.selectGoodsVisiable?e._e():t("el-form-item",{attrs:{label:"积分：",prop:"integral"}},[t("el-input",{attrs:{type:"number",placeholder:"如：3000"},on:{change:()=>{this.newForm.integral<0&&(this.newForm.integral=0)}},model:{value:e.newForm.integral,callback:function(t){e.$set(e.newForm,"integral",t)},expression:"newForm.integral"}})],1),e.selectGoodsVisiable?t("el-form-item",[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:function(t){return e.confirmGoods("newForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"18px"}}),e._v(" 确定")]),t("el-button",{staticStyle:{"font-size":"18px"},on:{click:function(t){return e.closeGoods("newForm")}}},[e._v("关闭")])],1):t("el-form-item",[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:function(t){return e.submitNewForm("newForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"18px"}}),e._v(" 确定")]),t("el-button",{staticStyle:{"font-size":"18px"},on:{click:function(t){return e.cancel("newForm")}}},[e._v("取消")])],1)],1)],1),t("el-dialog",{attrs:{title:"修改积分商品",visible:e.editVisable,width:"50%"},on:{"update:visible":function(t){e.editVisable=t}}},[t("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,rules:e.rules}},[t("el-form-item",{attrs:{label:"商品",prop:"goodsId"}},[t("el-select",{attrs:{disabled:"",placeholder:"请选择商品",filterable:"",clearable:""},on:{change:function(t){return e.$forceUpdate()}},model:{value:e.editForm.goodsId,callback:function(t){e.$set(e.editForm,"goodsId",t)},expression:"editForm.goodsId"}},e._l(e.options_goods1,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"图片："}},[t("img",{staticStyle:{width:"100px"},attrs:{src:e.BaseApi+e.editForm.coverUrl,alt:"商品图片"}})]),t("el-form-item",{attrs:{label:"积分：",prop:"integral"}},[t("el-input",{attrs:{type:"number",placeholder:"如：3000"},on:{change:()=>{this.editForm.integral<0&&(this.editForm.integral=0)}},model:{value:e.editForm.integral,callback:function(t){e.$set(e.editForm,"integral",t)},expression:"editForm.integral"}})],1),t("el-form-item",[t("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"},on:{click:function(t){return e.submitEditForm("editForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"18px"}}),e._v(" 确定")]),t("el-button",{staticStyle:{"font-size":"18px"},on:{click:function(t){return e.cancelEdit("editForm")}}},[e._v("取消")])],1)],1)],1)],1)},n=[],i=o(8151);const s="/goods_management/point_products";function a(e){return(0,i.tB)(s+"/queryPageByQo",e)}function l(e){return(0,i.Ck)(s+"/del",e)}function c(){return(0,i.Ck)(s+"/queryOptionGoods",{})}function d(e){return(0,i.tB)(s+"/savePointGoods",e)}function u(e){return(0,i.Ck)(s+"/queryPointGoodsById",e)}function m(e){return(0,i.tB)(s+"/updatePointGoods",e)}var p=o(2567),f={data(){return{BaseApi:this.$store.state.BaseApi,tableData:[],searchForm:{pageSize:5},selectGoodsVisiable:!0,newVisable:!1,editVisable:!1,newForm:{goodsId:"",goodsName:"",integral:"",coverUrl:""},editForm:{goodsId:"",goodsName:"",integral:"",coverUrl:""},options_goods:[],options_goods1:[],rules:{goodsId:[{required:!0,message:"商品编号不能为空",trigger:"blur"}],integral:[{required:!0,message:"积分不能为空",trigger:"blur"}]}}},methods:{queryOptionGoods(){c().then((e=>{e=e.data,200==e.code?this.options_goods=e.data:(0,i.gk)(e.msg,"error")}))},newBtn(){0!=this.options_goods.length?(this.newVisable=!0,this.selectGoodsVisable=!0):(0,i.gk)("没有可以添加的积分商品","warning")},closeGoods(e){this.$refs[e].resetFields(),this.newVisable=!1},confirmGoods(e){this.$refs[e].validate((e=>{e&&(0,p.gH)({id:this.newForm.goodsId}).then((e=>{e=e.data,200==e.code?(this.newForm.coverUrl=e.data.coverUrl,this.newForm.goodsName=e.data.name,this.selectGoodsVisiable=!1):(0,i.gk)(e.msg,"error")}))}))},submitNewForm(e){this.$refs[e].validate((e=>{e&&d(this.newForm).then((e=>{e=e.data,200==e.code?((0,i.gk)("创建成功"),this.newVisable=!1,this.selectGoodsVisiable=!0,this.newForm={},this.init()):(0,i.gk)(e.msg,"error")}))}))},submitEditForm(e){this.$refs[e].validate((e=>{e&&m(this.editForm).then((e=>{e=e.data,200==e.code?((0,i.gk)("创建成功"),this.editVisable=!1,this.init()):(0,i.gk)(e.msg,"error")}))}))},cancel(e){this.$refs[e].resetFields(),this.selectGoodsVisiable=!0},cancelEdit(e){this.$refs[e].resetFields(),this.editVisable=!1,this.editForm={}},subSearchForm(){this.init()},init(){this.editForm={goodsId:"",goodsName:"",integral:"",coverUrl:""},this.queryOptionGoods(),a(this.searchForm).then((e=>{e=e.data,200==e.code?(this.tableData=e.data.records,this.searchForm.total=e.data.total,this.searchForm.pageSize=e.data.size,this.searchForm.currentPage=e.data.current):(0,i.gk)(e.msg,"error")}))},handleSizeChange(e){this.searchForm.pageSize=e,this.init(),console.log(`每页 ${e} 条`)},handleCurrentChange(e){this.searchForm.currentPage=e,this.init(),console.log(`当前页: ${e}`)},submitSearchForm(){this.init()},delBtn(e){this.$confirm("确定要删除这条记录？","警示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{l({id:e}).then((e=>{e=e.data,200==e.code?((0,i.gk)("删除成功"),this.init()):(0,i.gk)(e.msg,"warning")}))})).catch((()=>{this.$message({type:"info",message:"已取消操作"})}))},editBtn(e){u({goodsId:e}).then((e=>{e=e.data,200==e.code?(this.editVisable=!0,this.editForm.goodsId=e.data.goodsId,this.editForm.goodsName=e.data.goodsName,this.editForm.integral=e.data.integral,this.editForm.coverUrl=e.data.coverUrl):(0,i.gk)(e.msg,"error")}))}},mounted(){this.init(),(0,p.QW)().then((e=>{e=e.data,200==e.code?this.options_goods1=e.data:(0,i.gk)(e.msg,"error")}))}},g=f,h=o(3736),b=(0,h.Z)(g,r,n,!1,null,null,null),v=b.exports},2567:function(e,t,o){o.d(t,{M8:function(){return u},QW:function(){return d},Vx:function(){return l},Xx:function(){return m},ZH:function(){return a},a1:function(){return s},gH:function(){return c},mJ:function(){return i}});var r=o(8151);const n="/goods_management/goods";function i(e){return(0,r.tB)(n+"/queryPageByQo",e)}function s(e){return(0,r.tB)(n+"/save",e)}function a(e){return(0,r.tB)(n+"/upOrdown",e)}function l(e){return(0,r.tB)(n+"/update",e)}function c(e){return(0,r.Ck)(n+"/queryGoodsById",e)}function d(){return(0,r.Ck)(n+"/selected_goodsAll",{})}function u(){return(0,r.Ck)(n+"/selected_storeAll",{})}function m(e){return(0,r.tB)(n+"/returnGoods",e)}},9253:function(e,t,o){o.d(t,{LP:function(){return i},Nx:function(){return a},_5:function(){return l},gy:function(){return s}});var r=o(4858);const n="token";function i(){return r.Z.get(n)}function s(){return r.Z.remove(n)}function a(){let e=r.Z.get("employee");return JSON.parse(e)}function l(e){r.Z.remove(e)}},8151:function(e,t,o){o.d(t,{Ck:function(){return p},gk:function(){return f},ml:function(){return m},tB:function(){return u}});var r=o(9253),n=o(6154),i=o(4720),s=o(4858),a=o(129),l=o.n(a);const c="http://192.168.88.132:9291";function d(){var e=(0,r.LP)();return e&&(0,n.Z)({url:c+"/checkedToken",method:"GET",params:{token:e}}).then((e=>{e=e.data,200==e.code&&(s.Z.set("token",e.data.token,{expires:1/48}),s.Z.set("employee",JSON.stringify(e.data.employee),{expires:1/48}))})).catch((e=>{console.log(e)})),e}function u(e,t){return(0,n.Z)({url:c+e,method:"POST",headers:{token:d()},data:l().stringify(t)}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?f(e,"error"):f(e.response.data,"error")}))}function m(e,t){return(0,n.Z)({url:c+e,method:"POST",headers:{"Content-Type":"application/json",token:d()},data:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?f(e,"error"):f(e.response.data,"error")}))}function p(e,t){return(0,n.Z)({url:c+e,method:"GET",headers:{token:d()},params:t}).catch((e=>{console.log(e),void 0==e.response||void 0==e.response.data?f(e,"error"):f(e.response.data,"error")}))}function f(e,t){switch(t){case"warning":i.Message.warning(e);break;case"error":i.Message.error({message:e,duration:5e3,showClose:!0});break;case"info":i.Message.info(e);break;default:i.Message.success(e)}}},4858:function(e,t){
/*! js-cookie v3.0.1 | MIT */
function o(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)e[r]=o[r]}return e}var r={read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function n(e,t){function r(r,n,i){if("undefined"!==typeof document){i=o({},t,i),"number"===typeof i.expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var a in i)i[a]&&(s+="; "+a,!0!==i[a]&&(s+="="+i[a].split(";")[0]));return document.cookie=r+"="+e.write(n,r)+s}}function i(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var o=document.cookie?document.cookie.split("; "):[],r={},n=0;n<o.length;n++){var i=o[n].split("="),s=i.slice(1).join("=");try{var a=decodeURIComponent(i[0]);if(r[a]=e.read(s,a),t===a)break}catch(l){}}return t?r[t]:r}}return Object.create({set:r,get:i,remove:function(e,t){r(e,"",o({},t,{expires:-1}))},withAttributes:function(e){return n(this.converter,o({},this.attributes,e))},withConverter:function(e){return n(o({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var i=n(r,{path:"/"});t["Z"]=i}}]);
//# sourceMappingURL=853.760132640a8702ad.1727173273753.js.map