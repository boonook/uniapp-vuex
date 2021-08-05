<template>
	<view class="content">
		<button type="default" @click="goto('/pages/about/index')">通过方法跳转到about页面</button>
		<button type="default" @click="onLogin">登录{{baseUrl}}</button>
		<image class="logo" src="/static/logo.png"></image>
		<skeleton
		  :loading="loading"
		  :avatarSize="skeleton1.avatarSize"
		  :row="skeleton1.row"
		  :showTitle="skeleton1.showTitle"
		>
		  <view class="section-content">我是段落1</view>
		</skeleton>
		<skeleton
		  :loading="loading"
		  :avatarSize="skeleton1.avatarSize"
		  :nameRow="5"
		  flexType="space-between"
		>
		  <view class="section-content">我是段落2</view>
		</skeleton>
		<skeleton
		  :loading="loading"
		  :avatarSize="skeleton1.avatarSize"
		  :nameRow="5"
			avatarShape="square"
			flexType="space-between"
		>
		  <view class="section-content">我是段落3</view>
		</skeleton>
		<skeleton
		  :loading="loading"
		  titleWidth="100%"
		  :avatarSize="skeleton1.avatarSize"
		  :row="skeleton1.row"
		  :imgTitle="true"
		>
		  <view class="section-content">我是段落1</view>
		</skeleton>
		<skeleton
		  :loading="loading"
		  :avatarSize="skeleton1.avatarSize"
		  :row="skeleton1.row"
		  :showTitle="true"
		>
		  <view class="section-content">我是段落4</view>
		</skeleton>
		<skeleton
		  :loading="loading"
		  :row="skeleton1.row"
		  avatarSize="false"
		  :showTitle="true"
		>
		  <view class="section-content">我是段落5</view>
		</skeleton>
	</view>
</template>

<script>
	import {http,baseUrl} from '../../lib/http.js';
	import Skeleton from '../../components/J-skeleton/J-skeleton.vue'
	export default {
		components: {
			Skeleton
		},
		data() {
			return {
				title: 'Hello',
				loading:true,
				skeleton1:{
					avatarSize: '52px',
					row: 3,
				},
				baseUrl:baseUrl
			}
		},
		onLoad() {
			http().then(res=>{
				
			})
		},
		methods: {
			goto(url) {
                uni.navigateTo({
                    url:url
                })
            },
			onLogin(){
				 uni.switchTab({
				 	url:'/pages/home/home'
				 })
			}
		},
		onNavigationBarButtonTap(e) {//不需要在<view>里面做任何操作，可直接引用
			// 这里用let或者var定义变量都可以
			let rightText = ''
			if(this.isEditStatus){//根据定义Boolean变量值，可多次切换文字
				rightText = '保存'
			}else{
				rightText = '编辑'
			}
			this.isEditStatus = !this.isEditStatus
			const currentWebview = this.$mp.page.$getAppWebview();
			//下面的方法即可修改文字内容及颜色等,e.index就表示修改当前点击按钮样式
			currentWebview.setTitleNViewButtonStyle(e.index, { //h5端会报错
				text: rightText
			});
		}
	}
</script>

<style>
	.content {
		background-color: #2C405A;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
