<template>
	<view style="height: 1335upx;background-color: #FFFFFF;">
		<view class="login_bgi"></view>
		<view class="login_rect">
			<view class="rec_auto">
				<view class="l_rect lo_re1">
					<image src="../../static/own/login_user@3x.png" mode=""></image>
					<input type="" value="" v-model="username" placeholder="请输入账号" placeholder-style="lRect_place"/>
				</view>
				
				<view class="l_rect lo_re2">
					<image src="../../static/own/login_locked@3x.png" mode=""></image>
					<input placeholder="请输入密码" type="password" v-model="password" placeholder-style="lRect_place"/>
				</view>
				<button class="login_btn" @tap="getinfo()">登录</button>
				<view class="">{{userId}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"",
				password:"",
				openId:'',
				userId:'123123'
			};
		},
		onLoad(){
			this.openId = this.getCookie("openId");
			this.userId = this.getCookie('userId');
			this.delCookie('userId');
			if(this.userId.length > 0){
				uni.setStorageSync('openId', this.openId);
				uni.setStorageSync('userId', this.userId);
				uni.reLaunch({
					url:'../index/index'
				})
			}
		},
		methods:{
			delCookie(name){
				var exp = new Date();
				exp.setTime(exp.getTime() - 1);
				var cval=this.getCookie(name);
				if(cval!=null)
				document.cookie= name + "="+cval+";expires="+exp.toGMTString();
			},
			getCookie(cname){
				var name = cname + "=";
				var ca = document.cookie.split(';');
				for(var i=0; i<ca.length; i++) 
				{
				var c = ca[i].trim();
				if (c.indexOf(name)==0) return c.substring(name.length,c.length);
				}
				return "";
			},
			getinfo(){
				if(this.username == ''){
					uni.showToast({
					icon: 'none',
					title: '请输入账号',
					duration: 2000
					});
				}else if(this.password == ''){
					uni.showToast({
					icon: 'none',
					title: '请输入密码',
					duration: 2000
					});
				}else{
					uni.request({
						url: this.$api+'/weixin/shishenxin/login', 
						data: this.getmd5({
							userName:this.username,
							passWord:this.password,
							openId:this.openId,
						}),
						header: {
							'content-type': 'application/json'
						},
						method: "POST",
						success: (res) => {
							if (res.data.code != 200) {
								uni.showToast({
								icon: 'none',
								title: res.data.msg,
								duration: 2000
								});
							} else {
								uni.hideLoading();
								var data = res.data.data;
								uni.setStorageSync('openId', data.openId);
								uni.reLaunch({
									url:'../index/index'
								})
							}
						},
						fail: () => {
							uni.hideLoading();
							uni.showToast({
							icon: 'none',
							title: '获取失败',
							duration: 2000
							});
						}
					});
				}
				
			},
		}
	}
</script>

<style>
.login_bgi {
	width: 100%;
	height: 493upx;
	background-image: url('http://wx.cdlzzh.cn/static/login_bg%403x.png');
	background-size: 100%;
	background-repeat: no-repeat;
	position: absolute;
}
.login_rect {
	width: 92%;
	height: 473upx;
	border-radius: 12px;
	box-shadow: 0px 1px 20px 0 rgba(0, 0, 0, 0.1);
	background-color: #ffffff;
	/* background-color: lightpink; */
	position: relative;
	top: 370upx;
	margin: 0 auto;
}
.login_rect .rec_auto {
	width: 85%;
	height: 100%;
	/* background-color: lightblue; */
	margin: 0 auto;
}
.rec_auto .l_rect {
	border-bottom: 1upx solid #F2F2F2;
}

.l_rect image {
	display: inline-block;
	margin-right: 20upx;
	margin-bottom: 35upx;
}

.lo_re1>image {
	width: 31upx;
	height: 36upx;
	margin-top: 70upx;
}
.lo_re2>image {
	width: 25upx;
	height: 33upx;
	margin-top: 40upx;
}

.l_rect input {
	display: inline-block;
	margin-left: 20upx;
	position: relative;
	top: -25upx;
}
.l_rect .lRect_place {
	font-size: 28upx;
	color: #dfdede;
}


.rec_auto .login_btn {
	width: 100%;
	height: 80upx;
    border-radius: 39upx;
    background-image: linear-gradient(to right, #3094f2, #146cff);
	line-height: 75upx;
	color: #FFFFFF;
	font-size: 45upx;
	margin-top: 60upx;
}



.title1 {
	width: 100%;
	height: 100upx;
	background-color: #FFFFFF;
}

.title1>image {
	width: 40upx;
	height: 39upx;
	margin-top: 25upx;
	margin-left: 30upx;
}
.title1>text {
	font-family: HiraginoSansGB-W3;
	font-size: 36upx;
	color: #282828;
	margin-top: 27upx;
	margin-left: 25upx;	
}
</style>
