<template>
    <div class="RegisterBackground1">
        <div class="card1">
            <button class="RegisterButton1" >
                <router-link :to="{name: 'ModifyNews'}">Uredi</router-link>
            </button>
            <button class="RegisterButton1" >
                <router-link class="linkDeco" :to="{name: 'DeleteNews'}">Obrisi</router-link> 
            </button> 
            <p class="creationDateForNews">{{ New.CreationDate }}</p>
            <h1 class="RegisterDescriptionTitle1">
                {{ New.Title }}
            </h1>
            <div class="testSlikaZaNews" v-bind:style="{'background-image': url('+ (`../../../../backend/public/${New.ImageName}`) +')}">
                <img v-bind:src="ImgName" />
            </div>
            <p class="descriptionForNews">{{ New.Decsription }}</p>
            <p style="float:right; margin-right:10%;">{{ New.Username }}</p>
        </div>
    </div>



</template>
<script>
import axios from 'axios';

export default{
    name: 'OneNew',
    data(){
        return{
            New: "",
            ImgName: ""
        }
    },
    mounted(){
        axios.get(`/api/new/${this.$route.params.id}`).then((res) => {
        this.New = res.data.result;
        this.ImgName = "../../../../backend/public/" + res.data.result.ImageName;
        console.log(res.data.result, "Ovdje je rezultat")
      })
    }
}
</script>
<style>
.RegisterBackground1{
    width: 100%;
    background-color: #cce6ff;
    padding-top: 5%;
}
.RegisterButton1{
    float: right;
    margin: 1%;
    height: 40px;
    width: 100px;
    border-radius: 10px;
    border: solid 1px #03A9F4;
    background-color: #03A9F4;
    font-weight: bold;
}
.RegisterButton1 a{
    text-decoration: none;
    color: white;
    padding: 20px;
}
.card1{
    width: 80%;
    margin-left: 10%;
    border-radius: 5px;
    background-color: white;
    overflow: scroll;
}
.creationDateForNews{
    margin-right: 80%;
    padding-top: 2%;
    padding-bottom: 2%;
}
.RegisterDescriptionTitle1{
    padding-bottom: 5%;
}
.testSlikaZaNews{
    width: 70%;
    margin-left: 15%;
    height: 450px;
    /* background-color: black; */
    margin-bottom: 5%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.descriptionForNews{
    padding-left: 5%;
    padding-right: 5%;
    margin-bottom: 5%;
}


</style>