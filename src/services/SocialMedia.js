import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getSocialMedia() {
        return apiClient.get('data/social-media.json')
    }
}