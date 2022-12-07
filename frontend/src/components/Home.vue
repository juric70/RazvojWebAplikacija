
 <template>
    <MiddleContent/>
    <News/>
    <AboutUs/>
    <AboutProject/>
  
  </template>
  
  <script>
  import MiddleContent from './MiddleContent.vue'
  import News from './News.vue'
  import AboutUs from './AboutUs.vue'
  import AboutProject from './AboutProject.vue'
  export default {
    name: 'Home',
    components: {
      MiddleContent,
      News,
      AboutUs,
      AboutProject,
   
    }
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