<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	body.dialog-open {
	  position: fixed;
	  width: 100%;
	}
		page {
		background: #f2f2f2;
	}
	
	.ts22{
		font-size: 22upx;
	}
	
	.choseLog {
		color: #0097fc;
		border-bottom: 6upx solid #0097fc;
		z-index: 9999999;
	}
	
	.shadow {
		background-color: rgba(0, 0, 0, .3);
		z-index: 9999;
	}
	
	.bgwhite {
		background: #ffffff;
	}
	
	.bgfc {
		background: #0097fc;
		color: #ffffff;
	}
	
	.flex {
		display: flex;
		justify-content: space-around;
	}
	
	.flex-bet {
		display: flex;
		justify-content: space-between;
	}
	
	.flex-c {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.flex-c-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.bgafc {
		background: #00a0fc;
		color: #ffffff;
	}
	
	.bgfabea {
		background: #4fabea;
	}
	
	.bgdc {
		background: #01d10c;
	}
	
	.bgfff {
		background-color: #f2f2f2;
	}
	
	.bgf {
		background: #f58522;
	}
	.bgefff{
		background: #e5f5ff;
	}
	.bgcaf {
		background: #2ca5f5;
	}
	
	.bgccc {
		background: #c2c2c2;
	}
	
	.bge6 {
		background-color: #e6e6e6;
	}
	
	.text {
		color: #282828;
	}
	
	.textc {
		color: #9c9c9c;
	}
	.textef{
		color: #04e42f;
	}
	.ts40{
		font-size: 40upx;
	}
	.textcc {
		color: #3366cc;
	}
	
	.textccc {
		color: #c3c3c3;
	}
	.textcaa{
		color: #5c5a5a;
	}
	.text29{
		color: #292828;
	}
	.textbf{
		color: #bfbbbb;
	}
	.textaaa{
		color: #8a8a8a;
	}
	.text5c {
		color: #5c5c5c;
	}
	.text80{
		color: #808080;
	}
	.text32d{
		color: #32d145;
	}
	.textfce{
		color: #fc8e00;
	}
	.text68{
		color: #686868;
	}
	.text2c {
		color: #c2c2c2;
	}
	.textffe{
		color: #3f93fe;
	}
	.text39{
		color: #393939;
	}
	.texteee {
		color: #6e6e6e;
	}
	
	.textfabea {
		color: #4fabea;
	}
	
	.textadeb {
		color: #50adeb;
	}
	
	.textea {
		color: #e8a246;
	}
	
	.textdaa {
		color: #32d1aa;
	}
	
	.textd {
		color: #d13245;
	}
	
	.textbbb {
		color: #b3b3b3;
	}
	
	.text2b {
		color: #b2b2b2;
	}
	
	.textff {
		color: #ff6600;
	}
	
	.textfc {
		color: #0097fc !important;
	}
	
	.text2fc {
		color: #2fc097;
	}
	
	.textwhite {
		color: #FFFFFF;
	}
	
	.textfa {
		color: #f8614a;
	}
	
	.textcd {
		color: #cdcdcd;
	}
	
	.textright {
		text-align: right;
	}
	
	.textdb {
		color: #1296db;
	}
	.ts18{
		font-size: 20upx;
	}
	.ts20 {
		font-size: 20upx;
		font-weight: bold;
	}
	
	.ts28 {
		font-size: 28upx;
	}
	
	.ts30 {
		font-size: 30upx;
	}
	
	.ts31 {
		font-size: 31upx;
	}
	
	
	.ts32 {
		font-size: 32upx;
	}
	
	.ts60 {
		font-size: 60upx;
	}
	
	.ts48 {
		font-size: 48upx;
	}
	
	.ts56 {
		font-size: 56upx;
	}
	
	.ts28 {
		font-size: 26upx;
	}
	
	.ts36 {
		font-size: 36upx;
		line-height: 36upx;
	}
	
	.ts24 {
		font-size: 24upx;
	}
	
	.ts26 {
		font-size: 26upx;
	}
	
	.ts34 {
		font-size: 34upx
	}
	
	.relative {
		position: relative;
	}
	
	.absolute {
		position: absolute !important;
	}
	
	.center {
		text-align: center;
	}
	
	.fsb2 {
		font-size: 28upx;
	}
	
	.fsb1 {
		font-size: 30upx;
	}
	
	.fsb4 {
		font-size: 24upx;
	}
</style>
