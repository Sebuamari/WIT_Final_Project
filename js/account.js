document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("your_email").innerHTML = localStorage.getItem("email");
    document.getElementById("your_birthdate").innerHTML = localStorage.getItem("birthdate");
    document.getElementById("your_gender").innerHTML = localStorage.getItem("gender");
});