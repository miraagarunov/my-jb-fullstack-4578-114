function button() {
   let numberInput= document.getElementById("numberInput").value;
   let number2Input= document.getElementById("number2Input").value;
   let number3Input= document.getElementById("number3Input").value;

   const newNumber =((+numberInput))+(+(number2Input))+(+(number3Input));
   alert(`the amount of ${numberInput} + ${number2Input} + ${number3Input} = is ${newNumber}`)

}

// // function sum() {
// //     let number1= document.getElementById("numberInput").value;
// //     let number2= document.getElementById("number2Input").value;
// //     let number3= document.getElementById("number3Input").value;
 
// //     let sum =number1+number2+number3/3;
// //     alert(`the average is ${sum}`)
 
// //  }

function sum() {
    let num1 = parseInt(document.getElementById("numberInput").value);
    let num2 = parseInt(document.getElementById("number2Input").value);
    let num3 = parseInt(document.getElementById("number3Input").value);

    let sum = (num1 + num2 + num3)/3;

    alert(`the average is ${sum}`)
}
 

// // function button() {
// //     const pow =3;
// //    let numberInput= document.getElementById("numberInput").value;
// //    const newNumber = Math.pow(numberInput,pow);

// //    alert(`the number you choose is ${numberInput} power ${pow} is =${newNumber}`)
// //    numberInput.style.backgroundColor = "lightblue"; 

// // }

