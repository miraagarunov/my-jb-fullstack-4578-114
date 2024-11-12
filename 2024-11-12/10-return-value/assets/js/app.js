function getMaxArrayItem(numbersArray) {
    let max = 0;
    for(const num of numbersArray) {
        max = num > max ? num : max
    }
    return max
    console.log('function done')
}

//const max = getMaxArrayItem([1, 2, 3])
// console.log(`max is ${max})

console.log(`max is ${getMaxArrayItem([1, 9, 3])}`)

function doSomething(){
    console.log('inside function invocation')
}
console.log(`result of doSomething is ${doSomething()}`)