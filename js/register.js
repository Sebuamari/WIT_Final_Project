document.addEventListener('DOMContentLoaded', function(){
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const nameInput = document.getElementById("name");
    const birtMonth = document.getElementById("month");
    const birthDay = document.getElementById("day");
    const birthYear = document.getElementById("year");
    const gender = document.getElementById("gender");
    const emailError = document.getElementById("error_email");
    const passwordError = document.getElementById("error_password");
    const nameError = document.getElementById("error_name");
    const monthError = document.getElementById("error_month");
    const dayError = document.getElementById("error_day");
    const yearError = document.getElementById("error_year");
    const genderError = document.getElementById("error_gender");
    const continueButton = document.getElementById("continue");

    const errors = {
        "emailNotValid": "Entered an invalid email",
        "name": "Required",
        "password": "Too weak",
        "month": "Required",
        "day": "Required",
        "year": "Required",
        "gender": "Required",
    }

    async function validateEmail(currentValue) {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(currentValue.length > 0 && emailRegex.test(currentValue)) {
            emailError.classList.remove('active');
            emailInput.classList.remove('error');
            return true;
        } else {
            emailError.innerHTML = errors["emailNotValid"];
            emailError.classList.add('active');
            emailInput.classList.add('error');
            return false;
        }
    }

    function validatePassword(currentValue) {
        const passwordRegex = /(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(currentValue.length > 0 && passwordRegex.test(currentValue)) {
            passwordError.classList.remove('active');
            passwordInput.classList.remove('error');
            return true;
        } else {
            passwordError.innerHTML = errors["password"];
            passwordError.classList.add('active');
            passwordInput.classList.add('error');
            return false;
        }
    }

    async function createAccount() {
        const emailValid = await validateEmail(emailInput.value);
        const passwordValid = validatePassword(passwordInput.value);
        const nameValid = (function(){
            if(nameInput.value.length > 0) {
                nameError.classList.remove('active');
                nameInput.classList.remove('error');
                return true;
            } else {
                nameError.innerHTML = errors["name"];
                nameError.classList.add('active');
                nameInput.classList.add('error');
                return false;
            }
        })();
        const monthValid = (function(){
            if(birtMonth.value !== "month") {
                monthError.classList.remove('active');
                birtMonth.classList.remove('error');
                return true;
            } else {
                monthError.innerHTML = errors["month"];
                monthError.classList.add('active');
                birtMonth.classList.add('error');
                return false;
            }
        })();
        const dayValid = (function(){
            if(birthDay.value !== "day") {
                dayError.classList.remove('active');
                birthDay.classList.remove('error');
                return true;
            } else {
                dayError.innerHTML = errors["day"];
                dayError.classList.add('active');
                birthDay.classList.add('error');
                return false;
            }
        })();
        const yearValid = (function(){
            if(birthYear.value !== "year") {
                yearError.classList.remove('active');
                birthYear.classList.remove('error');
                return true;
            } else {
                yearError.innerHTML = errors["year"];
                yearError.classList.add('active');
                birthYear.classList.add('error');
                return false;
            }
        })();
        const birthDate = birtMonth.value + "/" + birthDay.value + "/" + birthYear.value;
        const genderValid = (function(){
            if(gender.value !== "select") {
                genderError.classList.remove('active');
                gender.classList.remove('error');
                return true;
            } else {
                genderError.innerHTML = errors["day"];
                genderError.classList.add('active');
                gender.classList.add('error');
                return false;
            }
        })();
        const allDataEntered = emailValid && passwordValid && nameValid && monthValid && dayValid && yearValid && genderValid ? true : false;

        if(allDataEntered) {
            localStorage.setItem("email", emailInput.value);
            localStorage.setItem("password", passwordInput.value);
            localStorage.setItem("name", nameInput.value);
            localStorage.setItem("birthdate", birthDate);
            localStorage.setItem("gender", gender.value);

            window.location.href = "Registered.html";
        }
    }

    emailInput.addEventListener('input', (e) => validateEmail(e.target.value));
    passwordInput.addEventListener('input', (e) => validatePassword(e.target.value));
    continueButton.addEventListener('click', () => createAccount());
});