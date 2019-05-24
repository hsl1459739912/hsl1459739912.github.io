<template>
	<view>
		<view class="top bgwhite ts28 textcaa flex">
			<view class="up" @tap="getMonth('up')">上月</view>
			<view class="month" @tap="state.focutime = true">{{year}}.{{month}}</view>
			<view class="up" @tap="getMonth('down')">下月</view>
		</view>
		<view class="content ts28 text29">
			<view class="week flex">
				<view v-for="(m,i) in week"  :key='i'>{{m}}</view>
			</view>
			<view class="bgwhite flex weeks">
				<view class="bo relative" v-for="(item,index) in list"  :key='index' :class="[item.year!=year?'textbf':item.month!=month?'textbf':item.date==date?'textfc':'text29',focus==index?'focu':'']" @tap="focu(index)">
					{{item.date}}
					<view class="mask absolute" v-if="item.flag == '1'"></view>
				</view>
			</view>
		</view>
		<view class="l">
			<view class="list ts28 text29" v-if="lists.length > 0">
				<view class="ll bgwhite"  v-for="(itme,index) in lists" :key='index'>
					<view class="relative">
						<image src="../../static/seeTimetable/p.png" class="absolute" style="width: 50upx;height: 50upx; left: 23upx;"></image>
						<text class="textaaa" style="margin-left: 90upx;">班级:</text>
						<text>{{itme.classesname}}</text>
					</view>
					<view class="relative">
						<image src="../../static/seeTimetable/a.png" class="absolute" style="width: 40upx;height: 40upx; left: 13upx;"></image>
						<text class="textaaa" style="margin-left: 90upx;">校区:</text>
						<text>{{itme.orgname}}</text>
					</view>
					<view class="relative">
						<image src="../../static/seeTimetable/ti.png" class="absolute" style="width: 40upx;height: 40upx; left: 13upx;"></image>
						<text class="textaaa" style="margin-left: 90upx;">时间:</text>
						<text>{{itme.classtime}}-{{itme.leavetime}}</text>
					</view>
					<view class="relative">
						<image src="../../static/seeTimetable/j.png" class="absolute" style="width: 40upx;height: 40upx; left: 13upx;"></image>
						<text class="textaaa" style="margin-left: 90upx;">教室:</text>
						<text>{{itme.classroomname}}</text>
					</view>
					<view class="relative">
						<image src="../../static/seeTimetable/t.png" class="absolute" style="width: 40upx;height: 40upx; left: 13upx;"></image>
						<text class="textaaa" style="margin-left: 90upx;">老师:</text>
						<text>{{itme.teachername}}</text>
					</view>
					<view class="relative">
						<image src="../../static/seeTimetable/c.png" class="absolute" style="width: 40upx;height: 40upx; left: 13upx;"></image>
						<text class="textaaa" style="margin-left: 90upx;">状态:</text>
						<text :class="itme.signin==1?'text32d':'textfce'">{{itme.signin==1?'已上课':'未上课'}}</text>
					</view>
				</view>
			</view>
			<noconetnt v-if="lists.length==0" date='1'></noconetnt>
		</view>
		
		<view class="focutime shadow" v-if="state.focutime" v-on:click.stop='closesha'>
			<view @click.stop="childClick">
				<view class="fttop text relative ">
					<view class="ftbtn textfc absolute ts30" style="right: 210upx;" @tap="state.focutime = false">取消</view>
					<view class="ftbtn textfc absolute ts30" @tap="focudata">确定</view>
				</view>
				<view class="ftcon bgwhite ts28">
					<view>
						<picker-view indicator-style="height: 50px;" :value='value' @change="dataChange">
							<picker-view-column>
								<view class="item" v-for="item in time.yearval" :key="item">{{item}}年</view>
							</picker-view-column>
							<picker-view-column>
								<view class="item" v-for="item in time.monthval" :key="item">{{item}}月</view>
							</picker-view-column>
						</picker-view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import noconetnt from '../../components/noconetnt.vue';
	export default {
		data() {
			return {
				value:[3,new Date().getMonth()],
				time:{
					month:new Date().getMonth()+1<10?'0'+(new Date().getMonth()+1):new Date().getMonth()+1,
					year:new Date().getFullYear(),
					yearval:[],
					monthval: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				},
				state:{
					focutime:false
				},
				year:new Date().getFullYear(),
				month:new Date().getMonth()+1<10?'0'+(new Date().getMonth()+1):new Date().getMonth()+1,
				date:new Date().getDate(),
				week:['周日','周一','周二','周三','周四','周五','周六'],
				list:[],
				focus:0,
				lists:[],
				leng:''
			};
		},
		onLoad() {
			this.list.length = 42;
			var oDate = new Date();
			for (var i = oDate.getFullYear() - 3; i < oDate.getFullYear() + 4; i++) {
				this.time.yearval.push(i);
			}
		},
		onShow(){
			this.getmonth();
		},
		methods:{
			focu(index){
				this.focus = index;
				this.gettable();
			},
			gettable(){
				var i = this.focus
				uni.request({
					url: this.$api+'/weixin/shishenxin/myscheduleverydaylist',
					data: this.getmd5({
						dateStr:this.list[i].year+'-'+this.list[i].month+'-'+this.list[i].date,
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
							this.lists = []
							var data = res.data.data;
							this.lists = data.infos;
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
			getmonth(){
				uni.request({
					url: this.$api+'/weixin/shishenxin/myschedulemonthinit',
					data: this.getmd5({
						dateStr:this.year+'-'+this.month,
						openId:uni.getStorageSync('openId'),
						// openId:'onR7C05SKrVWwNSZrlQgPbMEL4t4'
					}),
					header: {
						'content-type': 'application/json'
					},
					method: "POST",
					success: (res) => {
						this.leng = res.data.data.toString()
						if (res.data.code != 200) {
							uni.showToast({
								icon: 'none',
								title: res.data.msg,
								duration: 2000
							});
						} else {
							uni.hideLoading();
							this.list = []
							var data = res.data.data;
							this.list = res.data.data;
							for(var i in data){
								if(data[i].year == this.year){
									if(data[i].month == this.month){
										if(data[i].date == this.date){
											this.focus = i;
											this.gettable();
										}
									}
								}
							}
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
			focudata(){
				this.year = this.time.year;
				this.month = this.time.month;
				this.state.focutime = false;
			},
			closesha: function(e) {
				this.state.focutime = false;
			},
			dataChange: function(e) {
				const val = e.detail.value
				this.time.year = this.time.yearval[val[0]];
				this.value = val;
				this.time.month = this.time.monthval[val[1]];
			},
			getMonth(type){
				if(type=='up'){
					if(this.month == '01'){
						this.month = '12'
						this.year--
					}else{
						var month = Number(this.month);
						this.month = --month<10?'0'+month--:month--;
					}
				}else{
					if(this.month == '12'){
						this.month = '01'
						this.year++
					}else{
						var month = Number(this.month);
						this.month = ++month<10?'0'+month++:month++;
					}
				}
				this.getmonth();
			},
			childClick(){
				
			}
		},
		components: {
			noconetnt
		},
	}
</script>

<style>
	.focu{
		background: #1f88f5;
		color: #FFFFFF !important;
	}
	.mask{
		width: 10upx;
		height: 10upx;
		border-radius: 50%;
		background: #49c8e8;
		left: calc(50% - 5upx);
		top: 60upx;
	}
	.bo{
		box-sizing: border-box;
		border: 1upx solid #F2F2F2;
	}
	.focutime {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-end;
		z-index: 999;
	}
	
	.focutime>view {
		width: 100%;
	}
	
	.ftcon {
		width: 100%;
		height: 560upx;
	}
	picker-view {
		width: 100%;
		height: 560upx;
	}
	
	picker-view view {
		height: 80upx;
		line-height: 80upx;
		text-align: center;
	}
	.fttop {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		background-color: #f2f2f2;
		z-index: 999999;
	}
	
	.ftbtn {
		right: 30upx;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.ll{
		height: 400upx;
		box-sizing: border-box;
		padding: 20upx 0;
		margin-top: 20upx;
	}
	.ll>view{
		height: 60upx;
		line-height: 60upx;
	}
	.ll image{
		top:50%;
		transform: translateY(-50%);
	}
	.list{
		width: 90%;
		margin-left: 5%;
		margin-bottom: 50upx;
	}
	.content{
		width: 90%;
		margin-left: 5%;
	}
	.week>view{
		width: calc(100% / 7);
		height: 80upx;
		line-height: 80upx;
		text-align: center;
	}
	.weeks {
		flex-wrap: wrap;
	}
	.weeks>view{
		width: calc(100% / 7);
		height: 80upx;
		line-height: 80upx;
		text-align: center;
	}
	.top{
		margin-top: 20upx;
		width: 100%;
		height: 80upx;
	}
	.up{
		margin-top: 15upx;
		width: 120upx;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		border: 2upx solid #F2F2F2;
		border-radius: 23upx;
	}
	.up:hover{
		border: none;
		background: #dbdbdb;
		color: #292828;
	}
	.month{
		margin-top: 15upx;
		width: 220upx;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		border: 2upx solid #F2F2F2;
		border-radius: 23upx;
	}
</style>
