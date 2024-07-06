import heroes, { type Owner } from "../data/heroes";

//  console.log( heroes)

export const getHeroById = (id: number) => {
    return heroes.find( h => h.id === id) ;
}

// console.log(getHeroById(1))

export const getHeroesByOwner = (owner: Owner) => {
    return heroes.filter( h => h.owner === owner);
}

// console.log(getHeroesByOwner('Marvel'));

