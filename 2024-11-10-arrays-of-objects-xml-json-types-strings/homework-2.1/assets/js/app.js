const books = [
    {
        bookId: 123 ,
        bookName: "tvd",  
        bookAuthor: "jkr", 
        bookPrice: 29,
        
    },{
        bookId: 456 ,
        bookName: "starlight",  
        bookAuthor: "mk", 
        bookPrice: 30,
    },
    {
        bookId: 789 ,
        bookName: "ysl" ,  
        bookAuthor: "gucci", 
        bookPrice: 60,
    }

]

//מחרוזת json
let jsonString = JSON.stringify(books);
alert(jsonString);

const items = [
    {
        bookId: 123 ,
        bookName: "tvd",  
        bookAuthor: "jkr", 
        bookPrice: 29,
        
    },{
        bookId: 456 ,
        bookName: "starlight",  
        bookAuthor: "mk", 
        bookPrice: 30,
    },
    {
        bookId: 789 ,
        bookName: "ysl" ,  
        bookAuthor: "gucci", 
        bookPrice: 60,
    }

]
//לולאה מכוננת
for(const item of items){
    console.log(`properties of ${item.bookId}`)
    for(const property in item)
        console.log(`${property}   ${item[property]}`)
        console.log("----------------------------");
}