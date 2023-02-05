<template>
  <Header/>
  <RouterView/>
  <Footer/>
  <Login/>
</template>

<script>
import axios from '../axios';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { store } from '../store.js'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      store
    }
  },
  mounted(){
    console.log("Pvo je store prije funkcije: ", this.store?.user);
    axios.get('/api/login').then((res) => {
      store.user = res.data.user;
      console.log("Ovo je store:" , this.store?.user);

    } )
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  color: aliceblue;
  background-color: #01427b;
}
template{
  background-color: #01427b;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #01427b;
  height: 100%;
}
</style>