import axios from 'axios';

const environment = "https://apilistatarefa.herokuapp.com/";
//const environment = "http://localhost:3002/";

const api = axios.create({
    baseURL: environment
});

export default api;