import "../sass/main.scss";

const navigation = document.querySelector(".navigation");
const navbarToggler = document.getElementById("navbar-toggler");
const togglerIcon = document.querySelector(".toggler-icon");
const navigationNav = document.getElementsByClassName("navigation__nav")[0];

navbarToggler.addEventListener("click", () => {
  if (navigationNav.style.display === "block") {
    togglerIcon.src = "img/burger.svg";
    navigationNav.style.display = "none";
  } else {
    navigation.style.backgroundColor =  "rgba(0, 0, 0, 0.25)";
    togglerIcon.src = "img/left-arrow.svg";
    navigationNav.style.display = "block";
  }
});

window.addEventListener('resize', (e) => {
  if (window.innerWidth >= 1200) {
    togglerIcon.src = "img/burger.svg";
    navigationNav.style.display = "none";
  }
})