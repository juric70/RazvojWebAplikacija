<template>
    <div class="mainDiv">
        <div class="ProfilePersonalData ">
            <div class="profilePersonalImage">
                 <img src="../assets/MatejKvesic.jpg" alt="">
            </div>
            <div class="personalData">
                <h2>MyProfile</h2>

                <p>markdflian</p>
                <p>markdflian</p>
                <p>markdflian</p>
                <p>markdflian</p>
                <p>markdflian</p>
                <p>markdflian</p>
                <p>markdflian</p>
                <p>markdflian</p>
                <p>markdflian</p>
                <p>markdflian</p>


            </div>


        </div>


        <div>
            <div></div>
            <div></div>
        </div>
      
    </div>
   

      
    
</template>

<script>
export default{
name: 'Profile'
}
</script>

<style>
.mainDiv{
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: antiquewhite;
}
.ProfilePersonalData{
    width: 25%;
    height: 70%;
    background-color: blueviolet;
    overflow: scroll;
    position: relative;
    top: 17%;
    left: 30%;
    transform: translateX(-70%);
  
 
}
.mainDiv img{
    width: 200px;
}
::-webkit-scrollbar {
  width: 0px;
}

</style>