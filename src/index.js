import "../sass/main.scss";
import './img/logo.svg';
import './img/burger.svg';
import './img/left-arrow.svg';

const navigation = document.querySelector(".navigation");

const navigationToggle = document.querySelector(".navigation__toggle");
const swapingIcon = document.querySelector(".toggle-icon");

const navigationNav = document.querySelector(".navigation__nav");
const navigationList = document.querySelector(".navigation__list");
const navigationItems = document.querySelectorAll(".navigation__item");
const navigationListDesktop = document.querySelector(
  ".navigation__list-desktop"
);

navigationToggle.addEventListener("click", () => {
  if (navigationNav.style.display === "block") {
    swapingIcon.src = "./img/burger.svg";
    navigationNav.style.display = "none";
    navigationToggle.setAttribute("aria-expanded", "false");
  } else {
    navigationToggle.setAttribute("aria-expanded", "true");
    navigation.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    swapingIcon.src = "./img/left-arrow.svg";
    navigationNav.style.display = "block";
  }
});

for (const item of navigationItems) {
  item.addEventListener("click", () => {
    navigationNav.style.display = "none";
    swapingIcon.src = "./img/burger.svg";
  });
}

window.onload = function () {
  if (window.innerWidth >= 900) {
    navigationListDesktop.appendChild(navigationList);
  }
};

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 900) {
    swapingIcon.src = "./img/burger.svg";
    navigationListDesktop.appendChild(navigationList);
    navigation.style.backgroundColor = "#404040";
    navigationNav.style.display = "none";
  } else {
    navigationNav.appendChild(navigationList);
  }
});
