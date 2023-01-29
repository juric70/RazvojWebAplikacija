<template>
    <div id="sider">
      <div id="siderCenter">
      <RouterLink class="sideBarRouterLinks" to="/training">Treninzi</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/">Raspored</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/">Treneri</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/">Cjenik</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/">Album</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/createUser">Kreiraj korisnika</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/login">Login</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/aboutUs">O nama</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/createNews">Napravi novost</RouterLink>
      <RouterLink class="sideBarRouterLinks" to="/exercises">Vježbe</RouterLink>

      </div>
    </div>
  </template>
  
  <script>
  export default{
    name: "Sider",
    data() {
      return{
        isOpened: false
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
  