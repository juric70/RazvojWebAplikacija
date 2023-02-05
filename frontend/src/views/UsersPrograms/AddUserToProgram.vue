<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
              Dodajte Korisnike u program!
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
                <select v-model="UserId"  style="height: 300px;" multiple>
                    <option v-for="u in Users" v-bind:value="u.Id" v-bind:key="u.Id">
                        {{ u.Username }}
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

           <button class="RegisterButton" @click="addusersprograms()">
                Kreiraj!
            </button>
        </div>
    </div>
</template>

<script>
import axios from '../../../axios.js'

export default{
    name: 'AddUserToProgram',
    data(){
        return{
            isPayed:"", 
            MonthOfPayment:"", 
            ProgramId:"",
            UserId: [],
            Username: "",
            Programs: "",
            Users:""
        }
    },
    methods:{
        addusersprograms(){
            console.log(this.UserId.length , "JE PROGRAM ID")
           for(let i = 0; i<this.UserId.length; i++){
            console.log("ovdje udje")
                axios.post(`/api/createuserprogram`, {
                isPayed:this.isPayed, 
                MonthOfPayment: this.MonthOfPayment , 
                UserId: this.UserId[i],
                ProgramId: this.ProgramId
            }).then((res) => {
                if(res.data == true){
                window.location.replace(`/usersprograms`);
                }
             }).catch(() => {
                 alert("e tek sada ne valja :(")
                })
            }
        }
           
    },
    mounted(){
      axios.get('/api/programs').then((res) => {
        this.Programs = res.data.output;
        console.log("ovo je program: ",res.data.output )
      })
      axios.get('/api/users').then((res) => {
        this.Users = res.data.output;
        console.log("ovo je korisnik: ",this.Users )
      })
    }  
}
</script>

