<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
              Dodajte Korisnike u program!
            </h1>
        
            <div class="cardInputBox">
                <input type="date" placeholder="Datum treninga! " v-model="DateOfTraining" id="title">
            </div> 
            <div class="cardInputBox">
                <input type="number" placeholder="Početak treninga! " v-model="startAt" id="title">
            </div>    
            <div class="cardInputBox">
                <input type="number" placeholder="Kraj treninga! " v-model="EndsAt" id="title">
            </div> 

        
            <div class="cardInputBox">
                <select v-model="TrainingId" >
                    <option v-for="training in Trainings" v-bind:value="training.id" v-bind:key="training.id">
                        {{ training.Title }}
                    </option>
                </select>
            </div>

             
            <div class="cardInputBox">
                <select v-model="UserId"  style="height: 100px;" multiple>
                    <option v-for="u in Users" v-bind:value="u.Id" v-bind:key="u.Id">
                        {{ u.Username }}
                    </option>
                </select>
            </div>

           <button class="RegisterButton" @click="addtraininguser()">
                Kreiraj!
            </button>
        </div>
    </div>
</template>

<script>
import axios from '../../../axios.js'

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
            EndsAt:""
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
                window.location.replace(`/tr`);
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

