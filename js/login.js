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

    function validateUser(e, email, password) {
        e.preventDefault();
        const emailFromLocalStorage = window.localStorage.getItem("email");
        const passwordFromLocalStorage = window.localStorage.getItem("password");

        if(emailFromLocalStorage === email.value && passwordFromLocalStorage === password.value) {
            window.location.href = "account.html";
        } else if (emailFromLocalStorage !== email.value || passwordFromLocalStorage !== password.value) {
            
        }
    }

    submitButton.addEventListener('click', (e) => validateUser(e, emailInput, passwordInput));
});