//权限路由：以下路由需要登录后才能访问
import Manage from "../view/manage/Manage.vue"
import Home from '../view/manage/Home.vue'
import Content from '../view/manage/Content.vue'
import Role from '../view/manage/Role.vue'
import UserManage from '../view/manage/UserManage.vue'
import Activity from '../view/manage/content/Act.vue'
import News from '../view/manage/content/News.vue'
import Newsletter from '../view/manage/content/Newsletter.vue'
import Topic from '../view/manage/content/Topic.vue'
import Video from '../view/manage/content/Video.vue'
import ContentEidt from '../view/manage/content/ContentEidt.vue'
import Admins from '../view/manage/Role/Admins.vue'
import User from '../view/manage/Role/User.vue'
import addUser from '../view/manage/usermanage/addUser.vue'
import userlist from '../view/manage/usermanage/userlist.vue'
import userEidt from '../view/manage/usermanage/UserEidt.vue'
import userEntry from '../view/manage/usermanage/TheEntry.vue'
import useravatar from '../view/manage/usermanage/Avatar.vue'
import upload from '../view/manage/content/Upload.vue'

export default {
    path: '/manage',
    // name:'Mange',
    component: Manage,
    meta: {
        requiresAuth: true
    },
    children: [{

            path: 'home',
            component: Home
        },
        {
            path: '/manage',
            redirect: 'home',
        },
        {

            path: 'content',
            redirect: 'act',
            component: Content,
            children: [{
                    path: 'activity',
                    component: Activity
                }, {
                    path: 'news',
                    component: News
                },
                {
                    path: 'newsletter',
                    component: Newsletter
                },
                {
                    path: 'topic',
                    component: Topic
                },
                {
                    path: 'video',
                    component: Video
                },{
                    path:'ceidt',
                    component:ContentEidt
                },{
                    path:"upload",
                    component:upload
                }
            ]
        },
        {
            path: 'role',
            component: Role,
            children: [{
                path: '',
                redirect: 'admins'
            }, {
                path: 'admins',
                component: Admins
            }, {
                path: 'user',
                component: User
            }, ]
        },
        {
            path: 'usermanage',
            component: UserManage,
            children: [{
                    path: '',
                    redirect: 'adduser'
                }, {
                    path: 'adduser',
                    component: addUser
                }, {
                    path: 'userlist',
                    component: userlist
                }, {
                    path: 'userentry',
                    component: userEntry,
                    children:[
                        {
                            path: 'usereidt',
                            component: userEidt
                        },{
                            path:'useravatar',
                            component:useravatar
                        }
                    ]
                },
            ]
        },
    ]
}