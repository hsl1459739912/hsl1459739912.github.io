<template>
	<view>
		<view class="textbbb ts32" :class="date=='1'?'err':'errs'">
			<image src="../static/err/Blank@2x.png"></image>
			<view>啊噢,当前暂无内容~</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			date:{
				type:String,
				default:'1',
			}
		},
		data() {
			return {
				
			};
		},
	}
</script>

<style>
	.err{
		margin-top: 60upx;
		text-align: center;
	}
	.errs{
		margin-top: 286upx;
		text-align: center;
	}
	.err image{
		width: 160upx;
		height: 160upx;
		text-align: center;
	}
	.errs image{
		width: 160upx;
		height: 160upx;
		text-align: center;
	}
	.err view{
		text-align: center;
	}
	.errs view{
		text-align: center;
	}
</style>
