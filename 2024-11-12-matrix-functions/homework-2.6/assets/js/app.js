function getMinimalItem(arr){
  let min = Infinity
  let index;
  for(let i=0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
      index = i
    }
  }
  return index
}

console.log(getMinimalItem([99,13,44]))
console.log(getMinimalItem([990,13,414,9,55]))