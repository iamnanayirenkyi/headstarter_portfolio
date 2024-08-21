navBar = document.querySelector("nav");

window.onscroll = function () {
  if (window.scrollY > 1) {
    navBar.style.background = "#78c5e9";
  } else {
    navBar.style.background = "transparent";
  }
};
