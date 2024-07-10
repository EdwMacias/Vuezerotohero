import axios from 'axios';
import { GIFResponse } from '../interfaces/gif.response';
const apiKey = 'lx7X2SlWbwxXJXafPGLUGU4v5LqoADHV';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey,
    }
});

 export default giphyApi;

// giphyApi.get<GIFResponse>('/random')
//     .then( resp => {
//         console.log(resp.data.data.images.original.url);
//     })
//     .catch( error => console.log({error}))