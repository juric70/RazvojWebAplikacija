import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://kvsum.studenti.sum.ba',
  baseURL: 'http://localhost:3000',

})

export default instance;