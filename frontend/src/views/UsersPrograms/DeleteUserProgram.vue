<template>
    <div class="RegisterBackground">
      <div class="card">
          <h1 class="RegisterDescriptionTitle">
             Jeste li sigurni da želite pobrisati odabrani program za korisnika? {{$route.params.id  }}
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
  name: 'DeleteUserProgram',
  data(){
    return{
    
    }
  },
  methods:{
    deluserprogram(id){
         
          axios.get(`/api/deleteuserprogram/${id}`).then((res)=>{
             if(res.data){
              window.location.replace(`/usersprograms`);

             }
          }).catch((error) => {
              alert(error);
          })
      }
  },
  
}
</script>