(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3d43","chunk-011d"],{"1q41":function(t,e,s){},"31UX":function(t,e,s){"use strict";var i=s("QbLZ"),a=s.n(i),n=s("4d7F"),r=s.n(n),o=s("CMIa"),l=s("ehos"),c=s("7Qib");e.a={data:function(){return{chartObj:null,chartOtherObj:null,chartColors:["#6CA2FF","#6AC9D7","#72DCA2","#48E78D","#FECD51","#DBB375","#FF7474","#F59561","#A3AEBC","#4C84FF","#0DBEB4","#00DEDE","#FFAA00","#C7C116","#F7A57C","#F661AC","#8652EE"],chartXAxisStyle:{axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#333"},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1}},chartYAxisStyle:{axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#333"},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1}},currentPage:1,pageSizes:[15,30,45,60],pageSize:0,total:0,toolbox:{showTitle:!1,feature:{saveAsImage:{show:!0,pixelRatio:2}}}}},components:{FiltrateHandleView:o.a},props:{},computed:{},watch:{},mounted:function(){var t=this;this.debouncedResize=Object(l.debounce)(300,this.resizeFn),this.$nextTick(function(){window.addEventListener("resize",t.debouncedResize)})},beforeDestroy:function(){window.removeEventListener("resize",this.debouncedResize)},methods:{resizeFn:function(){this.chartObj&&this.chartObj.resize(),this.chartOtherObj&&this.chartOtherObj.resize()},handleSizeChange:function(t){this.pageData.limit=t,this.getList(this.pageData)},handleCurrentChange:function(t){this.pageData.page=t,this.getList(this.pageData)},requestExportInfo:function(t,e,s){return new r.a(function(i,n){t(a()({},e,{excel_types:s,excel_type:1})).then(function(t){Object(c.c)(t),i&&i(t)}).catch(function(t){n&&n(t)})})}},deactivated:function(){}}},"74lk":function(t,e,s){"use strict";s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n}),s.d(e,"d",function(){return r}),s.d(e,"e",function(){return o}),s.d(e,"c",function(){return l});var i=s("t3Un");function a(t){return Object(i.a)({url:"bi/achievement/statistics",method:"post",data:t})}function n(t){return Object(i.a)({url:"bi/achievement/excelExport",method:"post",data:t,responseType:"blob"})}function r(t){return Object(i.a)({url:"bi/product/statistics",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function o(t){return Object(i.a)({url:"bi/product/excelExport",method:"post",data:t,responseType:"blob",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function l(t){return Object(i.a)({url:"bi/business/funnel",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}},"77fj":function(t,e,s){"use strict";var i=s("Btlj");s.n(i).a},"9/Sb":function(t,e,s){"use strict";var i=s("IIWD");s.n(i).a},BFc5:function(t,e,s){"use strict";var i=s("gofZ");s.n(i).a},Btlj:function(t,e,s){},CMIa:function(t,e,s){"use strict";var i=s("QbLZ"),a=s.n(i),n=s("KTTK"),r=s("ERJp"),o=s("6iAj"),l=s("UCfG"),c=s("HHBN"),u=s("ZX9L"),h=s("wd/R"),p=s.n(h),d=s("L2JU"),m={name:"FiltrateHandleView",components:{TimeTypeSelect:u.a,XhStructureCell:l.a,XhUserCell:c.a},props:{moduleType:{type:String},title:{type:String,default:""},showFilterView:{default:!0,type:Boolean},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},dataSelect:1,structuresSelectValue:[],userSelectValue:[],businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},computed:a()({},Object(d.b)(["userInfo"]),{showUserStrucSelect:function(){return this.showUserSelect}}),watch:{},mounted:function(){var t=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=p()(new Date).year().toString()),this.$emit("load"),this.showBusinessSelect?this.getBusinessStatusList(function(){t.postFiltrateValue()}):this.postFiltrateValue(),this.showProductSelect&&this.getProductCategoryIndex()},beforeDestroy:function(){},methods:{structureChange:function(t){this.structuresSelectValue=t.value||[]},userChange:function(t){this.userSelectValue=t.value||[]},customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(t){this.timeTypeValue=t},structuresValueChange:function(t){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var t=this,e={};e.structure_id=this.structuresSelectValue,Object(n.l)(e).then(function(e){t.userOptions=e.data}).catch(function(){t.$emit("error")})},getBusinessStatusList:function(t){var e=this;Object(r.t)().then(function(s){var i=s.data||[];e.businessOptions=i.filter(function(t){return 1===t.status}),e.businessOptions.length>0&&(e.businessStatusValue=e.businessOptions[0].type_id),t(!0)}).catch(function(){e.$emit("error")})},getProductCategoryIndex:function(){var t=this;Object(o.G)({type:"tree"}).then(function(e){t.productOptions=e.data}).catch(function(){})},postFiltrateValue:function(){var t={};this.showUserStrucSelect?1==this.dataSelect&&(t.structure_id=this.structuresSelectValue.length>0?this.structuresSelectValue[0].id:this.userInfo.structure_id):t.structure_id=this.structuresSelectValue.length>0?this.structuresSelectValue[0].id:"1",this.showUserSelect&&2==this.dataSelect&&(t.user_id=this.userSelectValue.length>0?this.userSelectValue[0].id:""),this.showBusinessSelect&&(t.type_id=this.businessStatusValue),this.showProductSelect&&(t.category_id=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?t.year=this.yearValue:"custom"==this.timeTypeValue.type?(t.start_time=this.timeTypeValue.startTime.replace(/\./g,"-"),t.end_time=this.timeTypeValue.endTime.replace(/\./g,"-")):t.type=this.timeTypeValue.value,this.$emit("change",t)}}},y=(s("YzRf"),s("KHd+")),f=Object(y.a)(m,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("flexbox",{staticClass:"filtrate-content",attrs:{justify:"flex-start"}},[s("flexbox",{staticClass:"title-box",attrs:{justify:"flex-start"}},[s("div",{staticClass:"icon-box"},[s("span",{staticClass:"wk wk-my-task icon"})]),t._v(" "),s("span",{staticClass:"text"},[t._v(t._s(t.title))])]),t._v(" "),t.showFilterView?[t.showYearSelect?t._e():s("time-type-select",{on:{change:t.timeTypeChange}}),t._v(" "),t.showYearSelect?s("el-date-picker",{attrs:{clearable:!1,"picker-options":t.pickerOptions,type:"year","value-format":"yyyy",placeholder:"选择年"},model:{value:t.yearValue,callback:function(e){t.yearValue=e},expression:"yearValue"}}):t._e(),t._v(" "),t.showUserStrucSelect?s("el-select",{model:{value:t.dataSelect,callback:function(e){t.dataSelect=e},expression:"dataSelect"}},t._l([{label:"按部门",value:1},{label:"按员工",value:2}],function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})):t._e(),t._v(" "),1==t.dataSelect?s("xh-structure-cell",{staticClass:"xh-structure-cell",attrs:{radio:"",placeholder:"选择部门（默认为本部门及下属部门）"},on:{"value-change":t.structureChange}}):t._e(),t._v(" "),2==t.dataSelect&&t.showUserSelect?s("xh-user-cell",{staticClass:"xh-user-cell",attrs:{radio:"",placeholder:"选择员工（默认为本人及下属）\n"},on:{"value-change":t.userChange}}):t._e(),t._v(" "),t.showBusinessSelect?s("el-select",{attrs:{placeholder:"商机组"},model:{value:t.businessStatusValue,callback:function(e){t.businessStatusValue=e},expression:"businessStatusValue"}},t._l(t.businessOptions,function(t){return s("el-option",{key:t.type_id,attrs:{label:t.name,value:t.type_id}})})):t._e(),t._v(" "),t.showProductSelect?s("el-cascader",{staticStyle:{width:"100%"},attrs:{options:t.productOptions,"show-all-levels":!1,props:{children:"children",label:"label",value:"categoryId"},"change-on-select":""},model:{value:t.productValue,callback:function(e){t.productValue=e},expression:"productValue"}}):t._e(),t._v(" "),t.showCustomSelect?s("el-select",{on:{change:t.customSelectChange},model:{value:t.customValue,callback:function(e){t.customValue=e},expression:"customValue"}},t._l(t.customOptions,function(t){return s("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})):t._e(),t._v(" "),t._t("append"),t._v(" "),s("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.postFiltrateValue()}}},[t._v("搜索")]),t._v(" "),t._t("default")]:t._e()],2)},[],!1,null,"8c270fc6",null);f.options.__file="FiltrateHandleView.vue";e.a=f.exports},IIWD:function(t,e,s){},KmSi:function(t,e,s){"use strict";var i=s("YEIV"),a=s.n(i),n=s("QbLZ"),r=s.n(n),o=s("4XAY"),l=s("ZoMv"),c=s("yPq4"),u=s("O8VQ"),h=s("Ew9n"),p={name:"RecordList",components:{LogCell:u.a,SlideView:h.a,CRMFullScreenDetail:function(){return Promise.all([s.e("chunk-6882"),s.e("chunk-b03c33")]).then(s.bind(null,"3z7q"))}},filters:{crmIconClass:function(t){return"wk wk-"+l.a.convertTypeToKey(t)},crmName:function(t){return l.a.convertTypeToName(t)}},props:{crmType:String,request:Function,params:Object,listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,page:1,noMore:!1,list:[],scrollKey:Date.now(),showFullDetail:!1,relationID:"",relationCrmType:""}},computed:{crmIcon:function(){var t=this.crmType.replace("crm_","");return s("p3hS")("./"+t+".png")},scrollDisabled:function(){return this.loading||this.noMore}},watch:{params:function(){this.refreshList()}},mounted:function(){},methods:{refreshList:function(){this.page=1,this.list=[],this.noMore=!1,this.scrollKey=Date.now()},getList:function(){var t=this;this.loading=!0,this.request(r()({page:this.page,limit:15},this.params,{label:1,activity_type:{crm_leads:1,crm_customer:2,crm_contacts:3,crm_business:5,crm_contract:6}[this.crmType]})).then(function(e){t.page++,t.list=t.list.concat(e.data.list),t.noMore=e.data.lastPage,t.loading=!1}).catch(function(){t.noMore=!0,t.loading=!1})},checkRelationDetail:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.relationID=e,this.relationCrmType=s?l.a.convertTypeToKey(t):t,this.showFullDetail=!0},hideView:function(){this.$emit("hide")}}},d=(s("PGJe"),s("KHd+")),m=Object(d.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("slide-view",{staticClass:"d-view",attrs:{"listener-ids":t.listenerIDs,"no-listener-ids":t.noListenerIDs,"no-listener-class":t.noListenerClass,"body-style":{padding:0,height:"100%"}},on:{close:t.hideView}},[s("flexbox",{staticClass:"t-section"},[s("img",{staticClass:"t-img",attrs:{src:t.crmIcon}}),t._v(" "),s("div",{staticClass:"t-name"},[t._v("跟进记录")])]),t._v(" "),s("div",{staticClass:"t-content"},[s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getList,expression:"getList"}],key:t.scrollKey,attrs:{"infinite-scroll-disabled":"scrollDisabled","infinite-scroll-distance":"100"}},t._l(t.list,function(e,i){return s("log-cell",{key:i,attrs:{item:e,index:i,"can-delete":!1},on:{"crm-detail":t.checkRelationDetail}},[s("div",{staticClass:"relate-cell",on:{click:function(s){t.checkRelationDetail(e.activity_type,e.activity_type_id,!0)}}},[s("i",{staticClass:"relate-cell-icon",class:t._f("crmIconClass")(e.activity_type)}),t._v(" "),s("span",{staticClass:"relate-cell-type"},[t._v(t._s(t._f("crmName")(e.activity_type))+"-")]),t._v(" "),s("span",{staticClass:"relate-cell-name"},[t._v(t._s(e.activity_type_name))])])])})),t._v(" "),t.loading?s("p",{staticClass:"scroll-bottom-tips"},[t._v("加载中...")]):t._e(),t._v(" "),t.noMore?s("p",{staticClass:"scroll-bottom-tips"},[t._v("没有更多了")]):t._e()]),t._v(" "),s("c-r-m-full-screen-detail",{attrs:{visible:t.showFullDetail,"crm-type":t.relationCrmType,id:t.relationID},on:{"update:visible":function(e){t.showFullDetail=e}}})],1)},[],!1,null,"61efccb4",null);m.options.__file="RecordList.vue";var y=m.exports,f=s("L2JU"),v=s("4peS"),w=s.n(v),_=s("dAOq"),g={name:"ReportList",components:{CRMAllDetail:c.a,RecordList:y},filters:{dealIcon:function(t){return"已成交"==t?"wk wk-success deal-suc":"wk wk-close deal-un"},dealName:function(t){return"已成交"==t?"已成交":"未成交"}},mixins:[_.a],props:{show:{type:Boolean,default:!1},title:String,placeholder:{type:String,default:"请输入搜索内容"},crmType:String,fieldList:Array,recordRequest:Function,request:Function,params:Object,paging:{type:Boolean,default:!0},sortable:{type:[Boolean,String],default:!1}},data:function(){return{inputContent:"",loading:!1,tableHeight:this.getTableHeight(),list:[],showFieldList:[],sortData:{},currentPage:1,pageSize:w.a.get("crmPageSizes")||15,pageSizes:[15,30,60,100],total:0,rowID:"",rowType:"",showDview:!1,recordParams:{},recordShow:!1}},computed:r()({},Object(f.b)(["crm"]),{showExamineStatus:function(){return"contract"==this.crmType&&"receivables"==this.crmType},showFillColumn:function(){return!this.fieldList||!this.fieldList.length}}),watch:{show:function(t){t&&this.initInfo()}},mounted:function(){this.$el.addEventListener("click",this.handleDocumentClick,!1)},destroyed:function(){this.$el&&this.$el.removeEventListener("click",this.handleDocumentClick,!1)},methods:{getTableHeight:function(){var t=document.documentElement.clientHeight;return t-.2*t-200},initInfo:function(){var t=this;this.inputContent="",this.showFieldList=[],this.sortData={},this.$nextTick(function(){t.$refs.crmTable.clearSort()}),this.list=[],this.currentPage=1,window.onresize=function(){t.tableHeight=t.getTableHeight()},this.fieldList?(this.showFieldList=this.fieldList,this.getList()):this.getFieldList()},searchInput:function(){this.currentPage=1,this.getList()},getList:function(){var t=this;this.loading=!0;var e={};e={page:this.currentPage,limit:this.pageSize,types:"crm_"+this.crmType=="crm_record"?"crm_activity":"crm_"+this.crmType},this.placeholder&&(e.search=this.inputContent),this.sortData.order&&(e.order_field={create_user_name:"create_user_id",owner_user_name:"owner_user_id",customer_name:"customer_id",type_id_info:"type_id",status_id_info:"status_id",business_name:"business_id",contacts_name:"contacts_id",order_user_name:"order_user_id",category_name:"category_id",contract_num:"contract_id",contract_number:"contract_id",plan_id_info:"plan_id"}[this.sortData.prop]||this.sortData.prop,e.order_type="ascending"==this.sortData.order?"asc":"desc"),this.request(r()({},e,this.params,a()({},"record"!=this.crmType&&"log_type",{customer:1,business:2,receivables:4,contract:3}[this.crmType]))).then(function(e){t.paging?(t.list=e.data.list,t.total=e.data.dataCount):t.list=e.data,t.loading=!1}).catch(function(){t.loading=!1})},getFieldList:function(){var t=this;if(0==this.showFieldList.length){this.loading=!0;var e="business_status"==this.crmType?"business":this.crmType,s={types:"crm_record"==l.a[e]?"crm_activity":l.a[e],module:"crm",action:"index",controller:this.crmType};Object(o.A)(s).then(function(e){for(var s=0;s<e.data.length;s++){var i=e.data[s],a=0;a=i.width?i.width:i.name&&i.name.length<=6?15*i.name.length+45:140,t.showFieldList.push({prop:i.fieldName||i.field,label:i.name,width:a})}t.getList()}).catch(function(){t.loading=!1})}else this.getList()},fieldFormatter:function(t,e){return this.fieldList&&this.fieldList.length&&"types"==e.property?{crm_leads:"线索",crm_customer:"客户",crm_contacts:"联系人",crm_product:"产品",crm_business:"商机",crm_contract:"合同",crm_receivables:"回款",crm_receivables_plan:"回款计划",crm_pool:"公海",crm_visit:"回访",crm_invoice:"发票"}[t[e.property]]:""===t[e.property]||null===t[e.property]?"--":t[e.property]},sortChange:function(t,e,s){this.sortData=t,this.getList()},handleSizeChange:function(t){w.a.set("crmPageSizes",t),this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},handleRowClick:function(t,e,s){"leads"===this.crmType?"name"===e.property?(this.rowID=t.leads_id,this.showDview=!0):this.showDview=!1:"customer"===this.crmType?"name"===e.property?(this.rowID=t.customer_id,this.rowType="customer",this.showDview=!0):this.showDview=!1:"contacts"===this.crmType?"name"===e.property?(this.rowID=t.contacts_id,this.rowType="contacts",this.showDview=!0):"customer_name"===e.property?(this.rowID=t.customer_id,this.rowType="customer",this.showDview=!0):this.showDview=!1:"business"===this.crmType||"business_status"===this.crmType?"customer_name"===e.property?(this.rowID=t.customer_id,this.rowType="customer",this.showDview=!0):"name"===e.property?(this.rowID=t.business_id,this.rowType="business",this.showDview=!0):this.showDview=!1:"contract"===this.crmType?"name"===e.property?(this.rowID=t.contract_id,this.rowType="contract",this.showDview=!0):"customer_name"===e.property?(this.rowID=t.customer_id,this.rowType="customer",this.showDview=!0):"business_name"===e.property?(this.rowID=t.business_id,this.rowType="business",this.showDview=!0):"contacts_name"===e.property?(this.rowID=t.contacts_id,this.rowType="contacts",this.showDview=!0):"num"===e.property||"name"===e.property?(this.rowID=t.contract_id,this.rowType="contract",this.showDview=!0):this.showDview=!1:"product"===this.crmType?"name"===e.property?(this.rowID=t.product_id,this.showDview=!0):this.showDview=!1:"receivables"===this.crmType?"customer_name"===e.property?(this.rowID=t.customer_id,this.rowType="customer",this.showDview=!0):"contract_num"===e.property?(this.rowID=t.contract_id,this.rowType="contract",this.showDview=!0):"number"===e.property?(this.rowID=t.receivables_id,this.rowType="receivables",this.showDview=!0):this.showDview=!1:"activity"!==this.crmType&&"record"!==this.crmType||("dataCount"===e.property&&t.dataCount?(this.rowType=t.types,this.recordParams=r()({crmType:t.types,queryType:0},this.params),this.recordShow=!0):this.recordShow=!1)},handleHandle:function(t){"alloc"!==t.type&&"get"!==t.type&&"transfer"!==t.type&&"transform"!==t.type&&"delete"!==t.type&&"put_seas"!==t.type||(this.showDview=!1),"edit"!==t.type&&this.getList()},cellClassName:function(t){var e=t.row,s=t.column;t.rowIndex,t.columnIndex;return this.crmType&&("customer_name"===s.property||"business_name"===s.property||"name"===s.property||"contacts_name"===s.property||"num"===s.property||"contract_num"===s.property||"number"===s.property||("activity"===this.crmType||"record"===this.crmType)&&"dataCount"===s.property&&e.dataCount)?"can-visit--underline":""},hideView:function(){this.$emit("update:show",!1),this.$emit("hide")},handleDocumentClick:function(t){var e=!0,s=document.getElementsByClassName("el-table__row");if(s&&e)for(var i=0;i<s.length;i++){if(s[i].contains(t.target)){e=!1;break}}document.getElementById("slide")&&document.getElementById("slide").contains(t.target)&&(e=!1),e&&(this.showDview=!1)}}},b=(s("9/Sb"),Object(d.a)(g,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{visible:t.show,"append-to-body":!0,"close-on-click-modal":!1,top:"10vh",width:"80%","custom-class":"no-padding-dialog"},on:{close:t.hideView}},[s("div",{staticClass:"header",attrs:{slot:"title"},on:{click:function(e){t.showDview=!1}},slot:"title"},[s("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t.placeholder?s("el-input",{staticClass:"search-input",attrs:{placeholder:t.placeholder},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchInput(e):null}},model:{value:t.inputContent,callback:function(e){t.inputContent=e},expression:"inputContent"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.searchInput(e)}},slot:"append"})],1):t._e()],1),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("div",{staticClass:"list-body"},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"crmTable",staticStyle:{width:"100%"},attrs:{id:"crm-table",data:t.list,height:t.tableHeight,"cell-class-name":t.cellClassName,stripe:"",border:"","highlight-current-row":""},on:{"row-click":t.handleRowClick,"sort-change":t.sortChange}},[t._l(t.showFieldList,function(e,i){return s("el-table-column",{key:i,attrs:{sortable:"pool_day"!=e.prop&&"custom",fixed:0==i,prop:e.prop,label:e.label,width:e.width,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(i){return["deal_status"==e.prop?[s("i",{class:t._f("dealIcon")(i.row[e.prop])}),t._v(" "),s("span",[t._v(t._s(t._f("dealName")(i.row[e.prop])))])]:"is_lock"==e.prop?[1==i.row.is_lock?s("i",{staticClass:"wk wk-circle-password customer-lock"}):t._e()]:"check_status"==e.prop?[s("span",{staticClass:"status-mark",style:{backgroundColor:t.getCRMStatusColor(i.row.check_status)}}),t._v(" "),s("span",[t._v(t._s(t.getCRMStatusName(i.row.check_status)))])]:[t._v(t._s(t.fieldFormatter(i.row,i.column)))]]}}])})}),t._v(" "),t.showFillColumn?s("el-table-column"):t._e()],2),t._v(" "),t.paging?s("div",{staticClass:"p-contianer"},[s("el-pagination",{staticClass:"p-bar",attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,total:t.total,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()],1)]),t._v(" "),s("c-r-m-all-detail",{staticClass:"d-view",attrs:{visible:t.showDview,"crm-type":t.rowType,id:t.rowID},on:{"update:visible":function(e){t.showDview=e},handle:t.handleHandle}}),t._v(" "),t.recordShow?s("record-list",{attrs:{"crm-type":t.rowType,request:t.recordRequest,params:t.recordParams},on:{handle:t.getList,hide:function(e){t.recordShow=!1}}}):t._e()],1)])},[],!1,null,"2f119125",null));b.options.__file="index.vue";e.a=b.exports},PGJe:function(t,e,s){"use strict";var i=s("WZyy");s.n(i).a},Rw0F:function(t,e,s){"use strict";s.r(e);var i=s("QbLZ"),a=s.n(i),n=s("74lk"),r=s("d9x6"),o=s("KmSi"),l=s("31UX"),c={name:"ProductStatistics",components:{ReportList:o.a},mixins:[l.a],data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-220,currentPage:1,pageSize:15,pageSizes:[15,30,60,100],total:0,postParams:{},headFieldList:[{field:"category_id_info",name:"产品分类",width:"115px"},{field:"product_name",name:"产品名称",width:"115px"},{field:"contract_product_sum",name:"合同数",width:"115px"},{field:"product_sum",name:"数量合计",width:"115px"},{field:"contract_money",name:"订单产品小计",width:"115px"}],list:[],extraData:{contract_product_sum:0,product_sum:0,contract_money:0},reportListShow:!1,reportData:{title:"",placeholder:"",request:null,params:null}}},computed:{},mounted:function(){var t=this;window.onresize=function(){var e=document.documentElement.clientHeight;t.tableHeight=e-220}},methods:{cellClassName:function(t){t.row;var e=t.column;t.rowIndex,t.columnIndex;return"contract_product_sum"===e.property?"can-visit--underline":""},handleSizeChange:function(t){this.pageSize=t,this.getProductDatalist()},handleCurrentChange:function(t){this.currentPage=t,this.getProductDatalist()},handleRowClick:function(t,e,s){if("contract_product_sum"===e.property){this.reportData.title=e.label+"详情",this.reportData.request=r.j,this.reportData.placeholder="请输入客户名称/合同编号/合同名称";var i=a()({},this.postParams,{product_id:t.product_id});this.reportData.params=i,this.reportListShow=!0}},getProductDatalist:function(t){var e=this;t&&(this.postParams=t),this.loading=!0,Object(n.d)(a()({},this.postParams,{page:this.currentPage,limit:this.pageSize})).then(function(t){var s=t.data||{};e.list=s.list||[],e.extraData=s.total||{extraData:0,product_sum:0,contract_money:0},e.total=s.count,e.loading=!1}).catch(function(){e.loading=!1})},getSummaries:function(t){var e=this;return this.$nextTick(function(){e.$refs.tableRef.doLayout()}),["合计","",this.extraData.contract_product_sum,this.extraData.product_sum,this.extraData.contract_money]},exportClick:function(){this.requestExportInfo(n.e,this.postParams,"statistics")}}},u=(s("BFc5"),s("KHd+")),h=Object(u.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[s("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{title:"产品销售情况统计","module-type":"product"},on:{load:function(e){t.loading=!0},change:t.getProductDatalist}},[s("el-button",{staticClass:"export-button",attrs:{type:"primary"},nativeOn:{click:function(e){return t.exportClick(e)}}},[t._v("导出")])],1),t._v(" "),s("div",{staticClass:"content"},[s("el-table",{ref:"tableRef",attrs:{id:"crm-table",data:t.list,height:t.tableHeight,"cell-class-name":t.cellClassName,"summary-method":t.getSummaries,"show-summary":"",border:""},on:{"row-click":t.handleRowClick}},t._l(t.headFieldList,function(t,e){return s("el-table-column",{key:e,attrs:{prop:t.field,label:t.name,align:"center","header-align":"center","show-overflow-tooltip":""}})})),t._v(" "),s("div",{staticClass:"p-contianer"},[s("el-pagination",{staticClass:"p-bar",attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,total:t.total,"pager-count":5,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),s("report-list",{attrs:{show:t.reportListShow,title:t.reportData.title,placeholder:t.reportData.placeholder,request:t.reportData.request,params:t.reportData.params,"crm-type":"contract"},on:{"update:show":function(e){t.reportListShow=e}}})],1)},[],!1,null,"1bba4874",null);h.options.__file="ProductStatistics.vue";e.default=h.exports},WZyy:function(t,e,s){},YzRf:function(t,e,s){"use strict";var i=s("1q41");s.n(i).a},ZX9L:function(t,e,s){"use strict";var i={name:"TimeTypeSelect",props:{defaultType:[String,Object],width:{type:Number,default:200},options:{type:Array,default:function(){return[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:""}},computed:{typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},watch:{defaultType:function(){this.selectType.value!=this.defaultType&&(this.selectType=this.getDefaultTypeValue(this.defaultType))}},mounted:function(){void 0!==this.defaultType?"string"==typeof this.defaultType?this.selectType=this.getDefaultTypeValue(this.defaultType):this.defaultType.label?this.selectType=this.defaultType:"default"==this.defaultType.type?this.selectType=this.getDefaultTypeValue(this.defaultType.value):"custom"==this.defaultType.type&&(this.sureCustomContent=!0,this.showCustomContent=!0,this.startTime=this.defaultType.startTime,this.endTime=this.defaultType.endTime):this.$emit("change",{type:"default",value:this.selectType.value})},methods:{getDefaultTypeValue:function(t){for(var e=0;e<this.options.length;e++){var s=this.options[e];if(s.value==t)return s}return{label:"本年",value:"year"}},typeSelectClick:function(t){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=t,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},a=(s("77fj"),s("KHd+")),n=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-popover",{staticClass:"time-type-select",attrs:{width:t.width,placement:"bottom","popper-class":"no-padding-popover",trigger:"click"},model:{value:t.showTypePopover,callback:function(e){t.showTypePopover=e},expression:"showTypePopover"}},[s("div",{staticClass:"type-popper"},[s("div",{staticClass:"type-content"},[t._l(t.options,function(e,i){return s("div",{key:i,staticClass:"type-content-item",class:{selected:t.selectType.value==e.value&&!t.showCustomContent},on:{click:function(s){t.typeSelectClick(e)}}},[s("div",{staticClass:"mark"}),t._v(t._s(e.label)+"\n      ")])}),t._v(" "),s("div",{staticClass:"type-content-item",class:{selected:t.showCustomContent},on:{click:function(e){t.showCustomContent=!0}}},[s("div",{staticClass:"mark"}),t._v("自定义\n      ")])],2),t._v(" "),t.showCustomContent?s("div",{staticClass:"type-content-custom"},[s("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" "),s("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}}),t._v(" "),s("el-button",{on:{click:t.customSureClick}},[t._v("确定")])],1):t._e()]),t._v(" "),s("el-input",{staticClass:"type-select",style:{width:t.width+"px"},attrs:{slot:"reference",readonly:!0},slot:"reference",model:{value:t.typeShowValue,callback:function(e){t.typeShowValue=e},expression:"typeShowValue"}},[s("i",{class:["el-icon-arrow-up",{"is-reverse":t.showTypePopover}],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"20503202",null);n.options.__file="index.vue";e.a=n.exports},gofZ:function(t,e,s){},m1cH:function(t,e,s){"use strict";e.__esModule=!0;var i,a=s("rfXi"),n=(i=a)&&i.__esModule?i:{default:i};e.default=function(t){if(Array.isArray(t)){for(var e=0,s=Array(t.length);e<t.length;e++)s[e]=t[e];return s}return(0,n.default)(t)}}}]);