import heroes, { owners } from "../data/heroes";

 console.log( heroes, owners)

export const getHeroById = (id: number) => {
    return heroes.find( h => h.id === id) ?? {};
}

console.log(getHeroById(1))

export const getHeroesByOwner = (owner: string) => {
    return heroes.filter( h => h.owner === owner);
}

console.log(getHeroesByOwner('DC'));

