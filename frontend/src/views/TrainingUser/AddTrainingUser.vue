<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
              Dodajte Korisnike u program! 
            </h1>
        
            <div class="cardInputBox">
                <label>Datum treninga</label>
                <input type="date" placeholder="Datum treninga! " v-model="DateOfTraining" id="title">
            </div> 
            <div class="cardInputBox">
                <label for="">Početak treninga</label>
                <input type="time" placeholder="Početak treninga! " v-model="startAt" id="title">
            </div>    
            <div class="cardInputBox">
                <label for="">Kraj treninga</label>
                <input type="time" placeholder="Kraj treninga! " v-model="EndsAt" id="title">
            </div> 

        
            <div class="cardInputBox">
                <label for="">Trening</label>
                <select v-model="TrainingId" >
                    <option v-for="training in Trainings" v-bind:value="training.id" v-bind:key="training.id">
                        {{ training.Title }}
                    </option>
                </select>
            </div>

             
            <div class="cardInputBox">
                <label>Molimo odaberite korisnika:</label>
                <select v-model="UserId"  style="height: 150px;" multiple>
                    <option v-for="u in Users" v-bind:value="u.Id" v-bind:key="u.Id">
                        {{ u.Username }}
                    </option>
                </select>
            </div>

           <button v-if="store?.user?.role === 1 || store?.user?.role === 2" class="RegisterButton" @click="addtraininguser()">
                Kreiraj!
            </button>
        </div>
    </div>
</template>

<script>
import axios from '../../../axios.js'
import {store} from "../../../store.js"

export default{
    name: 'AddTrainingUser',
    data(){
        return{
            TrainingId:"",
            Trainings: "",
            Users:"",
            UserId: [],
            DateOfTraining:"", 
            startAt:"", 
            EndsAt:"",
            store
        }
    },
    methods:{
        addtraininguser(){
           for(let i = 0; i<this.UserId.length; i++){
                axios.post(`/api/trainingforusers`, {
                DateOfTraining:this.DateOfTraining, 
                startAt: this.startAt , 
                EndsAt: this.EndsAt , 
                UserId: this.UserId[i],
                TrainingId: this.TrainingId
            }).then((res) => {
                if(res.data == true){
                window.location.replace(`/trusers`);
                }
             }).catch(() => {
                 alert("e tek sada ne valja :(")
                })
            }
        }
           
    },
    mounted(){
      axios.get('/api/trainings').then((res) => {
        this.Trainings = res.data.training;
      })
      axios.get('/api/users').then((res) => {
        this.Users = res.data.output;
       
      })
    }  
}
</script>

