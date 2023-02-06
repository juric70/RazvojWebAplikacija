<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
              Uredi program!
            </h1>
            <div class="cardInputBox">
                <input type="text" placeholder="Naslov" v-model="Title" id="Naslov"  >
            </div> 
            <div class="cardInputBox">
                <textarea  id="textarea" cols="30" rows="10" v-model="Description" placeholder="Opis"></textarea>
            </div>
            <div class="cardInputBox">
                <input type="text" placeholder="Cijena" v-model="Cost" id="Cijena"  >
            </div> 
           <button v-if="store?.user?.role === 1" class="RegisterButton" @click="modifyProgram($route?.params?.id)">
                Uredi program!
            </button>
        </div>
    </div>
</template>

<script>
import axios from '../../../axios.js'
import {store} from "../../../store.js"

export default{
    name: 'ModifyProgram',
    data(){
        return{ 
            Title:"", 
            Description:"", 
            Cost:"",
            store
        }
    },
    methods:{
        modifyProgram(id){
            axios.put(`/api/updateprogram/${id}`, {
            Title:this.Title,
            Description: this.Description,
            Cost: this.Cost
           
        }).then((res) => {
            if(res.data.result == true){
                alert(res.data.msg)
                window.location.replace('/programs');
            }else{
                alert(res.data.msg)
            }
        }).catch(() => {
            alert("e tek sada ne valja :(")
        })

        }
    },
    mounted(){
        axios.get(`/api/program/${this.$route.params.id}`).then((res) => {
        this.Title = res.data.result.Title;
        this.Description = res.data.result.Description;
        this.Cost = res.data.result.Cost
      })
    }
}
</script>

<style>
</style>