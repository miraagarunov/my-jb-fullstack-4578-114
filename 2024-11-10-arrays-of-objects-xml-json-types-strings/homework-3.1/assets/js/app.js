const websiteAddress = prompt('enter a website address')

/*
ksp.co.il => .co.il
ivory.com => .com
latet.org.il => .org.il
w3c.org => .org
*/

const indexOfFirstDot = websiteAddress.indexOf('.')
const suffix = websiteAddress.substring(indexOfFirstDot)

if (websiteAddress.endsWith('.co.il') || websiteAddress.endsWith('.org.il'))

alert(suffix)

// let url = prompt("Please enter a website URL:");

// // פונקציה לחילוץ סיומת מהכתובת
// function getDomainExtension(url) {
//   // חיפוש אחרי הסיומת
//   let match = url.match(/\.(com|co\.il|org|org\.il|gov\.il)$/); 
//   return match ? match[0] : null; // אם נמצאה סיומת, מחזירים אותה, אחרת null
// }

// // חילוץ הסיומת מהכתובת
// let extension = getDomainExtension(url);

// // הצגת הסיומת
// if (extension) {
//   alert("The domain extension is: " + extension);
// } else {
//   alert("No valid extension found.");
// }

// // הצגת הודעה על פי הסיומת
// if (extension === ".com") {
//   alert("This is an international commercial website (.com).");
// } else if (extension === ".org") {
//   alert("This is an international organizational website (.org).");
// } else if (extension === ".co.il") {
//   alert("This is an Israeli commercial website (.co.il).");
// } else if (extension === ".org.il") {
//   alert("This is an Israeli organizational website (.org.il).");
// } else if (extension === ".gov.il") {
//   alert("This is an Israeli government website (.gov.il).");
// } else {
//   alert("This is a website with a different extension.");
// }