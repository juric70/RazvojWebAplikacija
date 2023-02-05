<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Dodajte program!
            </h1>
            <div class="cardInputBox">
                <input type="text" placeholder="Naslov" v-model="Title" id="Naslov">
            </div> 
            <div class="cardInputBox">
                <textarea  id="textarea" cols="30" rows="10" v-model="Description" placeholder="Opis"></textarea>

            </div>            
            <div class="cardInputBox">
                <input type="text" placeholder="Cijena" v-model="Cost" id="Cijena">
            </div>
           <button class="RegisterButton" @click="addProgram">
                Kreiraj program!
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
        Title:"", 
        Description:"", 
        Cost:"",
        store
    }
},
methods:{
    addProgram: function(){
        axios.post("/api/createprogram", {
            Title:this.Title,
            Description: this.Description,
            Cost: this.Cost,
            Userid: store?.user?.id
        }).then((res) => {
            if(res.data == true){
                alert("Kreirali ste uspjesno program:)")
                window.location.replace('/programs');
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

</style>