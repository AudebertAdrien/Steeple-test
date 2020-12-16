import "../sass/main.scss";

const navigation = document.querySelector(".navigation");
const navigationToggle = document.querySelector(".navigation__toggle");
const swapingIcon = document.querySelector(".toggle-icon");
const navigationNav = document.querySelector(".navigation__nav");

navigationToggle.addEventListener("click", () => {
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
let clone = navigationList.cloneNode(true);
const navigationListDesktop = document.querySelector(
  ".navigation-list-desktop"
  );
  
window.onload = function () {
  if (window.innerWidth >= 900) {
    navigationListDesktop.appendChild(clone);
  }
};

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 900) {
    swapingIcon.src = "img/burger.svg";
    navigationListDesktop.appendChild(clone);
    navigation.style.backgroundColor = "#404040"
    navigationNav.style.display = "none";
  }
});


