<template>


    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
                {{ Training.Title }}
            </h1>
            <p>{{ Training.Username }}</p>
            <p>{{ Training.category }}</p>
            <p>{{ Training.CreationDate }}</p>
            <button class="RegisterButton" >
                <router-link :to="{name: 'ModifyTraining'}">Uredi</router-link>
            </button>
            <button class="RegisterButton" >
                <router-link class="linkDeco" :to="{name: 'DeleteTraining'}">Obrisi</router-link> 
            </button>
        </div>
    </div>


</template>

<script>
import axios from 'axios';

export default{
    name: 'OneTraining',
    data(){
        return{
            Training: ""
        }
    },
    mounted(){
        axios.get(`/api/training/${this.$route.params.id}`).then((res) => {
        this.Training = res.data.result;
    
       
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