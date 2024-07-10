
const characters = [
    'Goku',
    'Vegeta',
    'Trunks',
    'Krillin',
    'Gohan',
];


const [ g, v,t, , k, g3 = 'Yamoshi'] = characters;

console.log({v,t, k, g3 })


const returnArray = () => {
    return [123, 'ABC'] as const;
}

const [numbers, letters] = returnArray();
console.log(numbers * 2, letters.toLowerCase())