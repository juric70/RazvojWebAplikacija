<template>
    <div id="MiddleContentImg">
        <div id="MiddleContentImgH1">
        </div>
        <div id="MiddleContentImgH4">
        </div>
    </div>

</template>
<script>
export default{
    name: 'MiddleContent',
    data(){
        return{
            isOpened: false, 
            
        }
    }
}

</script>
<style lang="css">
#MiddleContentImgH1 h1{
    margin-top: 0;
    text-align: left;
    margin-left: 5%;
    padding-top: 50px;
    font-size: 100px;
    margin-bottom: 0;
    display: block;
}
#MiddleContentImgH4 h4{
    margin-top: 0;
    text-align: left;
    margin-left: 5%;
    
    font-size: 25px;

}
#MiddleContentImg{
    width: 100%;
    height: 500px;
    background-image: url('../assets/homeCover1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -20px;
}

</style>