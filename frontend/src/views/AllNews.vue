<template>
    <div class="exercisesMainDiv">
        <button class="addExercises"><router-link to="/createNews">Dodaj vježbu</router-link></button>
        <h1>Novosti</h1>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Naslov </th>
            <th>Sadržaj</th>
            <th>Kreator </th>
            <th colspan="2">Akcije</th>
        </tr>
        <tr  v-for="ne in news" :key="ne.Id">
            <td><router-link :to="{name:'OneNew', params:{id: ne.Id}}">{{ ne.Title }}</router-link></td>
            <td>{{ ne.Decsription }}</td>
            <td>{{ ne.Username }}</td>
         
              <td><router-link :to="{name: 'ModifyNews', params: {id : ne.Id}}">Uredi</router-link></td> 
            <td><router-link :to="{name: 'DeleteNews', params: {id : ne.Id}}">Obrisi</router-link></td> 
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default{
name: 'AllNews',
data () {
    return {
        news: ""
    }
},
mounted(){
      axios.get('/api/news').then((res) => {
        this.news = res.data.news;
       console.log("ovo su novosti", this.news);
      })
    }
}
</script>


<style>

table, th, td {
    padding: 7px;
    border-bottom: solid 1px #03A9F4;
    border-collapse: collapse;
   
}
body{
    margin-top: 0%;
}
.exercisesMainDiv{
    padding-top: 60px;
}
.addExercises{
    float: right;
    height: 40px;
width: 13%;
margin: 10px;
border-radius: 15px;
border: solid 1px #03A9F4;
background-color: #03A9F4;
font-weight: bold;
}
.addExercises a{
    text-decoration: none;
    color: white;
    padding: 10px;	
}
.exerciseCard{
   
    height: 100%;
    width: 100%;
    margin: 0%;
    align-items: center;
}
.exerciseCard table{
    width: 100%;
}
</style>