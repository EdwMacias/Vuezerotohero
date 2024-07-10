import giphyApi from "./10-axios";
import type { GIFResponse } from "../interfaces/gif.response";

export const getImage = async() => {
    try{
        const resp = await giphyApi.get<GIFResponse>('/random')
        return resp.data.data.images.original.url;

    }catch(error){
        throw 'Url no encontrado';
    }
    return 'https://api.giphy.com/v1/gifs/random?api_key=lx7X2SlWbwxXJXafPGLUGU4v5LqoADHV';
}

// export const getImagePromise = () => {
//     return new Promise( (resolve, reject) => {
//         resolve('https://api.giphy.com/v1/gifs/random?api_key=lx7X2SlWbwxXJXafPGLUGU4v5LqoADHV');
//     });
// }
getImage()
.then((url) => console.log({url}))
.catch((error) => console.error(error));
// console.log(getImagePromise());

