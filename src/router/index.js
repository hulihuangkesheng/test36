import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../view/Login.vue'
// import Manage from '../view/manage/Manage.vue'
// import Home from '../view/manage/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:'/login',
           
        },
        
        // {
        //      path:'home',
        //     component:Home
        // }
    ]
})

export default router;