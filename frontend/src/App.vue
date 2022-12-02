<template>
  <Header/>
  <MiddleContent/>
</template>

<script>
import Header from './components/Header.vue'
import MiddleContent from './components/MiddleContent.vue'


export default {
  name: 'App',
  components: {
    Header,
    MiddleContent
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
