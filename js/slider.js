const slideButtonLeft = document.querySelector("#arrow-left");
const slideButtonRight = document.querySelector("#arrow-right");
const checkBox = document.querySelector('.choice_switcher .switch input');
const plansHeader = document.querySelector(".plans_header");
const plansHeaderBase = document.querySelector(".plans_header_base");
const plansHeaderBundle = document.querySelector(".plans_header_bundle");
const plansBase = document.querySelector(".base_plans");
const plansBundle = document.querySelector(".bundle_plans");

let slideOffset = 0;
const slideAmount = 300;

slideButtonLeft.addEventListener("click", () => {
  slideOffset -= slideAmount;
  moviesContainer.style.transform = `translateX(-${slideOffset}px)`;
});

slideButtonRight.addEventListener("click", () => {
  slideOffset += slideAmount;
  moviesContainer.style.transform = `translateX(-${slideOffset}px)`;
});

document.querySelector("#arrow-down").addEventListener("click", () => {
  document.querySelector("#about_hulu").scrollIntoView({ behavior: 'smooth' })
});

checkBox.addEventListener("change", () => {
  plansHeader.classList.toggle("bundle");
  plansHeaderBase.classList.toggle("active");
  plansHeaderBundle.classList.toggle("active");
  plansBase.classList.toggle("active");
  plansBundle.classList.toggle("active");
});