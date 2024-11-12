
const students = [
    {
        firstName: 'osher',
        lastName: 'santana',
        grades: [70,80,90]
    },{
        firstName: 'mira',
        lastName: 'agarunov',
        grades: [100,89,91]
    },
    {
        firstName: 'mash',
        lastName: 'donde',
        grades: [100,90,99]
    }

]

const jsonString = JSON.stringify(students);
document.write(jsonString);
document.write(`<hr>`);

console.log(students)
console.log(jsonString)

const friends =  JSON.parse(jsonString);
console.log(friends);

// //turns a json string an object
// const friends = JSON.parse(jsonString)
// console.log(friends)
// console.log(⁠`i have ${friends.length} friends`)