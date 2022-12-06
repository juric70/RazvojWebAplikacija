<template>
  <Header/>
  <MiddleContent/>
  <News/>
  <AboutUs/>
  <AboutProject/>

</template>

<script>
import Header from './components/Header.vue'
import MiddleContent from './components/MiddleContent.vue'
import News from './components/News.vue'
import AboutUs from './components/AboutUs.vue'
import AboutProject from './components/AboutProject.vue'





export default {
  name: 'App',
  components: {
    Header,
    MiddleContent,
    News,
    AboutUs,
    AboutProject
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
