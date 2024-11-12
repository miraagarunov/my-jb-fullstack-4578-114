function printMax(n) {
   for(let i=1; i<n; i++){
    document.write('* ')
   }
}
function printsquare(m){
for(let i=0; i<m; i++){
       printMax(m)
       document.write('<br>') 
}
}

printMax(5)
document.write("<hr>")
printMax(8)

printsquare(5)
document.write("<hr>")
printsquare(8)
document.write("<hr>")
