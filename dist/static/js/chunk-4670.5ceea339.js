(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4670"],{"2f65":function(e,t,a){},"6Chi":function(e,t,a){"use strict";t.a={data:function(){return{modelOptions:[{label:"客户管理",value:"crm",list:[{label:"线索",value:"crm_leads"},{label:"客户",value:"crm_customer"},{label:"联系人",value:"crm_contacts"},{label:"商机",value:"crm_business"},{label:"合同",value:"crm_contract"},{label:"回款",value:"crm_receivables"},{label:"发票",value:"crm_invoice"},{label:"回访",value:"crm_visit"},{label:"产品",value:"crm_product"}]},{label:"办公管理",value:"oa",list:[{label:"日历",value:"oa_event"},{label:"日志",value:"oa_log"}]},{label:"项目管理",value:"work",list:[{label:"项目",value:"work"},{label:"任务",value:"work_task"}]}],sysOptions:[{label:"企业首页",value:"company"},{label:"应用管理",value:"application"},{label:"员工管理",value:"employee"},{label:"部门管理",value:"structures"},{label:"角色管理",value:"role"},{label:"项目管理",value:"project"},{label:"客户管理",value:"customer"},{label:"其他设置",value:"work_task"}],fieldList:[{prop:"user_name",label:"用户",width:100},{prop:"create_time",label:"时间",width:150},{prop:"ip",label:"IP地址",width:100},{prop:"action",label:"模块",width:150},{prop:"action_name",label:"行为",width:150},{prop:"source_name",label:"对象",width:150},{prop:"content",label:"操作详情",width:100}]}},methods:{getModelName:function(e){return{crm:"客户管理",oa:"办公管理",work:"项目管理",hrm:"人力资源",jxc:"进销存",admin:"系统管理"}[e]}}}},"7mY3":function(e,t,a){"use strict";var n=a("2f65");a.n(n).a},"9GgJ":function(e,t,a){"use strict";var n={name:"XrHeader",components:{},props:{iconClass:[String,Array],iconColor:String,label:String,showSearch:{type:Boolean,default:!1},searchIconType:{type:String,default:"text"},placeholder:{type:String,default:"请输入内容"},ftTop:{type:String,default:"15px"},content:[String,Number],inputAttr:{type:Object,default:function(){}}},data:function(){return{search:""}},computed:{},watch:{content:{handler:function(){this.search!=this.content&&(this.search=this.content)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{inputChange:function(){this.$emit("update:content",this.search)},searchClick:function(){this.$emit("search",this.search)}}},l=(a("7mY3"),a("KHd+")),i=Object(l.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("flexbox",{staticClass:"xr-header"},[e.iconClass?a("div",{staticClass:"xr-header__icon",style:{backgroundColor:e.iconColor}},[a("i",{class:e.iconClass})]):e._e(),e._v(" "),a("div",{staticClass:"xr-header__label"},[e.$slots.label?e._t("label"):[e._v(e._s(e.label))]],2),e._v(" "),e.showSearch?a("el-input",e._b({staticClass:"xr-header__search",class:{"is-text":"text"===e.searchIconType},style:{"margin-top":e.ftTop},attrs:{placeholder:e.placeholder},on:{input:e.inputChange},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.searchClick(t):null}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},"el-input",e.inputAttr,!1),["text"===e.searchIconType?a("el-button",{attrs:{slot:"append",type:"primary"},nativeOn:{click:function(t){return e.searchClick(t)}},slot:"append"},[e._v("搜索")]):a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(t){return e.searchClick(t)}},slot:"append"})],1):e._e(),e._v(" "),a("div",{staticClass:"xr-header__ft",style:{top:e.ftTop}},[e._t("ft")],2)],1)},[],!1,null,"acb6d756",null);i.options.__file="index.vue";t.a=i.exports},VYvY:function(e,t,a){"use strict";a.r(t);var n=a("QbLZ"),l=a.n(n),i=a("ooIi"),s=a("9GgJ"),o=a("HHBN"),r=a("XJYT"),c=a("6Chi"),u=a("7Qib"),d={name:"SysHandleLog",components:{XrHeader:s.a,XhUserCell:o.a},mixins:[c.a],data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-240,dateTime:[],userList:[],subModelLabels:[],list:[],currentPage:1,pageSize:10,pageSizes:[10,20,30,40],total:0,postParams:{}}},computed:{},mounted:function(){window.onresize=function(){self.tableHeight=document.documentElement.clientHeight-240},this.getList()},methods:{userChange:function(e){this.userList=e.value||[]},refreshList:function(){this.currentPage=1,this.getList()},getList:function(){var e=this;this.loading=!0;var t={page:this.currentPage,limit:this.pageSize};this.userList&&this.userList.length&&(t.userIds=this.userList.map(function(e){return e.id})),this.dateTime&&this.dateTime.length&&(t.startTime=this.dateTime[0],t.endTime=this.dateTime[1]),t.subModelLabels=this.subModelLabels,this.postParams=t,Object(i.c)(t).then(function(t){var a=t.data.list;a.forEach(function(e){e.action=e.module}),e.list=a,e.total=t.data.count,e.loading=!1}).catch(function(){e.loading=!1})},exportClick:function(){var e=r.Loading.service({fullscreen:!0,text:"导出中..."});Object(i.d)(l()({},this.postParams,{action:"getSystemLogs"})).then(function(t){Object(u.c)(t),e.close()}).catch(function(){e.close()})},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()}}},p=(a("eCn6"),a("KHd+")),h=Object(p.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("xr-header",{attrs:{"icon-class":"wk wk-record","icon-color":"#2362FB",label:"系统操作日志"}}),e._v(" "),a("div",{staticClass:"main-body"},[a("flexbox",{staticClass:"main-table-header"},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}}),e._v(" "),a("xh-user-cell",{attrs:{radio:!1,placeholder:"选择人员"},on:{"value-change":e.userChange}}),e._v(" "),a("el-select",{staticStyle:{width:"200px"},attrs:{multiple:"","collapse-tags":""},model:{value:e.subModelLabels,callback:function(t){e.subModelLabels=t},expression:"subModelLabels"}},e._l(e.sysOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.refreshList}},[e._v("查询")]),e._v(" "),a("el-button",{staticClass:"main-table-header-button",on:{click:e.exportClick}},[e._v("导出")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-table",staticStyle:{width:"100%"},attrs:{data:e.list,height:e.tableHeight,"highlight-current-row":""}},[e._l(e.fieldList,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label,"show-overflow-tooltip":""}})}),e._v(" "),a("el-table-column")],2),e._v(" "),a("div",{staticClass:"p-contianer"},[a("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},[],!1,null,"30732b8a",null);h.options.__file="SysHandleLog.vue";t.default=h.exports},c1bF:function(e,t,a){},eCn6:function(e,t,a){"use strict";var n=a("c1bF");a.n(n).a},ooIi:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return s}),a.d(t,"d",function(){return o});var n=a("t3Un");function l(e){return Object(n.a)({url:"admin/log/loginRecord",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}function i(e){return Object(n.a)({url:"admin/log/systemRecord",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}function s(e){return Object(n.a)({url:"admin/log/dataRecord",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}function o(e){return Object(n.a)({url:"admin/log/excelImport",method:"post",data:e,responseType:"blob",headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:6e4})}}}]);