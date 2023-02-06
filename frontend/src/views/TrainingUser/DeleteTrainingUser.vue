<template>
    <div class="RegisterBackground">
      <div class="card">
          <h1 class="RegisterDescriptionTitle">
             Jeste li sigurni da želite pobrisati odabrani trening za korisnika? 
          </h1>
         <button v-if="store?.user?.role === 1 || store?.user?.role === 2" class="RegisterButton" @click="deluserprogram($route.params.id)">
             Obriši!
          </button>
      </div> 
  </div>
</template>
<script>
import axios from '../../../axios.js';
import {store} from "../../../store.js"

export default{
  name: 'DeleteTrainingUser',
  data(){
    return{
      store
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