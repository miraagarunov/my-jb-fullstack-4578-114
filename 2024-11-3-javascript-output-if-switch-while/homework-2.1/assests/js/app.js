let num1 = prompt(`enter a number`);
let num2 = prompt('enter another number');


if (num1 === num2) {
    document.write(`the numbers are equal ${num1}`)
}else{
    if (num1>num2){
        document.write (`the biggest number is ${num1}`)
    }else{
        document.write(`the biggest number is ${num2}`)
    }
    
}

