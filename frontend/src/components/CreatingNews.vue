<template>
<div class="card">
    <h1>Napravite novost!</h1>
    <div class="cardInputBox">
        <p>Naslov</p>
        <input type="text" name="Title" id="titleNewsCard" placeholder="Naslov" v-model="Title">
    </div>
    <div class="cardInputBox">
        <p>Sadržaj</p>
        <textarea  id="textarea" cols="30" rows="10" v-model="Description" placeholder="Sadržaj"></textarea>
    
    </div>

    <div class="">
    <input type="file" @change="onFileChange"  />
    <button @click="onUploadFile" class="upload-button RegisterButton" :disabled="!this.selectedFile">Upload file</button>
  </div>
</div>
</template>

<script>
import axios from '../../axios';
import { store } from '../../store.js';

export default {
    data(){
        return{
            selectedFile: "",
            Title: "",
            Description: "",
            store
        };
    },
    methods:{
        onFileChange(e){
            const selectedFile = e.target.files[0];
            this.selectedFile = selectedFile;
        },
        onUploadFile(){
            const formData = new FormData();
            formData.append("selectedFile", this.selectedFile);
            formData.append("Title", this.Title);
            formData.append("Description", this.Description);
            formData.append("Userid", this.store.user.id);
            axios
            .post("/api/createNews", formData, {headers:{"content-type":"multipart/form-data"}})
            .then(res => {
                console.log(res);
                alert("Uspješno keriran")
                window.location.replace('/allnews');
            })
            .catch(err => {
                console.log(err);
            })
        },
       
    }

}


</script>

<style>
.createNewsCard{
    padding: 50px;
}
.file-upload {
  box-shadow: 2px 2px 9px 2px #ccc;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  width: 60%;
  margin: 0 auto;
}
</style>