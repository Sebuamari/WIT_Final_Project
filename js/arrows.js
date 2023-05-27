const addsOnButton = document.querySelector(".adds_on_button");
const addsOn = document.querySelector(".adds_on");
const browse = document.querySelector(".browse");
const browseArrow = document.querySelector("#browse_arrow");
const help = document.querySelector(".help");
const helpArrow = document.querySelector("#help_arrow");
const aboutUs = document.querySelector(".about_us");
const aboutUsArrow = document.querySelector("#about_us_arrow");
const links = document.querySelector(".links");
const helpLinks = document.querySelector(".help_links")
const aboutUsLinks = document.querySelector(".about_us_links");

addsOnButton.addEventListener("click", function() {
    addsOn.classList.toggle("shown");
    document.querySelector('.adds_on_button').innerHTML = addsOn.classList.contains("shown") ? `Hide Add-ons<i class="arrow transformed fa-solid fa-angle-down fa-2xl" style="color: #ffffff;"></i>` : `Show Add-ons<i class="arrow fa-solid fa-angle-down fa-2xl" style="color: #ffffff;"></i>`;
});

browse.addEventListener("click", function() {
    browseArrow.classList.toggle("transformed");
    links.classList.toggle("shown");
});

help.addEventListener("click", function() {
    helpArrow.classList.toggle("transformed");
    helpLinks.classList.toggle("shown");
});

aboutUs.addEventListener("click", function() {
    aboutUsArrow.classList.toggle("transformed");
    aboutUsLinks.classList.toggle("shown");
});