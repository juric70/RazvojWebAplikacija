<template>
    <div class="RegisterBackground">
        <div class="card">
            <h1 class="RegisterDescriptionTitle">
              Dodajte Korisnike u program!
            </h1>
        
            <div class="cardInputBox">
                <label for="">Mjesec (mm-yyyy)</label>
                <input type="text" placeholder="Mjesec plaćanja " v-model="MonthOfPayment" id="title">
            </div> 
        
            <div class="cardInputBox">
                <label for="">Program</label>
                <select v-model="ProgramId" >
                    <option disabled value="">Molimo odaberite program!</option>
                    <option v-for="program in Programs" v-bind:value="program.id" v-bind:key="program.id">
                        {{ program.Title }}
                    </option>
                </select>
            </div>

             
            <div class="cardInputBox">
                <label>Molimo odaberite korisnike</label>
                <select v-model="UserId"  style="height: 150px;" multiple>
                    <option v-for="u in Users" v-bind:value="u.Id" v-bind:key="u.Id">
                        {{ u.Username }}
                    </option>
                </select>
            </div>

            <div class="cardInputBox">
                <label for="">Plaćena članarina</label>
                <select v-model="isPayed" >
                    <option v-bind:value="false" >
                       Članarina nije plaćena
                    </option>
                    <option v-bind:value="true">
                       Članarina je plaćena
                    </option>
                </select>
            </div>

           <button  v-if="store?.user?.role === 1" class="RegisterButton" @click="addusersprograms()">
                Kreiraj!
            </button>
        </div>
    </div>
</template>

<script>
import axios from '../../../axios.js'
import {store} from "../../../store.js"
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
            Users:"",
            store
        }
    },
    methods:{
        addusersprograms(){
           for(let i = 0; i<this.UserId.length; i++){
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

