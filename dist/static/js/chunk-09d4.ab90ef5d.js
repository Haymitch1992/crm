(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-09d4"],{"/esw":function(t,e,a){"use strict";var s=a("Flj7"),i={name:"TaskCell",components:{},mixins:[a("kK4T").a],props:{data:Object,dataIndex:Number,dataSection:Number},data:function(){return{}},computed:{priority:function(){return 0!=this.data.priority&&this.data.priority?this.getPriorityColor(this.data.priority):this.priorityList[3]},showLabels:function(){return this.data.lableList.length>3?this.data.lableList.slice(0,3):this.data.lableList},hideShowLabels:function(){return this.data.lableList.length>3?this.data.lableList.slice(3):[]}},watch:{},mounted:function(){},methods:{taskOverClick:function(t){var e=this;Object(s.n)({task_id:t.task_id,status:t.checked?5:1}).then(function(t){e.$emit("on-handle","complete",e.data,e.dataIndex,e.dataSection)}).catch(function(){t.checked=!1})},rowFun:function(t){this.$emit("on-handle","view",this.data,this.dataIndex,this.dataSection)},onmouseoverFun:function(t){this.$refs.itemSpan.offsetWidth>this.$refs.listLeft.offsetWidth-21?this.$set(t,"show",!0):this.$set(t,"show",!1)}}},n=(a("O3SS"),a("KHd+")),l=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"taskRow",staticClass:"list task-cell",on:{click:function(e){t.rowFun(t.data)}}},[a("div",{ref:"listLeft",staticClass:"list-left"},[a("div",{class:t.data.checked?"title title-active":"title",on:{click:function(t){t.stopPropagation()}}},[a("el-checkbox",{on:{change:function(e){t.taskOverClick(t.data)}},model:{value:t.data.checked,callback:function(e){t.$set(t.data,"checked",e)},expression:"data.checked"}})],1),t._v(" "),a("span",{staticClass:"priority",style:{backgroundColor:t.priority.color}},[t._v(t._s(t.priority.label))]),t._v(" "),a("el-tooltip",{attrs:{placement:"bottom",effect:"light","popper-class":"task-tooltip tooltip-change-border"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("span",[t._v(t._s(t.data.task_name||t.data.name))])]),t._v(" "),a("span",{ref:"itemSpan",class:t.data.checked?"item-name-active":"item-name"},[t._v("\n        "+t._s(t.data.task_name||t.data.name)+"\n      ")])])],1),t._v(" "),a("div",{staticClass:"list-right"},[t.data.lableList&&t.data.lableList.length>0?a("div",{staticClass:"tag-box"},[t._l(t.showLabels,function(e,s){return a("span",{key:s,staticClass:"k-name",style:{background:e.color}},[t._v(t._s(e.name))])}),t._v(" "),t.hideShowLabels.length?a("el-tooltip",{attrs:{placement:"top",effect:"light","popper-class":"tooltip-change-border"}},[a("div",{staticClass:"tooltip-content",attrs:{slot:"content"},slot:"content"},t._l(t.hideShowLabels,function(e,s){return a("div",{key:s,staticClass:"item-label",staticStyle:{display:"inline-block","margin-right":"10px"}},[a("span",{staticClass:"k-name",staticStyle:{"border-radius":"3px",color:"#FFF",padding:"3px 10px"},style:{background:e.color||"#ccc"}},[t._v(t._s(e.name))])])})),t._v(" "),a("el-button",{staticClass:"more-btn",attrs:{icon:"el-icon-more"}})],1):t._e()],2):t._e(),t._v(" "),t.data.stop_time||t.data.stopTime?a("span",{class:["due-time",{"is-past":1==t.data.is_end}]},[t._v("\n      截止时间"+t._s(t.data.stop_time||t.data.stopTime)+"\n    ")]):t._e(),t._v(" "),a("div",{staticClass:"img-group"},[t.data.relationCount?a("div",{staticClass:"img-box"},[a("i",{staticClass:"wukong wukong-relevance"}),t._v(" "),a("span",[t._v(t._s(t.data.relationCount))])]):t._e(),t._v(" "),t.data.subdonecount>0||t.data.subcount?a("div",{staticClass:"img-box"},[a("i",{staticClass:"wukong wukong-sub-task"}),t._v(" "),a("span",[t._v(t._s(t.data.subdonecount)+"/"+t._s(t.data.subdonecount+t.data.subcount))])]):t._e(),t._v(" "),t.data.filecount?a("div",{staticClass:"img-box"},[a("i",{staticClass:"wukong wukong-file"}),t._v(" "),a("span",[t._v(t._s(t.data.filecount))])]):t._e(),t._v(" "),t.data.commentcount||t.data.commentCount?a("div",{staticClass:"img-box"},[a("i",{staticClass:"wukong wukong-comment-task"}),t._v(" "),a("span",[t._v(t._s(t.data.commentcount||t.data.commentCount))])]):t._e()]),t._v(" "),t.data.main_user&&t.data.main_user.id?a("xr-avatar",{staticClass:"user-img",attrs:{name:t.data.main_user.realname,id:t.data.main_user.id,size:24,src:t.data.main_user.img,disabled:!1,trigger:"hover"},on:{click:function(t){t.stopPropagation()}}}):t._e()],1)])},[],!1,null,"6be0d111",null);l.options.__file="TaskCell.vue";e.a=l.exports},"4p7F":function(t,e,a){},"5yli":function(t,e,a){},"8NwJ":function(t,e,a){"use strict";var s=a("Q5gn");a.n(s).a},O3SS:function(t,e,a){"use strict";var s=a("PuU7");a.n(s).a},PuU7:function(t,e,a){},Q5gn:function(t,e,a){},"ZI+g":function(t,e,a){},"ej9+":function(t,e,a){"use strict";var s={name:"BaseTabsHead",components:{},props:{selectValue:[String,Number],tabs:Array},data:function(){return{currentValue:""}},computed:{},watch:{selectValue:function(){this.currentValue=this.selectValue}},mounted:function(){this.currentValue=this.selectValue},beforeDestroy:function(){},methods:{handleTabsClick:function(t,e){this.$emit("update:selectValue",t.name),this.$emit("change",t.name)}}},i=(a("kr3W"),a("KHd+")),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("flexbox",{staticClass:"base-tabs-head",attrs:{justify:"space-between"}},[a("div",[t._t("left")],2),t._v(" "),a("el-tabs",{on:{"tab-click":t.handleTabsClick},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}},t._l(t.tabs,function(t,e){return a("el-tab-pane",{key:e+t.name,attrs:{label:t.label,name:t.name}})})),t._v(" "),a("div",[t._t("right")],2)],1)},[],!1,null,"fa74c14a",null);n.options.__file="index.vue";e.a=n.exports},ersz:function(t,e,a){"use strict";a.r(e);var s=a("FyfS"),i=a.n(s),n=a("QbLZ"),l=a.n(n),o=a("zsVz"),r={name:"TaskTabsHead",components:{BaseTabsHead:a("ej9+").a},props:{title:String},data:function(){return{}},computed:{},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{exportClick:function(){this.$emit("export")}}},c=(a("pSvC"),a("KHd+")),u=Object(c.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-tabs-head",t._g(t._b({staticClass:"Task-tabs-head"},"base-tabs-head",t.$attrs,!1),t.$listeners),[a("span",{staticClass:"task-title",attrs:{slot:"left"},slot:"left"},[a("i",{staticClass:"wk wk-task"}),t._v(t._s(t.title)+"\n  ")]),t._v(" "),a("el-button",{staticClass:"export-btn",attrs:{slot:"right"},on:{click:t.exportClick},slot:"right"},[t._v("导出")])],1)},[],!1,null,"5ef75986",null);u.options.__file="TaskTabsHead.vue";var d=u.exports,h=a("/esw"),p=a("pKm3"),f=a("C3Po"),k=a("8GhS"),m=a("7Qib"),v={name:"TaskFilter",components:{XhUserCell:k.p},props:{dueDate:String,priority:String,users:Array,done:Boolean},data:function(){return{dueDateValue:"",priorityValue:"",doneValue:!1,usersList:[],priorityOptions:[{label:"全部",key:""},{label:"高",key:"3"},{label:"中",key:"2"},{label:"低",key:"1"},{label:"无",key:"0"}]}},computed:{},watch:{},created:function(){this.dueDateValue=this.dueDate,this.priorityValue=this.priority,this.doneValue=this.done,this.usersList=Object(m.t)(this.users)},beforeDestroy:function(){},methods:{closeClick:function(){this.$emit("close")},userChage:function(t){this.usersList=t.value},saveClick:function(){this.$emit("save",this.dueDateValue,this.priorityValue,this.doneValue,this.usersList),this.$emit("close")},handleDateClose:function(){this.$refs.filterDatePicker.pickerVisible=!1}}},b=(a("8NwJ"),Object(c.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-filter"},[t._m(0),t._v(" "),a("div",{staticClass:"task-filter__body"},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"负责人"}},[a("xh-user-cell",{staticClass:"handle-item-content",attrs:{value:t.users},on:{"value-change":t.userChage}})],1),t._v(" "),a("el-form-item",{attrs:{label:"截止时间"}},[a("el-date-picker",{directives:[{name:"elclickoutside",rawName:"v-elclickoutside",value:t.handleDateClose,expression:"handleDateClose"}],ref:"filterDatePicker",attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.dueDateValue,callback:function(e){t.dueDateValue=e},expression:"dueDateValue"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"优先级"}},[a("el-select",{model:{value:t.priorityValue,callback:function(e){t.priorityValue=e},expression:"priorityValue"}},t._l(t.priorityOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"显示已完成"}},[a("el-switch",{model:{value:t.doneValue,callback:function(e){t.doneValue=e},expression:"doneValue"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"task-filter__footer"},[a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){return t.closeClick(e)}}},[t._v("取消")]),t._v(" "),a("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:t.saveClick,expression:"saveClick"}],attrs:{type:"primary"}},[t._v("保存")])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"task-filter__header"},[e("span",{staticClass:"task-filter__title"},[this._v("筛选")])])}],!1,null,"5155969f",null));b.options.__file="TaskFilter.vue";var _=b.exports,g=a("L2JU"),y=a("ehos"),C={name:"Index",components:{TaskTabsHead:d,TaskCell:h.a,TaskDetail:p.a,TaskQuickAdd:f.a,TaskFilter:_},props:{},data:function(){return{first:!0,tabsSelectValue:"0",taskType:"",list:[],loading:!1,noMore:!1,scrollKey:Date.now(),page:1,dueDate:"",search:"",priority:"",showDone:!0,userList:[],taskFilterShow:!1,progress:{stopTask:0,allTask:0},moreTypes:[{type:"show/hide",name:"显示已完成任务/隐藏已完成任务",icon:"eye"}],taskID:"",detailIndex:-1,taskDetailShow:!1}},computed:l()({},Object(g.b)(["userInfo"]),{tabs:function(){return 1==this.taskType?[{label:"全部",name:"0"},{label:"我负责的",name:"1"},{label:"我参与的",name:"3"}]:[{label:"全部",name:"0"},{label:"下属负责的",name:"1"},{label:"下属参与的",name:"3"}]},title:function(){return 1==this.taskType?"我的任务":"下属的任务"},scrollDisabled:function(){return this.loading||this.noMore},progressValue:function(){return 0==this.progress.stopTask?0:parseInt(this.progress.stopTask/this.progress.allTask*100)}}),watch:{},created:function(){this.debouncedRefreshList=Object(y.debounce)(300,this.refreshList)},mounted:function(){this.taskType=this.$route.params.type},beforeRouteUpdate:function(t,e,a){this.taskType=t.params.type,this.showDone=!0,this.progress={stopTask:0,allTask:0},this.tabsSelectValue="0",this.dueDate="",this.priority="",this.userList=[],this.search="",this.refreshList(),a()},beforeDestroy:function(){},methods:{progressFormat:function(t){return this.progress.stopTask+"/"+this.progress.allTask},refreshList:function(){this.page=1,this.list=[],this.noMore=!1,this.scrollKey=Date.now()},taskFilterSave:function(t,e,a,s){this.first=!1,this.priority=e,this.dueDate=t,this.showDone=a,this.userList=s,this.refreshList()},getList:function(){var t=this;this.loading=!0;var e={page:this.page,limit:15,type:this.tabsSelectValue,priority:this.priority,dueDate:this.dueDate,status:this.first?"":this.showDone?"5":"1",main_user_id:this.userList&&this.userList.length?this.userList[0].id:""};this.search&&(e.search=this.search),1!=this.taskType&&(e.mold=1),Object(o.g)(e).then(function(a){if(t.loading=!1,t.tabsSelectValue==e.type){if(!t.noMore){var s=!0,n=!1,l=void 0;try{for(var o,r=i()(a.data.page.list);!(s=(o=r.next()).done);s=!0){var c=o.value;5==c.status&&(c.checked=!0)}}catch(t){n=!0,l=t}finally{try{!s&&r.return&&r.return()}finally{if(n)throw l}}t.list=t.list.concat(a.data.page.list),t.page++}t.noMore=a.data.page.lastPage,t.progress.stopTask=a.data.page.completeCount,t.progress.allTask=a.data.page.dataCount}else t.refreshList()}).catch(function(){t.noMore=!0,t.loading=!1})},tabsChange:function(t){this.refreshList()},taskCellHandle:function(t,e,a){"view"==t?(this.taskID=e.task_id,this.detailIndex=a,this.taskDetailShow=!0):"complete"==t&&(this.progress.stopTask=e.checked?++this.progress.stopTask:--this.progress.stopTask)},detailHandle:function(t){var e=this;if("delete"==t.type)this.list.splice(t.index,1);else{var a=1;t.index>0&&(a=Math.ceil(t.index/5));var s={page:a,limit:5,type:this.tabsSelectValue,priority:this.priority,dueDate:this.dueDate,status:this.first?"":this.showDone?"5":"1"};1!=this.taskType&&(s.mold=1),Object(o.g)(s).then(function(a){for(var s=e.list[t.index],i=0;i<a.data.page.list.length;i++){var n=a.data.page.list[i];if(n.task_id==s.task_id){5==n.status&&(n.checked=!0),e.list.splice(t.index,1,n);break}}e.progress.stopTask=a.data.page.completeCount,e.progress.allTask=a.data.page.dataCount}).catch(function(){})}},exportClick:function(){var t=this;this.loading=!0;var e={type:this.tabsSelectValue,priority:this.priority,dueDate:this.dueDate,status:this.first?"":this.showDone?"5":"1"};1!=this.taskType&&(e.mold=1),Object(o.h)(e).then(function(e){Object(m.c)(e),t.loading=!1}).catch(function(){t.loading=!1})}}},w=(a("m/wk"),Object(c.a)(C,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("task-tabs-head",{attrs:{tabs:t.tabs,title:t.title,"select-value":t.tabsSelectValue},on:{"update:selectValue":function(e){t.tabsSelectValue=e},change:t.tabsChange,export:t.exportClick}}),t._v(" "),a("div",{staticClass:"content-wrapper",attrs:{direction:"column",align:"stretch"}},[a("flexbox",{staticClass:"content-wrapper__hd",attrs:{justify:"space-around"}},[a("flexbox",[1==t.taskType?a("xr-avatar",{staticClass:"head-img",attrs:{name:t.userInfo.realname,size:40,src:t.userInfo.img}}):a("i",{staticClass:"wk wk-multi-user user-icon head-img"}),t._v(" "),a("el-progress",{attrs:{percentage:t.progressValue,format:t.progressFormat}})],1),t._v(" "),a("flexbox",{staticClass:"header-right",attrs:{justify:"flex-end"}},[a("el-input",{attrs:{placeholder:"请输入任务名称","prefix-icon":"el-icon-search"},on:{input:t.debouncedRefreshList},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),a("el-popover",{attrs:{"popper-class":"no-padding-popover",placement:"bottom",width:"300",trigger:"click"},model:{value:t.taskFilterShow,callback:function(e){t.taskFilterShow=e},expression:"taskFilterShow"}},[t.taskFilterShow?a("task-filter",{attrs:{"due-date":t.dueDate,priority:t.priority,done:t.showDone,users:t.userList},on:{close:function(e){t.taskFilterShow=!1},save:t.taskFilterSave}}):t._e(),t._v(" "),a("el-button",{attrs:{slot:"reference",icon:"wk wk-screening"},on:{click:function(e){t.taskFilterShow=!0}},slot:"reference"},[t._v("筛选")])],1)],1)],1),t._v(" "),a("div",{staticClass:"cell-section"},[a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getList,expression:"getList"}],key:""+t.scrollKey+t.tabsSelectValue,attrs:{"infinite-scroll-distance":"100","infinite-scroll-disabled":"scrollDisabled"}},t._l(t.list,function(e,s){return a("task-cell",{key:s,attrs:{data:e,"data-index":s},on:{"on-handle":t.taskCellHandle}})})),t._v(" "),t.loading?a("p",{staticClass:"scroll-bottom-tips"},[t._v("加载中...")]):t._e(),t._v(" "),t.noMore?a("p",{staticClass:"scroll-bottom-tips"},[t._v("没有更多了")]):t._e()]),t._v(" "),a("div",{staticClass:"task-add"},[a("task-quick-add",{on:{send:t.refreshList}})],1)],1),t._v(" "),t.taskDetailShow?a("task-detail",{ref:"particulars",attrs:{id:t.taskID,"detail-index":t.detailIndex,"no-listener-class":["task-cell"]},on:{"on-handle":t.detailHandle,close:function(e){t.taskDetailShow=!1}}}):t._e()],1)},[],!1,null,"7377f9de",null));w.options.__file="index.vue";e.default=w.exports},kr3W:function(t,e,a){"use strict";var s=a("4p7F");a.n(s).a},"m/wk":function(t,e,a){"use strict";var s=a("ZI+g");a.n(s).a},pSvC:function(t,e,a){"use strict";var s=a("5yli");a.n(s).a}}]);