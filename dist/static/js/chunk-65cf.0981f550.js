(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-65cf"],{"4p7F":function(e,t,n){},"77fj":function(e,t,n){"use strict";var a=n("Btlj");n.n(a).a},BIJd:function(e,t,n){},Btlj:function(e,t,n){},IJQj:function(e,t,n){"use strict";var a=n("BIJd");n.n(a).a},JR57:function(e,t,n){"use strict";var a=n("qJF7");n.n(a).a},YSp2:function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"g",function(){return i}),n.d(t,"h",function(){return l}),n.d(t,"k",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"i",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return h}),n.d(t,"c",function(){return m}),n.d(t,"o",function(){return f}),n.d(t,"n",function(){return y}),n.d(t,"m",function(){return b}),n.d(t,"l",function(){return v}),n.d(t,"a",function(){return T}),n.d(t,"b",function(){return C});var a=n("GQeE"),s=n.n(a),o=n("t3Un");function r(e){return Object(o.a)({url:"admin/structures/delete",method:"post",data:e})}function i(e){return Object(o.a)({url:"admin/structures/update",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function l(e){return Object(o.a)({url:"admin/structures/save",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function c(e){return Object(o.a)({url:"admin/users/update",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function u(e){return Object(o.a)({url:"admin/users/save",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function d(e){return Object(o.a)({url:"admin/groups/index",method:"post",data:e})}function p(e){return Object(o.a)({url:"admin/users/updatePwd",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function h(e){return Object(o.a)({url:"admin/users/usernameEdit",method:"post",data:e})}function m(e){return Object(o.a)({url:"adminUser/usernameEditByManager",method:"post",data:e})}function f(e){return Object(o.a)({url:"admin/users/enables",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function y(e){return Object(o.a)({url:"admin/users/excelDownload",method:"get",data:e,responseType:"blob"})}function b(e){var t=new FormData;return s()(e).forEach(function(n){t.append(n,e[n])}),Object(o.a)({url:"admin/users/import",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"},timeout:6e4})}function v(e){return Object(o.a)({url:"admin/file/download",method:"post",data:e,responseType:"blob"})}function T(){return Object(o.a)({url:"admin/users/countNumOfUser",method:"post"})}function C(e){return Object(o.a)({url:"admin/users/setUserDept",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}},ZX9L:function(e,t,n){"use strict";var a={name:"TimeTypeSelect",props:{defaultType:[String,Object],width:{type:Number,default:200},options:{type:Array,default:function(){return[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:""}},computed:{typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},watch:{defaultType:function(){this.selectType.value!=this.defaultType&&(this.selectType=this.getDefaultTypeValue(this.defaultType))}},mounted:function(){void 0!==this.defaultType?"string"==typeof this.defaultType?this.selectType=this.getDefaultTypeValue(this.defaultType):this.defaultType.label?this.selectType=this.defaultType:"default"==this.defaultType.type?this.selectType=this.getDefaultTypeValue(this.defaultType.value):"custom"==this.defaultType.type&&(this.sureCustomContent=!0,this.showCustomContent=!0,this.startTime=this.defaultType.startTime,this.endTime=this.defaultType.endTime):this.$emit("change",{type:"default",value:this.selectType.value})},methods:{getDefaultTypeValue:function(e){for(var t=0;t<this.options.length;t++){var n=this.options[t];if(n.value==e)return n}return{label:"本年",value:"year"}},typeSelectClick:function(e){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=e,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},s=(n("77fj"),n("KHd+")),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-popover",{staticClass:"time-type-select",attrs:{width:e.width,placement:"bottom","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showTypePopover,callback:function(t){e.showTypePopover=t},expression:"showTypePopover"}},[n("div",{staticClass:"type-popper"},[n("div",{staticClass:"type-content"},[e._l(e.options,function(t,a){return n("div",{key:a,staticClass:"type-content-item",class:{selected:e.selectType.value==t.value&&!e.showCustomContent},on:{click:function(n){e.typeSelectClick(t)}}},[n("div",{staticClass:"mark"}),e._v(e._s(t.label)+"\n      ")])}),e._v(" "),n("div",{staticClass:"type-content-item",class:{selected:e.showCustomContent},on:{click:function(t){e.showCustomContent=!0}}},[n("div",{staticClass:"mark"}),e._v("自定义\n      ")])],2),e._v(" "),e.showCustomContent?n("div",{staticClass:"type-content-custom"},[n("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),n("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}),e._v(" "),n("el-button",{on:{click:e.customSureClick}},[e._v("确定")])],1):e._e()]),e._v(" "),n("el-input",{staticClass:"type-select",style:{width:e.width+"px"},attrs:{slot:"reference",readonly:!0},slot:"reference",model:{value:e.typeShowValue,callback:function(t){e.typeShowValue=t},expression:"typeShowValue"}},[n("i",{class:["el-icon-arrow-up",{"is-reverse":e.showTypePopover}],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"20503202",null);o.options.__file="index.vue";t.a=o.exports},"ej9+":function(e,t,n){"use strict";var a={name:"BaseTabsHead",components:{},props:{selectValue:[String,Number],tabs:Array},data:function(){return{currentValue:""}},computed:{},watch:{selectValue:function(){this.currentValue=this.selectValue}},mounted:function(){this.currentValue=this.selectValue},beforeDestroy:function(){},methods:{handleTabsClick:function(e,t){this.$emit("update:selectValue",e.name),this.$emit("change",e.name)}}},s=(n("kr3W"),n("KHd+")),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("flexbox",{staticClass:"base-tabs-head",attrs:{justify:"space-between"}},[n("div",[e._t("left")],2),e._v(" "),n("el-tabs",{on:{"tab-click":e.handleTabsClick},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.tabs,function(e,t){return n("el-tab-pane",{key:t+e.name,attrs:{label:e.label,name:e.name}})})),e._v(" "),n("div",[e._t("right")],2)],1)},[],!1,null,"fa74c14a",null);o.options.__file="index.vue";t.a=o.exports},kZxc:function(e,t,n){"use strict";n.d(t,"p",function(){return s}),n.d(t,"q",function(){return o}),n.d(t,"s",function(){return r}),n.d(t,"f",function(){return i}),n.d(t,"r",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"o",function(){return d}),n.d(t,"h",function(){return p}),n.d(t,"e",function(){return h}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return f}),n.d(t,"g",function(){return y}),n.d(t,"j",function(){return b}),n.d(t,"i",function(){return v}),n.d(t,"k",function(){return T}),n.d(t,"m",function(){return C}),n.d(t,"n",function(){return g}),n.d(t,"l",function(){return _});var a=n("t3Un");function s(e){return Object(a.a)({url:"crm/index/index",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function o(e){return Object(a.a)({url:"oa/log/oneBulletin",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function r(e){return Object(a.a)({url:"crm/index/queryDataInfo",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function i(e){return Object(a.a)({url:"crm/index/indexList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function l(e){return Object(a.a)({url:"crm/index/indexList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function c(e){return Object(a.a)({url:"crm/index/achievementData",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function u(e){return Object(a.a)({url:"crm/index/funnel",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function d(e){return Object(a.a)({url:"crmInstrument/sellFunnelBusinessList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function p(e){return Object(a.a)({url:"crm/index/saletrend",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function h(e){return Object(a.a)({url:"crm/index/activityList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function m(e){return Object(a.a)({url:"crm/index/forgottenCustomerCount",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function f(e){return Object(a.a)({url:"crm/index/forgottenCustomerPageList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function y(e){return Object(a.a)({url:"crm/index/ranking",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function b(e){return Object(a.a)({url:"crm/index/dashboard",method:"post",data:e})}function v(e){return Object(a.a)({url:"crm/index/updateDashboard",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function T(e){return Object(a.a)({url:"crm/index/forgottenCustomerPageList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function C(e){return Object(a.a)({url:"",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function g(e){return Object(a.a)({url:"",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function _(e){return Object(a.a)({url:"",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}},kr3W:function(e,t,n){"use strict";var a=n("4p7F");n.n(a).a},m1cH:function(e,t,n){"use strict";t.__esModule=!0;var a,s=n("rfXi"),o=(a=s)&&a.__esModule?a:{default:a};t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,o.default)(e)}},qJF7:function(e,t,n){},z6WW:function(e,t,n){"use strict";n.r(t);var a=n("4d7F"),s=n.n(a),o=n("QbLZ"),r=n.n(o),i=n("kZxc"),l=n("YSp2"),c={name:"RecordTabHead",components:{BaseTabsHead:n("ej9+").a},props:{count:{type:[String,Number],default:0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{}},u=(n("JR57"),n("KHd+")),d=Object(u.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("base-tabs-head",this._g(this._b({staticClass:"Task-tabs-head"},"base-tabs-head",this.$attrs,!1),this.$listeners),[t("span",{staticClass:"title",attrs:{slot:"left"},slot:"left"},[t("i",{staticClass:"wk wk-message"}),this._v("跟进记录（"+this._s(this.count)+"）\n  ")])])},[],!1,null,"62ff7c06",null);d.options.__file="RecordTabHead.vue";var p=d.exports,h=n("HHBN"),m=n("ZX9L"),f=n("O8VQ"),y=n("/G0b"),b=n("ZoMv"),v=n("7Qib"),T=n("L2JU"),C={name:"FollowIndex",components:{RecordTabHead:p,XhUserCell:h.a,TimeTypeSelect:m.a,LogCell:f.a,LogEditDialog:y.a,CRMFullScreenDetail:function(){return Promise.all([n.e("chunk-c59b"),n.e("chunk-9aa7"),n.e("chunk-5c00"),n.e("chunk-6882"),n.e("chunk-6c38")]).then(n.bind(null,"3z7q"))}},filters:{crmIconClass:function(e){return"wk wk-"+b.a.convertTypeToKey(e)},crmName:function(e){return b.a.convertTypeToName(e)}},props:{},data:function(){return{tabsSelectValue:"all",tabs:[{label:"全部",name:"all"},{label:"我创建的",name:"0"},{label:"我下属创建的",name:"1"}],options:[{label:"全部",value:""},{label:"线索",value:1},{label:"客户",value:2},{label:"联系人",value:3},{label:"商机",value:5},{label:"合同",value:6}],count:0,filterForm:{crmType:"",isUser:1,user_id:"",subUser:"",queryType:0},timeSelect:{type:"default",value:"month"},list:[],loading:!1,noMore:!1,page:1,scrollKey:Date.now(),showFullDetail:!1,relationID:"",relationCrmType:"",logEditData:null,logEditPosition:{seciton:0,index:0},logEditDialogVisible:!1,requestParams:{}}},computed:r()({},Object(T.b)(["crm"]),{followRecordAuth:function(){return this.crm.followRecord},moreTypes:function(){return[]},scrollDisabled:function(){return this.loading||this.noMore},userSelectShow:function(){return"0"!==this.filterForm.subUser}}),watch:{filterForm:{handler:function(){this.refreshList()},deep:!0}},mounted:function(){},created:function(){var e=this;this.$bus.on("import-crm-done-bus",function(t){"crmFollowLog"===t&&e.refreshList()})},beforeDestroy:function(){this.$bus.off("import-crm-done-bus")},methods:{tabsChange:function(e){this.filterForm.subUser="all"===e?"":e},refreshList:function(){this.page=1,this.list=[],this.noMore=!1,this.scrollKey=Date.now()},getList:function(){var e=this;this.loading=!0;var t={page:this.page,limit:15,isUser:1,queryType:0,label:0};this.timeSelect.type&&("custom"===this.timeSelect.type?(t.start_time=this.timeSelect.startTime.replace(/\./g,"-"),t.end_time=this.timeSelect.endTime.replace(/\./g,"-")):t.type=this.timeSelect.value||""),this.userSelectShow?t=r()({},t,this.filterForm):(t.label=this.filterForm.crmType,t.subUser=this.filterForm.subUser,t.dataType=this.filterForm.queryType,t.search=this.filterForm.search),this.requestParams=t,Object(i.e)(t).then(function(n){e.loading=!1,e.filterForm.subUser!=t.subUser?e.refreshList():(e.noMore||(e.list=e.list.concat(n.data.list||[]),e.page++),e.count=n.data.dataCount||0,e.noMore=n.data.lastPage)}).catch(function(){e.noMore=!0,e.loading=!1})},checkRelationDetail:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.relationID=t,this.relationCrmType=n?b.a.convertTypeToKey(e):e,this.showFullDetail=!0},userChange:function(e){this.filterForm.user_id=e.value.length>0?e.value[0].id:""},timeTypeChange:function(e){this.timeSelect=e,this.refreshList()},detailHandle:function(e){"delete"==e.type&&this.refreshList()},logCellDelete:function(e,t,n){this.list.splice(t,1),this.scrollKey=Date.now()},logCellEdit:function(e,t,n){this.logEditData=e,this.logEditPosition={seciton:n,index:t},this.logEditDialogVisible=!0},logEditSave:function(e){this.logEditPosition.index>=0&&this.list.splice(this.logEditPosition.index,1,e)},handleTypeDrop:function(e){var t=this;if(this.requestParams.label){if("out"==e)Object(i.m)(this.requestParams).then(function(e){Object(v.c)(e)}).catch(function(){});else if("enter"==e){var n=this.options.find(function(e){return e.value===t.requestParams.label});this.$bus.emit("import-crm-bus","crmFollowLog",{typeName:n.label+"跟进记录",ownerSelectShow:!1,repeatHandleShow:!1,historyShow:!1,noImportProcess:!0,importRequest:i.n,importParams:{crmType:this.requestParams.label},templateRequest:i.l,templateParams:{crmType:this.requestParams.label},downloadErrFuc:this.getImportError})}}else this.$message.error("请先选择一个模块导入/导出")},getImportError:function(e){return new s.a(function(t,n){Object(l.l)({token:e.token}).then(function(e){t(e)}).catch(function(){n()})})}}},g=(n("IJQj"),Object(u.a)(C,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("record-tab-head",{attrs:{tabs:e.tabs,count:e.count,"select-value":e.tabsSelectValue},on:{"update:selectValue":function(t){e.tabsSelectValue=t},change:e.tabsChange}}),e._v(" "),n("flexbox",{staticClass:"filter-control card"},[n("el-input",{attrs:{placeholder:"关键字搜索","prefix-icon":"el-icon-search"},model:{value:e.filterForm.search,callback:function(t){e.$set(e.filterForm,"search",t)},expression:"filterForm.search"}}),e._v(" "),e.userSelectShow?n("xh-user-cell",{staticClass:"xh-user-cell",attrs:{radio:"",placeholder:"选择人员"},on:{"value-change":e.userChange}}):e._e(),e._v(" "),n("time-type-select",{attrs:{width:190,"default-type":e.timeSelect.value},on:{change:e.timeTypeChange}}),e._v(" "),n("el-select",{attrs:{placeholder:"选择"},model:{value:e.filterForm.crmType,callback:function(t){e.$set(e.filterForm,"crmType",t)},expression:"filterForm.crmType"}},e._l(e.options,function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),e._v(" "),n("el-select",{attrs:{placeholder:"选择"},model:{value:e.filterForm.queryType,callback:function(t){e.$set(e.filterForm,"queryType",t)},expression:"filterForm.queryType"}},e._l([{label:"全部",value:0},{label:"跟进记录",value:1},{label:"外勤签到",value:4}],function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),e._v(" "),e.moreTypes.length>0?n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleTypeDrop}},[n("el-button",{attrs:{icon:"el-icon-more"}}),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.moreTypes,function(t,a){return n("el-dropdown-item",{key:a,attrs:{icon:t.icon,command:t.type}},[e._v(e._s(t.name))])}))],1):e._e()],1),e._v(" "),n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.getList,expression:"getList"}],key:""+e.scrollKey+e.tabsSelectValue,staticClass:"cell-section",attrs:{"infinite-scroll-distance":"100","infinite-scroll-disabled":"scrollDisabled"}},[e._l(e.list,function(t,a){return n("log-cell",{key:a,staticClass:"log-cell",attrs:{item:t,index:a},on:{"crm-detail":e.checkRelationDetail,delete:e.logCellDelete,edit:e.logCellEdit}},[n("div",{staticClass:"relate-cell",on:{click:function(n){e.checkRelationDetail(t.activity_type,t.activity_type_id,!0)}}},[n("i",{staticClass:"relate-cell-icon",class:e._f("crmIconClass")(t.activity_type)}),e._v(" "),n("span",{staticClass:"relate-cell-type"},[e._v(e._s(e._f("crmName")(t.activity_type))+"-")]),e._v(" "),n("span",{staticClass:"relate-cell-name"},[e._v(e._s(t.activity_type_name))])])])}),e._v(" "),e.loading?n("p",{staticClass:"scroll-bottom-tips"},[e._v("加载中...")]):e._e(),e._v(" "),e.noMore?n("p",{staticClass:"scroll-bottom-tips"},[e._v("没有更多了")]):e._e()],2),e._v(" "),n("c-r-m-full-screen-detail",{attrs:{visible:e.showFullDetail,"crm-type":e.relationCrmType,id:e.relationID},on:{"update:visible":function(t){e.showFullDetail=t},handle:e.detailHandle}}),e._v(" "),n("log-edit-dialog",{attrs:{visible:e.logEditDialogVisible,data:e.logEditData},on:{"update:visible":function(t){e.logEditDialogVisible=t},save:e.logEditSave}})],1)},[],!1,null,"15fdbeb4",null));g.options.__file="FollowIndex.vue";t.default=g.exports}}]);