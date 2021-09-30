<template>
	<view class="main">
		<view class="list-item" @click="goSettingPage">
		   <image mode="widthFix" class="logo" src="/static/setting.png"></image>
		   <text class="list-item-text">设置中心</text>
	    </view>
		<view class="list-item" @click="goWebViewPage">
		   <image mode="widthFix" class="logo" src="/static/setting.png"></image>
		   <text class="list-item-text">web-view交互</text>
		</view>
		<view class="list-item" @click="goNavBarPage">
		   <image mode="widthFix" class="logo" src="/static/setting.png"></image>
		   <text class="list-item-text">自定义导航栏</text>
		</view>
		<view class="list-item" @click="goNavBarPageTest">
		   <image mode="widthFix" class="logo" src="/static/setting.png"></image>
		   <text class="list-item-text">自定义导航栏测试</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			change(){
				
			},
			goSettingPage(){
				uni.navigateTo({
				    url:'/project/mine/pages/setting/setting'
				})
			},
			goWebViewPage(){
				uni.navigateTo({
				    url:'/project/mine/pages/web-view/index?href=https://wtest.133.cn/dev/zhuxw/webapp/ceshi',
				})
			},
			goNavBarPage(){
				uni.navigateTo({
				    url:'/project/mine/pages/nav-bar/index'
				})
			},
			goNavBarPageTest(){
				uni.navigateTo({
				    url:'/project/mine/pages/nav-bar-test/index'
				})
			}
		},
		onLoad() {
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.logo{
		width:30px;
	}
	.main{
		background-color: #f1f1f1;
		min-height:100vh;
		padding:0 10px;
		padding-top:10px;
		.list-item{
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color:#fff;
			padding:15px 10px;
			font-size:14px;
			font-weight:500;
			border-radius:5px;
			margin-bottom:10px;
			&-text{
				margin-left:5px;
			}
		}
	}
</style>
