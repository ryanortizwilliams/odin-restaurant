import "bootstrap";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import Popper from "popper.js";
import "./style.css";

window.jQuery = $;
window.$ = $;
window.Popper = Popper;

//Content Div
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
});

//Nav-link tabs
const tabs = document.querySelectorAll(".nav-link");

//Get Initial Tab
fetch("tab1.html")
  .then((response) => response.text())
  .then((data) => {
    content.innerHTML = data;
  })
  .catch((error) => {
    console.error("Error fetching tab1.html:", error);
  });

//Functions
function changeTab(tabNumber) {
  content.innerHTML = "";
  fetch(`tab${tabNumber}.html`)
    .then((response) => response.text())
    .then((data) => {
      content.innerHTML = data;
    })
    .catch((error) => {
      console.error(`Error fetching tab${tabNumber}.html:`, error);
    });
}

function toggleActive(index) {
  //first turn off active on all
  tabs.forEach((tab) => {
    tab.classList.remove("active", "active-border");
  });
  //then turn on for index
  tabs[index].classList.add("active", "active-border");
}

//putting event listener on each tab
tabs.forEach((link, index) => {
  link.addEventListener("click", function () {
    changeTab(index + 1);
    //Toggle Navbar
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (
      navbarToggler.classList.contains("collpased") === false &&
      window.innerWidth < 992
    ) {
      navbarToggler.click();
    }
    toggleActive(index);
  });
});
