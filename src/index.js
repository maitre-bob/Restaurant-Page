import "./style.css";

import loadHome from "./Home.js";
import loadMenu from "./menu.js";

// Charger l'accueil par défaut au chargement
loadHome();

// Sélection des boutons
const btnAccueil = document.getElementById("btn-accueil");
const btnMenu = document.getElementById("btn-menu");

// Ajouter les listeners
btnAccueil.addEventListener("click", () => {
  loadHome();
});

btnMenu.addEventListener("click", () => {
  loadMenu();
});
