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
  ".navigation__list-desktop"
);
/* const navigationLinks = document.querySelectorAll(".navigation__link");
 */
navigationToggle.addEventListener("click", () => {
  if (navigationNav.style.display === "block") {
    swapingIcon.src = burgerIcon;
    navigationNav.style.display = "none";
    navigationToggle.setAttribute("aria-expanded", "false");
  } else {
    navigationToggle.setAttribute("aria-expanded", "true");
    navigation.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    swapingIcon.src = arrowIcon;
    navigationNav.style.display = "block";
  }
});

function containActive(){
  const itemActive = document.getElementsByClassName("active")
  return itemActive;
}

for (const item of navigationItems) {
  item.addEventListener("click", () => {
    navigationNav.style.display = "none";
    swapingIcon.src = burgerIcon;

    const isActive = containActive();
    isActive[0].classList.remove("active")
    item.classList.add("active");
  });
}

window.onload = function () {
  if (window.innerWidth >= 900) {
    navigationListDesktop.appendChild(navigationList);
  }
};

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 900) {
    swapingIcon.src = burgerIcon;
    navigationListDesktop.appendChild(navigationList);
    navigation.style.backgroundColor = "#404040";
    navigationNav.style.display = "none";
  } else {
    navigationNav.appendChild(navigationList);
  }
});
