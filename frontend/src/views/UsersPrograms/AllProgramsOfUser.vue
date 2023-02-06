<template>
    <div class="exercisesMainDiv">
        <div class="titleAndButton">
            <h1 class="exercisesTitle">Svi programi korisnika: {{ User.Username }}  </h1>
            <button v-if="store?.user?.role === 1" class="addExercises"><router-link to="/addtoprogram">Dodaj! +</router-link></button>
        </div>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Naziv programa </th>
            <th>Mijesec za članstvo</th>
            <th>Uplaćeno: </th>
            <th v-if="store?.user?.role === 1" colspan="3">Akcije</th>
        </tr>
        <tr  v-for="up in UsersPrograms" :key="up.id">
            <td>{{ up.ProgramTitle }}</td>
            <td>{{ up.MonthOfPayment }}</td>
            <td v-if="up.IsPayed == true">DA</td>
            <td v-if="up.IsPayed != true">NE</td>
            <td v-if="store?.user?.role === 1"><router-link :to="{name: 'ModifyProgramForUser', params: {id : up.id}}">Uredi</router-link></td> 
            <td v-if="store?.user?.role === 1"><router-link :to="{name: 'ModifyPayment', params: {id : up.id}}">Uredi plćanje članarine</router-link></td>
            <td v-if="store?.user?.role === 1"><router-link :to="{name: 'DeleteUserProgram', params: {id : up.id}}">Obrisi</router-link></td> 
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
import {store} from "../../../store.js"
export default{
name: 'AllProgramsOfUser',
data () {
    return {
        UsersPrograms: "", 
        User: "",
        store
    }
},
mounted(){
      axios.get(`/api/programsofuser/${this.$route?.params?.id}`).then((res) => {
        this.UsersPrograms = res.data.output;
      })
      axios.get(`/api/user/${this.$route.params.id}`).then((res) => {
         this.User = res.data.result;
      })
    }
}
</script>
