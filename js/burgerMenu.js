let burgerButton = document.querySelector(".burger-button");
let burgerButtonLine = document.querySelectorAll(".burger-button-line");
let mobileMenu = document.querySelector(".mobile-menu");

burgerButton.addEventListener("click", function() {
    burgerButtonLine.forEach((line)  => line.classList.toggle("crossed"));
    mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("no_scroll");
});