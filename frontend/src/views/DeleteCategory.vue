<template>
    <div class="RegisterBackground">
      <div class="card">
          <h1 class="RegisterDescriptionTitle">
             Jeste li sigurni da želite pobrisati odabranu kategoriju? {{$route.params.id  }}
          </h1>
    
         <button class="RegisterButton" @click="deleteCategory($route?.params?.id)">
             Obriši vježbu!
          </button>
      </div>
  </div>



</template>
<script>
import axios from 'axios';

export default{
  name: 'DeleteCategory',
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