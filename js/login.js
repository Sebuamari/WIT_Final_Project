document.addEventListener('DOMContentLoaded', function(){
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("error_email");
    const passwordError = document.getElementById("error_password");
    const submitButton = document.getElementById("submit");

    const errors = {
        "emailNotValid": "Entered an invalid email",
        "noUser": "No User found with this email",
        "password": "Incorrect password"
    }

    function validateEmail(e) {
        let currentValue = e.target.value;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(currentValue.length > 0 && !currentValue.match(emailRegex)) {
            emailError.classList.add('active');
        } else {
            emailError.classList.remove('active');
        }
    }

    function validatePassword(e) {
        let currentValue = e.target.value;
        const passwordRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(currentValue.length > 0 && !currentValue.match(passwordRegex)) {
            passwordError.classList.add('active');
        } else {
            passwordError.classList.remove('active');
        }
    }

    function validateUser(email, password) {
        const emailFromLocalStorage = window.localStorage.getItem("email");
        const passwordFromLocalStorage = window.localStorage.getItem("password");

        if(emailFromLocalStorage === email.target.value && passwordFromLocalStorage === password.target.value) {
            console.log("loged in"); 
        } else if (emailFromLocalStorage !== email.target.value || passwordFromLocalStorage !== password.target.value) {
            console.log("incorrect")
        }
    }

    emailInput.addEventListener('input', (e) => validateEmail(e));
    passwordInput.addEventListener('input', (e) => validatePassword(e));
    submitButton.addEventListener('click', () => validateUser(emailInput, passwordInput, submitButton));
});