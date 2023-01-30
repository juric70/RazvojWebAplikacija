<template>
    <div class="exercisesMainDiv">
        <button class="addExercises"><router-link to="/addcat">Dodaj! +</router-link></button>
        <h1 class="exercisesTitle">Categories</h1>
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
</style>