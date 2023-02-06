<template>

<header>
    
   
    
  <div id="headerIconDiv">
    <div id="headerIcon">
        <img class="headerIcon dropdownMenuIcon" :src="require('../assets/menuIcon.png')" @click="(isOpenedMenu = !isOpenedMenu)" />
    </div>
    <SideBar v-if="isOpenedMenu" @click="(isOpenedMenu = !isOpenedMenu)"></SideBar>
  </div>









    <div class="headerComponents">
        <div class="headerLogo">
            <router-link to="/"><img class="headerLogo" :src="require('../assets/KVSUM-Logo.png')"/></router-link>
        </div>

        <div class="headerButtonOne">
            <router-link class = "headerItem" to="/calendar">Raspored</router-link>
            <router-link class = "headerItem" to="/training">Treninzi</router-link>
            <router-link v-if="store?.user != null " class = "headerItem" :to="{name: 'AllTrainingsOfUser', params: {id: store?.user?.id}}">Moji treninzi!</router-link>
            <router-link class = "headerItem" to="/coaches">Treneri</router-link>
            <router-link class = "headerItem" to="/programs">Programi</router-link>
           
        </div>

        <div class="headerButtonTwo">
            <div class="dropdownButton">
                <button class="dropbtn">Admin Alati</button>
                <div class="dropdown-content">
                    <button class="dropdownRouterButton"><router-link  to="/allnews" >Novosti</router-link></button>
                    <button class="dropdownRouterButton"><router-link  to="/createuser" >Kreiraj Korisnika</router-link></button>
                    <button class="dropdownRouterButton"><router-link  to="/programs" >Programi</router-link></button>
                    <button class="dropdownRouterButton"><router-link :to="{name: 'AllUsersPrograms'}">Članstva</router-link></button>
                </div>
                </div>
                <div class="dropdownButton">
                <button class="dropbtn">Trener Alati</button>
                <div class="dropdown-content">
                    <button class="dropdownRouterButton"><router-link  to="/categories" >Kategorije</router-link></button>
                    <button class="dropdownRouterButton"><router-link  to="/exercises" >Vježbe</router-link></button>
                    <button class="dropdownRouterButton"><router-link  to="/Trainings" >Trening</router-link></button>
                    <button class="dropdownRouterButton"><router-link  :to="{name:'AllTrainingsUsers'}" >Privatni treninzi</router-link></button>
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

<style>
header{
    background-color: #e6e6e6;
    width: 100%;
    height: 60px;
    font-weight: bold;
    display: table;
    margin-bottom: 20px;
}
/* .headerComponents{
    display: flex;
} */
.headerLogo{
    margin-left: 1%;
    width: 60px;
    height: 60px;
    float: left;
}
.headerButtonOne{
    display: inline;
    float: left;
}
.headerItem{
    display:inline-block;
    color: #01427b;
    text-decoration: none;
    padding: 20.8px 16px;
}
.headerItem:hover{
    color:  #e6373a;
}
.headerButtonTwo{
    float: right;
}
.dropdownButton {
    position: relative;
    display: inline-block;
}
.dropdownButton:hover .dropdown-content {
    display: block;
}
.dropdownButton:hover .dropbtn {
    color: #e6373a;
}
.dropbtn {
    height: 60px;
    background: inherit;
    color: #01427b;
    padding: 16px;
    font-size: 16px;
    border: none;
    font-weight: bold;
}
.dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
}
.dropdown-content a {
    color: #01427b;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-weight: bold;
}
.dropdown-content a:hover {
    color: #e6373a;
}
.dropdownRouterButton{
    width: 100%;
    border: solid 0px;
    background-color: #e6e6e6;
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