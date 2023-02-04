import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import AboutUs from '../views/AboutUs.vue'
import Profile from '../views/Profile.vue'
import CreateUserWithRoles from '../views/CreateUserWithRoles.vue'
import Coaches from '../views/Coaches/Coaches.vue'
import Membership from '../views/Membership/Membership.vue'
import Support from '../views/Support/Support.vue'


import Calendar from '../views/Calendar.vue'

import Training from '../views/Training.vue'

import Exercises from '../views/Exercises/Exercises.vue'
import Exercise from '../views/Exercises/Exercise.vue'
import AddExercise from '../views/Exercises/AddExercise.vue'
import DeleteExercise from '../views/Exercises/DeleteExercise.vue'
import ModifyExercise from '../views/Exercises/ModifyExercise.vue'

import CreateNews from '../components/CreatingNews.vue'
import AllNews from '../views/News/AllNews.vue'
import DeleteNews from '../views/News/DeleteNews.vue'
import ModifyNews from '../views/News/ModifyNews.vue'
import OneNew from '../views/News/OneNew.vue'

import AddCategory from '../views/Categories/AddCategory.vue'
import Categories from '../views/Categories/Categories.vue'
import Category from '../views/Categories/Category.vue'
import ModifyCategory from '../views/Categories/ModifyCategory.vue'
import DeleteCategory from '../views/Categories/DeleteCategory.vue'

import Trainings from '../views/Trainings/Trainings.vue'
import AddTraining from '../views/Trainings/AddTraining.vue'
import OneTraining from '../views/Trainings/OneTraining.vue'
import DeleteTraining from '../views/Trainings/DeleteTraining.vue'
import ModifyTraining from '../views/Trainings/ModifyTraining.vue'

import FullTraining from '../views/TrainingExercises/FullTraining.vue'
import AddExerciseToTraining from '../views/TrainingExercises/AddExercisesToTraining.vue'
import ModifyExerciseForTraining from '../views/TrainingExercises/ModifyExerciseForTraining.vue'
import DeleteExerciseForTraining from '../views/TrainingExercises/DeleteExerciseForTraining.vue'

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

  {
    path: '/addtraining',
    name: 'AddTraining',
    component: AddTraining,
  },
  {
    path: '/trainings',
    name: 'Trainings',
    component: Trainings,
  },
  {
    path: '/training/:id',
    name: 'OneTraining',
    component: OneTraining,
  },
  {
    path: '/modtraining/:id',
    name: 'ModifyTraining',
    component: ModifyTraining,
  },
  {
    path: '/deltraining/:id',
    name: 'DeleteTraining',
    component: DeleteTraining,
  },

  {
    path: '/fullTraining/:id',
    name: 'FullTraining',
    component: FullTraining
  },
  {
    path: '/addexetotr/:id',
    name: 'AddExerciseToTraining',
    component: AddExerciseToTraining
  },
  {
    path: '/modexetotr/:id',
    name: 'ModifyExerciseForTraining',
    component: ModifyExerciseForTraining
  },
  {
    path: '/delexetotr/:id',
    name: 'DeleteExerciseForTraining',
    component: DeleteExerciseForTraining
  },
  {
    path: '/coaches',
    name: 'Coaches',
    component: Coaches
  },
  {
    path: '/membership',
    name: 'Membership',
    component: Membership
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
