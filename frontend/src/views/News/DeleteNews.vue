<template>
    <div class="RegisterBackground">
      <div class="card">
          <h1 class="RegisterDescriptionTitle">
             Jeste li sigurni da želite pobrisati odabranu novost? {{$route.params.id  }}
          </h1>
    
         <button class="RegisterButton" @click="deleteNews($route.params.id)">
             Obriši novost!
          </button>
      </div>
  </div>
</template>
<script>
import axios from 'axios';

export default{
  name: 'DeleteNews',
  methods:{
      deleteNews(id){
          axios.get(`/api/delnews/${id}`).then((res)=>{
              alert(res.data.msg);
              window.location.replace('/allnews');
          }).catch((error) => {
              alert(error);
          })
      }
  }
}
</script>