import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Register from "../views/Register.vue";
import AboutUs from "../views/AboutUs.vue";
import Profile from "../views/Profile.vue";
import CreateUserWithRoles from "../views/CreateUserWithRoles.vue";
import Coaches from "../views/Coaches/Coaches.vue";

import Calendar from "../views/Calendar.vue";

import Training from "../views/Training.vue";

import Exercises from "../views/Exercises/Exercises.vue";
import Exercise from "../views/Exercises/Exercise.vue";
import AddExercise from "../views/Exercises/AddExercise.vue";
import DeleteExercise from "../views/Exercises/DeleteExercise.vue";
import ModifyExercise from "../views/Exercises/ModifyExercise.vue";

import CreateNews from "../components/CreatingNews.vue";
import AllNews from "../views/News/AllNews.vue";
import DeleteNews from "../views/News/DeleteNews.vue";
import ModifyNews from "../views/News/ModifyNews.vue";
import OneNew from "../views/News/OneNew.vue";

import AddCategory from "../views/Categories/AddCategory.vue";
import Categories from "../views/Categories/Categories.vue";
import Category from "../views/Categories/Category.vue";
import ModifyCategory from "../views/Categories/ModifyCategory.vue";
import DeleteCategory from "../views/Categories/DeleteCategory.vue";

import Trainings from "../views/Trainings/Trainings.vue";
import AddTraining from "../views/Trainings/AddTraining.vue";
import OneTraining from "../views/Trainings/OneTraining.vue";
import DeleteTraining from "../views/Trainings/DeleteTraining.vue";
import ModifyTraining from "../views/Trainings/ModifyTraining.vue";

import FullTraining from "../views/TrainingExercises/FullTraining.vue";
import AddExerciseToTraining from "../views/TrainingExercises/AddExercisesToTraining.vue";
import ModifyExerciseForTraining from "../views/TrainingExercises/ModifyExerciseForTraining.vue";
import DeleteExerciseForTraining from "../views/TrainingExercises/DeleteExerciseForTraining.vue";

import Program from "../views/Programs/Program.vue";
import AddPrograms from "../views/Programs/AddPrograms.vue";
import ModifyProgram from "../views/Programs/ModifyProgram.vue";
import DeletePrograms from "../views/Programs/DeletePrograms.vue";
import Programs from "../views/Programs/Programs.vue";

import AddUserToProgram from "../views/UsersPrograms/AddUserToProgram.vue";
import AllProgramsOfUser from "../views/UsersPrograms/AllProgramsOfUser.vue";
import AllUsersOfProgram from "../views/UsersPrograms/AllUsersOfProgram.vue";
import AllUsersPrograms from "../views/UsersPrograms/AllUsersPrograms.vue";
import DeleteUserProgram from "../views/UsersPrograms/DeleteUserProgram.vue";
import ModifyPayment from "../views/UsersPrograms/ModifyPayment.vue";
import ModifyProgramForUser from "../views/UsersPrograms/ModifyProgramForUser.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/aboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/createNews",
    name: "CreateNews",
    component: CreateNews,
  },
  {
    path: "/createuser",
    name: "CreateUserWithRoles",
    component: CreateUserWithRoles,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/training",
    name: "Training",
    component: Training,
  },

  {
    path: "/exercises",
    name: "Exercises",
    component: Exercises,
  },
  {
    path: "/exercise/:id",
    name: "Exercise",
    component: Exercise,
  },
  {
    path: "/addexercise",
    name: "AddExercise",
    component: AddExercise,
  },
  {
    path: "/deleteexercise/:id",
    name: "DeleteExercise",
    component: DeleteExercise,
  },
  {
    path: "/modifyexercise/:id",
    name: "ModifyExercise",
    component: ModifyExercise,
  },

  {
    path: "/allnews",
    name: "Allnews",
    component: AllNews,
  },
  {
    path: "/deletnews/:id",
    name: "DeleteNews",
    component: DeleteNews,
  },
  {
    path: "/modifynews/:id",
    name: "ModifyNews",
    component: ModifyNews,
  },
  {
    path: "/new/:id",
    name: "OneNew",
    component: OneNew,
  },

  {
    path: "/addcat",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
  },
  {
    path: "/modifycategory/:id",
    name: "ModifyCategory",
    component: ModifyCategory,
  },
  {
    path: "/deletecategory/:id",
    name: "DeleteCategory",
    component: DeleteCategory,
  },

  {
    path: "/addtraining",
    name: "AddTraining",
    component: AddTraining,
  },
  {
    path: "/trainings",
    name: "Trainings",
    component: Trainings,
  },
  {
    path: "/training/:id",
    name: "OneTraining",
    component: OneTraining,
  },
  {
    path: "/modtraining/:id",
    name: "ModifyTraining",
    component: ModifyTraining,
  },
  {
    path: "/deltraining/:id",
    name: "DeleteTraining",
    component: DeleteTraining,
  },

  {
    path: "/fullTraining/:id",
    name: "FullTraining",
    component: FullTraining,
  },
  {
    path: "/addexetotr/:id",
    name: "AddExerciseToTraining",
    component: AddExerciseToTraining,
  },
  {
    path: "/modexetotr/:id",
    name: "ModifyExerciseForTraining",
    component: ModifyExerciseForTraining,
  },
  {
    path: "/delexetotr/:id",
    name: "DeleteExerciseForTraining",
    component: DeleteExerciseForTraining,
  },
  {
    path: "/coaches",
    name: "Coaches",
    component: Coaches,
  },

  {
    path: "/addprogram",
    name: "AddPrograms",
    component: AddPrograms,
  },
  {
    path: "/programs",
    name: "Programs",
    component: Programs,
  },
  {
    path: "/program/:id",
    name: "Program",
    component: Program,
  },
  {
    path: "/modifyprogram/:id",
    name: "ModifyProgram",
    component: ModifyProgram,
  },
  {
    path: "/deleteprograms/:id",
    name: "DeletePrograms",
    component: DeletePrograms,
  },

  {
    path: "/addtoprogram",
    name: "AddUserToProgram",
    component: AddUserToProgram,
  },
  {
    path: "/programsofuser/:id",
    name: "AllProgramsOfUser",
    component: AllProgramsOfUser,
  },
  {
    path: "/usersofprogram/:id",
    name: "AllUsersOfProgram",
    component: AllUsersOfProgram,
  },
  {
    path: "/usersprograms",
    name: "AllUsersPrograms",
    component: AllUsersPrograms,
  },
  {
    path: "/delmembership/:id",
    name: "DeleteUserProgram",
    component: DeleteUserProgram,
  },
  {
    path: "/editmembership/:id",
    name: "ModifyProgramForUser",
    component: ModifyProgramForUser,
  },
  {
    path: "/editpayment/:id",
    name: "ModifyPayment",
    component: ModifyPayment,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
