<template>

<header>
    <router-link to="/" class="headerImg"> <img class="headerImg" :src="require('../assets/logoOfClub.png')"/></router-link>
   
    <div id="headerMenuDiv">
        
            <a href="#" class = "headerItem">{{headerMenuNames[1]}}</a>
            <a href="#" class = "headerItem">{{headerMenuNames[2]}}</a>
            <a href="#" class = "headerItem">{{headerMenuNames[3]}}</a>
            <a href="#" class = "headerItem">{{headerMenuNames[4]}}</a>
            <a href="#" class = "headerItem">{{headerMenuNames[6]}}</a>
          
            <router-link class = "headerItem" to="/aboutUs">O nama</router-link>
            <router-link class = "headerItem" to="/calendar">Raspored</router-link>
            <router-link class = "headerItem" to="/training">Treninzi</router-link>
            <router-link class = "headerItem" to="/allnews"  v-if="store?.user?.role == 2 || store?.user?.role == 1">Novosti</router-link>
            <router-link class = "headerItem" to="/exercises" v-if="store?.user?.role == 2 || store?.user?.role == 1">Vjezbe</router-link>
            <router-link class = "headerItem" to="/trainings" v-if="store?.user?.role == 2 || store?.user?.role == 1">Treninzi</router-link>
            <router-link class = "headerItem" to="/categories"  v-if="store?.user?.role == 2 || store?.user?.role == 1">Categorije</router-link>
            <router-link class = "headerItem" to="/createuser" v-if="store?.user?.role == 1">Kreiraj korisnika!</router-link>

           

    </div>
  <div id="headerIconDiv">
    <div id="headerIcon">
       <img class="headerIcon" id="headerIconProfile" :src="require('../assets/profilePictureIcon.png')"  @click="(isOpenedProfile = !isOpenedProfile)"/>
        <img class="headerIcon" :src="require('../assets/SearchIcon.png')" @click="(isOpened = !isOpened)"/>
        <img class="headerIcon dropdownMenuIcon" :src="require('../assets/menuIcon.png')" @click="(isOpenedMenu = !isOpenedMenu)" />
    </div>
    <div id="searchInputDiv" v-if="isOpened" >
        <input type="text" v-model="text" id="searchInput">
    </div>
    <SideBar v-if="isOpenedMenu" @click="(isOpenedMenu = !isOpenedMenu)"></SideBar>
  </div>
        
</header>
<div v-if="isOpenedProfile" @click="(isOpenedProfile = !isOpenedProfile)" id="profileOptions">
 <button v-if="store?.user != null" class="headerButton"> <router-link  to="/profile" >Profil</router-link></button>
   
   <button v-if="store?.user == null" class="headerButton"><router-link class = "" to="/login" style="padding: 2px;" >Login</router-link></button>
    
   
    <button v-if="store?.user != null" class="headerButton"> <router-link class = "" to="/logout" style="padding: 2px;" >Logout</router-link></button>
    
       
</div>
</template>

<script>
import SideBar from './SideBar.vue'
import {store} from '../../store.js'
export default{
    name: 'Header',
    components:{
        SideBar
    },
    data(){
        return{
            isOpened: false, 
            isOpenedMenu: false,
            isOpenedProfile: false,
            headerMenuNames: [ "Treneri", "Cjenik", "Album", "Podrška", ],
            store
        }
    },
   
    mounted(){
        console.log(this.store);
    }
    
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
}
.headerButton{
    height: 40px;
    width: 125px;
    border: solid 0.5px #03A9F4;
    border-bottom:solid 0.5px black ;
    background-color: #03A9F4;
    font-weight: bold;
    border-radius: 2px;
    display: block;
}
.headerButton a{
    text-decoration: none;
    color: white;
    padding: 10px;
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
.dropdownMenuIcon{
    display: none;
}
#profileOptions{
    
    float: right;
    display: inline;
    margin-top: 50px;
    
    border: solid;
    position: relative;
    z-index: 4;
    margin-right: 5px;
    border-radius: 5px;
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