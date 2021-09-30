<template>
	<view class="nav-bar">
		<header></header>
		<view class="nav-bar-body">
			<scroll-view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
				<view>
					<text>123123213</text>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import header from './header.vue'
	export default {
		components:{
			header
		},
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
</style>
