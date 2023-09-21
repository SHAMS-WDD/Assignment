import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetails from '../views/ProductDetails.vue'
import LeftSideBar from '../components/LeftSideBar.vue'

const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            components:{
                default:Home,
                sidebar:LeftSideBar
            }
        },
        {
            path:'/about',
            name:'about',
            components:{
                default:About,
                sidebar:LeftSideBar
            }
        },
        {
            path:'/contact',
            name:'contact',
            components:{
                default:Contact,
                sidebar:LeftSideBar
            }
        },
        {
            path:'/productlist',
            name:'products',
            components:{
                default:Home,
                sidebar:LeftSideBar
            }
        },

        {
            path:'/product/:id',
            name:'product',
            component:ProductDetails
        }
    ]
})
export default router;