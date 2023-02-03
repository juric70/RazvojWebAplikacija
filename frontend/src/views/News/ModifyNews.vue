<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
              Uredite novost
            </h1>
            <div class="cardInputBox">
                <input type="text" placeholder="Naslov" v-model="Title" id="title"  >
            </div> 
            <div class="cardInputBox">
                <textarea  id="textarea" cols="30" rows="10" v-model="Description" placeholder="Description"></textarea>
            </div>
           <button class="RegisterButton" @click="modifyNews()">
                Uredi novost!
            </button>
        </div>
    </div>
</template>

<script>
import axios from '../../../axios.js'

export default{
    name: 'ModifyNews',
    data(){
        return{
            Title: "",
            Description: "",
        }
    },
    methods:{
        modifyNews(){
            axios.put(`/api/updatenews/${this.$route.params.id}`, {
            Title:this.Title,
            Description:this.Description,
           
        }).then((res) => {
            if(res.data.result == true){
                alert(res.data.msg)
                window.location.replace('/allnews');
            }else{
                alert(res.data.msg)
            }
        }).catch(() => {
            alert("e tek sada ne valja :(")
        })

        }
    },
    mounted(){
        axios.get(`/api/new/${this.$route.params.id}`).then((res) => {
        this.Title = res.data.result.Title;
        this.Description = res.data.result.Decsription;
        console.log( this.Title , "  ", this.Description)
      })
    }
}
</script>

<style>
</style>