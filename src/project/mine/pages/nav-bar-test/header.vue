<template>
	<view class="nav-bar-header">
		<view class="status_bar"><view class="top_view"></view></view>
		<view class="top_nav_segmented">
			<view class="left-nav-icon" @tap="onBack"><text>返回</text></view>
			<view class="nav_segmented">
				<text>自定义导航栏</text>
			</view>
			<view class="right-plus"><text>添加</text></view>
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
	    flex: 1;
		font-size:16px;
		text-align:center;
		color: #444;
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
	    width: 40px;
	    font-size:14px;
	    color: white;
	    text-align: center;
	    margin-right: 15px;
		color: #444;
	}
	
	.left-nav-icon {
	    margin-left: auto;
	    width: 40px;
	    font-size: 14px;
	    text-align: center;
	    color: #444;
		margin-left:15px;
	}
</style>
