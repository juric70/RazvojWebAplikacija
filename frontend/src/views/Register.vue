<template>
    <div class="RegisterBackground">
        <div class="RegisterCard">
            <h1 class="RegisterDescriptionTitle">
                Registrirajte se da bi nastavili!
            </h1>
            <!-- <div class="RegisterCardPhoto"><img id="RegisterPhoto" src="../assets/PlivacProfilnaSlika.jpg"></div> -->
            <div class="RegisterInputBox">
                <input type="text" placeholder="Ime">
            </div>
            <div class="RegisterInputBox">
                <input type="text" placeholder="Prezime">
            </div> 
            <div class="RegisterInputBox">
                <input type="text" placeholder="Korisničko ime">
            </div> 
            <div class="RegisterInputBox">
                <input type="email" placeholder="Email">
            </div> 
            <div class="RegisterInputBox">
                <input type="password" placeholder="Šifra">
            </div>
            <div class="RegisterInputBox">
                <input type="password" placeholder="Provjera šifre">
            </div>  
           <button class="RegisterButton">
                Kreiraj račun!
            </button>
        </div>
    </div>


</template>

<script>
export default{
    name: 'Register'
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

.RegisterCard{
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

.RegisterInputBox input{
height: 35px;
width: 300px;
margin: 10px;
border-radius: 15px;
border: solid 1px #03A9F4;
padding-left: 7px;
}

.RegisterButton{
height: 40px;
width: 310px;
margin: 10px;
border-radius: 15px;
border: solid 1px #03A9F4;
background-color: #03A9F4;
font-weight: bold;
}
</style>