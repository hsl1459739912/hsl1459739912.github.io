webpackJsonp([1],{"+BTi":function(t,e){},"+skl":function(t,e){},EE5j:function(t,e){},Fnrf:function(t,e){},G2h4:function(t,e){},GKo8:function(t,e){},GuS6:function(t,e){},IxJZ:function(t,e){},LZSw:function(t,e){Bmob.initialize("0319b91e2178a41cbd7c7683126ed4cd","3afd32e8095f62c049de343910a9473f")},"MA/V":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("hXTu"),s("+BTi");var i=s("y7os"),n=s.n(i),a=(s("IxJZ"),s("NoPp")),o=s.n(a),r=(s("vBcO"),s("ARSI")),c=s.n(r),l=s("7+uW"),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var v=s("VU/8")({name:"App"},u,!1,function(t){s("Fnrf")},null,null).exports,m=s("/ocq"),d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cr"},[s("ul",{staticClass:"menu-list"},t._l(t.links,function(e,i){return s("li",{key:i,staticClass:"item"},[s("Icon",{staticClass:"icon",attrs:{type:e.icon,color:"white",size:"20"}}),t._v(" "),s("router-link",{attrs:{to:e.href}},[t._v(t._s(e.title))])],1)}))])},staticRenderFns:[]};var p=s("VU/8")({name:"",data:function(){return{links:[{title:"主页",href:"/",icon:"ios-home-outline"},{title:"分类",href:"/categorize",icon:"ios-color-filter-outline"},{title:"购物车",href:"/shopcar",icon:"ios-cart-outline"},{title:"我",href:"/personal",icon:"ios-person-add-outline"}]}},methods:{}},d,!1,function(t){s("MA/V")},"data-v-7e73e958",null).exports,h={name:"navtop",data:function(){return{title:"XXXX"}},props:{goBack:{type:Boolean,default:!1}},methods:{goBackClick:function(){this.$router.go(-1)}},watch:{$route:function(t,e){switch(t.name){case"details":this.$store.commit("changeTitle","详情");break;case"mian":this.$store.commit("changeTitle","主页");break;case"shopcar":this.$store.commit("changeTitle","购物车");break;case"categorize":this.$store.commit("changeTitle","分类");break;case"personal":this.$store.commit("changeTitle","个人中心");break;case"price":this.$store.commit("changeTitle","结算中心");break;case"login":this.$store.commit("changeTitle","登录/注册");break;case"place":this.$store.commit("changeTitle","收货地址");break;case"set":this.$store.commit("changeTitle","个人设置")}}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navigationbar"},[this.goBack?e("Icon",{staticClass:"goBtn",attrs:{type:"ios-arrow-back",color:"white",size:"24"},on:{click:this.goBackClick}}):this._e(),this._v(" "),e("h3",{staticClass:"title"},[this._v(this._s(this.$store.state.title))])],1)},staticRenderFns:[]};var _=s("VU/8")(h,g,!1,function(t){s("Txhl")},"data-v-2bdb0076",null).exports,f={mounted:function(){this.downdate()},name:"mian",methods:{goDetails:function(){this.$router.push({name:"details",query:{msg:this.val}})},moveDetails:function(){this.details=!this.details},goDetail:function(){this.details=!this.details},downdate:function(){var t=this;Bmob.initialize("0319b91e2178a41cbd7c7683126ed4cd","3afd32e8095f62c049de343910a9473f");var e=Bmob.Object.extend("goods");new Bmob.Query(e).find({success:function(e){for(var s=[],i=[],n=[],a=0;a<e.length;a++){var o=e[a];s.push(o.get("imgurl")),i.push(o.get("name")),n.push(o.get("price"))}t.img=s,t.title=i,t.price=n},error:function(t,e){alert("query object fail")}})}},data:function(){return{val:"详情",imgSrc:["http://bmob-cdn-19599.b0.upaiyun.com/2018/07/30/15fdf90040e86d3c8005ea2e0d1ab4f1.jpg","http://bmob-cdn-19599.b0.upaiyun.com/2018/07/30/f76b58c340d3c15c80196045f1e30962.jpg","http://bmob-cdn-19599.b0.upaiyun.com/2018/07/30/23962283408a5bc6800a76fe017e42d7.jpg"],img:[null],title:[null],price:[null],details:!1}},components:{Navlist:p,Navtop:_}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Navtop"),t._v(" "),s("div",{staticClass:"ma"},[s("header",[s("el-carousel",{attrs:{height:"150px",interval:5e3,arrow:"always"}},t._l(t.imgSrc,function(t){return s("el-carousel-item",{key:t,staticClass:"flashimg"},[s("img",{attrs:{src:t,alt:""}})])})),t._v(" "),s("div",{staticClass:"hd-t"},[s("Icon",{attrs:{type:"ios-alert-outline",size:"20",color:"orange"}}),t._v(" "),s("span",[t._v("7夕期间订单可能较多，请提前预定")])],1)],1),t._v(" "),s("main",[s("h3",[t._v("新品上市")]),t._v(" "),s("div",{staticClass:"newflower flx"},t._l(4,function(e){return s("div",{key:e,staticClass:"newd",on:{click:t.goDetail}},[s("img",{attrs:{src:t.img[e-1],alt:""}}),t._v(" "),s("p",[t._v(t._s(t.title[e-1]))]),t._v(" "),s("small",[t._v("价格:"+t._s(t.price[e-1]))])])})),t._v(" "),s("h3",[t._v("当季热销")]),t._v(" "),s("div",{staticClass:"hotflower flx"},t._l(4,function(e){return s("div",{key:e,staticClass:"newd"},[s("img",{attrs:{src:t.img[e-1],alt:""}}),t._v(" "),s("p",[t._v(t._s(t.title[e-1]))]),t._v(" "),s("small",[t._v("价格:"+t._s(t.price[e-1]))])])})),t._v(" "),s("h3",[t._v("活动特卖")]),t._v(" "),s("div",{staticClass:"activeflower flx"},t._l(4,function(e){return s("div",{key:e,staticClass:"newd"},[s("img",{attrs:{src:t.img[e-1],alt:""}}),t._v(" "),s("p",[t._v(t._s(t.title[e-1]))]),t._v(" "),s("small",[t._v("价格:"+t._s(t.price[e-1]))])])})),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.details,expression:"details"}],staticClass:"details"},[s("p",{staticClass:"remo",on:{click:t.moveDetails}},[t._v("X")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"detama"},[s("img",{attrs:{src:"http://bmob-cdn-19599.b0.upaiyun.com/2018/07/30/c22c26e240c2ce1c80785e5bbbcecc16.jpg",alt:"",width:"40%",height:"200px"}}),t._v(" "),s("p",[t._v("花名:    情巴黎----33枝红玫瑰")]),t._v(" "),s("p",[t._v("规格:    戴安娜玫瑰66枝 勿忘我适量围绕")]),t._v(" "),s("p",[t._v("包装:    内层粉色厚棉纸 外层银灰色短平板印花树叶草 粉紫双色缎带")]),t._v(" "),s("p",{staticClass:"godeta",on:{click:t.goDetails}},[t._v("详情>")])]),t._v(" "),t._m(0)])])]),t._v(" "),s("Navlist")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detatext"},[s("br"),t._v(" "),s("h3",[t._v("不变的心----戴安娜玫瑰66枝")]),t._v(" "),s("p",[t._v("你的温柔似水，静静无言，用心浇灌一份爱，等待最美的时刻绽放。")]),t._v(" "),s("small",[s("span",[t._v("￥298")]),s("span",[t._v("库存:10")])]),t._v(" "),s("div",{staticClass:"btn"},[s("button",[t._v("加入购物车")]),t._v(" "),s("button",[t._v("立即购买")])])])}]};var y=s("VU/8")(f,b,!1,function(t){s("RWNz")},"data-v-93b6d0ce",null).exports,w={name:"set",data:function(){return{gender:"",name:"",style:"",birthday:"",isBoy:!0,isGirl:!1,isXxx:!1}},mounted:function(){this.getSet(),this.boy(),this.girl(),this.xxx()},methods:{boy:function(){"男"!=this.gender&&(this.isBoy=!0,this.isGirl=!1,this.isXxx=!1,this.gender="男")},girl:function(){"女"!=this.gender&&(this.gender="女",this.isGirl=!0,this.isBoy=!1,this.isXxx=!1)},xxx:function(){"保密"!=this.gender&&(this.gender="保密",this.isXxx=!0,this.isGirl=!1,this.isBoy=!1)},okChange:function(){var t=this,e=sessionStorage.getItem("isLogin"),s=new(Bmob.Object.extend("User_set"+e));s.set("name",this.name),s.set("gender",this.gender),s.set("style",this.style),s.set("birthday",this.birthday),s.save(null,{success:function(e){alert("修改成功"),t.$router.push({name:"mian"})},error:function(t,e){alert("添加数据失败，返回错误信息："+e.description)}})},getSet:function(){var t=this,e=sessionStorage.getItem("isLogin"),s=Bmob.Object.extend("User_set"+e);new Bmob.Query(s).find({success:function(e){for(var s=e.length-1;s>=0;s--){var i=e[e.length-1];t.name=i.get("name"),t.gender=i.get("gender"),t.birthday=i.get("birthday"),t.style=i.get("style")}},error:function(t){alert("第一次进入，请设置你的个人信息")}})}},components:{Navtop:_}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Navtop",{attrs:{goBack:!0}}),t._v(" "),s("div",{staticClass:"ma"},[s("form",{attrs:{action:""}},[s("p",[s("span",[t._v("昵称")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("p",[s("span",[t._v("签名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.style,expression:"style"}],attrs:{type:"text",placeholder:"请输入签名"},domProps:{value:t.style},on:{input:function(e){e.target.composing||(t.style=e.target.value)}}})]),t._v(" "),s("p",[s("span",[t._v("性别")]),t._v(" "),s("small",{staticClass:"btn"},[s("button",{class:{sty:t.isBoy},attrs:{type:"button"},on:{click:t.boy}},[t._v("男")]),t._v(" "),s("button",{class:{sty:t.isGirl},attrs:{type:"button"},on:{click:t.girl}},[t._v("女")]),t._v(" "),s("button",{class:{sty:t.isXxx},attrs:{type:"button"},on:{click:t.xxx}},[t._v("保密")])])]),t._v(" "),s("p",[s("span",[t._v("出生年月")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.birthday,expression:"birthday"}],attrs:{type:"date"},domProps:{value:t.birthday},on:{input:function(e){e.target.composing||(t.birthday=e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"change",attrs:{type:"button"},on:{click:t.okChange}},[t._v("确认修改")])])],1)},staticRenderFns:[]};var x=s("VU/8")(w,C,!1,function(t){s("GKo8")},"data-v-51b64088",null).exports,k={mounted:function(){this.downdate()},name:"categorzie",data:function(){return{img:[null],title:[null],price:[null],size:[null]}},components:{Navlist:p,Navtop:_},methods:{goDetails:function(){this.$router.push({name:"details",query:{msg:this.val}})},downdate:function(){var t=this;Bmob.initialize("0319b91e2178a41cbd7c7683126ed4cd","3afd32e8095f62c049de343910a9473f");var e=Bmob.Object.extend("goods");new Bmob.Query(e).find({success:function(e){for(var s=[],i=[],n=[],a=[],o=0;o<e.length;o++){var r=e[o];s.push(r.get("imgurl")),i.push(r.get("name")),n.push(r.get("price")),a.push(r.get("size"))}t.img=s,t.title=i,t.price=n,t.size=a},error:function(t,e){alert("query object fail")}})}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Navtop"),t._v(" "),s("div",{staticClass:"ma"},[s("div",{staticClass:"search"},[s("Icon",{staticClass:"icon",attrs:{type:"ios-search-outline",size:"30"}}),t._v(" "),s("input",{attrs:{type:"text"}})],1),t._v(" "),s("div",{staticClass:"seama"},t._l(4,function(e){return s("div",{key:e,staticClass:"sea",on:{click:t.goDetails}},[s("img",{attrs:{src:t.img[e-1],alt:""}}),t._v(" "),s("h4",[t._v(t._s(t.title[e-1]))]),t._v(" "),s("p",[t._v(t._s(t.size[e-1]))]),t._v(" "),s("small",[t._v("价格:￥ "+t._s(t.price[e-1]))])])}))]),t._v(" "),s("Navlist")],1)},staticRenderFns:[]};var $=s("VU/8")(k,N,!1,function(t){s("m33+")},"data-v-96de3ca6",null).exports,B={name:"",mounted:function(){this.downdate()},data:function(){return{indexs:"1234",is:!0,img:[null],title:[null],price:[null],num:[null],dele:[!0,!0,!0,!0],non:!1}},methods:{add:function(t){var e=t.path[0].className-1,s=this.num[e];s++,this.num[e]>0&&l.default.set(this.num,e,s)},remo:function(t){var e=t.path[0].className-1,s=this.num[e];s--,this.num[e]>0&&l.default.set(this.num,e,s)},deleted:function(t){var e=t.path[0].className-1;l.default.set(this.dele,e,!1)},change:function(){this.non=!this.non},goSell:function(){console.log(this.num.join()),this.$router.push({name:"price",query:{goodsnum:this.num.join()}})},downdate:function(){var t=this,e=Bmob.Object.extend("goods");new Bmob.Query(e).find({success:function(e){for(var s=[],i=[],n=[],a=[],o=0;o<e.length;o++){var r=e[o];s.push(r.get("imgurl")),i.push(r.get("name")),n.push(r.get("price")),a.push(r.get("num"))}t.img=s,t.title=i,t.price=n,t.num=a},error:function(t,e){alert("购物车为空，请前往首页选购")}})}},components:{Navlist:p,Navtop:_}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Navtop"),t._v(" "),s("div",{staticClass:"ma"},[s("div",[s("button",{staticClass:"cha",on:{click:t.change}},[t._v("编辑")])]),t._v(" "),s("div",{staticClass:"flx"},t._l(4,function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.dele[e-1],expression:"dele[index-1]"}],key:e},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.non,expression:"non"}],class:t.indexs[e-1],attrs:{type:"button"},on:{click:t.deleted}},[t._v("删除")]),t._v(" "),s("img",{attrs:{src:t.img[e-1],alt:""}}),t._v(" "),s("p",[t._v(t._s(t.title[e-1]))]),t._v(" "),s("small",[t._v("单价:"+t._s(t.price[e-1]))]),t._v(" "),s("div",{staticClass:"nums"},[s("span",{class:t.indexs[e-1],on:{click:t.remo}},[t._v("-")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.num[e-1],expression:"num[index-1]",modifiers:{number:!0}}],attrs:{type:"number",min:"0"},domProps:{value:t.num[e-1]},on:{input:function(s){s.target.composing||t.$set(t.num,e-1,t._n(s.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("span",{class:t.indexs[e-1],on:{click:t.add}},[t._v("+")])])])})),t._v(" "),s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.goSell}},[t._v("前往支付")])]),t._v(" "),s("Navlist")],1)},staticRenderFns:[]};var z=s("VU/8")(B,P,!1,function(t){s("GuS6")},"data-v-257d4e70",null).exports,I={name:"",data:function(){return{}},components:{Navtop:_}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("Navtop",{attrs:{goBack:!0}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ma"},[s("div",{staticClass:"details"},[s("hr"),t._v(" "),s("div",{staticClass:"detama"},[s("img",{attrs:{src:"http://bmob-cdn-19599.b0.upaiyun.com/2018/07/30/c22c26e240c2ce1c80785e5bbbcecc16.jpg",alt:"",width:"40%",height:"200px"}}),t._v(" "),s("p",[t._v("花名:    情巴黎----33枝红玫瑰")]),t._v(" "),s("p",[t._v("规格:    戴安娜玫瑰66枝 勿忘我适量围绕")]),t._v(" "),s("p",[t._v("包装:    内层粉色厚棉纸 外层银灰色短平板印花树叶草 粉紫双色缎带")]),t._v(" "),s("p",[t._v("价格:    ￥ 298")])]),t._v(" "),s("div",{staticClass:"btn"},[s("button",[t._v("加入购物车")]),t._v(" "),s("button",[t._v("立即购买")])]),t._v(" "),s("div",{staticClass:"detatext"},[s("br"),t._v(" "),s("fieldset",[s("legend",[t._v("不变的心----戴安娜玫瑰66枝")]),t._v(" "),s("p",[t._v("你的温柔似水，静静无言，用心浇灌一份爱，等待最美的时刻绽放。")])]),t._v(" "),s("fieldset",[s("legend",[t._v("配送")]),t._v(" "),s("p",[t._v("全国 （可配送至全国2000多城市，市区免配送费）")])])])])])}]};var S=s("VU/8")(I,T,!1,function(t){s("OOhu")},"data-v-46320bb4",null).exports,L={name:"",methods:{goLogin:function(){this.lg||(this.lg=!0,this.rg=!1,this.isLg=!0,this.isRg=!1)},goRegister:function(){this.rg||(this.rg=!0,this.lg=!1,this.isRg=!0,this.isLg=!1)},login:function(){var t=this,e=this.lgPw;this.lgAd&&this.lgPw?Bmob.User.logIn(this.lgAd,this.lgPw,{success:function(s){sessionStorage.isLogin=e,t.$router.push({name:"mian"})},error:function(t,e){}}):alert("请输入用户名或密码")},register:function(){var t=this,e=this.rgPw,s=new Bmob.User;s.set("username",this.rgAd),s.set("password",this.rgPw),s.set("email",this.pho),this.rgAd&&this.rgPw&&this.rgPw==this.isPw?s.signUp(null,{success:function(s){sessionStorage.isLogin=e,t.$router.push({name:"mian"})},error:function(t,e){alert("Error: "+e.code+" "+e.message)}}):alert("请输入正确的信息")}},data:function(){return{lg:!0,rg:!1,isLg:!0,isRg:!1,lgAd:"",lgPw:"",rgAd:"",rgPw:"",pho:"",isPw:""}},components:{Navtop:_}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Navtop"),t._v(" "),s("div",{staticClass:"ma"},[s("div",{staticClass:"btn"},[s("button",{class:{sty:t.isLg},attrs:{type:"button"},on:{click:t.goLogin}},[t._v("登录")]),t._v(" "),s("button",{class:{sty:t.isRg},attrs:{type:"button"},on:{click:t.goRegister}},[t._v("注册")])]),t._v(" "),s("div",{staticClass:"lgma"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.lg,expression:"lg"}],staticClass:"login"},[s("form",{attrs:{action:""}},[s("div",{staticClass:"setico"},[s("Icon",{staticClass:"ico",attrs:{type:"ios-body-outline",size:"30"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.lgAd,expression:"lgAd"}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:t.lgAd},on:{input:function(e){e.target.composing||(t.lgAd=e.target.value)}}})],1),t._v(" "),s("div",{staticClass:"setico"},[s("Icon",{staticClass:"ico",attrs:{type:"md-key",size:"30"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.lgPw,expression:"lgPw"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.lgPw},on:{input:function(e){e.target.composing||(t.lgPw=e.target.value)}}})],1),t._v(" "),s("button",{attrs:{type:"button"},on:{click:t.login}},[t._v("登录")])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.rg,expression:"rg"}],staticClass:"register"},[s("form",{attrs:{action:""}},[s("div",{staticClass:"setico"},[s("Icon",{staticClass:"ico",attrs:{type:"ios-body-outline",size:"30"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.rgAd,expression:"rgAd"}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:t.rgAd},on:{input:function(e){e.target.composing||(t.rgAd=e.target.value)}}})],1),t._v(" "),s("div",{staticClass:"setico"},[s("Icon",{staticClass:"ico",attrs:{type:"md-key",size:"30"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.rgPw,expression:"rgPw"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.rgPw},on:{input:function(e){e.target.composing||(t.rgPw=e.target.value)}}})],1),t._v(" "),s("div",{staticClass:"setico"},[s("Icon",{staticClass:"ico",attrs:{type:"ios-key-outline",size:"30"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.isPw,expression:"isPw"}],attrs:{type:"password",placeholder:"请重复密码"},domProps:{value:t.isPw},on:{input:function(e){e.target.composing||(t.isPw=e.target.value)}}})],1),t._v(" "),s("div",{staticClass:"setico"},[s("Icon",{staticClass:"ico",attrs:{type:"ios-mail-outline",size:"30"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.pho,expression:"pho"}],attrs:{type:"text",placeholder:"请输入邮箱"},domProps:{value:t.pho},on:{input:function(e){e.target.composing||(t.pho=e.target.value)}}})],1),t._v(" "),s("button",{attrs:{type:"button"},on:{click:t.register}},[t._v("注册")])])])])])],1)},staticRenderFns:[]};var E,U=s("VU/8")(L,j,!1,function(t){s("EE5j")},"data-v-15313278",null).exports,A=s("bOdI"),R=s.n(A),O=(E={name:"personal",mounted:function(){this.isLogin()},data:function(){return{style:"请输入你的个性签名",name:"追花者",sell:["我的订单","我的评价"],goods:["商品收藏","优惠卷","浏览记录"]}},components:{Navlist:p,Navtop:_}},R()(E,"mounted",function(){this.dowmName()}),R()(E,"methods",{goCite:function(){this.$router.push({name:"place"})},goLogin:function(){sessionStorage.isLogin="",this.$router.push({name:"login"})},goSet:function(){this.$router.push({name:"set"})},isLogin:function(){sessionStorage.isLogin||this.$router.push({name:"login"})},dowmName:function(){var t=this,e=sessionStorage.getItem("isLogin"),s=Bmob.Object.extend("User_set"+e);new Bmob.Query(s).find({success:function(e){for(var s=e.length-1;s>=0;s--){var i=e[e.length-1];t.name=i.get("name"),t.style=i.get("style")}},error:function(t){}})}}),E),V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Navtop"),t._v(" "),s("div",{staticClass:"ma"},[s("div",{staticClass:"userImg"},[t._m(0),t._v(" "),s("p",[t._v(t._s(t.name))]),t._v(" "),s("small",[t._v(t._s(t.style))])]),t._v(" "),s("div",{staticClass:"set"},[s("div",[s("button",{on:{click:t.goSet}},[t._v("设置信息")]),t._v(" "),s("Icon",{staticClass:"icon",attrs:{type:"ios-arrow-dropright",size:"25"}})],1),t._v(" "),s("div",[s("button",{on:{click:t.goCite}},[t._v("收货地址")]),t._v(" "),s("Icon",{staticClass:"icon",attrs:{type:"ios-arrow-dropright",size:"25"}})],1)]),t._v(" "),s("div",{staticClass:"sell"},t._l(t.sell,function(e){return s("div",{key:e},[s("button",{attrs:{type:"button"}},[t._v(t._s(e))]),t._v(" "),s("Icon",{staticClass:"icon",attrs:{type:"ios-arrow-dropright",size:"25"}})],1)})),t._v(" "),s("div",{staticClass:"goods"},t._l(t.goods,function(e,i){return s("div",{key:i},[s("button",{attrs:{type:"button"}},[t._v(t._s(e))]),t._v(" "),s("Icon",{staticClass:"icon",attrs:{type:"ios-arrow-dropright",size:"25"}})],1)})),t._v(" "),s("button",{staticClass:"btn",on:{click:t.goLogin}},[t._v("退出登录")])]),t._v(" "),s("Navlist")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"userhead"},[e("img",{attrs:{src:"http://bmob-cdn-19599.b0.upaiyun.com/2018/08/02/927e314c40402fbe80bdf7f9c01ed028.png",alt:""}})])}]};var F=s("VU/8")(O,V,!1,function(t){s("G2h4")},"data-v-79ca96cc",null).exports,X={name:"",data:function(){return{name:"",phone:"",mail:"",cite:""}},mounted:function(){this.getCite()},methods:{okChange:function(){var t=this,e=sessionStorage.getItem("isLogin"),s=new(Bmob.Object.extend("User_cite"+e));s.set("name",this.name),s.set("phone",this.phone),s.set("mail",this.mail),s.set("cite",this.cite),s.save(null,{success:function(e){alert("修改成功"),t.$router.push({name:"mian"})},error:function(t,e){alert("添加数据失败，返回错误信息："+e.description)}})},getCite:function(){var t=this,e=sessionStorage.getItem("isLogin"),s=Bmob.Object.extend("User_cite"+e);new Bmob.Query(s).find({success:function(e){for(var s=e.length-1;s>=0;s--){var i=e[e.length-1];t.name=i.get("name"),t.phone=i.get("phone"),t.cite=i.get("cite"),t.mail=i.get("mail")}},error:function(t){alert("第一次进入，请设置你的个人信息")}})}},components:{Navlist:p,Navtop:_}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Navtop",{attrs:{goBack:!0}}),t._v(" "),s("div",{staticClass:"ma"},[s("form",{attrs:{action:""}},[s("p",[s("span",[t._v("姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("p",[s("span",[t._v("电话号码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入签名"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),s("p",[s("span",[t._v("邮政编码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mail,expression:"mail"}],attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:t.mail},on:{input:function(e){e.target.composing||(t.mail=e.target.value)}}})]),t._v(" "),s("p",[s("span",[t._v("详细地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.cite,expression:"cite"}],attrs:{type:"text",placeholder:"请输入签名"},domProps:{value:t.cite},on:{input:function(e){e.target.composing||(t.cite=e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"change",attrs:{type:"button"},on:{click:t.okChange}},[t._v("修改地址")])]),t._v(" "),s("Navlist")],1)},staticRenderFns:[]};var Q=s("VU/8")(X,G,!1,function(t){s("tc19")},"data-v-8929b07e",null).exports,D={name:"price",data:function(){return{pric:0,cite:"",mail:"",name:"",pho:""}},mounted:function(){this.price(),this.cites()},methods:{cites:function(){var t=this,e=sessionStorage.getItem("isLogin"),s=Bmob.Object.extend("User_cite"+e),i=this;new Bmob.Query(s).find({success:function(e){for(var s=e.length-1;s>=0;s--){var i=e[e.length-1];t.name=i.get("name"),t.pho=i.get("phone"),t.cite=i.get("cite"),t.mail=i.get("mail")}},error:function(t){alert("第一次进入，请设置你的个人信息"),i.$router.push("place")}})},price:function(){var t=this,e=this.$route.query.goodsnum.split(","),s=Bmob.Object.extend("goods");new Bmob.Query(s).find({success:function(s){for(var i=0,n=0;n<s.length;n++){i+=s[n].get("price")*e[n]}t.pric=i},error:function(t){}})},changeCite:function(){this.$router.push("place")}},components:{Navtop:_}},q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("Navtop",{attrs:{goBack:!0}}),t._v(" "),s("div",{staticClass:"ma"},[s("h3",[t._v("商品信息确认")]),t._v(" "),s("div",{staticClass:"price"},[s("h4",[t._v("价格信息")]),t._v(" "),s("p",[t._v("商品总价 "),s("span",[t._v(t._s(t.pric))])]),t._v(" "),t._m(0),t._v(" "),s("big",[t._v("订单总价"),s("span",[t._v(t._s(t.pric+10))])])],1),t._v(" "),s("div",{staticClass:"cite"},[s("h4",[t._v("收货信息")]),t._v(" "),s("p",[t._v("收货地址"),s("span",[t._v(t._s(t.cite))])]),t._v(" "),s("p",[t._v("收货人"),s("span",[t._v(t._s(t.name))])]),t._v(" "),s("p",[t._v("邮编"),s("span",[t._v(t._s(t.mail))])]),t._v(" "),s("p",[t._v("电话"),s("span",[t._v(t._s(t.pho))])]),t._v(" "),s("div",{staticClass:"btn"},[s("button",{attrs:{type:"button"},on:{click:t.changeCite}},[t._v("修改收货人信息")]),t._v(" "),s("Icon",{staticClass:"icon",attrs:{type:"ios-arrow-dropright",size:"25"}})],1)]),t._v(" "),s("h3",[t._v("选择支付方式")]),t._v(" "),s("div",{staticClass:"pay"},[s("div",[s("img",{attrs:{src:"http://bmob-cdn-19599.b0.upaiyun.com/2018/08/02/96b0182b40f052d4801d307cb94194de.png",alt:""}}),t._v(" "),s("button",[t._v("微信支付")]),t._v(" "),s("Icon",{staticClass:"icon",attrs:{type:"ios-arrow-dropright",size:"25"}})],1),t._v(" "),s("div",[s("img",{attrs:{src:"http://bmob-cdn-19599.b0.upaiyun.com/2018/08/02/89ff890d40d1db9c80f7c99f662fc757.png",alt:""}}),t._v(" "),s("button",[t._v("支付宝")]),t._v(" "),s("Icon",{staticClass:"icon",attrs:{type:"ios-arrow-dropright",size:"25"}})],1),t._v(" "),s("div",[s("img",{attrs:{src:"http://bmob-cdn-19599.b0.upaiyun.com/2018/08/02/06330d0f40289d0b8052aa6622ae8acb.png",alt:""}}),t._v(" "),s("button",[t._v("银行卡")]),t._v(" "),s("Icon",{staticClass:"icon",attrs:{type:"ios-arrow-dropright",size:"25"}})],1),t._v(" "),s("div",[s("img",{attrs:{src:"http://bmob-cdn-19599.b0.upaiyun.com/2018/08/02/9c2eaba940d92edb804e4654664f7072.png",alt:""}}),t._v(" "),s("button",[t._v("信用卡")]),t._v(" "),s("Icon",{staticClass:"icon",attrs:{type:"ios-arrow-dropright",size:"25"}})],1),t._v(" "),s("div",[s("img",{attrs:{src:"http://bmob-cdn-19599.b0.upaiyun.com/2018/08/02/35555e3740d3421d800a0e34f4b5f4f5.png",alt:""}}),t._v(" "),s("button",[t._v("VISA")]),t._v(" "),s("Icon",{staticClass:"icon",attrs:{type:"ios-arrow-dropright",size:"25"}})],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("配送费"),e("span",[this._v("10.00")])])}]};var Z=s("VU/8")(D,q,!1,function(t){s("YZPo")},"data-v-b2ed89c2",null).exports;l.default.use(m.a);var J=new m.a({routes:[{path:"/",name:"mian",component:y},{path:"/details",name:"details",component:S},{path:"/login",name:"login",component:U},{path:"/personal",name:"personal",component:F},{path:"/place",name:"place",component:Q},{path:"/set",name:"set",component:x},{path:"/shopcar",name:"shopcar",component:z},{path:"/categorize",name:"categorize",component:$},{path:"/price",name:"price",component:Z}]}),M=s("NYxO");l.default.use(M.a);var W=new M.a.Store({state:{isLogin:!0,title:"主页"},mutations:{changeTitle:function(t,e){t.title=e}}}),Y=s("BTaQ"),H=s.n(Y);s("+skl"),s("LZSw");l.default.config.productionTip=!1,l.default.use(H.a),l.default.use(M.a),l.default.use(c.a),l.default.use(o.a),l.default.use(n.a),new l.default({el:"#app",router:J,store:W,components:{App:v},template:"<App/>"}),J.beforeEach(function(t,e,s){switch(t.name){case"details":W.commit("changeTitle","详情");break;case"mian":W.commit("changeTitle","主页");break;case"shopcar":W.commit("changeTitle","购物车");break;case"categorize":W.commit("changeTitle","分类");break;case"personal":W.commit("changeTitle","个人中心");break;case"price":W.commit("changeTitle","结算中心");break;case"login":W.commit("changeTitle","登录/注册");break;case"place":W.commit("changeTitle","收货地址");break;case"set":W.commit("changeTitle","个人设置")}s()});e.default=J},OOhu:function(t,e){},RWNz:function(t,e){},Txhl:function(t,e){},YZPo:function(t,e){},hXTu:function(t,e){},"m33+":function(t,e){},tc19:function(t,e){},vBcO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4b124435d8f1a785be37.js.map