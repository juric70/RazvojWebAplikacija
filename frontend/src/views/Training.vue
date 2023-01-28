<template>
    <div class="mainDivTraining">
        <div class="workoutOne">
            <h1>Suhi trening</h1>
            <div class="workoutCardsFlex">
                <div class="workoutCards"></div>
                <div class="workoutCards"></div>
                <div class="workoutCards"></div>
                <div class="workoutCards"></div>
            </div>
        </div>
        <div class="workoutOne">
            <h1>Treninzi u bazenu</h1>
            <div class="workoutCardsFlex">
                <div class="workoutCards"></div>
                <div class="workoutCards"></div>
                <div class="workoutCards"></div>
                <div class="workoutCards"></div>
            </div>
        </div>
    </div>
</template>


<script>

export default{
name: 'Training',
data () {
    return {}
}
}
</script>


<style>
body{
    margin-top: 0%;
    background-color: pink;
}
.mainDivTraining{
    height: 100%;
}
.workoutOne h1{
    text-align: left;
    margin-left: 5%;
    font-size: 300%;
    margin-top: 5%;
    margin-bottom: 5%;
}
.workoutOne{
    background-color: #80ccff;
    position: relative;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    width: 90%;
    height: 75%;
    top: 12%;
    left: 5%;
    border-radius: 30px;
    box-shadow: 0px 0px 15px grey;
    margin-bottom: 5%;
}
.workoutCardsFlex{
    height: 50%;
    width: 90%;
    left: 5%;
    position: relative;
    display: inline-block;
    justify-content: space-around;
    display: flex;
}
.workoutCards{
    background-color: orange;
    height: 100%;
    width: 23%;
    position: relative;
    display: inline-block;
    justify-content: space-between;
    border-radius: 30px;
}


</style>