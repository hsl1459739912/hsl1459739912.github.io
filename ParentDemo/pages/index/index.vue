<template>
	<view class="">
		<view class="top">
			<image src="../../static/index/z47copy@3x.png" class="sw"></image>
		</view>
	   <view class="del relative bgwhite">
			<image src="../../static/index/xz27copy@3x.png" class="absolute"></image>
			<text class="ts26 textccc">{{notice}}</text>
			<view class="absolute ts24 textffe" @tap="godels()">
				详情
			</view>
	   </view>
	   <view class="content flex bgwhite ts32 text39">
			<view class="list" @tap="godel('seeTimetable/seeTimetable')">
				<image src="../../static/index/z38@3x.png" mode=""></image>
				<view>查看课表</view>
			</view>
			<view class="list" @tap="godel('lesEval/lesEval')">
				<image src="../../static/index/z37@3x.png" mode=""></image>
				<view>课堂评价</view>
			</view>
			<view class="list relative" @tap="godel('homework/homework')">
				<text class="absolute textwhite ts30" v-if="(zynum != 0) && (zynum != null)" style="background: #fe3c00;right: 6vw;width: 40upx;height: 40upx;display: block;border-radius: 50%;text-align: center;z-index: 999;">{{zynum}}</text>
				<image src="../../static/index/z36@3x.png" mode=""></image>
				<view>作业</view>
			</view>
	   </view>
	   <view class="content flex bgwhite ts32 text39">
			<view class="list relative" @tap="godel('notice/notice')">
				<text class="absolute textwhite ts30" v-if="tznum != 0 && tznum!=null" style="background: #fe3c00;right: 6vw;width: 40upx;height: 40upx;display: block;border-radius: 50%;text-align: center;z-index: 999;">{{tznum}}</text>
				<image src="../../static/index/z45@3x.png" mode=""></image>
				<view>通知公告</view>
			</view>
			<view class="list" @tap="godel('workcount/workcount')">
				<image src="../../static/index/z44@3x.png" mode=""></image>
				<view>上课统计</view>
			</view>
			<view class="list" @tap="godel('record/record')">
				<image src="../../static/index/z43@3x.png" mode=""></image>
				<view>缴费记录</view>
			</view>
	   </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				notice:'',
				id:'',
				tznum:'',
				zynum:"",
			}
		},
		onShow() {
			let info = uni.getStorageSync('openId');
			if (!info || info == null || info == '') {
				uni.reLaunch({
					url: '../login/login'
				});
			}else{
				this.getinfo();
			}
		},
		
		methods: {
			getinfo(){
				uni.request({
					url: this.$api+'/weixin/index/notice',
					data: this.getmd5({
						openId:uni.getStorageSync('openId'),
						
						// openId:'onR7C05SKrVWwNSZrlQgPbMEL4t4'
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
							this.notice = data.informName;
							this.id = data.id;
							this.tznum = data.notiecNum;
							this.zynum = data.homeWorkNum;
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
			godels(){
				uni.navigateTo({
					url:'../noticedel/noticedel?id='+this.id
				})
			},
			godel(url){
				if(url != ''){
					uni.navigateTo({
						url:'../'+url
					})
				}
			}
		}
	}
</script>

<style>
	page{
		background: #FFFFFF;
	}
	.content{
		height: 330upx;
		width: 100%;
		border-bottom: 2upx solid #f2f2f2;
		flex-wrap: nowrap;
	}
	.content>view{
		width: 33%;
		text-align: center;
		margin-top: 70upx;
	}
	.content image{
		width: 18vw;
		height: 18vw;
	}
	.del{
		height: 75upx;
		line-height: 75upx;
		width: 100%;
		border-bottom: 2upx solid #f2f2f2;
		margin-top: 20upx;
	}
	.del image{
		height: 35upx;
		width: 29upx;
		left: 29upx;
		top: 50%;
		transform: translateY(-50%);
	}
	.del text{
		margin-left: 70upx;
	}
	.del view{
		right: 20upx;
		top: 0;
	}
	.top{
		height: 360upx;
		box-shadow: 0 0 10px 0px #000000;
	}
	.sw{
		width: 100%;
		height: 360upx;
	}
</style>
