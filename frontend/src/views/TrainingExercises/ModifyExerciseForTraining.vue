<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Dodajte naziv treninga i njegovu kategoriju!
            </h1>
            <div class="cardInputBox">
                <input type="text" placeholder="Broj Ponavljanja" v-model="RepetitionNumber" id="title">
            </div> 
            <div class="cardInputBox">
                <input type="text" placeholder="Broj Serija" v-model="Series" id="title">
            </div> 
            <div class="cardInputBox">
                <input type="text" placeholder="Vremenski " v-model="Duration" id="title">
            </div> 
         
            <div class="cardInputBox">
                <select v-model="ExerciseId" >
                    <option v-for="exe in Exercises" v-bind:value="exe.id" v-bind:key="exe.id">
                        {{ exe.Title }}
                    </option>
                </select>
            </div>

           <button v-if="store?.user?.role === 1 || store?.user?.role === 2" class="RegisterButton" @click="modifyTraining($route?.params?.id)">
                Uredi!
            </button>
        </div>
    </div>
</template>

<script>
import axios from '../../../axios.js'
import {store} from "../../../store.js"

export default{
    name: 'ModifyExerciseForTraining',
    data(){
        return{
        RepetitionNumber: "",
        Series:"",
        Duration:"",
        ExerciseId: "",
        Exercises:"",
        TrainingId:"",
        store
        }
    },
    methods:{
        modifyTraining(id){

            axios.put(`/api/updateaexe/${id}`, {
                RepetitionNumber:this.RepetitionNumber,
                Series: this.Series,
                Duration:this.Duration,
                ExerciseId: this.ExerciseId,
            }).then((res) => {
            if(res.data.result == true){
                window.location.replace(`/fullTraining/${this.TrainingId}`);
            }else{
                alert(res.data.msg)
            }
        }).catch(() => {
            alert("e tek sada ne valja :(")
        })

        }
    },
    mounted(){
        axios.get(`/api/traexe/${this.$route.params.id}`).then((res) => {
        this.RepetitionNumber = res.data.result.RepetitionNumber;
        this.Series = res.data.result.Series;
        this.Duration = res.data.result.Duration;
        this.ExerciseId = res.data.result.ExerciseId;
        this.TrainingId = res.data.result.TrainingId;
       })
      axios.get('/api/exercises').then((res) => {
        this.Exercises = res.data.exercises;
      })
    }
    
}


</script>

<style>
</style>