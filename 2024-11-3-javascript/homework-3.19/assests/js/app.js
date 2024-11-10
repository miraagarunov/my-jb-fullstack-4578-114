let num = +prompt('enter a number');
let sum = 0;
let count = 0;


while(num !==0) {
  sum += num ;
  num = +prompt('enter a num');
  count ++ ;
}

  document.write(`average is ${sum /(count - 1)}`);
