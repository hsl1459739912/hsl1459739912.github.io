<template>
	<view>
		<view class="top bgwhite">
			<view class="ts40 title" style="color: #010101;">{{title}}</view>
			<view class="ts28">
				<text class="texteee">{{time}}</text>
				<text style="color: #64c4fb; display: inline-block;margin-left: 10upx;">{{name}}</text>
			</view>
		</view>
		<view class="content ts32 text bgwhite">
			<view class="list">
				<text>{{arrange}}</text>
			</view>
			<!-- <view class="list">
				<text>温馨提示:</text>
				<text>{{tips}}</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				title:'',
				time:'',
				name:'',
				arrange:'',
				// tips:''
			};
		},
		onLoad(o){
			this.id = o.id;
		},
		onShow() {
			
			this.getinfo();
		},
		methods:{
			getinfo(){
				uni.request({
					url: this.$api+'/weixin/shishenxin/noticedetaile',
					data: this.getmd5({
						openId:uni.getStorageSync('openId'),
						id:this.id
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
							this.title = data.informName;
							this.time = data.informTime;
							this.name = data.createName;
							this.arrange = data.content;
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
		}
		
	}
</script>

<style>
	.list{
		margin-bottom: 15upx;
	}
	.content{
		width: 100%;
		box-sizing: border-box;
		padding: 30upx;
	}
	.top{
		height: 180upx;
		width: 100%;
		margin-top: 20upx;
		text-align: center;
		box-sizing: border-box;
		padding-top: 50upx;
		border-bottom: 2upx solid #F2F2F2;
	}
	
</style>
