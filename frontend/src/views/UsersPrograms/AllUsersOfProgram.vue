<template>
    <div class="exercisesMainDiv">
        <button class="addExercises"><router-link to="/addprogram">addtoprogram! +</router-link></button>
        <h1 class="exercisesTitle">Svi korisnici programa: {{ Program.Title }}  </h1>
        <div class="exerciseCard">
        <table>
        <tr>
            <th>Username korisnika </th>
            <th>Mijesec za članstvo</th>
            <th>UplaĆeno: </th>
            <th colspan="3">Akcije</th>
        </tr>
        <tr  v-for="up in UsersPrograms" :key="up.id">
            <td>{{ up.Username }}</td>
            <td>{{ up.MonthOfPayment }}</td>
            <td v-if="up.IsPayed === true">DA</td>
            <td v-if="up.IsPayed !== true">NE</td>
            <td><router-link :to="{name: 'ModifyPayment', params: {id : up.id}}">Uredi plaćanje</router-link></td>
            <td><router-link :to="{name: 'ModifyProgramForUser', params: {id : up.id}}">Uredi</router-link></td>
            <td><router-link :to="{name: 'DeletePrograms', params: {id : up.id}}">Obrisi</router-link></td> 
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
export default{
name: 'AllUsersOfProgram',
data () {
    return {
        UsersPrograms: "", 
        Program: ""
    }
},
mounted(){
      axios.get(`/api/programforusers/${this.$route?.params?.id}`).then((res) => {
        this.UsersPrograms = res.data.output;
      })
      axios.get(`/api/program/${this.$route.params.id}`).then((res) => {
         this.Program = res.data.result;
      })
    }
}
</script>


<style>
</style>