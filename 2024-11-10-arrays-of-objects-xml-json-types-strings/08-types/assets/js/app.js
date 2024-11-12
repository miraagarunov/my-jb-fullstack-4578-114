const num = 123
console.log(`typeof num is ${typeof num}`);

const firstName = 'mira'
console.log(`typeof firstName is ${typeof firstNameName}`);

const iAmHappy = true
console.log(`typeof iAmHappy is ${typeof iAmHappy}`);

const iAmSad = 4 < 2
console.log(`typeof iAmSad is ${typeof iAmSad}`);

const clac = 4 + 20
console.log(`typeof calc is ${typeof clac}`);

let dayOfWeek;
console.log(`typeof dayOfWeek is ${typeof dayOfWeek }`);

const itay = {name: 'itay', type: 'person', age: 25, average: 90.20}
console.log(`typeof itay is ${typeof itay }`);

console.log(`typeof itay.type is ${typeof itay.type}`);

console.log(`typeof itay.birthdate is ${typeof itay.birthdate}`);

console.log(`typeof itay.average is ${typeof itay.average}`);

//alert ('hello')
console.log(`typeof alert is ${typeof alert}`);

const animals = ['dog', 'cat','fish']
console.log(`typeof animals is ${typeof animals}`);

console.log(`itay age is represented as ${typeof itay.age === 'number' ? 'number' : 'string'}`)

if(typeof itay.age !=='number') itay.age = +itay.age

const osherJSON = `\{"name":"osher", "age",22}`
const osher = JSON.parse(osherJSON)
