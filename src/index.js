import "../sass/main.scss";

const navbarToggler = document.getElementById("navbar-toggler");
const togglerIcon = document.querySelector(".toggler-icon");
const navigationNav = document.getElementsByClassName("navigation__nav")[0];

navbarToggler.addEventListener("click", () => {
  if (navigationNav.style.display === "block") {
    togglerIcon.src = "img/burger.svg";
    navigationNav.style.display = "none";
  } else {
    togglerIcon.src = "img/left-arrow.svg";
    navigationNav.style.display = "block";
  }
});
