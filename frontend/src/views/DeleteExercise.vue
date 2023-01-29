<template>
      <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Jeste li sigurni da želite pobrisati odabranu vjezbu? {{$route.params.id  }}
            </h1>
      
           <button class="RegisterButton" @click="deleteExercise($route?.params?.id)">
               Obriši vježbu!
            </button>
        </div>
    </div>



</template>
<script>
import axios from 'axios';

export default{
    name: 'DeleteExercise',
    methods:{
        deleteExercise(id){
           
            axios.get(`/api/delexercises/${id}`).then((res)=>{
                alert(res.data.msg);
                window.location.replace('/exercises');
            }).catch((error) => {
                alert(error);
            })
        }
    }
}
</script>