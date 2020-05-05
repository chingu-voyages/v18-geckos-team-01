import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://movie-finder-21a43.firebaseio.com/'
})

export default instance;