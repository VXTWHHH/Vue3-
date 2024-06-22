import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Detail from '../components/detail.vue'
import Login from '../components/login.vue'
import Admin from '../components/admin.vue'
import userList from '../components/userList.vue'
import NotFoundError from '../components/404.vue'
import isLogin from '../permission'
import stillWorking from '../components/stillWorking.vue'

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        component: Admin,
        name:'Admin',
        redirect:'/admin/userlist',
        meta: {
            requiresAuth: true
        },
        children: [{
                path: 'userlist',
                children:[
                {
                    path:'',
                    component: userList,
                    name:'UserList'
                },
                {
                    path: ':id',
                    component: Detail,
                    name:'Detail'
                }]
            },
            {
                path:'authlist',
                name:'AuthList',
                component:stillWorking
            }, 
            {
                path:'goodslist',
                name:'GoodsList',
                component:stillWorking
            }, 
            {
                path:'orderslist',
                name:'OrderList',
                component:stillWorking
            },
            {
                path:'settings',
                name:'Settings',
                component:stillWorking
            },
            {
                path:'test',
                name:'Test',
                component:stillWorking
            }
        ]
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFoundError,
        name:'NotFoundError'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !isLogin.value) {
        return {
            path: '/login',
        }
    }

})

export default router