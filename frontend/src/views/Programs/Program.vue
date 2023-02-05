<template>


    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
                {{ Program.Title }}
            </h1>
            <p>{{ Program.Description }}</p>
            <p>{{ Program.Cost }} KM</p>
            <p>{{ Program.Username }}</p>
            <table>
            <tr>
                <th>Username korisnika </th>
                <th>Mijesec za članstvo</th>
                <th>Uplaćeno: </th>
                <th colspan="3">Akcije</th>
            </tr>
            <tr  v-for="up in UsersPrograms" :key="up.id">
                <td>{{ up.Username }}</td>
                <td>{{ up.MonthOfPayment }}</td>
                <td v-if="up.IsPayed == true">DA</td>
                <td v-if="up.IsPayed != true">NE</td>
                <td><router-link :to="{name: 'ModifyPayment', params: {id : up.id}}">Uredi plaćanje</router-link></td>
                <td><router-link :to="{name: 'ModifyProgramForUser', params: {id : up.id}}">Uredi</router-link></td>
                <td><router-link :to="{name: 'DeleteUserProgram', params: {id : up.id}}">Obrisi</router-link></td> 

            </tr>
        
            </table>

            <button class="RegisterButton" >
                <router-link :to="{name: 'ModifyProgram'}">Uredi</router-link>
            </button>
            <button class="RegisterButton" >
                <router-link class="linkDeco" :to="{name: 'DeletePrograms'}">Obrisi</router-link> 
            </button>
        </div>
    </div>


</template>

<script>
import axios from '../../../axios.js';

export default{
    name: 'Program',
    data(){
        return{
            Program: "",
            UsersPrograms: "", 
        }
    },
    mounted(){
        axios.get(`/api/program/${this.$route.params.id}`).then((res) => {
        this.Program = res.data.result;
        })
        axios.get(`/api/programforusers/${this.$route?.params?.id}`).then((res) => {
        this.UsersPrograms = res.data.output;
      })
    }
}
</script>

<style>
.RegisterButton a{
    text-decoration: none;
    color: white;
    padding: 20px;
    padding-left: 70px;
    padding-right: 70px;
}
</style>