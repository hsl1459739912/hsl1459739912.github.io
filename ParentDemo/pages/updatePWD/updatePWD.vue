<template>
	<view style="background-color: #fff;height: 1330upx;">
			
		<view style="height: 1upx;background-color: #F2F2F2;"></view>	
		<view class="up_pwd">
			<view class="fs_co">
				<text class="fs_co1">旧密码</text>
				<input placeholder="请输入旧密码" placeholder-class="placePWD"/>
			</view>		
			<view class="fs_co">
				<text class="fs_co1">新密码</text>
				<input  placeholder="请输入新密码" placeholder-class="placePWD"/>
			</view>		
			<view class=" fs_co">
				<text class="fs_co2">确认密码</text>
				 <input placeholder="请再次确认新密码" placeholder-class="placePWD"/>
			</view>
		</view>
		
		<!-- 提示文本 -->
		<text class="tishi">密码必须是8-16位的数字、字符组合</text>	
		<button class="updateS" @tap="updateS();" >确定</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			updateS(){
				// var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
				
			}
		}
	}
</script>

<style>
.up_pwd {
	width: 90%;
	height: auto;
	margin: 0 auto;
	border-bottom: 1upx solid #F2F2F2;
}
.up_pwd .fs_co {
	width: 95%;
	height: auto;
	border-bottom: 1upx solid #F2F2F2;
}
.fs_co>text {
	display: inline-block;
	font-size: 28upx;
	color: #282828;
	margin-top: 42upx;
	margin-bottom: 30upx;
}
.fs_co .fs_co1 {
	margin-right: 70upx;
}
.fs_co .fs_co2 {
	margin-right: 45upx;
}
.fs_co>input {
	height: 50upx;
	display: inline-block;
	border-left: 1upx solid #e5e5e5;
	padding-left: 25upx;
	position: relative;
	top: 15upx;
	left: 0;
}
.placePWD {
	font-size: 30upx;
	color: #999999;
}

.tishi {
	display: inline-block;
	margin-top: 60upx;
	margin-bottom: 85upx;
	margin-left: 35upx;
	font-size: 28upx;
	color: #6E6E6E;
}

.updateS {
	width: 92%;
	height: 90upx;
	margin: 0 auto;
	border-radius: 10upx;
	background-color: #00a0fc;
	font-size: 40upx;
	color: #fff;
	text-align: center;
	line-height: 90upx;
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
</style>
