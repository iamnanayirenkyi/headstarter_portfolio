navBar = document.querySelector("nav");

window.onscroll = function () {
  if (window.scrollY > 1) {
    navBar.style.background = "#fed0d7";
  } else {
    navBar.style.background = "transparent";
  }
};
