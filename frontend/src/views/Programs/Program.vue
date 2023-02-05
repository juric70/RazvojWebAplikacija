<template>


    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
                {{ Program.Title }}
            </h1>
            <p>{{ Program.Description }}</p>
            <p>{{ Program.Cost }}</p>
            <p>{{ Program.Username }}</p>
            <button class="RegisterButton" >
                <router-link :to="{name: 'ModifyProgram'}">Uredi</router-link>
            </button>
            <button class="RegisterButton" >
                <router-link class="linkDeco" :to="{name: 'DeletePrograms'}">Obrisi</router-link> 
            </button>
        </div>
    </div>


</template>

<script>
import axios from '../../../axios.js';

export default{
    name: 'Program',
    data(){
        return{
            Program: ""
        }
    },
    mounted(){
        axios.get(`/api/program/${this.$route.params.id}`).then((res) => {
        this.Program = res.data.result;
    
       
      })
    }
}
</script>

<style>
.RegisterButton a{
    text-decoration: none;
    color: white;
    padding: 20px;
    padding-left: 70px;
    padding-right: 70px;
}
</style>