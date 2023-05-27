document.addEventListener('DOMContentLoaded', function() {
  // fix plans header when user scrolls down
  window.addEventListener("scroll", function() {
    let rect = plansHeader.getBoundingClientRect();

    if (rect.top <= 0 ) {
      plansHeader.classList.add("fixed");
      if (document.querySelector(".plans_footer_paragraph").getBoundingClientRect().top < 50 || document.querySelector(".plans_footer_paragraph").getBoundingClientRect().top > 1250 ) {
        plansHeader.classList.remove("fixed");
      }
    } else if (document.querySelector("#plans").getBoundingClientRect().top > 0 && document.querySelector(".plans_footer_paragraph").getBoundingClientRect().top < 330) {
      plansHeader.classList.remove("fixed");
    }
  });
})