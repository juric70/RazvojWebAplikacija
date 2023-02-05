<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Dodajte vježbu
            </h1>
            <div class="cardInputBox">
                <input type="text" placeholder="Naslov" v-model="Title" id="title">
            </div> 
            <div class="cardInputBox">
                <textarea  id="textarea" cols="30" rows="10" v-model="Description" placeholder="Description"></textarea>
            </div>
           <button class="RegisterButton" @click="addExercise">
                Kreiraj vježbu!
            </button>
        </div>
    </div>


</template>

<script>
import axios from '../../../axios.js';
import { store } from '../../../store.js';

export default{
name:'AddExercise',
data(){
    return{
        Title: "",
        Description: "",
        store
    }
},
methods:{
    addExercise: function(){
        axios.post("/api/createexercise", {
            Title:this.Title,
            Description:this.Description,
           store: this.store
        }).then((res) => {
            if(res.data == true){
                alert("Kreiraliste uspjesno :)")
                window.location.replace('/exercises');
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
.card{
    margin-top: 20px;
    border-radius: 30px;
    border: solid 1px #e6e6e6;
    padding: 40px;
    background-color: #e6e6e6;
    width: 20%;
    margin-left: 40%;
}
.cardInputBox input, #textarea{
width: 90%;
margin: 10px;
border-radius: 15px;
border: solid 1px #01427b;
padding-left: 7px;
} 
</style>