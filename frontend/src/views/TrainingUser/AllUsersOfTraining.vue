<template>
    <div class="exercisesMainDiv">
        <div class="titleAndButton">
            <h1 class="exercisesTitle">Korisnici sa {{ Training.Title }} treninga </h1>
            <button class="addExercises"><router-link to="/addtrainingtouser">Dodaj! +</router-link></button>
        </div>
        <div class="exerciseCard">
            <table>
                <tr>
                    
                    <th>Korisničko ime</th>
                    <th>Datum treninga</th>
                    <th>Početak - Kraj</th>
                    <th >Akcije</th>
                </tr>
                <tr  v-for="ut in TrainingUsers" :key="ut.id">
                    <td>{{ ut.Username}}</td>
                    <td>{{ ut.DateOfTraining }}</td>
                    <td>{{ ut.startAt }} - {{ ut.EndsAt }}</td>
                    <td><router-link :to="{name: 'DeleteUserProgram', params: {id : up.id}}">Obrisi</router-link></td> 
                </tr>
        
            </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
export default{
name: 'AllUsersOfTraining',
data () {
    return {
        TrainingUsers: "",
        Training: ""
    }
},
mounted(){
      axios.get('/api/traininguser').then((res) => {
        this.TrainingUsers = res.data.output;
      })
      axios.get(`/api/training/${this.$route.params.id}`).then((res) => {
         this.Training = res.data.result;
      })
    }
}
</script>


<style>
</style>