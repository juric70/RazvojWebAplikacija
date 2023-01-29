<template>
    <div class="exercisesMainDiv">
        <button class="addExercises"><router-link to="/addExercise">Dodaj vježbu</router-link></button>
        <h1>Vjezbe</h1>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Naziv Vjezbe</th>
            <th>Opis Vjezbe</th>
            <th>Kreator Vjezbe</th>
            <th colspan="2">Akcije</th>
        </tr>
        <tr  v-for="exercise in Exercises" :key="exercise.id">
            <td><router-link :to = "{name: 'Exercise', params: {id: exercise.id}}">{{ exercise.Title }}</router-link></td>
            <td>{{ exercise.Description }}</td>
            <td>{{ exercise.Username}}</td>
            <td><router-link :to="{name: 'ModifyExercise', params: {id : exercise.id}}">Uredi</router-link></td>
            <td><router-link :to="{name: 'DeleteExercise', params: {id : exercise.id}}">Obrisi</router-link></td>
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default{
name: 'Exercises',
data () {
    return {
        Exercises: ""
    }
},
mounted(){
      axios.get('/api/exercises').then((res) => {
        this.Exercises = res.data.exercises;
        console.log(" ovdje su vjezbe koje dobije", this.Exercises);
        for(var i =0; i<this.Exercises.length; i++){
         
          console.log (this.Exercises[i].Title,  "  OIWEJIOWE "   );
        }
      })
    }
}
</script>


<style>

table, th, td {
    padding: 7px;
    border-bottom: solid 1px #03A9F4;
    border-collapse: collapse;
   
}
body{
    margin-top: 0%;
}
.exercisesMainDiv{
    padding-top: 60px;
}
.addExercises{
    float: right;
    height: 40px;
width: 13%;
margin: 10px;
border-radius: 15px;
border: solid 1px #03A9F4;
background-color: #03A9F4;
font-weight: bold;
}
.addExercises a{
    text-decoration: none;
    color: white;
    padding: 10px;	
}
.exerciseCard{
   
    height: 100%;
    width: 100%;
    margin: 0%;
    align-items: center;
}
.exerciseCard table{
    width: 100%;
}
</style>