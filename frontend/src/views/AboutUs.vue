<template>
 <div id="AboutUsBackDiv">
    <div id="AboutUsInfo">
        <h1>
          O nama
       </h1>
       <div id="aboutUsCardsDiv">
    
        <div class="AboutUsCard" id="aboutUsCardAndela">
        <h2>Anđela Jurić</h2>
            <img src="../assets/AndjelaJuric.png" alt="" class="AboutUsImg">
            <p>
                Studentica 3. godine Fakulteta Strojarstva, Računarstva i Elektrotehnike u Mostaru.
    <br><br><br>
                    Rođena 13.01.2002.
            </p>
       </div>
       <div class="AboutUsCard" id="aboutUsCardMatej">
        <h2>Matej Kvesić</h2>
        <img src="../assets/MatejKvesic.jpg" alt="" class="AboutUsImg">
    <p>
        Student 3. godine Fakulteta Strojarstva, Računarstva i Elektrotehnike u Mostaru.
        <br><br><br>
                Rođen 19.10.1999.
    </p>
       </div>
    
       </div>
    
    </div>
 </div>
   
    
    <AboutProject/>
    
    </template>
    
    <script>
        import AboutProject from '../components/AboutProject.vue'

    export default{
        name: 'AboutUs',
        data(){
            return{
                isOpened: false, 
                
            }
        },
        components:{
            AboutProject
        }
    }
    </script>
    
    
    <style>

    body{
        padding: 0;  
        margin: 0; 
    }

    #AboutUsBackDiv{
        width: 100%;
        
        background-color: #f2f2f2;
    }

    #AboutUsInfo{
        height: 70%;
      
    
        width: 100%;
        padding-top: 40px;
    }

    .AboutUsCard{
        width: 45%;
        height: 80%;
        display: inline-block;
        justify-content: center;
        margin: auto;
     }
    
    #aboutUsCardsDiv{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    
    .AboutUsImg{
        height: 150px;
        width: 150px;
        border-radius: 75PX;
    }
    
    </style>
    