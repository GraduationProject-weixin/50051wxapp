(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goumaizhangjie/add-or-update"],{1576:function(e,t,n){"use strict";n.r(t);var r=n("f0c7"),i=n("7883");for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("96db");var a,o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"c2c989c6",null,!1,r["a"],a);t["default"]=s.exports},"65bf":function(e,t,n){},7883:function(e,t,n){"use strict";n.r(t);var r=n("eda9"),i=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=i.a},"96db":function(e,t,n){"use strict";var r=n("65bf"),i=n.n(r);i.a},"9a26":function(e,t,n){"use strict";(function(e){n("6fc7"),n("921b");r(n("66fd"));var t=r(n("1576"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},eda9:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,i,u,a){try{var o=e[u](a),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){u(a,r,i,o,s,"next",e)}function s(e){u(a,r,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("f09b"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{shujimingcheng:"",fenlei:"",fengmian:"",jiage:"",goumairiqi:"",yonghuming:"",xingming:"",ispay:"",userid:""},user:{}}},components:{wPicker:o},computed:{},onLoad:function(){var t=a(r.default.mark((function t(n){var i,u,a,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(u=t.sent,this.user=u.data,this.ruleForm.yonghuming=this.user.yonghuming,this.ruleForm.xingming=this.user.xingming,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid),!n.id){t.next=15;break}return this.ruleForm.id=n.id,t.next=13,this.$api.info("goumaizhangjie",this.ruleForm.id);case 13:u=t.sent,this.ruleForm=u.data;case 15:if(!n.cross){t.next=46;break}a=e.getStorageSync("crossObj"),t.t0=r.default.keys(a);case 18:if((t.t1=t.t0()).done){t.next=46;break}if(o=t.t1.value,"shujimingcheng"!=o){t.next=23;break}return this.ruleForm.shujimingcheng=a[o],t.abrupt("continue",18);case 23:if("fenlei"!=o){t.next=26;break}return this.ruleForm.fenlei=a[o],t.abrupt("continue",18);case 26:if("fengmian"!=o){t.next=29;break}return this.ruleForm.fengmian=a[o],t.abrupt("continue",18);case 29:if("jiage"!=o){t.next=32;break}return this.ruleForm.jiage=a[o],t.abrupt("continue",18);case 32:if("goumairiqi"!=o){t.next=35;break}return this.ruleForm.goumairiqi=a[o],t.abrupt("continue",18);case 35:if("yonghuming"!=o){t.next=38;break}return this.ruleForm.yonghuming=a[o],t.abrupt("continue",18);case 38:if("xingming"!=o){t.next=41;break}return this.ruleForm.xingming=a[o],t.abrupt("continue",18);case 41:if("userid"!=o){t.next=44;break}return this.ruleForm.userid=a[o],t.abrupt("continue",18);case 44:t.next=18;break;case 46:this.styleChange();case 47:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},goumairiqiChange:function(e){this.ruleForm.goumairiqi=e.target.value,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.fengmian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.userid){e.next=3;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.id){e.next=8;break}return e.next=6,this.$api.update("goumaizhangjie",this.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,this.$api.add("goumaizhangjie",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},f0c7:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}))}},[["9a26","common/runtime","common/vendor"]]]);