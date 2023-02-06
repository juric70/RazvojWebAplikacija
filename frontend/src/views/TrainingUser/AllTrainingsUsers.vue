<template>
    <div class="exercisesMainDiv">
        <button class="addExercises"><router-link to="/addtruser">Dodaj! +</router-link></button>
        <h1 class="exercisesTitle">Treninzi od korisnika: </h1>
        <div class="exerciseCard">
            <table>
                <tr>
                    <th>Username korisnika </th>
                    <th>Naziv treninga</th>
                    <th>Datum treninga</th>
                    <th>Početak - Kraj</th>
                    <th >Akcije</th>
                </tr>
                <tr  v-for="ut in TrainingUsers" :key="ut.id">
                    <td>{{ ut.Username }}</td>
                    <td>{{ ut.TrainingTitle}}</td>
                    <td>{{ ut.DateOfTraining }}</td>
                    <td>{{ ut.startAt }} - {{ ut.EndsAt }}</td>
                    <td><router-link :to="{name: 'DeleteTrainingUser', params: {id : ut.id}}">Obrisi</router-link></td> 
                </tr>
        
            </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
export default{
name: 'AllTrainingsUsers',
data () {
    return {
        TrainingUsers: ""
    }
},
mounted(){
      axios.get('/api/trainingsusers').then((res) => {
        this.TrainingUsers = res.data.output;
      })
    }
}
</script>


<style>
</style>