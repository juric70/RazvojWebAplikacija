import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://kvsum.studenti.sum.ba',

})

export default instance;