
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
  body{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style> 