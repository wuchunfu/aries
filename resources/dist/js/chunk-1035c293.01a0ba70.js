(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1035c293"],{"0305":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",[n("template",{slot:"header"},[t._v("文章 / 分类")]),n("d2-crud",{ref:"d2Crud",attrs:{loading:t.loading,columns:t.columns,data:t.data,options:t.options,pagination:t.pagination,"form-options":t.formOptions,"add-title":"添加分类","add-template":t.addTemplate,"add-rules":t.addRules,"edit-title":"修改分类","edit-template":t.editTemplate,"edit-rules":t.editRules,rowHandle:t.rowHandle,"selection-row":""},on:{"pagination-current-change":t.paginationCurrentChange,"row-add":t.handleRowAdd,"row-edit":t.handleRowEdit,"dialog-cancel":t.handleDialogCancel,"row-remove":t.handleRowRemove,"selection-change":t.handleSelectionChange}},[n("el-form",{staticClass:"demo-form-inline",attrs:{slot:"header",inline:!0},slot:"header"},[n("el-form-item",[n("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{size:"small",type:"danger"},on:{click:t.handleRowListRemove}},[n("i",{staticClass:"el-icon-delete"}),t._v(" 批量删除 ")])],1),n("el-form-item",[n("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[n("i",{staticClass:"el-icon-plus"}),t._v(" 新增 ")])],1),n("el-form-item",[n("el-input",{attrs:{size:"small",placeholder:"请输入名称"},model:{value:t.pagination.key,callback:function(e){t.$set(t.pagination,"key",e)},expression:"pagination.key"}})],1),n("el-form-item",[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.search}},[n("i",{staticClass:"el-icon-search"}),t._v(" 搜索")])],1),n("el-form-item",[n("el-button",{attrs:{size:"small"},on:{click:t.reset}},[n("i",{staticClass:"el-icon-refresh"}),t._v(" 重置")])],1)],1)],1)],2)},i=[],o=(n("4160"),n("a15b"),n("b0c0"),n("159b"),n("5530")),r=n("2626d"),c=n("da31"),s={name:"postCategory",components:{childCategory:c["a"]},data:function(){return{columns:[{title:"分类名称",key:"name",width:"180"},{title:"访问 URL",key:"url",width:"180"},{title:"子级分类",component:{name:c["a"]}}],data:[],pagination:{currentPage:1,pageSize:10,total:0,key:""},parentCategories:[],selection:[],options:{border:!0},rowHandle:{remove:{icon:"el-icon-delete",size:"small",fixed:"right",confirm:!0},edit:{icon:"el-icon-edit",text:"编辑",size:"small"}},addTemplate:{name:{title:"分类名称",value:""},url:{title:"URL",value:""},parent_id:{title:"父级分类",value:0,component:{name:"el-select",options:[]}}},addRules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"}],url:[{required:!0,message:"请输入 URL",trigger:"blur"}]},editTemplate:{name:{title:"分类名称",value:""},url:{title:"URL",value:""},parent_id:{title:"父级分类",value:0,component:{name:"el-select",options:[]}}},editRules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"}],url:[{required:!0,message:"请输入 URL",trigger:"blur"}]},formOptions:{labelWidth:"80px",labelPosition:"left",saveLoading:!1},loading:!1}},created:function(){this.fetchData(),this.fetchParentCategories()},methods:{paginationCurrentChange:function(t){this.pagination.currentPage=t,this.fetchData()},fetchData:function(){var t=this;this.loading=!0,setTimeout((function(){Object(r["g"])({page:t.pagination.currentPage,size:t.pagination.pageSize,category_type:0,key:t.pagination.key}).then((function(e){t.data=e.data.data,t.pagination.total=e.data.total_num})).catch((function(){})),t.loading=!1}),300)},search:function(){this.pagination.currentPage=1,this.fetchData()},reset:function(){this.pagination={currentPage:1,pageSize:10,total:0,key:""},this.fetchData()},fetchParentCategories:function(){var t=this;this.parentCategories=[{value:0,label:"请选择父级分类"}],Object(r["f"])(0).then((function(e){var n=t;e.data.forEach((function(t){n.parentCategories.push({value:t.ID,label:t.name})})),t.addTemplate.parent_id.component.options=t.parentCategories,t.editTemplate.parent_id.component.options=t.parentCategories})).catch((function(){}))},addRow:function(){this.$refs.d2Crud.showDialog({mode:"add"})},handleRowAdd:function(t,e){var n=this;this.formOptions.saveLoading=!0,setTimeout((function(){Object(r["a"])(t).then((function(t){n.$message.success(t.msg),e(),n.fetchData(),n.fetchParentCategories()})).catch((function(){})),n.formOptions.saveLoading=!1}),300)},handleRowEdit:function(t,e){var n=this;this.formOptions.saveLoading=!0;var a=Object(o["a"])({},t.row);setTimeout((function(){Object(r["i"])(a).then((function(t){n.$message.success(t.msg),e(),n.fetchData(),n.fetchParentCategories()})).catch((function(){})),n.formOptions.saveLoading=!1}),300)},handleDialogCancel:function(t){this.$message.warning("取消保存"),t()},handleSelectionChange:function(t){this.selection=t},handleRowRemove:function(t,e){var n=this,a=(t.index,t.row);setTimeout((function(){Object(r["d"])(a.ID).then((function(t){n.$message.success(t.msg),e(),n.fetchData(),n.fetchParentCategories()})).catch((function(){}))}),300)},handleRowListRemove:function(){var t=this;0===this.selection.length?this.$message.error("请勾选要删除的条目"):this.$confirm("确定要删除吗?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then((function(){var e=[];t.selection.forEach((function(t){e.push(t.ID)})),e=e.join(),setTimeout((function(){Object(r["h"])(e).then((function(e){t.$message.success(e.msg),t.fetchData(),t.fetchParentCategories()})).catch((function(){}))}),300)})).catch((function(){}))}}},l=s,u=n("2877"),d=Object(u["a"])(l,a,i,!1,null,null,null);e["default"]=d.exports},"2626d":function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"f",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"i",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"k",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"j",(function(){return h})),n.d(e,"d",(function(){return f})),n.d(e,"h",(function(){return g}));var a=n("22ce");function i(t){return Object(a["b"])({url:"/all_categories?category_type=".concat(t),method:"get"})}function o(t){return Object(a["b"])({url:"/categories",method:"get",params:t})}function r(t){return Object(a["b"])({url:"/parent_categories?category_type=".concat(t),method:"get"})}function c(t){return Object(a["b"])({url:"/categories/article",method:"post",data:t})}function s(t){return Object(a["b"])({url:"/categories/article",method:"put",data:t})}function l(t){return Object(a["b"])({url:"/categories/link",method:"post",data:t})}function u(t){return Object(a["b"])({url:"/categories/link",method:"put",data:t})}function d(t){return Object(a["b"])({url:"/categories/gallery",method:"post",data:t})}function h(t){return Object(a["b"])({url:"/categories/gallery",method:"put",data:t})}function f(t){return Object(a["b"])({url:"/categories/".concat(t),method:"delete"})}function g(t){return Object(a["b"])({url:"/categories?ids=".concat(t),method:"delete"})}},da31:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.textList,(function(e){return n("el-tag",{key:e,staticStyle:{"margin-right":"5px","margin-top":"3px"},attrs:{type:t.type}},[t._v(" "+t._s(e)+" ")])})),1)},i=[],o=(n("4160"),n("b0c0"),n("159b"),{name:"childCategory",props:{scope:{default:null},type:{type:String,default:"default"}},mounted:function(){},computed:{textList:function(){var t=[];return null!=this.scope.row.children&&this.scope.row.children.forEach((function(e){t.push(e.name)})),t}}}),r=o,c=n("2877"),s=Object(c["a"])(r,a,i,!1,null,"1abb710e",null);e["a"]=s.exports}}]);