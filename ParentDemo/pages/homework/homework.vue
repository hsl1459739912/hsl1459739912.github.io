<template>
	<view>
		<view class="top ts28 textcaa bgwhite">
			<view class="time" style="margin-left: 40upx;" @tap="focutime('firsttime')">{{firsttime}}</view>
			<view style="margin-left: 20upx;line-height: 80upx;">-</view>
			<view class="time" style="margin-left: 20upx;" @tap="focutime('lasttime')">{{lasttime}}</view>
			<view class="btn relative" style="margin-left: 40upx;" @tap="state.focudate=true">
				<image src="../../static/homework/drawdown@2x.png" class="absolute"></image>
			</view>
		</view>
		<view class="list" v-if="list.length>0">
			<view class="relative bgwhite ll textcaa" v-for="(itme,index) in list" :key='index' @tap="godel(itme.id)">
				<view class="ts28 relative">
					<text style="margin-left: 40upx;">{{itme.title}}</text>
					<text class="img" v-if="itme.imgFlag=='1'">图片</text>
				</view>
				<view class="ts26" style="margin-top: 30upx;">
					<text style="margin-left: 40upx;">{{itme.dateStr}}</text>
					<text style="margin-left: 40upx;">{{itme.className}}</text>
				</view>
				<view class="ts30  absolute" style="top: 50%;transform: translateY(-50%);right: 40upx;" :class="itme.isRead=='0'?'textfce':'text32d'">{{itme.isRead=='0'?'未读':'已读'}}</view>
			</view>
		</view>
		<noconetnt v-if="list.length == 0" date="2"></noconetnt>
		<chosetime @time="chosetimedFun" :date='date' v-if="state.focutime" @closePop="closeChosetimeModel"></chosetime>
		<chosedate @firsttime="ft" @lasttime='lt' @idx='idxs' :idxss='idxss' v-if="state.focudate"></chosedate>
	</view>
</template>

<script>
	import chosetime from '../../components/focutime.vue';
	import chosedate from '../../components/focudate.vue';
	import noconetnt from '@/components/noconetnt.vue'
	export default {
		data() {
			return {
				firsttime:'',
				lasttime:'',
				date:"",
				type:'',
				idxss:'',
				state:{
					focutime:false,
					focudate:false
				},
				list:[]
			};
		},
		onLoad: function (options) {
			var timestamp = Date.parse(new Date());
			this.firsttime = this.getLocalTime(timestamp-(7*24*60*60*1000));
			this.lasttime = this.getLocalTime(timestamp);
			setTimeout(function () {
				
			}, 1000);
			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onShow(){
			this.getinfo();
		},
		methods:{
			godel(id){
				uni.navigateTo({
					url:'../homedetail/homedetail?id='+id
				})
			},
			getinfo(){
				uni.request({
					url: this.$api+'/weixin/shishenxin/homeworkmxlist',
					data: this.getmd5({
						startTime:this.firsttime,
						endTime:this.lasttime,
						openId:uni.getStorageSync('openId')
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
							this.list = [];
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
			idxs(e){
				this.idxss = e;
			},
			ft(e){
				this.firsttime = e;
			},
			lt(e){
				this.lasttime = e;
				this.state.focudate = false;
			},
			chosetimedFun(e){
				if(this.type == 'firsttime'){
					if(e>this.lasttime){
						uni.showToast({
							icon:'none',
							title: '日期选择错误',
							duration: 2000
						});
					}else{
						this.firsttime = e;
					}
				}else{
					if(e<this.firsttime){
						uni.showToast({
							icon:'none',
							title: '日期选择错误',
							duration: 2000
						});
					}else{
						this.lasttime = e;
					}
				}
			},
			focutime(type){
				if(type == 'firsttime'){
					this.date = this.firsttime;
					this.type = 'firsttime';
				}else{
					this.date = this.lasttime;
					this.type = 'lasttime';
				}
				this.state.focutime = true;
			},
			closeChosetimeModel: function() {
				this.state.focutime = false;
			},
			getLocalTime(nS) {     
			    return new Date(nS).toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '-').slice(0,10);
			}  
		},
		components: {
			chosetime,
			chosedate,
			noconetnt
		}
	}
</script>

<style>
	.ll{
		width: 100%;
		height: 160upx;
		margin-top: 20upx;
		box-sizing: border-box;
		padding-top: 30upx;
	}
	.img{
		display: inline-block;
		width: 90upx;
		height: 40upx;
		line-height: 32upx;
		text-align: center;
		box-sizing: border-box;
		border: 4upx solid #1cc6fe;
		color: #1cc6fe;
		font-weight: bold;
		margin-left: 20upx;
	}
	.top{
		width: 100%;
		height: 80upx;
		display: flex;
	}
	.top>view{
		display: inline-block;
	}
	.btn{
		width: 70upx;
		height: 50upx;
		border: 2upx solid #F2F2F2;
		border-radius: 23upx;
		margin-top: 15upx;
		line-height: 50upx;
		text-align: center;
	}
	.btn image{
		width: 33upx;
		height: 21upx;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	.time{
		width: 200upx;
		height: 50upx;
		margin-top: 15upx;
		line-height: 50upx;
		text-align: center;
		border: 2upx solid #F2F2F2;
		border-radius: 23upx;
	}
</style>
