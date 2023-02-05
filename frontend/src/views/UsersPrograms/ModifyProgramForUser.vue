<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
               Uredite program za {{ Username }}!
            </h1>
        
            <div class="cardInputBox">
                <input type="text" placeholder="Mijesec plaćanja " v-model="MonthOfPayment" id="title">
            </div> 
        
            <div class="cardInputBox">
                <select v-model="ProgramId" >
                    <option v-for="program in Programs" v-bind:value="program.id" v-bind:key="program.id">
                        {{ program.Title }}
                    </option>
                </select>
            </div>

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

           <button class="RegisterButton" @click="modifyprogramUser($route?.params?.id)">
                Uredi!
            </button>
        </div>
    </div>
</template>

<script>
import axios from '../../../axios.js'

export default{
    name: 'ModifyProgramForUser',
    data(){
        return{
            isPayed:"", 
            MonthOfPayment:"", 
            ProgramId:"",
            userId:"",
            Username: "",
            Programs: ""
        }
    },
    methods:{
        modifyprogramUser(id){
            axios.put(`/api/modifyuserprogram/${id}`, {
                isPayed:this.isPayed, 
                MonthOfPayment: this.MonthOfPayment , 
                ProgramId: this.ProgramId
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
            this.MonthOfPayment =  res.data.output.MonthOfPayment; 
            this.ProgramId = res.data.output.ProgramId;
            this.userId = res.data.output.UserId;
            this.Username = res.data.output.Username
       })
      axios.get('/api/programs').then((res) => {
        this.Programs = res.data.output;
      })
    }  
}
</script>

