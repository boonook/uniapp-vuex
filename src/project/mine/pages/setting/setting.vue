<template>
	<view class="setting">
		<view class="login-out" @click="open">退出登录</view>
		<uni-popup ref="popup" :type="type" :animation="false" :maskClick="true" @change="change">
			<view class="unipopupbody" style="background-color: #fff;">
				<view class="modelTitle">
					您确定要退出登录吗？
				</view>
				<button class="btn btnSure" @click="onSure">
					确定
				</button>
				<view class="hengxian"></view>
				<button class="btn" @click="onCancel">
					取消
				</button>
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
			change(event){
				console.log(event);
			},
			onSure(){
				uni.reLaunch({
				    url:'/pages/index/index'
				})
			},
			onCancel(){
				this.$refs['popup'].close();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.setting{
		background-color: #f1f1f1;
		min-height:100vh;
		padding:0 10px;
		padding-top:10px;
		.login-out{
			background-color:#fff;
			padding:15px 10px;
			font-size:14px;
			font-weight:500;
			border-radius:5px;
		}
	}
	.unipopupbody{
		padding-bottom: constant(safe-area-inset-bottom);  // 核心代码
		padding-bottom: env(safe-area-inset-bottom); // 核心代码
	}
	.btn{
		height:48px;
		line-height:48px;
		text-align:center;
		background-color:transparent;
		border:none;
		outline:none;
		box-shadow:none;
	}
	.btn::after{
		border:none;
	}
	.btnSure{
		color:red;
	}
	.modelTitle{
		text-align: center;
		padding-top:20px;
		padding-bottom:20px;
		color:#999;
	}
	.hengxian{
		height:2px;
		background-color:#eee;
	}
</style>
