<template>
    <div class="exercisesMainDiv">
        <div class="titleAndButton">
            <h1 class="exercisesTitle">Vjezbe</h1>
            <button class="addExercises"  v-if="store?.user?.role === 1 || store?.user?.role === 2"><router-link to="/addexercise">Dodaj! +</router-link></button>
        </div>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Naziv Vjezbe</th>
            <th>Opis Vjezbe</th>
            <th>Kreator Vjezbe</th>
            <th  v-if="store?.user?.role === 1 || store?.user?.role === 2" colspan="2">Akcije</th>
        </tr>
        <tr  v-for="exercise in Exercises" :key="exercise.id">
            <td><router-link :to = "{name: 'Exercise', params: {id: exercise.id}}">{{ exercise.Title }}</router-link></td>
            <td>{{ exercise.Description }}</td>
            <td>{{ exercise.Username}}</td>
            <td  v-if="store?.user?.role === 1 || store?.user?.role === 2"><router-link :to="{name: 'ModifyExercise', params: {id : exercise.id}}">Uredi</router-link></td>
            <td  v-if="store?.user?.role === 1 || store?.user?.role === 2"><router-link :to="{name: 'DeleteExercise', params: {id : exercise.id}}">Obrisi</router-link></td>
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
import {store} from "../../../store.js"

export default{
name: 'Exercises',
data () {
    return {
        Exercises: "",
        store
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

table{
    width: 100%;
}
table, th, td {
    border-collapse: collapse;
    overflow: hidden;
    padding: 10px;
   
}
th {
    font-size: 18px;
    color: #fff;
    line-height: 1.4;
    background-color: #e6373a;
    text-align: left;


}
tr:nth-child(even) {
    background-color: #e6e6e6;
}
tr:nth-child(odd) {
    background-color: #d9d9d9;
}
table tr td a{
    text-decoration: none;
    color: #01427b;
    font-weight: bold;
}
table tr td a:hover{
    text-decoration: none;
    color: #e6373a;
    font-weight: bold;
}
.exercisesMainDiv{
    display: flex;
    flex-direction: column;
    padding: 0px 40px 40px 40px;
}

.titleAndButton{
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
}
.exercisesTitle{
    display: block;
    color: #e6e6e6;
}
.addExercises{
    display: block;
    height: 40px;
    width: 110px;
    border-radius: 15px;
    border: solid 1px #e6e6e6;
    background-color: #e6e6e6;
    font-weight: bold;
    align-self: center;
    box-shadow: 0px 0px 15px #01294c;
}

.addExercises a{
    text-decoration: none;
    color: #e6373a;
    padding: 5px 20px;
}
.addExercises a:hover{
    text-decoration: none;
    color: #01427b;
    padding: 5px 20px;
}
.addExercises img{
    width: 100%;
    height: 100%;
}
.exerciseCard{
    display: block;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 40px 0 rgb(0 0 0 / 15%);
    text-align: left;
}
@media(max-width:800px){

    .exercisesMainDiv{
    display: flex;
    flex-direction: column;
    padding: 0px 15px 15px 15px;
}
}
</style>