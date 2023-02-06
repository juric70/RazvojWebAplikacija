<template>
      <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Jeste li sigurni da želite pobrisati odabranu vjezbu? {{$route.params.id  }}
            </h1>
      
           <button v-if="store?.user?.role === 1 || store?.user?.role === 2" class="RegisterButton" @click="deleteExercise($route?.params?.id)">
               Obriši vježbu!
            </button>
        </div>
    </div>



</template>
<script>
import axios from '../../../axios.js';
import {store} from "../../../store.js"

export default{
    name: 'DeleteExercise',
    data(){
        return{
            store
        }
    },
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