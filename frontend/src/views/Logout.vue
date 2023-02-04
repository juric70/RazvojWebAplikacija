<template>
<div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Jeste li sigurni da se želite odjaviti?
            </h1>
      
           <button class="RegisterButton" @click="logoutUser">
             Odjavi se!
            </button>
        </div>
    </div>
</template>

<script>

import axios from '../../axios'
import {store} from '../../store.js'
export default{
    name: 'Logout',
    data(){
        return{
            store
        }
    },
    methods:{
        logoutUser: function(){
            axios.delete(`/api/logoutUser`)
                .then((res) => {
                    alert("zamjenio" , this.store?.user);
                    store.user=null;
                    alert("zamjenio" , this.store?.user);
                    window.location.replace('/');
               


                  
                }).catch((error) => {
                    alert(error);
                })
            }
    }
}
</script>

<style></style>