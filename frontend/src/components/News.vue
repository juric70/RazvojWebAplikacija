<template>
    <swiper
    :loop="true"
    :initial-slide="0"
    :lazy="true"
    :slidesPerView="1"
    :breakpoints="{
        700:{
          slidesPerView: 1.5

        }
      }"
      :autoplay="{
      delay: 5500,
      disableOnInteraction: false,
    }"
   
      :spaceBetween="30"
      :centeredSlides="true"
     
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      :speed="750"
      :on-transition-start="true"
     
      class="mySwiper"
    >
      
        <swiper-slide v-for="news in newsData" :key="news.Id"> 
          <div class=" imgDiv" :style="{'background-image': 'url('+ require(`../../../backend/public/${news.ImageName}`) +')'}">
            <!-- <img :src="require(`../../../backend/public/${news.ImageName}`)" alt=""> -->
             <div class="newsAndBtn">

              <h1 style="z-index: 1000;">{{news.Title }}</h1>
              <button class="NewsButtonClass"><router-link :to="{name:'OneNew', params:{id: news.Id}}">Procitaj Više!</router-link></button>
              </div>
             
            </div>
      </swiper-slide>

<!--      
       <swiper-slide> 
          <div
             class=" imgDiv">
             <div class="newsAndBtn">
              <h1 style="z-index: 1000;">imamo neki naslov koji treba urediti</h1>

              <button class="NewsButtonClass">Procitaj Više!</button>
              </div>
             
            </div>
      </swiper-slide>
      
      <swiper-slide> 
          <div
             class=" imgDiv">
             <div class="newsAndBtn">
              <h1 style="z-index: 1000;">imamo neki naslov koji treba urediti</h1>

              <button class="NewsButtonClass">Procitaj Više!</button>
              </div>
             
            </div>
      </swiper-slide>

      <swiper-slide> 
          <div
             class=" imgDiv">
             <div class="newsAndBtn">
              <h1 style="z-index: 1000;">imamo neki naslov koji treba urediti</h1>

              <button class="NewsButtonClass">Procitaj Više!</button>
              </div>
             
            </div>
      </swiper-slide>  -->

      

     
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/lazy";

  import "swiper/css/pagination";
  import "swiper/css/navigation";
  
  
  // import required modules
  import { Lazy, Autoplay, Pagination, Navigation } from "swiper";
  import axios from "../../axios";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Lazy, Autoplay, Pagination, Navigation],
   
      };
    },
    data(){
      return{
        urlPlivanje: '../assets/plivanje2.jpg',
        newsData: ""
      }
    },
    mounted(){
      axios.get('/api/news').then((res) => {
        this.newsData = res.data.news;
        
      })
    }
  };
  </script>

<style>
#app { height: 100% }
html,
h1{
  z-index: 3;
  color: #000;
}

.swiper {
  width: 100%;
  height: 500px;
}
@media 	(max-width: 700px) {
  .swiper{
    height: 40%;
  }
  
  
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  transition: opacity 1s;  
  opacity: 0.3;
  height: 100%;
  margin: 20px 0;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.imgDiv{
  width: 100%;
  height: 100%;
  /* background-image: url('../assets/plivanje2.jpg'); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-slide-active{
  opacity: 0.8;
}


.NewsButtonClass{
    width: 150px;
    height: 45px;
    padding:6px;
    border-radius: 15px;
    border: 1px solid white;
    background-color: white;
}
.newsAndBtn{
  width: 94%;
  position: fixed;
  bottom: 10%;
  margin: 3%;
}

</style>