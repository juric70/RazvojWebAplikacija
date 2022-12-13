    <template>
        <div class="LoginBackground">
            <div class="LoginCard">
                <h1 class="LoginDescriptionTitle">
                    Prijavite se da bi nastavili!
                </h1>
                <div class="LoginCardPhoto"><img id="LoginPhoto" src="../assets/PlivacProfilnaSlika.jpg"></div>
                <div class="LoginInputBox">
                    <input type="text" placeholder="Korisničko ime">
                </div>  
                <div class="LoginInputBox">
                    <input type="password" placeholder="Šifra">
                </div>
               <button class="LoginButton">
                    Prijavi se!
                </button>
                <p>Ukoliko nemate račun <router-link to="/register">Registrirajte se!</router-link></p>
            </div>
        </div>
   

    </template>
    
<script>
    export default{
        name: 'Login'
    }
</script>

<style>
body{
    margin: 0;
    padding: 0;   
}
.LoginBackground{
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
}

.LoginCard{
    border-radius: 5px;
    border: solid 1px #e6e6e6;
    padding: 50px;
    align-items: center;
    justify-content: center; 
    background-color: white;
    position: relative;
    width: 25%;
    top: 13%;
    transform: translateY(-13%);
    left: 50%;
    transform: translateX(-50%);
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
    width: 300px;
    margin: 10px;
    border-radius: 15px;
    border: solid 1px #03A9F4;
    padding-left: 7px;
}

.LoginButton{
    height: 40px;
    width: 310px;
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
    
    