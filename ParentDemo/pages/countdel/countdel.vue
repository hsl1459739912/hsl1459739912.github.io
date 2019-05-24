<template>
	<view>
		<view class="list" v-if="list.length>0">
			<view class="lists" v-for="(item,index) in list" :key='index'>
				<view class="month text ts32">{{item.month}}</view>
				<view class="content bgwhite" v-for="(items,indexs) in item.list" :key='indexs'>
					<view class="name ts32 text">{{items.classesName}}</view>
					<view class="time ts24 text68 relative">
						<view class="times relative">
							<image src="../../static/seeTimetable/time@2x.png" class="absolute img1"></image>
							<text style="display: inline-block;margin-left: 40upx;">{{items.classDate}} {{items.classTime}}-{{items.leaveTime}}</text>
							<text style="display: inline-block;margin-left: 20upx;">{{week[items.weekStr+1]}}</text>
						</view>
						<!-- <view class="absolute a">课长:{{items.time}}</view> -->
					</view>
					<view class="time ts24 text68 relative">
						<view class="times relative">
							<image src="../../static/index/user@3x.png" class="absolute img2"></image>
							<text style="display: inline-block;margin-left: 40upx;">{{items.teacherName}}</text>
						</view>
						<view class="absolute a">课时消耗:{{items.consumptionAmount}}</view>
					</view>
					<view class="owe ts24" v-if="items.arrearsAmount!='0'">欠费金额:{{items.arrearsAmount}}</view>
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
				id:'',
				week:['星期一','星期二','星期三','星期四','星期五','星期六','星期天'],
				list:[]
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
					url: this.$api+'/weixin/shishenxin/myclassdemx',
					data: this.getmd5({
						openId:uni.getStorageSync('openId'),
						courseId:this.id,
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
		},
		components:{
			noconetnt
		}
	}
</script>

<style>
	.owe{
		height: 45upx;
		line-height: 45upx;
		border-top: 2upx solid #F2F2F2;
		color: #ff0000;
		text-align: right;
		margin-top: 10upx;
	}
	.time{
		height: 30upx;
		line-height: 30upx;
		margin-top: 10upx;
	}
	.a{
		right: 0;
		top: 0;
	}
	.content{
		width: 100%;
		height: 200upx;
		box-sizing: border-box;
		padding: 20upx 15upx;
		margin-bottom: 15upx;
	}
	.month{
		height: 60upx;
		line-height: 60upx;
	}
	.lists{
		width: 92%;
		margin-left: 4%;
	}
	.img1{
		width: 30upx;
		height: 30upx;
		top: 50%;
		transform: translateY(-50%);
	}
	.img2{
		width: 30upx;
		height: 30upx;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
