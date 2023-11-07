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

fetch("tab1.html")
  .then((response) => response.text())
  .then((data) => {
    content.innerHTML = data;
  })
  .catch((error) => {
    console.error("Error fetching tab1.html:", error);
  });

//TODO: Create tabbing behaviour
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
//get elements for each nav-link
const tabs = document.querySelectorAll(".nav-link");
//put event listener on each one to tab
tabs.forEach((link, index) => {
  link.addEventListener("click", changeTab.bind(null, index + 1));
});
