import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Sidebar from '../components/Sidebar.vue';
import AddProduct from '../views/AddProduct.vue';
import AddCategory from '../views/AddCategory.vue';
import ItCorner from '../views/ItCorner.vue';
import Contact from '../views/Contact.vue';
import TableView from '../views/TableView.vue';
import ProductDetails from '../views/ProductDetails.vue';

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {   
            path: '/', 
            components: {
                default: TableView,
                leftsidebar:Sidebar
            }      
        },  
        {
            path:'/product/:id',
            name:'product',
            components: {
                default: ProductDetails,
                leftsidebar:Sidebar
            } 
        },

        // { 
        //     path: '/', 
        //     redirect: '/register' 
        // },
        {   
            path: '/register', 
            component: Register 
        },
        { 
            path: '/login', 
            component: Login 
        },
    
        { 
            path: '/addproduct', 
            components: {
                default: AddProduct,
                leftsidebar: Sidebar
            }
        },
        { 
            path: '/addcategory', 
            components: {
                default: AddCategory,
                leftsidebar: Sidebar
            }
        },
        { 
            path: '/itcorner', 
            components: {
                default: ItCorner,
                leftsidebar: Sidebar
            }
        },
        { 
            path: '/contact', 
            components: {
                default: Contact,
                leftsidebar: Sidebar
            } 
        },
        { 
            path: '/dashboard', 
            components: {
                default: Dashboard,
                leftsidebar: Sidebar
            }
        },
        { 
            path: '/home', 
            components: {
                default: Home,
                leftsidebar: Sidebar
            }
        },
        { 
            path: '/about', 
            components: {
                default: About,
                leftsidebar: Sidebar
            }
        },
    ]
});

export default router;
