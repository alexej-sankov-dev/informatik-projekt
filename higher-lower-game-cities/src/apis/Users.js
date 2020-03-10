import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.2.103:4000/user'
});