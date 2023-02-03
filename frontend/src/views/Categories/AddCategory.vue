<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Dodajte kategoriju
            </h1>
            <div class="cardInputBox">
                <input type="text" placeholder="Naslov" v-model="Title" id="title">
            </div> 
           <button class="RegisterButton" @click="addExercise">
                Kreiraj Kategoriju!
            </button>
        </div>
    </div>


</template>

<script>
import axios from '../../../axios.js';
import { store } from '../../../store.js';

export default{
name:'AddCategory',
data(){
    return{
        Title: "",
        store
    }
},
methods:{
    addExercise: function(){
        axios.post("/api/createcategory", {
            Title:this.Title,
           Userid: this.store.user.id
        }).then((res) => {
            if(res.data == true){
                alert("Kreiraliste uspjesno :)")
                window.location.replace('/categories');
            }else{
                alert("nesto nece!")
            }
        }).catch(() => {
            alert("e tek sada ne valja :(")
        })
    }
}
}
</script>

<style>
.cardInputBox input, #textarea{
width: 90%;
margin: 10px;
border-radius: 15px;
border: solid 1px #03A9F4;
padding-left: 7px;
}
</style>