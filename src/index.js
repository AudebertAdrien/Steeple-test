import "../sass/main.scss";

const navigation = document.querySelector(".navigation");

const navigationToggle = document.querySelector(".navigation__toggle");
const swapingIcon = document.querySelector(".toggle-icon");

const navigationNav = document.querySelector(".navigation__nav");
const navigationList = document.querySelector(".navigation__list");
const navigationItems = document.querySelectorAll(".navigation__item");

navigationToggle.addEventListener("click", () => {
  if (navigationNav.style.display === "block") {
    swapingIcon.src = "img/burger.svg";
    navigationNav.style.display = "none";
    navigationToggle.setAttribute("aria-expanded", "false");
  } else {
    navigationToggle.setAttribute("aria-expanded", "true");
    navigation.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    swapingIcon.src = "img/left-arrow.svg";
    navigationNav.style.display = "block";
  }
});

let clone = navigationList.cloneNode(true);
const navigationListDesktop = document.querySelector(
  ".navigation-list-desktop"
);

for (const link of navigationItems) {
  link.addEventListener("click", () => {
    console.log("test");
    navigationNav.style.display = "none";
    swapingIcon.src = "img/burger.svg";
  });
}

window.onload = function () {
  if (window.innerWidth >= 900) {
    navigationListDesktop.appendChild(clone);
  }
};

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 900) {
    swapingIcon.src = "img/burger.svg";
    navigationListDesktop.appendChild(clone);
    navigation.style.backgroundColor = "#404040";
    navigationNav.style.display = "none";
  }
});
