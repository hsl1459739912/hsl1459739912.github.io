<template>
	<view>
		<view class="focutime shadow" v-on:click.stop='closesha'>
			<view @click.stop="childClick">
				<view class="ftcon bgwhite ts30  text29">
					<view class="center">日期快速选择</view>
					<view class="relative" style="margin-left: 40upx;" v-for="(item,index) in list" :key="index" @tap="focutype(index)">
						<text :class="idx == index?'textfc':''">{{item}}</text>
						<image src="../../static/right@2x.png" class="absolute" v-if="idx == index" style="right: 60upx;top: 50%;
						transform: translateY(-50%); width: 30upx;height: 24upx;"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			idxss:'',
		},
		data() {
			return {
				list:['今日','昨日','最近7日','最近30天','本周','本月'],
				idx:0,
			};
		},
		mounted(){
			this.idx = this.idxss;
		},
		methods:{
			focutype(type){
				this.idx = type;
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth();
				var firsttime = '1';
				var lasttime = '2';
				switch(type){
					case 0:{
						var timestamp = Date.parse(date);
						firsttime = this.getLocalTime(timestamp);
						lasttime = this.getLocalTime(timestamp);
						this.$emit('firsttime', firsttime);
						this.$emit('lasttime', lasttime);
						this.$emit('idx', this.idx);
					}break;
					case 1:{
						var timestamp = Date.parse(date);
						firsttime = this.getLocalTime(timestamp-(24*60*60*1000));
						lasttime = this.getLocalTime(timestamp-(24*60*60*1000));
						this.$emit('firsttime', firsttime);
						this.$emit('lasttime', lasttime);
						this.$emit('idx', this.idx);
					}break;
					case 2:{
						var timestamp = Date.parse(date);
						firsttime = this.getLocalTime(timestamp-(7*24*60*60*1000));
						lasttime = this.getLocalTime(timestamp);
						this.$emit('firsttime', firsttime);
						this.$emit('lasttime', lasttime);
						this.$emit('idx', this.idx);
					}break;
					case 3:{
						var timestamp = Date.parse(date);
						firsttime = this.getLocalTime(timestamp-(30*24*60*60*1000));
						lasttime = this.getLocalTime(timestamp);
						this.$emit('firsttime', firsttime);
						this.$emit('lasttime', lasttime);
						this.$emit('idx', this.idx);
					}break;
					case 4:{
						var week = date.getDay();
						var weeks = week;
						if(week = 0){
							weeks = 7;
						}
						var timestamp = Date.parse(date);
						firsttime = this.getLocalTime(timestamp-((weeks-1)*24*60*60*1000));
						lasttime = this.getLocalTime(timestamp+((7-weeks)*24*60*60*1000));
						this.$emit('firsttime', firsttime);
						this.$emit('lasttime', lasttime);
						this.$emit('idx', this.idx);
					}break;
					case 5:{
						firsttime = year+'-'+(++month<10?'0'+month:month)+'-'+1;
						lasttime = year+'-'+(month<10?'0'+month:month)+'-'+this.getMonth(year,month);
						this.$emit('firsttime', firsttime);
						this.$emit('lasttime', lasttime);
						this.$emit('idx', this.idx);
					}break;
				}
			},
			getMonth(y,m){
				var months=[31,,31,30,31,30,31,31,30,31,30,31];
				if((y % 4 == 0 && year % 100 != 0)||y % 400 ==0){
					months[1] = 29
				}else{
					months[1] = 28
				}
				return months[m];
			},
			getLocalTime(nS) {
			    return new Date(nS).toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '-').slice(0,10);
			},
			childClick: function() {
			},
			closesha: function(e) {
				var con = e.currentTarget.dataset.type;
				this.$emit('closePop');
			},
		}
	}
</script>

<style>
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
	.ftcon>view{
		height: 80upx;
		line-height: 80upx;
		box-sizing: border-box;
		border-bottom: 2upx solid #F2F2F2;
	}
</style>
