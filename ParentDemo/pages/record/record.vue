<template>
	<view>
		<view class="list" v-if="list.length>0">
			<view class="lists bgwhite" v-for="(item,index) in list" :key='index'>
				<view class="top relative">
					<image :src="item.type=='true'?'../../static/record/j@3x.png':'../../static/record/t@3x.png'" class="absolute"></image>
					<text class="ts30 text68" style="margin-left: 60upx;">{{item.time}}</text>
					<text class="absolute ts30" :class="item.type=='true'?'textff':'textfc'" style="right: 15upx;">{{item.money}}</text>
				</view>
				<view class="content">
					<view class="ll relative" v-for="(items,indexs) in item.content" :key='indexs'>
						<text class="ts32 text">{{items.title}}</text>
						<text class="ts24 text68" style="display: inline-block;margin-left: 20upx;">{{items.className}}</text>
						<text class="absolute ts32 text" style="right: 15upx;">{{items.num}}</text>
					</view>
				</view>
			</view>
		</view>
		<noconetnt v-if="list.length == 0 || list==null" date="2"></noconetnt>
	</view>
</template>

<script>
	import noconetnt from '@/components/noconetnt.vue'
	export default {
		data() {
			return {
				list:[]
			};
		},
		onShow(){
			this.getinfo();
		},
		methods:{
			getinfo(){
				uni.request({
					url: this.$api+'/weixin/shishenxin/mychragelist',
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
							this.list = [];
							var data = res.data.data;
							this.list = data.data;
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
	.ll{
		height: 88upx;
		line-height: 88upx;
		width: calc(100% - 20upx);
		margin-left: 20upx;
		border-bottom: 2upx solid #F2F2F2;
	}
	.top{
		height: 70upx;
		line-height: 70upx;
		box-sizing: border-box;
		border-bottom: 2upx solid #F2F2F2;
		width: 100%;
	}
	.top image{
		width: 34upx;
		height: 34upx;
		top: 50%;
		transform: translateY(-50%);
		left: 20upx;
	}
	.lists{
		width: 92%;
		margin-left: 4%;
		margin-top: 20upx;
		border-radius: 2upx;
	}
</style>
