import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.56.1:4000/user'
});