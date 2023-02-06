<template>
    <div class="mainDivTraining">
        <div class="workoutOne" v-for="cat in Categories" :key="cat.id">
            <h1 class="trainingTitleBox">{{cat.Title}}</h1>
            <!-- <p>{{ cat.id }}</p> -->
            <div class="workoutCardsFlex">
                <div class="workoutCards" v-for="tr in Trainings[`${cat.id}`]" :key="tr.id">
                    <div class="cardContent">
                        <h2><router-link :to="{name: 'FullTraining', params:{id: tr.id}}">{{ tr.Title }}</router-link></h2>
                        <p>{{ tr.Username }}</p>
                        <p>{{ tr.CreationDate }}</p>
                    </div>
                </div>

                
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
    display: block;
    padding: 30px 100px;
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
    height: 250px;
    border-radius: 30px;
    box-shadow: 0px 0px 15px #01294c;
    margin-bottom: 5%;
    display: flex;
}
.cardContent{

}
.workoutCards h2 a{
    text-decoration: none;
    color: #01427b;
}
.workoutCards h2 a:hover{
    text-decoration: none;
    color: #e6373a;
}
.workoutCardsFlex{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-direction: row;
    margin-right: 30px;
}
.workoutCards{
    margin-right: 10px;
    background-color: #d9d9d9;
    width: 24%;
    display: flex;
    flex-direction: column;
    margin: 20px 5px;
    border-radius: 10px;
    justify-content: center;
}


</style>