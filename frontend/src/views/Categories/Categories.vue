<template>
    <div class="exercisesMainDiv">
        <div class="titleAndButton">
            <h1 class="exercisesTitle">Categories</h1>
            <button class="addExercises" v-if="store?.user?.role === 1 || store?.user?.role === 2"><router-link to="/addcat">Dodaj! +</router-link></button>
        </div>
        <div class="exerciseCard">
            <table> 
        <tr>
            <th>Naziv Kategorije</th>
            <th>Kreator Vjezbe</th>
            <th v-if="store?.user?.role === 1 || store?.user?.role === 2" colspan="2">Akcije</th>
        </tr>
        <tr  v-for="category in Categories" :key="category.id">
             <td><router-link :to = "{name: 'Category', params: {id: category.id}}">{{ category.Title }}</router-link></td> 
            <td>{{ category.Username}}</td>
            <td v-if="store?.user?.role === 1 || store?.user?.role === 2"><router-link :to="{name: 'ModifyCategory', params: {id : category.id}}">Uredi</router-link></td>
            <td v-if="store?.user?.role === 1 || store?.user?.role === 2"><router-link :to="{name: 'DeleteCategory', params: {id : category.id}}">Obrisi</router-link></td> 
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
import {store} from "../../../store.js"
export default{
name: 'Categories',
data () {
    return {
        Categories: "",
        store
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