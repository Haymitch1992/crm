(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c59b"],{"5J4o":function(e,t,s){"use strict";var i=s("SFPr");s.n(i).a},C3Po:function(e,t,s){"use strict";var i=s("QbLZ"),a=s.n(i),n=s("8GhS"),l=s("zsVz"),o=s("gVZb"),r=s("EP+0"),d=s("UGe0"),c=s("HslM"),f=s("EBQf"),u=s("z5u8"),m=s("hwzM"),p=s("kK4T"),h=s("IEYw"),b=s("7Qib"),v=s("L2JU"),_={name:"TaskCreate",components:{XrCreate:o.a,CreateSections:r.a,WkForm:d.a,TagIndex:c.a,RelatedBusiness:f.a,CRMFullScreenDetail:function(){return Promise.all([s.e("chunk-9aa7"),s.e("chunk-5c00"),s.e("chunk-a183"),s.e("chunk-6882"),s.e("chunk-6216")]).then(s.bind(null,"3z7q"))},SubTask:u.a,FileCell:m.a},mixins:[h.a,p.a],props:{action:{type:Object,default:function(){return{type:"save",id:"",data:{}}}}},data:function(){return{loading:!1,fieldList:[],fieldForm:{},fieldRules:{name:{required:!0,message:"任务名称不能为空",trigger:["blur","change"]}},addSubtasks:!0,batchId:Object(b.s)(),allData:{},relatedID:"",relatedCRMType:"",showRelatedDetail:!1}},computed:a()({},Object(v.b)(["userInfo"]),{title:function(){return"update"===this.action.type?"编辑任务":"新建任务"}}),watch:{},created:function(){var e={priority:0,main_user_id:this.userInfo.id,owner_user_id:[this.userInfo]};if(this.action.data){var t=this.action.data;t.name&&(e.name=t.name),e.stopTime=t.stopTime||"",t.main_user_id&&(e.main_user_id=t.main_user_id),t.relatedObj&&(this.allData=t.relatedObj,e.relatedObj=t.relatedObjIds)}this.fieldForm=e,this.getField()},mounted:function(){},beforeDestroy:function(){},methods:{getField:function(){var e=[{name:"任务名称",field:"name",formType:"textarea",setting:[]},{name:"描述",field:"description",formType:"textarea",setting:[]},{name:"优先级",field:"priority",formType:"select",setting:this.getPrioritySetting()},{name:"负责人",field:"main_user_id",radio:!0,formType:"user",setting:[]},{name:"开始时间",field:"start_time",formType:"date",setting:[]},{name:"结束时间",field:"stop_time",formType:"date",setting:[]},{name:"参与人",field:"owner_user_id",radio:!1,formType:"user",setting:[]},{name:"标签",field:"lable_id",formType:"tag",setting:[]},{name:"相关信息",field:"relatedObj",formType:"relatedBusiness",setting:[]},{name:"子任务",field:"subtask",formType:"subTask",setting:[]},{name:"附件",field:"files",formType:"taskFile",setting:[]}];this.fieldList=e},getPrioritySetting:function(){return this.priorityList.map(function(e){return{label:e.label,value:e.id}})},saveClick:function(){var e=this;this.loading=!0;var t=this.$refs.crmForm.instance;t.validate(function(s){if(!s)return e.loading=!1,e.getFormErrorMessage(t),!1;e.submiteParams()})},submiteParams:function(){var e=this,t={batchId:this.batchId};this.action.params&&(t=a()({},t,this.action.params)),this.fieldList.forEach(function(s){if("user"===s.formType&&0==s.radio){var i=e.fieldForm[s.field]?e.fieldForm[s.field]:[];t[s.field]=i.join(",")}else if("tag"===s.formType){var a=e.fieldForm[s.field]?e.fieldForm[s.field]:[];t[s.field]=a.map(function(e){return e.lable_id}).join(",")}else if("relatedBusiness"===s.formType){var n=e.fieldForm[s.field]?e.fieldForm[s.field]:{};t.customer_ids=n.customerIds&&n.customerIds.length?n.customerIds:[],t.contacts_ids=n.contactsIds&&n.contactsIds.length?n.contactsIds:[],t.business_ids=n.businessIds&&n.businessIds.length?n.businessIds:[],t.contract_ids=n.contractIds&&n.contractIds.length?n.contractIds:[]}else if("subTask"===s.formType){var l=e.fieldForm[s.field]||[];t[s.field]=l.map(function(e){return{status:e.checked?5:1,owner_user_id:e.mainUser?e.mainUser.id:"",name:e.name,stop_time:e.stop_time}})}else"taskFile"!==s.formType?t[s.field]=e.fieldForm[s.field]:"taskFile"===s.formType&&(t.files=e.fieldForm[s.field]?e.fieldForm[s.field].map(function(e){return e.file_id}):[])}),Object(l.f)(t).then(function(t){e.loading=!1,e.$message.success("update"==e.action.type?"编辑成功":"添加成功"),e.close(),e.$emit("save")}).catch(function(){e.loading=!1})},formChange:function(e,t,s,i){},otherChange:function(e,t){this.$set(this.fieldForm,t.field,e.value||e),this.$refs.crmForm.instance.validateField(t.field)},checkRelatedDetail:function(e,t){this.relatedID=t[e+"_id"],this.relatedCRMType=e,this.showRelatedDetail=!0},subTaskDelete:function(e,t,s){this.fieldForm[s.field].splice(t,1)},subTaskAdd:function(e,t){var s=this.fieldForm[t.field]||[];s.push(e),this.$set(this.fieldForm,t.field,s)},httpRequest:function(e){var t=this;this.$wkUploadFile.upload({file:e.file,params:{type:"file"}}).then(function(e){var s=e.res.data||{},i=t.fieldForm.files||[];i.push(s),t.$set(t.fieldForm,"files",i),t.$message.success("上传成功")}).catch(function(){})},fileDelete:function(e,t,s){this.fieldForm.files.splice(e,1)},close:function(){this.$emit("close")}}},k=(s("5J4o"),s("KHd+")),g=Object(k.a)(_,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("xr-create",{attrs:{loading:e.loading,title:e.title},on:{close:e.close,save:e.saveClick}},[s("create-sections",{attrs:{title:"基本信息"}},[s("wk-form",{ref:"crmForm",attrs:{model:e.fieldForm,rules:e.fieldRules,"field-from":e.fieldForm,"field-list":e.fieldList,"label-position":"top"},on:{change:e.formChange},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data;return[i&&"tag"==i.formType?s("div",{staticClass:"label"},[e._l(e.fieldForm[i.field],function(t,i){return s("span",{key:i,staticClass:"item-color",style:{background:t.color?t.color:"#ccc"}},[e._v("\n            "+e._s(t.labelName||t.name)+"\n          ")])}),e._v(" "),s("div",{staticClass:"add-tag"},[s("tag-index",{attrs:{placement:"right"},on:{change:function(t){e.otherChange(t,i)}}},[s("span",{staticClass:"add-btn",attrs:{slot:"editIndex"},slot:"editIndex"},[s("i",{staticClass:"wk wk-l-plus"}),e._v(" "),s("span",{staticClass:"label"},[e._v("标签")])])])],1)],2):e._e(),e._v(" "),i&&"relatedBusiness"==i.formType?s("related-business",{attrs:{"margin-left":"0","all-data":e.allData},on:{checkInfos:function(t){e.otherChange(t,i)},checkRelatedDetail:e.checkRelatedDetail}}):e._e(),e._v(" "),i&&"subTask"==i.formType?[e.fieldForm[i.field]?e._l(e.fieldForm[i.field],function(t,a){return s("div",{key:a},[s("flexbox",{staticClass:"sub-task"},[s("div",{on:{click:function(e){e.stopPropagation()}}},[s("el-checkbox",{model:{value:t.checked,callback:function(s){e.$set(t,"checked",s)},expression:"item.checked"}})],1),e._v(" "),s("div",{staticClass:"sub-task__bd text-one-line",class:{"is-checked":t.checked}},[e._v("\n                  "+e._s(t.name)+"\n                ")]),e._v(" "),s("div",{staticClass:"edit-del-box"},[s("span",{staticClass:"xr-text-btn delete",on:{click:function(s){e.subTaskDelete(t,a,i)}}},[e._v("删除")])]),e._v(" "),t.stopTime||t.stop_time?s("div",{staticClass:"bg-color task-bg-color",staticStyle:{"margin-left":"8px"}},[e._v(e._s(e._f("moment")(t.stopTime||t.stop_time,"YYYY-MM-DD"))+" 截止")]):e._e(),e._v(" "),t.mainUser?s("xr-avatar",{staticClass:"user-img",attrs:{name:t.mainUser.realname,size:25,src:t.mainUser.img}}):e._e()],1)],1)}):e._e(),e._v(" "),e.addSubtasks?s("div",[s("span",{staticClass:"add-btn",on:{click:function(t){e.addSubtasks=!1}}},[s("i",{staticClass:"wk wk-l-plus"}),e._v(" "),s("span",{staticClass:"label"},[e._v("子任务")])])]):s("sub-task",{attrs:{"sub-task-com":"new","check-disabled":!1},on:{add:function(t){e.subTaskAdd(t,i)},close:function(t){e.addSubtasks=!0}}})]:e._e(),e._v(" "),i&&"taskFile"==i.formType?[e._l(e.fieldForm[i.field],function(t,a){return s("file-cell",{key:a,attrs:{data:t,list:e.fieldForm[i.field],"cell-index":a,"show-delete":""},on:{delete:function(t){e.fileDelete(arguments[0],arguments[1],i)}}})}),e._v(" "),s("el-upload",{staticClass:"upload-file",attrs:{"http-request":e.httpRequest,action:"https://jsonplaceholder.typicode.com/posts/",multiple:"","list-type":"picture"}},[s("span",{staticClass:"add-btn"},[s("i",{staticClass:"wk wk-l-plus"}),e._v(" "),s("span",{staticClass:"label"},[e._v("附件")])])])]:e._e()]}}])})],1),e._v(" "),s("c-r-m-full-screen-detail",{attrs:{visible:e.showRelatedDetail,"crm-type":e.relatedCRMType,id:e.relatedID},on:{"update:visible":function(t){e.showRelatedDetail=t}}})],1)},[],!1,null,"908a22de",null);g.options.__file="Create.vue";var C=g.exports,y=s("jtZb"),T={relatedObj:{},relatedObjIds:{}},F={name:"TaskQuickAdd",components:{XhUserCell:n.p,TaskCreate:C},props:{showStyle:{type:String,default:"default"},params:Object,props:Object},data:function(){return{sendLoading:!1,isUnfold:!1,sendContent:"",sendStopTime:"",mainUser:[],taskCreateShow:!1,createAction:{type:"save"}}},computed:{createMainUser:function(){return this.mainUser&&this.mainUser.length?this.mainUser[0]:null},config:function(){return Object(y.a)(a()({},T),this.props||{})}},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{inputFocus:function(){var e=this;this.$emit("focus"),this.isUnfold=!0,this.$nextTick(function(){e.$refs.input.focus()})},selectMainUser:function(e){this.mainUser=e.value},send:function(){var e=this;if(this.sendContent.length){this.sendLoading=!0;var t={name:this.sendContent,stop_time:this.sendStopTime,main_user_id:this.createMainUser?this.createMainUser.id:""};this.params&&(t=a()({},t,this.params)),Object(l.f)(t).then(function(t){e.sendLoading=!1,e.$message.success("新建成功"),e.resetSendData(),e.$emit("send")}).catch(function(){e.sendLoading=!1})}else this.$message.error("请填写任务标题")},resetSendData:function(){this.sendContent="",this.sendStopTime="",this.mainUser=[],this.isUnfold=!1},createSuccess:function(){this.resetSendData(),this.$emit("send")},addClose:function(){this.isUnfold=!1},moreClick:function(){this.createAction={type:"save",data:{name:this.sendContent,stopTime:this.sendStopTime,mainUserId:this.createMainUser?this.createMainUser.id:"",relatedObj:this.config.relatedObj,relatedObjIds:this.config.relatedObjIds},params:this.params},this.taskCreateShow=!0}}},w=(s("EoEl"),Object(k.a)(F,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.sendLoading,expression:"sendLoading"}],staticClass:"task-quick-add",class:["add",{unfold:e.isUnfold,"is-close":!e.isUnfold,"hide-border":"hideBorder"===e.showStyle&&!e.isUnfold}]},[e.isUnfold?s("i",{staticClass:"wk wk-close",on:{click:e.addClose}}):e._e(),e._v(" "),s("el-input",{ref:"input",staticClass:"input",attrs:{maxlength:100,"prefix-icon":e.isUnfold?"":"el-icon-plus",placeholder:"添加任务"},on:{focus:e.inputFocus},model:{value:e.sendContent,callback:function(t){e.sendContent=t},expression:"sendContent"}}),e._v(" "),s("flexbox",{staticClass:"add-info"},[s("el-date-picker",{ref:"endTime",class:{"no-time-top":!e.sendStopTime},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:""},model:{value:e.sendStopTime,callback:function(t){e.sendStopTime=t},expression:"sendStopTime"}}),e._v(" "),s("xh-user-cell",{attrs:{value:e.mainUser,radio:"",placement:"top"},on:{"value-change":e.selectMainUser}},[s("div",{staticClass:"select-user",attrs:{slot:"reference"},slot:"reference"},[e.createMainUser?s("xr-avatar",{staticClass:"add-info__interval",attrs:{name:e.createMainUser.realname,size:24,src:e.createMainUser.img}}):s("i",{staticClass:"wk wk-persons add-info__btn add-info__interval"})],1)]),e._v(" "),s("i",{staticClass:"el-icon-more add-info__btn add-info__interval",on:{click:e.moreClick}})],1),e._v(" "),"hideBorder"===e.showStyle?s("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.send,expression:"send"}],staticClass:"send-btn",attrs:{type:"primary"}},[e._v("保存")]):s("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.send,expression:"send"}],staticClass:"send-btn",attrs:{icon:"wk wk-top",type:"primary"}},[e._v("发布")]),e._v(" "),e.taskCreateShow?s("task-create",{attrs:{action:e.createAction},on:{save:e.createSuccess,close:function(t){e.taskCreateShow=!1}}}):e._e()],1)},[],!1,null,"0a8ddb0f",null));w.options.__file="TaskQuickAdd.vue";t.a=w.exports},EoEl:function(e,t,s){"use strict";var i=s("f2A0");s.n(i).a},SFPr:function(e,t,s){},f2A0:function(e,t,s){}}]);