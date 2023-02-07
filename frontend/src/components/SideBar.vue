<template>
    <div id="sider">
      <div id="siderCenter">
      
      <RouterLink class="sideBarRouterLinks" to="/calendar">Raspored</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/training">Treninzi</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/trusers">Moji Treninzi!</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/coaches">Treneri</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/programs">Programi</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/profile">Profil</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/aboutUs">O nama</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/createUser" v-if=" store?.user?.role == 1">Kreiraj korisnika</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/" v-if="store?.user?.role == 2 || store?.user?.role == 1">Vježbe</RouterLink>
      <router-link class="sideBarRouterLinks" to="/allnews" v-if="store?.user?.role == 2 || store?.user?.role == 1">Sve novosti</router-link>
      <RouterLink class="sideBarRouterLinks" to="/trainings" v-if="store?.user?.role == 2 || store?.user?.role == 1">Treninzi</RouterLink>

      <RouterLink  v-if="store?.user == null" class="sideBarRouterLinks" to="/login">Login</RouterLink>
      <RouterLink v-if="store?.user != null" class="sideBarRouterLinks" to="/profile">Profile</RouterLink>
      <RouterLink  v-if="store?.user != null" class="sideBarRouterLinks" to="/logout">Logout</RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  import {store} from '../../store.js'
  export default{
    name: "Sider",
    data() {
      return{
        isOpened: false,
        store
      }
    }
  
  }
  </script>
  
  <style scoped>
  .siderMenuItem:hover{
  
    background-color: #03A9F4;
    color: #111111;
  }
  #sider{
    
   
    position: fixed;
    z-index: 2;
    height: 100%;
    top: 48px;
   background-color: #111111;
    width: 100%;
  
  }
  #sider a{
    text-decoration: none;
    color: lightgrey;
  }
  #siderCenter
  
  .sideBarRouterLinks:hover{
    background-color: #03A9F4;
    color: #111111;
  }
  .sideBarRouterLinks{
    display: block;
    width: 100%;
    display: block;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  
  </style>
  