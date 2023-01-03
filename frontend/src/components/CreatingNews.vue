<template>
<div class="card">
    <div class="cardInputBox">
        <p>Title</p>
        <input type="text" name="Title" id="titleNewsCard"  v-model="Title">
    </div>
    <div class="cardInputBox">
        <p>Description</p>
        <input type="text" name="Description" id="NewsCard"  v-model="Description">
    </div>

    <div class="">
    <input type="file" @change="onFileChange"  />
    <button @click="onUploadFile" class="upload-button RegisterButton" :disabled="!this.selectedFile">Upload file</button>
  </div>


</div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            selectedFile: "",
            Title: "",
            Description: ""
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

            axios
            .post("/api/createNews", formData, {headers:{"content-type":"multipart/form-data"}})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
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