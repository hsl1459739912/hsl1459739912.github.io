<template>
	<view>
		<view class="focutime shadow" v-on:click.stop='closesha' data-type='focutime'>
			<view @click.stop="childClick">
				<view class="fttop text relative ">
					<view class="ftbtn textfc absolute ts30" style="right: 210upx;" @tap="close">取消</view>
					<view class="ftbtn textfc absolute ts30" @tap="focudata">确定</view>
				</view>
				<view class="ftcon bgwhite ts28">
					<view>
						<picker-view indicator-style="height: 50px;" :value="value" @change="dataChange">
							<picker-view-column>
								<view class="item" v-for="item in time.yearval" :key="item">{{item}}年</view>
							</picker-view-column>
							<picker-view-column>
								<view class="item" v-for="item in time.monthval" :key="item">{{item}}月</view>
							</picker-view-column>
							<picker-view-column>
								<view v-for="item in time.dayval" :key="item">{{item}}日</view>
							</picker-view-column>
						</picker-view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			date:''
		},
		data() {
			return {
				value:[0,0,0],
				time: {
					year: "",
					month: "",
					day: "",
					yearval: [],
					monthval: [],
					dayval: [],
				}
			};
		},
		mounted: function() {
			var date = new Date();
			var year = date.getFullYear();
			this.value = [];
			this.value.push(3+(this.date.slice(0,4)-year));
			this.value.push(Number(this.date.slice(5,7)-1))
			this.value.push(Number(this.date.slice(8,10)-1));
			this.gettime();
			for (var i = 1; i <= 12; i++) {
				if (i < 10) {
					i = `0${i}`;
				}
				this.time.monthval.push(i);
			}
		},
		methods: {
			close:function(){
				this.$emit('closePop');
			},
			focudata: function() {
				var time = this.time.year + '-' + this.time.month + '-' + this.time.day;
				this.$emit('time', time);
				this.$emit('closePop');
			},
			dataChange: function(e) {
				const val = e.detail.value
				this.value = val;
				this.time.year = this.time.yearval[val[0]]
				this.time.month = this.time.monthval[val[1]]
				this.time.day = this.time.dayval[val[2]]
				this.getday(this.time.year, this.time.month);
			},
			gettime: function() {
				var oDate = new Date();
				this.time.year = oDate.getFullYear();
				var year = oDate.getFullYear();
				var month = oDate.getMonth() + 1;
				if(month<10){
					month = '0'+month;
				}
				this.time.month = month;
				var day = oDate.getDate();
				if(day<10){
					day = '0'+day;
				}
				this.time.day = day;
				for (var i = oDate.getFullYear() - 3; i < oDate.getFullYear() + 4; i++) {
					this.time.yearval.push(i);
				}
				this.getday(oDate.getFullYear(), this.time.month);
			},
			getday: function(year, month) {
				this.time.dayval.length = 0;
				var montharr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
				if (year % 4 == 0 && year % 100 != 0) {
					montharr[1] = 29;
				} else if (year % 400 == 0) {
					montharr[1] = 29;
				}
				for (var i = 1; i <= montharr[month - 1]; i++) {
					if (i < 10) {
						i = `0${i}`;
					}
					this.time.dayval.push(i);
				}
			},
			childClick: function() {

			},
			closesha: function(e) {
				var con = e.currentTarget.dataset.type;
				this.$emit('closePop');
			},
		},
	}
</script>

<style>
	/* 选择日期 */
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

	.ftdata {
		margin-left: 30upx;
		display: inline-block;
	}

	.ftdata1 {
		width: 200upx;
	}

	.ftdata2 {
		width: 65upx;
	}

	.border {
		border-bottom: 4upx solid #282828;
	}
</style>
