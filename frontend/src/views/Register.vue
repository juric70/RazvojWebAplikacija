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
           <button class="RegisterButton" @click="registerUser">
                Kreiraj račun!
            </button>
        </div>
    </div>


</template>

<script>
import axios from '../../axios';

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
            RepeatedPassword: ""
        }
    },
    methods: {
        registerUser: function(){
            axios.post("/api/registerUser",{
                Username: this.Username,
                FirstName: this.FirstName,
                LastName: this.LastName,
                Email: this.Email,
                PhoneNumber: this.PhoneNumber,
                Password: this.Password,
                RepeatedPassword: this.RepeatedPassword
            }).then((res) => {
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
.RegisterBackground{
padding: 10px;
}
.registerCard{
    border-radius: 30px;
    border: solid 1px #e6e6e6;
    background-color: #e6e6e6;
    width: 20%;
    margin-left: 36%;
    padding: 4%;
}
.RegisterDescriptionTitle{
    color: #01427b;
}
.RegisterButton{
    height: 40px;
    width: 93%;
    margin: 10px;
    border-radius: 15px;
    border: solid 1px #01427b;
    background-color: #01427b;
    font-weight: bold;
    color: white;
}


.cardInputBox input, .cardInputBox select{
    height: 35px;
    width: 90%;
    margin: 10px;
    border-radius: 15px;
    border: solid 1px #01427b;
    padding-left: 7px;
}


@media(max-width:800px){
    .card{
        width: 80%;
    }
    .cardInputBox input, #textarea{
        width: 80%;
    }
    .card{
        background-color: #f2f2f2;
        border: 0px;
        padding: 7px;
    }
}
</style>