<template>


    <div class="RegisterBackground">
        <div class="cardTraining">
            <h1 class="RegisterDescriptionTitle">
                {{ Training.Title }}
            </h1>
            <p>Kreator treninga: {{ Training.Username }}</p>
            <p>Kategorija treninga: {{ Training.category }}</p>
            <p>Datum kreiranja treninga{{ Training.CreationDate }}</p>
            <table>
                <tr>
                    <th>Vježba</th>
                    <th >Količina</th>
                    <th>Broj serija</th>


                    <th colspan="2">Akcije</th>
                </tr>
                <tr  v-for="trexe in TrainingExe" :key="trexe.id">
                    <td><router-link :to="{name: 'Exercise', params: {id: trexe.ExerciseId}}">{{ trexe.exercise }}</router-link></td> 
                    <td v-if="trexe.RepetitionNumber != 0">{{ trexe.RepetitionNumber }}x</td>
                     <td v-if="trexe.Duration != 0">{{ trexe.Duration }}sec</td>
                    <td >{{ trexe.Series }}</td>
                   
                    <td><router-link :to="{name: 'ModifyExerciseForTraining', params: {id : trexe.id}}">Uredi</router-link></td>
                    <td><router-link :to="{name: 'DeleteExerciseForTraining', params: {id : trexe.id}}">Obrisi</router-link></td> 
                </tr>
            </table>

            <button class="RegisterButton" >
                <router-link :to="{name: 'AddExerciseToTraining'}">Dodaj vjezbu u trening Trening!</router-link>
            </button>
            <!-- <button class="RegisterButton" >
                <router-link class="linkDeco" :to="{name: 'DeleteTraining'}">Obrisi</router-link> 
            </button> -->
        </div>
    </div>


</template>

<script>
import axios from 'axios';

export default{
    name: 'FullTraining',
    data(){
        return{
            Training: "",
            TrainingExe:""
        }
    },
    mounted(){
        axios.get(`/api/trainingexe/${this.$route?.params?.id}`).then((res) => {
            if(res.status==200){
            this.TrainingExe=res.data.result;
            }
            else{
                alert("nemate nista dodano!")
            }
        })
        axios.get(`/api/training/${this.$route?.params?.id}`).then((res) => {
        this.Training = res.data.result;
      })
    }
}
</script>

<style>
.cardTraining{
    border-radius: 5px;
    border: solid 1px #e6e6e6;
    padding: 50px;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    width: 62%;
    top: 10%;
    transform: translateY(-10%);
    left: 50%;
    transform: translateX(-50%);
}
.cardTraining  table {
    width: 100%;
}
@media(max-width:800px){
    .cardTraining{
        width: 80%;
    }
    .cardInputBox input, #textarea{
        width: 80%;
    }
    .cardTraining{
        background-color: #f2f2f2;
        border: 0px;
        padding: 7px;
    }
}

</style>