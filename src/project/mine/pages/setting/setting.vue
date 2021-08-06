<template>
	<view>
		<text @click="open">设置</text>
		<uni-popup ref="popup" :type="type" :animation="false" :maskClick="true" @change="change">
			<view class="unipopupbody" style="background-color: #fff;">
				popup 内容，此示例没有动画效果
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'bottom'
			}
		},
		methods: {
			open(){
				this.$refs['popup'].open();
			},
			change(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.unipopupbody{
		padding-bottom: constant(safe-area-inset-bottom);  // 核心代码
		padding-bottom: env(safe-area-inset-bottom); // 核心代码
	}
</style>
