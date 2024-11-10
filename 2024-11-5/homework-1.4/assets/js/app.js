let number;

while (true) {
    
    number = prompt('enter a number');

    if(number<=0){
        break;
    }
   
    if (number % 2 !==0) {
        continue;
    }document.write('\n');

    for (let i = number; i >=number; i-=2) {
        document.write(i);
    }
}

//דרך נוספת לתרגיל 

// let num = +prompt("enter number");
// let numCopy = num;

// if (numCopy%2!==0)
//     numCopy=numCopy-1;

// do{

//     for(let i = numCopy; i >=; i-=2) {
//         document.write(`${i} <br>`);
//     }

//     num = +prompt("enter a number");
//     numCopy = num;
//     if (numCopy%2 !==0)
//         numCopy=numCopy-1
//     document.write(`<br>`)
// }while (num > 0);