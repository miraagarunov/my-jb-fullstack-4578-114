//3 cars objects
const car1 = {
    model: 'porshe',
    year : 2024, 
    color : 'black',
}

const car2 = {
    model: 'mercedes',
    year : 2023, 
    color : 'white',
    
}


const car3 = {
    model: 'rang rover',
    year : 2022, 
    color : 'navy',

}
const cars = [car1, car2, car3]

for(const car of cars){
    console.log(`properties of ${car.model}`)
    for(const property in car)
        console.log(`${property}   ${car[property]}`)
        console.log("----------------------------");

}






