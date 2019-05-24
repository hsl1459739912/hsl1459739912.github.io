<template>
	<view>
		<view class="list" v-if="list.length > 0">
			<view class="bgwhite relative" v-for="(item,index) in list" :key='index' @tap="godel(item.courseId)">
				<view class="title ts34 text">{{item.name}}</view>
				<view class="ts24 content">
					<view>
						<text>购买:{{item.selled}}{{unit}}</text>
					</view>
					<view >
						<text>已上课:<text class="textfc">{{item.classed}}</text>{{unit}}</text>
					</view>
					<view>
						<text>剩余:<text style="color: #ffa800;">{{item.have}}</text>{{unit}}</text>
					</view>
				</view>
				<image src="../../static/rightway@2x.png" class="absolute"></image>
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
				unit:'课时',
				list:[]
			};
		},
		onShow(){
			this.getinfo();
		},
		methods:{
			getinfo(){
				uni.request({
					url: this.$api+'/weixin/shishenxin/myclassdelist',
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
							this.list = data
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
			godel(id){
				uni.navigateTo({
					url: '../countdel/countdel?id='+id,
				});
			}
		},
		components:{
			noconetnt
		}
	}
</script>

<style>
	.content{
		white-space: nowrap;
	}
	.content>view{
		display: inline-block;
		margin-right: 70upx;
		transform: translateY(20upx);
	}
	.list>view{
		height: 180upx;
		padding-top: 40upx;
		padding-left: 30upx;
		border-bottom: 2upx solid #F2F2F2;
		box-sizing: border-box;
	}
	.list image{
		width: 14upx;
		height: 30upx;
		top: 75upx;
		right: 30upx;
	}
</style>
