import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'
import Sidebar from '../components/LeftSideBar.vue'
//import Protected from '../components/Protected.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import {authStore} from '../store/store'
import Cart from '../views/Cart.vue'
import Orders from '../views/Orders.vue'

import Admin from '../views/Admin.vue'


const routes = [
    {
        path: '/', components: {
            default: Home,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/login', components: {
            default: Login,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/signup', components: {
            default: SignUp,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/about', components: {
            default: About,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/admin', components: {
            default: Admin,
            LeftSideBar: Sidebar
        },
        meta:{
            requiresAuth: true,
        }
    },
    {
        path: '/contact', components: {
            default: Contact,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/products', components: {
            default: Products,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/cart', components: {
            default: Cart,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/orders', components: {
            default: Orders,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/products/:id', components: {
            default: Product,
            LeftSideBar: Sidebar
        },
        name: 'product',
    },
]

// const isAuthenticated = () => {
//     return localStorage.getItem('token')=='123'
// }

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !authStore.isAuthenticated){
        next('/login')
    }else{
        next()
    }
})

export default router