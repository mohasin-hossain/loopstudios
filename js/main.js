const hamburger = document.querySelector(".header__hamburger");
const navLinks = document.querySelectorAll(".nav__link");
const navList = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    hamburger.classList.remove("active");
  })
);
