<template>
	<view>
		
		<view style="height: 10upx;"></view>
		<view class="view1">
			<text>上课详情</text>
			<view class="m_left">
				<view class="com">
					<text class="com_fc1">班级：</text>
					<text class="com_fc2">{{clazzName}}</text>
				</view>
				<view class="com">
					<text class="com_fc1">老师：</text>
					<text class="com_fc2">{{teacher}}</text>
				</view>
				<view class="com">
					<text class="com_fc1">时间：</text>
					<text class="com_fc2">{{time}}</text>
				</view>
			</view>
		</view>

		<view style="height: 20upx;"></view>
		<view class="view2">
			<view class="dianP">
				<image src="../../static/index/z37@3x.png" mode=""></image>
				<text class="dTxt">学生点评</text>
			</view>

			<view class="viewBott">
				<text class="txt1">根据孩子的上课感受，给老师评个分(匿名评价）</text>
				<!-- 评星 -->
				<view class="pingX">
					<view class="jiangjie">
						<text>耐心讲解 : </text>
						<uni-rate :value="jjnx" @num='jjnxs' :disabled="jjnxss" size='30upx'></uni-rate>
					</view>
					<view class="jiangjie">
						<text>教学有方 : </text>
						<uni-rate :value="jxyf" @num='jxyfs' :disabled="jxyfss" size='30upx'></uni-rate>
					</view>
				</view>
				
				<view class="pingjiaW" v-if="!show">
					<text>
						{{reviewReplyContent!=null?reviewReplyContent:''}}
					</text>
				</view>
				
					<!-- 评星标准 -->
					<view class="biaoZ" v-if='show'>
						<text>评星标准参考：</text>
						<text>欠佳 1星，正常 2星，良好 3星 ，优秀 4星，极佳 5星</text>
					</view>
					<view style="height: 40upx;"></view>

					<!-- 文本输入框 -->
					<textarea v-model="content"  v-if='show' value="" placeholder="其它建议和意见（所有文本和评星评价都将是匿名发送，请放心填写）" placeholder-class="placeholder" />


					<!-- 评价提交 -->
					<button @tap="submitOk" v-if='show'>提交匿名评价</button>
					
					<!-- 评价说明 -->
					<view class="shuoM" v-if='show'>
						<text>评价说明:</text>
						<text>1、您可根据孩子在上课过程中的感受体会，对授课老师进星级评分，也可以进行文字评价；
							2、星级评价较低时，需要您填写相应的文字评价；
							3、请您客观评价，避免恶意评价造成不良影响。
						</text>
					</view>	
							
				
					
			</view>
		</view>   <!-- view2结束 -->
		<view style="height: 100upx;background-color: #F2F2F2;"></view>
		
	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"
	
	export default {
		components: {
			uniRate
		},
		data() {
			return {
				clazzName: '',
				teacher: '',
				time: '',
				id: '',
				show: true,
				jxyf:'',
				jxyfss:false,
				jjnxss:false,
				jjnx:'',
				content:'',
				reviewReplyContent:'',
			};
		},
		onLoad(o){
			this.id = o.id;
			this.show = true
		},
		onShow(){
			this.getinfo();
		},
		methods: {
			jjnxs(e){
				this.jjnx = e;
			},
			jxyfs(e){
				this.jxyf = e;
			},
			getinfo(){
				uni.request({
					url: this.$api+'/weixin/shishenxin/assessmentliessoninfo',
					data: this.getmd5({
						lessonId:this.id
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
							var data = res.data.data;
							this.clazzName = data.clasName;
							this.teacher = data.teacherName;
							this.time = data.classDate+' '+data.classTime+'-'+data.leaveTime;
							this.jxyf = data.jxyf;
							this.jjnx = data.jjnx;
							this.reviewReplyContent = data.reviewReplyContent;
							if(data.jxyf || data.jjnx){
								this.show = false;
								this.jxyfss = true;
								this.jjnxss = true;
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
			submitOk(){
				if(this.jjnx==0||this.jxyf==0){
					uni.showToast({
						icon: 'none',
						title: '至少评星一项',
						duration: 2000
					});
				}else{
					uni.request({
						url: this.$api+'/weixin/shishenxin/saveassessmentliessoninfo',
						data: this.getmd5({
							lessonId:this.id,
							jjnx:this.jjnx,
							jxyf:this.jxyf,
							reviewReplyContent:this.content
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
								var data = res.data.data;
								uni.showToast(
									{
										title: '评价成功',
										duration: 2000,
										success:()=>{
											uni.navigateBack({
												delta:1
											})
										}
									}
								);
								
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
				}
			}
		}
	}
</script>

<style>
.pingjiaW {
	width: 100%;
	height: auto;
	background-color: #fff;
	/* border-top: 2upx solid #F2F2F2; */
}
.pingjiaW>text {
	padding: 40upx 0;
	font-size: 26upx;
	color: #5C5C5C;
}
	
text {
	display: inline-block;
}
		
.view1 {
	width: 100%;
	height: 270upx;
	background-color: #ffffff;
}
.view1>text{
	width: 100%;
	display: inline-block;
	height: 73upx;
	border-bottom: 2upx solid #F2F2F2;
	font-size: 30upx;
	color: #292828;
	padding-left: 40upx;
	padding-top: 30upx;
}

.m_left {
	width: 100%;
	height: 160upx;
	margin-left: 40upx;
	display: flex;
	flex-direction: column;
}

.com>.com_fc1 {
	font-size: 28upx;
	color: #8a8a8a;
	margin-right: 30upx;
}
.com>.com_fc2 {
	font-size: 28upx;
	color: #292828;
}



.view2 {
	width: 100%;
	height: auto;
	background-color: #fff;
}	
.view2>.dianP {
	width: 100%;
	height: 73upx;
	border-bottom: 2upx solid #F2F2F2;
}
.dianP>image {
	display: inline-block;
	width: 50upx;
	height: 50upx;
	margin-left: 40upx;
	margin-top: 15upx;
}
.dianP>text{
	font-size: 30upx;
	color: #292828;	
	position: relative;
	left: 25upx;
	top: -15upx;
}
	
.view2>.viewBott {
	width: 90%;
	height: auto;
	margin-left: 40upx;
	background-color: #fff;
}	
.viewBott>.txt1 {
	font-size: 28upx;
	color: #8a8a8a;
	margin-top: 30upx;
	margin-bottom: 40upx;
}		

.pingX {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
}
.jiangjie>text {
	color: #292828;
	font-size: 30upx;
	margin-right: 70upx;
	margin-top: 30upx;
}
.jiangjie>.uni-rate {
	display: inline-block;
	position: relative;
	top: -15upx;
}

.viewBott>.biaoZ {
	display: block;
	font-size: 26upx;
	color: #c3c3c3;
	margin-top: 40upx;
}	

.viewBott>textarea {
	width: 99%;
	max-height: 210upx;
	border: solid 4upx #dbdbdb;
	background-color: #f9fdff;
	text-indent: 20upx; 
	font-size: 28upx;
	padding-top: 20upx;
}
.viewBott .placeholder {
	color: #8a8a8a;
	font-size: 28upx;
	line-height: 1.49;
}

.viewBott>button {
	height: 100upx;
    border-radius: 24upx;
    background-color: #0097fc;
	margin-top: 60upx;
	font-size: 32upx;
	color: #fff;
	text-align: center;
	line-height: 100upx;
}	
	
	
.viewBott>.shuoM {
	width: 100%;
	height: auto;
}
.shuoM>text {
	display: block;
	
}
.shuoM>text:first-child {
	margin-top: 40upx;
	font-size: 28upx;
	color: #292828;
}	
.shuoM>text:last-child {
	font-size: 26upx;
	color: #5c5c5c;
	padding-bottom: 60upx;
	line-height: 1.6;
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
