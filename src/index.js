import "./style.css";

import loadHome from "./Home.js";
loadHome();

import loadMenu from "./menu.js";

const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", () => {
  loadMenu();
});

