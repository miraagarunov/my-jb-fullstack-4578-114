function validateEmail() {
    let emailInput = document.getElementById('emailInput');
    let errorSpan = document.getElementById('errorSpan');
    
    // אם תיבת האימייל ריקה
    if (emailInput.value === '') {
        // צבע גבול תיבת הטקסט באדום
        emailInput.classList.add('error');
        // הצגת הודעת השגיאה
        errorSpan.style.display = 'inline';
    } else {
        // אם האימייל לא ריק, הצגת האימייל ב-alert
        alert('your email is: ' + emailInput.value);
        // הסרת צבע האדום והסתרת הודעת השגיאה אם האימייל תקין
        emailInput.classList.remove('error');
        errorSpan.style.display = 'none';
    }
}