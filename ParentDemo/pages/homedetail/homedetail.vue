<template>
	<view>
		<view class="bgwhite">
			<view class="ts34 text relative top">
				<image src="../../static/index/z36@3x.png" class="absolute"></image>
				<text>{{title}}</text>
			</view>
			<view class="time relative ts26 text29">
				<image src="../../static/seeTimetable/time@2x.png" class="absolute"></image>
				<text>{{dateStr}}</text>
			</view>
			<view class="time relative ts26 text29">
				<image src="../../static/claSta/teacher@2x.png" class="absolute"></image>
				<text>{{teacherName}}</text>
			</view>
			<view class="title ts32 text29">
				<image src="../../static/circularbead@3x.png" class="absolute"></image>
				<text>作业内容</text>
			</view>
			<view class="content ts30 text29">{{content}}</view>
			<view class="img" v-if="img!=''"><image :src="img" @tap="previewImage"></image></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'',
				dateStr:'',
				teacherName:"",
				content:"",
				imgUrl:'../../static/circularbead@3x.png',
				id:'',
			};
		},
		onLoad(o){
			this.id = o.id;
		},
		onShow(){
			this.getinfo();
		},
		methods:{
			getinfo(){
				uni.request({
					url: this.$api+'/weixin/shishenxin/homeworkmxdetaile',
					data: this.getmd5({
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
							this.list = [];
							uni.hideLoading();
							var data = res.data.data;
							this.title = data.title;
							this.dateStr = data.dateStr;
							this.teacherName = data.teacherName;
							this.content = data.content;
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
			previewImage: function() {
				uni.previewImage({
					urls: [this.img]
				})
			},
		}
	}
</script>

<style>
	.img{
		width: 430upx;
		height: 600upx;
		margin-left: 40upx;
		margin-top: 60upx;
	}
	.content{
		width: 92%;
		margin-left: 5%;
		margin-top: 50upx;
		box-sizing: border-box;
		padding: 5upx;
	}
	.title{
		height: 40upx;
		line-height: 40upx;
		margin-top: 50upx;
	}
	.title image{
		width: 20upx;
		height: 40upx;
		left: 46upx;
	}
	.title text{
		margin-left: 85upx;
		display: inline-block;
	}
	.time{
		height: 50upx;
		line-height: 50upx;
		margin-top: 20upx;
	}
	.time image{
		width: 40upx;
		height: 40upx;
		left: 40upx;
		top: 50%;
		transform: translateY(-50%);
	}
	.time text{
		display: inline-block;
		margin-left: 100upx;
	}
	.top{
		height: 80upx;
		line-height: 80upx;
		border-bottom: 2upx solid #F2F2F2;
	}
	.top image{
		width: 50upx;
		height: 50upx;
		left: 40upx;
		top: 15upx;
	}
	.top text{
		display: inline-block;
		margin-left: 110upx;
	}
</style>
