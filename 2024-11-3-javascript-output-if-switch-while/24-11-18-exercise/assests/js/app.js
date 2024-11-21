//תרגיל 1 מאנייבלי

// num1 = +prompt('enter a number')
// num2 = +prompt('enter another number')
// num3 = +prompt('enter and another number')

// if(num3>num1 && num3>num2){
//     alert(`${num3} is the bigger number`)
// }else if(num2>num3 && num2>num1){
//     alert(`${num2} is the bigger number`)
// }else if(num1>num3 && num1>num2){
//     alert(`${num1} is the bigger number`)
// }


// //תרגיל 2 מאנייבלי

// const num1 = +prompt("enter a number")
// const num2 = +prompt("enter another number")
// const operator = prompt("enter an operator ")

// switch (operator) {
//     case "*":
//         alert(`${num1 * num2}`);
//         break;
//     case "+":
//         alert(`${num1 + num2}`);
//         break;
//     case "-":
//         alert(`${num1 - num2}`);
//         break;
//     case "/":
//         alert(`${num1 / num2}`);
//         break;

// }

//תרגיל 3 חלק 1 מאנבלי

// let number = +prompt("Please enter your number");
// let sum = 0;

// while(number > 0) {
//     sum += number % 10; // sum = sum + number % 10
//     number = parseInt(number / 10);
// }

// alert(`The sum is: ${sum}`);

//תרגיל 3 חלק 2 מאנבלי
// const number = +prompt("Please enter your number");

// let isPrime = true;

// if(number == 1) {
//     isPrime = false;
// }
// else {
//     for (let i = 2; i <= number / 2; i++) { // i <= Math.sqrt(number) - more efficient.
//         if(number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if(isPrime) {
//     alert("This is a prime number");
// }
// else {
//     alert("This is not a prime number");

// }


//תרגיל 4 חלק 1

const arr = [100, 20, 30, 40, 50, 60, 70, 80, 90];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}

alert(`Largest number is: ${max}`);