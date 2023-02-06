<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Uredite program za {{ Username }}!
            </h1>
      

            <div class="cardInputBox">
                <select v-model="isPayed" >
                    <option v-bind:value="false" >
                       Članarina nije plaćena
                    </option>
                    <option v-bind:value="true">
                       Članarina je plaćena
                    </option>
                </select>
            </div>

           <button v-if="store?.user?.role === 1" class="RegisterButton" @click="modifypayment($route?.params?.id)">
                Uredi!
            </button>
        </div>
    </div>
</template>

<script>
import axios from '../../../axios.js'
import {store} from "../../../store.js"

export default{
    name: 'ModifyPayment',
    data(){
        return{
            isPayed:"", 
            userId:"",
            Username: "",
            is:"",
            store
        }
    },
    methods:{
        modifypayment(id){
            axios.put(`/api/userpayment/${id}`, {
                isPayed:this.isPayed, 
            }).then((res) => {
            if(res.data == true){
                window.location.replace(`/programsofuser/${this.userId}`);
            }else{
                alert(res.data.msg)
            }
        }).catch(() => {
            alert("e tek sada ne valja :(")
        })
        }
    },
    mounted(){
        axios.get(`/api/programuser/${this.$route.params.id}`).then((res) => {
            this.isPayed = res.data.output.IsPayed; 
            this.userId = res.data.output.UserId;
            this.Username = res.data.output.Username
            this.id = res.data.output.id
            
       })
   
    }  
}
</script>

