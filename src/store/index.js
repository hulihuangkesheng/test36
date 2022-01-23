import Vue from 'vue'
import Vuex from 'vuex'
import request from '../utils/request'
import router from '../router'
import authRouters from '../router/authRoutes'

Vue.use(Vuex)
//从本地获取用户名信息
let userInfo = localStorage.getItem("userInfo");
try {
    userInfo = JSON.parse(userInfo) || {}
} catch (error) {
    userInfo = {}
}

//创建vuex Store实例
const store = new Vuex.Store({
    //全局状态
    state:{
        userInfo,
    },

    //处理state方法的方法
    getters:{
        isLogin(state){
            return !!state.userInfo._id
        }
    },
    //同步数据处理的方法
    mutations:{
        login(state,payload){
            console.log('payload',payload);
            //创建用户信息  当用户登录的时候，数据会存放在payload中，所以用state.userInfo获取，并存放在本地存储中
            state.userInfo = payload;
            //把用户信息保存在本地存储
            localStorage.setItem('userInfo',JSON.stringify(state.userInfo))
        },
        logout(state){
            //当退出的时候用户信息清空
            state.userInfo = {}
            localStorage.removeItem('userInfo')
        },
        //获取auth的组件和地址信息
        addRoute(){
            router.addRoute(authRouters)
            
        }
    },
    //异步数据处理的方法
    actions:{
        async login(ctx,payload){
            //发送请求
            const { data } = await request.get('/user/login',payload)
            console.log('data',data.data[0]);
            if (data.code === 200) {
                //把数据提交上去
                ctx.commit('login',data.data[0])
                ctx.commit('addRoute')
            }
            return data
        },
    },
    //模块化
    modules:{

    }
})
//刷新时添加权限路由
if (store.getters.isLogin) {
    store.commit('addRoute')
}


export default store