<template>
    <div class="exercisesMainDiv">
        <button class="addExercises"><router-link to="/addprogram">Dodaj! +</router-link></button>
        <h1 class="exercisesTitle">Programi:</h1>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Naziv </th>
            <th>Opis </th>
            <th>Cijena </th>
            <th>Kreator</th>
            <th colspan="2">Akcije</th>
        </tr>
        <tr  v-for="program in Programs" :key="program.id">
             <td><router-link :to = "{name: 'Program', params: {id: program.id}}">{{ program.Title }}</router-link></td> 
            <td>{{ program.Description}}</td>
            <td>{{ program.Cost}} KM</td>
            <td>{{ program.Username}}</td>
            <td><router-link :to="{name: 'ModifyProgram', params: {id : program.id}}">Uredi</router-link></td>
            <td><router-link :to="{name: 'DeletePrograms', params: {id : program.id}}">Obrisi</router-link></td> 
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
export default{
name: 'Programs',
data () {
    return {
        Programs: ""
    }
},
mounted(){
      axios.get('/api/programs').then((res) => {
        this.Programs = res.data.output;
        console.log("ovo je konzollog: ", res.data.output)
      })
    }
}
</script>


<style>
</style>