<template>
	<view>
		<!-- 资料 -->
		<view class="own_bgI">
			<view class="bgI_left">
				<image src="../../static/own/own_img@3x.png" mode=""></image>
			</view>
			<view class="bgi_right">
				<view class="xingM">{{name}}</view>
				<view class="xueH ts30">学号： {{number}}</view>
				<view class="phone ts30">电话： {{tel}}</view>
			</view>
		</view>

		<view style="height: 20upx;"></view>

		<!-- 更改密码 -->
		<view class="uppwd com_view" @tap="goTo">
			<image class="img1" src="../../static/own/own_pwd@3x.png" mode=""></image>
			<text>修改密码</text>
			<image class="img2" src="../../static/own/own_right@3x.png" mode=""></image>
		</view>

		<view style="width: 95%;height: 1upx;"></view>

		<!-- 退出登录 -->
		<view class="uppwd com_view" @tap="tuichu">
			<image class="img1" src="../../static/own/own_return@3x.png" mode=""></image>
			<text>退出登录</text>
			<image class="img2" src="../../static/own/own_right@3x.png" mode=""></image>
		</view>




	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				number: '',
				tel: ''
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getinfo();
		},
		methods: {
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
				uni.request({
					url: this.$api+'/weixin/shishenxin/indexuserinfo',
					data: this.getmd5({
						openId:uni.getStorageSync('openId'),
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
							this.name = data.userName;
							this.tel = data.phone;
							this.number = data.userCode;
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
			},
			goTo() {
// 				uni.navigateTo({
// 					url: '../updatePWD/updatePWD'
// 				})
				uni.showToast({
					icon:'none',
					title:"当前功能完善中",
					duration:2000,
					mask:true
				})
			},
			tuichu() {
				uni.showModal({
					title: '退出',
					content: '退出将清除所有缓存',
					success: (res)=>{
						if (res.confirm) {
							uni.request({
								url: this.$api+'/weixin/shishenxin/logout',
								data: this.getmd5({
									openId:uni.getStorageSync('openId'),
									userId:uni.getStorageSync('userId')
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
										uni.clearStorage();
										this.delCookie('userId');
										uni.reLaunch({
											url:'../login/login'
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
							
						} else if (res.cancel) {
						}
					}
				});
			}
		}
	}
</script>

<style>
	.own_bgI {
		width: 100%;
		height: 300upx;
		background-image: url('http://wx.cdlzzh.cn/static/own_bg%403x.png');
		position: relative;
	}

	.bgI_left {
		display: inline-block;
		width: 35%;
		height: 90%;
		position: absolute;
		left: 0;
		top: 0;
	}

	.bgI_left>image {
		width: 157upx;
		height: 157upx;
		position: absolute;
		top: 65upx;
		left: 36upx;
	}

	.bgi_right {
		display: inline-block;
		width: 70%;
		height: 100%;
		position: absolute;
		left: 30%;
		top: 0;
	}

	.own_bgI>view {
		color: #ffffff;
	}

	.own_bgI .xingM {
		font-size: 68upx;
		color: #ffffff;
		position: absolute;
		top: 50upx;
		left: 0;
	}

	.xueH {
		position: absolute;
		bottom: 105upx;
		left: 0;
	}

	.phone {
		position: absolute;
		bottom: 50upx;
		left: 0;
	}



	.com_view {
		width: 100%;
		height: 100upx;
		background-color: #ffffff;
		line-height: 100upx;
	}

	.com_view>.img1 {
		display: inline-block;
		width: 27upx;
		height: 27upx;
		margin-left: 56upx;
	}

	.com_view>text {
		font-size: 32upx;
		color: #282828;
		margin-left: 56upx;
	}

	.com_view>.img2 {
		display: inline-block;
		width: 20upx;
		height: 35upx;
		float: right;
		margin-right: 35upx;
		margin-top: 35upx;
	}

	.com_view>.img2:after {
		clear: both;
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
