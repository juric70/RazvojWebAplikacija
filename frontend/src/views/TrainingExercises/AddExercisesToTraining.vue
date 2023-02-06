<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Dodajte naziv treninga i njegovu kategoriju!
            </h1>
            <div class="cardInputBox">
                <input type="number" placeholder="Broj ponavljanja vježbe" v-model.number="RepetitionNumber" id="title">
            </div> 
            <div class="cardInputBox">
                <input type="number" placeholder="Broj Serija" v-model="Series" id="title">
            </div> 
            <div class="cardInputBox">
                <input type="number" placeholder="Trajanje vježbe u sekundama" v-model="Duration" id="title">
            </div> 
        
            <div class="cardInputBox">
                <select v-model="ExerciseId">
                    <option disabled value="">Molimo odaberite vježbu</option>
                    <option v-for="exe in Exercises" v-bind:value="exe.id" v-bind:key="exe.id">
                        {{ exe.Title }}
                    </option>
                </select>
            </div> 

           <button v-if="store?.user?.role === 1 || store?.user?.role === 2" class="RegisterButton" @click="addExercise">
                Dodaj još vježbi!
            </button>
            <button v-if="store?.user?.role === 1 || store?.user?.role === 2" class="RegisterButton" @click="addExerciseAndExit">
                Završi kreiranje treninga!
            </button>
        </div>
    </div>


</template>

<script>
import axios from '../../../axios.js';
import {store} from "../../../store.js"

export default{
name:'AddExercisesToTraining',
data(){
    return{
        RepetitionNumber: "",
        Series:"",
        Duration:"",
        ExerciseId: "",
        Exercises:"",
        store

    }
},
methods:{
    addExercise: function(){
    
        axios.post(`/api/createtraexe/${this.$route.params.id}`, {
            RepetitionNumber:this.RepetitionNumber,
            Series: this.Series,
            Duration:this.Duration,
            ExerciseId: this.ExerciseId
        }).then((res) => {
            if(res.data == true){
                window.location.replace(`/addexetotr/${this.$route.params.id}`);
            }else{
                alert("nesto nece!")
            }
        }).catch(() => {
            alert("e tek sada ne valja :(")
        })
    },
    addExerciseAndExit: function(){
        axios.post(`/api/createtraexe/${this.$route.params.id}`, {
            RepetitionNumber:this.RepetitionNumber,
            Series: this.Series,
            Duration:this.Duration,
            ExerciseId: this.ExerciseId
        }).then((res) => {
            if(res.data == true){
                alert("Kreiraliste uspjesno :)")
                window.location.replace(`/fullTraining/${this.$route.params.id}`);
            }else{
                alert("nesto nece!")
            }
        }).catch(() => {
            alert("e tek sada ne valja :(")
        })
    }
},
mounted(){
    axios.get('/api/exercises').then((res) => {
        this.Exercises = res.data.exercises;
      })
    }
}
</script>

<style>

</style>