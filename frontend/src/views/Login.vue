    <template>
        <div class="LoginBackground">
            <div class="loginCard" v-if="store.user == null">
                <div class="LoginCardPhoto"><img id="LoginPhoto" src="../assets/KVSUM-Logo.png"></div>
                <h1 class="LoginDescriptionTitle">
                    Prijavite se da bi nastavili!
                </h1>
                
                <div class="LoginInputBox">
                    <input type="text" placeholder="Korisničko ime" v-model="Username">
                </div>  
                <div class="LoginInputBox">
                    <input type="password" placeholder="Šifra" v-model="Password">
                </div>
               <button class="LoginButton" @click="loginUser">
                    Prijavi se!
                </button>
                <!-- <button class="LoginButton" @click="logoutUser"> Logout</button> -->
                <p>Ukoliko nemate račun <router-link to="/register">Registrirajte se!</router-link></p>
                
            </div>
          
        </div>
   
   
    </template>
    
<script>
import router from "../router"
import axios from '../../axios';
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
                    

                    if(res.data.res){
                      alert(res.data.msg);
                      window.location.replace('/');
                    }
                    else{
                        window.location.replace('/login');
                    }

                }).catch((error) => {
                    alert(error);
                })
            },
           
        }
    }
</script>

<style>

/* .LoginBackground{
    padding-top: 20px;
} */

.loginCard{
    border-radius: 30px;
    border: solid 1px #e6e6e6;
    background-color: #e6e6e6;
    width: 20%;
    margin-left: 36%;
    padding: 4%;
}
@media(max-width:400px){
    .loginCard{
        width: 80%;
        margin-left: 10%;
    }
    .LoginInputBox input{
        width: 80%;
    }
}
.LoginDescriptionTitle{
    color: #01427b;
}

#LoginPhoto{
    width: 200px;
    height: 200px;
}

.LoginInputBox input{
    height: 35px;
    width: 90%;
    margin: 10px;
    border-radius: 15px;
    border: solid 1px #01427b;
    padding-left: 7px;
}

.LoginButton{
    color: white;
    height: 40px;
    width: 93%;
    margin: 10px;
    border-radius: 15px;
    border: solid 1px #01427b;
    background-color: #01427b;
    font-weight: bold;
    }
    /* router-link{
        text-decoration-color: #03A9F4; REŠIT KASNIJE
    } */
</style>
    
    