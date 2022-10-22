// Varible

const accordion = document.querySelectorAll(".answer");

let accordionAll = Array.from(accordion);

accordionAll.forEach((arr) => {
  arr.parentElement.addEventListener("click", function () {
    arr.classList.toggle("rem-ans");
  });
});
