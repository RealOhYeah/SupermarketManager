"use strict";(self["webpackChunksupermarket_manager"]=self["webpackChunksupermarket_manager"]||[]).push([[478],{478:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"sale_cmd"}},[e._m(0),t("div",{staticClass:"cmd"},[t("el-col",{attrs:{span:12}},[t("button",{on:{click:e.saleBtn}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"32px"}}),e._v(" 购物结账 ")])]),t("el-col",{attrs:{span:12}},[t("button",{on:{click:e.exchangePointProductBtn}},[t("i",{staticClass:"iconfont icon-r-refresh",staticStyle:{"font-size":"32px"}}),e._v(" 积分兑换 ")])]),t("el-col",{attrs:{span:12}},[t("button",{on:{click:e.saleRecordsBtn}},[t("i",{staticClass:"iconfont icon-r-paper",staticStyle:{"font-size":"32px"}}),e._v(" 销售记录 ")])]),t("el-col",{attrs:{span:12}},[t("button",{on:{click:e.exchangePointProductsRecordsBtn}},[t("i",{staticClass:"iconfont icon-r-find",staticStyle:{"font-size":"32px"}}),e._v(" 兑换记录 ")])])],1),t("el-dialog",{attrs:{title:"销售商品",visible:e.newVisable},on:{"update:visible":function(t){e.newVisable=t}}},[t("el-form",{ref:"newForm",staticClass:"demo-ruleForm",attrs:{model:e.newForm,rules:e.rules,"label-width":"100px"}},[t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"销售编号："}},[t("el-input",{attrs:{disabled:"",placeholder:"如：销售编号"},model:{value:e.newForm.cn,callback:function(t){e.$set(e.newForm,"cn",t)},expression:"newForm.cn"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[e.newForm.sellTime?t("el-form-item",{staticStyle:{width:"80%"},attrs:{label:"支付方式：",prop:"sellway"}},[t("el-radio",{attrs:{disabled:"",type:"radio",label:"0"},model:{value:e.newForm.sellway,callback:function(t){e.$set(e.newForm,"sellway",t)},expression:"newForm.sellway"}},[e._v("支付宝")]),t("el-radio",{attrs:{disabled:"",type:"radio",label:"1"},model:{value:e.newForm.sellway,callback:function(t){e.$set(e.newForm,"sellway",t)},expression:"newForm.sellway"}},[e._v("微信")]),t("el-radio",{attrs:{disabled:"",type:"radio",label:"2"},model:{value:e.newForm.sellway,callback:function(t){e.$set(e.newForm,"sellway",t)},expression:"newForm.sellway"}},[e._v("现金")]),t("el-radio",{attrs:{disabled:"",type:"radio",label:"3"},model:{value:e.newForm.sellway,callback:function(t){e.$set(e.newForm,"sellway",t)},expression:"newForm.sellway"}},[e._v("银行卡")])],1):t("el-form-item",{attrs:{label:"支付方式：",prop:"sellway"}},[t("el-radio",{attrs:{type:"radio",label:"0"},model:{value:e.newForm.sellway,callback:function(t){e.$set(e.newForm,"sellway",t)},expression:"newForm.sellway"}},[e._v("支付宝")]),t("el-radio",{attrs:{type:"radio",label:"1"},model:{value:e.newForm.sellway,callback:function(t){e.$set(e.newForm,"sellway",t)},expression:"newForm.sellway"}},[e._v("微信")]),t("el-radio",{attrs:{type:"radio",label:"2"},model:{value:e.newForm.sellway,callback:function(t){e.$set(e.newForm,"sellway",t)},expression:"newForm.sellway"}},[e._v("现金")]),t("el-radio",{attrs:{type:"radio",label:"3"},model:{value:e.newForm.sellway,callback:function(t){e.$set(e.newForm,"sellway",t)},expression:"newForm.sellway"}},[e._v("银行卡")])],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[e.newForm.sellTime?t("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"顾客类型：",prop:"type"}},[t("el-radio",{attrs:{disabled:"",type:"radio",label:"1"},on:{change:()=>{"1"==this.newForm.type?this.newForm.sellTotalmoney=(.9*this.totalMoney).toFixed(2):this.newForm.sellTotalmoney=this.totalMoney.toFixed(2)}},model:{value:e.newForm.type,callback:function(t){e.$set(e.newForm,"type",t)},expression:"newForm.type"}},[e._v("会员 ")]),t("el-radio",{attrs:{disabled:"",type:"radio",label:"0"},on:{change:()=>{"1"==this.newForm.type?this.newForm.sellTotalmoney=(.9*this.totalMoney).toFixed(2):this.newForm.sellTotalmoney=this.totalMoney.toFixed(2)}},model:{value:e.newForm.type,callback:function(t){e.$set(e.newForm,"type",t)},expression:"newForm.type"}},[e._v("非会员 ")])],1):t("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"顾客类型：",prop:"type"}},[t("el-radio",{attrs:{type:"radio",label:"1"},on:{change:()=>{"1"==this.newForm.type?this.newForm.sellTotalmoney=(.9*this.totalMoney).toFixed(2):this.newForm.sellTotalmoney=this.totalMoney.toFixed(2)}},model:{value:e.newForm.type,callback:function(t){e.$set(e.newForm,"type",t)},expression:"newForm.type"}},[e._v("会员 ")]),t("el-radio",{attrs:{type:"radio",label:"0"},on:{change:()=>{"1"==this.newForm.type?this.newForm.sellTotalmoney=(.9*this.totalMoney).toFixed(2):this.newForm.sellTotalmoney=this.totalMoney.toFixed(2)}},model:{value:e.newForm.type,callback:function(t){e.$set(e.newForm,"type",t)},expression:"newForm.type"}},[e._v("非会员 ")])],1)],1),"1"==e.newForm.type?t("el-col",{attrs:{span:12}},[t("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"会员账号：",prop:"memberPhone"}},[t("el-input",{attrs:{placeholder:"如：电话号码"},on:{change:function(t){return e.queryMemberByPhone(e.newForm.memberPhone)}},model:{value:e.newForm.memberPhone,callback:function(t){e.$set(e.newForm,"memberPhone",t)},expression:"newForm.memberPhone"}})],1)],1):e._e(),"1"==e.newForm.type&&e.newForm.sellTime?t("el-col",{attrs:{span:12}},[t("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"会员账号：",prop:"memberPhone"}},[t("el-input",{attrs:{readonly:"",placeholder:"如：电话号码"},model:{value:e.newForm.memberPhone,callback:function(t){e.$set(e.newForm,"memberPhone",t)},expression:"newForm.memberPhone"}})],1)],1):e._e()],1),t("hr"),t("el-row",[t("el-col",{staticStyle:{"text-align":"left","margin-bottom":"10px"},attrs:{span:24}},[t("el-button",{attrs:{type:"success"},on:{click:e.addGoodsBtn}},[t("i",{staticClass:"iconfont icon-r-add"}),e._v(" 添加商品")])],1),t("el-col",{attrs:{span:24}},[t("el-table",{staticStyle:{width:"100%","border-top":"1px solid lightgrey"},attrs:{data:e.newForm.detailSaleRecords,size:"medium"}},[t("el-table-column",{attrs:{prop:"goodsId",label:"商品编号"}}),t("el-table-column",{attrs:{prop:"goodsName",label:"商品名"}}),t("el-table-column",{attrs:{prop:"goodsNum",width:"400px",label:"数量"},scopedSlots:e._u([e.newForm.sellTime?{key:"default",fn:function(o){return[t("el-button",{attrs:{type:"success"}},[e._v("+")]),t("el-input",{staticStyle:{width:"100px"},attrs:{readonly:"",type:"number",min:"1"},model:{value:o.row.goodsNum,callback:function(t){e.$set(o.row,"goodsNum",t)},expression:"scope.row.goodsNum"}}),t("el-button",{attrs:{type:"success"}},[e._v("-")])]}}:{key:"default",fn:function(o){return[t("el-button",{attrs:{type:"success"},on:{click:function(t){return e.redueGoodsNum(o.row)}}},[e._v("-")]),t("el-input",{staticStyle:{width:"100px"},attrs:{readonly:"",type:"number",min:"1"},model:{value:o.row.goodsNum,callback:function(t){e.$set(o.row,"goodsNum",t)},expression:"scope.row.goodsNum"}}),t("el-button",{attrs:{type:"success"},on:{click:function(t){return e.addGoodsNum(o.row)}}},[e._v("+")])]}}],null,!0)}),t("el-table-column",{attrs:{prop:"goodsPrice",label:"商品单价"}}),e.newForm.sellTime?e._e():t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.removedetailRecords(o.row)}}},[e._v("移除")])]}}],null,!1,3193589537)})],1)],1)],1),t("br"),t("el-row",[t("el-col",{attrs:{span:24}},[e.newForm.sellTime?t("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"备注："}},[t("el-input",{attrs:{disabled:"",type:"textarea",placeholder:"如：订单1"},model:{value:e.newForm.info,callback:function(t){e.$set(e.newForm,"info",t)},expression:"newForm.info"}})],1):t("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"备注："}},[t("el-input",{attrs:{type:"textarea",placeholder:"如：订单1"},model:{value:e.newForm.info,callback:function(t){e.$set(e.newForm,"info",t)},expression:"newForm.info"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:24}},[e.newForm.detailSaleRecords.length>0?t("div",[e._v(" 订单号："+e._s(e.newForm.cn)+"   商品总数："+e._s(e.newForm.sellTotal?e.newForm.sellTotal:0)+"   总共："+e._s(e.totalMoney?e.totalMoney:0)+"元   消费："+e._s(e.newForm.sellTotalmoney?parseFloat(e.newForm.sellTotalmoney).toFixed(2):0)+"元   "),e.newForm.sellway?t("span",[e._v("支付方式："+e._s("0"==e.newForm.sellway?"支付宝":"1"==e.newForm.sellway?"微信":"2"==e.newForm.sellway?"现金":"银行卡")+"  ")]):e._e(),"1"==e.newForm.type?t("span",[e._v("会员享受9折  优惠"+e._s(e.totalMoney?parseFloat(e.totalMoney-e.newForm.sellTotalmoney).toFixed(2):0)+"元  ")]):e._e(),e.newForm.sellTime?t("span",[e._v("消费时间："+e._s(e.newForm.sellTime)+"   操作者编号："+e._s(e.newForm.eid))]):e._e()]):e._e()])],1),t("hr"),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",[e.newForm.sellTime?e._e():t("el-button",{staticStyle:{"font-size":"22px"},attrs:{type:"success"},on:{click:function(t){return e.submitNewForm("newForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"22px"}}),e._v(" 支付 ")]),t("el-button",{staticStyle:{"font-size":"22px"},attrs:{type:"info"},on:{click:function(t){return e.closeNewForm("newForm")}}},[t("i",{staticClass:"iconfont icon-r-no",staticStyle:{"font-size":"22px"}}),e._v(" 关闭")])],1)],1)],1)],1)],1),t("el-dialog",{attrs:{title:"添加商品",visible:e.addGoodsVisable},on:{"update:visible":function(t){e.addGoodsVisable=t}}},[t("el-form",{ref:"detailSaleRecords",staticClass:"demo-ruleForm",attrs:{model:e.detailSaleRecords,rules:e.rules}},[t("el-form-item",{attrs:{label:"商品：",prop:"goodsId"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择商品",filterable:"",clearable:""},on:{change:e.selectedAddGoods},model:{value:e.detailSaleRecords.goodsId,callback:function(t){e.$set(e.detailSaleRecords,"goodsId",t)},expression:"detailSaleRecords.goodsId"}},e._l(e.options_saleRecordsAddGoods,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"数量："}},[t("el-input",{attrs:{type:"number",min:"1",max:e.goodsNum_max,placeholder:" "+(e.goodsNum_max?"库存数量："+e.goodsNum_max:"")},on:{change:()=>{this.$forceUpdate(),this.goodsNum_max<this.detailSaleRecords.goodsNum?this.detailSaleRecords.goodsNum=this.goodsNum_max:this.detailSaleRecords.goodsNum<1&&(this.detailSaleRecords.goodsNum=1)}},model:{value:e.detailSaleRecords.goodsNum,callback:function(t){e.$set(e.detailSaleRecords,"goodsNum",t)},expression:"detailSaleRecords.goodsNum"}})],1),t("el-form-item",{attrs:{label:"单价：",prop:"goodsId"}},[t("el-input",{attrs:{disabled:""},model:{value:e.detailSaleRecords.goodsPrice,callback:function(t){e.$set(e.detailSaleRecords,"goodsPrice",t)},expression:"detailSaleRecords.goodsPrice"}})],1),t("el-form-item",[t("el-button",{staticStyle:{"font-size":"22px"},attrs:{type:"success"},on:{click:e.addDetailSaleRecords}},[t("i",{staticClass:"iconfont icon-r-add",staticStyle:{"font-size":"22px"}}),e._v(" 添加")]),t("el-button",{staticStyle:{"font-size":"22px"},attrs:{type:"info"},on:{click:()=>{this.addGoodsVisable=!1,this.detailSaleRecords={},this.options_saleRecordsAddGoods=[],this.goodsNum_max=""}}},[t("i",{staticClass:"iconfont icon-r-no",staticStyle:{"font-size":"22px"}}),e._v(" 取消 ")])],1)],1)],1),t("el-dialog",{attrs:{title:"积分兑换",visible:e.pointProductsVisable,"label-width":"200",width:"40%"},on:{"update:visible":function(t){e.pointProductsVisable=t}}},[t("el-form",{ref:"pointProductsForm",staticClass:"demo-ruleForm",attrs:{model:e.pointProductsForm,rules:e.rules}},[e.confirmVisiable?t("el-form-item",[t("img",{attrs:{width:"100px",src:e.BaseApi+e.pointProductsForm.coverUrl,alt:"商品图片"}})]):e._e(),e.confirmVisiable?e._e():t("el-form-item",{attrs:{label:"会员账号：",prop:"memberId"}},[t("el-select",{attrs:{placeholder:"请选择会员",filterable:"",clearable:""},on:{change:e.queryPointProductByMemberId},model:{value:e.pointProductsForm.memberId,callback:function(t){e.$set(e.pointProductsForm,"memberId",t)},expression:"pointProductsForm.memberId"}},e._l(e.options_members,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e.confirmVisiable?t("el-form-item",{attrs:{label:"会员账号：",prop:"memberId"}},[t("el-select",{attrs:{disabled:"",placeholder:"请选择会员",filterable:"",clearable:""},on:{change:e.queryPointProductByMemberId},model:{value:e.pointProductsForm.memberId,callback:function(t){e.$set(e.pointProductsForm,"memberId",t)},expression:"pointProductsForm.memberId"}},e._l(e.options_members,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),e.confirmVisiable?e._e():t("el-form-item",{attrs:{label:"积分商品：",prop:"goodsId"}},[t("el-select",{attrs:{placeholder:"请选择积分商品",filterable:"",clearable:""},on:{change:e.queryPointProductByGoodsId},model:{value:e.pointProductsForm.goodsId,callback:function(t){e.$set(e.pointProductsForm,"goodsId",t)},expression:"pointProductsForm.goodsId"}},e._l(e.options_pointProducts,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e.confirmVisiable?t("el-form-item",{attrs:{label:"积分商品：",prop:"goodsId"}},[t("el-select",{attrs:{disabled:"",placeholder:"请选择积分商品",filterable:"",clearable:""},on:{change:e.queryPointProductByGoodsId},model:{value:e.pointProductsForm.goodsId,callback:function(t){e.$set(e.pointProductsForm,"goodsId",t)},expression:"pointProductsForm.goodsId"}},e._l(e.options_pointProducts,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),e.confirmVisiable?t("el-form-item",{attrs:{label:"所需积分："}},[t("el-input",{attrs:{disabled:"",type:"number",placeholder:"所需积分"},model:{value:e.pointProductsForm.integral,callback:function(t){e.$set(e.pointProductsForm,"integral",t)},expression:"pointProductsForm.integral"}})],1):e._e(),t("el-form-item",[e.confirmVisiable?t("el-button",{staticStyle:{"font-size":"22px"},attrs:{type:"primary"},on:{click:function(t){return e.submitPointProductsForm("pointProductsForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"22px"}}),e._v(" 确认兑换 ")]):e._e(),e.confirmVisiable?t("el-button",{staticStyle:{"font-size":"22px"},attrs:{type:"info"},on:{click:e.closePointProductsForm}},[t("i",{staticClass:"iconfont icon-r-no",staticStyle:{"font-size":"22px"}}),e._v(" 关闭")]):e._e(),e.confirmVisiable?e._e():t("el-button",{staticStyle:{"font-size":"22px"},attrs:{type:"success"},on:{click:function(t){return e.confirmPointProducts("pointProductsForm")}}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"22px"}}),e._v(" 兑换 ")]),e.confirmVisiable?e._e():t("el-button",{staticStyle:{"font-size":"22px"},attrs:{type:"info"},on:{click:e.closeConfirmPointProducts}},[t("i",{staticClass:"iconfont icon-r-yes",staticStyle:{"font-size":"22px"}}),e._v(" 关闭")])],1)],1)],1)],1)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"head"},[t("i",{staticClass:"iconfont icon-r-home",staticStyle:{"font-size":"42px"}}),e._v(" 销售主页 ")])}],n=(o(7658),o(541),o(8151)),l=o(9183),i=o(2567),a=o(795),d=o(2547),c={data(){return{BaseApi:this.$store.state.BaseApi,confirmVisiable:!1,newVisable:!1,addGoodsVisable:!1,paymentCodeVisable:!1,goodsNum_max:"",totalMoney:"",options_saleRecordsAddGoods:[],detailSaleRecords:{},newForm:{cn:"",sellway:"1",info:"",sellTotal:"",sellTotalmoney:"",type:"0",detailSaleRecords:[]},pointProductsForm:{memberId:"",goodsId:"",coverUrl:"",integral:""},options_members:[],options_pointProducts:[],pointProductsVisable:!1,rules:{sellway:[{required:!0,message:"支付方式未选择",trigger:"blur"}],type:[{required:!0,message:"顾客类型未选择",trigger:"blur"}],memberPhone:[{required:!0,message:"会员电话号码未填写",trigger:"blur"}],goodsId:[{required:!0,message:"商品不能为空",trigger:"blur"}],memberId:[{required:!0,message:"会员编号不能为空",trigger:"blur"}]}}},methods:{confirmPointProducts(e){this.$refs[e].validate((e=>{e&&((0,d.$j)({goodsId:this.pointProductsForm.goodsId}).then((e=>{if(e=e.data,200==e.code){if(!e.data)return void(this.pointProductsForm={memberId:this.pointProductsForm.memberId,goodsId:this.pointProductsForm.goodsId,coverUrl:"",integral:""});this.pointProductsForm.integral=e.data.integral,this.pointProductsForm.coverUrl=e.data.coverUrl}else(0,n.gk)(e.msg,"error")})),this.confirmVisiable=!0)}))},closeConfirmPointProducts(){this.confirmVisiable=!1,this.pointProductsVisable=!1,this.pointProductsForm={memberId:"",goodsId:"",coverUrl:"",integral:""}},queryPointProductByMemberId(){(0,d.S0)({memberId:this.pointProductsForm.memberId}).then((e=>{if(e=e.data,200==e.code){if(this.options_pointProducts=e.data,!this.options_pointProducts.length)return(0,n.gk)("该会员积分数无法兑换任何商品","warning"),void(this.pointProductsForm.goodsId="")}else(0,n.gk)(e.msg,"error")}))},queryPointProductByGoodsId(){(0,d.SF)({goodsId:this.pointProductsForm.goodsId}).then((e=>{if(console.log(e),e=e.data,200==e.code){if(console.log(e),this.options_members=e.data,!this.options_members.length)return(0,n.gk)("该商品没有会员符合条件进行兑换","warning"),void(this.pointProductsForm.memberId="")}else console.log(e),(0,n.gk)(e.msg,"error")}))},queryOptionsPointProducts(){(0,d.W5)().then((e=>{e=e.data,200==e.code?this.options_pointProducts=e.data:(0,n.gk)(e.msg,"error")}))},queryOptionsMember(){(0,d.VK)().then((e=>{console.log("!!!!!"),console.log(e),console.log(e.data),e=e.data,200==e.code?this.options_members=e.data:(0,n.gk)(e.msg,"error")}))},submitPointProductsForm(e){this.$refs[e].validate((e=>{e&&(0,d.qH)(this.pointProductsForm).then((e=>{e=e.data,200==e.code?((0,n.gk)("兑换成功"),this.pointProductsForm={},this.pointProductsForm={memberId:"",goodsId:"",coverUrl:"",integral:""},this.pointProductsVisable=!1,this.confirmVisiable=!this.confirmVisiable):(0,n.gk)(e.msg,"error")}))}))},closePointProductsForm(){this.confirmVisiable=!1},moreFuns(){(0,n.gk)("正在研发...","warning")},queryMemberByPhone(e){(0,a.Qi)({phone:e}).then((e=>{e=e.data,200!=e.code&&((0,n.gk)(e.msg,"error"),this.newForm.memberPhone="")}))},saleRecordsBtn(){this.$router.push("/sale_management/sale_records/list")},exchangePointProductsRecordsBtn(){this.$router.push("/sale_management/exchange_point_products_records/list")},submitNewForm(e){this.$refs[e].validate((e=>{if(e){if(this.newForm.detailSaleRecords.length<=0)return void(0,n.gk)("还没选择出售的商品","error");(0,l.Mg)(this.newForm).then((e=>{e=e.data,200==e.code?(this.newForm={...e.data},console.log(this.newForm),(0,n.gk)("支付成功"),this.paymentCodeVisable=!1):(0,n.gk)("系统正忙,支付失败","error")}))}}))},closeNewForm(e){this.$refs[e].resetFields(),this.newForm={cn:"",sellway:"1",info:"",sellTotal:"",sellTotalmoney:"",type:"0",detailSaleRecords:[]},this.newVisable=!1},removedetailRecords(e){this.$confirm("确定删除这条记录？","警示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{for(var t in this.newForm.sellTotal=parseInt(this.newForm.sellTotal)-e.goodsNum,this.totalMoney=(parseFloat(this.totalMoney)-parseFloat(parseInt(e.goodsNum)*parseFloat(e.goodsPrice))).toFixed(2),"1"==this.newForm.type?this.newForm.sellTotalmoney=parseFloat(this.totalMoney)*.9.toFixed(2):this.newForm.sellTotalmoney=parseFloat(this.totalMoney).toFixed(2),this.newForm.detailSaleRecords)if(this.newForm.detailSaleRecords[t].goodsId==e.goodsId)return void this.newForm.detailSaleRecords.splice(t,1)})).catch((()=>{this.$message({type:"info",message:"已取消操作"})}))},addGoodsNum(e){(0,i.gH)({id:e.goodsId}).then((t=>{t=t.data,200==t.code?e.goodsNum>=t.data.residueNum?(0,n.gk)("货架商品数量没这么多，请联系仓库管理者","warning"):(e.goodsNum=parseInt(e.goodsNum)+1,this.newForm.sellTotal=parseInt(this.newForm.sellTotal)+1,this.totalMoney=(parseFloat(this.totalMoney)+parseFloat(e.goodsPrice)).toFixed(2),"1"==this.newForm.type?this.newForm.sellTotalmoney=parseFloat(this.totalMoney)*.9.toFixed(2):this.newForm.sellTotalmoney=parseFloat(this.totalMoney).toFixed(2)):(0,n.gk)(t.msg,"error")}))},redueGoodsNum(e){1!=parseInt(e.goodsNum)?(e.goodsNum=parseInt(e.goodsNum)-1,this.newForm.sellTotal=parseInt(this.newForm.sellTotal)-1,this.totalMoney=(parseFloat(this.totalMoney)-parseFloat(e.goodsPrice)).toFixed(2),"1"==this.newForm.type?this.newForm.sellTotalmoney=parseFloat(this.totalMoney)*.9.toFixed(2):this.newForm.sellTotalmoney=parseFloat(this.totalMoney).toFixed(2)):(0,n.gk)("已是最小数量","error")},initOptionSaleRecordsAddGoodsAll(){(0,l.PA)().then((e=>{e=e.data,200==e.code?(this.options_saleRecordsAddGoods=e.data,this.options_saleRecordsAddGoods.length>0?this.addGoodsVisable=!0:(0,n.gk)("目前没有可售卖的商品","warning")):(0,n.gk)(e.msg,"error")}))},addGoodsBtn(){this.detailSaleRecords={},this.goodsNum_max="",this.initOptionSaleRecordsAddGoodsAll()},addDetailSaleRecords(){if(this.detailSaleRecords.goodsNum){if(this.newForm.sellTotal=Number.parseInt(this.newForm.sellTotal?this.newForm.sellTotal:0)+Number.parseInt(this.detailSaleRecords.goodsNum),this.totalMoney=(this.totalMoney?parseFloat(this.totalMoney):0)+parseInt(this.detailSaleRecords.goodsNum)*parseFloat(this.detailSaleRecords.goodsPrice).toFixed(2),this.totalMoney&&("1"==this.newForm.type?this.newForm.sellTotalmoney=.9*this.totalMoney:this.newForm.sellTotalmoney=this.totalMoney),0==this.newForm.detailSaleRecords.length)this.newForm.detailSaleRecords.unshift(this.detailSaleRecords);else{for(var e of this.newForm.detailSaleRecords)if(e.goodsId==this.detailSaleRecords.goodsId)return e.goodsNum=Number.parseInt(e.goodsNum)+Number.parseInt(this.detailSaleRecords.goodsNum),void(this.addGoodsVisable=!1);this.newForm.detailSaleRecords.unshift(this.detailSaleRecords)}this.addGoodsVisable=!1}else(0,n.gk)("数量不能为空","warning")},saleBtn(){(0,l.sJ)().then((e=>{e=e.data,200==e.code?(this.newForm.cn=e.data,this.newVisable=!0):(0,n.gk)(e.msg,"error")}))},selectedAddGoods(){(0,i.gH)({id:this.detailSaleRecords.goodsId}).then((e=>{e=e.data,200==e.code&&(this.detailSaleRecords.goodsPrice=e.data.purchashPrice,this.detailSaleRecords.goodsName=e.data.name,this.goodsNum_max=e.data.residueNum)}))},paymentCode(e){this.newForm.detailSaleRecords.length<=0?(0,n.gk)("还没选择出售的商品","error"):"2"!=e&&(this.paymentCodeVisable=!0)},exchangePointProductBtn(){this.queryOptionsMember(),this.queryOptionsPointProducts(),this.pointProductsVisable=!0}},mounted(){}},m=c,u=o(3736),p=(0,u.Z)(m,r,s,!1,null,null,null),f=p.exports},5117:function(e,t,o){var r=o(6330),s=TypeError;e.exports=function(e,t){if(!delete e[t])throw s("Cannot delete property "+r(t)+" of "+r(e))}},541:function(e,t,o){var r=o(2109),s=o(7908),n=o(6244),l=o(3658),i=o(5117),a=o(7207),d=1!==[].unshift(0),c=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},m=d||!c();r({target:"Array",proto:!0,arity:1,forced:m},{unshift:function(e){var t=s(this),o=n(t),r=arguments.length;if(r){a(o+r);var d=o;while(d--){var c=d+r;d in t?t[c]=t[d]:i(t,c)}for(var m=0;m<r;m++)t[m]=arguments[m]}return l(t,o+r)}})},2567:function(e,t,o){o.d(t,{M8:function(){return m},QW:function(){return c},Vx:function(){return a},Xx:function(){return u},ZH:function(){return i},a1:function(){return l},gH:function(){return d},mJ:function(){return n}});var r=o(8151);const s="/goods_management/goods";function n(e){return(0,r.tB)(s+"/queryPageByQo",e)}function l(e){return(0,r.tB)(s+"/save",e)}function i(e){return(0,r.tB)(s+"/upOrdown",e)}function a(e){return(0,r.tB)(s+"/update",e)}function d(e){return(0,r.Ck)(s+"/queryGoodsById",e)}function c(){return(0,r.Ck)(s+"/selected_goodsAll",{})}function m(){return(0,r.Ck)(s+"/selected_storeAll",{})}function u(e){return(0,r.tB)(s+"/returnGoods",e)}},795:function(e,t,o){o.d(t,{Eb:function(){return d},GZ:function(){return l},Qi:function(){return c},Vx:function(){return a},a1:function(){return i},mJ:function(){return n}});var r=o(8151);const s="/member_management/member";function n(e){return(0,r.tB)(s+"/queryPageByQo",e)}function l(e){return(0,r.tB)(s+"/delMember",e)}function i(e){return(0,r.tB)(s+"/save",e)}function a(e){return(0,r.tB)(s+"/update",e)}function d(e){return(0,r.Ck)(s+"/queryMemberById",e)}function c(e){return(0,r.Ck)(s+"/queryMemberByPhone",e)}},2547:function(e,t,o){o.d(t,{$j:function(){return i},L3:function(){return c},Nc:function(){return d},S0:function(){return n},SF:function(){return l},VK:function(){return p},W5:function(){return u},qH:function(){return a},v0:function(){return m}});var r=o(8151);const s="/sale_management/exchange_point_products_records";function n(e){return(0,r.Ck)(s+"/queryPointProductBymemberId",e)}function l(e){return(0,r.Ck)(s+"/queryMemberByGoodsId",e)}function i(e){return(0,r.Ck)(s+"/queryPointProductByGoodsId",e)}function a(e){return(0,r.tB)(s+"/saveExchangePointProductRecords",e)}function d(){return(0,r.Ck)(s+"/queryOptionsMemberPhone",{})}function c(e){return(0,r.tB)(s+"/queryPageByQoExchangePointProducts",e)}function m(e){return(0,r.Ck)(s+"/delExchangePointProducts",e)}function u(){return(0,r.Ck)(s+"/queryOptionsPointProducts",{})}function p(){return(0,r.Ck)(s+"/queryOptionsMember",{})}},9183:function(e,t,o){o.d(t,{Bp:function(){return a},Mg:function(){return i},PA:function(){return l},lk:function(){return d},sJ:function(){return n}});var r=o(8151);const s="/sale_management/sale_record";function n(){return(0,r.Ck)(s+"/getCn",{})}function l(){return(0,r.Ck)(s+"/getOptionSaleRecordsGoods",{})}function i(e){return(0,r.ml)(s+"/saveSaleRecords",e)}function a(e){return(0,r.tB)(s+"/queryPageByQoSaleRecords",e)}function d(e){return(0,r.Ck)(s+"/delSaleRecords",e)}}}]);
//# sourceMappingURL=478.760132640a8702ad.1727173273753.js.map