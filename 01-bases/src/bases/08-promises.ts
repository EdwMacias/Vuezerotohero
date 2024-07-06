import { getHeroById } from "./07-imp-exp";
import type { Hero } from "../data/heroes";
// console.log('inicio')




// new Promise( (resolve, reject) => {
//     // console.log('Cargando...')
//    setTimeout(() => {
//     //  resolve('Mi amigo cumplio')

//      reject('No se pudo cargar')
   
//     },1000);
//    return;
// }).then((message) => {
//     console.log(message)
// })
// .catch(error => console.warn(error))
// .finally(() => console.log('Finalizo'))



// console.log('fin')

const getHeroByIdAsync = (id: number):Promise<Hero> =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
        const hero = getHeroById(id);
        if (hero) {
            resolve(hero);
        } else {
            reject(`No se pudo encontrar el héroe ${id}`);
        }
    }, 1500);

})
}

getHeroByIdAsync(200)
    .then(hero => console.log('el nombre es: ', hero.name))
    .catch(alert);