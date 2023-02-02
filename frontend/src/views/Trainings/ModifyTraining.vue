<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Uredite trening!
            </h1>
            <div class="cardInputBox">
                <input type="text" placeholder="Naslov" v-model="Title" id="title"  >
            </div> 
            <div class="cardInputBox">
                <select v-model="selected">
                    <option v-for="cat in Categories" v-bind:value="cat.id" v-bind:key="cat.id">
                        {{ cat.Title }}
                    </option>
                </select>
            </div>
           <button class="RegisterButton" @click="modifyTraining($route?.params?.id)">
                Dalje!
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'ModifyTraining',
    data(){
        return{
            Title: "",
            Categories:"",
            selected: "",
           
        }
    },
    methods:{
        modifyTraining(id){
            axios.put(`/api/updatetraining/${id}`, {
            Title:this.Title,
            selected: this.selected
           
        }).then((res) => {
            if(res.data.result == true){
                alert(res.data.msg)
                window.location.replace('/trainings');
            }else{
                alert(res.data.msg)
            }
        }).catch(() => {
            alert("e tek sada ne valja :(")
        })

        }
    },
    mounted(){
        axios.get(`/api/training/${this.$route.params.id}`).then((res) => {
        this.Title = res.data.result.Title;
        this.selected = res.data.result.CategoryId;
        console.log( this.Title , "  ")
      })
      
      axios.get('/api/categories').then((res) => {
        this.Categories = res.data.categories;
        console.log("kategorije:  ", this.Categories[0].Title )
      
      })
    
    }
}

</script>

<style>
</style>