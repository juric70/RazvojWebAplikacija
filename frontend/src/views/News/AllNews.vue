<template>
    <div class="exercisesMainDiv">
        <div class="titleAndButton">
            <h1 class="exercisesTitle">Novosti</h1>
            <button v-if="store?.user?.role === 1" class="addExercises"><router-link to="/createNews">Dodaj! +</router-link></button>
        </div>
        <div class="exerciseCard">
            <table>
        <tr>
            <th>Naslov </th>
            <th>Sadržaj</th>
            <th>Kreator </th>
            <th v-if="store?.user?.role === 1" colspan="2">Akcije</th>
        </tr>
        <tr  v-for="ne in news" :key="ne.Id">
            <td><router-link :to="{name:'OneNew', params:{id: ne.Id}}">{{ ne.Title }}</router-link></td>
            <td>{{ ne.Decsription }}</td>
            <td>{{ ne.Username }}</td>
         
              <td v-if="store?.user?.role === 1"><router-link :to="{name: 'ModifyNews', params: {id : ne.Id}}">Uredi</router-link></td> 
            <td v-if="store?.user?.role ===1"><router-link :to="{name: 'DeleteNews', params: {id : ne.Id}}">Obrisi</router-link></td> 
        </tr>
       
        </table>
        </div>
    </div>
</template>


<script>
import axios from "../../../axios.js";
import { store } from "../../../store.js";
export default{
name: 'AllNews',
data () {
    return {
        news: "",
        store
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
</style>