<template>
	<view class="setting">
		<web-view :src="url" @message="message"></web-view>
	</view>
</template>

<script>
	let count = 0;
	export default {
		data() {
			return {
				url:''
			}
		},
		methods: {
			message(event){
				let {title='webView',color='rgba(0,0,0,1)',backgroundColor='rgba(255,255,255,1)',rightText=null,rightColor='rgba(0,0,0,1)'}=event.detail.data[0];
				console.log('=========',rightText);
				if(rightText!=null){
					let pages = getCurrentPages();
					let page = pages[pages.length-1];
					let currentWebview = page.$getAppWebview();  
					currentWebview.setTitleNViewButtonStyle(0,{
						text: rightText  
					})
				}
				console.log(event.detail.data[0].title);
				if (this.url.indexOf("#sharehash=") > -1) {				  let urlPath = this.url;				  this.url = urlPath.replace(					"#sharehash=" + count,					"#sharehash=" + (count + 1)				  );				  count = count + 1;				} else {				  this.url = this.url + "#sharehash=" + count;				}
			},
		},
		onLoad(options) {
			this.url = options.href;
		},
		onNavigationBarButtonTap(e) {//不需要在<view>里面做任何操作，可直接引用
			console.log(e);
		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	.setting{
		background-color: #f1f1f1;
		min-height:100vh;
		padding:0 10px;
		padding-top:10px;
	}
</style>
