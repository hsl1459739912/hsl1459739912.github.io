<template>
	<view>
		<view class="content bgwhite relative" v-if="list.length>0">
			<view class="ts36 textfc top">学校公告</view>
			<view class="list relative" v-for="(item,index) in list" :key='index' @tap="godel(item.id)">
				<view class="title ts34 text">{{item.informName}}</view>
				<view class="time ts28">{{item.informTime}}</view>
				<view class="absolute flex right">
					<view class="bgen" v-if="item.isRead==0"></view>
					<image src="../../static/rightway@2x.png" mode=""></image>
				</view>
			</view>
		</view>
		<noconetnt v-if="list.length == 0" date="2"></noconetnt>
	</view>
</template>

<script>
	import noconetnt from '@/components/noconetnt.vue'
	export default {
		data() {
			return {
				list:[],
			};
		},
		onShow() {
			this.getinfo();
		},
		methods:{
			godel(id){
				uni.navigateTo({
					url:'../noticedel/noticedel?id='+id
				})
			},
			getinfo(){
				uni.request({
					url: this.$api+'/weixin/shishenxin/noticelist',
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
							this.list = data;
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
		},
		components:{
			noconetnt
		}
	}
</script>

<style>
	.bgen{
		width: 16upx;
		height: 16upx;
		border-radius: 50%;
		background: #ff3b01;
		margin-top: 7upx;
	}
	.right image{
		width: 14upx;
		height: 30upx;
		margin-left: 10upx;
	}
	.right{
		width: 40upx;
		height: 30upx;
		right: 30upx;
		top: 75upx;
	}
	.time{
		color: #999999;
		box-sizing: border-box;
	}
	.title{
		box-sizing: border-box;
	}
	.list{
		height: 180upx;
		width: 100%;
		box-sizing: border-box;
		padding-left: 30upx;
		border-bottom: 2upx solid #F2F2F2;
		padding-top: 55upx;
	}
	.top{
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		width: 100%;
		border-bottom: 2upx solid #F2F2F2;
	}
</style>
