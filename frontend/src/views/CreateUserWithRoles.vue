<template>
    <div class="RegisterBackground">
        <div class="registerCard">
            <h1 class="RegisterDescriptionTitle">
                Registrirajte se da bi nastavili!
            </h1>
            <!-- <div class="RegisterCardPhoto"><img id="RegisterPhoto" src="../assets/PlivacProfilnaSlika.jpg"></div> -->
            <div class="cardInputBox">
                <input type="text" placeholder="Korisničko ime" v-model="Username" id="uname">
            </div> 
            <div class="cardInputBox">
                <input type="text" placeholder="Ime" v-model="FirstName" id="fname">
            </div>
            <div class="cardInputBox">
                <input type="text" placeholder="Prezime" v-model="LastName" id="lname">
            </div> 
         
            <div class="cardInputBox">
                <input type="email" placeholder="Email" v-model="Email">
            </div> 
            <div class="cardInputBox">
                <input type="text" placeholder="Broj Telefona" v-model="PhoneNumber">
            </div>
            <div class="cardInputBox">
                <input type="password" placeholder="Šifra">
            </div>
            <div class="cardInputBox">
                <input type="password" placeholder="Provjera šifre">
            </div>  
            <div class="cardInputBox">
                <select v-model="selected">
                    <option disabled value="">Molimo odaberite rolu</option>
                    <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <button class="RegisterButton" @click="registerAdmin">
                Kreiraj račun!
            </button>
        </div>
    </div>


</template>

<script>
import axios from '../../axios.js';

export default{
    name: 'Register',
    data(){
        return{
            UserName: "",
            FirstName: "",
            LastName: "",
            Email: "",
            PhoneNumber: "",
            Password: "",
            RepeatedPassword: "",
            selected: '',
            options: [{
                text: 'Admin',
                value: '1'
            }, {
                text: 'Trener',
                value: '2'
            }, {
                text: 'Korisnik',
                value: '3'
            }]
        }
    },
    methods: {
        registerAdmin: function(){
            axios.post("/api/registerAdmin",{
                Username: this.Username,
                FirstName: this.FirstName,
                LastName: this.LastName,
                Email: this.Email,
                PhoneNumber: this.PhoneNumber,
                Password: this.Password,
                RepeatedPassword: this.RepeatedPassword,
                selected: this.selected
            }).then((res) => {
                console.log(res.data)
                if(res.data==false){
               
                        alert("Something went wrong");
                }
                else{
                    alert("Successfully Saved");
                }
            
            }).catch(()=>{
                
                        alert("Something Went Wrong");
               
            })
            
        }
    }
    
}
</script>

<style>
@media(max-width:800px){
 
    .card{
    border-radius: 30px;
    border: solid 1px #e6e6e6;
    background-color: #e6e6e6;
    width: 85%;
    margin-left: 5%;
    }
    
    .cardInputBox input{
        width: 80%;
    }

}
</style>