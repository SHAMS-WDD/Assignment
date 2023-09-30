import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Sidebar from '../components/Sidebar.vue';
import AllPosts from '../views/AllPosts.vue';
import Science from '../views/Science.vue';
import Education from '../views/Education.vue';
import ItCorner from '../views/ItCorner.vue';
import Contact from '../views/Contact.vue';

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        { 
            path: '/', 
            redirect: '/register' 
        },
        {   
            path: '/register', 
            component: Register 
        },
        { 
            path: '/login', 
            component: Login 
        },
        { 
            path: '/posts', 
            components: {
                default: AllPosts,
                leftsidebar: Sidebar
            }
        },
        { 
            path: '/science', 
            components: {
                default: Science,
                leftsidebar: Sidebar
            }
        },
        { 
            path: '/education', 
            components: {
                default: Education,
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
    ]
});

export default router;
