<template>
    <div class="RegisterBackground">
      <div class="card">
          <h1 class="RegisterDescriptionTitle">
             Jeste li sigurni da želite pobrisati odabrani program? {{$route.params.id  }}
          </h1>
    
         <button v-if="store?.user?.role === 1" class="RegisterButton" @click="deleteProgram($route?.params?.id)">
             Obriši vježbu!
          </button>
      </div>
  </div>



</template> 
<script>
import axios from '../../../axios.js';
import {store} from "../../../store.js"
export default{
  name: 'DeletePrograms',
  data(){
    return{
        store
    }
  },
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