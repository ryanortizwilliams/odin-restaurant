import "bootstrap";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import Popper from "popper.js";
import "./style.css";

window.jQuery = $;
window.$ = $;
window.Popper = Popper;

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
