<template>
	<view class="nav-bar">
		<view>
			<view class="status_bar"><view class="top_view"></view></view>
			<view class="top_nav_segmented">
			    <view class="left-nav-icon" @tap="onBack"><text>返回</text></view>
			    <view class="nav_segmented">
			        <text>自定义导航栏自定义导航栏</text>
			    </view>
			    <view class="right-plus"><text>添加</text></view>
			</view>
		</view>
		<view class="body">
			<view>
				<text>123123213</text>
			</view>
			<view>
				<text>123123213</text>
			</view>
			<view>
				<text>123123213</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{background-color:transparent;} 
	.status_bar {
	    height: var(--status-bar-height);
	    width: 100%;
	    background-color: #fff;
	}
	
	.top_nav_segmented {
	    background-color: #f8f8f8;
	    padding-top: 10px;
	    padding-bottom: 10px;
		display: flex;
		flex-direction:row;
		align-items:center;
		position:fixed;
		width:100%;
		left:0;
		z-index:99;
	}
	
	.nav_segmented {
	    width:100px;
		font-size:16px;
		text-align:center;
		color: #444;
		overflow: hidden;/*超出部分隐藏*/
		white-space: nowrap;/*不换行*/
		text-overflow:ellipsis;/*超出部分文字以...显示*/
	}
	
	.top_view {
	    height: var(--status-bar-height);
	    width: 100%;
	    position: fixed;
	    background-color: #f8f8f8;
	    top: 0;
	    z-index: 999;
	}
	
	.right-plus {
	    margin-left: auto;
	    font-size:14px;
	    color: white;
	    text-align: center;
	    margin-right: 15px;
		color: #444;
		flex:1;
		display: flex;
		flex-direction: row;
		align-items:center;
		justify-content: flex-end;
	}
	
	.left-nav-icon {
	    margin-left: auto;
	    flex:1;
	    font-size: 14px;
	    text-align: center;
	    color: #444;
		margin-left:15px;
		display: flex;
		flex-direction: row;
		align-items:center;
		justify-content: flex-start;
	}
	.body{
		margin-top:52px;
	}
</style>
