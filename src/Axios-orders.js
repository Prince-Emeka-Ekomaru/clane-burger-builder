import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://clane-burger-builder.firebaseio.com/'
});


export default instance;