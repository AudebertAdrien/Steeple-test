import "../sass/main.scss";

const navigation = document.querySelector(".navigation");
const navbarToggler = document.querySelector(".navigation__toggle");
const navigationNav = document.querySelector(".navigation__nav");
const swapingIcon = document.querySelector(".toggle-icon");

navbarToggler.addEventListener("click", () => {
  if (navigationNav.style.display === "block") {
    swapingIcon.src = "img/burger.svg";
    navigationNav.style.display = "none";
  } else {
    navigation.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    swapingIcon.src = "img/left-arrow.svg";
    navigationNav.style.display = "block";
  }
});

const navigationList = document.querySelector(".navigation__list");
const navigationListDesktop = document.querySelector(
  ".navigation-list-desktop"
);

window.onload = function () {
  if (window.innerWidth >= 900) {
    navigationListDesktop.insertAdjacentElement("afterbegin", navigationList);
  }
};

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    navigationListDesktop.insertAdjacentElement("afterbegin", navigationList);
  }
  if ((navigationNav.style.display = "block")) {
    navigationNav.style.display = "none";
  }
});
