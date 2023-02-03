<template>
    <div class="exercisesMainDiv">
        <h1 class="exercisesTitle">Treneri</h1>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Korisničko ime</th>
            <th>Email</th>
            <th>Telefonski broj</th>
        </tr>
        <tr  v-for="coach in Coaches" :key="coach.id">
            <td>{{ coach.FirstName }}</td>
            <td>{{ coach.LastName }}</td>
            <td>{{ coach.Username }}</td>
            <td>{{ coach.Email }}</td>
            <td>{{ coach.PhoneNumber }}</td>
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
export default{
name: 'Coaches',
data () {
    return {
        Coaches: ""
    }
},
mounted(){
      axios.get('/api/coaches').then((res) => {
        this.Coaches = res.data.output;
        console.log(this.Coaches);
      })
    }
}
</script>


<style>

</style>