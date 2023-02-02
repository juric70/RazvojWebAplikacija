<template>
    <div class="RegisterBackground">
      <div class="card">
          <h1 class="RegisterDescriptionTitle">
             Jeste li sigurni da želite pobrisati o? {{$route.params.id  }}
          </h1>
    
         <button class="RegisterButton" @click="deleteTraining($route?.params?.id)">
             Obriši vježbu!
          </button>
      </div>
  </div>



</template>
<script>
import axios from 'axios';

export default{
  name: 'DeleteTraining',
  methods:{
    deleteTraining(id){
         
          axios.get(`/api/deltraining/${id}`).then((res)=>{
              alert(res.data.msg);
              window.location.replace('/trainings');
          }).catch((error) => {
              alert(error);
          })
      }
  }
}
</script>