(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9113"],{"2f65":function(t,e,i){},"68n8":function(t,e,i){"use strict";var s=i("WL4Q");i.n(s).a},"7mY3":function(t,e,i){"use strict";var s=i("2f65");i.n(s).a},"9GgJ":function(t,e,i){"use strict";var s={name:"XrHeader",components:{},props:{iconClass:[String,Array],iconColor:String,label:String,showSearch:{type:Boolean,default:!1},searchIconType:{type:String,default:"text"},placeholder:{type:String,default:"请输入内容"},ftTop:{type:String,default:"15px"},content:[String,Number],inputAttr:{type:Object,default:function(){}}},data:function(){return{search:""}},computed:{},watch:{content:{handler:function(){this.search!=this.content&&(this.search=this.content)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{inputChange:function(){this.$emit("update:content",this.search)},searchClick:function(){this.$emit("search",this.search)}}},n=(i("7mY3"),i("KHd+")),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("flexbox",{staticClass:"xr-header"},[t.iconClass?i("div",{staticClass:"xr-header__icon",style:{backgroundColor:t.iconColor}},[i("i",{class:t.iconClass})]):t._e(),t._v(" "),i("div",{staticClass:"xr-header__label"},[t.$slots.label?t._t("label"):[t._v(t._s(t.label))]],2),t._v(" "),t.showSearch?i("el-input",t._b({staticClass:"xr-header__search",class:{"is-text":"text"===t.searchIconType},style:{"margin-top":t.ftTop},attrs:{placeholder:t.placeholder},on:{input:t.inputChange},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchClick(e):null}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},"el-input",t.inputAttr,!1),["text"===t.searchIconType?i("el-button",{attrs:{slot:"append",type:"primary"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"},[t._v("搜索")]):i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"})],1):t._e(),t._v(" "),i("div",{staticClass:"xr-header__ft",style:{top:t.ftTop}},[t._t("ft")],2)],1)},[],!1,null,"acb6d756",null);a.options.__file="index.vue";e.a=a.exports},IJOt:function(t,e,i){"use strict";i.r(e);var s=i("FyfS"),n=i.n(s),a=i("hSIE"),c=i("Flj7"),l=i("C3Po"),o=i("pKm3"),r=i("9GgJ"),d=i("Mzjh"),u=i("t2rG"),h=i.n(u),m=i("IKCp"),p=i("kK4T"),f=i("7Qib"),v={components:{draggable:h.a,TaskQuickAdd:l.a,TaskDetail:o.a,XrHeader:r.a,TaskScreening:d.a},directives:{scrollx:m.a},mixins:[p.a],data:function(){return{taskHandleShow:!1,taskList:[],loading:!0,filterObj:{},filterValue:{sort:2,completed_task:!0},filterList:[{label:"按手动拖拽",value:1},{label:"按最近创建",value:2},{label:"按最近截止",value:3},{label:"按最近更新",value:4},{label:"按最高优先级",value:5}],search:"",screeningValue:{userIds:[],timeId:"",tagIds:[]},screeningShow:!1,screeningProps:{searchShow:!1,userRequest:a.c},task_iD:"",detailIndex:-1,detailSection:-1,taskDetailShow:!1}},created:function(){var t=this;this.filterList.forEach(function(e){t.filterObj[e.value]=e.label}),this.getList()},mounted:function(){document.body.ondrop=function(t){t.preventDefault(),t.stopPropagation()}},methods:{searchClick:function(t){this.search=t,this.getList()},taskScreeningChange:function(t,e,i){this.screeningValue={userIds:t,timeId:e,tagIds:i},this.getList()},filterClick:function(t){this.filterValue.sort=t,this.getList()},getList:function(){var t=this;this.loading=!0,Object(a.f)({search:this.search,sort_field:this.filterValue.sort,completed_task:this.filterValue.completed_task,owner_user_id:this.screeningValue.userIds,time_type:this.screeningValue.timeId,label_id:this.screeningValue.tagIds}).then(function(e){var i=!0,s=!1,a=void 0;try{for(var c,l=n()(e.data);!(i=(c=l.next()).done);i=!0){var o=c.value;o.checkedNum=0,o.showTaskAdd=!1;var r=!0,d=!1,u=void 0;try{for(var h,m=n()(o.list);!(r=(h=m.next()).done);r=!0){var p=h.value;5==p.status?(p.checked=!0,o.checkedNum+=1):p.checked=!1}}catch(t){d=!0,u=t}finally{try{!r&&m.return&&m.return()}finally{if(d)throw u}}}}catch(t){s=!0,a=t}finally{try{!i&&l.return&&l.return()}finally{if(s)throw a}}t.taskList=e.data,t.loading=!1}).catch(function(){t.loading=!1})},moveEndTask:function(t){if(document.dispatchEvent(new MouseEvent("mouseup")),t){var e=t.from.id,i=t.to.id;if(e==i&&t.oldIndex==t.newIndex)return;var s=this.taskList[e],n=s.list;this.updateTaskListCheckNum(s);var c=this.taskList[i],l=c.list;this.updateTaskListCheckNum(c);var o={};o=e==i?{tolist:l.map(function(t){return t.task_id}),to_top_id:i}:{fromlist:n.map(function(t){return t.task_id}),from_top_id:e,tolist:l.map(function(t){return t.task_id}),to_top_id:i},Object(a.h)(o).then(function(t){}).catch(function(){})}},updateTaskListCheckNum:function(t){t.checkedNum=t.list.filter(function(t){return t.checked}).length},checkboxChange:function(t,e){t.checked?e.checkedNum++:e.checkedNum--,Object(c.n)({task_id:t.task_id,status:t.checked?5:1}).then(function(t){}).catch(function(){t.checked?e.checkedNum--:e.checkedNum++,t.checked=!t.checked})},showDetailView:function(t,e,i){this.task_iD=t.task_id,this.detailIndex=i,this.detailSection=e,this.taskDetailShow=!0},detailHandle:function(t){if(0==t.index||t.index)if("title-check"==t.type){var e=this.taskList[t.section];this.$set(e.list[t.index],"checked",t.value),t.value?e.checkedNum++:e.checkedNum--,this.$set(e,"checkedNum",e.checkedNum)}else if("delete"==t.type)this.taskList[t.section].list.splice(t.index,1);else if("change-stop-time"==t.type){new Date(t.value).getTime()/1e3+86399>(new Date).getTime()/1e3?this.taskList[t.section].list[t.index].is_end=!1:this.taskList[t.section].list[t.index].is_end=!0,this.taskList[t.section].list[t.index].stop_time=t.value}else if("change-priority"==t.type)this.taskList[t.section].list[t.index].priority=t.value.id;else if("change-name"==t.type)this.taskList[t.section].list[t.index].name=t.value;else if("change-comments"==t.type){var i=this.taskList[t.section].list[t.index].commentcount;"add"==t.value?this.taskList[t.section].list[t.index].commentcount=i+1:this.taskList[t.section].list[t.index].commentcount=i-1}else"change-sub-task"==t.type?(this.taskList[t.section].list[t.index].childWCCount=t.value.subdonecount,this.taskList[t.section].list[t.index].childAllCount=t.value.allcount):"change-main-user"==t.type?this.taskList[t.section].list[t.index].main_user=t.value:"change-label"==t.type&&(this.taskList[t.section].list[t.index].lableList=t.value)},closeBtn:function(){this.taskDetailShow=!1},exportClick:function(){var t=this;this.taskHandleShow=!1,this.loading=!0,Object(a.a)({is_top:5,search:this.search,sort_field:this.filterValue.sort,completed_task:this.filterValue.completed_task,owner_user_id:this.screeningValue.userIds,time_type:this.screeningValue.timeId,label_id:this.screeningValue.tagIds}).then(function(e){Object(f.c)(e),t.loading=!1}).catch(function(){t.loading=!1})}}},k=(i("XvL2"),i("KHd+")),_=Object(k.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-task"},[i("xr-header",{attrs:{"icon-class":"wk wk-task","icon-color":"#D376FF",placeholder:"请输入任务/描述","show-search":"","ft-top":"0"},on:{search:t.searchClick}},[i("span",{attrs:{slot:"label"},slot:"label"},[t._v("我的任务")]),t._v(" "),i("el-popover",{attrs:{slot:"label",placement:"bottom-start",width:"182"},slot:"label",model:{value:t.taskHandleShow,callback:function(e){t.taskHandleShow=e},expression:"taskHandleShow"}},[i("div",{staticClass:"project-list-popover-btn-list"},[i("p",{on:{click:t.exportClick}},[t._v("导出任务")])]),t._v(" "),i("i",{staticClass:"wk wk-manage set-img",attrs:{slot:"reference"},slot:"reference"})]),t._v(" "),i("template",{slot:"ft"},[i("el-dropdown",{attrs:{trigger:"click"},on:{command:t.filterClick}},[i("div",{staticClass:"el-dropdown-link"},[t._v("\n          "+t._s(t.filterObj[t.filterValue.sort])),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("div",{staticClass:"el-dropdown-title"},[t._v("排序")]),t._v(" "),t._l(t.filterList,function(e,s){return i("el-dropdown-item",{key:s,attrs:{command:e.value}},[t._v(t._s(e.label))])}),t._v(" "),i("flexbox",{staticClass:"el-dropdown-footer"},[t._v("\n            已完成任务默认排在最后"),i("el-switch",{on:{change:t.getList},model:{value:t.filterValue.completed_task,callback:function(e){t.$set(t.filterValue,"completed_task",e)},expression:"filterValue.completed_task"}})],1)],2)],1),t._v(" "),i("el-button",{staticClass:"filter-btn",attrs:{type:"primary",icon:"wk wk-screening"},on:{click:function(e){t.screeningShow=!0}}},[t._v("任务筛选")])],1)],2),t._v(" "),i("div",{staticClass:"my-task-body"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"},{name:"scrollx",rawName:"v-scrollx",value:{ignoreClass:["ignoreClass"]},expression:"{ ignoreClass :['ignoreClass']}"}],staticClass:"content-box"},t._l(t.taskList,function(e,s){return i("div",{key:s,staticClass:"board-column"},[i("flexbox",{staticClass:"board-column-wrapper ignoreClass",attrs:{orient:"vertical",align:"stretch"}},[i("div",{staticClass:"board-column-header"},[i("div",[i("span",{staticClass:"text"},[t._v(" "+t._s(e.title)+" ")]),t._v(" "),i("span",{staticClass:"text-num"},[t._v(t._s(e.checkedNum)+" / "+t._s(e.list.length))])]),t._v(" "),0==e.checkedNum?i("el-progress",{attrs:{percentage:0}}):i("el-progress",{attrs:{percentage:e.checkedNum/e.list.length*100}})],1),t._v(" "),i("draggable",{staticClass:"board-column-content",attrs:{list:e.list,options:{group:"mission",forceFallback:!1,dragClass:"sortable-drag"},id:s},on:{end:t.moveEndTask}},t._l(e.list,function(n,a){return i("div",{key:a,ref:"taskRow",refInFor:!0,class:n.checked?"board-item board-item-active":"board-item",style:{"border-color":t.getPriorityColor(n.priority).color},on:{click:function(e){t.showDetailView(n,s,a)}}},[i("flexbox",{attrs:{align:"stretch"}},[i("div",{on:{click:function(t){t.stopPropagation()}}},[i("el-checkbox",{on:{change:function(i){t.checkboxChange(n,e)}},model:{value:n.checked,callback:function(e){t.$set(n,"checked",e)},expression:"element.checked"}})],1),t._v(" "),i("div",{staticClass:"element-label"},[t._v(t._s(n.name)),n.workName?i("span",[t._v("（"+t._s(n.workName)+"）")]):t._e()]),t._v(" "),n.main_user?i("xr-avatar",{staticClass:"head-png",attrs:{name:n.main_user.realname,id:n.main_user.id,size:24,src:n.main_user.img,disabled:!1,trigger:"hover"}}):t._e()],1),t._v(" "),i("div",{staticClass:"img-group"},[n.stop_time?i("div",{staticClass:"img-box"},[i("i",{staticClass:"wukong wukong-time-task",style:{color:1!=n.is_end||n.checked?"#999":"red"}}),t._v(" "),i("span",{style:{color:1!=n.is_end||n.checked?"#999":"red"}},[t._v(t._s(t._f("moment")(n.stop_time,"YYYY-MM-DD"))+" 截止")])]):t._e(),t._v(" "),n.childAllCount>0||n.subdonecount>0||n.subcount>0?i("div",{staticClass:"img-box"},[i("i",{staticClass:"wukong wukong-sub-task"}),t._v(" "),i("span",[t._v(t._s(n.childWCCount||n.subdonecount)+"/"+t._s(n.childAllCount||n.subdonecount+n.subcount))])]):t._e(),t._v(" "),n.filecount?i("div",{staticClass:"img-box"},[i("i",{staticClass:"wukong wukong-file"}),t._v(" "),i("span",[t._v(t._s(n.filecount))])]):t._e(),t._v(" "),n.commentcount?i("div",{staticClass:"img-box"},[i("i",{staticClass:"wukong wukong-comment-task"}),t._v(" "),i("span",[t._v(t._s(n.commentcount))])]):t._e(),t._v(" "),n.lableList.length<=2?t._l(n.lableList,function(e,s){return i("div",{key:s,staticClass:"item-label",style:{background:e.color}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])}):[i("div",{staticClass:"item-label",style:{background:n.lableList[0].color}},[t._v(t._s(n.lableList[0].name))]),t._v(" "),i("div",{staticClass:"item-label",style:{background:n.lableList[1].color}},[t._v(t._s(n.lableList[1].name))]),t._v(" "),i("el-tooltip",{attrs:{placement:"top",effect:"light","popper-class":"tooltip-change-border task-tooltip"}},[i("div",{staticStyle:{margin:"10px 10px 10px 0"},attrs:{slot:"content"},slot:"content"},t._l(n.lableList,function(e,s){return i("div",{key:s,staticStyle:{display:"inline-block","margin-right":"10px"}},[s>=2?i("span",{staticClass:"k-name",staticStyle:{"border-radius":"4px",color:"#FFF",padding:"3px 10px"},style:{background:e.color?e.color:"#ccc"}},[t._v(t._s(e.name))]):t._e()])})),t._v(" "),i("div",{staticClass:"color-label-more"},[i("i",[t._v("...")])])])]],2)],1)})),t._v(" "),i("task-quick-add",{staticStyle:{margin:"0 10px"},attrs:{params:{is_top:e.is_top},"show-style":"hideBorder"},on:{send:t.getList}})],1)],1)}))]),t._v(" "),t.taskDetailShow?i("task-detail",{ref:"particulars",attrs:{id:t.task_iD,"detail-index":t.detailIndex,"detail-section":t.detailSection,"no-listener-class":["board-item"]},on:{"on-handle":t.detailHandle,close:t.closeBtn}}):t._e(),t._v(" "),t.screeningShow?i("task-screening",{attrs:{props:t.screeningProps,data:t.screeningValue},on:{change:t.taskScreeningChange,close:function(e){t.screeningShow=!1}}}):t._e()],1)},[],!1,null,"1276d8b7",null);_.options.__file="index.vue";e.default=_.exports},IKCp:function(t,e,i){"use strict";var s=i("JqEL"),n=i("Kw5r"),a={isDown:!1,coord:{x:0,y:0}},c=null,l=[],o=function(t){this&&this.contains(t.target)&&(c.style.cursor="pointer",a.isDown=!0,a.coord.x=t.pageX,a.coord.y=t.pageY)},r=function(t){c.style.cursor="default",a.isDown=!1,a.coord.x=0,a.coord.y=0},d=function(t){if(a.isDown){var e=a.coord.x-t.pageX;a.coord.x=t.pageX,c.scrollLeft=c.scrollLeft+e}},u=function(t){h(t)?(c.style.cursor="default",a.isDown=!1):this&&this.contains(t.target)&&(c.scrollLeft+=t.deltaY)},h=function(t){var e=!1;return l.forEach(function(i){var s=document.getElementsByClassName(i);if(s&&!e)for(var n=0;n<s.length;n++){var a=s[n].getBoundingClientRect();if(t.clientY>a.top&&t.clientY<a.top+a.height&&t.clientX>a.left&&t.clientX<a.left+a.width){e=!0;break}}}),e};e.a=n.default.directive("scrollx",{bind:function(t,e,i){var s=e.value;l=s.ignoreClass},inserted:function(t){c=t,Object(s.b)(document,"mousedown",o.bind(t)),Object(s.b)(document,"wheel",u.bind(t)),Object(s.b)(document,"mouseup",r.bind(t)),Object(s.b)(document,"mousemove",d.bind(t))},unbind:function(t){Object(s.a)(document,"mousedown",o.bind(t)),Object(s.a)(document,"mouseup",r.bind(t)),Object(s.a)(document,"wheel",u.bind(t)),Object(s.a)(document,"mousemove",d.bind(t)),a={isDown:!1,coord:{x:0,y:0}}}})},LPMH:function(t,e,i){},Mzjh:function(t,e,i){"use strict";var s=i("FyfS"),n=i.n(s),a=i("QbLZ"),c=i.n(a),l=i("LWkM"),o=i("Ajln"),r=i("7Qib"),d=i("ehos"),u=i("jtZb"),h={searchShow:!0,userRequest:null,userParams:null},m={props:{workId:[Number,String],data:Object,props:Object},data:function(){return{zIndex:Object(r.q)(),search:"",menuList:[{label:"成员",id:"1",expand:!1,list:[]},{label:"截止时间",id:"2",expand:!1,list:[{id:1,name:"今天",type:"time",checked:!1},{id:2,name:"明天",type:"time",checked:!1},{id:3,name:"本周",type:"time",checked:!1},{id:4,name:"本月",type:"time",checked:!1},{id:5,name:"未设置截止时间",type:"time",checked:!1},{id:6,name:"已延期",type:"time",checked:!1},{id:7,name:"今日更新",type:"time",checked:!1}]},{label:"标签",id:3,expand:!1,list:[]}]}},computed:{config:function(){return Object(u.a)(c()({},h),this.props||{})}},created:function(){var t=this;this.debouncedSeach=Object(d.debounce)(500,function(){t.searchChange()}),this.search=this.data.search,this.getUserList(),this.getTagList(),this.menuList[1].list.forEach(function(e){e.checked=t.data&&t.data.timeId==e.id})},mounted:function(){document.getElementById("app").addEventListener("click",this.taskShowHandle,!1)},methods:{getUserList:function(){var t=this;this.menuList[0].list=[];var e=this.config.userRequest||l.w,i=this.config.userParams;null===i&&(i={work_id:this.workId}),e(i).then(function(e){t.menuList[0].list=e.data.map(function(e){return e.checked=t.data&&t.data.userIds&&t.data.userIds.includes(e.id),e.name=e.name,e.type="user",e})})},getTagList:function(){var t=this;this.menuList[2].list=[],Object(o.c)().then(function(e){t.menuList[2].list=e.data.list.map(function(e){return e.id=e.lable_id,e.checked=t.data&&t.data.tagIds&&t.data.tagIds.includes(e.lable_id),e.type="tag",e})}).catch(function(){})},close:function(){this.$emit("close")},rowChecked:function(t){if("time"==t.type){var e=!0,i=!1,s=void 0;try{for(var a,c=n()(this.menuList[1].list);!(e=(a=c.next()).done);e=!0){var l=a.value;t.id==l.id?l.checked=!l.checked:l.checked=!1}}catch(t){i=!0,s=t}finally{try{!e&&c.return&&c.return()}finally{if(i)throw s}}}else t.checked=!t.checked;var o=[],r=!0,d=!1,u=void 0;try{for(var h,m=n()(this.menuList[0].list);!(r=(h=m.next()).done);r=!0){var p=h.value;p.checked&&o.push(p.id)}}catch(t){d=!0,u=t}finally{try{!r&&m.return&&m.return()}finally{if(d)throw u}}var f="",v=!0,k=!1,_=void 0;try{for(var g,b=n()(this.menuList[1].list);!(v=(g=b.next()).done);v=!0){var y=g.value;if(y.checked){f=y.id;break}}}catch(t){k=!0,_=t}finally{try{!v&&b.return&&b.return()}finally{if(k)throw _}}var x=[],w=!0,C=!1,L=void 0;try{for(var S,I=n()(this.menuList[2].list);!(w=(S=I.next()).done);w=!0){var j=S.value;j.checked&&x.push(j.id)}}catch(t){C=!0,L=t}finally{try{!w&&I.return&&I.return()}finally{if(C)throw L}}this.$emit("change",o,f,x,this.search)},searchChange:function(){this.$emit("change",this.data.userIds,this.data.timeId,this.data.tagIds,this.search)},resetBtn:function(){var t=!0,e=!1,i=void 0;try{for(var s,a=n()(this.menuList);!(t=(s=a.next()).done);t=!0){var c=s.value,l=!0,o=!1,r=void 0;try{for(var d,u=n()(c.list);!(l=(d=u.next()).done);l=!0){d.value.checked=!1}}catch(t){o=!0,r=t}finally{try{!l&&u.return&&u.return()}finally{if(o)throw r}}}}catch(t){e=!0,i=t}finally{try{!t&&a.return&&a.return()}finally{if(e)throw i}}this.search="",this.$emit("change",[],"",[],this.search)},rowFun:function(t){t.expand?t.expand=!1:t.expand=!0},taskShowHandle:function(t){this.$el.contains(t.target)||this.close()}}},p=(i("68n8"),i("KHd+")),f=Object(p.a)(m,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-fade"}},[i("el-card",{staticClass:"project-screening",style:{"z-index":t.zIndex}},[i("p",{staticClass:"header"},[i("span",{staticClass:"label"},[t._v("任务筛选")]),t._v(" "),i("el-button",{attrs:{type:"text"},on:{click:t.resetBtn}},[t._v("重置")]),t._v(" "),i("span",{staticClass:"rt el-icon-close",on:{click:t.close}})],1),t._v(" "),i("div",{staticClass:"content"},[t.config.searchShow?i("el-input",{attrs:{placeholder:"搜索项目内任务"},on:{input:t.debouncedSeach},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e(),t._v(" "),t._l(t.menuList,function(e,s){return i("div",{key:s,staticClass:"menu-list"},[i("p",{staticClass:"item-label",on:{click:function(i){t.rowFun(e)}}},[t._v("\n          "+t._s(e.label)+"\n          "),i("span",{class:e.expand?"el-icon-arrow-right item-expand":"el-icon-arrow-down item-expand"})]),t._v(" "),t._l(e.list,function(n,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:0==e.expand,expression:"item.expand == false"}],key:a,class:["item-list",n.checked?"item-list-active":"",{"time-item-list":1==s}],on:{click:function(e){t.rowChecked(n)}}},["user"==n.type?i("xr-avatar",{staticClass:"user-img",attrs:{name:n.realname,size:24,src:n.img}}):t._e(),t._v(" "),"tag"==n.type?i("span",{staticClass:"tag-icon",style:{backgroundColor:n.color}},[i("i",{staticClass:"wk wk-label"})]):t._e(),t._v(" "),i("span",{staticClass:"item-list-label",class:{"is-tag":"tag"==n.type}},[t._v(t._s(n.name||n.realname))]),t._v(" "),i("span",{staticClass:"el-icon-check rt"})],1)})],2)})],2)])],1)},[],!1,null,"4f789a54",null);f.options.__file="TaskScreening.vue";e.a=f.exports},WL4Q:function(t,e,i){},XvL2:function(t,e,i){"use strict";var s=i("LPMH");i.n(s).a}}]);