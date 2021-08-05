export const baseUrl = 'http://www.baidu.com';
/**
 * @param {string} 	url 		'api地址'
 * @param {object} 	params 	 请求参数
 * @param {string} 	mrthod	 请求方式
 * @param {boolean}	token	 请求方式	
 * @param {boolean} loading	 请求方式	
 **/
 export const http=(url='',params={},mrthod='get',token=true,loading=true)=>{
	if(loading){
		uni.showLoading();
	}
	return new Promise((resolve, rejects)=>{
		let header = {};
		if(token==true){
			header = {...header,token:'boonook'};
		}
		uni.request({
			url:baseUrl+url,
			data:JSON.stringify(params),
			header:{
				...token
			},
			success:(res)=>{
				resolve(res);
			},
			fail: (error) => {
				uni.showToast({
					title:error||'服务器请求异常！',
					position:"bottom"
				});
				rejects(false);
			},
			complete: () => {
				if(loading){
					uni.hideLoading();
				}
			}
		})
	})
}