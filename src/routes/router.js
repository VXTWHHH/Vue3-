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
        name:'admin',
        meta: {
            requiresAuth: true
        },
        children: [{
                path: 'userList',
                component: userList,
                name:'UserList'
            },
            {
                path: 'detail',
                component: Detail,
                name:'Detail'
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