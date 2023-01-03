<template>
    <div class="RegisterBackground">
        <div class="card">
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
import axios from 'axios';
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
body{
margin: 0;
padding: 0;   
}
.RegisterBackground{
width: 100%;
height: 100%;
background-color: #f2f2f2;
}

.card{
border-radius: 5px;
border: solid 1px #e6e6e6;
padding: 50px;
align-items: center;
justify-content: center; 
background-color: white;
position: relative;
width: 30%;
top: 10%;
transform: translateY(-10%);
left: 50%;
transform: translateX(-50%);
}

.RegisterDescriptionTitle{
color: #333333;
}

#RegisterPhoto{
margin: 20px;
width: 170px;
height: 170px;
border-radius: 85px;
border: 2px solid #03A9F4 ;
}

.cardInputBox input{
height: 35px;
width: 90%;
margin: 10px;
border-radius: 15px;
border: solid 1px #03A9F4;
padding-left: 7px;
}

.RegisterButton{
height: 40px;
width: 93%;
margin: 10px;
border-radius: 15px;
border: solid 1px #03A9F4;
background-color: #03A9F4;
font-weight: bold;
}
@media(max-width:800px){
    .card{
        width: 80%;
    }
    .cardInputBox input{
        width: 80%;
    }
    .card{
        background-color: #f2f2f2;
        border: 0px;
        padding: 7px;
    }
}
</style>