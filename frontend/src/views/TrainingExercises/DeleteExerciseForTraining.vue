<template>
    <div class="RegisterBackground">
      <div class="card">
          <h1 class="RegisterDescriptionTitle">
             Jeste li sigurni da želite pobrisati odabranu vježbu na treningu? {{$route.params.id  }}
          </h1>
    
         <button v-if="store?.user?.role === 1 || store?.user?.role === 2" class="RegisterButton" @click="deletetrexe($route.params.id)">
             Obriši vježbu!
          </button>
      </div>
  </div>
</template>
<script>
import axios from '../../../axios.js';
import {store} from "../../../store.js"

export default{
  name: 'DeleteExerciseForTraining',
  data(){
    return{ 
      TrainingId:"",
      store
    }
  },
  methods:{
    deletetrexe(id){
         
          axios.get(`/api/deltraexe/${id}`).then((res)=>{
              alert(res.data.msg);
              window.location.replace(`/fulltraining/${this.TrainingId}`);
          }).catch((error) => {
              alert(error);
          })
      }
  },
  mounted(){
    axios.get(`/api/traexe/${this.$route.params.id}`).then((res) => {
      this.TrainingId = res.data.result.TrainingId;
      })
  }

}
</script>