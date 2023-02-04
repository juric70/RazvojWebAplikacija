<template>

<header>
    <router-link to="/" class="headerImg"> <img class="headerImg" :src="require('../assets/KVSUM-Logo.png')"/></router-link>
   
    <div id="headerMenuDiv">
            <router-link class = "headerItem" to="/calendar">Raspored</router-link>
            <router-link class = "headerItem" to="/training">Trening</router-link>
            <router-link class = "headerItem" to="/coaches">Treneri</router-link>
            <router-link class = "headerItem" to="/membership">Članarina</router-link>
            <router-link class = "headerItem" to="/support">Podrška</router-link>
    </div>
  <div id="headerIconDiv">
    <div id="headerIcon">
        <img class="headerIcon dropdownMenuIcon" :src="require('../assets/menuIcon.png')" @click="(isOpenedMenu = !isOpenedMenu)" />
    </div>
    <div id="searchInputDiv" v-if="isOpened" >
        <input type="text" v-model="text" id="searchInput">
    </div>
    <SideBar v-if="isOpenedMenu" @click="(isOpenedMenu = !isOpenedMenu)"></SideBar>
  </div>

  <div class="dropdownProfileCoachAdmin">
    <div class="dropdownButton">
        <button class="dropbtn">Admin Alati</button>
        <div class="dropdown-content">
            <button class="dropdownRouterButton"><router-link  to="/allnews" >Novosti</router-link></button>
            <button class="dropdownRouterButton"><router-link  to="/createuser" >Kreiraj Korisnika</router-link></button>
        </div>
        </div>
        <div class="dropdownButton">
        <button class="dropbtn">Trener Alati</button>
        <div class="dropdown-content">
            <button class="dropdownRouterButton"><router-link  to="/categories" >Kategorije</router-link></button>
            <button class="dropdownRouterButton"><router-link  to="/exercises" >Vježbe</router-link></button>
            <button class="dropdownRouterButton"><router-link  to="/Trainings" >Trening</router-link></button>
        </div>
        </div>
        <div class="dropdownButton">
        <button class="dropbtn">Profil</button>
        <div class="dropdown-content">
            <button v-if="store?.user != null" class="dropdownRouterButton"><router-link  to="/profile" >Profil</router-link></button>
            <button v-if="store?.user == null" class="dropdownRouterButton"><router-link class = "" to="/login">Login</router-link></button>
            <button v-if="store?.user != null" class="dropdownRouterButton"><router-link class = "" to="/logout">Logout</router-link></button>
        </div>
    </div>
    </div>
        
</header>
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
            isOpenedMenu: false,
            store
        }
    },
   
    mounted(){
        console.log(this.store);
    },
    
}
</script>

<style lang="css">
.headerImg{
    /* Visinu postavit da se slika ne deformira vec sa se smanjuje jednako sa svake strane */
    margin-left: 1%;
    width: 60px;
    height: 60px;
    float: left;
}
header{
    position: fixed;
    opacity: 0.95;
    width: 100%;
    z-index: 99;
    font-weight: bold;
    background-color:  #03A9F4;
    height: 60px;
}
.headerButton{
    height: 40px;
    width: 125px;
    border: solid 0.5px #03A9F4;
    background-color: #03A9F4;
    font-weight: bold;
    border-radius: 2px;
    display: block;
}
.headerButton a{
    text-decoration: none;
    color: black;
    padding: 10px;
}
.headerButton a:hover{
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
    display: inline;
    float: left;
}
header a:hover{
    color:  white;
}
#headerIconDiv{
    display: inline;
}
.headerIcon{
    width: 17px;
    height: 15px;
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
    padding: 21.6px 15px;
}
.dropdownMenuIcon{
    display: none;
}
#profileOptions{
    float: right;
    display: inline;
    margin-top: 60px;
    z-index: 4;
}

.dropdownProfileCoachAdmin{
    float: right;
}
.dropbtn {
    height: 60px;
    background: inherit;
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
    font-weight: bold;
}
.dropdownButton {
    position: relative;
    display: inline-block;
}
.dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
}
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-weight: bold;
}
.dropdown-content a:hover {
    color: white;
}
.dropdownButton:hover .dropdown-content {
    display: block;
}
.dropdownButton:hover .dropbtn {
    color: white;
}
.dropdownRouterButton{
    width: 100%;
    border: solid 0px;
    background-color: lightblue;
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