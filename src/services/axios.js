import axios from 'axios';

const instance = axios.create({
    baseURL: `https://www.deckofcardsapi.com/api/deck/`,
})

export default instance;