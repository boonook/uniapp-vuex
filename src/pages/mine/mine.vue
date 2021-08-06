<template>
	<view style="background-color: #007AFF;display: flex;flex-direction: column;flex:1;">
		<view @click="goSettingPage">
		   <view>
			   <image mode="widthFix" class="logo" src="/static/setting.png"></image>
		   </view>
		   <text>设置中心</text>
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
</style>
