

// function greetPerson(name: any){
//     return `Hello, ${name}!`;
// }

const greetPerson = (name: string) => {
      return `Hello, ${name}!`;
}

const greetPerson2 = (name: string) => `Hello, ${name}!`;



console.log(greetPerson('Tony'), greetPerson2('Edwar'));

const getUser = () => ({
    uid: 'ABC-123',
    username: 'Tony001'
})

console.log( getUser())