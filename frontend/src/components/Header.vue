<template>

<header>
    <img id="headerImg" :src="require('../assets/logoOfClub.png')"/>
    <div id="headerMenuDiv">
    <a href="#" class="headerItem">{{headerMenuNames[0]}}</a>
    <a href="#" class="headerItem">{{headerMenuNames[1]}}</a>
    <a href="#" class="headerItem">{{headerMenuNames[2]}}</a>
    <a href="#" class="headerItem">{{headerMenuNames[3]}}</a>
    <a href="#" class="headerItem">{{headerMenuNames[4]}}</a>
    <a href="#" class="headerItem">{{headerMenuNames[5]}}</a>
    <a href="#" class="headerItem">{{headerMenuNames[6]}}</a>
    <a href="#" class="headerItem">{{headerMenuNames[7]}}</a>   
    <router-link to="/login">Login</router-link>
    <router-link to="/">Home</router-link>

    <component :is="currentView" />
  </div>
  <div id="headerIconDiv">
  
    <div id="headerIcon">
        <img class="headerIcon" :src="require('../assets/profilePictureIcon.png')"/>
        <img class="headerIcon" :src="require('../assets/SearchIcon.png')" @click="(isOpened = !isOpened)"/>
    </div>
    <div id="searchInputDiv" v-if="isOpened" >
        <input type="text" v-model="text" id="searchInput">
    </div>
  </div>
      


</header>
<router-view/>
</template>

<script>

export default{
    name: 'Header',
 
    data(){
        return{
            isOpened: false, 
            headerMenuNames: ["Novosti", "Treninzi", "Raspored", "Treneri", "Cjenik", "Album", "Podrška", "O nama"]
        }
    },
    
}
</script>

<style lang="css">
#headerImg{
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
  padding:16px 15px;
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
</style>