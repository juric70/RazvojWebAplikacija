<template>
    <div class="mainDiv">
        <div class="profilePersonalImage">
                 <img src="../assets/MatejKvesic.jpg" alt="">
                 <h2>MyProfile</h2>
            </div>
        <div class="profilePersonalData ">
            <div class="personalData">
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

        </div>
        <div class="monthlyPayments">

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
        DataForProfile:["Korisničko ime", "Ime", "Prezime", "Broj telefona", "Email"],
        KorisnickoIme:null,
        Ime:null,
        Prezime:null,
        BrojTelefona:null,
        Email:null,
        store
    }
},
// methods:{
//     displayMyUser: function(){
//         axios.get('/api/myprofile')
//         .then(response => (
//             this.KorisnickoIme=response.KorisnickoIme,
//             this.Ime=response.Ime,
//             this.Prezime=response.Prezime,
//             this.BrojTelefona=response.BrojTelefona,
//             this.Email=response.Email
//         ))
//     }
// }
}
</script>

<style>
.mainDiv{
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: antiquewhite;
} 
.mainDiv img{
    width: 200px;
}
.profilePersonalImage{
    width: 25%;
    height: 45%;
    background-color: blue;
    position: relative;
    top: 12%;
    left: 30%;
    transform: translateX(-70%);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.profilePersonalData{
    width: 25%;
    height: 40%;
    background-color: blueviolet;
    overflow: scroll;
    position: relative;
    top: 12%;
    left: 30%;
    transform: translateX(-70%);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}
.profileTextWindow {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 2px solid black;
    background-color: blueviolet;
}
.trainingSchedule{
    width: 45%;
    height: 40%;
    top: -73%;
    left: 45%;
    position: relative;
    background-color: orange;
    border-radius: 10px;
}
.monthlyPayments{
    width: 45%;
    height: 40%;
    top: -68%;
    left: 45%;
    position: relative;
    background-color: pink;
    border-radius: 10px;
}

::-webkit-scrollbar {
    width: 0px;
}

</style>