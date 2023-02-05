<template>
    <div class="exercisesMainDiv">
        <button class="addExercises"><router-link to="/addtoprogram">Dodaj! +</router-link></button>
        <h1 class="exercisesTitle">Članstva :</h1>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Username korisnika </th>
            <th>Naziv Programa (cijena programa) </th>
            <th>Mijesec za članstvo</th>
            <th>UplaĆeno: </th>
            <th colspan="3">Akcije</th>
        </tr>
        <tr  v-for="up in UsersPrograms" :key="up.id">
            <td>{{ up.Username }}</td>
            <td>{{ up.ProgramTitle}} ({{ up.ProgramPrice }} KM)</td>
            <td>{{ up.MonthOfPayment }}</td>
            <td v-if="up.IsPayed == true">DA</td>
            <td v-if="up.IsPayed == false">NE</td>
            <td><router-link :to="{name: 'ModifyPayment', params: {id : up.id}}">Uredi plaćanje</router-link></td>
            <td><router-link :to="{name: 'DeleteUserProgram', params: {id : up.id}}">Obrisi</router-link></td> 
            <td><router-link :to="{name: 'ModifyProgramForUser', params: {id : up.id}}">Uredi</router-link></td> 

        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
export default{
name: 'AllUsersPrograms',
data () {
    return {
        UsersPrograms: ""
    }
},
mounted(){
      axios.get('/api/programsandusers').then((res) => {
        this.UsersPrograms = res.data.output;
      })
    }
}
</script>


<style>
</style>