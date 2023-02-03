    <template>
        <div class="LoginBackground">
            <div class="LoginCard" v-if="store.user == null">
                <h1 class="LoginDescriptionTitle">
                    Prijavite se da bi nastavili!
                </h1>
                <div class="LoginCardPhoto"><img id="LoginPhoto" src="../assets/PlivacProfilnaSlika.jpg"></div>
                <div class="LoginInputBox">
                    <input type="text" placeholder="Korisničko ime" v-model="Username">
                </div>  
                <div class="LoginInputBox">
                    <input type="password" placeholder="Šifra" v-model="Password">
                </div>
               <button class="LoginButton" @click="loginUser">
                    Prijavi se!
                </button>
                <button class="LoginButton" @click="logoutUser"> Logout</button>
                <p>Ukoliko nemate račun <router-link to="/register">Registrirajte se!</router-link></p>
                
            </div>
          
        </div>
   
   
    </template>
    
<script>
import router from "../router"
import axios from '../../axios.js';
import { store } from '../../store.js'


    export default{
        name: 'Login',
        data(){
            return{
                Username:"",
                Password:"",
                store
            }
        },
  
        methods:{
            loginUser: function(){
                axios.post("/api/loginUser", {
                    Username: this.Username,
                    Password: this.Password
                }).then((res) => {
                    

                    if(!res.data){
                      alert(res.data.msg);
                    }
                    else{
                        console.log("nepravi da prebaci na drugu str");
                        window.location.replace('/');
                    
                    }

                }).catch((error) => {
                    alert(error);
                })
            },
           
        }
    }
</script>

<style>
body{
    margin: 0;
    padding: 0;   
}
.LoginBackground{
    width: 100%;
    background-color: #f2f2f2;
    padding-top: 90px;
}

.LoginCard{
    border-radius: 5px;
    border: solid 1px #e6e6e6;
    background-color: white;
    width: 30%;
    margin-left: 35%;
}
@media(max-width:800px){
    .LoginCard{
        width: 80%;
        margin-left: 10%;
    }
    .LoginInputBox input{
        width: 80%;
    }
}
.LoginDescriptionTitle{
    color: #333333;
}

#LoginPhoto{
    margin: 20px;
    width: 170px;
    height: 170px;
    border-radius: 85px;
    border: 2px solid #03A9F4 ;
}

.LoginInputBox input{
    height: 35px;
    width: 90%;
    margin: 10px;
    border-radius: 15px;
    border: solid 1px #03A9F4;
    padding-left: 7px;
}

.LoginButton{
    height: 40px;
    width: 93%;
    margin: 10px;
    border-radius: 15px;
    border: solid 1px #03A9F4;
    background-color: #03A9F4;
    font-weight: bold;
    }
    /* router-link{
        text-decoration-color: #03A9F4; REŠIT KASNIJE
    } */
</style>
    
    