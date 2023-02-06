
 <template>
    <MiddleContent/>
    <News/>
  
  </template>
  
  <script>
  import MiddleContent from './MiddleContent.vue'
  import News from './News.vue'
  export default {
    name: 'Home',
    components: {
      MiddleContent,
      News,
   
    }, 

  }

  
  </script>
  
  <style>
  #app {
    /* height: 100%; */
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style> 