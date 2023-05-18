const slideButtonLeft = document.querySelector("#arrow-left");
const slideButtonRight = document.querySelector("#arrow-right");

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