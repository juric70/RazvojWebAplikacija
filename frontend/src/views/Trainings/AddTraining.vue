<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Dodajte naziv treninga i njegovu kategoriju!
            </h1>
            <div class="cardInputBox">
                <input type="text" placeholder="Naslov" v-model="Title" id="title">
            </div> 
            <div class="cardInputBox">
                <select v-model="selected" placeholder="Kategorija">
                    <option disabled value="">Molimo odaberite kategoriju!</option>
                    <option v-for="cat in Categories" v-bind:value="cat.id" v-bind:key="cat.id">
                        {{ cat.Title }}
                    </option>
                </select>
            </div>

           <button class="RegisterButton" @click="addExercise">
                Dalje!
            </button>
        </div>
    </div>


</template>

<script>
import axios from '../../../axios.js';
import { store } from '../../../store.js';

export default{
name:'AddTraining',
data(){
    return{
        Title: "",
        Categories:"",
        selected: "",
        storedid:"",
        store
    }
},
methods:{
    addExercise: function(){
        axios.post("/api/createtraining", {
           Title:this.Title,
           Userid: this.store.user.id,
           selected: this.selected
        }).then((res) => {
            console.log(res.data.result, "e rezultat")
            if(res.data.result == true){
                this.storedid = res.data.output;
                console.log( this.storedid[0], "ovo je id")
                alert("Kreiraliste uspjesno :)")
                window.location.replace(`/addexetotr/${this.storedid[0].id}`);
            }else{
                alert("nesto nece!")
            }
        }).catch(() => {
            alert("e tek sada ne valja :(")
        })
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
/* .cardInputBox input, #textarea{
width: 90%;
margin: 10px;
border-radius: 15px;
border: solid 1px #03A9F4;
padding-left: 7px;
} */
</style>