<template>
    <div class="RegisterBackground1">
        <div class="newsBlock">
            <div class="card1">
                <div class="blockDateAndButton">
                    <p class="creationDateForNews">{{ New.CreationDate }}</p>
                    <div class="blockNewsButtons">
                        <button class="RegisterButton1" >
                            <router-link :to="{name: 'ModifyNews'}">Uredi</router-link>
                        </button>
                        <button class="RegisterButton1" >
                            <router-link class="linkDeco" :to="{name: 'DeleteNews'}">Obrisi</router-link> 
                        </button>
                    </div> 
                    
                </div>
                <h1 class="RegisterDescriptionTitle1">
                    {{ New.Title }}
                </h1>
                <div class="blockNewsPicture" >
                    <img class="pictureForNews" v-if="New !== ''" v-bind:src="`http://localhost:3000/${New.ImageName}`" /> 
                </div>
                <p class="descriptionForNews">{{ New.Decsription }}</p>
                <p class="blockAuthor">{{ New.Username }}</p>
            </div>
        </div>
    </div>



</template>
<script>
import axios from '../../../axios.js';

export default{
    name: 'OneNew',
    data(){
        return{
            New: "",
            ImgName: "",
           
        }
    },
    mounted(){
        axios.get(`/api/new/${this.$route.params.id}`).then((res) => {
        this.New = res.data.result;
        this.ImgName = `../../../../backend/public/${res.data.result.ImageName}`;
      

      })
    }
}
</script>
<style>
.RegisterBackground1{
    width: 100%;
    display: flex;
    justify-content: center;
}
.newsBlock{
    display: block;
    padding: 50px 200px;
}
.blockDateAndButton{
    display: flex;
    justify-content: space-between;
    padding: 15px 40px;
}
.blockNewsButtons{
    display: block;
    align-self: center;
}
.RegisterButton1{
    border-radius: 10px;
    border: solid 1px #01427b;
    background-color: #01427b;
    font-weight: bold;
    margin-left: 10px;
    padding: 10px;
}
.RegisterButton1 a{
    text-decoration: none;
    color: white;
    padding: 20px;
}
.card1{
    border-radius: 30px;
    background-color: #e6e6e6;
    overflow: scroll;
    display: block;
    box-shadow: 0px 0px 15px #01294c;
}
.creationDateForNews{
    color: #01427b;
}
.RegisterDescriptionTitle1{
    display: block;
    color: #01427b;
}
.blockNewsPicture{
    display: block;
    padding: 40px 120px;
}
.pictureForNews{
    width: 100%;
    border-radius: 5px;
}
.descriptionForNews{
    display: block;
    text-align: left;
    padding: 20px 150px;
}
.blockAuthor{
    display: flex;
    justify-content: flex-end;
    padding-right: 40px;
    color: #01427b;
}


</style>