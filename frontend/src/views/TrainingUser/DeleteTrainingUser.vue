<template>
    <div class="RegisterBackground">
      <div class="card">
          <h1 class="RegisterDescriptionTitle">
             Jeste li sigurni da želite pobrisati odabrani trening za korisnika? 
          </h1>
         <button class="RegisterButton" @click="deluserprogram($route.params.id)">
             Obriši!
          </button>
      </div>
  </div>
</template>
<script>
import axios from '../../../axios.js';

export default{
  name: 'DeleteTrainingUser',
  data(){
    return{
    }
  },
  methods:{
    deluserprogram(id){
         
          axios.get(`/api/deleteusertraining/${id}`).then((res)=>{
             if(res.data){
              window.location.replace(`/trusers`);
             }
          }).catch((error) => {
              alert(error);
          })
      }
  },
  
}
</script>