

const grades = [100, 90, 80, 70, 60, 50]


// document.write(`${grades[0]}<br>`)
// document.write(`${grades[1]}<br>`)
// document.write(`${grades[2]}<br>`)
// document.write(`${grades[3]}<br>`)
// document.write(`${grades[4]}<br>`)
// document.write(`${grades[5]}<br>`)


// for(let i = 0; i <=grades.length - 1 ; i++) {
//     document.write(`${grades[i]}<br>`)
// }

//for-of
// for(const item of grades) {
//     document.write(`${item} <br>`)
// }

// // disadvantage of for-of loop
// for(let i = 0; i <=grades.length - 1 ; i++) {
//     document.write(`${grades[i]}<br>`)
//     grades [i] +=6;
// }
// document.write(grades)
// document.write('<br>')

// for-of
for(let item of grades) {
    document.write(`${item}<br>`)
}
document.write(grades)
document.write('<br>')