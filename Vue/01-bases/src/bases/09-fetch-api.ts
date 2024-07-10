import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'lx7X2SlWbwxXJXafPGLUGU4v5LqoADHV';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
.then(response =>  response.json())
.then((body: GIFResponse) => {
    console.log(body.data.images.original)
})
.catch(error => console.warn(error))
