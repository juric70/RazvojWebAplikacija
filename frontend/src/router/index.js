import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AboutUs from '../views/AboutUs.vue'
import Profile from '../views/Profile.vue'
import CreateNews from '../components/CreatingNews.vue'




const routes = [
   {
    path: '/',
     name: 'Home',
     component: Home,
   },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/createNews',
    name: 'CreateNews',
    component: CreateNews,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
