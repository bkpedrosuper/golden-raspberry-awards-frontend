import axios from 'axios'

const baseURL = 'https://tools.texoit.com/backend-java/api/movies'

const api = axios.create({
    baseURL: baseURL,
});

export default api;