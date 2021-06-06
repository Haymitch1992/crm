(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6d81"],{"2f65":function(t,e,n){},"5e4S":function(t,e,n){t.exports={xrColorPrimary:"#2362FB"}},"7mY3":function(t,e,n){"use strict";var i=n("2f65");n.n(i).a},"9GgJ":function(t,e,n){"use strict";var i={name:"XrHeader",components:{},props:{iconClass:[String,Array],iconColor:String,label:String,showSearch:{type:Boolean,default:!1},searchIconType:{type:String,default:"text"},placeholder:{type:String,default:"请输入内容"},ftTop:{type:String,default:"15px"},content:[String,Number],inputAttr:{type:Object,default:function(){}}},data:function(){return{search:""}},computed:{},watch:{content:{handler:function(){this.search!=this.content&&(this.search=this.content)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{inputChange:function(){this.$emit("update:content",this.search)},searchClick:function(){this.$emit("search",this.search)}}},a=(n("7mY3"),n("KHd+")),o=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flexbox",{staticClass:"xr-header"},[t.iconClass?n("div",{staticClass:"xr-header__icon",style:{backgroundColor:t.iconColor}},[n("i",{class:t.iconClass})]):t._e(),t._v(" "),n("div",{staticClass:"xr-header__label"},[t.$slots.label?t._t("label"):[t._v(t._s(t.label))]],2),t._v(" "),t.showSearch?n("el-input",t._b({staticClass:"xr-header__search",class:{"is-text":"text"===t.searchIconType},style:{"margin-top":t.ftTop},attrs:{placeholder:t.placeholder},on:{input:t.inputChange},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchClick(e):null}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},"el-input",t.inputAttr,!1),["text"===t.searchIconType?n("el-button",{attrs:{slot:"append",type:"primary"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"},[t._v("搜索")]):n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"})],1):t._e(),t._v(" "),n("div",{staticClass:"xr-header__ft",style:{top:t.ftTop}},[t._t("ft")],2)],1)},[],!1,null,"acb6d756",null);o.options.__file="index.vue";e.a=o.exports},FzPI:function(t,e,n){"use strict";var i=n("5e4S");n.n(i).a},KWCB:function(t,e,n){"use strict";var i=n("n9M2");n.n(i).a},XgEC:function(t,e,n){},jzeO:function(t,e,n){"use strict";var i={name:"Reminder",components:{},props:{closeShow:{type:Boolean,default:!1},content:{type:String,default:"内容"},fontSize:{type:String,default:"13"}},data:function(){return{}},computed:{},mounted:function(){},destroyed:function(){},methods:{close:function(){this.$emit("close")}}},a=(n("KWCB"),n("KHd+")),o=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flexbox",{staticClass:"reminder-wrapper"},[n("flexbox",{staticClass:"reminder-body",attrs:{align:"stretch"}},[n("i",{staticClass:"wk wk-warning reminder-icon"}),t._v(" "),n("div",{staticClass:"reminder-content",style:{"font-size":t.fontSize+"px"},domProps:{innerHTML:t._s(t.content)}}),t._v(" "),t._t("default"),t._v(" "),t.closeShow?n("i",{staticClass:"el-icon-close close",on:{click:t.close}}):t._e()],2)],1)},[],!1,null,"36522fcc",null);o.options.__file="Reminder.vue";e.a=o.exports},n9M2:function(t,e,n){},sJZQ:function(t,e,n){"use strict";n.r(e);var i,a=n("6iAj"),o=n("9GgJ"),r=n("jzeO"),s=n("QbLZ"),c=n.n(s),l=n("KTTK"),d=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],u=function(t){return-1!==d.map(function(t){return t.toLowerCase()}).indexOf(t.toLowerCase())},p=function(t,e,n){var i=e.$props.value?e.$props.value:"",a=e.$props.initialValue?e.$props.initialValue:"";n.setContent(i||(e.initialized?e.cache:a)),e.$watch("value",function(t,i){n&&"string"==typeof t&&t!==i&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)}),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(n)?n.join(" "):n;e.on(i||"change input undo redo",function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))})}(e,n),function(t,e,n){Object.keys(e).filter(u).forEach(function(i){var a=e[i];"function"==typeof a&&("onInit"===i?a(t,n):n.on(i.substring(2),function(t){return a(t,n)}))})}(t,e.$listeners,n),e.initialized=!0},h=0,f=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++h+String(e)},m=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},g=function(){return{listeners:[],scriptId:f("tiny-script"),scriptLoaded:!1}},b=(i=g(),{load:function(t,e,n){i.scriptLoaded?n():(i.listeners.push(n),t.getElementById(i.scriptId)||function(t,e,n,i){var a=e.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=t,a.src=n;var o=function(){a.removeEventListener("load",o),i()};a.addEventListener("load",o),e.head&&e.head.appendChild(a)}(i.scriptId,t,e,function(){i.listeners.forEach(function(t){return t()}),i.scriptLoaded=!0}))},reinitialize:function(){i=g()}}),v=n("xKn5"),y=function(){return(y=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},C=function(t){return function(){var e,n,i,a=y(y({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,m(e).concat(m(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",function(n){return p(n,t,e)}),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(i=t.element)&&"textarea"===i.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),Object(v.a)().init(a)}},_=0,k={name:"Tinymce",components:{Editor:{props:{apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},created:function(){this.elementId=this.$props.id||f("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(v.a)())C(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null===(i=this.$props.tinymceScriptSrc)||void 0===i?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;b.load(this.element.ownerDocument,n,C(this))}var i},beforeDestroy:function(){null!==Object(v.a)()&&Object(v.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(v.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&C(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}}},inheritAttrs:!1,props:{value:String,init:Object,height:[String,Number],plugins:[String,Array],toolbar:[String,Array],menubar:[String,Array]},data:function(){return{id:this.uuid(),dataValue:"",languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"},showInit:{}}},computed:{editor:function(){return window.tinymce.get(this.id)},showToolbar:function(){return void 0!=this.toolbar?this.toolbar:"undo redo | bold italic underline strikethrough | charmap emoticons | fontselect fontsizeselect formatselect | rowspacingtop rowspacingbottom | lineheight | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | table | forecolor backcolor removeformat | pagebreak | fullscreen  preview save print | insertfile image media link anchor codesample | ltr rtl"},showPlugins:function(){return void 0!=this.plugins?this.plugins:"print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons lineheight rowspacing"}},watch:{value:{handler:function(t){t!=this.dataValue&&(this.dataValue=t)},immediate:!0,deep:!0},dataValue:function(){this.$emit("input",this.dataValue)},init:{handler:function(){this.initTinymce()},immediate:!0,deep:!0}},mounted:function(){},methods:{initTinymce:function(){var t=c()({skin:"wukong",resize:!1,branding:!1,language:this.languageTypeList.zh,menubar:!!this.menubar&&this.menubar,body_class:"panel-body",image_advtab:!0,end_container_on_empty_block:!0,powerpaste_word_import:"clean",content_css:["./static/tinymce/css/tiny-wukong.css"],fontsize_formats:"12px 14px 16px 18px 24px 36px 48px 56px 72px",font_formats:"Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,quickbars_insert_toolbar:!1,nonbreaking_force_tab:!0,convert_urls:!1,toolbar_mode:"sliding",images_upload_handler:function(t,e,n,i){i(0),Object(l.y)({file:t.blob()}).then(function(t){e(t.data.url),i(100)}).catch(function(){n("出现未知问题，刷新页面，或者联系管理员")})}},this.init);void 0!=this.height&&(t.height=this.height),this.showInit=t},uuid:function(){var t=Date.now();return"wukong_"+Math.floor(1e9*Math.random())+ ++_+String(t)},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){e.editor.insertContent('<img class="wscnph" src="'+t.url+'" >')})}}},w=(n("FzPI"),n("KHd+")),S=Object(w.a)(k,function(){var t=this,e=t.$createElement;return(t._self._c||e)("editor",t._g(t._b({ref:"mceEditor",attrs:{id:t.id,init:t.showInit,plugins:t.showPlugins,toolbar:t.showToolbar,"tinymce-script-src":"https://www.72crm.com/npm/tinymce/tinymce.min.js"},model:{value:t.dataValue,callback:function(e){t.dataValue=e},expression:"dataValue"}},"editor",t.$attrs,!1),t.$listeners))},[],!1,null,null,null);S.options.__file="index.vue";var x=S.exports,T=n("ZoMv"),$={name:"PrintTemplateDetail",components:{XrHeader:o.a,Reminder:r.a,Tinymce:x},data:function(){return{loading:!1,activeTab:"",tabs:[],tabData:{},menuIndex:"",richHeight:document.documentElement.clientHeight-135,content:"",selectNodes:null}},computed:{menuList:function(){return this.tabData[this.activeTab]||[]},type:function(){return this.$route.query.type},isCreate:function(){return"create"==this.$route.query.handle},editor:function(){return this.$refs.createTinymce.editor}},created:function(){this.getFields(this.type),this.isCreate||this.getDetail()},methods:{getDetail:function(){var t=this;this.loading=!0,Object(a.C)({id:this.$route.query.templateId}).then(function(e){var n=e.data||{};t.content=n.content,t.loading=!1}).catch(function(){t.loading=!1})},getFields:function(t){var e=this;this.loading=!0,Object(a.A)({type:t}).then(function(n){var i=n.data||{};e.tabData=i;var a=[],o=T.a.convertTypeToKey(t);a.push({key:o,label:T.a.convertKeyToName(o)});["customer","contacts","product","business","contract","receivables"].forEach(function(t){if(t!=o&&i[t]){var e={key:t};e.label=T.a.convertKeyToName(t),a.push(e)}}),e.tabs=a,a.length>0?e.activeTab=a[0].key:e.activeTab="",e.loading=!1}).catch(function(){e.loading=!1})},tabsClick:function(){this.menuIndex=""},menuSelect:function(t,e){if(this.menuIndex=t.field,"product"==this.activeTab&&"discount_rate"!=t.field&&"total_price"!=t.field){var n=this.getCurrentParentByTag('table[data-wk-table-tag="table"]');if(n){var i=this.editor.dom.select('tr[data-wk-table-tr-tag="header"]',n),a=this.editor.dom.select('tr[data-wk-table-tr-tag="value"]',n);i&&a&&(this.editor.dom.add(i,"td",{"data-wk-table-td-tag":"name"},t.name),this.editor.dom.add(a,"td",{"data-wk-table-td-tag":"value"},this.getSpanNode(t,"table-value")),this.content=this.editor.getContent({format:"html"}))}else this.getCurrentParentByTag("table")||this.editor.insertContent(this.getProuctTable(t))}else{this.getCurrentParentByTag('table[data-wk-table-tag="table"]')||("product"!=this.activeTab||"discount_rate"!=t.field&&"total_price"!=t.field?this.editor.insertContent(this.getSpanNode(t)):this.editor.insertContent(this.getSpanNode(t,"",T.a.convertTypeToKey(this.type))),this.content=this.editor.getContent({format:"html"}))}},getCurrentParentByTag:function(t){return this.editor.dom.getParent(this.editor.selection.getNode(),t)},getProuctTable:function(t){return'<table data-wk-table-tag="table" style="border-collapse: collapse; width: 100%;" border="1" >\n      <tbody>\n        <tr data-wk-table-tr-tag="header"><td data-wk-table-td-tag="name">'+t.name+'</td></tr>\n        <tr data-wk-table-tr-tag="value"><td data-wk-table-td-tag="value">'+this.getSpanNode(t,"table-value")+"</td></tr>\n      </tbody>\n      </table>"},getSpanNodeAttrs:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this.getSpanNodeAttrsByType(t,e,this.activeTab)},getSpanNodeAttrsByType:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments[2],i={},a="data-wk"+(e?"-"+e:"")+"-tag",o=n+"."+t.field;return i[a]=o,i.class="wk-print-tag-wukong "+this.getSpanColorClass(),i.contenteditable=!1,i},getSpanNode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.activeTab;return"<span data-wk"+(e?"-"+e:"")+'-tag="'+n+"."+t.field+'" class="wk-print-tag-wukong '+this.getSpanColorClass()+'" contenteditable="false">{'+t.name+"}</span>"},getSpanColorClass:function(){return"wk-tiny-color--"+(["customer","contacts","business","contract","receivables","product"].includes(this.activeTab)?this.activeTab:"common")},perviewClick:function(){this.editor.execCommand("mcePreview")},saveClick:function(){var t=this;this.loading=!0;var e=this.isCreate?a.x:a.E,n=this.$route.query,i={name:n.name,type:n.type,content:this.content};this.isCreate||(i.id=n.templateId),e(i).then(function(e){t.loading=!1,t.isCreate?(t.$message({type:"success",message:"新建成功"}),t.$router.go(-1)):t.$message({type:"success",message:"保存成功"})}).catch(function(){t.loading=!1})},goBackClick:function(){this.$router.go(-1)},getEditConfig:function(){var t=this;return{menubar:!1,toolbar_sticky:!0,statusbar:!1,content_style:"p { margin: 5px 0; line-height: 1.5;}",content_css:["./static/tinymce/css/tiny-wk-colors.css","./static/tinymce/css/tiny-wk-word.css"],table_advtab:!1,table_cell_advtab:!1,table_row_advtab:!1,setup:function(e){e.on("init",function(t){e.execCommand("mceFocus")}),e.on("keydown",function(n){if(t.selectNodes=null,8===n.keyCode||46==n.keyCode){var i=e.selection.getNode();if("value"===i.getAttribute("data-wk-table-td-tag"))return n.preventDefault(),!1;if("SPAN"==i.nodeName){if(i.hasAttribute("contenteditable"))return n.preventDefault(),e.dom.remove(i),!1;var a=t.getCurrentParentByTag("span[contenteditable]");if(a)return n.preventDefault(),e.dom.remove(a),!1}}else if("65"==n.keyCode&&(n.metaKey||n.ctrlKey))t.selectNodes=e.selection.getNode(),t.setSpanEditAttr(t.selectNodes,!0);else{var o=e.selection.getNode();if("value"===o.getAttribute("data-wk-table-td-tag")){if(37!==n.keyCode&&38!==n.keyCode&&39!==n.keyCode&&40!==n.keyCode)return n.preventDefault(),!1}else if("SPAN"==o.nodeName){if(o.hasAttribute("contenteditable"))return!!o.getAttribute("contenteditable")&&(n.preventDefault(),o.setAttribute("contenteditable",!1),!1);var r=t.getCurrentParentByTag("span[contenteditable]");if(r)return!!r.getAttribute("contenteditable")&&(n.preventDefault(),r.setAttribute("contenteditable",!1),!1)}37==n.keyCode&&38==n.keyCode&&39==n.keyCode&&40==n.keyCode&&t.cancelSpanEdit()}}),e.on("mousedown",function(e){t.cancelSpanEdit()}),e.on("mouseup",function(n){var i=e.selection.getSel();n.target.hasAttribute("contenteditable")&&1==i.anchorOffset&&1==i.anchorOffset||(n.target.hasAttribute("contenteditable")&&i.isCollapsed?t.cancelSpanEdit():i.isCollapsed?t.cancelSpanEdit():(t.selectNodes=e.selection.getNode(),t.setSpanEditAttr(t.selectNodes,!0)))})}}},cancelSpanEdit:function(){var t=this;this.selectNodes&&setTimeout(function(){t.editor.selection.getSel().isCollapsed||(t.setSpanEditAttr(t.selectNodes,!1),t.selectNodes=null)},300)},setSpanEditAttr:function(t,e){if(t&&t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=e&&t.setAttribute("contenteditable",e),t&&t.children)for(var n=0;n<t.children.length;n++){var i=t.children[n];i.children?this.setSpanEditAttr(i,e):i.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=e&&i.setAttribute("contenteditable",e)}}}},A=(n("x9VO"),Object(w.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"print-template-detail"},[n("xr-header",{attrs:{"icon-class":"wk wk-print","icon-color":"#26d4da",label:"新建打印模板"}},[n("template",{slot:"ft"},[n("el-button",{attrs:{type:"text"},on:{click:t.perviewClick}},[t._v("预览")]),t._v(" "),n("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:t.saveClick,expression:"saveClick"}],attrs:{type:"primary"}},[t._v("保存")]),t._v(" "),n("el-button",{on:{click:t.goBackClick}},[t._v("返回")])],1)],2),t._v(" "),n("div",{staticClass:"print-template-detail__body"},[n("div",{staticClass:"system-view-nav"},[n("el-tabs",{on:{"tab-click":t.tabsClick},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabs,function(t,e){return n("el-tab-pane",{key:e,attrs:{label:t.label,name:t.key}})})),t._v(" "),n("reminder",{staticClass:"xr-reminder",attrs:{content:"点击字段插入值（光标所在位置）"}}),t._v(" "),n("div",{staticClass:"menus"},t._l(t.menuList,function(e,i){return n("div",{key:i,staticClass:"menu-item",class:{"is-select":e.field==t.menuIndex},on:{click:function(n){t.menuSelect(e,i)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))],1),t._v(" "),n("div",{staticClass:"system-view-content"},[n("tinymce",{ref:"createTinymce",staticClass:"rich-txt",attrs:{height:t.richHeight,init:t.getEditConfig()},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])],1)},[],!1,null,"50d5aec9",null));A.options.__file="PrintTemplateDetail.vue";e.default=A.exports},x9VO:function(t,e,n){"use strict";var i=n("XgEC");n.n(i).a},xKn5:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return a});var i=function(){return"undefined"!=typeof window?window:t},a=function(){var t=i();return t&&t.tinymce?t.tinymce:null}}).call(this,n("yLpj"))}}]);