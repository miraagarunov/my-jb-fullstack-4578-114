function printMaxNumber (max){
   let maxi = 0;
       for(const cell of max) {
           maxi = cell > maxi ? cell : maxi
       }
       document.write(maxi)
       
}

//שני מערכים שונים
const numArray = [1,2,3,4,5,6,7.50,49,20]

const randomArray = [45,50,33,47,56,62,73]

//הצגת הפונקציה
printMaxNumber(numArray)
document.write('<br>')
printMaxNumber(randomArray)

