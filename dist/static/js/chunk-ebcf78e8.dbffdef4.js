(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebcf78e8"],{"055a":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ComponentConfig-com"},[t("ComManagement",e._b({on:{configHandle:e.configHandle}},"ComManagement",e.$attrs,!1))],1)},n=[],i=a("e21b"),o={components:{ComManagement:i["default"]},data:function(){return{configData:{},currentCom:"management"}},methods:{configHandle:function(e){this.$router.push({path:"/business/canvas",query:{id:e.layoutData.id}})}}},r=o,s=(a("6a18"),a("2877")),c=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=c.exports},"157d":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"modelSelect-box"},[t("span",[e._v(e._s(e.value))]),t("el-button",{attrs:{type:"primary"},on:{click:e.changeModel}},[e._v("选择模型")]),t("cc-popout",{ref:"popout",attrs:{"pop-props":e.popParams}})],1)},n=[],i=a("6350"),o={components:{},props:{value:{type:String,default:function(){return""}}},data:function(){return{popParams:{}}},computed:{},mounted:function(){},methods:{changeModel:function(){var e=this,t={};this.popParams={showFlag:!0,size:"small",title:"选择模型",confirmEvent:function(){e.$emit("input",t.code)},content:{cmp:i["a"],handler:{"node-click":function(e,a){t=e}}}}}}},r=o,s=(a("b50a"),a("2877")),c=Object(s["a"])(r,l,n,!1,null,null,null),u=c.exports;t["default"]={data:function(){return{layoutFormData:{formDataList:[{name:"CcLayout",label:"基本信息",makeStyle:{active:!0},style:{hideLabel:!0},setting:{columns:2,groupList:[{prop:"code",name:"CcInput",label:"字段代码",placeholder:"请输入",value:"",rules:{required:{required:!0,message:"请填写字段代码",trigger:"blur"}},makeStyle:{active:!1},style:{},setting:{prefixIcon:"",suffixIcon:""}},{prop:"name",name:"CcInput",label:"显示名称",placeholder:"请输入",value:"",rules:{required:{required:!0,message:"请填写显示名称",trigger:"blur"}},makeStyle:{active:!0},style:{},setting:{prefixIcon:"",suffixIcon:""}},{prop:"isPrimary",name:"CcSwitch",label:"主键",value:!0,makeStyle:{active:!1},style:{},setting:{disabled:!1,width:40,activeIconClass:"",inactiveIconClass:"",activeText:"是",inactiveText:"否",activeValue:!0,inactiveValue:!1,activeColor:"#409EFF",inactiveColor:"#C0CCDA"}},{prop:"isNull",name:"CcSwitch",label:"允许为空",value:"",makeStyle:{active:!1},style:{},setting:{disabled:!1,width:40,activeIconClass:"",inactiveIconClass:"",activeText:"是",inactiveText:"否",activeValue:!0,inactiveValue:!1,activeColor:"#409EFF",inactiveColor:"#C0CCDA"}},{prop:"isIncrement",name:"CcSwitch",label:"自增",value:"",makeStyle:{active:!1},style:{},setting:{disabled:!1,width:40,activeIconClass:"",inactiveIconClass:"",activeText:"是",inactiveText:"否",activeValue:!0,inactiveValue:!1,activeColor:"#409EFF",inactiveColor:"#C0CCDA"}},{prop:"columnType",name:"CcSelect",label:"数据类型",multiple:!1,placeholder:"请选择",value:"",selections:[{label:"tinyint",value:"tinyint"},{label:"smallint",value:"smallint"},{label:"mediumint",value:"mediumint"},{label:"int",value:"int"},{label:"bigint",value:"bigint"},{label:"float",value:"float"},{label:"double",value:"double"},{label:"decimal",value:"decimal"},{label:"bit",value:"bit"},{label:"year",value:"year"},{label:"date",value:"date"},{label:"datetime",value:"datetime"},{label:"time",value:"time"},{label:"timestamp",value:"timestamp"},{label:"char",value:"char"},{label:"varchar",value:"varchar"},{label:"tinytext",value:"tinytext"},{label:"text",value:"text"},{label:"mediumtext",value:"mediumtext"},{label:"longtext",value:"longtext"},{label:"tinyblob",value:"tinyblob"},{label:"blob",value:"blob"},{label:"mediumblob",value:"mediumblob"},{label:"longblob",value:"longblob"},{label:"json",value:"json"},{label:"geometry",value:"geometry"}],rules:{required:{required:!0,message:"请选择数据类型",trigger:"change"}},makeStyle:{active:!1},style:{},setting:{isRemote:!1,remoteUrl:"",remoteDataPath:"",remoteDataProps:{label:"label",value:"value"}}},{prop:"columnLen",name:"CcInputNumber",label:"长度",value:0,makeStyle:{active:!1},style:{},setting:{min:1,step:1,stepStrictly:!0,size:"",disabled:!1,controlsPosition:""}},{prop:"columnDigital",name:"CcInputNumber",label:"小数位长度",value:0,makeStyle:{active:!1},style:{},setting:{min:1,step:1,stepStrictly:!0,size:"",disabled:!1,controlsPosition:""}},{prop:"defaultValue",name:"CcInput",label:"默认值",placeholder:"请输入",value:"",rules:{},makeStyle:{active:!1},style:{},setting:{prefixIcon:"",suffixIcon:""}},{prop:"remark",name:"CcInput",label:"说明",placeholder:"请输入",value:"",rules:{},makeStyle:{active:!1},style:{},setting:{prefixIcon:"",suffixIcon:""}},{prop:"isLink",name:"CcSwitch",label:"关联属性",value:!0,makeStyle:{active:!1},style:{},setting:{disabled:!1,width:40,activeIconClass:"",inactiveIconClass:"",activeText:"是",inactiveText:"否",activeValue:!0,inactiveValue:!1,activeColor:"#409EFF",inactiveColor:"#C0CCDA"}}]}},{name:"CcLayout",label:"关联配置",makeStyle:{active:!0},style:{hideLabel:!0},setting:{columns:2,groupList:[{prop:"modelLink.linkType",name:"CcRadio",label:"关联类型",placeholder:"请输入",value:"",rules:{},makeStyle:{active:!1},style:{},selections:[{value:0,label:"一对一"},{value:2,label:"多对一"}],setting:{prefixIcon:"",suffixIcon:""}},{prop:"modelLink.targetModel",name:u,label:"关联模型",placeholder:"请输入",value:"",rules:{},makeStyle:{active:!1},style:{},setting:{prefixIcon:"",suffixIcon:""}}],hideExpr:"!this.model.isLink"}}],config:{hideLabel:!1,labelWidth:"100px",labelPosition:"right",showRequiredAsterisk:!0,showVerificationMessage:!0,size:"medium",labelSuffix:":"}}}},watch:{}}},"1aed":function(e,t,a){"use strict";a("9d37")},"256b":function(e,t,a){},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var l=a("6b75");function n(e){if(Array.isArray(e))return Object(l["a"])(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=a("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return n(e)||i(e)||Object(o["a"])(e)||r()}},"356e":function(e,t,a){},"392e":function(e,t,a){"use strict";a.r(t);a("d3b7"),a("159b"),a("b64b");t["default"]={data:function(){var e=this;return{FormLayoutData:{formDataList:[{prop:"businessType",name:"CcSelect",label:"业务类型",multiple:!1,placeholder:"请选择",value:1,selections:[{label:"自定义",value:1},{label:"默认新增",value:2},{label:"默认编辑",value:3},{label:"默认只读",value:4},{label:"默认搜索",value:7},{label:"默认列表",value:5},{label:"默认树",value:6}],rules:{required:{required:!0,message:"请选择业务类型",trigger:"blur"}},makeStyle:{active:!1},handler:{change:function(t,a){if(t){var l={1:{type:"form",name:""},2:{type:"form",name:"默认新增",layoutKey:"defaultAdd"},3:{type:"form",name:"默认编辑",layoutKey:"defaultEdit"},4:{type:"form",name:"默认只读",layoutKey:"defaultReadable"},5:{type:"table",name:"默认列表",layoutKey:"defaultTable"},6:{type:"tree",name:"默认树",layoutKey:"defaultTree"},7:{type:"search",name:"默认搜索",layoutKey:"defaultSearch"}};Object.keys(l[t]).forEach((function(n){e.$set(a,n,l[t][n])})),1===t&&e.$set(a,"layoutKey",e.$utils.guid())}}},style:{},setting:{isRemote:!1,remoteUrl:"",remoteDataPath:"",remoteDataProps:{label:"label",value:"value"}}},{prop:"type",name:"CcSelect",label:"组件类型",multiple:!1,placeholder:"请选择",value:"form",selections:[{label:"表单组件",value:"form"},{label:"搜索组件",value:"search"},{label:"表格组件",value:"table"},{label:"树形控件",value:"tree"}],rules:{required:{required:!0,message:"请选择组件类型",trigger:"blur"}},makeStyle:{active:!1},style:{},setting:{isRemote:!1,remoteUrl:"",remoteDataPath:"",remoteDataProps:{label:"label",value:"value"}}},{prop:"name",name:"CcInput",label:"组件名称",multiple:!1,placeholder:"请选择",value:"",selections:[],rules:{required:{required:!0,message:"请填写组件名称",trigger:"blur"}},makeStyle:{active:!0},style:{},setting:{isRemote:!1,remoteUrl:"",remoteDataPath:"",remoteDataProps:{label:"label",value:"value"}}},{prop:"layoutKey",name:"CcInput",label:"组件编号",multiple:!1,placeholder:"请选择",value:"",selections:[],rules:{required:{required:!0,message:"请填写组件编号",trigger:"blur"}},makeStyle:{active:!1},style:{},setting:{isRemote:!1,remoteUrl:"",remoteDataPath:"",remoteDataProps:{label:"label",value:"value"}}}],config:{hideLabel:!1,labelWidth:"85px",labelPosition:"right",showRequiredAsterisk:!0,showVerificationMessage:!0,size:"medium",labelSuffix:":"}}}},watch:{}}},"4cd6":function(e,t,a){"use strict";a("d581")},"4e17":function(e,t,a){"use strict";a("256b")},"5a23":function(e,t,a){},"5ece":function(e,t,a){"use strict";a("c6b0")},"60d9":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"DatabaseCode-com"},[t("CcSelectFilter",{attrs:{data:e.filterData,"default-values":e.filterResult},on:{change:e.changeFilter}}),t("CcCodeEdit",{staticClass:"CcCodeEdit-content",model:{value:e.bindCode,callback:function(t){e.bindCode=t},expression:"bindCode"}})],1)},n=[],i=a("da71"),o={components:{},props:{modelData:{type:Object,default:function(){}}},data:function(){return{filterResult:{type:"MYSQL_CREATE_IDX"},filterData:[{title:"代码类型",key:"type",options:[{label:"新建所有索引",value:"MYSQL_CREATE_ALL_IDX"},{label:"新建数据表",value:"MYSQL_CREATE_TABLE"},{label:"删除数据表",value:"MYSQL_DROP_TABLE"}]}],bindCode:""}},computed:{},watch:{modelData:function(){this.getddlDataFun()},immediate:!0,deep:!0},mounted:function(){},methods:{changeFilter:function(e){this.$set(this,"filterResult",e),this.getddlDataFun()},getddlDataFun:function(){var e=this;this.modelData.id&&Object(i["g"])({model:this.modelData.code,dbType:"MYSQL",modelId:this.modelData.id,templateType:this.filterResult.type}).then((function(t){e.bindCode=t.data.ddl}))}}},r=o,s=(a("5ece"),a("2877")),c=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=c.exports},"69b4":function(e,t,a){"use strict";a("704f")},"6a18":function(e,t,a){"use strict";a("356e")},"704f":function(e,t,a){},"8f90":function(e,t,a){},"91e2":function(e,t,a){},"9b8c":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("el-tabs",{staticClass:"config-content-box"},[t("el-tab-pane",{attrs:{label:"数据表",lazy:""}},[t("DatabaseTable",e._b({attrs:{"model-data":e.modelData}},"DatabaseTable",e.$attrs,!1))],1),"Base"!==e.modelData.code&&"BaseLink"!==e.modelData.code?t("el-tab-pane",{attrs:{label:"数据库代码",lazy:""}},[t("DatabaseCode",e._b({attrs:{"model-data":e.modelData}},"DatabaseCode",e.$attrs,!1))],1):e._e(),"Base"!==e.modelData.code&&"BaseLink"!==e.modelData.code?t("el-tab-pane",{attrs:{label:"索引",lazy:""}},[e._v("索引")]):e._e(),"Base"!==e.modelData.code&&"BaseLink"!==e.modelData.code?t("el-tab-pane",{attrs:{label:"程序代码",lazy:""}},[t("ProcedureCode",e._b({attrs:{"model-data":e.modelData}},"ProcedureCode",e.$attrs,!1))],1):e._e(),"Base"!==e.modelData.code&&"BaseLink"!==e.modelData.code?t("el-tab-pane",{attrs:{label:"组件配置",lazy:""}},[t("ComponentConfig",e._b({attrs:{"model-data":e.modelData}},"ComponentConfig",e.$attrs,!1))],1):e._e()],1)},n=[],i=a("055a"),o=a("60d9"),r=a("b49a"),s=a("d7fb"),c={components:{ComponentConfig:i["default"],DatabaseCode:o["default"],DatabaseTable:r["default"],ProcedureCode:s["default"]},props:{modelData:{type:Object,default:function(){}}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},u=c,d=(a("ab58"),a("2877")),p=Object(d["a"])(u,l,n,!1,null,null,null);t["default"]=p.exports},"9d37":function(e,t,a){},ab58:function(e,t,a){"use strict";a("91e2")},b49a:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"DatabaseTable-box"},[t("cc-table",{ref:"table",staticStyle:{"min-height":"50vh"},attrs:{pagination:"","layout-data":e.layoutData,data:e.data,total:e.total,page:e.params.page,limit:e.params.limit},on:{"update:page":function(t){return e.$set(e.params,"page",t)},"update:limit":function(t){return e.$set(e.params,"limit",t)},pagination:e.getBreadcrumb,"on-add":e.addFun,"btns-on-delete":e.deleteBatch}}),t("cc-popout",{ref:"popout",attrs:{"pop-props":e.popParams}})],1)},n=[],i=a("5530"),o=(a("d81d"),a("ac1f"),a("841c"),a("157d")),r=a("b775");function s(e){return Object(r["a"])({url:"/prop/save",method:"post",params:e})}var c={components:{},mixins:[o["default"]],props:{modelData:{type:Object,default:function(){}}},data:function(){var e=this;this.$createElement;return{popParams:{},layoutData:{column:[{type:"index",label:"#",width:80},{prop:"action",label:"操作",width:120,render:function(t,a){if(a.row.modelId===e.modelData.id&&0===e.modelData.isBuiltIn)return t("div",[t("el-button",{attrs:{type:"text",size:"small"},class:"el-icon-edit",on:{click:function(){return e.openDialog(a)}}},["编辑"]),t("el-button",{attrs:{type:"text",size:"small"},class:"el-icon-delete",on:{click:function(){return e.delHandle(a)}}},["删除"])])}},{prop:"code",label:"字段代码",minWidth:160},{prop:"name",label:"显示名称",minWidth:160},{prop:"columnType",label:"数据类型",width:100},{prop:"isPrimary",label:"主键",minWidth:80,formatter:function(e,t){return e[t.property]?"是":"否"}},{prop:"isNull",label:"允许为空",minWidth:120,formatter:function(e,t){return e[t.property]?"是":"否"}},{prop:"isIncrement",label:"自增",width:80,formatter:function(e,t){return e[t.property]?"是":"否"}},{prop:"columnLen",label:"长度",width:100},{prop:"columnDigital",label:"小数位长度",width:100},{prop:"remark",label:"说明",width:100},{prop:"defaultValue",label:"默认值",width:100}],config:{btnsCol:[{type:"primary",label:"新增",key:"add",dataCount:"unlimited"},{type:"primary",label:"查询",key:"search",dataCount:"unlimited"},{type:"primary",label:"删除",key:"delete",dataCount:"leastOne"},{type:"primary",label:"导出",key:"download"},{type:"primary",label:"导入",key:"upload"}],props:{},showCheckbox:!0,selectable:function(t,a){if(t.modelId===e.modelData.id&&0===e.modelData.isBuiltIn)return!0}}},loading:!1,data:[],total:0,params:{tab:"share",page:1,limit:10},editForm:{},dialogVisible:!1}},watch:{modelData:function(e){this.getBreadcrumb()},immediate:!0,deep:!0},methods:{deleteBatch:function(e){var t=this;this.$confirm("确认删除选中的字段?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$fetch.delBatch("prop",e.selection.map((function(e){return e.id}))).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.getBreadcrumb()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},getBreadcrumb:function(){var e=this,t={current:1,size:999,expand:"",orders:[],searchParams:[{filter:!0,operator:"IN",param:"modelId",values:this.modelData.familyIds}]};this.$fetch.search("prop",t).then((function(t){e.data=t.data.records}))},addFun:function(){this.popParams={showFlag:!0,size:"big",title:"新增字段",confirmEvent:function(e){console.log("222",e)},content:{layoutData:this.layoutFormData,model:{isNull:!0,columnType:"text"},type:"form"}}},openDialog:function(e){var t=this;this.$refs.popout.acceptParams({size:"big",title:"编辑字段",confirmEvent:function(e){s(Object(i["a"])(Object(i["a"])({},e),{},{op:"UPDATE"})).then((function(e){t.getBreadcrumb()}))},content:{layoutData:this.layoutFormData,model:e.row,type:"form"}})},delHandle:function(e){var t=this;this.$confirm("确认删除该字段?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$fetch.delBatch("prop",e.row.id).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.getBreadcrumb()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}},u=c,d=(a("ff22"),a("2877")),p=Object(d["a"])(u,l,n,!1,null,null,null);t["default"]=p.exports},b50a:function(e,t,a){"use strict";a("5a23")},c6b0:function(e,t,a){},d581:function(e,t,a){},d7fb:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"DatabaseCode-com"},[t("CcSelectFilter",{attrs:{data:e.filterData,"default-values":e.filterResult},on:{change:e.changeFilter}}),t("CcCodeEdit",{staticClass:"CcCodeEdit-content",model:{value:e.bindCode,callback:function(t){e.bindCode=t},expression:"bindCode"}})],1)},n=[],i=a("da71"),o={components:{},props:{modelData:{type:Object,default:function(){}}},data:function(){return{filterResult:{type:"CONTROLLER"},filterData:[{title:"代码类型",key:"type",options:[{label:"CONTROLLER",value:"CONTROLLER"},{label:"SERVICE",value:"SERVICE"},{label:"SERVICE_IMPL",value:"SERVICE_IMPL"},{label:"MAPPER",value:"MAPPER"},{label:"MAPPER_XML",value:"MAPPER_XML"},{label:"DTO",value:"DTO"},{label:"VO",value:"VO"}]}],bindCode:""}},computed:{},watch:{modelData:function(){this.getddlDataFun()},immediate:!0,deep:!0},mounted:function(){},methods:{changeFilter:function(e){this.$set(this,"filterResult",e),this.getddlDataFun()},getddlDataFun:function(){var e=this;this.modelData.id&&Object(i["g"])({model:this.modelData.code,dbType:"MYSQL",modelId:this.modelData.id,templateType:this.filterResult.type}).then((function(t){e.bindCode=t.data.ddl}))}}},r=o,s=(a("4e17"),a("2877")),c=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=c.exports},d92b:function(e,t,a){"use strict";a.r(t);a("b0c0");var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"model-tree-com"},[t("h4",{staticClass:"title"},[e._v("数据模型")]),t("el-scrollbar",{staticStyle:{height:"calc(100% - 95px)"}},[t("el-tree",{ref:"treeRef",attrs:{"node-key":"id",lazy:"",load:e.loadData,"highlight-current":"","check-strictly":!1,"expand-on-click-node":!1,props:e.defaultProps},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticClass:"custom-tree-node"},[t("span",[e._v(e._s(a.data.name)+"-"+e._s(a.data.code))]),t("span",["dataBase"===a.data.dataType&&0===a.data.isBuiltIn?t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.deleteFun(a.data,a.node)}}}):e._e(),"dataBase"===a.data.dataType?t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus",circle:""},on:{click:function(t){return e.append(a.data,a.node)}}}):e._e()],1)])]}}])})],1),t("cc-popout",{ref:"popout",attrs:{"pop-props":e.popParams}})],1)},n=[],i=a("2909"),o=a("5530"),r=(a("ac1f"),a("841c"),a("d81d"),a("99af"),{components:{},data:function(){return{popParams:{},defaultProps:{children:"children",label:"name"}}},computed:{},mounted:function(){},methods:{append:function(e,t){var a=this;this.popParams={showFlag:!0,size:"big",title:"新增模型",confirmEvent:function(l){a.$fetch.save("model",Object(o["a"])(Object(o["a"])({},l),{},{parentId:e.id,op:"INSERT"})).then((function(e){t.loaded=!1,t.expand()}))},content:{layoutData:{formDataList:[{prop:"code",name:"CcInput",label:"模型代码",placeholder:"请填写模型代码",value:"",rules:{required:{required:!0,message:"请填写模型代码",trigger:"blur"}},makeStyle:{active:!1},style:{},setting:{prefixIcon:"",suffixIcon:""}},{prop:"name",name:"CcInput",label:"模型名称",placeholder:"请填写模型名称",value:"",rules:{required:{required:!0,message:"请填写模型名称",trigger:"blur"}},makeStyle:{active:!1},style:{},setting:{prefixIcon:"",suffixIcon:""}}]},type:"form",model:{}}}},deleteFun:function(e,t){var a=this;console.log(t),this.$confirm("此操作将永久删除该模型, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.$fetch.delBatch("model",e.id).then((function(e){t.parent.loaded=!1,t.parent.expand(),a.$message({type:"success",message:"删除成功!"})}))})).catch((function(e){console.log(e),a.$message({type:"info",message:"已取消删除"})}))},handleNodeClick:function(e){"group"!==e.dataType&&this.$emit("change",e)},loadData:function(e,t){var a=this;0===e.level?(t([{name:"数据表",dataType:"group",id:"dataBase1"},{name:"多表透视",dataType:"group",id:"tablesPerspective1"},{name:"关系图",dataType:"group",id:"relationshipMap1",children:[{name:"关系图1",dataType:"relationalGraph"},{name:"关系图2",dataType:"relationalGraph"}]}]),this.$nextTick((function(){var t=e.childNodes[0];t.expanded=!0,t.loadData()}))):"dataBase1"===e.data.id?this.$fetch.search("model",{current:1,expand:"",orders:[{asc:!0,field:""}],searchParams:[{filter:!0,operator:"IN",param:"code",values:["Base","BaseLink"]}],size:999}).then((function(e){t(e.data.records.map((function(e){return e.dataType="dataBase",e.familyIds=[e.id],e}))),a.$nextTick((function(){a.$emit("change",e.data.records[0]),a.$refs.treeRef.setCurrentKey(e.data.records[0].id);var t=a.$refs.treeRef.getNode(e.data.records[0].id);t.expand()}))})):"tablesPerspective1"===e.data.id||"relationshipMap1"===e.data.id?t([]):"dataBase"===e.data.dataType&&this.$fetch.search("model",{current:1,expand:"",orders:[{asc:!0,field:""}],searchParams:[{filter:!0,operator:"EQ",param:"parentId",values:[e.data.id]}],size:999}).then((function(a){t(a.data.records.map((function(t){return t.dataType="dataBase",t.familyIds=[].concat(Object(i["a"])(e.data.familyIds),[t.id]),t})))}))}}}),s=r,c=(a("1aed"),a("2877")),u=Object(c["a"])(s,l,n,!1,null,"69757557",null);t["default"]=u.exports},e21b:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"management-box"},[t("cc-table",{ref:"table",attrs:{pagination:"",data:e.data,total:e.total,page:e.params.page,limit:e.params.limit,"layout-data":e.layoutData},on:{"update:page":function(t){return e.$set(e.params,"page",t)},"update:limit":function(t){return e.$set(e.params,"limit",t)},"on-add":e.addFun,"btns-on-delete":e.deleteFun,pagination:e.getComp}}),t("cc-popout",{ref:"popout",attrs:{"pop-props":e.popParams}})],1)},n=[],i=a("5530"),o=(a("d81d"),a("ac1f"),a("841c"),a("392e")),r={components:{},mixins:[o["default"]],props:{modelData:{type:Object,default:function(){}}},data:function(){var e=this;this.$createElement;return{popParams:{},layoutData:{column:[{type:"index",label:"#",width:80},{prop:"action",label:"操作",render:function(t,a){return t("div",[t("el-button",{attrs:{type:"text",size:"small"},class:"el-icon-setting",on:{click:function(){return e.configHandle(a)}}},["配置"]),t("el-button",{attrs:{type:"text",size:"small"},class:"el-icon-edit",on:{click:function(){return e.editHandle(a)}}},["编辑"]),t("el-button",{attrs:{type:"text",size:"small"},class:"el-icon-delete",on:{click:function(){return e.deleteHandle(a)}}},["删除"])])}},{prop:"type",label:"组件类型",formatter:function(e,t){var a={form:"表单组件",table:"表格组件",tree:"树形控件",search:"搜索组件"};return a[e[t.property]]}},{prop:"name",label:"组件名称",minWidth:160},{prop:"layoutKey",label:"组件编号",minWidth:160}],config:{btnsCol:[{type:"primary",label:"查询",key:"search"},{type:"primary",label:"新增",key:"add"},{type:"primary",label:"删除",key:"delete"},{type:"primary",label:"导出",key:"download"},{type:"primary",label:"导入",key:"upload"}],showCheckbox:!0}},loading:!1,data:[],total:0,params:{tab:"share",page:1,limit:10},editForm:{},dialogVisible:!1}},watch:{modelData:{handler:function(e){this.getComp()},immediate:!0,deep:!0}},methods:{deleteFun:function(e){var t=this;this.$confirm("此操作将永久删除选中的组件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$fetch.delBatch("comp",e.selection.map((function(e){return e.id}))).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.getComp()}))})).catch((function(e){console.log(e),t.$message({type:"info",message:"已取消删除"})}))},editHandle:function(e){var t=this;this.popParams={showFlag:!0,size:"mini",title:"新增组件",confirmEvent:function(e){t.$fetch.save("comp",Object(i["a"])(Object(i["a"])({},e),{},{op:"UPDATE"})).then((function(e){t.getComp()}))},content:{layoutData:this.FormLayoutData,model:e.row,type:"form"}}},deleteHandle:function(e){var t=this;this.$confirm("此操作将永久删除该组件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$fetch.delBatch("comp",e.row.id).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.getComp()}))})).catch((function(e){console.log(e),t.$message({type:"info",message:"已取消删除"})}))},configHandle:function(e){this.$emit("configHandle",{showType:"config",layoutData:e.row})},getComp:function(){var e=this,t={current:1,size:999,expand:"",orders:[],searchParams:[{filter:!0,operator:"IN",param:"modelId",values:[this.modelData.id]}]};this.$fetch.search("comp",t).then((function(t){e.data=t.data.records}))},addFun:function(){var e=this;this.popParams={showFlag:!0,size:"mini",title:"新增组件",confirmEvent:function(t){var a={form:'{"formDataList":[],"config":{"hideLabel":false,"labelWidth":"85px","labelPosition":"right","showRequiredAsterisk":true,"showVerificationMessage":true,"size":"medium","labelSuffix":":"}}',search:'{"formDataList":[],"config":{"hideLabel":false,"labelWidth":"85px","labelPosition":"right","showRequiredAsterisk":true,"showVerificationMessage":true,"size":"medium","labelSuffix":":"}}',table:'{"column":[],"config":{"btnsCol":[],"showPaging":false,"limit":20}}',tree:'{"node":[{"expression":"","elemCode":"'+e.$utils.guid()+'","isDefault":true,"items":[]}],"config":{"btnsCol":[]}}'};e.$fetch.save("comp",Object(i["a"])(Object(i["a"])({},t),{},{op:"INSERT",modelId:e.modelData.id,layoutModelCode:e.modelData.code,layoutInfo:a[t.type]||"{}",modelCode:e.modelData.code})).then((function(t){e.getComp()}))},content:{layoutData:this.FormLayoutData,model:{businessType:1,type:"form",layoutKey:this.$utils.guid()},type:"form"}}},openDialog:function(){},delHandle:function(){}}},s=r,c=(a("69b4"),a("2877")),u=Object(c["a"])(s,l,n,!1,null,null,null);t["default"]=u.exports},e4d0:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"business-config-page"},[t("right-to-left",{attrs:{"default-percent":e.defaultPercent}},[t("template",{slot:"left"},[t("model-tree",{on:{change:e.changeTreeFilter}})],1),t("template",{slot:"right"},[t("config-content",{attrs:{"model-data":e.activeNodeData}})],1)],2)],1)},n=[],i=a("d92b"),o=a("9b8c"),r={components:{modelTree:i["default"],configContent:o["default"]},data:function(){return{defaultPercent:22,activeNodeData:{}}},computed:{},mounted:function(){},methods:{changeTreeFilter:function(e){this.activeNodeData=e}}},s=r,c=(a("4cd6"),a("2877")),u=Object(c["a"])(s,l,n,!1,null,"781e90ac",null);t["default"]=u.exports},ff22:function(e,t,a){"use strict";a("8f90")}}]);