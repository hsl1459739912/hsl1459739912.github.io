<template>
	<view class="">
		
		<focudate v-if="state.focudate" :idxss='idx' @firsttime='firsttimes' @lasttime='lasttimes' @idx='idXX'></focudate> 
		<focutime v-if="state.focutime" @time='ltime' @closePop='closePop' :date="etime"></focutime>
		
		<view class="top ts28 textcaa bgwhite" style="margin-top: 20upx;">
			<view class="time" style="margin-left: 40upx;" @tap="focutimes('firsttime')">{{firsttime}}</view>
			<view style="margin-left: 20upx;line-height: 80upx;">-</view>
			<view class="time" style="margin-left: 20upx;" @tap="focutimes('lasttime')">{{lasttime}}</view>
			<view class="btn relative" style="margin-left: 40upx;" @tap="state.focudate=true">
				<image src="../../static/homework/drawdown@2x.png" class="absolute"></image>
			</view>
		</view>
		
		<view class="les_center" v-for="(item, index) in lesEval" :key='index' @tap="goTo(item.lessonId)" style="margin-top: 20upx;">
			<view class="les_c">
				<view class="text29 ts34" style="padding-top: 20upx;">{{item.clasName}}</view>
				<text class="date">{{item.classDate}}</text>
				<view class="relative" style="margin-top: 10upx;">
					<image class="img1" src="../../static/claSta/time@3x.png" mode=""></image>
					<text class="text29 ts26" style="margin-left: 50upx;">{{item.classTime}}-{{item.leaveTime}}</text>
				</view>
				<view class="relative"  style="margin-top: 20upx;">
					<image class="img2" src="../../static/claSta/teacher@3x.png" mode=""></image>
					<text class="text29 ts26" style="margin-left: 50upx;">{{item.teacherName}}</text>
				</view>
				<text class="txt4 text29">评价教师 : <text :class="item.stuToTea!=null?'text32d':'textfce'">{{item.stuToTea!=null?'已评价':'未评价'}}</text></text>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import focudate  from  '@/components/focudate.vue'
	import focutime  from  '@/components/focutime.vue'
	
	
	export default {
		components:{
			focudate,
			focutime,
		},
		
		data() {
			return {
				lesEval: [],
				firsttime:'',
				lasttime:'',
				state:{
					focudate:false,
					focutime:false
				},
				idx:'0',
				Stime:'',
				etime:''
			};
		},
		onLoad() {
			var time = Date.parse(new Date())
			this.lasttime= this.getLocalTime(time)
			this.firsttime = this.getLocalTime(time-7*24*60*60*1000)
		},
		onShow(){
			this.getinfo();
		},
		methods: {
			getinfo(){
				uni.request({
					url: this.$api+'/weixin/shishenxin/assessmentliessonlist',
					data: this.getmd5({
						startTime:this.firsttime,
						endTime:this.lasttime,
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
							this.lesEval = [];
							var data = res.data.data;
							this.lesEval = data;
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
			goTo(id){
				uni.navigateTo({
					url:'../evalDetail/evalDetail?id='+id
				})
			},
			ltime(e){
				if(this.Stime == 'firsttime'){
					if(e>this.lasttime){
						uni.showToast({
							icon:"none",
							title:'日期选择错误',
							duration:2000
						})
					}else{
						this.firsttime = e
						this.closePop()
					}	
				}else {
					if(e<this.firsttime){
						uni.showToast({
							icon:"none",
							title:'日期选择错误',
							duration:2000
						})
					}else{
						this.lasttime = e
						this.closePop()
					}
				}
			},
			closePop(){
				this.state.focutime = false;
			},
			focutimes(type){
				this.Stime = type ;
				if(type == 'firsttime') {
					this.etime = this.firsttime
				}else {
					this.etime = this.lasttime
				}
				this.state.focutime=true;
			},
			firsttimes(e){
				this.firsttime = e
			},
			lasttimes(e){	
				this.lasttime = e
			},
			idXX(e){
				this.idx = e
				this.state.focudate = false; 
			},
			getLocalTime(nS) {     
			    return new Date(nS).toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '-').slice(0,10);
			} 
			
		},
	}
</script>

<style>
	
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
	
	.les_top {
		width: 100%;
		height: 80upx;
		background-color: #ffffff;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	
	.les_center {
		width: 100%;
		height: 245upx;
		background-color: #ffffff;
		margin-bottom: 5px;
	}
	.les_c {
		height: 245upx;
		margin-left: 40upx;
		margin-right: 35upx;
		position: relative;
	}
	.les_c>view{
		height: 50upx;
		line-height: 40upx;
	}
	text {
		display: inline-block;
	}
	.date{
		font-size: 26upx;
		color: #8a8a8a;
		position: absolute;
		top: 41upx;
		right: 0;
	}
	.img1 {
		width: 43upx;
		height: 43upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.txt3 {
		font-size: 26upx;
		color: #292828;
		position: absolute;
		top: 110upx;
		left: 60upx;
	}
	.img2 {
		width: 48upx;
		height: 48upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.les_c>.txt4 {
		font-size: 26upx;
		position: absolute;
		bottom: 75upx;
		right: 0;
	}
	.txt5 {
		color: #292828;
		font-size: 26upx;
		position: absolute;
		left: 60upx;
		bottom: 40upx;
	}
	
</style>
