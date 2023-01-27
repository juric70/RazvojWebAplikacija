<template>

<div class="LoginCard">
    korisnik je vec prijavljen
    <button @click="logoutUser"> Logout</button>
</div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'Logout',
    methods:{
        logoutUser: function(){
                axios.delete("/api/logoutUser",)
                .then((res) => {
                    window.location.reload();

                  
                }).catch((error) => {
                    alert(error);
                })
            }
    }
}
</script>

<style></style>