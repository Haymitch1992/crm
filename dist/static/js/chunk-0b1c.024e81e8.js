(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0b1c"],{"2f65":function(e,t,a){},"7mY3":function(e,t,a){"use strict";var i=a("2f65");a.n(i).a},"9GgJ":function(e,t,a){"use strict";var i={name:"XrHeader",components:{},props:{iconClass:[String,Array],iconColor:String,label:String,showSearch:{type:Boolean,default:!1},searchIconType:{type:String,default:"text"},placeholder:{type:String,default:"请输入内容"},ftTop:{type:String,default:"15px"},content:[String,Number],inputAttr:{type:Object,default:function(){}}},data:function(){return{search:""}},computed:{},watch:{content:{handler:function(){this.search!=this.content&&(this.search=this.content)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{inputChange:function(){this.$emit("update:content",this.search)},searchClick:function(){this.$emit("search",this.search)}}},s=(a("7mY3"),a("KHd+")),l=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("flexbox",{staticClass:"xr-header"},[e.iconClass?a("div",{staticClass:"xr-header__icon",style:{backgroundColor:e.iconColor}},[a("i",{class:e.iconClass})]):e._e(),e._v(" "),a("div",{staticClass:"xr-header__label"},[e.$slots.label?e._t("label"):[e._v(e._s(e.label))]],2),e._v(" "),e.showSearch?a("el-input",e._b({staticClass:"xr-header__search",class:{"is-text":"text"===e.searchIconType},style:{"margin-top":e.ftTop},attrs:{placeholder:e.placeholder},on:{input:e.inputChange},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.searchClick(t):null}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},"el-input",e.inputAttr,!1),["text"===e.searchIconType?a("el-button",{attrs:{slot:"append",type:"primary"},nativeOn:{click:function(t){return e.searchClick(t)}},slot:"append"},[e._v("搜索")]):a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(t){return e.searchClick(t)}},slot:"append"})],1):e._e(),e._v(" "),a("div",{staticClass:"xr-header__ft",style:{top:e.ftTop}},[e._t("ft")],2)],1)},[],!1,null,"acb6d756",null);l.options.__file="index.vue";t.a=l.exports},C5av:function(e,t,a){},KWCB:function(e,t,a){"use strict";var i=a("n9M2");a.n(i).a},Nsrh:function(e,t,a){"use strict";var i=a("gJLk");a.n(i).a},Q9Sp:function(e,t,a){},Qg64:function(e,t,a){},Xjm1:function(e,t,a){"use strict";var i=a("Qg64");a.n(i).a},YIw5:function(e,t,a){"use strict";var i=a("Q9Sp");a.n(i).a},crlY:function(e,t,a){},gJLk:function(e,t,a){},"hmS/":function(e,t,a){"use strict";var i=a("C5av");a.n(i).a},jzeO:function(e,t,a){"use strict";var i={name:"Reminder",components:{},props:{closeShow:{type:Boolean,default:!1},content:{type:String,default:"内容"},fontSize:{type:String,default:"13"}},data:function(){return{}},computed:{},mounted:function(){},destroyed:function(){},methods:{close:function(){this.$emit("close")}}},s=(a("KWCB"),a("KHd+")),l=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("flexbox",{staticClass:"reminder-wrapper"},[a("flexbox",{staticClass:"reminder-body",attrs:{align:"stretch"}},[a("i",{staticClass:"wk wk-warning reminder-icon"}),e._v(" "),a("div",{staticClass:"reminder-content",style:{"font-size":e.fontSize+"px"},domProps:{innerHTML:e._s(e.content)}}),e._v(" "),e._t("default"),e._v(" "),e.closeShow?a("i",{staticClass:"el-icon-close close",on:{click:e.close}}):e._e()],2)],1)},[],!1,null,"36522fcc",null);l.options.__file="Reminder.vue";t.a=l.exports},mFdF:function(e,t,a){"use strict";var i=a("zx11");a.n(i).a},n9M2:function(e,t,a){},"qpl/":function(e,t,a){"use strict";a.r(t);var i=a("7Dod"),s=a("jzeO"),l=a("9GgJ"),n=a("QbLZ"),o=a.n(n),r=a("4d7F"),c=a.n(r),d=a("ViDN"),u=a("EP+0"),m=a("8GhS"),v={name:"RecycleRule",components:{},props:{trueLabel:[String,Number],isEdit:Boolean,data:{type:Object,default:function(){return{type:"",deal_handle:0,business_handle:0,level_conf:null,level:[]}}},levelCustomer:{type:Array,default:function(){return[]}}},data:function(){return{allCustomerData:[{level:"所有客户",limit_day:""}],levelCustomerData:[]}},computed:{typeName:function(){return{1:"超过N天“无新建跟进（跟进记录）”的客户，由系统定时退回公海客户池",2:"超过N天“无新建商机”的客户，由系统定时退回公海客户池",3:"超过N天“未成交”的客户，由系统定时退回公海客户池"}[parseInt(this.trueLabel)]},limitDayName:function(){return{1:"未跟进天数",2:"未新建天数",3:"未成交天数"}[parseInt(this.trueLabel)]},limitDayUnit:function(){return{1:"未跟进",2:"未新建商机",3:"未成交"}[parseInt(this.trueLabel)]},dealHandleShow:function(){return 1==this.trueLabel||2==this.trueLabel},businessHandleShow:function(){return 1==this.trueLabel||3==this.trueLabel}},watch:{"data.level_conf":{handler:function(e,t){1==e?this.isEdit&&null==t?this.data.level=this.getEditData(this.allCustomerData,this.data.level):this.data.level=this.allCustomerData:this.isEdit&&null==t?this.levelCustomerData&&this.levelCustomerData.length&&(this.data.level=this.getEditData(this.levelCustomerData,this.data.level)):this.data.level=this.levelCustomerData},deep:!0,immediate:!0},levelCustomer:{handler:function(e){e&&e.length&&(this.levelCustomerData=e.map(function(e){var t={limit_day:""};return t.level=e,t}),2==this.data.level_conf&&this.isEdit&&this.levelCustomerData&&this.levelCustomerData.length&&(this.data.level=this.getEditData(this.levelCustomerData,this.data.level)))},immediate:!0}},created:function(){},beforeDestroy:function(){},methods:{getEditData:function(e,t){for(var a=0;a<e.length;a++)for(var i=e[a],s=0;s<t.length;s++){var l=t[s];l.level==i.level&&(i.limit_day=l.limit_day)}return e},inputLimit:function(e){e.limit_day=e.limit_day.replace(/[^0-9]/g,"")}}},_=(a("hmS/"),a("KHd+")),f=Object(_.a)(v,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recycle-rule"},[a("el-checkbox",{attrs:{"true-label":e.trueLabel},model:{value:e.data.type,callback:function(t){e.$set(e.data,"type",t)},expression:"data.type"}},[e._v(e._s(e.typeName))]),e._v(" "),e.data.type==e.trueLabel?a("div",{staticClass:"recycle-rule__content"},[a("div",[a("span",{staticClass:"check-label"},[e._v("选择不进入公海客户")]),e._v(" "),e.dealHandleShow?a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.data.deal_handle,callback:function(t){e.$set(e.data,"deal_handle",t)},expression:"data.deal_handle"}},[e._v("已成交客户"),a("el-tooltip",{attrs:{content:"已成交是指客户状态为“已成交”",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})])],1):e._e(),e._v(" "),e.businessHandleShow?a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.data.business_handle,callback:function(t){e.$set(e.data,"business_handle",t)},expression:"data.business_handle"}},[e._v("有商机客户")]):e._e()],1),e._v(" "),a("div",[a("el-radio",{attrs:{label:1},model:{value:e.data.level_conf,callback:function(t){e.$set(e.data,"level_conf",t)},expression:"data.level_conf"}},[e._v("所有客户统一设置")]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.allCustomerData,border:""}},[a("el-table-column",{attrs:{prop:"level",label:"客户",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:e.limitDayName,prop:"limit_day"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("超过")]),e._v(" "),a("el-input",{staticClass:"value-input",nativeOn:{keyup:function(a){e.inputLimit(t.row)}},model:{value:t.row.limit_day,callback:function(a){e.$set(t.row,"limit_day",a)},expression:"scope.row.limit_day"}}),e._v(" "),a("span",[e._v("天"+e._s(e.limitDayUnit)+"，进入公海")])]}}])})],1)],1),e._v(" "),a("div",[a("el-radio",{attrs:{label:2},model:{value:e.data.level_conf,callback:function(t){e.$set(e.data,"level_conf",t)},expression:"data.level_conf"}},[e._v("根据客户级别分别设置")]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.levelCustomerData,border:""}},[a("el-table-column",{attrs:{prop:"level",label:"客户",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:e.limitDayName,prop:"limit_day"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("超过")]),e._v(" "),a("el-input",{staticClass:"value-input",nativeOn:{keyup:function(a){e.inputLimit(t.row)}},model:{value:t.row.limit_day,callback:function(a){e.$set(t.row,"limit_day",a)},expression:"scope.row.limit_day"}}),e._v(" "),a("span",[e._v("天"+e._s(e.limitDayUnit)+"，进入公海")])]}}])})],1)],1)]):e._e()],1)},[],!1,null,"e85568ea",null);f.options.__file="RecycleRule.vue";var h=f.exports,p={name:"PoolAdd",components:{CreateView:d.a,CreateSections:u.a,XhInput:m.g,XhUserCell:m.p,XhStrucUserCell:m.m,RecycleRule:h},props:{action:{type:Object,default:function(){return{type:"save",id:"",data:{}}}}},data:function(){return{loading:!1,baseFrom:null,baseRules:{pool_name:[{required:!0,message:"请输入公海名称",trigger:"blur"}],adminUsers:[{required:!0,message:"请选择公海管理员",trigger:["blur","change"]}],memberUsers:[{required:!0,validator:function(e,t,a){t&&(t.users&&t.users.length||t.strucs&&t.strucs.length)?a():a(new Error("请选择公海成员"))},trigger:["blur","change"]}]},recycleRuleData:null,levelCustomerName:[],customerPoolFields:[],requestFields:{before_owner_day:"前负责人限制领取天数需大于0",receive_count:"领取频率限制个数需大于0",remain_day:"提醒规则天数需大于0"}}},computed:{title:function(){return this.isEdit?"编辑公海":"新建公海"},isEdit:function(){return this.action&&"update"==this.action.type}},watch:{},created:function(){this.isEdit?this.getDetail():this.getCreateInfo(),this.getLevelCustomerData()},beforeDestroy:function(){},methods:{getLevelCustomerData:function(){var e=this;Object(i.x)().then(function(t){e.levelCustomerName=t.data||[]}).catch(function(){})},getDetail:function(){var e=this;this.loading=!0,Object(i.C)({pool_id:this.action.id}).then(function(t){e.getEditInfo(t.data),e.loading=!1}).catch(function(){e.loading=!1})},getEditInfo:function(e){var t=this;e.user_info&&e.user_info.forEach(function(e){e.type="user"}),this.baseFrom={pool_name:e.pool_name,adminUsers:e.admin_user_info,memberUsers:{users:e.user_info,strucs:e.department_info},before_owner_conf:e.before_owner_conf,before_owner_day:e.before_owner_day,receive_conf:e.receive_conf,remind_conf:e.remind_conf,receive_count:e.receive_count,remain_day:e.remain_day,recycle_conf:e.recycle_conf},this.recycleRuleData=this.getEditRule(e.rule),this.getCustomerPoolFields(e.field||[]).then(function(e){t.customerPoolFields=e})},getEditRule:function(e){var t=[{type:"",deal_handle:0,business_handle:0,level_conf:1,level:[]},{type:"",deal_handle:0,business_handle:0,level_conf:1,level:[]},{type:"",deal_handle:0,business_handle:0,level_conf:1,level:[]}];if(e)for(var a=0;a<e.length;a++){var i=e[a];i.level=i.level_setting,t.splice(i.type-1,1,i)}return t},getCreateInfo:function(){var e=this;this.baseFrom={pool_name:"",adminUsers:[],memberUsers:{users:[],strucs:[]},before_owner_conf:0,before_owner_day:"",receive_conf:0,receive_count:"",remind_conf:0,remain_day:"",recycle_conf:1},this.recycleRuleData=this.getEditRule(),this.getCustomerPoolFields().then(function(t){e.customerPoolFields=t})},getCustomerPoolFields:function(e){var t=this;return new c.a(function(a,s){Object(i.y)({types:"crm_customer",module:"crm",action:"pool",controller:"customer",pool_id:t.action.id}).then(function(i){var s=(i.data||[]).map(function(t){return t.is_hidden=t.is_hidden=e?1:0,t});a(e?t.getEditFields(s,e):s)}).catch(function(){s()})})},getEditFields:function(e,t){for(var a=0;a<e.length;a++)for(var i=e[a],s=0;s<t.length;s++){var l=t[s];i.field_id?i.field_id===l.field_id&&(i.setting_id=l.setting_id,i.is_hidden=l.is_hidden):i.field===l.field_name&&(i.setting_id=l.setting_id,i.is_hidden=l.is_hidden)}return e},userChange:function(e){this.baseFrom.adminUsers=e.value,this.$refs.ruleForm.validateField("adminUsers")},strcUserChange:function(e){this.baseFrom.memberUsers=e.value,this.$refs.ruleForm.validateField("memberUsers")},saveClick:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t){if(e.$refs.ruleForm.fields)for(var a=0;a<e.$refs.ruleForm.fields.length;a++){var i=e.$refs.ruleForm.fields[a];if("error"==i.validateState){e.$message.error(i.validateMessage);break}}return!1}var s=e.getRequestParams();s&&e.uploadPoolSet(s)})},uploadPoolSet:function(e){var t=this;this.isEdit&&(e.pool_id=this.action.id),this.loading=!0,Object(i.z)(e).then(function(e){t.$emit("save"),t.$message.success(t.isEdit?"编辑成功":"新建成功"),t.loading=!1,t.hidenView()}).catch(function(){t.loading=!1})},requestFieldsVerify:function(e){return!("before_owner_day"==e&&1==this.baseFrom.before_owner_conf&&(!this.baseFrom[e]||this.baseFrom[e]<=0))&&(!("receive_count"==e&&1==this.baseFrom.receive_conf&&(!this.baseFrom[e]||this.baseFrom[e]<=0))&&!("remain_day"==e&&1==this.baseFrom.remind_conf&&(!this.baseFrom[e]||this.baseFrom[e]<=0)))},getRequestParams:function(){var e={};for(var t in this.baseFrom){if(!this.requestFieldsVerify(t))return void this.$message.error(this.requestFields[t]);if("adminUsers"==t){var a=this.baseFrom.adminUsers||[];e.admin_user_ids=a.map(function(e){return e.id}).join(",")}else if("memberUsers"==t){var i=this.baseFrom.memberUsers||{},s=i.users||[],l=i.strucs||[];e.user_ids=s.map(function(e){return e.id}).join(","),e.department_ids=l.map(function(e){return e.id}).join(",")}else e[t]=this.baseFrom[t]}if(1==this.baseFrom.recycle_conf){if(!this.recycleRuleData.filter(function(e){return e.type}).length)return void this.$message.error("请勾选自动回收规则");for(var n=[],r=0;r<this.recycleRuleData.length;r++){var c=this.recycleRuleData[r];if((c=o()({},c)).type){for(var d=!1,u=[],m=0;m<c.level.length;m++){var v=c.level[m];v.limit_day&&v.limit_day>0&&(d=!0,u.push(v))}if(c.level=u,n.push(c),!d)return void this.$message.error("收回规则超过天数需大于0")}}e.rule=n}else e.rule=[];if(!(this.customerPoolFields.filter(function(e){return 0==e.is_hidden}).length<2))return e.field=this.customerPoolFields,e;this.$message.error("公海字段至少要显示两个")},hidenView:function(){this.$emit("hiden-view")},inputLimit:function(e){this.baseFrom[e]=this.baseFrom[e].replace(/[^0-9]/g,"")}}},b=(a("Nsrh"),Object(_.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("create-view",{attrs:{loading:e.loading,"body-style":{height:"100%"}}},[a("flexbox",{staticClass:"pool-add-container",attrs:{direction:"column",align:"stretch"}},[a("flexbox",{staticClass:"pool-add-header"},[a("div",{staticStyle:{flex:"1","font-size":"17px",color:"#333","font-weight":"bold"}},[e._v(e._s(e.title))]),e._v(" "),a("i",{staticClass:"el-icon-close close",on:{click:e.hidenView}})]),e._v(" "),a("div",{staticClass:"pool-add-content"},[e.baseFrom?a("create-sections",{attrs:{title:"基本信息"}},[a("flexbox",{staticStyle:{"margin-top":"8px"},attrs:{direction:"column",align:"stretch"}},[a("el-form",{ref:"ruleForm",staticClass:"pool-add-items",attrs:{model:e.baseFrom,rules:e.baseRules,"label-position":"top"}},[a("el-form-item",{staticClass:"pool-add-item pool-add-item__left",attrs:{prop:"pool_name"}},[a("div",{staticStyle:{display:"inline-block"},attrs:{slot:"label"},slot:"label"},[a("div",{staticClass:"xr-form-label"},[e._v("\n                  公海名称\n                ")])]),e._v(" "),a("el-input",{attrs:{maxlength:100},model:{value:e.baseFrom.pool_name,callback:function(t){e.$set(e.baseFrom,"pool_name",t)},expression:"baseFrom.pool_name"}})],1),e._v(" "),a("el-form-item",{staticClass:"pool-add-item pool-add-item__right",attrs:{prop:"adminUsers"}},[a("div",{staticStyle:{display:"inline-block"},attrs:{slot:"label"},slot:"label"},[a("div",{staticClass:"xr-form-label"},[e._v("\n                  公海管理员"),a("el-tooltip",{attrs:{content:"客户公海管理员可对客户公海客户进行领取、分配、删除、导出等操作",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})])],1)]),e._v(" "),a("xh-user-cell",{attrs:{radio:!1,value:e.baseFrom.adminUsers},on:{"value-change":e.userChange}})],1),e._v(" "),a("el-form-item",{staticClass:"pool-add-item pool-add-item__left",attrs:{prop:"memberUsers"}},[a("div",{staticStyle:{display:"inline-block"},attrs:{slot:"label"},slot:"label"},[a("div",{staticClass:"xr-form-label"},[e._v("\n                  公海成员"),a("el-tooltip",{attrs:{content:"客户公海规则对客户公海成员生效(超级管理员除外)，客户公海成员可查看以及领取公海客户",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-help wk-help-tips"})])],1)]),e._v(" "),a("xh-struc-user-cell",{attrs:{value:e.baseFrom.memberUsers},on:{"value-change":e.strcUserChange}})],1)],1)],1)],1):e._e(),e._v(" "),e.recycleRuleData?a("create-sections",{attrs:{title:"规则设置"}},[a("flexbox",{staticClass:"row",attrs:{align:"stretch"}},[a("div",{staticClass:"row-label"},[e._v("前负责人领取规则")]),e._v(" "),a("div",{staticClass:"row-content"},[a("el-radio-group",{model:{value:e.baseFrom.before_owner_conf,callback:function(t){e.$set(e.baseFrom,"before_owner_conf",t)},expression:"baseFrom.before_owner_conf"}},[a("el-radio",{attrs:{label:0}},[e._v("不限制")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("限制")])],1),e._v(" "),1===e.baseFrom.before_owner_conf?a("div",{staticClass:"xr-input"},[a("span",[e._v("前负责人")]),e._v(" "),a("el-input",{nativeOn:{keyup:function(t){e.inputLimit("before_owner_day")}},model:{value:e.baseFrom.before_owner_day,callback:function(t){e.$set(e.baseFrom,"before_owner_day",t)},expression:"baseFrom.before_owner_day"}}),e._v(" "),a("span",[e._v("天内不允许领取该客户")])],1):e._e()],1)]),e._v(" "),a("flexbox",{staticClass:"row",attrs:{align:"stretch"}},[a("div",{staticClass:"row-label"},[e._v("领取频率规则")]),e._v(" "),a("div",{staticClass:"row-content"},[a("el-radio-group",{model:{value:e.baseFrom.receive_conf,callback:function(t){e.$set(e.baseFrom,"receive_conf",t)},expression:"baseFrom.receive_conf"}},[a("el-radio",{attrs:{label:0}},[e._v("不限制")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("限制")])],1),e._v(" "),1===e.baseFrom.receive_conf?a("div",{staticClass:"xr-input"},[a("span",[e._v("每天最多领取")]),e._v(" "),a("el-input",{nativeOn:{keyup:function(t){e.inputLimit("receive_count")}},model:{value:e.baseFrom.receive_count,callback:function(t){e.$set(e.baseFrom,"receive_count",t)},expression:"baseFrom.receive_count"}}),e._v(" "),a("span",[e._v("个公海客户")])],1):e._e()],1)]),e._v(" "),a("flexbox",{staticClass:"row",attrs:{align:"stretch"}},[a("div",{staticClass:"row-label"},[e._v("提醒规则")]),e._v(" "),a("div",{staticClass:"row-content"},[a("el-radio-group",{model:{value:e.baseFrom.remind_conf,callback:function(t){e.$set(e.baseFrom,"remind_conf",t)},expression:"baseFrom.remind_conf"}},[a("el-radio",{attrs:{label:0}},[e._v("不提醒")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("提醒")])],1),e._v(" "),1===e.baseFrom.remind_conf?a("div",{staticClass:"xr-input"},[a("span",[e._v("提前")]),e._v(" "),a("el-input",{nativeOn:{keyup:function(t){e.inputLimit("remain_day")}},model:{value:e.baseFrom.remain_day,callback:function(t){e.$set(e.baseFrom,"remain_day",t)},expression:"baseFrom.remain_day"}}),e._v(" "),a("span",[e._v("天提醒负责人")])],1):e._e()],1)]),e._v(" "),a("flexbox",{staticClass:"row",attrs:{align:"stretch"}},[a("div",{staticClass:"row-label"},[e._v("收回规则")]),e._v(" "),a("div",{staticClass:"row-content"},[a("el-radio-group",{model:{value:e.baseFrom.recycle_conf,callback:function(t){e.$set(e.baseFrom,"recycle_conf",t)},expression:"baseFrom.recycle_conf"}},[a("el-radio",{attrs:{label:1}},[e._v("自动回收")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("不自动回收")])],1)],1)]),e._v(" "),1==e.baseFrom.recycle_conf?e._l(e.recycleRuleData,function(t,i){return a("recycle-rule",{key:i,attrs:{data:t,"level-customer":e.levelCustomerName,"true-label":i+1,"is-edit":e.isEdit}})}):e._e(),e._v(" "),a("flexbox",{staticClass:"row",attrs:{align:"stretch"}},[a("div",{staticClass:"row-label"},[e._v("公海字段设置")]),e._v(" "),a("div",{staticClass:"row-content"},[a("div",{staticClass:"field-set"},[a("div",{staticClass:"field-set__name"},[e._v("\n                选择公海字段\n              ")]),e._v(" "),a("flexbox",{attrs:{wrap:"wrap"}},e._l(e.customerPoolFields,function(t,i){return a("el-checkbox",{key:i,attrs:{"true-label":0,"false-label":1},model:{value:t.is_hidden,callback:function(a){e.$set(t,"is_hidden",a)},expression:"item.is_hidden"}},[e._v(e._s(t.name))])}))],1)])])],2):e._e()],1),e._v(" "),a("div",{staticClass:"handle-bar"},[a("el-button",{staticClass:"handle-button",nativeOn:{click:function(t){return e.hidenView(t)}}},[e._v("取消")]),e._v(" "),a("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.saveClick,expression:"saveClick"}],staticClass:"handle-button",attrs:{type:"primary"}},[e._v("保存")])],1)],1)],1)},[],!1,null,"c9c3610a",null));b.options.__file="PoolAdd.vue";var g=b.exports,y=a("Ew9n"),C={name:"DetailRecycleRule",components:{},props:{data:null},data:function(){return{}},computed:{typeName:function(){return{1:"超过N天“无新建跟进（跟进记录）”的客户，由系统定时退回公海客户池",2:"超过N天“无新建商机”的客户，由系统定时退回公海客户池",3:"超过N天“未成交”的客户，由系统定时退回公海客户池"}[parseInt(this.data.type)]},limitDayName:function(){return{1:"未跟进天数",2:"未新建天数",3:"未成交天数"}[parseInt(this.data.type)]},dealHandleShow:function(){return 1==this.data.type||2==this.data.type},businessHandleShow:function(){return 1==this.data.type||3==this.data.type}},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{getLimitDayUnit:function(e){return{1:"未跟进",2:"未新建商机",3:"未成交"}[e]}}},w=(a("Xjm1"),Object(_.a)(C,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detail-recycle-rule"},[a("div",[e._v(e._s(e.typeName))]),e._v(" "),a("div",{staticClass:"detail-recycle-rule__content"},[a("div",{staticClass:"range-rule"},[a("span",[e._v("选择不进入公海客户")]),e._v(" "),e.dealHandleShow&&1===e.data.deal_handle?a("span",[e._v("已成交客户")]):e._e(),e._v(" "),e.businessHandleShow&&1===e.data.business_handle?a("span",[e._v("有商机客户")]):e._e()]),e._v(" "),a("div",[1===e.data.level_conf?a("div",{staticClass:"type-rule"},[e._v("所有客户统一设置")]):2===e.data.level_conf?a("div",{staticClass:"type-rule"},[e._v("根据客户级别分别设置")]):e._e(),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.data.level_setting,border:""}},[a("el-table-column",{attrs:{prop:"level",label:"客户",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:e.limitDayName,prop:"limit_day"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s("超过"+t.row.limit_day+"天"+e.getLimitDayUnit(e.data.type)+"，进入公海"))])]}}])})],1)],1)])])},[],!1,null,"4bd9b3fa",null));w.options.__file="DetailRecycleRule.vue";var x=w.exports,k={name:"PoolDetail",components:{SlideView:y.a,CreateSections:u.a,DetailRecycleRule:x},filters:{fieldNameFilter:function(e){return e.filter(function(e){return 0===e.is_hidden}).map(function(e){return e.name}).join("，")}},mixins:[],props:{id:[String,Number],noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,detail:null}},computed:{},watch:{id:function(e){this.detail=null,this.getDetail()}},mounted:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.loading=!0,Object(i.C)({pool_id:this.id}).then(function(t){e.detail=t.data,e.loading=!1}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide")}}},F=(a("ztXe"),Object(_.a)(k,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-view",attrs:{"no-listener-class":e.noListenerClass},on:{close:e.hideView}},[e.detail?a("flexbox",{staticClass:"detail-main",attrs:{orient:"vertical",align:"stretch"}},[a("flexbox",{staticClass:"detail-header"},[a("div",{staticClass:"header-icon",staticStyle:{backgroundColor:"#19B5F6"}},[a("i",{staticClass:"wk wk-s-seas"})]),e._v(" "),a("div",[a("div",{staticClass:"header-title"},[e._v("公海名称")]),e._v(" "),a("div",{staticClass:"header-name"},[e._v(e._s(e.detail.pool_name))])]),e._v(" "),a("span",{staticClass:"customer-num"},[e._v("\n        客户数量："),a("span",{staticClass:"customer-num__value"},[e._v(e._s(e.detail.customer_count||0)+"个")])])]),e._v(" "),a("flexbox",{staticClass:"member",attrs:{align:"stretch"}},[a("flexbox-item",{staticClass:"member-item"},[a("div",{staticClass:"label"},[e._v("公海管理员")]),e._v(" "),a("div",{staticClass:"value"},e._l(e.detail.admin_user_info,function(e,t){return a("xr-avatar",{key:"admin"+t,attrs:{name:e.realname,size:32,src:e.img||e.thumb_img}})}))]),e._v(" "),a("flexbox-item",{staticClass:"member-item"},[a("div",{staticClass:"label"},[e._v("公海成员")]),e._v(" "),a("div",{staticClass:"value"},[e._l(e.detail.user_info,function(e,t){return a("xr-avatar",{key:"member"+t,attrs:{name:e.realname,size:32,src:e.img||e.thumb_img}})}),e._v(" "),e._l(e.detail.department_info,function(e,t){return a("xr-avatar",{key:"dept"+t,attrs:{title:"dept"+t,name:e.name,size:32,background:"#FB6523"}})})],2)])],1),e._v(" "),a("create-sections",{attrs:{title:"规则设置"}},[a("div",{staticClass:"rule"},[a("flexbox",{staticClass:"rule-item",attrs:{align:"stretch"}},[a("div",{staticClass:"label"},[e._v("前负责人领取规则")]),e._v(" "),a("div",{staticClass:"value"},[e._v(e._s(1==e.detail.before_owner_conf?"前负责人"+e.detail.before_owner_day+"天内不允许领取该客户":"不限制"))])]),e._v(" "),a("flexbox",{staticClass:"rule-item",attrs:{align:"stretch"}},[a("div",{staticClass:"label"},[e._v("领取频率规则")]),e._v(" "),a("div",{staticClass:"value"},[e._v(e._s(1==e.detail.receive_conf?"每天最多领取"+e.detail.receive_count+"个公海客户":"不限制"))])]),e._v(" "),a("flexbox",{staticClass:"rule-item",attrs:{align:"stretch"}},[a("div",{staticClass:"label"},[e._v("提醒规则")]),e._v(" "),a("div",{staticClass:"value"},[e._v(e._s(1==e.detail.remind_conf?"提前"+e.detail.remain_day+"天提醒负责人":"不提醒"))])]),e._v(" "),a("flexbox",{staticClass:"rule-item",attrs:{align:"stretch"}},[a("div",{staticClass:"label"},[e._v("收回规则")]),e._v(" "),0==e.detail.recycle_conf?a("div",{staticClass:"value"},[e._v("不自动回收")]):a("div",{staticClass:"value rule-value"},e._l(e.detail.rule,function(e,t){return a("detail-recycle-rule",{key:t,attrs:{data:e}})}))]),e._v(" "),a("flexbox",{staticClass:"rule-item",attrs:{align:"stretch"}},[a("div",{staticClass:"label"},[e._v("公海字段")]),e._v(" "),a("div",{staticClass:"value field-value"},[e._v(e._s(e._f("fieldNameFilter")(e.detail.field)))])])],1)])],1):e._e()],1)},[],!1,null,"3f8b1047",null));F.options.__file="PoolDetail.vue";var S=F.exports,D=a("XJYT"),$={name:"PoolTransfer",components:{},mixins:[],props:{visible:{type:Boolean,required:!0,default:!1},id:[String,Number]},data:function(){return{selectId:"",allList:[]}},computed:{list:function(){var e=this;return this.allList.filter(function(t){return t.pool_id!=e.id})}},watch:{list:{handler:function(){this.selectId=this.list&&this.list.length>0?this.list[0].pool_id:""},immediate:!0},visible:function(e){e&&0===this.list.length&&this.getList()}},mounted:function(){},methods:{getList:function(){var e=this,t=D.Loading.service({target:document.querySelector('.el-dialog[aria-label="转移"]')});Object(i.E)({limit:9999}).then(function(a){e.allList=a.data.list||[],t&&t.close()}).catch(function(){t&&t.close()})},handleCancel:function(){this.$emit("update:visible",!1)},handleConfirm:function(){var e=this;if(this.selectId){var t=D.Loading.service({target:document.querySelector('.el-dialog[aria-label="转移"]')});Object(i.F)({source_pool_id:this.id,target_pool_id:this.selectId}).then(function(a){e.$message({type:"success",message:"操作成功"}),t.close(),e.$emit("transfer"),e.handleCancel()}).catch(function(){t.close()})}}}},L=(a("mFdF"),Object(_.a)($,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1,title:"转移",width:"450px"},on:{close:e.handleCancel}},[a("div",{staticClass:"handle-box"},[a("flexbox",{staticClass:"handle-item"},[a("div",{staticClass:"handle-item-name"},[e._v("转移到：")]),e._v(" "),a("el-select",{model:{value:e.selectId,callback:function(t){e.selectId=t},expression:"selectId"}},e._l(e.list,function(e){return a("el-option",{key:e.pool_id,attrs:{label:e.pool_name,value:e.pool_id}})}))],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){return e.handleCancel(t)}}},[e._v("取消")]),e._v(" "),a("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.handleConfirm,expression:"handleConfirm"}],attrs:{type:"primary"}},[e._v("保存")])],1)])},[],!1,null,"207ed69f",null));L.options.__file="PoolTransfer.vue";var E=L.exports,z={name:"SystemPool",components:{Reminder:s.a,XrHeader:l.a,PoolAdd:g,PoolDetail:S,PoolTransfer:E},mixins:[],data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-284,currentPage:1,pageSize:15,pageSizes:[15,30,45,60],total:0,list:[],createAction:{type:"save"},createShow:!1,detailId:"",detailShow:!1,transferShow:!1}},computed:{},mounted:function(){var e=this;window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-284},this.getList()},methods:{handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},getList:function(){var e=this;this.loading=!0,Object(i.D)({page:this.currentPage,limit:this.pageSize}).then(function(t){e.list=t.data.list,e.total=t.data.count,e.loading=!1}).catch(function(){e.loading=!1})},fieldFormatter:function(e,t){return"status"===t.property?0===e.status?"停用":"启用":e[t.property]},cellClassName:function(e){e.row;var t=e.column;e.rowIndex,e.columnIndex;return"pool_name"===t.property?"can-visit--underline":""},addClick:function(){this.createAction={type:"save"},this.createShow=!0},handleRowClick:function(e,t,a){"pool_name"===t.property&&(this.detailId=e.pool_id,this.detailShow=!0)},handleClick:function(e,t){var a=this;"edit"===e?(this.createAction={type:"update",id:t.row.pool_id,data:t.row},this.createShow=!0):"transfer"===e?(this.detailId=t.row.pool_id,this.transferShow=!0):"delete"===e?this.$confirm("您确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.B)({pool_id:t.row.pool_id}).then(function(e){a.list.splice(t.$index,1),a.$message({type:"success",message:"操作成功"})}).catch(function(){})}).catch(function(){a.$message({type:"info",message:"已取消删除"})}):"status"===e&&this.$confirm("您确定要"+(0===t.row.status?"启用":"停用")+"该公海?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.A)({pool_id:t.row.pool_id,status:0===t.row.status?1:0}).then(function(e){t.row.status=0===t.row.status?1:0,a.$message({type:"success",message:"操作成功"})}).catch(function(){})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})}}},N=(a("YIw5"),Object(_.a)(z,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("xr-header",{attrs:{"icon-class":"wk wk-s-seas","icon-color":"#487DFF",label:"客户公海规则设置"}}),e._v(" "),a("div",{staticClass:"main-body"},[a("div",{staticClass:"main-table-header"},[a("reminder",{staticClass:"xr-reminder",attrs:{content:"提示：1、系统在每天的24:00~6:00统一将符合规则的客户退回到公海池<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、当一个客户满足多个公海客户规则时会同时掉入多个公海<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、若修改了“自动收回规则”，新的规则将于“次日生效”，在此之前客户公海成员的数据还是会遵循原规则进行划入"}}),e._v(" "),a("el-button",{staticClass:"main-table-header-button xr-btn--orange",attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.addClick}},[e._v("新建公海")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-table",staticStyle:{width:"100%"},attrs:{id:"examine-table",data:e.list,height:e.tableHeight,"cell-class-name":e.cellClassName,"highlight-current-row":""},on:{"row-click":e.handleRowClick}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"pool_name",width:"150",label:"公海名称"}}),e._v(" "),a("el-table-column",{attrs:{formatter:e.fieldFormatter,"show-overflow-tooltip":"",prop:"admin_user_names",label:"公海管理员"}}),e._v(" "),a("el-table-column",{attrs:{formatter:e.fieldFormatter,"show-overflow-tooltip":"",prop:"user_names",label:"公海成员"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"customer_count",width:"100",label:"客户数量"}}),e._v(" "),a("el-table-column",{attrs:{formatter:e.fieldFormatter,"show-overflow-tooltip":"",prop:"status",width:"100",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("status",t)}}},[e._v(e._s(0===t.row.status?"启用":"停用"))]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("transfer",t)}}},[e._v("转移")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("edit",t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("delete",t)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"p-contianer"},[a("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),e.createShow?a("pool-add",{attrs:{action:e.createAction},on:{"hiden-view":function(t){e.createShow=!1},save:e.getList}}):e._e(),e._v(" "),e.detailShow?a("pool-detail",{attrs:{id:e.detailId},on:{hide:function(t){e.detailShow=!1}}}):e._e(),e._v(" "),a("pool-transfer",{attrs:{visible:e.transferShow,id:e.detailId},on:{"update:visible":function(t){e.transferShow=t},transfer:e.getList}})],1)},[],!1,null,"11bc0d08",null));N.options.__file="index.vue";t.default=N.exports},ztXe:function(e,t,a){"use strict";var i=a("crlY");a.n(i).a},zx11:function(e,t,a){}}]);