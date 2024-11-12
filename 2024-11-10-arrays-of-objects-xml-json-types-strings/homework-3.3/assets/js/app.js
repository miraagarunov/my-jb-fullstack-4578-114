const phoneNumber = prompt(`enter a phone number`)

let isPhoneNumber = true;

if(phoneNumber.length !==10) {
    isPhoneNumber = false
}else if(phoneNumber.substring('05')){
    isPhoneNumber = false
} else {
    for(const char of phoneNumber){
        if(isNaN(+char)){
            isPhoneNumber = false
            break
        }
    }
}

// }else if (isNaN(+phoneNumber)){
//     isPhoneNumber = false;
// }



document.write(`${phoneNumber} is ${isPhoneNumber ? '': 'not'} a phone number `);

// if(isPhoneNumber){
//     document.write(`${phoneNumber} is a phone number `);
// }else {
//     document.write(`${phoneNumber} is not a phone number `);
// }