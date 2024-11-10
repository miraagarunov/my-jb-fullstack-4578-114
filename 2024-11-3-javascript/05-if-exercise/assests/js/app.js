let num1 = prompt(`enter a number`);
let num2 = prompt('enter another number');


// we need to convert  להסב each variable value to the numeric value
//num1 = parseInt(num1)
//num2 = parseInt(num2) // int -> integer. מספר שלם

// if we neet to support decimal numbers, we need to use float instead of integer
//num1 = parseInt(num1)
//num2 = parseInt(num2) // float -> מספר עשרוני

// or we can use the + sign before a string
num1 = +num1; // + is a conversion operator if placed before a string operand
num2 = +num2;

if (num1 > num2) {
    document.write(`the biggest is ${num1}`)
}
else{
    document.write(`the biggest is ${num2}`)
}
 // arithmetic equation:
 // 21 > 9 => true

  // staring equation:
 // "21" > "9" => false

