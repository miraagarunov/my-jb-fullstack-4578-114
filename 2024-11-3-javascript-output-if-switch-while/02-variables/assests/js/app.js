// naming conventions
//lets say i need a variable to hold value for a "family name"
// family_name (all lower case, _ between words, used )in python,php,sql)
// FamilyName (each word starts whit a capital letter)
// JavaScript uses this for variable names; 
// familyName (each word except the first starts whit a capital letter)




// historic way of using variables 
var companyName = 'KSP';

// starting 2015, usage of var is wrong
// don't use var
let aVaribleThatIMayWantToChange;
// and then assing (assing= השמה)
aVaribleThatIMayWantToChange = 1; 

// or, we can declare and assign in the same command
aVaribleThatIMayWantToChange += 3; 

// however we declared the '"let" variable, we can always change it;
aVaribleThatIMayWantToChange += 3;

// sometimes, I want to protect a variable from modifications.
const aVaribleThatNeverChanges = 10;

document.write(companyName);
// using \n in document.write won't work for us
// document.write("\n") ;
document.write("<br>");
document.write(companyName);

alert(companyName + "\n" + companyName);
console.log(companyName + "\n" + companyName);

// KSP is a great company, everybody likes KSP, KSP have the best products
document.write("KSP is a great company, everybody likes KSP, KSP have the best products");
document.write("<br>" + companyName + "is the best company, everybody likes" + companyName + ", " + companyName + "have the best products") ;
document.write('i can also use these גרש to specify strings ')
alert(`i can also
     use back tick`)

document.write("<br>" + companyName + "is a great company, " )

document.write("<br>")
