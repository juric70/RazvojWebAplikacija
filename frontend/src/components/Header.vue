<template>

<header>
    <router-link to="/" class="headerImg"> <img class="headerImg" :src="require('../assets/logoOfClub.png')"/></router-link>
   
    <div id="headerMenuDiv">
        
            <a href="#" class="headerItem">{{headerMenuNames[1]}}</a>
            <a href="#" class="headerItem">{{headerMenuNames[2]}}</a>
            <a href="#" class="headerItem">{{headerMenuNames[3]}}</a>
            <a href="#" class="headerItem">{{headerMenuNames[4]}}</a>
            <a href="#" class="headerItem">{{headerMenuNames[6]}}</a>
            <router-link  class= "headerItem" to="/login">Login</router-link>
            <router-link  class= "headerItem" to="/createNews">Napravi novost!</router-link>
            <router-link  class= "headerItem" to="/aboutUs">O nama</router-link>
    </div>
  <div id="headerIconDiv">
    <div id="headerIcon">
        <router-link to="/profile" class="headerIcon" > <img class="headerIcon" id="headerIconProfile" :src="require('../assets/profilePictureIcon.png')"/></router-link>
       
        <img class="headerIcon" :src="require('../assets/SearchIcon.png')" @click="(isOpened = !isOpened)"/>
        <img class="headerIcon dropdownMenuIcon" :src="require('../assets/menuIcon.png')" @click="(isOpenedMenu = !isOpenedMenu)" />

    </div>
    <div id="searchInputDiv" v-if="isOpened" >
        <input type="text" v-model="text" id="searchInput">
    </div>
    <SideBar v-if="isOpenedMenu" @click="(isOpenedMenu = !isOpenedMenu)"></SideBar>
  </div>
      


</header>

</template>

<script>
import SideBar from './SideBar.vue'
export default{
    name: 'Header',
    components:{
        SideBar
    },
    data(){
        return{
            isOpened: false, 
            isOpenedMenu: false,
            headerMenuNames: ["Novosti", "Treninzi", "Raspored", "Treneri", "Cjenik", "Album", "Podrška", "login", "o nama"]
        }
    },
    
}
</script>

<style lang="css">
.headerImg{
    width: 60px;
    height: 50px;
    float: left;
}
header{
    position: fixed;
    opacity: 0.95;
    width: 100%;
    z-index: 99;
  font-weight: bold;
  background-color:  #03A9F4;
  height: 48px;
  overflow: hidden;
}button{
    background-color: #03A9F4;
    border: 0;
}
header a{
  display:inline-block;

  color: #333333;
  text-decoration: none;
}
#headerMenuDiv{
  margin: auto;
  width: 70%;
  padding: 10px;
  display: inline;
}
header a:hover{
    color:  white;

}
#headerIconDiv{
    display: inline;
}
.headerIcon{
    width: 25px;
    height: 25px;
    float: right;
    padding:15px 15px;

}
#headerIcon{
    display: inline;
    float: right;
    padding: 0;
}
#searchInputDiv{
    padding:9px 15px;
    display: inline;
    margin-left: px;
    float: right;
}
#searchInput{
    width: 200px;
    padding:6px;
    border-radius: 15px;
    border: 1px solid lightgrey;
}
#searchInput:focus{
    outline: none;
}
.headerItem{
    padding:16px 15px;
}
#headerIconProfile{
    padding: 0;
}
.dropdownMenuIcon{
    display: none;
}
@media (max-width: 800px) {
    .headerItem{
        display: none;
    }
    .dropdownMenuIcon{
        display: inline;
    }
}

</style>