<template>
    <div class="mainDivTraining">
        <div class="workoutOne" v-for="cat in Categories" :key="cat.id">
            <h1 class="trainingTitleBox">{{cat.Title}}</h1>
            <!-- <p>{{ cat.id }}</p> -->
            <div class="workoutCardsFlex">
                <div class="workoutCards" v-for="tr in Trainings[`${cat.id}`]" :key="tr.id">
                    <p>{{ tr.Title }}</p></div>
                
            </div>
        </div>
        
    </div>
</template>


<script>
import axios from '../../axios.js';


export default{
name: 'Training',
data () {
    return {
        Categories:"",
        Trainings:{}
    }
},
methods:{
    getTrainings(id){
        console.log("udje u funkciju")
        axios.get(`/api/trainingscat/${id}`).then((res) => {
            this.Trainings[`${id}`] = res.data.training;
            console.log(res.data.training);
          
        })
    }
},
mounted(){
      axios.get('/api/categories').then((res) => {
        this.Categories = res.data.categories;
        console.log("kategorije:  ", this.Categories[0].Title )
        this.Categories.forEach(cat => {
             let ind = cat.id;
            this.Trainings[`${ind}`] = [];
            this.getTrainings(ind);
        });
      })
    
      
    }
}

</script>


<style>
.trainingTitleBox{
    display: block;
    width: 50%;
}
.mainDivTraining{
    margin-top: 50px;
    display: block;
    padding: 40px;
}
.workoutOne h1{
    color: #01427b;
    text-align: left;
    margin-left: 30px;
    font-size: 300%;
}
.workoutOne{
    background-color: #e6e6e6;
    overflow: hidden;
    height: fit-content;
    border-radius: 30px;
    box-shadow: 0px 0px 15px #01294c;
    margin-bottom: 5%;
    display: flex;
}
.workoutCardsFlex{
    height: 50%;
    width: 90%;
}
.workoutCards{
    background-color: #e6373a;
    width: 150px;
    display: flex;
    justify-content: center
}


</style>