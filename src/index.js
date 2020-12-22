import "../sass/main.scss";
import burgerIcon from "./img/burger.svg";
import arrowIcon from "./img/left-arrow.svg";

const navigation = document.querySelector(".navigation");

const navigationToggle = document.querySelector(".navigation__toggle");
const swapingIcon = document.querySelector(".toggle-icon");

const navigationNav = document.querySelector(".navigation__nav");
const navigationList = document.querySelector(".navigation__list");
const navigationItems = document.querySelectorAll(".navigation__item");

const navigationListDesktop = document.querySelector(
  ".navigation__list--desktop"
);

navigationToggle.addEventListener("click", () => {
  if (!navigationNav.hasAttribute("hidden")) {
    swapingIcon.src = burgerIcon;
    navigationToggle.setAttribute("aria-expanded", "false");
    navigationNav.setAttribute("hidden", true);
  } else {
    navigationNav.removeAttribute("hidden");
    navigationToggle.setAttribute("aria-expanded", "true");
    navigation.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    swapingIcon.src = arrowIcon;
  }
});

for (const item of navigationItems) {
  item.addEventListener("click", () => {
    navigationNav.setAttribute("hidden", true);
    swapingIcon.src = burgerIcon;

    const isActive = document.getElementsByClassName("active");
    console.log(isActive)
    isActive[0].classList.remove("active");
    item.classList.add("active");
  });
}

window.onload = function () {
  if (window.innerWidth >= 900) {
    navigationListDesktop.appendChild(navigationList);

    navigationListDesktop.removeAttribute("hidden");
    navigationToggle.setAttribute("hidden", true);
  }
};

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    swapingIcon.src = burgerIcon;
    navigationListDesktop.appendChild(navigationList);
    navigation.style.backgroundColor = "#404040";

    navigationToggle.setAttribute("hidden", true);
    navigationListDesktop.removeAttribute("hidden");
    navigationNav.setAttribute("hidden", true);
  } else {
    navigationNav.appendChild(navigationList);

    navigationToggle.removeAttribute("hidden");
    navigationListDesktop.setAttribute("hidden", true);
  }
});
