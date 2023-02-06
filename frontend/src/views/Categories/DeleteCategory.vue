<template>
    <div class="RegisterBackground">
      <div class="card">
          <h1 class="RegisterDescriptionTitle">
             Jeste li sigurni da želite pobrisati odabranu kategoriju? {{$route.params.id  }}
          </h1>
    
         <button  v-if="store?.user?.role === 1 || store?.user?.role === 2" class="RegisterButton" @click="deleteCategory($route?.params?.id)">
             Obriši vježbu!
          </button>
      </div>
  </div>



</template>
<script>
import axios from '../../../axios.js';
import {store} from "../../../store.js"

export default{
  name: 'DeleteCategory',
  data(){
    return{
        store
    }
  },
  methods:{
    deleteCategory(id){
         
          axios.get(`/api/delcategory/${id}`).then((res)=>{
              alert(res.data.msg);
              window.location.replace('/categories');
          }).catch((error) => {
              alert(error);
          })
      }
  }
}
</script>