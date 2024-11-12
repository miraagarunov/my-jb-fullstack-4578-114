// const myCat = [
//     {
//         Name: "kitty",
//         Age: 5,  
//         Color: "brown", 
//         IsSterile: "no",
        
//     }

// ]

// let jsonString = JSON.stringify(myCat);
// alert(jsonString);


// const yourCat = [
//     {
//         Name: "kitty",
//         Age: 5,  
//         Color: "brown", 
//         IsSterile: "no",
        
//     }
// ]

// for(let yourCat1 of yourCat){
//     console.log(`properties of ${yourCat1.Name} `)
//     for(let property in yourCat1)
//         document.write(`<br>${property} ${yourCat1[property]}`)
// }

const myCat = [
    {
        Name: "kitty",
        Age: 5,  
        Color: "brown", 
        IsSterile: "no",
        
    }

]
   
   //turns objects into a JSON string
   let catJson =JSON.stringify(myCat);
   alert(catJson);
   
   // turns a json string into an objects
   let yourCat = JSON.parse(catJson)
   document.write(`Name: ${yourCat[0].Name} 
      <br> Age: ${yourCat[0].Age}
      <br> Color: ${yourCat[0].Color} 
      <br> Is Sterile: ${yourCat[0].IsSterile ? "Yes" : "No"}`);