<template>
 
    <div id="AboutProjectInfo">
        <h1>
          O Projektu
       </h1>
       <div id="aboutProjectCardsDiv">
    
   
       <div class="AboutProjectCard" id="aboutProjectCardMatej">
        <h2>Nemo</h2>
    <p>
        Ovaj dokument služi za opis i strukturiranje sustava za online praćenje svih aktivnosti u sportskom plivačkom klubu SUM. Glavni cilj ovoga projekta bi bio promoviranje sporta i osposobljavanje sportskih klubova na sveučilišnoj razini. Glavana zamisao jeste osposobiti stranicu sa svim sportskim klubovima sveučilišta, no u ovome projektu ćemo se fokusirati na plivački klub sveučilišta u Mostaru. U ovom projektu ćemo razraditi temu Sportskog Plivačkog Kluba SUM što je ujedno i naziv projekta. Kao i svaki drugi klub članovi klubova bi mogle biti sve zainteresirane osobe bez obzira na to da li studiraju na SUM-u no,  jedina razlika bi bila ta što studenti SUM-a bi bili oslobođeni plaćanja članarine za razliku od ostalih članova.
    </p>

        <h3>Tehnologije:</h3>
        <div id="AboutProjectTechnologiesDiv">
            <div class="AboutProjectTechnologiesCard">
                <img src="../assets/html.png" alt="" class="AboutProjectImg">
                <h4>Html</h4>
            </div>
        </div>
        <div id="AboutProjectTechnologiesDiv">
            <div class="AboutProjectTechnologiesCard">
                <img src="../assets/css.png" alt="" class="AboutProjectImg">
                <h4>Css</h4>
            </div>
        </div>
        <div id="AboutProjectTechnologiesDiv">
            <div class="AboutProjectTechnologiesCard">
                <img src="../assets/javaScript.png" alt="" class="AboutProjectImg">
                <h4>JavaScript</h4>
            </div>
        </div>
        <div id="AboutProjectTechnologiesDiv">
            <div class="AboutProjectTechnologiesCard">
                <img src="../assets/nodejs.png" alt="" class="AboutProjectImg">
                <h4>Nodejs</h4>
            </div>
        </div>
        <div id="AboutProjectTechnologiesDiv">
            <div class="AboutProjectTechnologiesCard">
                <img src="../assets/expressJs.png" alt="" class="AboutProjectImg">
                <h4>ExpressJs</h4>
            </div>
        </div>
        <div id="AboutProjectTechnologiesDiv">
            <div class="AboutProjectTechnologiesCard">
                <img src="../assets/mysql.png" alt="" class="AboutProjectImg">
                <h4>MySql</h4>
            </div>
        </div><div id="AboutProjectTechnologiesDiv">
            <div class="AboutProjectTechnologiesCard">
                <img src="../assets/sql.png" alt="" class="AboutProjectImg">
                <h4>Sql</h4>
            </div>
        </div>
   <div id="AboutProjectTechnologiesDiv">
            <div class="AboutProjectTechnologiesCard">
                <img src="../assets/logo.png" alt="" class="AboutProjectImg">
                <h4>VueJs</h4>
            </div>
        </div>

       </div>
    
       </div>
    
    </div>
    
    <div id="AboutProjectLinks">

        <br>
        <a href="https://docs.google.com/document/d/11cZBQ_qFBVd1KLtlQYnkseLDhYLLom3g/edit">Vizija</a>
        <br>
        <a href="https://github.com/juric70/RazvojWebAplikacija">GitHub</a>
    </div>
    
    </template>
    
    <script>
    export default{
        name: 'AboutProject',
        data(){
            return{
                isOpened: false, 
                
            }
        }
    }

    </script>
    
    
    <style>
    
    #AboutProjectInfo{
        height: 500px;
    }
    #AboutProjectTechnologiesDiv{
        height: 35%;
        display: inline-block;
        padding:0 30px;
    }
    .AboutProjectTechnologiesCard{
      
    }
    .AboutProjectCard{
        width: 85%;
        height: 80%;
   
        margin: auto;
        margin: 30px;
    }
    
    #aboutProjectCardsDiv{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
    }
    #aboutProjectCardsDiv p{
        padding: 20px;
       
    }
    .AboutProjectImg{
        height: 90px;
        width: 90px;
        border-radius: 5PX;
    }
    #AboutProjectLinks{
        width: 100%;
        height: 90px;
    }
    
    </style>
    