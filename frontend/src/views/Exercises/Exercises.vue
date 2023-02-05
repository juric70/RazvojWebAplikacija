<template>
    <div class="exercisesMainDiv">
        <button class="addExercises"><router-link to="/addexercise">Dodaj! +</router-link></button>
        <h1 class="exercisesTitle">Vjezbe</h1>
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
import axios from "../../../axios.js";
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
    background-color: #03A9F4;
    text-align: left;


}
tr:nth-child(odd) {
    background-color: #e6e6e6;
}

.exercisesMainDiv{
    padding-top: 60px;
    height: 100%;
}
.exercisesTitle{
    text-align: left;
    margin-left: 60px;
    position: absolute;
    margin-left: 5%;
}
.addExercises{
    float: right;
    height: 40px;
    width: 110px;
    margin-right: 80px;
    margin-top: 10px;
    border-radius: 15px;
    border: solid 1px #03A9F4;
    background-color: #03A9F4;
    font-weight: bold;
}
.addExercises :hover{
    float: right;
    border-radius: 15px;
    border: solid 1px #03A9F4;
    background-color: #03A9F4;
    font-weight: bold;
}
.addExercises a{
    text-decoration: none;
    color: white;
    padding: 5px 20px;	

}
.addExercises img{
    width: 100%;
    height: 100%;
}
.exerciseCard{
    width: 90%;
    margin-left: 5%;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 40px 0 rgb(0 0 0 / 15%);
    margin-top: 60px;
    text-align: left;
}

</style>