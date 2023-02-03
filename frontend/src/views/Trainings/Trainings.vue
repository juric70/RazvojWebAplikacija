<template>
    <div class="exercisesMainDiv">
        <button class="addExercises"><router-link to="/addtraining">Dodaj! +</router-link></button>
        <h1 class="exercisesTitle">Treninzi</h1>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Cijeli trening</th>
            <th>Kreator</th>
            <th>Kategorija</th>
            <th colspan="2">Akcije</th>
        </tr>
        <tr  v-for="training in Trainings" :key="training.id">
             <td><router-link :to = "{name: 'FullTraining', params: {id: training.id}}">{{ training.Title }}</router-link></td> 
            <td>{{ training.Username}}</td>
            <td>{{ training.category}}</td>
            <td><router-link :to="{name: 'ModifyTraining', params: {id : training.id}}">Uredi</router-link></td>
            <td><router-link :to="{name: 'DeleteTraining', params: {id : training.id}}">Obrisi</router-link></td>  
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
export default{
name: 'Trainings',
data () {
    return {
        Trainings: ""
    }
},
mounted(){
      axios.get('/api/trainings').then((res) => {
        this.Trainings = res.data.training;
       
      
      })
    }
}
</script>


<style>
</style>