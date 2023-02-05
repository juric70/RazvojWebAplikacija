<template>
    <div class="mainDivTraining">
        <div class="workoutOne" v-for="cat in Categories" :key="cat.id">
            <h1>{{cat.Title}}</h1>
            <p>{{ cat.id }}</p>
            <div class="workoutCardsFlex" style="height: 50%; width: 70%; background-color: red;">
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

.mainDivTraining{
    margin-bottom: 20%;
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