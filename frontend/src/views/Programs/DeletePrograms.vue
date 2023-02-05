<template>
    <div class="RegisterBackground">
      <div class="card">
          <h1 class="RegisterDescriptionTitle">
             Jeste li sigurni da želite pobrisati odabrani program? {{$route.params.id  }}
          </h1>
    
         <button class="RegisterButton" @click="deleteProgram($route?.params?.id)">
             Obriši vježbu!
          </button>
      </div>
  </div>



</template>
<script>
import axios from '../../../axios.js';

export default{
  name: 'DeletePrograms',
  methods:{
    deleteProgram(id){
         
          axios.get(`/api/delprograms/${id}`).then((res)=>{
              alert(res.data.msg);
              window.location.replace('/programs');
          }).catch((error) => {
              alert(error);
          })
      }
  }
}
</script>