

// function greetPerson(name: any){
//     return `Hello, ${name}!`;
// }

const greetPerson = (name: string) => {
      return `Hello, ${name}!`;
}

const greetPerson2 = (name: string) => `Hello, ${name}!`;



console.log(greetPerson('Tony'), greetPerson2('Edwar'));

const getUser = (uid: string) => ({
    uid: uid,
    username: 'Tony001'
})

console.log( getUser('abc123') );

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power:'SuperStrong'  
    },
]

const hero = heroes.find((h) => h.id === 2 );

console.log(hero?.power?.toUpperCase() || 'No hero found');