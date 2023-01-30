import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import AboutUs from '../views/AboutUs.vue'
import Profile from '../views/Profile.vue'
import CreateUserWithRoles from '../views/CreateUserWithRoles.vue'
import CreateNews from '../components/CreatingNews.vue'
import Calendar from '../views/Calendar.vue'
import Training from '../views/Training.vue'
import Exercises from '../views/Exercises.vue'
import Exercise from '../views/Exercise.vue'
import AddExercise from '../views/AddExercise.vue'
import DeleteExercise from '../views/DeleteExercise.vue'
import ModifyExercise from '../views/ModifyExercise.vue'
import AllNews from '../views/AllNews.vue'
import DeleteNews from '../views/DeleteNews.vue'
import ModifyNews from '../views/ModifyNews.vue'
import OneNew from '../views/OneNew.vue'
import AddCategory from '../views/AddCategory.vue'
import Categories from '../views/Categories.vue'
import Category from '../views/Category.vue'
import ModifyCategory from '../views/ModifyCategory.vue'
import DeleteCategory from '../views/DeleteCategory.vue'


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
    path: '/logout',
    name: 'Logout',
    component: Logout,
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
  {
    path: '/createuser',
    name: 'CreateUserWithRoles',
    component: CreateUserWithRoles,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/training',
    name: 'Training',
    component: Training,
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: Exercises,
  },
  {
    path: '/exercise/:id',
    name: 'Exercise',
    component: Exercise,
  },
  {
    path: '/addexercise',
    name: 'AddExercise',
    component: AddExercise,
  },
  {
    path: '/deleteexercise/:id',
    name: 'DeleteExercise',
    component: DeleteExercise,
  },
  {
    path: '/modifyexercise/:id',
    name: 'ModifyExercise',
    component: ModifyExercise,
  },
  {
    path: '/allnews',
    name: 'Allnews',
    component: AllNews,
  },
  {
    path: '/deletnews/:id',
    name: 'DeleteNews',
    component: DeleteNews,
  },
  {
    path: '/modifynews/:id',
    name: 'ModifyNews',
    component: ModifyNews,
  },
  {
    path: '/new/:id',
    name: 'OneNew',
    component: OneNew,
  },
  {
    path: '/addcat',
    name: 'AddCategory',
    component: AddCategory,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
  },
  {
    path: '/modifycategory/:id',
    name: 'ModifyCategory',
    component: ModifyCategory,
  },
  {
    path: '/deletecategory/:id',
    name: 'DeleteCategory',
    component: DeleteCategory,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
