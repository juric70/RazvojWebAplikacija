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
import axios from '../../axios';
export default{
    name: 'Logout',
    methods:{
        logoutUser: function(){
                axios.delete("/api/logoutUser",)
                .then((res) => {
                    window.location.replace('/');

                  
                }).catch((error) => {
                    alert(error);
                })
            }
    }
}
</script>

<style></style>