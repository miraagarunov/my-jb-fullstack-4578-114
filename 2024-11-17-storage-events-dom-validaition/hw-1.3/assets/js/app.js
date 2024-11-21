function button() {
   let email= document.getElementById("email").value;

   if(email){
        alert(`thats your email ${email}`);
   }else if(!email) {
        alert(`error enter email address`);
        }
}


