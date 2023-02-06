<template>
    <div class="exercisesMainDiv">
        <div class="titleAndButton">
            <h1 class="exercisesTitle">Treninzi od korisnika: </h1>
            <button  v-if="store?.user?.role === 1 || store?.user?.role === 2" class="addExercises"><router-link to="/addtruser">Dodaj! +</router-link></button>
        </div>
        <div class="exerciseCard">
            <table>
                <tr>
                    <th>Username korisnika </th>
                    <th>Naziv treninga</th>
                    <th>Datum treninga</th>
                    <th>Početak - Kraj</th>
                    <th  v-if="store?.user?.role === 1 || store?.user?.role === 2" >Akcije</th>
                </tr>
                <tr  v-for="ut in TrainingUsers" :key="ut.id">
                    <td>{{ ut.Username }}</td>
                    <td>{{ ut.TrainingTitle}}</td>
                    <td>{{ ut.DateOfTraining }}</td>
                    <td>{{ ut.startAt }} - {{ ut.EndsAt }}</td>
                    <td  v-if="store?.user?.role === 1 || store?.user?.role === 2"><router-link :to="{name: 'DeleteTrainingUser', params: {id : ut.id}}">Obrisi</router-link></td> 
                </tr>
        
            </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
import {store} from "../../../store.js"
export default{
name: 'AllTrainingsUsers',
data () {
    return {
        TrainingUsers: "",
        store
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