import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://raw.githubusercontent.com/NadzeyaZhukovich/LenaKarnilo.github.io/master/public/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAboutMe(language) {
        return apiClient.get('data/'+ language +'/about.json')
    }
}