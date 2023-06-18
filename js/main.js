let btnNext = document.getElementById("btn_Next");
let btnPrevious = document.getElementById("btn_Previous");

let id = 1;
let img = document.querySelector("#slide-img");
let arrayofimages = [
  "/assests/about-us-1.jpg",
  "/assests/about-us-2.jpg",
  "/assests/about-us-3.jpg",
  "/assests/about-us-4.jpg",
];
let currentIndex = 0;
btnNext.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= arrayofimages.length) {
    currentIndex = 0;
    img.src = arrayofimages[currentIndex];
  } else {
    img.src = arrayofimages[currentIndex];
  }
});
btnPrevious.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = arrayofimages.length - 1;
    img.src = arrayofimages[currentIndex];
  } else {
    img.src = arrayofimages[currentIndex];
  }
});

