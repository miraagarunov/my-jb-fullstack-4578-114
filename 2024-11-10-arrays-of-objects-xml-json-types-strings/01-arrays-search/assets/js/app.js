
//  const min = - 100;
//  const max = 100;

//  const randomNumber = [] // create an EMPTY array

//  for(let i = 1; i<=100; i++){
//     randomNumber.push(parseInt (Math.random() * (max - min)) + min)
//  }
// document.write(randomNumber)

 const min = - 100;
 const max = 100;

 const randomNumbers = [] // create an EMPTY array

 for(let i = 1; i<=100; i++){
    const randomNumber = parseInt(Math.random() * (max - min ) + min)
    randomNumbers.push(randomNumber)
 }
alert(randomNumbers)

const guess = +prompt('guess a number in the array')
let isBingo = false;

for(const randomNumber of randomNumbers){
    if(randomNumber === guess){
        isBingo = true;
    }
}
alert(isBingo? 'Bingo' : 'No Bingo')
