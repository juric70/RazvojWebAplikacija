<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
              Uredi kategoriju!
            </h1>
            <div class="cardInputBox">
                <input type="text" placeholder="Naslov" v-model="Title" id="title"  >
            </div> 
           <button class="RegisterButton" @click="modifyCategory($route?.params?.id)">
                Uredi kategoriju!
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'ModifyCategory',
    data(){
        return{
            Title: "",
        }
    },
    methods:{
        modifyCategory(id){
            axios.put(`/api/updatecategory/${id}`, {
            Title:this.Title,
           
        }).then((res) => {
            if(res.data.result == true){
                alert(res.data.msg)
                window.location.replace('/categories');
            }else{
                alert(res.data.msg)
            }
        }).catch(() => {
            alert("e tek sada ne valja :(")
        })

        }
    },
    mounted(){
        axios.get(`/api/category/${this.$route.params.id}`).then((res) => {
        this.Title = res.data.result.Title;
        console.log( this.Title , "  ", this.Description)
      })
    }
}
</script>

<style>
</style>