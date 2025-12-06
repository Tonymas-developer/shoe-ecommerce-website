const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// CREATE DOTS
slideItems.forEach((_, i) => {
  const btn = document.createElement("button");
  if (i === 0) btn.classList.add("active");
  dotsContainer.appendChild(btn);

  btn.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

const dots = dotsContainer.querySelectorAll("button");

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

next.addEventListener("click", () => {
  index = (index + 1) % slideItems.length;
  updateSlider();
});

prev.addEventListener("click", () => {
  index = (index - 1 + slideItems.length) % slideItems.length;
  updateSlider();
});
