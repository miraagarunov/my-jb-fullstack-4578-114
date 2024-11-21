let multiplicationBoard =  []

for (let i = 1; i <= 10; i++) {
    let row = [];  // שורה חדשה לכל ערך של i
    
    
    for (let j = 1; j <= 10; j++) {
      row.push(i * j);  // הוספת תוצאת הכפל של i ו-j לשורה
        
    }
    
    multiplicationBoard.push(`${row} <br>`);  // הוספת השורה למטריצה

  }

document.write(multiplicationBoard)
document.write(`<hr>`);

// let totalSum = 0;

// for (let i = 0; i < multiplicationBoard.length; i++) {
//   for (let j = 0; j < multiplicationBoard[i].length; j++) {
//     totalSum += multiplicationBoard[i][j];  // הוספת כל ערך לסכום הכללי
//   }
// }

// // הצגת הסכום הכולל
// document.write(`The sum of all numbers in the multiplication board is:  ${totalSum}`);


