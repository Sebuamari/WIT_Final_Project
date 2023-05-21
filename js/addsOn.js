const addsOnButton = document.querySelector(".adds_on_button");
const addsOn = document.querySelector(".adds_on");

addsOnButton.addEventListener("click", function() {
    addsOn.classList.toggle("shown");
    addsOnButton.querySelector(".arrow").classList.toggle("transformed");
});