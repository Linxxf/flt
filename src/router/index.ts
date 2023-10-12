import {createRouter,createWebHistory} from 'vue-router'
//createRouter 方法,用于创建路由器实例,可以管理多个路由

export default createRouter({
    //路由模式设置
    history:createWebHistory(),
    //管理路由
    routes:[
        {
            path:'/home',
            component:()=>import('@/pages/home/index.vue')
        },
        {
            path:'/detail',
            component:()=>import('@/pages/detail/index.vue'),
            children:[{
                path:'hospitalDetail',
                component: () => import('@/pages/detail/hospitalDetail/index.vue')
            },
            {
                path:'notice',
                component: () => import('@/pages/detail/notice/index.vue')
            },
            {
                path:'query',
                component: () => import('@/pages/detail/query/index.vue')
            },
            {
                path:'register',
                component: () => import('@/pages/detail/register/index.vue')
            },
            {
                path:'stop',
                component: () => import('@/pages/detail/stop/index.vue')
            },
            {
                path:'register_step1',
                component: () => import('@/pages/detail/register/register_step1.vue')
            },
            {
                path:'register_step2',
                component: () => import('@/pages/detail/register/register_step2.vue')
            },
        ]
        },
        {
            path:'/user',
            component: () => import('@/pages/user/index.vue'),
            children:[
                {
                    path:'accountInfo',
                    component: () => import('@/pages/user/accountInfo/index.vue')
                },
                {
                    path:'bookOrder',
                    component: () => import('@/pages/user/bookOrder/index.vue')
                },
                {
                    path:'confirm',
                    component: () => import('@/pages/user/confirm/index.vue')
                },
                {
                    path:'feedback',
                    component: () => import('@/pages/user/feedback/index.vue')
                },
                {
                    path:'userMange',
                    component: () => import('@/pages/user/userMange/index.vue')
                }
            ]
        },
        {
            path:'/',
            redirect:'/home'
        }
    ],
    //滚动行为:控制滚动条位置
    scrollBehavior(){
        return{
            left:0,
            top:0
        }
    },
})