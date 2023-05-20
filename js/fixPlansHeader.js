// fix plans header when user scrolls down
window.addEventListener("scroll", function() {
  let rect = plansHeader.getBoundingClientRect();

  if (rect.top < 0) {
    plansHeader.classList.add("fixed");
  } else if (document.querySelector("#plans").getBoundingClientRect().top > 0) {
    plansHeader.classList.remove("fixed");
  }
});