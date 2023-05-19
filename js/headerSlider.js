const slide = document.querySelector(".slide");
const headerItemOne = document.querySelector(".header_item_one");
const headerItemTwo = document.querySelector(".header_item_two");
const headerItemThree = document.querySelector(".header_item_three");
const backgroundOne = document.querySelector("#background-1");
const backgroundTwo = document.querySelector("#background-2");
const backgroundThree = document.querySelector("#background-3"); 
const innerSectionOne = document.querySelector(".inner_section_one");
const innerSectionTwo = document.querySelector(".inner_section_two");
const innerSectionThree = document.querySelector(".inner_section_three");

// activate first inner section
headerItemOne.addEventListener("click", (e) => {
  headerItemOne.classList.add("active");

  // change background classes
  backgroundOne.classList.remove("hide");
  backgroundTwo.classList.add("hide");
  backgroundThree.classList.add("hide");
  backgroundOne.classList.add("active");

  // change section classes
  innerSectionOne.classList.remove("hide");
  innerSectionTwo.classList.add("hide");
  innerSectionThree.classList.add("hide");

  let slideWidth = 83;
  slide.style.transform = `translateX(0px)`;
  slide.style.width = slideWidth + "px";
});

// activate second inner section
headerItemTwo.addEventListener("click", (e) => {
  headerItemTwo.classList.add("active");

  // change background classes
  backgroundTwo.classList.remove("hide");
  backgroundOne.classList.add("hide");
  backgroundThree.classList.add("hide");
  backgroundTwo.classList.add("active");

  // change section classes
  innerSectionOne.classList.add("hide");
  innerSectionTwo.classList.remove("hide");
  innerSectionThree.classList.add("hide");

  let slideWidth = 110;
  let slideOffset = headerItemOne.classList.contains("active") ? 123 : headerItemThree.classList.contains("active") ? -135 : 0;
  slide.style.transform = `translateX(${slideOffset}px)`;
  slide.style.width = slideWidth + "px";
});

// activate third inner section
headerItemThree.addEventListener("click", (e) => {
  headerItemThree.classList.add("active");

  // change background classes
  backgroundThree.classList.remove("hide");
  backgroundOne.classList.add("hide");
  backgroundTwo.classList.add("hide");
  backgroundThree.classList.add("active");

  // change section classes
  innerSectionOne.classList.add("hide");
  innerSectionTwo.classList.add("hide");
  innerSectionThree.classList.remove("hide");

  let slideWidth = 110;
  let slideOffset = headerItemOne.classList.contains("active") ? 275 : headerItemThree.classList.contains("active") ? 140 : 0;
  slide.style.transform = `translateX(${slideOffset}px)`;
  slide.style.width = slideWidth + "px";
});