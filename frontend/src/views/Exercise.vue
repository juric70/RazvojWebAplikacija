<template>


    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
                {{ Exercise.Title }}
            </h1>
            <p>{{ Exercise.Description }}</p>

<p>{{ Exercise.Username }}</p>
<p>{{ Exercise.CreationDate }}</p>
<button class="RegisterButton" >
    <router-link :to="{name: 'ModifyExercise'}">Uredi</router-link>
</button>
<button class="RegisterButton" >
    <router-link class="linkDeco" :to="{name: 'DeleteExercise'}">Obrisi</router-link> 

</button>
 
            
        </div>
    </div>



</template>
<script>
import axios from 'axios';

export default{
    name: 'Exercise',
    data(){
        return{
            Exercise: ""
        }
    },
    mounted(){
        axios.get(`/api/exercise/${this.$route.params.id}`).then((res) => {
        this.Exercise = res.data.result;
    
       
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