const matrix = [[12, 23, 34, 45], [56, 67, 78, 89], [10, 20, 30, 40]];


// print all matrix
document.write(matrix)
document.write("<hr>")

//דרך 1 לחישוב סכום כל המערכים
// let Sum = 0;

// // לולאה מקוננת כדי לעבור על כל השורות והעמודות במטריצה
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     Sum += matrix[i][j]; // הוספת הערך הנוכחי לסכום הכללי
//   }
// }

// // הצגת הסכום
// document.write(`The sum of all values is: ${Sum}`);

////דרך 2 לחישוב סכום כל המערכים

let sum = 0

for(const row of matrix) {
    for(const cell of row) {
        sum += cell
    }
}

document.write(`sum of matrix is ${sum}`)
document.write('<hr>')

// ממוצע הערכים
sum = 0
let count = 0;
for(const row of matrix) {
    for(const cell of row) {
        sum += cell
        count += 1
    }
}

document.write(`avg of matrix is ${sum/count}`)
document.write('<hr>')


// find the max value of the matrix
let max = 0;
for(const row of matrix) {
    for(const cell of row) {
        max = cell > max ? cell : max
    }
}
document.write(`the max number is: ${max}`)
document.write('<hr>')


// find the min value of the matrix
let min = matrix[0][0];
for (let i = 0; i < matrix.length; i++) {
for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] < min) {
        min = matrix[i][j]; // עדכון הערך המינימלי
    }
}   
}
document.write(`the min number is: ${min}`)
document.write('<hr>')

