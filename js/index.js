/** @format */

const slides = document.querySelectorAll(".slides");

const nextBtn = document.querySelector(".nextBtn");

const prevBtn = document.querySelector(".prevBtn");

let auto = true;

let interv = 8000;

let slideInterv;

// Hero Slides
const nextButton = () => {
   const current = document.querySelector(".current");

   current.classList.remove("current");

   if (current.nextElementSibling) {
      current.nextElementSibling.classList.add("current");
   } else {
      slides[0].classList.add("current");
   }
   setTimeout(() => current.classList.remove("current"));
};

const prevButton = () => {
   const current = document.querySelector(".current");

   current.classList.remove("current");

   if (current.previousElementSibling) {
      current.previousElementSibling.classList.add("current");
   } else {
      slides[slides.length - 1].classList.add("current");
   }

   setTimeout(() => current.classList.remove("current"));
};

nextBtn.addEventListener("click", function () {
   if (auto) {
      clearInterval(slideInterv);
      slideInterv = setInterval(nextButton, interv);
   }
   nextButton();
});
prevBtn.addEventListener("click", function () {
   if (auto) {
      clearInterval(slideInterv);
      slideInterv = setInterval(nextButton, interv);
   }
   prevButton();
});

if (auto) {
   slideInterv = setInterval(nextButton, interv);
}


