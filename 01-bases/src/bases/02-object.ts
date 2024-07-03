

const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 12345,
        lat: 12.345,
        lng: 23.456
    }, 
} //as const;
const person2 = {...person, address: {...person.address}};
person2.lastName = 'Lannister';
person2.address.city = 'LA';
console.log({person});
console.log({person2});

const person3= structuredClone(person);
person3.lastName = 'Lannister';
person3.address.city = 'LA';
console.log({person3});