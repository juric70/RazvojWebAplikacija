<template>
    <swiper
    :lazy="true"
    :slidesPerView="2"
    :loop="true"
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide> <img
        data-src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="swiper-lazy"
           />
          <div
             class="swiper-lazy-preloader swiper-lazy-preloader-white"
         ></div>
      </swiper-slide>
      <swiper-slide>        <img
          data-src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="swiper-lazy"
           />
          <div
             class="swiper-lazy-preloader swiper-lazy-preloader-white"
         ></div>
      </swiper-slide>
      <swiper-slide>        <img
          data-src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="swiper-lazy"
           />
          <div
             class="swiper-lazy-preloader swiper-lazy-preloader-white"
         ></div>
      </swiper-slide>
      <swiper-slide>
        <img
          data-src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="swiper-lazy"
           />
          <div
             class="swiper-lazy-preloader swiper-lazy-preloader-white"
         ></div>
      </swiper-slide>
      <swiper-slide>
        <img
          data-src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="swiper-lazy"
           />
          <div
             class="swiper-lazy-preloader swiper-lazy-preloader-white"
         ></div>
      </swiper-slide>
      <swiper-slide>        <img
          data-src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="swiper-lazy"
           />
     
          <div
             class="swiper-lazy-preloader swiper-lazy-preloader-white">
     
            </div>
      </swiper-slide>
      <swiper-slide>
        <img
          data-src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="swiper-lazy"
           />
          <div
             class="swiper-lazy-preloader swiper-lazy-preloader-white"
         ></div>
      </swiper-slide>
      <swiper-slide>
        <img
        data-src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="swiper-lazy"
           />
          <div
             class="swiper-lazy-preloader swiper-lazy-preloader-white"
         ></div>
      </swiper-slide>
      <swiper-slide>
        <img
        data-src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="swiper-lazy"
           />
          <div
             class="swiper-lazy-preloader swiper-lazy-preloader-white"
         ></div>
      </swiper-slide>
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
  };
  </script>

<style>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}
h1{
  z-index: 3;
  color: #000;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>