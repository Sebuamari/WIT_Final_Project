document.addEventListener('DOMContentLoaded', function() {
  // fix plans header when user scrolls down
  window.addEventListener("scroll", function() {
    let rect = plansHeader.getBoundingClientRect();

    if (rect.top <= 0 ) {
      if (document.querySelector(".plans_footer_paragraph").getBoundingClientRect().top < 50 || document.querySelector(".plans_footer_paragraph").getBoundingClientRect().top > 1250 ) {
        plansHeader.classList.contains("fixed") ? plansHeader.classList.remove("fixed") : "";
      } else {
        !plansHeader.classList.contains("fixed") ? plansHeader.classList.add("fixed") : "";
      }
    } else if (document.querySelector("#plans").getBoundingClientRect().top > 0 && document.querySelector(".plans_footer_paragraph").getBoundingClientRect().top < 330) {
      plansHeader.classList.contains("fixed") ? plansHeader.classList.remove("fixed") : "";
    }
  });
})