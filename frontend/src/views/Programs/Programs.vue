<template>
    <div class="testDiv">
        <div class="exercisesMainDiv">
            <div class="titleAndButton">
                <h1 class="exercisesTitle">Programi:</h1>
                <button class="addExercises" v-if="store?.user?.role === 1 "><router-link to="/addprogram">Dodaj! +</router-link></button>
            </div>
            <div class="exerciseCard">
                <table>
            <tr>
                <th>Naziv </th>
                <th>Opis </th>
                <th>Cijena </th>
                <th>Kreator</th>
                <th v-if="store?.user?.role === 1 " colspan="2">Akcije</th>
            </tr>
            <tr  v-for="program in Programs" :key="program.id">
                <td><router-link :to = "{name: 'Program', params: {id: program.id}}">{{ program.Title }}</router-link></td> 
                <td>{{ program.Description}}</td>
                <td>{{ program.Cost}} KM</td>
                <td>{{ program.Username}}</td>
                <td v-if="store?.user?.role === 1 "><router-link :to="{name: 'ModifyProgram', params: {id : program.id}}">Uredi</router-link></td>
                <td v-if="store?.user?.role === 1 "><router-link :to="{name: 'DeletePrograms', params: {id : program.id}}">Obrisi</router-link></td> 
            </tr>
        
            </table>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
import {store} from "../../../store.js"
export default{
name: 'Programs',
data () {
    return {
        Programs: "",
        store
    }
},
mounted(){
      axios.get('/api/programs').then((res) => {
        this.Programs = res.data.output;
      })
      console.log(this.store, "ovo je id od korisnika");
    }
}
</script>


<style>
.testDiv{
    display: block;
}
</style>