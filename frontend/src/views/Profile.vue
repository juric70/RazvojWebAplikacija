<template>
    <div class="mainMainDiv">
    <div class="mainDiv">
        <div class="profilePersonalData"> 
            <h2>MyProfile</h2>
            <img src="../assets/MatejKvesic.jpg" alt="">
            <div class="profilePersonalDataStore">
                <h4 class="profileInfo">{{DataForProfile[0]}}</h4>
                <p class="profileInfoData">{{ store.user.username }}</p>
                <h4 class="profileInfo">{{DataForProfile[1]}}</h4>
                <p class="profileInfoData">{{ store.user.name }}</p>
                <h4 class="profileInfo">{{DataForProfile[2]}}</h4>
                <p class="profileInfoData">{{ store.user.surname }}</p>
                <h4 class="profileInfo">{{DataForProfile[3]}}</h4>
                <p class="profileInfoData">{{ store.user.phoneNumber }}</p>
                <h4 class="profileInfo">{{DataForProfile[4]}}</h4>
                <p class="profileInfoData">{{ store.user.email }}</p>
            </div>
        </div>
        
    </div>

    <div class="paymentsAndSchedule">
            <div class="trainingSchedule">
                <h2 class="profilesubtitle"><router-link :to="{name: 'AllTrainingsOfUser', params: {id : store?.user?.id}}">Moji treninzi</router-link></h2>
                <div class="trainingScheduleDataStore">
                    <table>
                <tr>
                    <th class="htprofile">Naziv treninga</th>
                    <th class="htprofile">Datum treninga</th>
                    <th class="htprofile">Početak - Kraj</th>
                </tr>
                <tr  v-for="ut in TrainingUsers" :key="ut.id">
                    <td>{{ ut.TrainingTitle}}</td>
                    <td>{{ ut.DateOfTraining }}</td>
                    <td>{{ ut.startAt }} - {{ ut.EndsAt }}</td>
                </tr>
        
            </table>

                </div>
            </div>

            <div class="monthlyPayments">
                <h2 class="profilesubtitle"><router-link :to="{name: 'AllProgramsOfUser', params: {id : store?.user?.id}}">Mjesečne uplate</router-link></h2>
                <div class="monthlyPaymentsDataStore">
                    <table>
                        <tr>
                            <th class="htprofile">Naziv programa </th>
                            <th class="htprofile">Mijesec za članstvo</th>
                            <th class="htprofile">Uplaćeno: </th>
                            
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
    </div>
   

      
    
</template>

<script>
import axios from '../../axios';
import { store } from '../../store.js'



export default{
name: 'Profile',
data () {
    return {
        TrainingUsers: "",
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
    axios.get(`/api/alltrainingsofuser/${this.store?.user?.id}`).then((res) => {
        this.TrainingUsers = res.data.output;
      })
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
.mainMainDiv{
    display: flex;
    justify-content: center;
    margin-bottom: -20px;
}
.htprofile{
    text-align: center;
}
.profilesubtitle a{
    text-decoration: none;
    color: #01427b;
}
.mainDiv{
    display: block;
    padding: 50px;
    width: 400px;
} 
.mainDiv img{
    width: 50%;
    border-radius: 10%;
}
.profilePersonalData{
    background-color: #e6e6e6;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    height: 650px;
    border-radius: 30px;
    box-shadow: 0px 0px 15px #01294c;
    color: #01427b;
}
.paymentsAndSchedule{
    display: block;
    width: 800px;
    float: right;
    padding: 50px;
}
.profilePersonalDataStore{
    overflow: scroll;
    display: flex;
    flex-direction: column;
    width: 300px;
}
.profileInfo{
    display: flex;
    font-size: 20px;
    font-weight: bold;
}
.profileInfoData{
    display: flex;
    border-bottom: solid 1px black;
}
.trainingSchedule{
    background-color: #e6e6e6;
    overflow: hidden;
    display: flex;
    height: 300px;
    border-radius: 30px;
    box-shadow: 0px 0px 15px #01294c;
    margin-bottom: 50px;
    flex-direction: column;
}
.trainingScheduleDataStore{
    overflow: scroll;
    flex-direction: column;
    width: 100%;
}
.monthlyPayments{
    background-color: #e6e6e6;
    overflow: hidden;
    height: 300px;
    border-radius: 30px;
    box-shadow: 0px 0px 15px #01294c;
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