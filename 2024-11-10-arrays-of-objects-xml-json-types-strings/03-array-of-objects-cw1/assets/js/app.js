// const students = [{
//     name: 'mishel',
//     lastName: 'donde', 
//     grades: [90],
// },{
//     name: 'ido',
//     lastName: 'kahana', 
//     grades: [89],
// },{
//     name: 'mira',
//     lastName: 'agarunov', 
//     grades: [100], 
// }
// ]

// for(studentsOfArray in students){
//     console.log(students[studentsOfArray].name);
//     console.log(students[studentsOfArray].lastName);
//     console.log(students[studentsOfArray].grades);

// }

//פתרון של שחר
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

console.log(students);

for(const student of students){

    let sum = 0;
    for(const grade of student.grades){
        sum += grade;
    }

    console.log(`name of student is ${student.firstName} and their average is ${sum/ student.grades.length} `)
    

}