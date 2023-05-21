const slideButtonLeft = document.querySelector("#arrow-left");
const slideButtonRight = document.querySelector("#arrow-right");
const checkBox = document.querySelector('.choice_switcher .switch input');
const plansHeader = document.querySelector(".plans_header");
const plansHeaderBase = document.querySelector(".plans_header_base");
const plansHeaderBundle = document.querySelector(".plans_header_bundle");
const plansBase = document.querySelector(".base_plans");
const plansBundle = document.querySelector(".bundle_plans");

slideButtonLeft.addEventListener("click", () => {
  moviesContainer.scrollLeft -= 150;
});

slideButtonRight.addEventListener("click", () => {
  moviesContainer.scrollLeft += 150;
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