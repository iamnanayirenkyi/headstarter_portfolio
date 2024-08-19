navBar = document.querySelector("nav");

window.onscroll = function () {
  if (window.scrollY > 1) {
    navBar.style.background = "#262f4a";
  } else {
    navBar.style.background = "transparent";
  }
};

navText = document.getElementsByClassName("container");
