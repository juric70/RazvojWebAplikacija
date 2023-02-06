<template>
    <div class="exercisesMainDiv">
        <div class="titleAndButton">
            <h1 class="exercisesTitle">Treninzi od: {{ User.Username }} </h1>
        </div>
        <div class="exerciseCard">
            <table>
                <tr>
                     
                    <th>Naziv treninga</th>
                    <th>Datum treninga</th>
                    <th>Početak - Kraj</th>
                   
                </tr>
                <tr  v-for="ut in TrainingUsers" :key="ut.id">
                    <td>{{ ut.TrainingTitle}}</td>
                    <td>{{ ut.DateOfTraining }}</td>
                    <td>{{ ut.startAt }} - {{ ut.EndsAt }}</td>
                </tr>
        
            </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
export default{
name: 'AllTrainingsOfUser',
data () {
    return {
        TrainingUsers: "",
        User: ""
    }
},
mounted(){
      axios.get(`/api/alltrainingsofuser/${this.$route.params.id}`).then((res) => {
        this.TrainingUsers = res.data.output;
      })
      axios.get(`/api/user/${this.$route.params.id}`).then((res) => {
         this.User = res.data.result;
      })
    }
}
</script>


<style>
</style>