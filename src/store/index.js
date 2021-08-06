 //demo中的数据是模拟状态数据，用于测试，实际使用中，请根据您自己的业务编写
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        userInfo:{},
		token:'',
		isLogin:false,
    },
    mutations: {
        setUserInfo(state,data){
            state.userInfo = data;
        },
		setToken(state,token){
		    state.token = token;
		},
		setIsLogin(state,isLogin){
		    state.isLogin = isLogin;
		}
    },
    actions: {
		 handleSetUserInfo(context,data={}) {
		  context.commit('setUserInfo',data);
		}
    },
    getters:{
        userInfo(state,getters){
            return state.testArr
        },
		token(state,getters){
		    return state.token
		},
		isLogin(state,getters){
		    return state.isLogin
		},
    }
})
export default store