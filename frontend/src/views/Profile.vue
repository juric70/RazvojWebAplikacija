<template>
    <div class="mainDiv">
        <div class="profilePersonalData"> 
            <h2>MyProfile</h2>
            <img src="../assets/MatejKvesic.jpg" alt="">
            <div class="profilePersonalDataStore">
                <h4>{{DataForProfile[0]}}</h4>
                <p>{{ store.user.username }}</p>
                <h4>{{DataForProfile[1]}}</h4>
                <p>{{ store.user.name }}</p>
                <h4>{{DataForProfile[2]}}</h4>
                <p>{{ store.user.surname }}</p>
                <h4>{{DataForProfile[3]}}</h4>
                <p>{{ store.user.phoneNumber }}</p>
                <h4>{{DataForProfile[4]}}</h4>
                <p>{{ store.user.email }}</p>
            </div>
        </div>
        
        <div class="trainingSchedule">
            <h2>Training schedule</h2>
            <div class="trainingScheduleDataStore">
                <h4>{{DataForTrainingSchedule[0]}}</h4>
                <input class="trainingScheduleWindow" type="text" value="">
                <h4>{{DataForTrainingSchedule[1]}}</h4>
                <input class="trainingScheduleWindow" type="text" value="">
                <h4>{{DataForTrainingSchedule[2]}}</h4>
                <input class="trainingScheduleWindow" type="text" value="">
                <h4>{{DataForTrainingSchedule[3]}}</h4>
                <input class="trainingScheduleWindow" type="text" value="">
                <h4>{{DataForTrainingSchedule[4]}}</h4>
                <input class="trainingScheduleWindow" type="text" value="">
            </div>
        </div>

        <div class="monthlyPayments">
            <h2><router-link :to="{name: 'AllProgramsOfUser', params: {id : store?.user?.id}}">Mjesečne uplate</router-link></h2>
            <div class="monthlyPaymentsDataStore">
                <table>
                    <tr>
                        <th>Naziv programa </th>
                        <th>Mijesec za članstvo</th>
                        <th>Uplaćeno: </th>
                        
                    </tr>
                    <tr  v-for="up in UsersPrograms" :key="up.id">
                        <td>{{ up.ProgramTitle }}</td>
                        <td>{{ up.MonthOfPayment }}</td>
                        <td v-if="up.IsPayed == true">DA</td>
                        <td v-if="up.IsPayed != true">NE</td>
                    </tr>
                </table>
            </div> 
        </div>
    </div>
   

      
    
</template>

<script>
import axios from 'axios';
import { store } from '../../store.js'



export default{
name: 'Profile',
data () {
    return {
        DataForProfile:["Korisničko ime", "Ime", "Prezime", "Broj telefona", "Email",],
        KorisnickoIme:null,
        Ime:null,
        Prezime:null,
        BrojTelefona:null,
        Email:null,
        store,
        DataForTrainingSchedule:["nesto","","","","",],
        DataForMonthlyPayments:["dd", "ss", "", "", "",],
        UsersPrograms: "", 
    }

},
mounted(){
    axios.get(`/api/programsofuser/${this.store?.user?.id}`).then((res) => {
        this.UsersPrograms = res.data.output;
      })
}
}
</script>

<style>
::-webkit-scrollbar {
    width: 0px;
}
.mainDiv{
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: #cce6ff;
} 
.mainDiv img{
    width: 50%;
    border-radius: 10%;
}
.profilePersonalData{
    background-color: #e6f2ff;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    width: 25%;
    height: 85%;
    top: 12%;
    left: 30%;
    transform: translateX(-70%);
    border-radius: 30px;
    box-shadow: 0px 0px 15px grey;
}
.profilePersonalDataStore{
    overflow: scroll;
    display: flex;
    flex-direction: column;
}
.trainingSchedule{
    background-color: #e6f2ff;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    width: 45%;
    height: 40%;
    top: -73%;
    left: 45%;
    border-radius: 30px;
    box-shadow: 0px 0px 15px grey;
}
.trainingScheduleDataStore{
    overflow: scroll;
    flex-direction: column;
    width: 100%;
}
.monthlyPayments{
    background-color: #e6f2ff;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    width: 45%;
    height: 40%;
    top: -68%;
    left: 45%;
    border-radius: 30px;
    box-shadow: 0px 0px 15px grey;
}
.monthlyPaymentsDataStore{
    overflow: scroll;
    flex-direction: column;
    width: 100%;
}
.trainingScheduleWindow{
    overflow: scroll;
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100%;
    background-color: #cce6ff;
    position: relative;
    border-width: 0px;
} 

/* .trainingHeader{(crop radi, boja, visina radi, samo nije centriran)
    background-color: #99caff;
    overflow: hidden;
    margin-top: 0%;
    height: 35px;
} */



@media(max-width: 800px) {
    .mainDiv{
        width: 100%;
        height: 100%;
        background-size: cover;
    }
    .profilePersonalData{
        width: 90%;
        height: 30%;
        margin-left: 5%;
        position: static;
    }
    .trainingSchedule{
        width: 90%;
        height: 30%;
        position: inherit;
        margin-left: 5%;
        margin-top: 5%;
    }
    .monthlyPayments{
        width: 90%;
        height: 30%;
        position: inherit;
        margin-left: 5%;
        margin-top: 5%;
    }
}

</style>