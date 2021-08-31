import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com' ,
    headers: {
        Authorization:
           'Client-ID 3-Fy4sOD6UlR9-67kKEVk0GhXNTF8TNy2omlp_oJYz0', //identify ourselves & who is trying to access the unsplash API
    }
})