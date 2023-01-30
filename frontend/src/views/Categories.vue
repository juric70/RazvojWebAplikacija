<template>
    <div class="exercisesMainDiv">
        <button class="addExercises"><router-link to="/addcat">Dodaj Kategoriju</router-link></button>
        <h1>Vjezbe</h1>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Naziv Kategorije</th>
            <th>Kreator Vjezbe</th>
            <th colspan="2">Akcije</th>
        </tr>
        <tr  v-for="category in Categories" :key="category.id">
             <td><router-link :to = "{name: 'Category', params: {id: category.id}}">{{ category.Title }}</router-link></td> 
            <td>{{ category.Title}}</td>
            <td><router-link :to="{name: 'ModifyCategory', params: {id : category.id}}">Uredi</router-link></td>
            <td><router-link :to="{name: 'DeleteCategory', params: {id : category.id}}">Obrisi</router-link></td> 
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default{
name: 'Categories',
data () {
    return {
        Categories: ""
    }
},
mounted(){
      axios.get('/api/categories').then((res) => {
        this.Categories = res.data.categories;
        console.log("kategorije:  ", this.Categories[0].Title )
      
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