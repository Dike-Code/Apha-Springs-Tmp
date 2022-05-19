/** @format */

const nav = document.querySelector(".navbar");

const up = document.querySelectorAll(".slideUp");

const right = document.querySelectorAll(".slideRight");

const counter = document.querySelectorAll(".count");

const aboutHero = document.querySelector(".aboutHero");

const serviceHero = document.querySelector(".serviceHero");

const accordin = document.querySelectorAll(".contentBox");

const year = document.querySelector("#year");

const label1 = document.querySelector(".lab1");

const label2 = document.querySelector(".lab2");

const mobMenu = document.querySelector(".toggle");

const bar = document.querySelectorAll(".bar");

const navBar = document.querySelector(".navigation");

let speed = 600;

mobMenu.addEventListener("click", (e) => {
   navBar.classList.toggle("show");
   bar.forEach((bars) => {
      bars.classList.toggle("toggleW");
   });
});

window.addEventListener("scroll", function () {
   // sticky navbar
   nav.classList.toggle("fixed", window.scrollY > 0);

   // Animations
   up.forEach((ups) => {
      let u = ups.getBoundingClientRect().top;
      let uHeight = window.innerHeight;

      if (u < uHeight) {
         ups.classList.add("show");
      } else {
         ups.classList.remove("show");
      }
   });

   right.forEach((right) => {
      let r = right.getBoundingClientRect().top;
      let rightH = window.innerHeight;

      if (r < rightH) {
         right.classList.add("show");
      } else {
         right.classList.remove("show");
      }
   });

   // Counter functionality
   counter.forEach((counts) => {
      let cc = counts.getBoundingClientRect().top;
      let countHeight = window.innerHeight;

      if (cc < countHeight) {
         const updateCount = () => {
            let get = +counts.getAttribute("data-target");
            let count = +counts.innerText;

            let init = get / speed;

            if (count < get) {
               counts.innerHTML = Math.ceil(count + init);
               setTimeout(updateCount, 5);
            } else {
               counts.innerText = get + "+";
            }
         };
         updateCount();
      } else {
         counts.innerText = "";
      }
   });
});

window.addEventListener("DOMContentLoaded", () => {
   aboutHero.style.opacity = "1";
});

window.addEventListener("DOMContentLoaded", () => {
   serviceHero.style.opacity = "1";
});

accordin.forEach((accordins) => {
   accordins.addEventListener("click", function () {
      this.classList.toggle("active");
      progress.classList.toggle("a");
   });
});

label1.addEventListener("click", function () {
   label1.classList.toggle("active");
});
label2.addEventListener("click", function () {
   label2.classList.toggle("active");
});

// Year DropDown
(function () {
   let year_satart = 1940;
   let year_end = new Date().getFullYear(); // current year
   let year_selected = "Year";

   let option = "";
   option = "<option>Year</option>"; // first option

   for (let i = year_satart; i <= year_end; i++) {
      let selected = i === year_selected ? " selected" : "";
      option += '<option value="' + i + '"' + selected + ">" + i + "</option>";
   }

   year.innerHTML = option;
})();
