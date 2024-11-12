const clothes = [{
    type: 'satin',
    size: 'xs', 
    price: 90,
    color: 'pink'

},{
    type: 'cotton',
    size: 's', 
    price: 80,
    color: 'red'
},{
    type: 'linen',
    size: 'm', 
    price: 70,
    color: 'navy'
},{
    type: 'viscose',
    size: 'l', 
    price: 60,
    color: 'blue'
},{
    type: 'lycra',
    size: 'xl', 
    price: 50,
    color: 'white'
}

]
for(const clothe of clothes){
    console.log(`kinds of fabrics ${clothe.type}`)
    for(const property in clothe)
        console.log(`${property}  ${clothe[property]} `)
        console.log("----------------------------");
}


