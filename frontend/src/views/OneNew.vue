<template>


    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
                {{ New.Title }}
            </h1>
            <p>{{ New.Decsription }}</p>
            <p>{{ New.Username }}</p>
            <p>{{ New.CreationDate }}</p>
            <button class="RegisterButton" >
                <router-link :to="{name: 'ModifyNews'}">Uredi</router-link>
            </button>
            <button class="RegisterButton" >
                <router-link class="linkDeco" :to="{name: 'DeleteNews'}">Obrisi</router-link> 
            </button>         
        </div>
    </div>



</template>
<script>
import axios from 'axios';

export default{
    name: 'OneNew',
    data(){
        return{
            New: ""
        }
    },
    mounted(){
        axios.get(`/api/new/${this.$route.params.id}`).then((res) => {
        this.New = res.data.result;
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