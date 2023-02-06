<template>


    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
                {{ Category.Title }}
            </h1>
            <p>{{ Category.Username }}</p>
            <p>{{ Category.CreationDate }}</p>
            <button v-if="store?.user?.role === 1 || store?.user?.role === 2" class="RegisterButton" >
                <router-link :to="{name: 'ModifyCategory'}">Uredi</router-link>
            </button>
            <button v-if="store?.user?.role === 1 || store?.user?.role === 2" class="RegisterButton" >
                <router-link class="linkDeco" :to="{name: 'DeleteCategory'}">Obrisi</router-link> 
            </button>
        </div>
    </div>


</template>

<script>
import axios from '../../../axios.js';
import {store} from "../../../store.js"
export default{
    name: 'Category',
    data(){
        return{
            Category: "",
            store
        }
    },
    mounted(){
        axios.get(`/api/category/${this.$route.params.id}`).then((res) => {
        this.Category = res.data.result;
    
       
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